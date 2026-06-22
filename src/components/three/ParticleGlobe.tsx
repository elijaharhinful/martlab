'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Line } from '@react-three/drei';
import * as THREE from 'three';

const GOLD = '#D4AF37';
const GOLD_LIGHT = '#F3E5AB';
const MAP_SRC = '/earth-equirect.jpg';
const DEG2RAD = Math.PI / 180;

/** Where the company is based — arcs originate here. */
const ORIGIN: [number, number] = [7.95, -1.03]; // Ghana

/** Cities the network reaches, as [lat, lon]. */
const DESTINATIONS: [number, number][] = [
  [51.51, -0.13], // London
  [40.71, -74.01], // New York
  [43.65, -79.38], // Toronto
  [-23.55, -46.63], // São Paulo
  [25.2, 55.27], // Dubai
  [1.35, 103.82], // Singapore
  [31.23, 121.47], // Shanghai
  [28.61, 77.21], // New Delhi
  [-26.2, 28.04], // Johannesburg
  [-1.29, 36.82], // Nairobi
  [-33.87, 151.21], // Sydney
  [55.75, 37.62], // Moscow
];

/** Convert geographic lat/lon to a point on the globe (matches the dot sampler). */
function latLonToVec3(lat: number, lon: number, radius: number) {
  const latR = lat * DEG2RAD;
  const lonR = lon * DEG2RAD;
  const cosLat = Math.cos(latR);
  return new THREE.Vector3(
    radius * cosLat * Math.cos(lonR),
    radius * Math.sin(latR),
    -radius * cosLat * Math.sin(lonR)
  );
}

type GlobeProps = {
  /** Sphere radius in world units. */
  radius?: number;
  /** Spacing between sampled latitude rows, in degrees (smaller = denser). */
  latStepDeg?: number;
};

/**
 * Samples an equirectangular world map and returns one sphere position per
 * land pixel, so the particle cloud reads as the Earth's continents.
 *
 * Land vs ocean is decided by the blue channel: oceans in this relief map are
 * blue-dominant, so a pixel is treated as land when blue is *not* clearly the
 * brightest channel (this also keeps ice sheets like Antarctica/Greenland).
 */
function useLandPositions(radius: number, latStepDeg: number) {
  const [positions, setPositions] = useState<Float32Array | null>(null);

  useEffect(() => {
    let cancelled = false;
    const img = new Image();
    img.src = MAP_SRC;

    img.onload = () => {
      const canvas = document.createElement('canvas');
      const w = (canvas.width = img.naturalWidth);
      const h = (canvas.height = img.naturalHeight);
      const ctx = canvas.getContext('2d', { willReadFrequently: true });
      if (!ctx) return;
      ctx.drawImage(img, 0, 0);
      const { data } = ctx.getImageData(0, 0, w, h);

      const pts: number[] = [];
      for (let lat = -85; lat <= 85; lat += latStepDeg) {
        // Even spacing on the sphere: fewer longitude samples near the poles.
        const lonCount = Math.max(
          1,
          Math.round((360 / latStepDeg) * Math.cos(lat * DEG2RAD))
        );
        for (let i = 0; i < lonCount; i++) {
          const lon = -180 + (360 * i) / lonCount;

          // Map lat/lon -> source pixel.
          const px = Math.min(w - 1, Math.floor(((lon + 180) / 360) * w));
          const py = Math.min(h - 1, Math.floor(((90 - lat) / 180) * h));
          const idx = (py * w + px) * 4;
          const r = data[idx];
          const g = data[idx + 1];
          const b = data[idx + 2];

          // Ocean = blue clearly dominant. Everything else is land.
          const isOcean = b > r + 8 && b > g + 8;
          if (isOcean) continue;

          // lat/lon -> point on sphere.
          const latR = lat * DEG2RAD;
          const lonR = lon * DEG2RAD;
          const cosLat = Math.cos(latR);
          pts.push(
            radius * cosLat * Math.cos(lonR),
            radius * Math.sin(latR),
            -radius * cosLat * Math.sin(lonR)
          );
        }
      }

      if (!cancelled) setPositions(new Float32Array(pts));
    };

    return () => {
      cancelled = true;
    };
  }, [radius, latStepDeg]);

  return positions;
}

/**
 * Great-circle-style arcs from the origin (Ghana) out to each destination,
 * each bowing above the surface, with a glowing pulse travelling along it to
 * suggest live network/service flow.
 */
function NetworkArcs({ radius }: { radius: number }) {
  const origin = useMemo(() => latLonToVec3(ORIGIN[0], ORIGIN[1], radius), [radius]);

  const arcs = useMemo(() => {
    return DESTINATIONS.map(([lat, lon], i) => {
      const end = latLonToVec3(lat, lon, radius);
      const dist = origin.distanceTo(end);
      // Lift the control point outward along the chord's midpoint direction;
      // longer arcs bow higher.
      const mid = origin
        .clone()
        .add(end)
        .multiplyScalar(0.5)
        .normalize()
        .multiplyScalar(radius * (1 + dist * 0.18));
      const curve = new THREE.QuadraticBezierCurve3(origin.clone(), mid, end);
      return {
        curve,
        points: curve.getPoints(64),
        end,
        phase: i / DESTINATIONS.length, // stagger the pulses
      };
    });
  }, [origin, radius]);

  const pulses = useRef<(THREE.Mesh | null)[]>([]);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    for (let i = 0; i < arcs.length; i++) {
      const mesh = pulses.current[i];
      if (!mesh) continue;
      const u = (t * 0.16 + arcs[i].phase) % 1;
      arcs[i].curve.getPointAt(u, mesh.position);
      // Fade/shrink the pulse at the arc's ends.
      const s = Math.sin(u * Math.PI);
      mesh.scale.setScalar(0.35 + s * 1.1);
    }
  });

  return (
    <group>
      {/* Origin marker (Ghana) */}
      <mesh position={origin}>
        <sphereGeometry args={[0.055, 16, 16]} />
        <meshBasicMaterial color={GOLD_LIGHT} />
      </mesh>

      {arcs.map((arc, i) => (
        <group key={i}>
          <Line
            points={arc.points}
            color={GOLD}
            lineWidth={1}
            transparent
            opacity={0.4}
          />
          {/* Destination marker */}
          <mesh position={arc.end}>
            <sphereGeometry args={[0.025, 10, 10]} />
            <meshBasicMaterial color={GOLD} />
          </mesh>
          {/* Travelling pulse */}
          <mesh ref={(el) => { pulses.current[i] = el; }}>
            <sphereGeometry args={[0.03, 8, 8]} />
            <meshBasicMaterial
              color={GOLD_LIGHT}
              transparent
              opacity={0.95}
              blending={THREE.AdditiveBlending}
              depthWrite={false}
            />
          </mesh>
        </group>
      ))}
    </group>
  );
}

function Globe({ radius = 2.1, latStepDeg = 1.6 }: GlobeProps) {
  const positions = useLandPositions(radius, latStepDeg);

  return (
    // Static ~23.5° axial tilt; the camera (OrbitControls) handles rotation.
    <group rotation={[0, 0, 0.41]}>
      {/* Continent particles */}
      {positions && (
        <points key={positions.length}>
          <bufferGeometry>
            <bufferAttribute attach="attributes-position" args={[positions, 3]} />
          </bufferGeometry>
          <pointsMaterial
            size={0.028}
            sizeAttenuation
            color={GOLD}
            transparent
            opacity={0.95}
            depthWrite={false}
            blending={THREE.AdditiveBlending}
          />
        </points>
      )}

      {/* Faint inner sphere so the globe still reads where there is ocean */}
      <mesh>
        <sphereGeometry args={[radius * 0.985, 48, 48]} />
        <meshBasicMaterial
          color={GOLD_LIGHT}
          transparent
          opacity={0.04}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Network reach from Ghana */}
      <NetworkArcs radius={radius} />
    </group>
  );
}

export type ParticleGlobeProps = {
  className?: string;
};

export default function ParticleGlobe({ className }: ParticleGlobeProps) {
  const prefersReducedMotion = useMemo(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches,
    []
  );

  return (
    <Canvas
      className={className}
      camera={{ position: [0, 0, 6], fov: 45 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      frameloop={prefersReducedMotion ? 'demand' : 'always'}
    >
      <ambientLight intensity={0.6} />
      <Globe />
      <OrbitControls
        // Click/touch-drag to rotate; keep it a pure "turn the globe" gesture.
        enableZoom={false}
        enablePan={false}
        enableDamping
        dampingFactor={0.08}
        rotateSpeed={0.5}
        // Gentle idle spin that pauses while dragging and resumes on release.
        autoRotate={!prefersReducedMotion}
        autoRotateSpeed={0.6}
      />
    </Canvas>
  );
}

'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const GOLD = '#D4AF37';
const GOLD_LIGHT = '#F3E5AB';
const MAP_SRC = '/earth-equirect.jpg';
const DEG2RAD = Math.PI / 180;

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

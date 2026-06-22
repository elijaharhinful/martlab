'use client';

import React, { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';

// `ssr: false` is only valid inside a Client Component (this file).
// The heavy three.js bundle is split out and loaded on the client only.
const ParticleGlobe = dynamic(() => import('./ParticleGlobe'), {
  ssr: false,
  loading: () => <GlobeFallback />,
});

function GlobeFallback() {
  return (
    <div
      aria-hidden
      className="absolute inset-0 m-auto h-2/3 w-2/3 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.18)_0%,transparent_70%)] animate-pulse"
    />
  );
}

export type HeroGlobeProps = {
  className?: string;
};

/**
 * Wrapper that lazy-mounts the WebGL globe only while it is near the
 * viewport, so the GPU isn't doing work once the hero is scrolled past.
 */
export function HeroGlobe({ className }: HeroGlobeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { rootMargin: '200px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className={className} aria-hidden>
      {active ? <ParticleGlobe className="!absolute inset-0" /> : <GlobeFallback />}
    </div>
  );
}

export default HeroGlobe;

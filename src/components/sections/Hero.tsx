import React from 'react';
import { Button } from '../ui/Button';
import { HeroGlobe } from '../three/HeroGlobe';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Aurora style background */}
      <div className="absolute top-0 right-0 w-[100vw] h-[80vw] bg-[radial-gradient(ellipse_at_top_right,rgba(212,175,55,0.15)_0%,rgba(30,41,59,0.8)_40%,transparent_70%)] pointer-events-none transform -translate-y-1/4 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[60vw] h-[60vw] bg-[radial-gradient(circle_at_bottom_left,rgba(0,100,255,0.05)_0%,transparent_50%)] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Text column */}
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
              Next-Generation <br />
              <span className="text-gold">
                Data Ecosystems
              </span>
            </h1>
            <p className="text-xl text-slate-400 mb-10 max-w-xl leading-relaxed">
              Managing high-velocity, high-volume data streams. Empowering organizations across the globe with reliable data, rigorous analysis, and actionable insights.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" className="py-3 px-8 text-base">Get Started</Button>
              <Button variant="secondary" className="py-3 px-8 text-base">Request a Demo</Button>
            </div>
          </div>

          {/* Globe column */}
          <HeroGlobe className="relative h-[320px] w-full sm:h-[420px] lg:h-[520px]" />
        </div>
      </div>
    </section>
  );
}

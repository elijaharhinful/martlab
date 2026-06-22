"use client";

import React, { useState } from 'react';
import Image from 'next/image';

type Partner = { name: string; logo?: string };

const partners: Partner[] = [
  { name: "Copenhagen Business School", logo: "/images/cbs.png" },
  { name: "EFD", logo: "/images/efd.png" },
  { name: "GRIPS", logo: "/images/gtips.jpg" },
  { name: "UG Climate Change", logo: "/images/ug_climate.jpg" },
  { name: "UG Population Studies", logo: "/images/ug_population.png" },
  // No logo file yet — renders as text (drop a file at /images/cambridge.png to show a logo).
  { name: "University of Cambridge – Department of Geography" },
];

export function Partners() {
  // Track which logos failed to load so we can show a text fallback instead.
  const [failed, setFailed] = useState<Record<number, boolean>>({});

  return (
    <section className="py-12 border-y border-white/5 bg-navy-light/20">
      <div className="container mx-auto px-6">
        <p className="text-center text-slate-400 text-sm font-medium mb-8 tracking-widest uppercase">Our partners and collaborators</p>
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 transition-all duration-500">
          {partners.map((partner, i) => (
            <div key={i} className="flex items-center justify-center bg-white/90 hover:bg-white transition-colors rounded-xl p-6 shadow-lg w-48 h-28 hover:-translate-y-1">
              <div className="relative w-full h-full flex items-center justify-center">
                {!partner.logo || failed[i] ? (
                  <span className="text-slate-900 font-bold text-xs text-center">{partner.name}</span>
                ) : (
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    sizes="192px"
                    className="object-contain"
                    onError={() => setFailed((prev) => ({ ...prev, [i]: true }))}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

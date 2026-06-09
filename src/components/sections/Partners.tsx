"use client";

import React from 'react';
import Image from 'next/image';

const partners = [
  { name: "Copenhagen Business School", logo: "/images/cbs.png" },
  { name: "EFD", logo: "/images/efd.png" },
  { name: "GRIPS", logo: "/images/gtips.jpg" },
  { name: "UG Climate Change", logo: "/images/ug_climate.jpg" },
  { name: "UG Population Studies", logo: "/images/ug_population.png" },
];

export function Partners() {
  return (
    <section className="py-12 border-y border-white/5 bg-navy-light/20">
      <div className="container mx-auto px-6">
        <p className="text-center text-slate-500 text-sm font-medium mb-8 tracking-widest uppercase">Trusted by industry leaders and institutions at</p>
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 transition-all duration-500">
          {partners.map((partner, i) => (
            <div key={i} className="flex items-center justify-center bg-white/90 hover:bg-white transition-colors rounded-xl p-6 shadow-lg w-48 h-28 hover:-translate-y-1">
              <div className="relative w-full h-full flex items-center justify-center">
                <Image 
                  src={partner.logo} 
                  alt={partner.name} 
                  fill 
                  className="object-contain" 
                  onError={(e) => {
                    // Fallback to text if image fails to load
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = `<span class="text-slate-900 font-bold text-xs text-center">${partner.name}</span>`;
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useState, useEffect, useRef } from 'react';

const stats = [
  { label: "Research Projects", value: "20", suffix: "+", desc: "across Africa" },
  { label: "Field Personnel", value: "100", suffix: "+", desc: "trained & deployed" },
  { label: "Data Quality", value: "99", suffix: "%", desc: "accuracy rate" },
  { label: "Years Experience", value: "7", suffix: "+", desc: "in multi-sector data" },
];

function AnimatedNumber({ value, suffix }: { value: string, suffix: string }) {
  const [count, setCount] = useState(0);
  const nodeRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const target = parseInt(value, 10);
    if (isNaN(target)) {
      setCount(0);
      return;
    }
    
    let startTime: number | null = null;
    const duration = 2000; // 2 seconds
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      
      const percentage = Math.min(progress / duration, 1);
      // easeOutExpo for smooth deceleration
      const easeOut = percentage === 1 ? 1 : 1 - Math.pow(2, -10 * percentage);
      
      setCount(Math.floor(easeOut * target));
      
      if (progress < duration) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animationFrameId = requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (nodeRef.current) {
      observer.observe(nodeRef.current);
    }
    
    return () => {
      observer.disconnect();
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [value]);

  return (
    <div ref={nodeRef} className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-gold transition-colors">
      {count}{suffix}
    </div>
  );
}

export function Impacts() {
  return (
    <section className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Impact</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Driving results and enabling teams to excel across the continent.</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="glass-card rounded-2xl p-8 flex flex-col items-center justify-center text-center group">
              <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              <div className="text-sm text-slate-300 font-medium mb-1">{stat.label}</div>
              <div className="text-xs text-slate-500">{stat.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

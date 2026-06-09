import React from 'react';

const stats = [
  { label: "Research Projects", value: "20+", desc: "across Africa" },
  { label: "Field Personnel", value: "100+", desc: "trained & deployed" },
  { label: "Data Quality", value: "99%", desc: "accuracy rate" },
  { label: "Years Experience", value: "7+", desc: "in multi-sector data" },
];

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
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-gold transition-colors">{stat.value}</div>
              <div className="text-sm text-slate-300 font-medium mb-1">{stat.label}</div>
              <div className="text-xs text-slate-500">{stat.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

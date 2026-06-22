import React from 'react';
import { Badge } from '../ui/Badge';
import { Card } from '../ui/Card';
import Link from 'next/link';

const sectors = [
  "Agriculture and Food Security",
  "Climate Change and Sustainability",
  "Education",
  "Workforce Development",
  "Governance and Public Policy",
  "Health",
  "Gender, Inclusion and Social Protection",
  "Market Research and Consumer Intelligence"
];

const approach = [
  { step: "Understand", desc: "Engage stakeholders to clearly define objectives and context" },
  { step: "Design", desc: "Develop rigorous and practical research frameworks" },
  { step: "Execute", desc: "Implement high-quality data collection with strict controls" },
  { step: "Analyze", desc: "Generate insights using advanced analytical tools" },
  { step: "Deliver", desc: "Present clear, actionable findings that drive decisions" },
];

export function Sectors({ isSummary = false }: { isSummary?: boolean }) {
  return (
    <section className="py-24 bg-navy-light/30 border-y border-white/5 relative z-10" id="sectors">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Sector Expertise</h2>
            <p className="text-slate-400 mb-8 leading-relaxed text-lg">
              We work across key development and economic sectors to provide integrated, high-quality research and advisory services.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {sectors.map((sector, i) => (
                <Badge key={i} className="text-sm py-2 px-4 shadow-[0_4px_10px_rgba(0,0,0,0.2)]">{sector}</Badge>
              ))}
            </div>
            {isSummary && (
              <Link href="/services" className="text-gold hover:text-white transition-colors text-sm font-semibold inline-flex items-center gap-1">
                Read more about our sectors <span aria-hidden="true">&rarr;</span>
              </Link>
            )}
          </div>
          
          <Card className="bg-navy/80 border-gold/10">
            <h3 className="text-2xl font-bold mb-8 text-white">Our Approach</h3>
            <div className="space-y-4">
              {approach.map((item, index) => (
                <div key={index} className="flex gap-4 p-4 rounded-xl border border-white/5 bg-navy-light/30 hover:border-gold/30 hover:bg-navy-light/50 transition-all duration-300">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-gold/20 to-transparent text-gold flex items-center justify-center font-bold border border-gold/20 shadow-[inset_0_0_10px_rgba(212,175,55,0.1)]">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">{item.step}</h4>
                    <p className="text-sm text-slate-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            {isSummary && (
              <div className="mt-6 text-right">
                <Link href="/services" className="text-gold hover:text-white transition-colors text-sm font-semibold inline-flex items-center gap-1">
                  Read more about our approach <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
}

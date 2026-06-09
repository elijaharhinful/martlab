import React from 'react';
import { Card } from '../ui/Card';
import Link from 'next/link';
import { Search, Database, BarChart3, LineChart, GraduationCap } from 'lucide-react';

const services = [
  {
    title: "Research & Study Design",
    description: "Design robust, context-specific research methodologies tailored to client objectives.",
    icon: Search
  },
  {
    title: "Digital Data Collection",
    description: "Deploy efficient, real-time data collection systems using CSPro, SurveyCTO, KoboToolbox with strong QA.",
    icon: Database
  },
  {
    title: "Advanced Analytics",
    description: "Clean, manage, and analyze complex datasets using Stata, R, Python, and deliver statistical modeling.",
    icon: BarChart3
  },
  {
    title: "Dashboards & Visualization",
    description: "Develop intuitive dashboards that simplify complex data for quick trend understanding.",
    icon: LineChart
  },
  {
    title: "Capacity Building & Training",
    description: "Equip organizations with practical skills in data analysis, research methods, and digital tools.",
    icon: GraduationCap
  }
];

export function Services({ isSummary = false }: { isSummary?: boolean }) {
  const displayedServices = isSummary ? services.slice(0, 3) : services;

  return (
    <section className="py-24 relative z-10" id="services">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">What We Do</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">End-to-end research and data solutions</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="flex flex-col h-full group">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                  <Icon className="w-6 h-6 text-gold drop-shadow-[0_0_10px_rgba(212,175,55,0.8)]" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{service.title}</h3>
                <p className="text-slate-400 flex-grow mb-4">{service.description}</p>
                
                {isSummary && (
                  <Link href="/services" className="text-gold hover:text-white transition-colors text-sm font-semibold inline-flex items-center gap-1 mt-auto">
                    Learn more <span aria-hidden="true">&rarr;</span>
                  </Link>
                )}
              </Card>
            );
          })}
        </div>

        {isSummary && (
          <div className="mt-12 text-center">
            <Link href="/services" className="inline-flex items-center justify-center rounded-full px-8 py-3 border border-gold text-gold hover:bg-gold hover:text-navy transition-all font-semibold">
              View All Services
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

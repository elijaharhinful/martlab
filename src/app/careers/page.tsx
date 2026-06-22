import React from 'react';
import { Card } from "@/components/ui/Card";

const openRoles = [
  {
    title: "Field Enumerator",
    type: "Contract",
    location: "Various Locations",
    description: "We are seeking detail-oriented Field Enumerators to support our data collection activities. You will be responsible for conducting interviews, recording responses accurately using digital tablets, and ensuring high data quality."
  },
  {
    title: "Data Analyst",
    type: "Full-time",
    location: "Accra, Ghana",
    description: "Join our core team to clean, manage, and analyze complex datasets. Proficiency in Stata, R, or Python is required. You will develop insightful dashboards and contribute to statistical modeling."
  },
  {
    title: "Research Assistant",
    type: "Part-time",
    location: "Remote / Hybrid",
    description: "Support our lead consultants with literature reviews, study design, and drafting reports. Ideal for graduate students looking to gain practical experience in development research."
  }
];

export default function CareersPage() {
  return (
    <main className="flex flex-col flex-grow bg-glow pt-24 pb-24">
      <section className="relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">Join Our Team</h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Discover opportunities to grow your career while making a tangible impact through data, research, and insights.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4">Open Roles</h2>
            
            <div className="flex flex-col gap-6">
              {openRoles.map((role, index) => (
                <Card key={index} className="flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-gold/30 transition-all">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{role.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gold font-medium mb-3">
                      <span>{role.type}</span>
                      <span className="text-slate-500">•</span>
                      <span>{role.location}</span>
                    </div>
                    <p className="text-slate-300 text-sm leading-relaxed max-w-2xl">
                      {role.description}
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <a 
                      href="#" 
                      className="inline-flex items-center justify-center rounded-full px-6 py-2 border border-gold text-gold hover:bg-gold hover:text-navy transition-all font-semibold whitespace-nowrap"
                    >
                      Apply Now
                    </a>
                  </div>
                </Card>
              ))}
            </div>

            <div className="mt-16 text-center bg-navy-light/30 p-8 rounded-2xl border border-white/5">
              <h3 className="text-xl font-bold text-white mb-3">Don't see a perfect fit?</h3>
              <p className="text-slate-400 mb-6">
                We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future openings.
              </p>
              <a 
                href="mailto:info@martlabconsult.com" 
                className="inline-flex items-center justify-center rounded-full px-8 py-3 bg-white text-navy hover:bg-slate-200 transition-all font-bold"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

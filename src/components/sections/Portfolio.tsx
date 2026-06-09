import React from 'react';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import Link from 'next/link';

const projects = [
  {
    title: "2024 Elections Opinion Polls",
    client: "University of Ghana",
    sector: "Governance & Public Policy",
    description: "Conducted a national opinion poll to assess voter perceptions and electoral dynamics.",
    scope: ["Survey programming", "Enumerator training", "Data management", "Data cleaning & analysis", "Reporting"]
  },
  {
    title: "Economic Decision-Making Survey",
    client: "GRIPS, Tokyo, Japan",
    sector: "Labour Markets",
    description: "Implemented a large-scale survey examining behavioral and economic decision-making patterns.",
    scope: ["Field logistics", "Recruitment & supervision of field teams", "Survey coordination", "Data management"]
  },
  {
    title: "Women in Traditional Leadership",
    client: "University of Ghana",
    sector: "Gender & Social Development",
    description: "Conducted a multi-country study on women's participation in traditional leadership.",
    scope: ["Cross-country field supervision", "Survey programming", "Enumerator training", "Data management", "Data cleaning & analysis", "Reporting", "Stakeholder engagement"]
  },
  {
    title: "Coastal Community Resilience (C2R-CD)",
    client: "Centre for Climate Change",
    sector: "Climate Sustainability",
    description: "Assessed climate vulnerability and health outcomes in coastal communities.",
    scope: ["Survey programming", "Enumerator training", "Data management", "Data cleaning & analysis"]
  },
  {
    title: "Flood Management & Community Health Impact Studies",
    client: "Regional Institute for Population Studies",
    sector: "Climate Sustainability",
    description: "Evaluated health impacts of flood management strategies.",
    scope: ["Survey programming", "Data management", "Data cleaning and analysis"]
  },
  {
    title: "Evaluating Health Impacts of Climate Adaptation Strategies",
    client: "Regional Institute for Population Studies",
    sector: "Climate Sustainability",
    description: "Examined the effect of climate adaptation on health outcomes.",
    scope: ["Survey programming", "Enumerator training", "Data cleaning & Analysis"]
  },
  {
    title: "Small Scale Mining Survey (Baseline, Midline & Endline)",
    client: "University of California",
    sector: "Climate Sustainability",
    description: "Conducted longitudinal surveys on the environmental and socioeconomic impacts of mining.",
    scope: ["Survey programming", "Enumerator training", "Data management", "Data cleaning & analysis"]
  },
  {
    title: "Ghana Cocoa Forest REDD+ Programme",
    client: "Centre for Climate Change",
    sector: "Agriculture & Food Security",
    description: "Supported sustainable cocoa production and forest conservation research.",
    scope: ["Field logistics", "Survey programming", "Enumerator training", "Data management", "Data cleaning & analysis"]
  },
  {
    title: "Scaling Up Agroforestry for Sustainable Livelihoods",
    client: "University of Cambridge",
    sector: "Agriculture & Food Security",
    description: "Assessed agroforestry as a sustainable livelihood strategy in West Africa.",
    scope: ["Survey programming", "Enumerator training", "Data management"]
  },
  {
    title: "Digital Inclusion Studies",
    client: "Institute of African Studies",
    sector: "Education & Skills Development",
    description: "Evaluated access to and use of digital technologies.",
    scope: ["Survey programming", "Enumerator training", "Data management", "Data cleaning & analysis"]
  },
  {
    title: "Energy for Development Household Consumption Survey",
    client: "ENRRI / EFD",
    sector: "Economic Development",
    description: "Assessed household energy consumption patterns.",
    scope: ["Survey programming", "Enumerator training", "Data management"]
  },
  {
    title: "Enterprise Socio-Economic Wellbeing Survey",
    client: "Copenhagen Business School",
    sector: "Economic Development",
    description: "Examined enterprise performance and wellbeing indicators.",
    scope: ["Field logistics", "Survey programming", "Enumerator training", "Data management", "Data cleaning"]
  },
  {
    title: "Entrepreneurial Pre-entry Process Survey",
    client: "Copenhagen Business School",
    sector: "Economic Development",
    description: "Studied early-stage entrepreneurial behavior and decision-making.",
    scope: ["Field logistics", "Survey programming", "Enumerator training", "Data management", "Data cleaning"]
  },
  {
    title: "Informational Treatments & Study Paths",
    client: "GRIPS, Japan",
    sector: "Technology & Innovation",
    description: "Evaluated the impact of information interventions on decision-making.",
    scope: ["Field logistics", "Survey programming", "Enumerator training", "Data management", "Data cleaning & analysis"]
  }
];

export function Portfolio({ isSummary = false }: { isSummary?: boolean }) {
  const displayedProjects = isSummary ? projects.slice(0, 5) : projects;

  return (
    <section className="py-24 bg-navy-light/30 border-t border-white/5 relative z-10" id="portfolio">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Project Portfolio</h2>
          <div className="max-w-4xl mx-auto text-slate-400 space-y-4 text-lg leading-relaxed">
            <p>
              With a proven track record of <strong className="text-white">20+ national and multi-country research projects</strong> across Africa, our consortium of experts supports leading organizations in designing and implementing rigorous studies. We deliver high-quality, data-driven insights across sectors like health, education, climate, and governance to inform policy and practice.
            </p>
          </div>
        </div>

        {isSummary ? (
          <Card className="max-w-5xl mx-auto p-0 overflow-hidden border-white/5">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-navy-light/50 border-b border-white/10 text-slate-300">
                    <th className="p-4 font-semibold">Project Title</th>
                    <th className="p-4 font-semibold hidden sm:table-cell">Client / Institution</th>
                    <th className="p-4 font-semibold hidden md:table-cell">Sector</th>
                    <th className="p-4 font-semibold text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {displayedProjects.map((proj, idx) => (
                    <tr key={idx} className="hover:bg-white/5 transition-colors group">
                      <td className="p-4 font-medium text-white group-hover:text-gold transition-colors">{proj.title}</td>
                      <td className="p-4 text-slate-400 hidden sm:table-cell">{proj.client}</td>
                      <td className="p-4 hidden md:table-cell">{proj.sector}</td>
                      <td className="p-4 text-right">
                        <Link href="/portfolio" className="text-gold hover:text-white text-sm font-semibold transition-colors">
                          Details
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((proj, idx) => (
              <Card key={idx} className="flex flex-col h-full border-white/5 hover:border-gold/30">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-4">
                  <h3 className="text-xl font-bold text-white leading-snug">{proj.title}</h3>
                  <Badge className="shrink-0 shadow-none bg-navy-light border-white/5">{proj.sector}</Badge>
                </div>
                <p className="text-gold text-sm font-medium mb-4">{proj.client}</p>
                <p className="text-slate-300 mb-6 flex-grow">{proj.description}</p>
                <div className="mt-auto pt-4 border-t border-white/10">
                  <h4 className="text-xs text-slate-500 uppercase tracking-wider mb-3 font-semibold">Project Scope</h4>
                  <div className="flex flex-wrap gap-2">
                    {proj.scope.map((item, i) => (
                      <span key={i} className="text-xs bg-navy px-2 py-1 rounded text-slate-400 border border-white/5 shadow-sm">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}

        {isSummary && (
          <div className="mt-12 text-center">
            <Link href="/portfolio" className="inline-flex items-center justify-center rounded-full px-8 py-3 border border-gold text-gold hover:bg-gold hover:text-navy transition-all font-semibold">
              View All Projects
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

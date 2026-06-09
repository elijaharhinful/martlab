import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="flex-grow pt-16 pb-24 container mx-auto px-6 bg-glow min-h-screen">
      <h1 className="text-4xl md:text-6xl font-bold mb-12 text-white text-center">Who We Are</h1>
      <div className="max-w-4xl mx-auto space-y-8 text-slate-300 text-lg leading-relaxed">
        <div className="glass-card rounded-2xl p-8 mb-12">
          <p className="mb-6">Martlab Consult is a consortium of multidisciplinary research experts committed to advancing evidence-based decision-making across Africa. We bring together a network of experienced professionals from diverse fields, including economics, agriculture, climate science, public policy, education, governance, and data analytics, to deliver integrated, high-quality research and advisory services.</p>
          <p className="mb-6">Our consortium model allows us to assemble the right expertise for each project, ensuring that every engagement benefits from both technical depth and contextual relevance. By combining strong academic foundations with extensive field experience, Martlab Consult is uniquely positioned to design and implement research that is both methodologically rigorous and practically impactful.</p>
          <p>We work collaboratively with development partners, governments, academic institutions, and private sector organizations to generate credible data, produce actionable insights, and support the design of effective policies and programs.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="glass-card rounded-2xl p-8 border-t-4 border-t-gold">
            <h2 className="text-2xl font-bold mb-4 text-white">Our Vision</h2>
            <p>To become a leading African research and analytics firm, recognized for delivering innovative, context-driven, and impactful data solutions.</p>
          </div>
          <div className="glass-card rounded-2xl p-8 border-t-4 border-t-gold">
            <h2 className="text-2xl font-bold mb-4 text-white">Our Mission</h2>
            <p>To empower organizations with reliable data, rigorous analysis, and actionable insights that enable informed decision-making and measurable impact.</p>
          </div>
        </div>
        
        <div className="glass-card rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-white">Why Martlab Consult</h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-gold shrink-0 mt-1" />
              <div><strong>Deep African Context Expertise</strong> – We understand local realities and field dynamics</div>
            </li>
            <li className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-gold shrink-0 mt-1" />
              <div><strong>Technical Excellence</strong> – Strong capabilities in research design, analytics, and digital tools</div>
            </li>
            <li className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-gold shrink-0 mt-1" />
              <div><strong>Quality Assurance</strong> – Rigorous systems to ensure data accuracy and reliability</div>
            </li>
            <li className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-gold shrink-0 mt-1" />
              <div><strong>Agility & Responsiveness</strong> – We deliver efficiently without compromising quality</div>
            </li>
            <li className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-gold shrink-0 mt-1" />
              <div><strong>Client-Centered Solutions</strong> – Every project is tailored to meet specific needs</div>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}

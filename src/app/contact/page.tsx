import React from 'react';
import { Card } from '@/components/ui/Card';
import { MapPin, Mail, Phone, Globe } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="flex-grow pt-24 pb-24 container mx-auto px-6 flex items-center justify-center min-h-[80vh]">
      <Card interactive={false} className="max-w-2xl w-full">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center text-white">Contact Us</h1>
        
        <div className="space-y-8">
          <div>
            <h4 className="text-xl text-white font-bold mb-4">Get in Touch</h4>
            <ul className="space-y-6 text-slate-300 text-lg">
              <li className="flex items-center gap-4">
                <span className="w-12 h-12 rounded-full bg-gold/10 text-gold flex items-center justify-center shadow-[0_0_10px_rgba(212,175,55,0.2)]">
                  <MapPin className="w-6 h-6" />
                </span> 
                Accra, Ghana
              </li>
              <li className="flex items-center gap-4">
                <span className="w-12 h-12 rounded-full bg-gold/10 text-gold flex items-center justify-center shadow-[0_0_10px_rgba(212,175,55,0.2)]">
                  <Mail className="w-6 h-6" />
                </span> 
                martlabconsult@gmail.com
              </li>
              <li className="flex items-center gap-4">
                <span className="w-12 h-12 rounded-full bg-gold/10 text-gold flex items-center justify-center shadow-[0_0_10px_rgba(212,175,55,0.2)]">
                  <Phone className="w-6 h-6" />
                </span> 
                +233 245623096
              </li>
            </ul>
          </div>
          
          <div className="pt-8 border-t border-white/10">
            <h4 className="text-xl text-white font-bold mb-4">Geographic Reach</h4>
            <p className="text-slate-300 leading-relaxed mb-6">
              Located in Accra, Ghana, with project experience across Liberia, South Africa, and Botswana and growing operations across Sub-Saharan Africa.
            </p>
            <a href="https://www.linkedin.com/company/martlab-consult-africa" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-gold hover:text-white transition-colors font-medium text-lg">
              <Globe className="w-5 h-5" />
              LinkedIn: Martlab Consult Africa
            </a>
          </div>
        </div>
      </Card>
    </main>
  );
}

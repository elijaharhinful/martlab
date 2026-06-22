import React from 'react';
import Image from 'next/image';
import { MapPin, Mail, Phone, Globe } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-navy-light/50 border-t border-white/10 pt-16 pb-8 relative z-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <Image src="/images/logo.jpg" alt="Martlab Consult Logo" width={60} height={60} style={{ width: 'auto', height: 'auto' }} className="rounded-full mb-6 border-2 border-navy" />
            <h3 className="text-xl font-bold text-white mb-2">Martlab Consult</h3>
            <p className="text-slate-400 text-sm">Data. Insights. Impact.</p>
            <p className="text-gold mt-4 font-medium italic">"Partner with us to turn your data into insight—and your insight into impact"</p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Contact Us</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-gold shrink-0" /> Accra, Ghana
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold shrink-0" /> martlabconsult@gmail.com
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold shrink-0" /> +233 245623096
              </li>
              <li className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-gold shrink-0" /> 
                <a href="#" className="hover:text-gold transition-colors">Martlab Consult Africa</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Geographic Reach</h4>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Located in Accra, Ghana, with project experience across Liberia, South Africa, and Botswana and growing operations across Sub-Saharan Africa.
            </p>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 text-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Martlab Consult. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

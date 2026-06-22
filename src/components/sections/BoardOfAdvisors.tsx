import React from 'react';
import { Card } from '../ui/Card';
import Image from 'next/image';

const advisors = [
  {
    name: "Dr. Jane Doe",
    role: "Advisory Board Member",
    bio: "Dr. Jane Doe brings over 20 years of experience in strategic development and policy advisory across various international organizations. She provides strategic direction to Martlab Consult on global development initiatives.",
    image: ""
  },
  {
    name: "Prof. John Smith",
    role: "Advisory Board Member",
    bio: "Prof. John Smith is a renowned academic and researcher in data science and economics. He advises the consortium on advanced methodological frameworks and innovative data solutions.",
    image: ""
  }
];

export function BoardOfAdvisors() {
  return (
    <section className="py-24 relative z-10 bg-navy-light/20" id="board-of-advisors">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Board of Advisors</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Guiding our strategic vision and providing expert oversight.</p>
        </div>
        
        <div className="flex flex-col gap-8 max-w-4xl mx-auto">
          {advisors.map((member, index) => (
            <Card key={index} className="flex flex-col md:flex-row items-center md:items-start gap-8 group">
              <div className="flex-shrink-0 w-48 h-48 rounded-2xl overflow-hidden border-2 border-navy-light/50 group-hover:border-gold/30 transition-colors shadow-[0_0_20px_rgba(212,175,55,0.05)]">
                {member.image ? (
                  <Image src={member.image} alt={member.name} width={192} height={192} className="object-cover w-full h-full" />
                ) : (
                  <div className="w-full h-full bg-navy flex items-center justify-center text-6xl text-gold font-bold">
                    {member.name.charAt(0)}
                  </div>
                )}
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-gold font-semibold text-md mb-4">{member.role}</p>
                <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

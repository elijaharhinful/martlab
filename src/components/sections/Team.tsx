import React from 'react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import Image from 'next/image';
import Link from 'next/link';

const team = [
  {
    name: "Martin Mawutor K. Agbodzi",
    role: "Managing & Lead Consultant",
    bioSummary: "Over seven years of experience delivering multi-sector research, M&E, and data-driven projects across Africa.",
    bio: "Martin Mawutor K. Agbodzi is a research and data analytics professional with over seven years of experience delivering multi-sector research, monitoring and evaluation, and data-driven projects across Africa. He specializes in research design, digital data systems, statistical analysis, and large-scale field operations management. He has led and supported over 30 research and data projects across sectors, including health, education, governance, climate, and economic development, working with international organizations, universities, and development partners. Martin holds an MA in Population Studies from the University of Ghana and a BSc in Statistics and Computer Science, with strong technical expertise in tools such as Stata, SPSS, CSPro, KoboToolbox, SurveyCTO, Excel, and Power BI.",
    image: "/images/martin.jpg"
  },
  {
    name: "Dr. Charles Agyei-Asabere",
    role: "Senior Technical Supervisor",
    bioSummary: "Over 15 years of experience in population research, demographic analysis, and applied development studies.",
    bio: "Dr. Charles Agyei-Asabere is a research specialist affiliated with the Regional Institute for Population Studies, with over 15 years of experience in population research, demographic analysis, and applied development studies. His work focuses on mortality, population dynamics, and health systems, with strong expertise in quantitative research methods and spatial analysis. He has contributed to academic and policy-relevant research, including advanced work on mortality patterns and death registration systems in Ghana, demonstrating strong capability in statistical modeling, survey design, and demographic analysis. As a Senior Technical Advisor, he provides strategic guidance on research design, ensures methodological rigor across projects, and supports high-quality analytical outputs that strengthen decision-making for development partners and institutions.",
    image: ""
  },
  {
    name: "Moriah Asare",
    role: "Data Analyst & Research Associate",
    bioSummary: "Results-driven data analyst with over three years of experience in data analysis, BI, and research support.",
    bio: "Moriah Asare is a results-driven data analyst and research associate with over three years of experience in data analysis, business intelligence, and research support. He specializes in transforming complex datasets into actionable insights using tools such as SQL, Python, Excel, and Power BI, with strong expertise in data cleaning, exploratory analysis, and dashboard development. His experience spans finance, health, and development-related data projects, where he has applied analytical techniques to improve data quality, streamline processes, and support data-driven decision-making. Moriah holds a BSc in Accounting from the University of Professional Studies, Accra, and has completed professional training in data analytics with Azubi Africa. He also holds certifications in SQL (Udemy) and AWS Cloud Practitioner (AmaliTech).",
    image: "/images/moriah.jpg"
  },
  {
    name: "Stella Oduro",
    role: "Logistics and Operations Manager",
    bioSummary: "Detail-oriented logistics professional with over five years of experience in administrative coordination.",
    bio: "Stella Oduro is a detail-oriented logistics and operations professional with over five years of experience in administrative coordination, financial transactions, and client service. She brings strong organizational and problem-solving skills, with a proven ability to manage processes efficiently and support operational delivery. Her background includes experience in banking, forex administration, and customer-facing roles, where she developed expertise in financial controls, recordkeeping, and service coordination. She has demonstrated the ability to manage multiple tasks, maintain accuracy, and ensure smooth day-to-day operations. At Martlab Consult, Stella oversees logistics and operational coordination, supporting field activities, managing vendors, and ensuring efficient execution of research projects. She also supports budget tracking and administrative processes to enhance overall project delivery.",
    image: "/images/stella.jpg"
  },
  {
    name: "Winfred Korsi Korletey",
    role: "Field Coordinator & M&E Associate",
    bioSummary: "M&E professional with strong experience in field research and survey coordination across development projects.",
    bio: "Winfred Korsi Korletey is a monitoring and evaluation professional with strong experience in field research, data collection, and survey coordination across development projects. He has worked on national and multi-country studies with organizations such as UNICEF, USAID, and academic institutions, supporting high-quality data collection and ensuring adherence to research protocols. He is skilled in digital data collection tools (CSPro, KoboCollect, and SurveyCTO) and data analysis using Stata, SQL, and Excel, with a strong focus on data quality assurance and field operations management. Winfred holds a BSc in Statistics with Mathematics (KNUST) and is currently pursuing an MSc in Planning, Monitoring, and Evaluation, with additional training from the ALX Data Science Program.",
    image: "/images/winfred.jpg"
  }
];

export function Team({ isSummary = false }: { isSummary?: boolean }) {
  const displayedTeam = isSummary ? team.slice(0, 3) : team;
  const Heading = isSummary ? 'h2' : 'h1';

  return (
    <section className="py-24 relative z-10" id="team">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Heading className="text-3xl md:text-5xl font-bold mb-4">Our Consortium Experts</Heading>
          <p className="text-slate-400 max-w-2xl mx-auto">A network of experienced professionals from diverse fields.</p>
        </div>
        
        {isSummary ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedTeam.map((member, index) => (
              <Card key={index} className="flex flex-col items-center text-center group h-full">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-navy-light/50 group-hover:border-gold/30 transition-colors shadow-[0_0_20px_rgba(212,175,55,0.05)] group-hover:shadow-[0_0_20px_rgba(212,175,55,0.2)] flex-shrink-0">
                  {member.image ? (
                    <Image src={member.image} alt={member.name} width={128} height={128} className="object-cover w-full h-full" />
                  ) : (
                    <div className="w-full h-full bg-navy flex items-center justify-center text-4xl text-gold font-bold">
                      {member.name.charAt(0)}
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                <p className="text-gold font-medium text-sm mb-4">{member.role}</p>
                <p className="text-slate-400 text-sm flex-grow mb-4">{member.bioSummary}</p>
                <Link href="/team" className="text-gold hover:text-white transition-colors text-sm font-semibold inline-flex items-center gap-1 mt-auto">
                  Read full bio <span aria-hidden="true">&rarr;</span>
                </Link>
              </Card>
            ))}
          </div>
        ) : (
          <div className="flex flex-col gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
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
        )}

        {isSummary && (
          <div className="mt-12 text-center">
            <Button href="/team" variant="secondary" className="px-8">Meet All Experts</Button>
          </div>
        )}
      </div>
    </section>
  );
}

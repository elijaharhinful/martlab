import { Hero } from "@/components/sections/Hero";
import { Partners } from "@/components/sections/Partners";
import { Impacts } from "@/components/sections/Impacts";
import { Services } from "@/components/sections/Services";
import { Sectors } from "@/components/sections/Sectors";
import { Team } from "@/components/sections/Team";
import { Portfolio } from "@/components/sections/Portfolio";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-glow">
      <Hero />
      <Partners />
      <Services isSummary={true} />
      <Impacts />
      <Sectors isSummary={true} />
      <Team isSummary={true} />
      <Portfolio isSummary={true} />
    </main>
  );
}

import { Services } from "@/components/sections/Services";
import { Sectors } from "@/components/sections/Sectors";

export default function ServicesPage() {
  return (
    <main className="flex flex-col flex-grow bg-glow">
      <Services />
      <Sectors />
    </main>
  );
}

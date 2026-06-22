import { Team } from "@/components/sections/Team";
import { BoardOfAdvisors } from "@/components/sections/BoardOfAdvisors";

export default function TeamPage() {
  return (
    <main className="flex flex-col flex-grow bg-glow">
      <Team />
      <BoardOfAdvisors />
    </main>
  );
}

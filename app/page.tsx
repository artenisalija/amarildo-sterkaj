import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Vision } from "@/components/sections/Vision";
import { Influence } from "@/components/sections/Influence";
import { Process } from "@/components/sections/Process";
import { Ventures } from "@/components/sections/Ventures";
import { Reputation } from "@/components/sections/Reputation";
import { Journal } from "@/components/sections/Journal";
import { Contact } from "@/components/sections/Contact";
import { JourneyPath } from "@/components/motion/JourneyPath";

export default function HomePage() {
  return (
    <main className="relative">
      <Hero />
      <About />
      <Vision />
      <Influence />
      <Process />
      <Ventures />
      <Reputation />
      <Journal />
      <Contact />
      <JourneyPath />
    </main>
  );
}

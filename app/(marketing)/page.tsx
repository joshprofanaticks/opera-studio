import { Hero } from "@/components/sections/Hero";
import { Manifesto } from "@/components/sections/Manifesto";
import { Moment } from "@/components/sections/Moment";
import { Services } from "@/components/sections/Services";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Manifesto />
      <Moment />
      <Services />
      <Projects />
      <Contact />
    </main>
  );
}

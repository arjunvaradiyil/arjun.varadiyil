'use client';

import About from "@/components/About";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Volunteering from "@/components/Volunteering";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="pt-0"> {/* Removed top padding since Hero handles spacing */}
      <section id="about" className="scroll-mt-20">
        <About />
      </section>
      <section id="experience" className="scroll-mt-20">
        <Experience />
      </section>
      <section id="education" className="scroll-mt-20">
        <Education />
      </section>
      <section id="skills" className="scroll-mt-20">
        <Skills />
      </section>
      <section id="projects" className="scroll-mt-20">
        <Projects />
      </section>
      <section id="certifications" className="scroll-mt-20">
        <Certifications />
      </section>
      <section id="volunteering" className="scroll-mt-20">
        <Volunteering />
      </section>
      <section id="contact" className="scroll-mt-20">
        <Contact />
      </section>
    </main>
  );
}

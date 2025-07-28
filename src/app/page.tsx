'use client';

import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Certifications from '@/components/Certifications';
import Volunteering from '@/components/Volunteering';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import StaticBackground from '@/components/StaticBackground';

export default function Home() {
  return (
    <main className="relative">
      <StaticBackground />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Certifications />
      <Volunteering />
      <Contact />
      <Footer />
    </main>
  );
}

'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code, Database, Terminal, GitBranch, Languages, Layout } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const skillsData = {
  "Languages": {
    icon: Languages,
    skills: ["JavaScript", "Python", "Java", "C", "HTML", "CSS", "TypeScript"]
  },
  "Frontend": {
    icon: Layout,
    skills: ["React.js", "Next.js", "Tailwind CSS", "Redux", "Material-UI"]
  },
  "Backend": {
    icon: Code,
    skills: ["Node.js", "Express.js", "Payload CMS", "RESTful APIs", "JWT"]
  },
  "Databases": {
    icon: Database,
    skills: ["MongoDB", "MySQL", "PostgreSQL", "MongoDB Atlas"]
  },
  "Tools & Platforms": {
    icon: Terminal,
    skills: ["Git", "GitHub", "VS Code", "Postman", "Docker", "AWS"]
  }
};

const Skills = () => {
  const sectionRef = useRef(null);
  const skillsRef = useRef<(HTMLDivElement | null)[]>([]);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !skillsRef.current.includes(el)) {
      skillsRef.current.push(el);
    }
  };

  useEffect(() => {
    const sectionEl = sectionRef.current;
    const skillElements = skillsRef.current.filter(el => el !== null);

    gsap.set(skillElements, { opacity: 0, y: 30 });

    ScrollTrigger.create({
      trigger: sectionEl,
      start: 'top 70%',
      end: 'bottom 20%',
      onEnter: () => {
        gsap.to(skillElements, {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 0.8,
          ease: 'power3.out',
        });
      },
      onLeaveBack: () => {
        gsap.to(skillElements, {
          opacity: 0,
          y: 30,
          stagger: 0.2,
          duration: 0.8,
          ease: 'power3.in',
        });
      },
    });
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="relative py-24 sm:py-32 bg-gray-900/50 backdrop-blur-sm overflow-hidden border-y border-slate-800/50 scroll-mt-24">
      <div className="absolute inset-0 bg-grid-slate-800/[0.04] bg-[bottom_1px_center] dark:bg-grid-slate-400/[0.05] dark:bg-bottom_1px_center"></div>
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold leading-7 text-amber-400">Technical Expertise</p>
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">Skills & Technologies</h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg leading-8 text-gray-300">
            A snapshot of the primary technologies and tools I work with. My skill set is always growing as I explore new and better ways to build.
          </p>
        </div>
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skillsData).map(([category, data]) => (
              <div
                key={category}
                ref={addToRefs}
                className="p-6 bg-slate-800/50 rounded-lg shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <data.icon className="w-6 h-6 text-amber-400 mr-4" />
                  <h3 className="text-xl font-bold text-white">{category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {data.skills.map((skill) => (
                    <span key={skill} className="bg-slate-700 text-gray-200 text-sm font-medium px-3 py-1 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 
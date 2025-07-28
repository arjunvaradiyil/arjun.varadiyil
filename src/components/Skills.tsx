'use client';

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TextHighlight from './TextHighlight';

gsap.registerPlugin(ScrollTrigger);

const skillsData = {
  "Languages": {
    description: "Fluent in languages for building robust applications, from web to systems programming.",
    skills: ["JavaScript", "Python", "Java", "C", "HTML", "CSS", "TypeScript"]
  },
  "Frontend": {
    description: "Proficient in building responsive, dynamic, and intuitive user interfaces.",
    skills: ["React.js", "Next.js", "Tailwind CSS", "Redux", "Material-UI"]
  },
  "Backend": {
    description: "Experienced in creating scalable server-side logic and powerful APIs.",
    skills: ["Node.js", "Express.js", "Payload CMS", "RESTful APIs", "JWT"]
  },
  "Databases": {
    description: "Skilled in both relational and NoSQL databases for optimal data management.",
    skills: ["MongoDB", "MySQL", "PostgreSQL", "MongoDB Atlas"]
  },
  "Tools & Platforms": {
    description: "Adept with a modern toolchain for efficient and collaborative development.",
    skills: ["Git", "GitHub", "VS Code", "Postman", "Docker", "AWS"]
  }
};

export default function Skills() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    gsap.fromTo(
      el,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
        duration: 1,
      }
    );
  }, []);

  return (
    <section id="skills" className="py-20 relative bg-[#0F172A]/70 backdrop-blur-sm border-y border-slate-800/50" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          {/* Left Column (Text) */}
          <div className="md:col-span-1">
            <h2 className="text-4xl font-bold text-white mb-4">Skills & Expertise</h2>
            <p className="text-gray-300 text-lg">
              A snapshot of the primary technologies and tools I work with. My skill set is always growing as I explore new and better ways to build.
            </p>
          </div>
          {/* Right Column (Skills) */}
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {Object.entries(skillsData).map(([category, data]) => (
              <div key={category} className="bg-slate-800/50 p-6 rounded-lg border border-slate-700/50">
                <h3 className="text-xl font-bold text-amber-400 mb-2">{category}</h3>
                <TextHighlight>
                  <p className="text-gray-400 text-sm mb-4">{data.description}</p>
                </TextHighlight>
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
} 
'use client';

import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { IconType } from 'react-icons';
import {
  SiJavascript, SiPython, SiC, SiHtml5, SiCss3, SiTypescript,
  SiReact, SiNextdotjs, SiTailwindcss, SiRedux, SiMui,
  SiNodedotjs, SiExpress, SiJsonwebtokens, SiSwagger,
  SiMongodb, SiMysql, SiPostgresql,
  SiGit, SiGithub, SiPostman, SiDocker, SiPayloadcms
} from 'react-icons/si';

gsap.registerPlugin(ScrollTrigger);

// Separate skills into Core and others
const coreSkills = [
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'Express.js', icon: SiExpress },
  { name: 'React', icon: SiReact },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'Python', icon: SiPython },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'Payload CMS', icon: SiPayloadcms },
];

const otherSkills = [
  { name: 'C', icon: SiC },
  { name: 'HTML5', icon: SiHtml5 },
  { name: 'CSS3', icon: SiCss3 },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'Redux', icon: SiRedux },
  { name: 'Material-UI', icon: SiMui },
  { name: 'RESTful APIs', icon: SiSwagger },
  { name: 'JWT', icon: SiJsonwebtokens },
  { name: 'MySQL', icon: SiMysql },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'MongoDB Atlas', icon: SiMongodb },
  { name: 'Git', icon: SiGit },
  { name: 'GitHub', icon: SiGithub },
  { name: 'Postman', icon: SiPostman },
  { name: 'Docker', icon: SiDocker },
];

type Skill = {
  name: string;
  icon: IconType;
};


const Skills = () => {
  const sectionRef = useRef(null);
  const skillBoxesRef = useRef<(HTMLDivElement | null)[]>([]);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !skillBoxesRef.current.includes(el)) {
      skillBoxesRef.current.push(el);
    }
  };

  useLayoutEffect(() => {
    const sectionEl = sectionRef.current;
    const skillElements = skillBoxesRef.current.filter(el => el !== null);

    gsap.set(skillElements, { autoAlpha: 0, y: 30 });

    ScrollTrigger.create({
      trigger: sectionEl,
      start: 'top 70%',
      end: 'bottom 20%',
      onEnter: () => {
        gsap.to(skillElements, {
          autoAlpha: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.5,
          ease: 'power2.out',
        });
      },
      onLeaveBack: () => {
        gsap.to(skillElements, {
          autoAlpha: 0,
          y: 30,
          stagger: 0.1,
          duration: 0.5,
          ease: 'power2.in',
        });
      },
    });
  }, []);

  const SkillBox = ({ skill }: { skill: Skill }) => (
    <div
      ref={addToRefs}
      className="invisible group flex flex-col items-center justify-center gap-3 p-4 bg-slate-800/50 rounded-lg shadow-lg w-36 h-36 transition-all duration-300 hover:bg-slate-800 hover:shadow-amber-400/10 hover:shadow-2xl hover:-translate-y-1"
    >
      <skill.icon className="w-12 h-12 text-gray-300 group-hover:text-amber-400 transition-colors duration-300" />
      <span className="text-sm font-medium text-center text-gray-300 group-hover:text-white transition-colors duration-300">
        {skill.name}
      </span>
    </div>
  );

  return (
    <section id="skills" ref={sectionRef} className="relative py-24 sm:py-32 bg-gray-900/50 backdrop-blur-sm overflow-hidden border-y border-slate-800/50 scroll-mt-24">
      <div className="absolute inset-0 bg-grid-slate-800/[0.04] bg-[bottom_1px_center] dark:bg-grid-slate-400/[0.05] dark:bg-bottom_1px_center"></div>
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold leading-7 text-amber-400">Skills</p>
          <h2 id="skills-heading" className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">Skills & Technologies</h2>
        </div>
        
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-white mb-4">Core Expertise</h3>
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4" role="list" aria-label="Core technical skills">
              {coreSkills.filter(skill => ['JavaScript', 'Python', 'Next.js', 'Payload CMS'].includes(skill.name)).map((skill) => (
                <li key={skill.name} className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-lg border-2 border-amber-400/50 hover:border-amber-400 transition-colors">
                  <skill.icon className="text-amber-400 text-xl" aria-hidden="true" />
                  <span className="text-white font-medium text-sm">{skill.name}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Additional Technologies</h3>
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4" role="list" aria-label="Additional technical skills">
              {coreSkills.filter(skill => !['JavaScript', 'Python', 'Next.js', 'Payload CMS'].includes(skill.name)).map((skill) => (
                <li key={skill.name} className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-slate-600 transition-colors">
                  <skill.icon className="text-gray-400 text-xl" aria-hidden="true" />
                  <span className="text-gray-300 text-sm">{skill.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 
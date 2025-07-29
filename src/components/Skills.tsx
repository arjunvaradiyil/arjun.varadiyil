'use client';

import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  SiJavascript, SiPython, SiC, SiHtml5, SiCss3, SiTypescript,
  SiReact, SiNextdotjs, SiTailwindcss, SiRedux, SiMui,
  SiNodedotjs, SiExpress, SiJsonwebtokens, SiSwagger,
  SiMongodb, SiMysql, SiPostgresql,
  SiGit, SiGithub, SiPostman, SiDocker, SiPayloadcms
} from 'react-icons/si';

gsap.registerPlugin(ScrollTrigger);

const skillsList = [
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'Python', icon: SiPython },
  { name: 'C', icon: SiC },
  { name: 'HTML5', icon: SiHtml5 },
  { name: 'CSS3', icon: SiCss3 },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'React', icon: SiReact, highlight: true },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'Redux', icon: SiRedux },
  { name: 'Material-UI', icon: SiMui },
  { name: 'Node.js', icon: SiNodedotjs, highlight: true },
  { name: 'Express.js', icon: SiExpress, highlight: true },
  { name: 'Payload CMS', icon: SiPayloadcms },
  { name: 'RESTful APIs', icon: SiSwagger },
  { name: 'JWT', icon: SiJsonwebtokens },
  { name: 'MongoDB', icon: SiMongodb, highlight: true },
  { name: 'MySQL', icon: SiMysql },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'MongoDB Atlas', icon: SiMongodb },
  { name: 'Git', icon: SiGit },
  { name: 'GitHub', icon: SiGithub },
  { name: 'Postman', icon: SiPostman },
  { name: 'Docker', icon: SiDocker },
];

const Skills = () => {
  const sectionRef = useRef(null);
  const skillIconsRef = useRef<(HTMLDivElement | null)[]>([]);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !skillIconsRef.current.includes(el)) {
      skillIconsRef.current.push(el);
    }
  };

  useLayoutEffect(() => {
    const sectionEl = sectionRef.current;
    const skillElements = skillIconsRef.current.filter(el => el !== null);

    gsap.set(skillElements, { autoAlpha: 0, y: 30 });

    ScrollTrigger.create({
      trigger: sectionEl,
      start: 'top 70%',
      end: 'bottom 20%',
      onEnter: () => {
        gsap.to(skillElements, {
          autoAlpha: 1,
          y: 0,
          stagger: 0.05,
          duration: 0.5,
          ease: 'power2.out',
        });
      },
      onLeaveBack: () => {
        gsap.to(skillElements, {
          autoAlpha: 0,
          y: 30,
          stagger: 0.05,
          duration: 0.5,
          ease: 'power2.in',
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
          <p className="mt-4 max-w-2xl mx-auto text-md leading-8 text-amber-300/80">
            Highlighted icons represent my core expertise in the MERN stack.
          </p>
        </div>
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-8">
            {skillsList.map((skill) => (
              <div
                key={skill.name}
                ref={addToRefs}
                className="group flex flex-col items-center gap-2 text-center invisible"
              >
                <div className={`p-4 bg-slate-800/50 rounded-full group-hover:bg-amber-400/20 transition-all duration-300 ${skill.highlight ? 'ring-2 ring-amber-400/50 group-hover:ring-amber-400' : ''}`}>
                  <skill.icon className={`w-10 h-10 text-gray-300 group-hover:text-amber-400 transition-colors duration-300 ${skill.highlight ? 'text-amber-300' : ''}`} />
                </div>
                <span className={`text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300 ${skill.highlight ? 'font-bold text-white' : ''}`}>
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 
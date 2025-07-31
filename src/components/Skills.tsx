'use client';

import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  SiJavascript, SiReact, SiNodedotjs, SiMongodb, SiExpress, 
  SiPython, SiNextdotjs, SiTailwindcss, SiGit, SiGithub,
  SiPostman, SiFigma,
  SiHtml5, SiCss3, SiBootstrap, SiMui, SiRedux,
  SiFirebase, SiVercel, SiNetlify, SiHeroku, SiDocker,
  SiLinux, SiMacos, SiAndroid, SiIos
} from 'react-icons/si';

gsap.registerPlugin(ScrollTrigger);

interface Skill {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}

const skillsData: Skill[] = [
  // MERN Stack
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'Express.js', icon: SiExpress },
  { name: 'React', icon: SiReact },
  { name: 'Node.js', icon: SiNodedotjs },
  
  // Additional Core Skills
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'Python', icon: SiPython },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'HTML5', icon: SiHtml5 },
  { name: 'CSS3', icon: SiCss3 },
  { name: 'Bootstrap', icon: SiBootstrap },
  { name: 'Material-UI', icon: SiMui },
  { name: 'Redux', icon: SiRedux },
  { name: 'Firebase', icon: SiFirebase },
  { name: 'Git', icon: SiGit },
  { name: 'GitHub', icon: SiGithub },
  { name: 'Postman', icon: SiPostman },
  { name: 'Figma', icon: SiFigma },
  { name: 'Docker', icon: SiDocker },
  { name: 'Vercel', icon: SiVercel },
  { name: 'Netlify', icon: SiNetlify },
  { name: 'Heroku', icon: SiHeroku },
  { name: 'Linux', icon: SiLinux },
  { name: 'macOS', icon: SiMacos },
  { name: 'Android', icon: SiAndroid },
  { name: 'iOS', icon: SiIos },
];

const SkillItem = ({ skill }: { skill: Skill }) => {
  return (
    <div className="flex flex-col items-center justify-center min-w-[120px] mx-4 p-4 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-amber-400/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-amber-400/10">
      <div className="p-3 rounded-full bg-slate-700/50 border-2 border-amber-400/50 text-amber-400 mb-3 transition-all duration-300 group-hover:scale-110">
        <skill.icon className="text-2xl" aria-hidden="true" />
      </div>
      <h3 className="text-white font-semibold text-sm text-center">{skill.name}</h3>
    </div>
  );
};

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const containerEl = containerRef.current;
    const marqueeEl = marqueeRef.current;

    if (!containerEl) return;

    // Fade in animation for the section
    gsap.set(containerEl, { autoAlpha: 1 });
    gsap.fromTo(containerEl, 
      { y: 50 },
      { 
        y: 0, 
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerEl,
          start: 'top 80%',
          toggleActions: 'play none none none',
        }
      }
    );

    // Animate the marquee
    if (marqueeEl) {
      gsap.to(marqueeEl, {
        x: '-50%',
        duration: 25,
        ease: 'none',
        repeat: -1,
      });
    }
  }, []);

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-900 to-black overflow-hidden">
      <div ref={containerRef} className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-base font-semibold leading-7 text-amber-400">Skills & Technologies</p>
          <h2 id="skills-heading" className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            A comprehensive toolkit of modern technologies and frameworks I use to build exceptional digital experiences.
          </h2>
        </div>
        
        <div className="relative overflow-hidden">
          <div ref={marqueeRef} className="flex items-center space-x-8">
            {[...skillsData, ...skillsData].map((skill, index) => (
              <SkillItem key={index} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 
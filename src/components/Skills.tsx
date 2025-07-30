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

const SkillCard = ({ skill }: { skill: Skill }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.fromTo(cardRef.current, 
      { autoAlpha: 0, y: 30, scale: 0.9 },
      { 
        autoAlpha: 1, 
        y: 0, 
        scale: 1,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        }
      }
    );
  }, []);

  return (
    <div 
      ref={cardRef}
      className="invisible group relative bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-amber-400/10"
    >
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="p-4 rounded-full bg-slate-700/50 border-2 border-amber-400/50 text-amber-400 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:border-amber-400">
          <skill.icon className="text-3xl" aria-hidden="true" />
        </div>
        <h3 className="text-white font-semibold text-lg">{skill.name}</h3>
      </div>
    </div>
  );
};

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div ref={containerRef} className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 id="skills-heading" className="text-4xl md:text-5xl font-bold text-white mb-6">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks I use to build exceptional digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 max-w-6xl mx-auto">
          {skillsData.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
} 
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
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'platforms';
  level: 'expert' | 'advanced' | 'intermediate';
}

const skillsData: Skill[] = [
  // Frontend
  { name: 'React', icon: SiReact, category: 'frontend', level: 'expert' },
  { name: 'Next.js', icon: SiNextdotjs, category: 'frontend', level: 'expert' },
  { name: 'JavaScript', icon: SiJavascript, category: 'frontend', level: 'expert' },
  { name: 'HTML5', icon: SiHtml5, category: 'frontend', level: 'advanced' },
  { name: 'CSS3', icon: SiCss3, category: 'frontend', level: 'advanced' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, category: 'frontend', level: 'expert' },
  { name: 'Bootstrap', icon: SiBootstrap, category: 'frontend', level: 'advanced' },
  { name: 'Material-UI', icon: SiMui, category: 'frontend', level: 'intermediate' },
  { name: 'Redux', icon: SiRedux, category: 'frontend', level: 'intermediate' },
  
  // Backend
  { name: 'Node.js', icon: SiNodedotjs, category: 'backend', level: 'expert' },
  { name: 'Express.js', icon: SiExpress, category: 'backend', level: 'expert' },
  { name: 'Python', icon: SiPython, category: 'backend', level: 'advanced' },
  
  // Database
  { name: 'MongoDB', icon: SiMongodb, category: 'database', level: 'expert' },
  { name: 'Firebase', icon: SiFirebase, category: 'database', level: 'intermediate' },
  
  // Tools & Platforms
  { name: 'Git', icon: SiGit, category: 'tools', level: 'advanced' },
  { name: 'GitHub', icon: SiGithub, category: 'tools', level: 'expert' },
  { name: 'Postman', icon: SiPostman, category: 'tools', level: 'advanced' },
  { name: 'Figma', icon: SiFigma, category: 'tools', level: 'intermediate' },
  { name: 'Docker', icon: SiDocker, category: 'tools', level: 'intermediate' },
  
  // Platforms
  { name: 'Vercel', icon: SiVercel, category: 'platforms', level: 'expert' },
  { name: 'Netlify', icon: SiNetlify, category: 'platforms', level: 'advanced' },
  { name: 'Heroku', icon: SiHeroku, category: 'platforms', level: 'intermediate' },
  { name: 'Linux', icon: SiLinux, category: 'platforms', level: 'advanced' },
  { name: 'macOS', icon: SiMacos, category: 'platforms', level: 'advanced' },
  { name: 'Android', icon: SiAndroid, category: 'platforms', level: 'intermediate' },
  { name: 'iOS', icon: SiIos, category: 'platforms', level: 'intermediate' },
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

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'expert': return 'border-amber-400 text-amber-400';
      case 'advanced': return 'border-blue-400 text-blue-400';
      case 'intermediate': return 'border-green-400 text-green-400';
      default: return 'border-gray-400 text-gray-400';
    }
  };

  const getLevelText = (level: string) => {
    switch (level) {
      case 'expert': return 'Expert';
      case 'advanced': return 'Advanced';
      case 'intermediate': return 'Intermediate';
      default: return 'Beginner';
    }
  };

  return (
    <div 
      ref={cardRef}
      className="invisible group relative bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-amber-400/10"
    >
      <div className="flex flex-col items-center text-center space-y-4">
        <div className={`p-4 rounded-full bg-slate-700/50 border-2 ${getLevelColor(skill.level)} transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg`}>
          <skill.icon className="text-3xl" aria-hidden="true" />
        </div>
        <div className="space-y-2">
          <h3 className="text-white font-semibold text-lg">{skill.name}</h3>
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getLevelColor(skill.level)} bg-opacity-10`}>
            {getLevelText(skill.level)}
          </span>
        </div>
      </div>
    </div>
  );
};

const CategorySection = ({ title, skills, category }: { title: string; skills: Skill[]; category: string }) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.fromTo(sectionRef.current, 
      { autoAlpha: 0, y: 50 },
      { 
        autoAlpha: 1, 
        y: 0, 
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        }
      }
    );
  }, []);

  return (
    <div ref={sectionRef} className="invisible space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <div className="w-16 h-1 bg-amber-400 mx-auto rounded-full"></div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
        {skills.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);

  const frontendSkills = skillsData.filter(skill => skill.category === 'frontend');
  const backendSkills = skillsData.filter(skill => skill.category === 'backend');
  const databaseSkills = skillsData.filter(skill => skill.category === 'database');
  const toolsSkills = skillsData.filter(skill => skill.category === 'tools');
  const platformsSkills = skillsData.filter(skill => skill.category === 'platforms');

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

        <div className="space-y-16">
          <CategorySection title="Frontend Development" skills={frontendSkills} category="frontend" />
          <CategorySection title="Backend Development" skills={backendSkills} category="backend" />
          <CategorySection title="Databases & Storage" skills={databaseSkills} category="database" />
          <CategorySection title="Development Tools" skills={toolsSkills} category="tools" />
          <CategorySection title="Platforms & OS" skills={platformsSkills} category="platforms" />
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-6 text-sm text-gray-400">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-amber-400 rounded-full"></div>
              <span>Expert</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
              <span>Advanced</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              <span>Intermediate</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 
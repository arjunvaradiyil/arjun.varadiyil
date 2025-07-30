'use client';

import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Github, ExternalLink } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Event Scheduler Web Application',
    description: 'A comprehensive scheduling platform that allows users to create, manage, and schedule events with real-time conflict detection and resolution.',
    techStack: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'JWT'],
    githubUrl: 'https://github.com/arjunvaradiyil/Event-Scheduler-App',
    liveUrl: 'https://eventscheduler.arjunvaradiyil.cloud/',
  },
  {
    id: 2,
    title: 'Movie Review and Rating Web Application',
    description: 'A complete movie review platform featuring advanced authentication, role-based access, and a dynamic user interface for real-time rating updates.',
    techStack: ['React.js', 'Node.js', 'MongoDB', 'Tailwind CSS', 'JWT'],
    githubUrl: 'https://github.com/arjunvaradiyill/moviereviewapp-client',
  },
  {
    id: 3,
    title: 'Personal Assistant for Deaf and Mute',
    description: 'An innovative mobile application using Flutter and MediaPipe for enhanced accessibility and seamless communication for the hearing and speech impaired.',
    techStack: ['Flutter', 'MediaPipe', 'Python', 'TensorFlow', 'ML'],
    githubUrl: 'https://github.com/arjunvaradiyil',
  },
];

const ProjectCard = ({ project }: { project: Project }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.fromTo(cardRef.current, 
      { autoAlpha: 0, y: 50 },
      { 
        autoAlpha: 1, 
        y: 0, 
        duration: 0.8,
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        }
      }
    );
  }, []);

  return (
    <div ref={cardRef} className="invisible bg-slate-800/50 rounded-lg shadow-lg overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl hover:shadow-amber-400/10 hover:-translate-y-1">
      <div className="p-6 flex-grow">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-300 text-sm mb-4">{project.description}</p>
        
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span key={tech} className="bg-slate-700 text-amber-300 text-xs font-semibold px-2.5 py-1 rounded-full">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="p-6 bg-slate-800/80 mt-auto flex justify-between items-center">
        <div>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white font-semibold text-sm hover:text-amber-400 transition-colors"
            >
              <ExternalLink size={16} />
              View Live
            </a>
          )}
        </div>
        <div>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white font-semibold text-sm hover:text-amber-400 transition-colors"
            >
              <Github size={16} />
              Source Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default function Projects() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const el = sectionRef.current;
    gsap.fromTo(
      el,
      { autoAlpha: 0 },
      {
        autoAlpha: 1,
        duration: 1,
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
        },
      }
    );
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="relative py-24 sm:py-32 bg-gray-900/50 backdrop-blur-sm overflow-hidden border-y border-slate-800/50 scroll-mt-24 invisible">
      <div className="absolute inset-0 bg-grid-slate-800/[0.04] bg-[bottom_1px_center] dark:bg-grid-slate-400/[0.05] dark:bg-bottom_1px_center"></div>
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold leading-7 text-amber-400">Projects</p>
          <h2 id="projects-heading" className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">My Projects</h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg leading-8 text-gray-300">
            A selection of projects that showcase my skills in building robust and user-friendly applications.
          </p>
        </div>

        <div className="mt-16 grid lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://github.com/arjunvardiyil"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-amber-400 text-gray-900 font-semibold rounded-full hover:bg-amber-500 transition-colors shadow-lg hover:shadow-xl"
          >
            <Github size={18} />
            <span>Explore More on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
} 
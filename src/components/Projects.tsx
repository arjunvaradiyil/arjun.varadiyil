'use client';

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Github } from 'lucide-react';
import TextHighlight from './TextHighlight';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: 'Event Scheduler Web Application',
    category: 'Web Application',
    description: 'A comprehensive scheduling platform that allows users to create, manage, and schedule events with real-time conflict detection and resolution.',
    features: [
      'Real-time overlap prevention and conflict resolution',
      'Robust user authentication with role-based access control',
      'Secure session management for protected data access',
      'Interactive calendar interface'
    ],
    techStack: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'JWT'],
    githubUrl: 'https://github.com/arjunvaradiyil/Event-Scheduler-App',
  },
  {
    id: 2,
    title: 'Movie Review and Rating Web Application',
    category: 'Web Application',
    description: 'A complete movie review platform featuring advanced authentication, role-based access, and a dynamic user interface for real-time rating updates.',
    features: [
      'Advanced authentication mechanisms',
      'Granular role-based access control (Admin/User)',
      'Responsive design for all devices',
      'Dynamic UI with real-time rating updates'
    ],
    techStack: ['React.js', 'Node.js', 'MongoDB', 'Tailwind CSS', 'JWT'],
    githubUrl: 'https://github.com/arjunvaradiyill/moviereviewapp-client',
  },
  {
    id: 3,
    title: 'Personal Assistant for Deaf and Mute',
    category: 'Mobile Application',
    description: 'An innovative mobile application using Flutter and MediaPipe for enhanced accessibility and seamless communication for the hearing and speech impaired.',
    features: [
      'Real-time gesture recognition using MediaPipe',
      'Sophisticated text-to-speech conversion',
      'Designed for comprehensive communication support',
      'B.Tech final year project'
    ],
    techStack: ['Flutter', 'MediaPipe', 'Python', 'TensorFlow', 'ML'],
  },
];

export default function Projects() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = ['/hero-bg-1.jpg', '/hero-bg-2.jpg'];
  const sectionRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev === 0 ? 1 : 0));
    }, 30000);

    return () => clearInterval(interval);
  }, []);

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
    <section id="projects" className="py-20 relative bg-[#0F172A]/70 backdrop-blur-sm border-y border-slate-800/50" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">My Projects</h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Here are some of the projects I&apos;ve worked on. Each one represents a unique challenge 
            and an opportunity to learn and grow as a developer.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-slate-800/50 p-6 rounded-lg border border-slate-700/50 transition-transform duration-300 hover:scale-105 hover:border-slate-600 flex flex-col"
            >
              <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
              <TextHighlight>
                <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>
              </TextHighlight>
              
              <div className="mb-4">
                <h4 className="text-amber-400 font-semibold text-sm mb-2">Key Features</h4>
                <ul className="text-gray-400 text-sm space-y-1 list-disc list-inside">
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="text-amber-400 font-semibold text-sm mb-2">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="bg-slate-700 text-gray-200 text-sm font-medium px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {project.githubUrl && (
                <div className="mt-auto pt-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-white font-semibold hover:text-amber-400 transition-colors"
                  >
                    <Github size={18} />
                    View on GitHub
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/arjunvardiyil"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-200 transition-colors shadow-lg hover:shadow-xl"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
} 
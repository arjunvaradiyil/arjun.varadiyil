'use client';

import { useRef, useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  detailedDescription?: string;
  features?: string[];
  challenges?: string[];
  solutions?: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce platform with user authentication, product management, and payment integration.',
    techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
    githubUrl: 'https://github.com/arjunvaradiyil',
    liveUrl: 'https://example.com',
    detailedDescription: 'A comprehensive e-commerce solution built with modern technologies. Features include user authentication, product catalog, shopping cart, payment processing, and admin dashboard.',
    features: [
      'User authentication and authorization',
      'Product catalog with search and filtering',
      'Shopping cart and checkout process',
      'Payment integration with Stripe',
      'Admin dashboard for product management',
      'Order tracking and history'
    ],
    challenges: [
      'Complex state management for cart and user sessions',
      'Payment gateway integration and security',
      'Real-time inventory management',
      'Responsive design for mobile devices'
    ],
    solutions: [
      'Implemented Redux for centralized state management',
      'Used Stripe SDK with proper error handling',
      'Created real-time updates using WebSocket',
      'Adopted mobile-first responsive design approach'
    ]
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates and team features.',
    techStack: ['Next.js', 'TypeScript', 'Firebase', 'Tailwind CSS'],
    githubUrl: 'https://github.com/arjunvaradiyil',
    liveUrl: 'https://example.com',
    detailedDescription: 'A modern task management application designed for teams to collaborate effectively. Features real-time updates, task assignments, progress tracking, and team communication.',
    features: [
      'Real-time task updates and notifications',
      'Team collaboration and task assignment',
      'Progress tracking and analytics',
      'File attachments and comments',
      'Calendar integration',
      'Mobile-responsive design'
    ],
    challenges: [
      'Real-time synchronization across multiple users',
      'Complex permission system for team management',
      'Optimizing performance with large datasets',
      'Implementing offline functionality'
    ],
    solutions: [
      'Used Firebase Realtime Database for instant updates',
      'Implemented role-based access control (RBAC)',
      'Applied pagination and virtual scrolling',
      'Created service workers for offline support'
    ]
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio website showcasing projects and skills.',
    techStack: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
    githubUrl: 'https://github.com/arjunvaradiyil',
    liveUrl: 'https://example.com',
    detailedDescription: 'A professional portfolio website built with modern web technologies. Features smooth animations, responsive design, and optimized performance for showcasing projects and skills.',
    features: [
      'Smooth animations and transitions',
      'Responsive design for all devices',
      'SEO optimization and performance',
      'Contact form with email integration',
      'Project showcase with detailed views',
      'Skills and experience sections'
    ],
    challenges: [
      'Creating smooth animations without performance issues',
      'Optimizing images and assets for fast loading',
      'Implementing SEO best practices',
      'Ensuring accessibility compliance'
    ],
    solutions: [
      'Used Framer Motion for optimized animations',
      'Implemented image optimization and lazy loading',
      'Added structured data and meta tags',
      'Conducted accessibility audits and improvements'
    ]
  },
  {
    id: 4,
    title: 'Weather Dashboard',
    description: 'A weather application with real-time data and interactive maps.',
    techStack: ['React', 'OpenWeather API', 'Chart.js', 'Leaflet'],
    githubUrl: 'https://github.com/arjunvaradiyil',
    liveUrl: 'https://example.com',
    detailedDescription: 'An interactive weather dashboard that provides real-time weather data, forecasts, and interactive maps. Features include location-based weather, historical data, and customizable widgets.',
    features: [
      'Real-time weather data from multiple APIs',
      'Interactive maps with weather overlays',
      'Historical weather data and trends',
      'Customizable dashboard widgets',
      'Location-based weather alerts',
      'Weather forecasting up to 7 days'
    ],
    challenges: [
      'Integrating multiple weather APIs',
      'Handling real-time data updates efficiently',
      'Creating responsive interactive maps',
      'Managing API rate limits and costs'
    ],
    solutions: [
      'Implemented API aggregation and caching',
      'Used WebSocket for real-time updates',
      'Optimized map rendering with Leaflet',
      'Created efficient API usage patterns'
    ]
  },
  {
    id: 5,
    title: 'Blog Platform',
    description: 'A content management system for blogs with rich text editing and SEO features.',
    techStack: ['Next.js', 'MongoDB', 'Markdown', 'Vercel'],
    githubUrl: 'https://github.com/arjunvaradiyil',
    liveUrl: 'https://example.com',
    detailedDescription: 'A modern blog platform with content management capabilities, rich text editing, and SEO optimization. Features include markdown support, image uploads, and analytics.',
    features: [
      'Rich text editor with markdown support',
      'Image upload and optimization',
      'SEO optimization and meta tags',
      'Comment system and moderation',
      'Analytics and visitor tracking',
      'RSS feeds and social sharing'
    ],
    challenges: [
      'Creating a user-friendly rich text editor',
      'Implementing SEO best practices',
      'Managing image uploads and storage',
      'Building a scalable comment system'
    ],
    solutions: [
      'Integrated TipTap editor for rich text editing',
      'Implemented dynamic meta tags and structured data',
      'Used cloud storage with image optimization',
      'Created a robust comment system with moderation'
    ]
  },
  {
    id: 6,
    title: 'Chat Application',
    description: 'A real-time chat application with file sharing and group features.',
    techStack: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
    githubUrl: 'https://github.com/arjunvaradiyil',
    liveUrl: 'https://example.com',
    detailedDescription: 'A real-time chat application that supports private messaging, group chats, file sharing, and message history. Built with WebSocket technology for instant communication.',
    features: [
      'Real-time messaging with WebSocket',
      'Private and group chat functionality',
      'File sharing and media support',
      'Message history and search',
      'Online status and typing indicators',
      'Push notifications for new messages'
    ],
    challenges: [
      'Implementing real-time communication',
      'Handling file uploads and storage',
      'Managing message history efficiently',
      'Ensuring message delivery and reliability'
    ],
    solutions: [
      'Used Socket.io for real-time bidirectional communication',
      'Implemented file upload with progress tracking',
      'Created efficient message pagination',
      'Added message acknowledgment and retry logic'
    ]
  },
];

const ProjectCard = ({ project, onClick }: { project: Project; onClick: (project: Project) => void }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    gsap.set(el, { autoAlpha: 1 });
    gsap.fromTo(el, 
      { y: 50 },
      { 
        y: 0, 
        duration: 0.8,
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
        }
      }
    );
  }, []);

  return (
    <motion.div 
      ref={cardRef} 
      className="bg-slate-800/50 rounded-lg shadow-lg overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl hover:shadow-amber-400/10 hover:-translate-y-1 cursor-pointer"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onClick(project)}
    >
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
              className="inline-flex items-center gap-2 text-white font-semibold text-sm hover:text-amber-400 transition-colors focus:outline-none focus:text-amber-400"
              aria-label={`View live demo of ${project.title} (opens in new tab)`}
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink size={16} aria-hidden="true" />
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
              className="inline-flex items-center gap-2 text-white font-semibold text-sm hover:text-amber-400 transition-colors focus:outline-none focus:text-amber-400"
              aria-label={`View source code of ${project.title} on GitHub (opens in new tab)`}
              onClick={(e) => e.stopPropagation()}
            >
              <Github size={16} aria-hidden="true" />
              Source Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  const sectionRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <>
      <section id="projects" ref={sectionRef} className="relative py-24 sm:py-32 bg-gray-900/50 backdrop-blur-sm overflow-hidden border-y border-slate-800/50 scroll-mt-24">
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
              <ProjectCard key={project.id} project={project} onClick={handleProjectClick} />
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

      {/* Project Modal */}
      <AnimatePresence>
        {isModalOpen && selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl border border-white/10 shadow-2xl"
            >
              {/* Header */}
              <div className="sticky top-0 p-8 pb-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-t-3xl border-b border-white/10">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-4">{selectedProject.title}</h3>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      {selectedProject.detailedDescription || selectedProject.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techStack.map((tech) => (
                        <span key={tech} className="bg-amber-400/20 text-amber-400 text-sm font-semibold px-3 py-1 rounded-full border border-amber-400/30">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors duration-300"
                  >
                    <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 pt-6">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Features */}
                  {selectedProject.features && (
                    <div className="space-y-4">
                      <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                        <span className="w-8 h-0.5 bg-gradient-to-r from-amber-400 to-orange-400 mr-3"></span>
                        Key Features
                      </h4>
                      <div className="space-y-3">
                        {selectedProject.features.map((feature, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center space-x-3 p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/5"
                          >
                            <div className="w-2 h-2 bg-amber-400 rounded-full flex-shrink-0"></div>
                            <span className="text-gray-200 text-sm">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Challenges & Solutions */}
                  {selectedProject.challenges && selectedProject.solutions && (
                    <div className="space-y-6">
                      <div className="space-y-4">
                        <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                          <span className="w-8 h-0.5 bg-gradient-to-r from-red-400 to-pink-400 mr-3"></span>
                          Challenges
                        </h4>
                        <div className="space-y-3">
                          {selectedProject.challenges.map((challenge, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="flex items-center space-x-3 p-3 rounded-lg bg-red-500/10 backdrop-blur-sm border border-red-500/20"
                            >
                              <div className="w-2 h-2 bg-red-400 rounded-full flex-shrink-0"></div>
                              <span className="text-gray-200 text-sm">{challenge}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                          <span className="w-8 h-0.5 bg-gradient-to-r from-green-400 to-emerald-400 mr-3"></span>
                          Solutions
                        </h4>
                        <div className="space-y-3">
                          {selectedProject.solutions.map((solution, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="flex items-center space-x-3 p-3 rounded-lg bg-green-500/10 backdrop-blur-sm border border-green-500/20"
                            >
                              <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></div>
                              <span className="text-gray-200 text-sm">{solution}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-8 pt-6 border-t border-white/10 flex gap-4"
                >
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-amber-400 to-orange-400 hover:from-amber-500 hover:to-orange-500 text-gray-900 font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-center"
                    >
                      View Live Demo
                    </a>
                  )}
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-500 hover:to-gray-600 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-center"
                    >
                      View Source Code
                    </a>
                  )}
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 
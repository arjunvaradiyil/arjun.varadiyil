'use client';

import { useRef, useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  SiReact, SiNextdotjs, SiNodedotjs, SiMongodb, SiExpress, SiJavascript, 
  SiTypescript, SiPython, SiTailwindcss, SiHtml5, SiCss3, SiBootstrap, 
  SiMui, SiRedux, SiFirebase, SiGit, SiGithub, SiPostman, SiFigma, 
  SiDocker, SiVercel, SiNetlify, SiHeroku, SiLinux, SiMacos, SiAndroid, 
  SiIos, SiMongodb as SiMongoDB
} from 'react-icons/si';

gsap.registerPlugin(ScrollTrigger);

interface Skill {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  category: string;
  description: string;
  proficiency: string;
  experience: string;
  useCases: string[];
  technologies: string[];
}

const skillsData: Skill[] = [
  {
    name: 'React',
    icon: SiReact,
    category: 'Frontend',
    description: 'A JavaScript library for building user interfaces, particularly single-page applications.',
    proficiency: 'Advanced',
    experience: '3+ years',
    useCases: [
      'Building interactive user interfaces',
      'State management with hooks and context',
      'Component-based architecture',
      'Integration with various APIs'
    ],
    technologies: ['React Hooks', 'Context API', 'React Router', 'Styled Components']
  },
  {
    name: 'Next.js',
    icon: SiNextdotjs,
    category: 'Full Stack',
    description: 'A React framework for production with features like server-side rendering and static site generation.',
    proficiency: 'Advanced',
    experience: '2+ years',
    useCases: [
      'Server-side rendering (SSR)',
      'Static site generation (SSG)',
      'API routes and backend integration',
      'SEO optimization'
    ],
    technologies: ['App Router', 'API Routes', 'Image Optimization', 'Middleware']
  },
  {
    name: 'Node.js',
    icon: SiNodedotjs,
    category: 'Backend',
    description: 'A JavaScript runtime built on Chrome\'s V8 JavaScript engine for building scalable network applications.',
    proficiency: 'Advanced',
    experience: '3+ years',
    useCases: [
      'Building RESTful APIs',
      'Real-time applications with Socket.io',
      'File system operations',
      'Database integration'
    ],
    technologies: ['Express.js', 'Socket.io', 'File System', 'Streams']
  },
  {
    name: 'MongoDB',
    icon: SiMongoDB,
    category: 'Database',
    description: 'A NoSQL document database designed for ease of development and scaling.',
    proficiency: 'Advanced',
    experience: '3+ years',
    useCases: [
      'Document-based data storage',
      'Real-time data queries',
      'Scalable database solutions',
      'Data aggregation and analytics'
    ],
    technologies: ['Mongoose ODM', 'Aggregation Pipeline', 'Indexing', 'Replica Sets']
  },
  {
    name: 'TypeScript',
    icon: SiTypescript,
    category: 'Language',
    description: 'A strongly typed programming language that builds on JavaScript.',
    proficiency: 'Intermediate',
    experience: '2+ years',
    useCases: [
      'Type-safe development',
      'Better IDE support and IntelliSense',
      'Catching errors at compile time',
      'Improved code maintainability'
    ],
    technologies: ['Type Definitions', 'Interfaces', 'Generics', 'Enums']
  },
  {
    name: 'Tailwind CSS',
    icon: SiTailwindcss,
    category: 'Styling',
    description: 'A utility-first CSS framework for rapidly building custom user interfaces.',
    proficiency: 'Advanced',
    experience: '2+ years',
    useCases: [
      'Rapid UI development',
      'Responsive design',
      'Custom component styling',
      'Design system implementation'
    ],
    technologies: ['Utility Classes', 'Custom Config', 'JIT Mode', 'Plugins']
  },
  {
    name: 'Python',
    icon: SiPython,
    category: 'Language',
    description: 'A high-level, interpreted programming language known for its simplicity and readability.',
    proficiency: 'Intermediate',
    experience: '2+ years',
    useCases: [
      'Data analysis and processing',
      'Automation scripts',
      'API development with FastAPI',
      'Machine learning projects'
    ],
    technologies: ['FastAPI', 'Pandas', 'NumPy', 'Flask']
  },
  {
    name: 'Git',
    icon: SiGit,
    category: 'Version Control',
    description: 'A distributed version control system for tracking changes in source code.',
    proficiency: 'Advanced',
    experience: '3+ years',
    useCases: [
      'Version control and collaboration',
      'Branch management and merging',
      'Code review workflows',
      'Deployment automation'
    ],
    technologies: ['GitHub', 'GitLab', 'Bitbucket', 'Git Flow']
  },
  {
    name: 'Docker',
    icon: SiDocker,
    category: 'DevOps',
    description: 'A platform for developing, shipping, and running applications in containers.',
    proficiency: 'Intermediate',
    experience: '1+ year',
    useCases: [
      'Containerized applications',
      'Consistent development environments',
      'Microservices deployment',
      'CI/CD pipeline integration'
    ],
    technologies: ['Docker Compose', 'Multi-stage Builds', 'Docker Hub', 'Kubernetes']
  },
  {
    name: 'Firebase',
    icon: SiFirebase,
    category: 'Backend as a Service',
    description: 'A platform developed by Google for creating mobile and web applications.',
    proficiency: 'Intermediate',
    experience: '2+ years',
    useCases: [
      'Real-time database',
      'Authentication services',
      'Cloud functions',
      'Hosting and deployment'
    ],
    technologies: ['Firestore', 'Authentication', 'Cloud Functions', 'Hosting']
  }
];

const SkillItem = ({ skill, onClick }: { skill: Skill; onClick: (skill: Skill) => void }) => {
  return (
    <motion.div 
      className="flex flex-col items-center justify-center min-w-[120px] mx-4 p-4 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-amber-400/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-amber-400/10 cursor-pointer"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onClick(skill)}
    >
      <div className="p-3 rounded-full bg-slate-700/50 border-2 border-amber-400/50 text-amber-400 mb-3 transition-all duration-300 group-hover:scale-110">
        <skill.icon className="text-2xl" aria-hidden="true" />
      </div>
      <h3 className="text-white font-semibold text-sm text-center">{skill.name}</h3>
    </motion.div>
  );
};

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const handleSkillClick = (skill: Skill) => {
    setSelectedSkill(skill);
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
                <SkillItem key={index} skill={skill} onClick={handleSkillClick} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skill Modal */}
      <AnimatePresence>
        {isModalOpen && selectedSkill && (
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
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-2xl bg-amber-400/20 flex items-center justify-center border border-amber-400/30">
                      <selectedSkill.icon className="text-3xl text-amber-400" />
                    </div>
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                          {selectedSkill.category}
                        </span>
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-2">
                        {selectedSkill.name}
                      </h3>
                      <div className="flex items-center space-x-4 text-sm">
                        <span className="text-amber-400 font-medium">{selectedSkill.proficiency}</span>
                        <span className="text-gray-400">•</span>
                        <span className="text-gray-300">{selectedSkill.experience}</span>
                      </div>
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
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Description</h4>
                    <p className="text-gray-300 leading-relaxed">
                      {selectedSkill.description}
                    </p>
                  </div>

                  {/* Use Cases */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                      <span className="w-6 h-0.5 bg-gradient-to-r from-amber-400 to-orange-400 mr-3"></span>
                      Use Cases
                    </h4>
                    <div className="space-y-3">
                      {selectedSkill.useCases.map((useCase, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center space-x-3 p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/5"
                        >
                          <div className="w-2 h-2 bg-amber-400 rounded-full flex-shrink-0"></div>
                          <span className="text-gray-200 text-sm">{useCase}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                      <span className="w-6 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 mr-3"></span>
                      Related Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedSkill.technologies.map((tech, index) => (
                        <motion.span
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                          className="bg-blue-500/20 text-blue-400 text-sm font-medium px-3 py-1 rounded-full border border-blue-500/30"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 
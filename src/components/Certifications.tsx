'use client';

import { useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, ExternalLink, Calendar, Building, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

interface Certification {
  issuer: string;
  title: string;
  year: string;
  verifyUrl?: string;
  description?: string;
  skills?: string[];
  duration?: string;
  level?: string;
  category?: string;
  achievements?: string[];
  benefits?: string[];
}

const certificationsData: Certification[] = [
  {
    issuer: 'Illinois Institute of Technology (via Entri)',
    title: 'Full Stack Development (MERN Stack)',
    year: '2025',
    verifyUrl: 'https://www.credly.com/badges/36595a88-0be9-453a-86bd-2f642d0a0ea3/linked_in_profile',
    description: 'Comprehensive full-stack development certification covering the complete MERN stack ecosystem. This program provided hands-on experience with modern web development technologies and best practices.',
    skills: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JavaScript', 'HTML/CSS', 'RESTful APIs'],
    duration: '6 months',
    level: 'Advanced',
    category: 'Full Stack Development',
    achievements: [
      'Completed comprehensive MERN stack curriculum',
      'Built multiple full-stack applications',
      'Mastered modern JavaScript (ES6+) features',
      'Implemented RESTful API design patterns',
      'Developed responsive web applications',
      'Learned database design and optimization'
    ],
    benefits: [
      'Enhanced problem-solving skills',
      'Improved code organization and architecture',
      'Gained experience with modern development tools',
      'Learned industry best practices',
      'Developed portfolio of real-world projects'
    ]
  },
  {
    issuer: 'National Skill Development Corporation (NSDC)',
    title: 'Full Stack Development (MERN Stack)',
    year: '2025',
    verifyUrl: 'https://drive.google.com/file/d/1xXO0NrvRFy0YkWglUWc7L0Q7uRfXDa3M/view?usp=sharing',
    description: 'Government-recognized certification in full-stack development, validating skills in modern web technologies and software development practices.',
    skills: ['MERN Stack', 'Web Development', 'Database Management', 'API Development', 'Version Control'],
    duration: '4 months',
    level: 'Intermediate',
    category: 'Web Development',
    achievements: [
      'Government-recognized certification',
      'Validated technical skills',
      'Completed practical assessments',
      'Demonstrated project-based learning',
      'Achieved industry-standard competency'
    ],
    benefits: [
      'Government-recognized credential',
      'Enhanced employability',
      'Validated technical expertise',
      'Industry-standard certification',
      'Professional development recognition'
    ]
  },
  {
    issuer: 'HackerRank',
    title: 'JavaScript (Basic)',
    year: '2024',
    verifyUrl: 'https://www.hackerrank.com/certificates/14db58440180',
    description: 'Certification demonstrating proficiency in fundamental JavaScript concepts, problem-solving skills, and algorithmic thinking.',
    skills: ['JavaScript', 'Problem Solving', 'Algorithms', 'Data Structures', 'Logic Programming'],
    duration: 'Self-paced',
    level: 'Basic',
    category: 'Programming',
    achievements: [
      'Completed JavaScript fundamentals assessment',
      'Solved complex algorithmic problems',
      'Demonstrated strong problem-solving skills',
      'Achieved high accuracy in coding challenges',
      'Validated JavaScript programming knowledge'
    ],
    benefits: [
      'Enhanced problem-solving abilities',
      'Improved JavaScript fundamentals',
      'Better algorithmic thinking',
      'Validated programming skills',
      'Industry-recognized credential'
    ]
  },
  {
    issuer: 'HackerRank',
    title: 'Python (Basic)',
    year: '2024',
    verifyUrl: 'https://www.hackerrank.com/certificates/862b806b1334',
    description: 'Certification showcasing proficiency in Python programming fundamentals, data manipulation, and basic algorithmic concepts.',
    skills: ['Python', 'Data Types', 'Control Structures', 'Functions', 'Object-Oriented Programming'],
    duration: 'Self-paced',
    level: 'Basic',
    category: 'Programming',
    achievements: [
      'Completed Python fundamentals assessment',
      'Mastered Python syntax and concepts',
      'Solved data structure problems',
      'Demonstrated OOP understanding',
      'Achieved high performance in coding challenges'
    ],
    benefits: [
      'Strong Python foundation',
      'Enhanced programming logic',
      'Better understanding of data structures',
      'Improved problem-solving approach',
      'Validated Python skills'
    ]
  },
];

const CertificationCard = ({ cert, onClick }: { cert: Certification; onClick: (cert: Certification) => void }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    
    gsap.set(el, { autoAlpha: 1 });
    gsap.fromTo(el,
      { autoAlpha: 0, y: 30 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: el,
          start: 'top 90%',
          toggleActions: 'play none none none'
        }
      }
    );
  }, []);

  return (
    <motion.div 
      ref={cardRef} 
      className="bg-slate-800/50 p-6 rounded-lg shadow-lg flex items-center justify-between transition-all duration-300 hover:bg-slate-800 hover:shadow-amber-400/10 hover:shadow-2xl hover:-translate-y-1 cursor-pointer"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onClick(cert)}
    >
      <div className="flex items-center">
        <Award className="w-8 h-8 text-amber-400 mr-5 flex-shrink-0" />
        <div>
          <h3 className="text-lg font-bold text-white">{cert.title}</h3>
          <p className="text-gray-300 text-sm">{cert.issuer} - {cert.year}</p>
          {cert.level && (
            <span className="inline-block mt-1 px-2 py-1 bg-amber-400/20 text-amber-400 text-xs rounded-full">
              {cert.level}
            </span>
          )}
        </div>
      </div>
      <div className="flex items-center space-x-3">
        {cert.verifyUrl && (
          <a
            href={cert.verifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white font-semibold text-sm py-2 px-4 bg-slate-700/50 rounded-full hover:bg-amber-400/20 hover:text-amber-300 transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLink size={14} />
            Verify
          </a>
        )}
        <div className="text-amber-400">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
};

export default function Certifications() {
  const sectionRef = useRef(null);
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useLayoutEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    
    gsap.set(el, { autoAlpha: 1 });
    gsap.fromTo(el,
      { y: 50 },
      {
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  const handleCertClick = (cert: Certification) => {
    setSelectedCert(cert);
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
      <section id="certifications" ref={sectionRef} className="relative py-24 sm:py-32 bg-gray-900/50 backdrop-blur-sm overflow-hidden border-y border-slate-800/50 scroll-mt-24">
        <div className="absolute inset-0 bg-grid-slate-800/[0.04] bg-[bottom_1px_center] dark:bg-grid-slate-400/[0.05] dark:bg-bottom_1px_center"></div>
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <p className="text-base font-semibold leading-7 text-amber-400">Certifications</p>
            <h2 id="certifications-heading" className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">Certifications</h2>
            <p className="mt-6 max-w-2xl mx-auto text-lg leading-8 text-gray-300">
              My commitment to continuous learning is demonstrated by these credentials from respected institutions.
            </p>
          </div>
          <div className="mt-16 space-y-6">
            {certificationsData.map((cert, index) => (
              <CertificationCard key={index} cert={cert} onClick={handleCertClick} />
            ))}
          </div>
        </div>
      </section>

      {/* Certification Modal */}
      <AnimatePresence>
        {isModalOpen && selectedCert && (
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
                      <Award className="text-3xl text-amber-400" />
                    </div>
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                          {selectedCert.category || 'Certification'}
                        </span>
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-2">
                        {selectedCert.title}
                      </h3>
                      <div className="flex items-center space-x-4 text-sm">
                        <div className="flex items-center space-x-1">
                          <Building className="w-4 h-4 text-gray-400" />
                          <span className="text-gray-300">{selectedCert.issuer}</span>
                        </div>
                        <span className="text-gray-400">•</span>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4 text-gray-400" />
                          <span className="text-gray-300">{selectedCert.year}</span>
                        </div>
                        {selectedCert.level && (
                          <>
                            <span className="text-gray-400">•</span>
                            <span className="text-amber-400 font-medium">{selectedCert.level}</span>
                          </>
                        )}
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
                  {/* Description */}
                  {selectedCert.description && (
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Description</h4>
                      <p className="text-gray-300 leading-relaxed">
                        {selectedCert.description}
                      </p>
                    </div>
                  )}

                  {/* Skills */}
                  {selectedCert.skills && (
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                        <span className="w-6 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 mr-3"></span>
                        Skills Covered
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedCert.skills.map((skill, index) => (
                          <motion.span
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-blue-500/20 text-blue-400 text-sm font-medium px-3 py-1 rounded-full border border-blue-500/30"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Achievements */}
                  {selectedCert.achievements && (
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                        <span className="w-6 h-0.5 bg-gradient-to-r from-green-400 to-emerald-400 mr-3"></span>
                        Key Achievements
                      </h4>
                      <div className="space-y-3">
                        {selectedCert.achievements.map((achievement, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center space-x-3 p-3 rounded-lg bg-green-500/10 backdrop-blur-sm border border-green-500/20"
                          >
                            <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                            <span className="text-gray-200 text-sm">{achievement}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Benefits */}
                  {selectedCert.benefits && (
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                        <span className="w-6 h-0.5 bg-gradient-to-r from-amber-400 to-orange-400 mr-3"></span>
                        Benefits & Impact
                      </h4>
                      <div className="space-y-3">
                        {selectedCert.benefits.map((benefit, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center space-x-3 p-3 rounded-lg bg-amber-500/10 backdrop-blur-sm border border-amber-500/20"
                          >
                            <div className="w-2 h-2 bg-amber-400 rounded-full flex-shrink-0"></div>
                            <span className="text-gray-200 text-sm">{benefit}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* CTA */}
                {selectedCert.verifyUrl && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="mt-8 pt-6 border-t border-white/10"
                  >
                    <a
                      href={selectedCert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-gradient-to-r from-amber-400 to-orange-400 hover:from-amber-500 hover:to-orange-500 text-gray-900 font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-center inline-flex items-center justify-center gap-2"
                    >
                      <ExternalLink size={18} />
                      Verify Certification
                    </a>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 
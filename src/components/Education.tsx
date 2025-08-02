'use client';

import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { School, BookOpen } from 'lucide-react';
import TextHighlight from './TextHighlight';

gsap.registerPlugin(ScrollTrigger);

const educationData = [
  {
    institution: 'Cochin University of Science and Technology',
    degree: 'B.Tech in Computer Science Engineering',
    years: '2020 – 2024',
    details: [
      'Relevant Coursework: Data Structures, Web Development, AI/ML',
      'Key Project: Developed a "Personal Assistant for Deaf and Mute" using Flutter and MediaPipe, showcasing skills in mobile development and machine learning.'
    ]
  },
];

const certificationsData = [
  {
    title: 'Full Stack Development (MERN Stack)',
    provider: 'Illinois Institute of Technology (via Entri)',
    year: '2025',
    description: 'Comprehensive MERN stack development certification covering MongoDB, Express.js, React.js, and Node.js.',
    link: 'https://www.credly.com/badges/36595a88-0be9-453a-86bd-2f642d0a0ea3/linked_in_profile'
  },
  {
    title: 'Full Stack Development (MERN Stack)',
    provider: 'National Skill Development Corporation (NSDC)',
    year: '2025',
    description: 'Government-recognized certification in full stack development with focus on industry standards.',
    link: 'https://drive.google.com/file/d/1xXO0NrvRFy0YkWglUWc7L0Q7uRfXDa3M/view?usp=sharing'
  },
  {
    title: 'JavaScript (Basic)',
    provider: 'HackerRank',
    year: '2024',
    description: 'Problem-solving and JavaScript fundamentals certification.',
    link: 'https://www.hackerrank.com/certificates/14db58440180'
  },
  {
    title: 'Python (Basic)',
    provider: 'HackerRank',
    year: '2024',
    description: 'Python programming fundamentals and algorithmic thinking.',
    link: 'https://www.hackerrank.com/certificates/862b806b1334'
  }
];

const Education = () => {
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);

  useLayoutEffect(() => {
    const sectionEl = sectionRef.current;
    const items = gsap.utils.toArray('.timeline-item-edu');

    if (!sectionEl) return;

    gsap.set(items, { autoAlpha: 1, y: 0 });

    ScrollTrigger.create({
      trigger: sectionEl,
      start: 'top 60%',
      end: 'bottom 20%',
      onEnter: () => {
        gsap.to(items, {
          autoAlpha: 1,
          y: 0,
          stagger: 0.3,
          duration: 0.8,
          ease: 'power3.out',
        });
      },
      onLeaveBack: () => {
        gsap.to(items, {
          autoAlpha: 0,
          y: 50,
          stagger: 0.3,
          duration: 0.8,
          ease: 'power3.in',
        });
      },
    });
  }, []);

  return (
    <section id="education" ref={sectionRef} className="relative py-24 sm:py-32 bg-gray-900/50 backdrop-blur-sm overflow-hidden border-y border-slate-800/50 scroll-mt-24">
      <div className="absolute inset-0 bg-grid-slate-800/[0.04] bg-[bottom_1px_center] dark:bg-grid-slate-400/[0.05] dark:bg-bottom_1px_center"></div>
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold leading-7 text-amber-400">Education & Certifications</p>
          <h2 id="education-heading" className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">Education & Certifications</h2>
          <TextHighlight>
            <p className="mt-6 text-lg leading-8 text-gray-300 max-w-3xl mx-auto">
              My formal education provides a strong foundation, while certifications and workshops demonstrate my commitment to continuous learning and practical skills.
            </p>
          </TextHighlight>
        </div>

        {/* Formal Education */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Formal Education</h3>
          <div ref={timelineRef} className="relative">
            <div className="absolute left-4 lg:left-1/2 -translate-x-1/2 h-full w-0.5 bg-slate-700/50"></div>
            {educationData.map((edu, index) => (
              <div key={index} className="timeline-item-edu relative mb-12">
                <div className={`w-full pl-12 lg:w-1/2 lg:pl-0 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8 lg:ml-auto'}`}>
                  <div className={`text-left ${index % 2 === 0 ? 'lg:text-left' : 'lg:text-right'}`}>
                    <p className="text-sm font-semibold text-gray-400">{edu.years}</p>
                    <h3 className="mt-1 text-2xl font-bold text-white">{edu.institution}</h3>
                    <p className="mt-1 text-lg text-amber-400">{edu.degree}</p>
                  </div>
                  <div className="bg-slate-800/50 p-6 rounded-lg shadow-lg mt-4 text-left">
                    <TextHighlight>
                      <ul className="space-y-3 text-gray-300">
                        {edu.details.map((detail, i) => (
                          <li key={i} className="flex items-start">
                            <BookOpen className="w-4 h-4 mr-3 mt-1.5 text-amber-400 flex-shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </TextHighlight>
                  </div>
                </div>
                <div className="absolute top-4 left-4 lg:left-1/2 -translate-x-1/2 w-8 h-8 bg-amber-400 rounded-full border-4 border-slate-800 flex items-center justify-center">
                  <School className="w-4 h-4 text-slate-800" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Relevant Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certificationsData.map((cert, index) => (
              <div key={index} className="bg-slate-800/50 p-6 rounded-lg shadow-lg hover:shadow-amber-400/10 transition-all duration-300 hover:-translate-y-1">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-lg font-bold text-white">{cert.title}</h4>
                    <p className="text-amber-400 text-sm">{cert.provider}</p>
                    <p className="text-gray-400 text-sm">{cert.year}</p>
                  </div>
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-amber-400 hover:text-amber-300 transition-colors text-sm font-semibold"
                  >
                    Verify →
                  </a>
                </div>
                <TextHighlight>
                  <p className="text-gray-300 text-sm">{cert.description}</p>
                </TextHighlight>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education; 
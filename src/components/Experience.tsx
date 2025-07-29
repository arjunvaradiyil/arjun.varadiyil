'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Building, Code } from 'lucide-react';
import TextHighlight from './TextHighlight';

gsap.registerPlugin(ScrollTrigger);

const experienceData = [
  {
    role: 'Full Stack Developer',
    company: 'Faircode Technologies, Kochi',
    years: 'April 2025 – Present',
    description: [
      'Developed scalable web applications using the MERN stack, improving app performance by 25% through backend optimization.',
      'Collaborated with cross-functional teams to deliver high-quality software solutions, reducing API response time by 40%.',
      'Engineered and maintained RESTful APIs for seamless front-end to back-end communication.',
      'Implemented responsive and interactive user interfaces using React.js and Next.js, leading to a 15% increase in user engagement.',
    ],
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Next.js', 'Tailwind CSS', 'Docker'],
  },
  {
    role: 'Faculty - Computer Science',
    company: 'Xceed Competitive Examination Center, Malappuram',
    years: 'July 2024 – March 2025',
    description: [
      'Mentored students in programming fundamentals and advanced computer science concepts.',
      'Designed and implemented a comprehensive curriculum for computer science education.',
      'Cultivated an engaging and supportive learning environment, resulting in a 30% improvement in student project completion rates.',
      'Instructed courses on Data Structures, Algorithms, Web Development, and Python programming.',
      'Successfully guided over 50+ students from foundational concepts to deploying their first full-stack applications.',
    ],
    technologies: ['Data Structures', 'Algorithms', 'Web Development', 'Python', 'Programming Fundamentals'],
  },
];

const Experience = () => {
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);

  useEffect(() => {
    const sectionEl = sectionRef.current;
    const items = gsap.utils.toArray('.timeline-item');

    gsap.set(items, { opacity: 0, y: 50 });

    ScrollTrigger.create({
      trigger: sectionEl,
      start: 'top 60%',
      end: 'bottom 20%',
      onEnter: () => {
        gsap.to(items, {
          opacity: 1,
          y: 0,
          stagger: 0.3,
          duration: 0.8,
          ease: 'power3.out',
        });
      },
      onLeaveBack: () => {
        gsap.to(items, {
          opacity: 0,
          y: 50,
          stagger: 0.3,
          duration: 0.8,
          ease: 'power3.in',
        });
      },
    });
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="relative py-24 sm:py-32 bg-gray-900/50 backdrop-blur-sm overflow-hidden border-y border-slate-800/50 scroll-mt-24">
      <div className="absolute inset-0 bg-grid-slate-800/[0.04] bg-[bottom_1px_center] dark:bg-grid-slate-400/[0.05] dark:bg-bottom_1px_center"></div>
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold leading-7 text-amber-400">Career Journey</p>
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">Work Experience</h2>
        </div>
        <div ref={timelineRef} className="mt-16 relative">
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-slate-700/50"></div>
          {experienceData.map((exp, index) => (
            <div key={index} className="timeline-item relative mb-12">
              <div className={`flex items-center ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                <div className="w-1/2 px-6">
                  <div className={`text-center ${index % 2 === 0 ? 'lg:text-left' : 'lg:text-right'}`}>
                    <p className="text-sm font-semibold text-gray-400">{exp.years}</p>
                    <h3 className="mt-1 text-2xl font-bold text-white">{exp.role}</h3>
                    <p className="mt-1 text-md text-amber-400">{exp.company}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 bg-slate-800 rounded-full border-4 border-gray-900/50 flex items-center justify-center">
                  <Building className="w-4 h-4 text-amber-400" />
                </div>
              </div>
              <div className={`w-1/2 px-6 ${index % 2 === 0 ? 'ml-auto' : ''}`}>
                <div className="bg-slate-800/50 p-6 rounded-lg shadow-lg mt-4">
                  <TextHighlight>
                    <ul className="space-y-3 text-gray-300">
                      {exp.description.map((desc, i) => (
                        <li key={i} className="flex items-start">
                          <Code className="w-4 h-4 mr-3 mt-1.5 text-amber-400 flex-shrink-0" />
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </TextHighlight>
                  {exp.technologies && (
                    <div className="mt-6">
                      <h4 className="font-semibold text-amber-400 mb-3">Key Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span key={tech} className="bg-slate-700 text-gray-200 text-sm font-medium px-3 py-1 rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 
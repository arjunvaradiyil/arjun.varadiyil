'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
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
    keyTopics: ['Data Structures', 'Algorithms', 'Web Development', 'Python', 'Programming Fundamentals'],
  },
];

export default function Experience() {
  const sectionRef = useRef(null);

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
    <section id="experience" className="py-20 relative bg-zinc-900/70 backdrop-blur-sm border-y border-slate-800/50 scroll-mt-24" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Work Experience</h2>
        </div>
        <div className="space-y-12">
          {experienceData.map((exp, index) => (
            <div key={index} className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-1">
                <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                <p className="text-amber-400 font-semibold mt-1">{exp.company}</p>
                <p className="text-gray-400 text-sm mt-1">{exp.years}</p>
              </div>
              <div className="md:col-span-2">
                <TextHighlight>
                  <ul className="text-gray-300 space-y-3 list-disc list-inside">
                    {exp.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </TextHighlight>
                
                {exp.technologies && (
                  <div className="mt-4">
                    <h4 className="font-semibold text-amber-400 mb-2">Key Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="bg-slate-700 text-gray-200 text-sm font-medium px-3 py-1 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                {exp.keyTopics && (
                  <div className="mt-4">
                    <h4 className="font-semibold text-amber-400 mb-2">Key Topics</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.keyTopics.map((topic) => (
                        <span key={topic} className="bg-slate-700 text-gray-200 text-sm font-medium px-3 py-1 rounded-full">
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 
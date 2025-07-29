'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TextHighlight from './TextHighlight';

gsap.registerPlugin(ScrollTrigger);

interface EducationItem {
  institution: string;
  degree: string;
  years: string;
  details: string[];
}

const educationData: EducationItem[] = [
  {
    institution: 'Cochin University of Science and Technology',
    degree: 'B.Tech in Computer Science Engineering',
    years: '2020 – 2024',
    details: [
      'CGPA: 7.5',
      'Relevant Coursework: Data Structures, Web Development, AI/ML',
      'Key Project: Developed a "Personal Assistant for Deaf and Mute" using Flutter and MediaPipe, showcasing skills in mobile development and machine learning.'
    ]
  },
  {
    institution: 'ASMHSS Velliyanchery, Kerala State Board',
    degree: 'Class XII – Computer Science',
    years: '2018 – 2020',
    details: [
      'Percentage: 74%',
      'Focused on core computer science principles and programming fundamentals.'
    ]
  },
];

const EducationCard = ({ edu }: { edu: EducationItem }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = cardRef.current;
    const handleMouseMove = (e: MouseEvent) => {
      if (!element) return;
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      element.style.setProperty('--x', `${x}px`);
      element.style.setProperty('--y', `${y}px`);
    };
    element?.addEventListener('mousemove', handleMouseMove);
    return () => {
      element?.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div ref={cardRef} className="card-spotlight bg-zinc-900/70 p-6 rounded-lg border border-slate-700/50">
      <h3 className="text-2xl font-bold text-white">{edu.institution}</h3>
      <p className="text-amber-400 font-semibold mt-1">{edu.degree}</p>
      <p className="text-gray-400 text-sm mt-1 mb-4">{edu.years}</p>
      <TextHighlight>
        <ul className="text-gray-300 space-y-2 list-disc list-inside">
          {edu.details.map((detail: string, i: number) => (
            <li key={i}>{detail}</li>
          ))}
        </ul>
      </TextHighlight>
    </div>
  );
};

export default function Education() {
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
    <section id="education" className="py-20 relative bg-zinc-900/70 backdrop-blur-sm border-y border-slate-800/50 scroll-mt-24" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">My Education</h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            My academic journey has provided me with a strong foundation in computer science and a passion for technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {educationData.map((edu, index) => (
            <EducationCard key={index} edu={edu} />
          ))}
        </div>
      </div>
    </section>
  );
} 
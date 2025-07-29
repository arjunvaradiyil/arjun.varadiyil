'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TextHighlight from './TextHighlight';

gsap.registerPlugin(ScrollTrigger);

const certificationsData = [
  {
    issuer: 'Illinois Institute of Technology (via Entri)',
    title: 'Full Stack Development (MERN Stack)',
    year: '2025',
  },
  {
    issuer: 'National Skill Development Corporation (NSDC)',
    title: 'Full Stack Development (MERN Stack)',
    year: '2025',
  },
  {
    issuer: 'HackerRank',
    title: 'JavaScript (Basic)',
    year: '2024',
  },
  {
    issuer: 'HackerRank',
    title: 'Python (Basic)',
    year: '2024',
  },
];

const CertificationCard = ({ cert }: { cert: { issuer: string, title: string, year: string } }) => {
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
      <TextHighlight>
        <h3 className="text-2xl font-bold text-white">{cert.title}</h3>
      </TextHighlight>
      <p className="text-amber-400 font-semibold mt-1">{cert.issuer}</p>
      <p className="text-gray-400 text-sm mt-1">{cert.year}</p>
    </div>
  );
};

export default function Certifications() {
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
    <section id="certifications" className="py-20 relative bg-zinc-900/70 backdrop-blur-sm border-y border-slate-800/50 scroll-mt-24" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Certifications</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {certificationsData.map((cert, index) => (
            <CertificationCard key={index} cert={cert} />
          ))}
        </div>
      </div>
    </section>
  );
} 
'use client';

import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, ExternalLink } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface Certification {
  issuer: string;
  title: string;
  year: string;
  verifyUrl?: string;
}

const certificationsData: Certification[] = [
  {
    issuer: 'Illinois Institute of Technology (via Entri)',
    title: 'Full Stack Development (MERN Stack)',
    year: '2025',
    verifyUrl: 'https://www.credly.com/badges/36595a88-0be9-453a-86bd-2f642d0a0ea3/linked_in_profile',
  },
  {
    issuer: 'National Skill Development Corporation (NSDC)',
    title: 'Full Stack Development (MERN Stack)',
    year: '2025',
    verifyUrl: 'https://drive.google.com/file/d/1xXO0NrvRFy0YkWglUWc7L0Q7uRfXDa3M/view?usp=sharing',
  },
  {
    issuer: 'HackerRank',
    title: 'JavaScript (Basic)',
    year: '2024',
    verifyUrl: 'https://www.hackerrank.com/certificates/14db58440180',
  },
  {
    issuer: 'HackerRank',
    title: 'Python (Basic)',
    year: '2024',
    verifyUrl: 'https://www.hackerrank.com/certificates/862b806b1334',
  },
];

const CertificationCard = ({ cert }: { cert: Certification }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.fromTo(cardRef.current,
      { autoAlpha: 0, y: 30 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 90%',
          toggleActions: 'play none none none'
        }
      }
    );
  }, []);

  return (
    <div ref={cardRef} className="invisible bg-slate-800/50 p-6 rounded-lg shadow-lg flex items-center justify-between transition-all duration-300 hover:bg-slate-800 hover:shadow-amber-400/10 hover:shadow-2xl hover:-translate-y-1">
      <div className="flex items-center">
        <Award className="w-8 h-8 text-amber-400 mr-5 flex-shrink-0" />
        <div>
          <h3 className="text-lg font-bold text-white">{cert.title}</h3>
          <p className="text-gray-300 text-sm">{cert.issuer} - {cert.year}</p>
        </div>
      </div>
      {cert.verifyUrl && (
        <a
          href={cert.verifyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-white font-semibold text-sm py-2 px-4 bg-slate-700/50 rounded-full hover:bg-amber-400/20 hover:text-amber-300 transition-colors"
        >
          <ExternalLink size={14} />
          Verify
        </a>
      )}
    </div>
  );
};

export default function Certifications() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    gsap.fromTo(sectionRef.current,
      { autoAlpha: 0 },
      {
        autoAlpha: 1,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      }
    );
  }, []);

  return (
    <section id="certifications" ref={sectionRef} className="relative py-24 sm:py-32 bg-gray-900/50 backdrop-blur-sm overflow-hidden border-y border-slate-800/50 scroll-mt-24 invisible">
      <div className="absolute inset-0 bg-grid-slate-800/[0.04] bg-[bottom_1px_center] dark:bg-grid-slate-400/[0.05] dark:bg-bottom_1px_center"></div>
      <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold leading-7 text-amber-400">Credentials</p>
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">Certifications</h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg leading-8 text-gray-300">
            My commitment to continuous learning is demonstrated by these credentials from respected institutions.
          </p>
        </div>
        <div className="mt-16 space-y-6">
          {certificationsData.map((cert, index) => (
            <CertificationCard key={index} cert={cert} />
          ))}
        </div>
      </div>
    </section>
  );
} 
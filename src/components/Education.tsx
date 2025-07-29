'use client';

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TextHighlight from './TextHighlight';

gsap.registerPlugin(ScrollTrigger);

const educationData = [
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

export default function Education() {
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
    <section id="education" className="py-20 relative bg-[#0F172A]/70 backdrop-blur-sm border-y border-slate-800/50 scroll-mt-24" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">My Education</h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            My academic journey has provided me with a strong foundation in computer science and a passion for technology.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {educationData.map((edu, index) => (
            <div key={index} className="bg-slate-800/50 p-6 rounded-lg border border-slate-700/50">
              <h3 className="text-2xl font-bold text-white">{edu.institution}</h3>
              <p className="text-amber-400 font-semibold mt-1">{edu.degree}</p>
              <p className="text-gray-400 text-sm mt-1 mb-4">{edu.years}</p>
              <TextHighlight>
                <ul className="text-gray-300 space-y-2 list-disc list-inside">
                  {edu.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </TextHighlight>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 
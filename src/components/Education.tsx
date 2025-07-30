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
  {
    institution: 'ASMHSS Velliyanchery, Kerala State Board',
    degree: 'Class XII – Computer Science',
    years: '2018 – 2020',
    details: [
      'Focused on core computer science principles and programming fundamentals.'
    ]
  },
];

const Education = () => {
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);

  useLayoutEffect(() => {
    const sectionEl = sectionRef.current;
    const items = gsap.utils.toArray('.timeline-item-edu');

    gsap.set(items, { autoAlpha: 0, y: 50 });

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
          <p className="text-base font-semibold leading-7 text-amber-400">Academic Journey</p>
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">My Education</h2>
        </div>
        <div ref={timelineRef} className="mt-16 relative">
          <div className="absolute left-4 lg:left-1/2 -translate-x-1/2 h-full w-0.5 bg-slate-700/50"></div>
          {educationData.map((edu, index) => (
            <div key={index} className="timeline-item-edu relative mb-12 invisible">
              <div className={`w-full pl-12 lg:w-1/2 lg:pl-0 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8 lg:ml-auto'}`}>
                <div className={`text-left ${index % 2 === 0 ? 'lg:text-left' : 'lg:text-right'}`}>
                  <p className="text-sm font-semibold text-gray-400">{edu.years}</p>
                  <h3 className="mt-1 text-2xl font-bold text-white">{edu.institution}</h3>
                  <p className="mt-1 text-md text-amber-400">{edu.degree}</p>
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
              <div className="absolute top-4 left-4 lg:left-1/2 -translate-x-1/2 w-8 h-8 bg-slate-800 rounded-full border-4 border-gray-900/50 flex items-center justify-center">
                <School className="w-4 h-4 text-amber-400" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education; 
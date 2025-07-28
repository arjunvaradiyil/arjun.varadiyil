'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TextHighlight from './TextHighlight';

gsap.registerPlugin(ScrollTrigger);

const volunteeringData = [
  {
    role: 'Campus Lead',
    organization: 'Tinkerhub Tech Community',
    years: '2022 – 2023',
    description: [
      'Led a campus chapter of a thriving tech community, fostering an environment of learning and innovation.',
      'Organized and hosted workshops, hackathons, and speaker sessions on various technology topics.',
      'Mentored fellow students, providing guidance on technical skills and career development.',
    ],
  },
  {
    role: 'NSS Volunteer',
    organization: 'Cochin University of Science and Technology',
    years: '2021 – 2023',
    description: [
      'Actively participated in community service and social welfare activities.',
      'Developed teamwork and leadership skills through organizing and executing events.',
      'Contributed to initiatives focused on environmental conservation and community health.',
    ],
  },
];

export default function Volunteering() {
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
    <section id="volunteering" className="py-20 relative bg-[#0F172A]/70 backdrop-blur-sm border-y border-slate-800/50" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Volunteering & Leadership</h2>
        </div>
        <div className="space-y-12">
          {volunteeringData.map((exp, index) => (
            <div key={index} className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-1">
                <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                <p className="text-amber-400 font-semibold mt-1">{exp.organization}</p>
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 
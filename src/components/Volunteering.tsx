'use client';

import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HeartHandshake, Users, type LucideIcon } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface VolunteerExperience {
  role: string;
  organization: string;
  years: string;
  description: string[];
  icon: LucideIcon;
}

const volunteeringData: VolunteerExperience[] = [
  {
    role: 'Campus Lead',
    organization: 'Tinkerhub Tech Community',
    years: '2022 – 2023',
    description: [
      'Led a campus chapter of a thriving tech community, fostering an environment of learning and innovation.',
      'Organized and hosted workshops, hackathons, and speaker sessions on various technology topics.',
      'Mentored fellow students, providing guidance on technical skills and career development.',
    ],
    icon: HeartHandshake,
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
    icon: Users,
  },
];

const VolunteerCard = ({ exp }: { exp: VolunteerExperience }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    gsap.set(el, { autoAlpha: 1 });
    gsap.fromTo(el,
      { y: 30 },
      {
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
    <div ref={cardRef} className="bg-slate-800/50 p-6 rounded-lg shadow-lg flex flex-col transition-all duration-300 hover:bg-slate-800 hover:shadow-amber-400/10 hover:shadow-2xl hover:-translate-y-1">
      <div className="flex items-center mb-4">
        <exp.icon className="w-8 h-8 text-amber-400 mr-4 flex-shrink-0" />
        <div>
          <h3 className="text-xl font-bold text-white">{exp.role}</h3>
          <p className="text-gray-300 text-sm">{exp.organization} &bull; {exp.years}</p>
        </div>
      </div>
      <ul className="text-gray-400 text-sm space-y-2 list-disc list-inside flex-grow">
        {exp.description.map((desc, i) => (
          <li key={i}>{desc}</li>
        ))}
      </ul>
    </div>
  );
}

export default function Volunteering() {
  const sectionRef = useRef(null);

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
        },
      }
    );
  }, []);

  return (
    <section id="volunteering" ref={sectionRef} className="relative py-24 sm:py-32 bg-gray-900/50 backdrop-blur-sm overflow-hidden border-y border-slate-800/50 scroll-mt-24">
      <div className="absolute inset-0 bg-grid-slate-800/[0.04] bg-[bottom_1px_center] dark:bg-grid-slate-400/[0.05] dark:bg-bottom_1px_center"></div>
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold leading-7 text-amber-400">Volunteering</p>
          <h2 id="volunteering-heading" className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">Volunteering & Leadership</h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg leading-8 text-gray-300">
            Giving back to the community and taking on leadership roles are important to my personal and professional growth.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {volunteeringData.map((exp, index) => (
            <VolunteerCard key={index} exp={exp} />
          ))}
        </div>
      </div>
    </section>
  );
} 
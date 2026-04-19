'use client';

import React from 'react';
import SectionHeader from '../../components/About/SectionHeader';
import Timeline from '../../components/About/Timeline';
import Contactform from '../../components/Contactform';
import AboutSkills from '../../components/About/AboutSkills';
import Experience from '../../components/About/Experience';
import AboutHero from '../../components/About/AboutHero';
import { NEU } from '../../components/ui/neuTheme';

export default function AboutPage() {
  return (
    <div className={`${NEU.pageShell} overflow-hidden text-gray-900 dark:text-gray-100`}>
      <AboutHero />
      <AboutSkills />
      <Experience />

      <section className={`${NEU.section} mx-auto max-w-5xl px-6 py-20`}>
        <div className='relative z-10'>
          <SectionHeader
            title='Education'
            subtitle='A timeline of my academic background'
          />
          <Timeline
            items={[
              {
                year: '2020 – 2024',
                title: 'Cochin University of Science and Technology',
                description: 'B.Tech in Computer Science Engineering. Coursework: Data Structures, Web Development, AI/ML',
                grade: 'CGPA: 7.5',
                image: '/assets/images/cusat.png',
              },
              {
                year: '2018 – 2020',
                title: 'ASMHSS Velliyanchery, Kerala State Board',
                description: 'Class XII - Computer Science',
                grade: 'Percentage: 74%',
                image: '/assets/images/asm.webp',
              },
            ]}
          />
        </div>
      </section>

      <Contactform />
    </div>
  );
}

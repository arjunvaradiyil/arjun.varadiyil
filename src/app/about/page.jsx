'use client';

import React from 'react';
import SectionHeader from '../../components/About/SectionHeader';
import Timeline from '../../components/About/Timeline';
import Contactform from '../../components/Contactform';
import AboutSkills from '../../components/About/AboutSkills';
import Experience from '../../components/About/Experience';
import AboutHero from '../../components/About/AboutHero';

export default function AboutPage() {
  return (
    <div className='text-white overflow-hidden'>
      <AboutHero />
      <AboutSkills />
      <Experience />

      <section className='py-20 px-6 max-w-5xl mx-auto'>
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
      </section>

      <Contactform />
    </div>
  );
}

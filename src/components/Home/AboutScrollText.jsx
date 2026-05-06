'use client';

import React from 'react';
import WordStaggerReveal from '../ui/WordStaggerReveal';
import { NEU } from '../ui/neuTheme';

const TEXT =
  'I craft elegant solutions to complex problems, building scalable web applications with the MERN stack.';

export default function AboutScrollText() {
  return (
    <section
      id='about'
      className={`${NEU.section} flex min-h-[calc(100svh-3.5rem)] w-full snap-start snap-always items-center justify-center px-6 py-12 md:min-h-[calc(100svh-4rem)] md:py-16`}
    >
      <div className='relative z-10 mx-auto max-w-5xl'>
        <p className={`mb-8 flex justify-center ${NEU.eyebrow}`}>
          <span className={NEU.badge}>About</span>
        </p>

        <div className={`${NEU.cardStatic} p-8 md:p-10`}>
          <WordStaggerReveal
            as='h2'
            text={TEXT}
            className={`${NEU.display} text-3xl leading-tight sm:text-4xl md:text-5xl lg:text-6xl`}
            viewport={{ once: true, amount: 0.45 }}
          />
        </div>
      </div>
    </section>
  );
}

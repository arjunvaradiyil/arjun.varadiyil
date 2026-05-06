'use client';

import React, { useEffect, useState } from 'react';
import WordStaggerReveal from '../ui/WordStaggerReveal';
import { NEU } from '../ui/neuTheme';
import { getAboutSummaryForFrontend } from '../../lib/cms';

export default function AboutScrollText() {
  const [text, setText] = useState('');

  useEffect(() => {
    let active = true;
    getAboutSummaryForFrontend().then((summary) => {
      if (active) setText(summary || '');
    });
    return () => {
      active = false;
    };
  }, []);

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
          {text ? (
            <WordStaggerReveal
              as='h2'
              text={text}
              className={`${NEU.display} text-3xl leading-tight sm:text-4xl md:text-5xl lg:text-6xl`}
              viewport={{ once: true, amount: 0.45 }}
            />
          ) : (
            <p className={`${NEU.bodyText} text-center`}>No about summary found in CMS.</p>
          )}
        </div>
      </div>
    </section>
  );
}

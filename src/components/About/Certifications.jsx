'use client';

import React from 'react';
import { certifications } from '../../data/certificationsData';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { NEU } from '../ui/neuTheme';
import WordStaggerReveal from '../ui/WordStaggerReveal';

const INTRO =
  'Professional certifications and credentials that validate my expertise in full-stack development and programming fundamentals.';

const ACCENTS = [
  {
    wrap: 'bg-amber-100 text-amber-900 dark:border-white dark:bg-amber-950/80 dark:text-amber-200',
  },
  {
    wrap: 'bg-violet-100 text-violet-900 dark:border-white dark:bg-violet-950/80 dark:text-violet-200',
  },
  {
    wrap: 'bg-indigo-100 text-indigo-900 dark:border-white dark:bg-indigo-950/80 dark:text-indigo-200',
  },
  {
    wrap: 'bg-teal-100 text-teal-900 dark:border-white dark:bg-teal-950/80 dark:text-teal-200',
  },
];

export default function Certifications() {
  return (
    <section className={`${NEU.section} w-full px-6 py-24 md:px-20`}>
      <motion.div
        className='relative z-10 mx-auto max-w-6xl'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className='mb-5 flex justify-center md:justify-start'
        >
          <span className={`${NEU.badge} font-syne tracking-tight`}>Credentials</span>
        </motion.p>

        <WordStaggerReveal
          as='h2'
          text='Certifications'
          className={`${NEU.display} mb-6 text-center text-[36px] sm:text-[48px] md:text-left md:text-[64px]`}
          viewport={{ once: true, amount: 0.4 }}
        />

        <WordStaggerReveal
          text={INTRO}
          className='mx-auto mb-10 max-w-3xl text-center text-lg text-gray-800 dark:text-gray-300 md:mx-0 md:text-left'
          viewport={{ once: true, amount: 0.35 }}
        />

        <ul
          className='grid list-none grid-cols-1 gap-5 p-0 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6'
          aria-label='Certification cards'
        >
          {certifications.map((cert, index) => {
            const accent = ACCENTS[index % ACCENTS.length];
            return (
              <motion.li
                key={cert.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-32px' }}
                transition={{ duration: 0.45, delay: Math.min(index * 0.07, 0.35) }}
                className='min-w-0'
              >
                <article className={`${NEU.card} flex h-full min-h-[280px] flex-col p-6 sm:min-h-[300px] sm:p-7`}>
                  <div className='mb-5 flex items-start justify-between gap-3'>
                    <div
                      className={`inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-lg border-2 border-gray-900 ${accent.wrap}`}
                    >
                      <Award className='h-7 w-7' strokeWidth={2} aria-hidden />
                    </div>
                    <div className='flex flex-col items-end gap-2 text-right'>
                      <span className='font-sans text-2xl font-semibold tabular-nums text-gray-400 dark:text-gray-500 sm:text-3xl'>
                        {cert.id}
                        <span className='text-indigo-600 dark:text-amber-400'>.</span>
                      </span>
                      <span className='inline-flex border-2 border-dashed border-gray-900 bg-white px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-gray-800 dark:border-white dark:bg-zinc-900 dark:text-gray-200 sm:text-[11px]'>
                        {cert.date}
                      </span>
                    </div>
                  </div>

                  <WordStaggerReveal
                    as='h3'
                    text={cert.title}
                    className='font-syne text-lg font-bold leading-snug tracking-tight text-gray-900 dark:text-white sm:text-xl'
                    viewport={{ once: true, amount: 0.2 }}
                  />
                  <WordStaggerReveal
                    text={cert.issuer}
                    className='mt-2 text-sm font-bold text-indigo-800 dark:text-amber-400 sm:text-base'
                    viewport={{ once: true, amount: 0.15 }}
                    staggerChildren={0.04}
                    delayChildren={0.02}
                  />
                  <WordStaggerReveal
                    text={cert.description}
                    className='mt-4 flex-1 border-t-2 border-gray-900 pt-4 font-sans text-sm leading-relaxed text-gray-800 dark:border-white dark:text-gray-300 sm:text-[15px]'
                    viewport={{ once: true, amount: 0.2 }}
                  />
                </article>
              </motion.li>
            );
          })}
        </ul>
      </motion.div>
    </section>
  );
}

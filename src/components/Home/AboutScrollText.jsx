'use client';

import React, { useMemo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useTheme } from '../ThemeProvider';
import { NEU } from '../ui/neuTheme';

const TEXT =
  'I craft elegant solutions to complex problems, building scalable web applications with the MERN stack.';

export default function AboutScrollText() {
  const { theme } = useTheme();
  const reduceMotion = useReducedMotion();
  const words = useMemo(() => TEXT.split(' '), []);

  const doneColor = theme === 'dark' ? '#f5f5f5' : '#111111';

  const container = {
    hidden: {},
    visible: {
      transition: reduceMotion
        ? { staggerChildren: 0, delayChildren: 0 }
        : { staggerChildren: 0.06, delayChildren: 0.08 },
    },
  };

  const item = {
    hidden: { opacity: 0.35, color: theme === 'dark' ? '#737373' : '#a3a3a3' },
    visible: {
      opacity: 1,
      color: doneColor,
      transition: { duration: reduceMotion ? 0 : 0.45, ease: [0.22, 1, 0.36, 1] },
    },
  };

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
          <motion.h1
            className={`${NEU.display} text-3xl leading-tight sm:text-4xl md:text-5xl lg:text-6xl`}
            variants={container}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.45 }}
          >
            {words.map((word, i) => (
              <motion.span key={i} variants={item} className='mr-2 inline-block' style={{ willChange: 'opacity, color' }}>
                {word}
              </motion.span>
            ))}
          </motion.h1>
        </div>
      </div>
    </section>
  );
}

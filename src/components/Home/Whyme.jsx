'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, animate, useInView, useMotionValueEvent } from 'framer-motion';
import { NEU } from '../ui/neuTheme';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const Counter = ({ to, duration = 1.5 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(Number.isInteger(to) ? 0 : '0.0');
  const count = useMotionValue(0);

  useMotionValueEvent(count, 'change', (v) => {
    setDisplay(Number.isInteger(to) ? Math.round(v) : v.toFixed(1));
  });

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(count, to, { duration, ease: 'easeOut' });
    return controls.stop;
  }, [isInView, count, to, duration]);

  return <span ref={ref}>{display}</span>;
};

const STATS = [
  { to: 10, suffix: '+', label: 'Real-world projects built across web platforms' },
  { to: 1.5, suffix: '+', label: 'Years of professional software development experience' },
  { to: 100, suffix: '%', label: 'Commitment to clean code, performance & best practices' },
  { to: 10, suffix: '+', label: 'Technologies used including MERN & modern frontend tools' },
];

export default function WhyMe() {
  return (
    <section className={`${NEU.section} ${NEU.sectionPad} snap-start`}>
      <motion.div
        className='relative z-10 mx-auto max-w-6xl'
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, margin: '-100px' }}
      >
        <div className='grid grid-cols-1 items-start gap-10 md:grid-cols-2 md:gap-12'>
          <motion.div variants={itemVariants} className='space-y-4'>
            <motion.p variants={itemVariants} className={`${NEU.badge} uppercase tracking-wider`}>
              Why me
            </motion.p>

            <h2 className={`${NEU.display} text-[36px] leading-[0.95] sm:text-[48px] md:text-[64px]`}>
              NUMBERS <br /> DON&apos;T <br />
              <span className='mt-1 inline-block border-2 border-gray-900 bg-fuchsia-100 px-3 py-0.5 text-gray-900 shadow-[6px_6px_0_0_rgb(17,24,39)] dark:border-white dark:bg-fuchsia-950 dark:text-fuchsia-100 dark:shadow-[6px_6px_0_0_rgb(255,255,255)]'>
                LIE
              </span>
            </h2>
          </motion.div>

          <motion.div variants={itemVariants} className='flex flex-col justify-start pt-2 md:pt-8'>
            <p className='max-w-xl text-sm leading-relaxed text-gray-800 dark:text-gray-300 md:text-base'>
              With over a year of hands-on industry experience, I build scalable, user-focused web
              applications using MERN stack and other modern techniques—delivering clean code,
              smooth UX, and real results.
            </p>
            <a href='/about' className={`${NEU.btn} mt-6 inline-block w-fit text-center`}>
              My story
            </a>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className='my-12 border-t-2 border-gray-900 dark:border-white'
        />

        <motion.div
          variants={containerVariants}
          className='grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-4 md:gap-6'
        >
          {STATS.map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className={`${NEU.cardStatic} p-5`}
            >
              <h3 className={`${NEU.display} text-3xl md:text-5xl`}>
                <Counter to={stat.to} />
                <span className='text-sky-600 dark:text-sky-400'>{stat.suffix}</span>
              </h3>
              <p className='mt-3 text-sm leading-snug text-gray-800 dark:text-gray-300'>{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

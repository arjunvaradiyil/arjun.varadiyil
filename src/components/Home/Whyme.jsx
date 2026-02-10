'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, animate, useInView, useMotionValueEvent } from 'framer-motion';

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
    <section className='w-full text-white px-6 md:px-16 py-16 overflow-hidden'>
      <motion.div
        className='max-w-6xl mx-auto'
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, margin: '-100px' }}
      >
        {/* Heading + Description — 2-col from 768px so iPad Mini matches large screen */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-start'>
          {/* Left Side - Heading */}
          <motion.div variants={itemVariants} className='space-y-3'>
            {/* Top Label */}
            <motion.p
              variants={itemVariants}
              className='text-xs tracking-widest text-blue-600 dark:text-cyan-400'
            >
              (WHY ME)
            </motion.p>

            <h2 className='font-anton font-bold uppercase tracking-wide text-[36px] sm:text-[48px] md:text-[80px] leading-[0.9] text-gray-800 dark:text-[#cacaca]'>
              NUMBERS <br /> DON'T <br /> LIE
            </h2>
          </motion.div>

          {/* Right Side - Description */}
          <motion.div
            variants={itemVariants}
            className='flex flex-col justify-start pt-6 md:pt-10'
          >
            <p className='text-gray-800 dark:text-[#8f8f8f] text-sm md:text-base leading-relaxed max-w-xl mb-4'>
              With over a year of hands-on industry experience, I build scalable,
              user-focused web applications using MERN stack and other modern
              techniques – delivering clean code, smooth UX, and real results.
            </p>
            <a href='/about'>
              <button className='px-6 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-transparent text-xs uppercase tracking-widest font-medium text-gray-800 dark:text-[#8f8f8f] hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-200'>
                MY STORY
              </button>
            </a>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          variants={itemVariants}
          className='w-full h-px bg-gray-800 my-12'
        />

        {/* Stats — 4-col from 768px so iPad Mini matches large screen */}
        <motion.div
          variants={containerVariants}
          className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8'
        >
          {STATS.map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className='space-y-2'
            >
              <h3 className='text-gray-800 dark:text-[#cacaca] text-4xl md:text-6xl font-bold'>
                <Counter to={stat.to} />
                <span className='text-blue-500 dark:text-cyan-400'>{stat.suffix}</span>
              </h3>
              <p className='text-gray-800 dark:text-[#cacaca] text-sm'>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

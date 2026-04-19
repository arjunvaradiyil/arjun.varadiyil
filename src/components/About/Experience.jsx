'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Image from 'next/image';
import { experienceData } from '../../data/experienceData';
import { NEU } from '../ui/neuTheme';
import WordStaggerReveal from '../ui/WordStaggerReveal';

const INTRO =
  'My professional journey reflects a commitment to building scalable solutions and sharing knowledge. From developing high-performance applications to mentoring the next generation of developers, each role has contributed to my growth as a full-stack developer.';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function Experience() {
  return (
    <section className={`${NEU.section} w-full px-6 py-24 md:px-20`}>
      <motion.div
        className='relative z-10 mx-auto max-w-6xl'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <WordStaggerReveal
          as='h2'
          text='Professional experience'
          className={`${NEU.display} text-[36px] sm:text-[48px] md:text-[64px]`}
          viewport={{ once: true, amount: 0.4 }}
        />

        <WordStaggerReveal
          text={INTRO}
          className='mt-6 max-w-3xl text-lg text-gray-800 dark:text-gray-300'
          viewport={{ once: true, amount: 0.35 }}
        />

        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          className='mt-16 space-y-8'
        >
          {experienceData.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -2 }}
              transition={{ type: 'spring', stiffness: 120 }}
              className={`${NEU.cardStatic} p-6 md:p-8`}
            >
              <WordStaggerReveal
                as='h3'
                text={item.role}
                className={`${NEU.display} text-2xl md:text-3xl`}
                viewport={{ once: true, amount: 0.35 }}
              />

              <div className='mt-4 flex flex-wrap items-center gap-3 md:gap-4'>
                <div
                  className={`relative h-8 w-8 flex-shrink-0 rounded border-2 border-gray-900 dark:border-white ${
                    item.company.toLowerCase().includes('faircode') ? 'bg-white p-1 dark:bg-white' : 'bg-transparent'
                  }`}
                >
                  <Image src={item.logo} alt={item.company} fill className='object-contain' />
                </div>

                <span className='text-sm font-bold text-gray-900 dark:text-gray-100 md:text-base'>
                  {item.company}
                </span>

                <span className='ml-auto text-xs font-medium text-gray-600 dark:text-gray-400 md:text-sm'>
                  {item.period}
                </span>
              </div>

              <ul className='mt-6 max-w-3xl space-y-3'>
                {item.points.map((point, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className='flex items-start gap-3 text-gray-800 dark:text-gray-300'
                  >
                    <Check size={16} className='mt-1 flex-shrink-0 text-sky-600 dark:text-sky-400' />
                    <WordStaggerReveal
                      text={point}
                      className='flex-1'
                      viewport={{ once: true, amount: 0.15 }}
                      staggerChildren={0.035}
                      delayChildren={0.02}
                    />
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

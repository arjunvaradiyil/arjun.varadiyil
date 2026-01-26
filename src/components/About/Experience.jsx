'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Image from 'next/image';
import { experienceData } from '../../data/experienceData';

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
    <section className='w-full px-6 md:px-20 py-24 overflow-hidden'>
      <motion.div
        className='max-w-6xl mx-auto'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-[36px] sm:text-[48px] md:text-[64px] font-antonio text-blue-500 dark:text-cyan-400'
        >
          PROFESSIONAL EXPERIENCE
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className='text-gray-800 dark:text-gray-400 text-lg mt-6 max-w-3xl'
        >
          My professional journey reflects a commitment to building scalable solutions and sharing knowledge. From developing high-performance applications to mentoring the next generation of developers, each role has contributed to my growth as a full-stack developer.
        </motion.p>

        {/* Experience List */}
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          className='mt-16 space-y-14'
        >
          {experienceData.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ x: 6 }}
              transition={{ type: 'spring', stiffness: 120 }}
              className='flex flex-col gap-4 border-b border-white/10 pb-10'
            >
              {/* Role */}
              <h3 className='text-3xl font-antonio text-black dark:text-white'>
                {item.role}
              </h3>

              {/* Company Row */}
              <div className='flex flex-wrap items-center gap-3 md:gap-4'>
                <div className={`relative h-8 w-8 flex-shrink-0 rounded ${
                  item.company.toLowerCase().includes('faircode')
                    ? 'bg-white dark:bg-white p-1'
                    : 'bg-transparent'
                }`}>
                  <Image
                    src={item.logo}
                    alt={item.company}
                    fill
                    className='object-contain'
                  />
                </div>

                <span className='text-blue-500 dark:text-cyan-400 font-medium text-sm md:text-base'>
                  {item.company}
                </span>

                <span className='text-gray-800 dark:text-gray-500 text-xs md:text-sm ml-auto'>
                  {item.period}
                </span>
              </div>

              {/* Description Points */}
              <ul className='mt-4 space-y-3 max-w-3xl'>
                {item.points.map((point, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className='flex items-start gap-3 text-gray-800 dark:text-gray-400'
                  >
                    <Check
                      size={16}
                      className='text-blue-500 dark:text-cyan-400 mt-1 flex-shrink-0'
                    />
                    <span>{point}</span>
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

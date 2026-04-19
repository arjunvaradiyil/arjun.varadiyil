'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { NEU } from '../ui/neuTheme';

export default function SectionHeader({ title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      viewport={{ once: true }}
      className='mb-16 text-center'
    >
      <h2
        className={`${NEU.display} inline-block border-2 border-gray-900 bg-white px-5 py-2 text-4xl tracking-tight shadow-[6px_6px_0_0_rgb(17,24,39)] dark:border-white dark:bg-zinc-900 dark:shadow-[6px_6px_0_0_rgb(255,255,255)] md:text-6xl`}
      >
        {title}
      </h2>
      <p className='mt-6 text-lg text-gray-800 dark:text-gray-300 md:text-xl'>{subtitle}</p>
    </motion.div>
  );
}

'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { NEU } from '../ui/neuTheme';

export default function Timeline({ items }) {
  const [progress, setProgress] = useState(0);
  const timelineRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;
      const rect = timelineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const visible = Math.min(
        1,
        Math.max(0, (windowHeight - rect.top) / (rect.height + windowHeight))
      );
      setProgress(visible);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to handle Google search on image click
  const handleSearch = (query) => {
    window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '_blank');
  };

  return (
    <div ref={timelineRef} className='relative border-l-4 border-gray-900 pl-8 dark:border-white'>
      <motion.div
        className='absolute left-0 top-0 w-1 bg-sky-500 dark:bg-sky-400'
        style={{ height: `${progress * 100}%` }}
      />

      {items.map((item, index) => (
        <motion.div
          key={index}
          className='mb-16 relative'
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          viewport={{ once: true }}
        >
          {/* Dot on timeline */}
          <div className='absolute -left-[11px] top-2 h-4 w-4 border-2 border-gray-900 bg-white shadow-[3px_3px_0_0_rgb(17,24,39)] dark:border-white dark:bg-zinc-900 dark:shadow-[3px_3px_0_0_rgb(255,255,255)]' />

          <div className='ml-8 flex flex-col md:flex-row items-start gap-6'>
            {/* Image */}
            <motion.div
              className={`relative h-40 w-64 cursor-pointer overflow-hidden rounded-lg ${NEU.frame}`}
              whileHover={{ scale: 1.02 }}
              onClick={() => handleSearch(item.title)}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className='object-cover'
              />
            </motion.div>

            {/* Text */}
            <div>
              <h4 className={`${NEU.display} text-xl`}>{item.year}</h4>
              <p className='text-lg font-semibold text-gray-800 dark:text-gray-100'>{item.title}</p>
              <motion.p
                className='text-gray-800 dark:text-gray-400'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                {item.description}
              </motion.p>
              <motion.p
                className='mt-2 font-bold text-sky-700 dark:text-sky-400'
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                {item.grade}
              </motion.p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

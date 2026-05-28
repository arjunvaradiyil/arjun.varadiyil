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
      const visible = Math.min(1, Math.max(0, (windowHeight - rect.top) / (rect.height + windowHeight)));
      setProgress(visible);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (query) => {
    window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '_blank');
  };

  return (
    <div ref={timelineRef} className="relative border-l border-amber-400/40 pl-8 dark:border-amber-400/30">
      <motion.div
        className="absolute left-0 top-0 w-px bg-amber-400"
        style={{ height: `${progress * 100}%` }}
        aria-hidden
      />

      {items.map((item, index) => (
        <motion.div
          key={index}
          className="relative mb-14 last:mb-0"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <div className="absolute -left-[5px] top-3 h-2.5 w-2.5 bg-amber-400" aria-hidden />

          <div className="ml-6 flex flex-col items-start gap-6 md:flex-row">
            <motion.button
              type="button"
              className={`relative h-36 w-full max-w-xs cursor-pointer overflow-hidden ${NEU.frame} bg-zinc-900 md:h-40 md:w-56`}
              whileHover={{ scale: 1.02 }}
              onClick={() => handleSearch(item.title)}
              aria-label={`Search ${item.title}`}
            >
              <Image src={item.image} alt="" fill className="object-cover" />
            </motion.button>

            <div>
              <p className={NEU.eyebrow}>{item.year}</p>
              <h3 className={`mt-2 ${NEU.display} text-xl`}>{item.title}</h3>
              <p className={`mt-2 text-sm ${NEU.bodyText}`}>{item.description}</p>
              <p className="mt-3 font-sans text-sm font-bold text-amber-400">{item.grade}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

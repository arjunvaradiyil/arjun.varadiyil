'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X } from 'lucide-react';
import { galleryData } from '../../data/galleryData';

export default function Gallery() {
  const [selected, setSelected] = useState(null);

  return (
    <section id='gallery' className='w-full px-6 md:px-24 py-24 overflow-hidden bg-gray-50 dark:bg-[#0a0a0a]'>
      <div className='max-w-7xl mx-auto'>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className='text-4xl md:text-6xl font-anton font-bold uppercase tracking-wide text-gray-800 dark:text-gray-200 mb-4'
        >
          Gallery
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className='text-gray-600 dark:text-gray-400 text-lg max-w-2xl mb-16'
        >
          Moments, events, and work in progress.
        </motion.p>

        <motion.div
          className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-40px' }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.08 },
            },
          }}
        >
          {galleryData.map((item) => (
            <motion.button
              key={item.src}
              type='button'
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
              }}
              onClick={() => setSelected(item)}
              className='relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-800 group text-left'
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className='object-cover transition-transform duration-300 group-hover:scale-105'
                sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
              />
              <div className='absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300' />
              {item.caption && (
                <span className='absolute bottom-0 left-0 right-0 p-4 text-white text-sm font-medium translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/70 to-transparent'>
                  {item.caption}
                </span>
              )}
            </motion.button>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90'
            onClick={() => setSelected(null)}
          >
            <button
              type='button'
              onClick={() => setSelected(null)}
              className='absolute top-4 right-4 p-2 rounded-full text-white hover:bg-white/10 transition-colors'
              aria-label='Close gallery'
            >
              <X size={28} />
            </button>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className='relative max-w-4xl w-full aspect-video rounded-lg overflow-hidden'
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selected.src}
                alt={selected.alt}
                fill
                className='object-contain'
                sizes='90vw'
              />
              {selected.caption && (
                <p className='absolute bottom-0 left-0 right-0 p-4 text-white text-center bg-black/50 text-sm'>
                  {selected.caption}
                </p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

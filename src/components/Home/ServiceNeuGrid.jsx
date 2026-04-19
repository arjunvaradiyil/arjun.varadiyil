'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { LayoutTemplate, Layers, Boxes, Rocket } from 'lucide-react';
import { NEU } from '../ui/neuTheme';

const ICONS = [LayoutTemplate, Layers, Boxes, Rocket];

const ACCENTS = [
  {
    wrap: 'bg-sky-100 text-sky-700 border-gray-900 dark:border-white dark:bg-sky-950/80 dark:text-sky-300',
  },
  {
    wrap: 'bg-teal-100 text-teal-800 border-gray-900 dark:border-white dark:bg-teal-950/80 dark:text-teal-300',
  },
  {
    wrap: 'bg-fuchsia-100 text-fuchsia-800 border-gray-900 dark:border-white dark:bg-fuchsia-950/80 dark:text-fuchsia-300',
  },
  {
    wrap: 'bg-amber-100 text-amber-900 border-gray-900 dark:border-white dark:bg-amber-950/80 dark:text-amber-200',
  },
];

export default function ServiceNeuGrid({ skills }) {
  return (
    <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 xl:grid-cols-4 xl:gap-8'>
      {skills.map((service, index) => {
        const Icon = ICONS[index % ICONS.length];
        const accent = ACCENTS[index % ACCENTS.length];
        const blurb = service.cardBlurb ?? service.description;

        return (
          <motion.article
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-24px' }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className='flex h-full flex-col'
          >
            <div className={`${NEU.card} flex h-full flex-col p-6`}>
              <div
                className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-lg border-2 ${accent.wrap}`}
              >
                <Icon className='h-7 w-7' strokeWidth={2} aria-hidden />
              </div>
              <h3 className='font-syne text-lg font-bold tracking-tight text-gray-900 dark:text-white sm:text-xl'>
                {service.title}
              </h3>
              <p className='mt-3 flex-1 font-sans text-sm leading-relaxed text-gray-800 dark:text-gray-300'>
                {blurb}
              </p>
            </div>
          </motion.article>
        );
      })}
    </div>
  );
}

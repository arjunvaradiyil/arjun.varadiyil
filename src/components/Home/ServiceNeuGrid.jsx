'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { LayoutTemplate, Layers, Boxes, Rocket } from 'lucide-react';
import { NEU } from '../ui/neuTheme';
import { hoverLift, transition } from '../../lib/motion';

const ICONS = [LayoutTemplate, Layers, Boxes, Rocket];

const iconWrap =
  'inline-flex h-14 w-14 items-center justify-center border border-amber-400/35 bg-amber-400/10 text-amber-800 dark:text-amber-300';

export default function ServiceNeuGrid({ skills }) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 xl:grid-cols-4 xl:gap-8">
      {skills.map((service, index) => {
        const Icon = ICONS[index % ICONS.length];
        const blurb = service.cardBlurb ?? service.description;

        return (
          <motion.article
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-24px' }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className="flex h-full flex-col"
            whileHover={reduceMotion ? undefined : hoverLift}
          >
            <div className={`${NEU.card} flex h-full flex-col p-6`}>
              <span className={NEU.sectionIndex}>{service.id}</span>
              <div className={`mt-4 ${iconWrap}`}>
                <Icon className="h-7 w-7" strokeWidth={2} aria-hidden />
              </div>
              <h3 className={`mt-5 ${NEU.display} text-lg sm:text-xl`}>{service.title}</h3>
              <p className={`mt-3 flex-1 text-sm ${NEU.bodyText}`}>{blurb}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {service.tags.slice(0, 4).map((tag) => (
                  <li key={tag} className={NEU.techTag}>
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        );
      })}
    </div>
  );
}

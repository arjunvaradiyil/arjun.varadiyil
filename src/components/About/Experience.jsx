'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Image from 'next/image';
import { experienceData as defaultExperience } from '../../data/experienceData';
import SectionHeader from './SectionHeader';
import { NEU } from '../ui/neuTheme';
import { VIEWPORT, EASE_OUT } from '../../lib/motion';

const DEFAULT_INTRO =
  'At Faircode Infotech I build biennale platforms, news portals, and civic tech — full-stack delivery with Next.js, Payload CMS, and modern databases.';

export default function Experience({ experience = defaultExperience, intro = DEFAULT_INTRO }) {
  return (
    <section className={`border-t border-white/10 ${NEU.section} ${NEU.sectionPad}`}>
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          index="04"
          eyebrow="Career"
          title="Professional experience"
          subtitle={intro}
          align="left"
        />

        <ul className="space-y-0">
          {experience.map((item, index) => (
            <motion.li
              key={item.company}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT}
              transition={{ duration: 0.5, delay: index * 0.08, ease: EASE_OUT }}
              className={`border-t border-white/10 py-10 ${index === 0 ? 'border-t-0 pt-0' : ''}`}
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div
                    className={`relative h-10 w-10 shrink-0 overflow-hidden border border-white/15 ${
                      item.company.toLowerCase().includes('faircode') ? 'bg-white p-1' : 'bg-[#111111]'
                    }`}
                  >
                    <Image src={item.logo} alt="" fill className="object-contain" />
                  </div>
                  <div>
                    <h3 className={`${NEU.display} text-xl md:text-2xl`}>{item.role}</h3>
                    <p className="mt-1 text-sm font-bold text-gray-200">{item.company}</p>
                  </div>
                </div>
                <p className={NEU.eyebrow}>{item.period}</p>
              </div>

              <ul className="mt-6 max-w-3xl space-y-3">
                {item.points.map((point, i) => (
                  <li key={i} className={`flex items-start gap-3 text-sm md:text-base ${NEU.bodyText}`}>
                    <Check className="mt-1 h-4 w-4 shrink-0 text-amber-400" aria-hidden />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

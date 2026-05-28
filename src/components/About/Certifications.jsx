'use client';

import React from 'react';
import Image from 'next/image';
import { certifications as defaultCertifications } from '../../data/certificationsData';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { NEU } from '../ui/neuTheme';

const iconWrap =
  'inline-flex h-14 w-14 shrink-0 items-center justify-center border border-amber-400/35 bg-amber-400/10 text-amber-800 dark:text-amber-300';

export default function Certifications({ showHeader = true, certifications = defaultCertifications }) {
  return (
    <section className={`${NEU.section} ${showHeader ? NEU.sectionPad : 'px-5 pb-16 sm:px-8 md:px-12 md:pb-24'}`}>
      <div className="relative z-10 mx-auto max-w-6xl">
        {showHeader ? (
          <>
            <p className={NEU.eyebrow}>Certifications</p>
            <h2 className={`${NEU.display} mt-2 text-3xl md:text-4xl`}>Certifications</h2>
            <p className={`mt-4 max-w-3xl ${NEU.bodyText}`}>
              Professional certifications that validate full-stack development and programming fundamentals.
            </p>
          </>
        ) : null}

        <ul
          className={`grid list-none grid-cols-1 gap-6 p-0 sm:grid-cols-2 lg:grid-cols-3 ${showHeader ? 'mt-12 md:mt-14' : ''}`}
          aria-label="Certification cards"
        >
          {certifications.map((cert, index) => (
            <motion.li
              key={cert.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-32px' }}
              transition={{ duration: 0.45, delay: Math.min(index * 0.07, 0.35) }}
              className="min-w-0"
            >
              <article className={`${NEU.card} flex h-full min-h-[260px] flex-col p-6 sm:min-h-[280px] sm:p-7`}>
                {cert.image ? (
                  <div className={`relative mb-4 h-24 w-full overflow-hidden ${NEU.frame}`}>
                    <Image
                      src={cert.image}
                      alt=""
                      fill
                      className="object-contain object-left"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                ) : null}
                <div className="mb-5 flex items-start justify-between gap-3">
                  <div className={iconWrap}>
                    <Award className="h-7 w-7" strokeWidth={2} aria-hidden />
                  </div>
                  <div className="flex flex-col items-end gap-2 text-right">
                    <span className={`${NEU.sectionIndex} text-2xl sm:text-3xl`}>
                      {cert.id}
                      <span className="text-amber-500">.</span>
                    </span>
                    <span className={NEU.techTag}>{cert.date}</span>
                  </div>
                </div>

                <h3 className={`${NEU.display} text-lg sm:text-xl`}>{cert.title}</h3>
                <p className="mt-2 text-sm font-bold text-amber-700 dark:text-amber-400 sm:text-base">{cert.issuer}</p>
                <p className={`mt-4 flex-1 border-t border-gray-900/10 pt-4 text-sm ${NEU.bodyText} dark:border-white/10`}>
                  {cert.description}
                </p>
              </article>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { NEU } from '../ui/neuTheme';
import { EASE_OUT, fadeUp, staggerContainer } from '../../lib/motion';

export default function SectionHeader({ title, subtitle, eyebrow, index, align = 'center' }) {
  const reduceMotion = useReducedMotion();
  const alignClass = align === 'left' ? 'text-left items-start' : 'text-center items-center';

  if (reduceMotion) {
    return (
      <header className={`mb-10 flex flex-col gap-3 md:mb-14 ${alignClass}`}>
        {(index || eyebrow) && (
          <div className={`flex items-center gap-3 ${align === 'center' ? 'justify-center' : ''}`}>
            {index ? <span className={NEU.sectionIndex}>{index}</span> : null}
            {eyebrow ? <p className={NEU.eyebrow}>{eyebrow}</p> : null}
          </div>
        )}
        <h2 className={`${NEU.display} text-3xl md:text-4xl`}>{title}</h2>
        {subtitle ? (
          <p className={`max-w-2xl text-base md:text-lg ${NEU.bodyText} ${align === 'center' ? 'mx-auto' : ''}`}>
            {subtitle}
          </p>
        ) : null}
      </header>
    );
  }

  return (
    <motion.header
      className={`mb-10 flex flex-col gap-3 md:mb-14 ${alignClass}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer}
    >
      {(index || eyebrow) && (
        <motion.div
          className={`flex items-center gap-3 ${align === 'center' ? 'justify-center' : ''}`}
          variants={fadeUp}
          transition={{ duration: 0.5, ease: EASE_OUT }}
        >
          {index ? <span className={NEU.sectionIndex}>{index}</span> : null}
          {eyebrow ? <p className={NEU.eyebrow}>{eyebrow}</p> : null}
        </motion.div>
      )}
      <motion.h2
        className={`${NEU.display} text-3xl md:text-4xl`}
        variants={fadeUp}
        transition={{ duration: 0.55, ease: EASE_OUT }}
      >
        {title}
      </motion.h2>
      {subtitle ? (
        <motion.p
          className={`max-w-2xl text-base md:text-lg ${NEU.bodyText} ${align === 'center' ? 'mx-auto' : ''}`}
          variants={fadeUp}
          transition={{ duration: 0.55, ease: EASE_OUT }}
        >
          {subtitle}
        </motion.p>
      ) : null}
    </motion.header>
  );
}

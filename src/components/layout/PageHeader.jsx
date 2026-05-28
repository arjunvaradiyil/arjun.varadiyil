'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { NEU } from '../ui/neuTheme';
import { EASE_OUT, staggerContainer, fadeUp } from '../../lib/motion';

export default function PageHeader({
  eyebrow,
  title,
  description,
  align = 'left',
  index,
  children,
}) {
  const reduceMotion = useReducedMotion();
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start';

  if (reduceMotion) {
    return (
      <header className={`mb-10 flex flex-col gap-4 md:mb-14 ${alignClass}`}>
        <div className={`flex items-center gap-3 ${align === 'center' ? 'justify-center' : ''}`}>
          {index ? <span className={NEU.sectionIndex}>{index}</span> : null}
          {eyebrow ? <p className={NEU.eyebrow}>{eyebrow}</p> : null}
        </div>
        <h1 className={`${NEU.display} text-3xl sm:text-4xl md:text-5xl lg:text-6xl`}>{title}</h1>
        {description ? (
          <p className={`max-w-2xl text-base sm:text-lg ${NEU.bodyText} ${align === 'center' ? 'mx-auto' : ''}`}>
            {description}
          </p>
        ) : null}
        {children}
      </header>
    );
  }

  return (
    <motion.header
      className={`mb-10 flex flex-col gap-4 md:mb-14 ${alignClass}`}
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <motion.div
        className={`flex items-center gap-3 ${align === 'center' ? 'justify-center' : ''}`}
        variants={fadeUp}
        transition={{ duration: 0.5, ease: EASE_OUT }}
      >
        {index ? <span className={NEU.sectionIndex}>{index}</span> : null}
        {eyebrow ? <p className={NEU.eyebrow}>{eyebrow}</p> : null}
      </motion.div>
      <motion.h1
        className={`${NEU.display} text-3xl sm:text-4xl md:text-5xl lg:text-6xl`}
        variants={fadeUp}
        transition={{ duration: 0.55, ease: EASE_OUT, delay: 0.06 }}
      >
        {title}
      </motion.h1>
      {description ? (
        <motion.p
          className={`max-w-2xl text-base sm:text-lg ${NEU.bodyText} ${align === 'center' ? 'mx-auto' : ''}`}
          variants={fadeUp}
          transition={{ duration: 0.55, ease: EASE_OUT, delay: 0.12 }}
        >
          {description}
        </motion.p>
      ) : null}
      {children ? (
        <motion.div variants={fadeUp} transition={{ duration: 0.5, ease: EASE_OUT, delay: 0.16 }}>
          {children}
        </motion.div>
      ) : null}
    </motion.header>
  );
}

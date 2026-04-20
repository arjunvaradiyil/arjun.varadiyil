'use client';

import React, { useMemo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useTheme } from '../ThemeProvider';

/**
 * Word-by-word reveal: dim → full color with stagger (Framer Motion), theme-aware, respects reduced motion.
 * `as`: p | h1 | h2 | h3 | div. Optional `staggerChildren` / `delayChildren` override defaults when motion is on.
 */
/**
 * @param {'auto' | 'onLight'} [tone='auto'] — `onLight`: ink colors for always-light surfaces (e.g. white form card) while site theme is dark.
 */
export default function WordStaggerReveal({
  text,
  className = '',
  as: Tag = 'p',
  viewport = { once: true, amount: 0.35 },
  staggerChildren: staggerChildrenProp,
  delayChildren: delayChildrenProp,
  tone = 'auto',
}) {
  const { theme } = useTheme();
  const reduceMotion = useReducedMotion();
  const words = useMemo(() => String(text ?? '').trim().split(/\s+/).filter(Boolean), [text]);
  const onLightSurface = tone === 'onLight';
  const doneColor = onLightSurface ? '#111111' : theme === 'dark' ? '#f5f5f5' : '#111111';
  const dimColor = onLightSurface ? '#a3a3a3' : theme === 'dark' ? '#737373' : '#a3a3a3';

  const staggerChildren = reduceMotion ? 0 : staggerChildrenProp ?? 0.06;
  const delayChildren = reduceMotion ? 0 : delayChildrenProp ?? 0.08;

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren, delayChildren },
    },
  };

  const item = {
    hidden: { opacity: 0.35, color: dimColor },
    visible: {
      opacity: 1,
      color: doneColor,
      transition: { duration: reduceMotion ? 0 : 0.45, ease: [0.22, 1, 0.36, 1] },
    },
  };

  if (!words.length) return null;

  const MotionTag =
    Tag === 'h1'
      ? motion.h1
      : Tag === 'h2'
        ? motion.h2
        : Tag === 'h3'
          ? motion.h3
          : Tag === 'div'
            ? motion.div
            : motion.p;

  return (
    <MotionTag
      className={className}
      variants={container}
      initial='hidden'
      whileInView='visible'
      viewport={viewport}
    >
      {words.map((word, i) => (
        <motion.span
          key={`${i}-${word}`}
          variants={item}
          className='mr-[0.35em] inline-block last:mr-0'
          style={{ willChange: 'opacity, color' }}
        >
          {word}
        </motion.span>
      ))}
    </MotionTag>
  );
}

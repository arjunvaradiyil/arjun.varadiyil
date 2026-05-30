'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { EASE_OUT } from '../../lib/motion';

const lineVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: EASE_OUT },
  },
};

export default function LineStaggerReveal({
  lines,
  className = '',
  lineClassName = '',
  as: Tag = 'div',
  stagger = 0.1,
  delay = 0,
  block = true,
  id,
}) {
  const reduceMotion = useReducedMotion();
  const items = (Array.isArray(lines) ? lines : [lines]).filter(Boolean);

  if (!items.length) return null;

  if (reduceMotion) {
    const PlainTag = Tag;
    return (
      <PlainTag id={id} className={className}>
        {items.map((line, i) => (
          <span key={line} className={block && i > 0 ? `block ${lineClassName}` : lineClassName}>
            {line}
          </span>
        ))}
      </PlainTag>
    );
  }

  const MotionTag =
    Tag === 'h1'
      ? motion.h1
      : Tag === 'h2'
        ? motion.h2
        : Tag === 'p'
          ? motion.p
          : motion.div;

  return (
    <MotionTag
      id={id}
      className={className}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: stagger, delayChildren: delay },
        },
      }}
    >
      {items.map((line, i) => (
        <motion.span
          key={line}
          className={[block && i > 0 ? 'block' : '', lineClassName].filter(Boolean).join(' ')}
          variants={lineVariants}
        >
          {line}
        </motion.span>
      ))}
    </MotionTag>
  );
}

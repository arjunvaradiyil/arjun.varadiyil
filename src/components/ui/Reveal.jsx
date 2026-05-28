'use client';

import { motion, useReducedMotion } from 'framer-motion';
import {
  EASE_OUT,
  VIEWPORT,
  fadeUp,
  fadeIn,
  fadeLeft,
  fadeRight,
  scaleIn,
  staggerContainer,
  staggerItem,
  transition,
} from '../../lib/motion';

const VARIANTS = {
  up: fadeUp,
  in: fadeIn,
  left: fadeLeft,
  right: fadeRight,
  scale: scaleIn,
};

/**
 * Scroll-triggered reveal. Respects prefers-reduced-motion.
 */
export function Reveal({
  children,
  className = '',
  as = 'div',
  variant = 'up',
  delay = 0,
  duration = 0.55,
  viewport = VIEWPORT,
  once = true,
}) {
  const reduceMotion = useReducedMotion();
  const Component = motion[as] ?? motion.div;
  const v = VARIANTS[variant] ?? fadeUp;

  if (reduceMotion) {
    const Tag = as === 'section' ? 'section' : 'div';
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ ...viewport, once }}
      variants={v}
      transition={{ ...transition(duration, delay) }}
    >
      {children}
    </Component>
  );
}

/** Stagger children on scroll */
export function StaggerReveal({ children, className = '', as = 'div', viewport = VIEWPORT }) {
  const reduceMotion = useReducedMotion();
  const Component = motion[as] ?? motion.div;

  if (reduceMotion) {
    const Tag = as === 'ul' ? 'ul' : 'div';
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={staggerContainer}
    >
      {children}
    </Component>
  );
}

export function StaggerItem({ children, className = '', as = 'div' }) {
  const reduceMotion = useReducedMotion();
  const Component = motion[as] ?? motion.div;

  if (reduceMotion) {
    const Tag = as === 'li' ? 'li' : 'div';
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <Component className={className} variants={staggerItem} transition={transition(0.5)}>
      {children}
    </Component>
  );
}

/** Mount animation (hero, nav, page shell) */
export function MotionIn({
  children,
  className = '',
  delay = 0,
  variant = 'up',
  duration = 0.6,
}) {
  const reduceMotion = useReducedMotion();
  const Component = motion.div;
  const v = VARIANTS[variant] ?? fadeUp;

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <Component
      className={className}
      initial="hidden"
      animate="visible"
      variants={v}
      transition={{ duration, delay, ease: EASE_OUT }}
    >
      {children}
    </Component>
  );
}

'use client';

import gsap from 'gsap';

let pluginsReady = false;

export const EDITORIAL_EASE = 'power3.out';
export const EDITORIAL_EASE_IN_OUT = 'power4.inOut';

/** Register ScrollTrigger once in the browser (safe for client components). */
export async function registerGsapPlugins() {
  if (typeof window === 'undefined' || pluginsReady) return gsap;

  const { ScrollTrigger } = await import('gsap/ScrollTrigger');
  gsap.registerPlugin(ScrollTrigger);
  pluginsReady = true;
  return gsap;
}

export function prefersReducedMotion() {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/** Scroll-triggered stagger reveal for elements inside `root`. */
export function scrollReveal(root, selector, options = {}) {
  if (!root) return;

  const {
    trigger,
    start = 'top 82%',
    y = 28,
    duration = 0.65,
    stagger = 0.08,
    delay = 0,
  } = options;

  const targets = root.querySelectorAll(selector);
  if (!targets.length) return;

  gsap.from(targets, {
    y,
    opacity: 0,
    duration,
    stagger,
    delay,
    ease: EDITORIAL_EASE,
    scrollTrigger: {
      trigger: trigger || root,
      start,
      once: true,
    },
  });
}

export { gsap };

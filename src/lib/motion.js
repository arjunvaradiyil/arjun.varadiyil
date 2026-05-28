/** Shared Framer Motion tokens — editorial ease, scroll reveals */

export const EASE_OUT = [0.22, 1, 0.36, 1];

export const VIEWPORT = {
  once: true,
  amount: 0.2,
  margin: '-48px 0px -48px 0px',
};

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const fadeLeft = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0 },
};

export const fadeRight = {
  hidden: { opacity: 0, x: 24 },
  visible: { opacity: 1, x: 0 },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: { opacity: 1, scale: 1 },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.06 },
  },
};

export const staggerItem = fadeUp;

export function transition(duration = 0.55, delay = 0) {
  return { duration, delay, ease: EASE_OUT };
}

export const hoverLift = {
  y: -6,
  transition: { duration: 0.25, ease: EASE_OUT },
};

export const tapScale = { scale: 0.98 };

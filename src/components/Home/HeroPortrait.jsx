'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { EASE_OUT } from '../../lib/motion';

export function getPortraitClasses(src) {
  if (src.includes('profilepic')) {
    return 'object-cover object-[center_30%] sm:object-[center_34%] lg:object-[center_38%]';
  }
  if (src.includes('arjunvaradiyil')) {
    return 'object-cover object-[center_38%] sm:object-[center_42%] lg:object-[center_46%]';
  }
  return 'object-cover object-[center_34%] sm:object-[center_38%] lg:object-[center_42%]';
}

const SIZE_CLASSES = {
  default: 'relative aspect-[4/5] min-h-[340px] w-full sm:min-h-[400px] lg:min-h-[460px]',
  compact: 'relative aspect-[4/5] min-h-[300px] w-full sm:min-h-[340px] lg:aspect-[3/4] lg:min-h-0 lg:max-h-[520px]',
  split: 'absolute inset-0 h-full w-full min-h-[55vh] lg:min-h-full',
};

export default function HeroPortrait({
  src,
  alt,
  className = '',
  priority = false,
  size = 'default',
}) {
  const reduceMotion = useReducedMotion();
  const isSplit = size === 'split';

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.9, ease: EASE_OUT, delay: 0.1 }}
      className={[
        isSplit ? 'relative h-full min-h-[55vh] w-full lg:min-h-full' : 'relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div className={SIZE_CLASSES[size] || SIZE_CLASSES.default}>
        <motion.div
          className={`pointer-events-none absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.14)_0%,rgba(255,255,255,0.04)_45%,transparent_72%)] blur-2xl ${
            isSplit
              ? 'h-[min(70vw,520px)] w-[min(70vw,520px)] lg:h-[min(28vw,560px)] lg:w-[min(28vw,560px)]'
              : 'top-[52%] h-[min(85%,420px)] w-[min(85%,420px)] -translate-y-1/2'
          }`}
          aria-hidden
          animate={
            reduceMotion
              ? undefined
              : {
                  opacity: [0.5, 0.75, 0.5],
                  scale: [0.97, 1.03, 0.97],
                }
          }
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        />
        {!isSplit ? (
          <>
            <div
              className="pointer-events-none absolute left-1/2 top-[52%] z-0 h-[min(62%,300px)] w-[min(62%,300px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.03] ring-1 ring-white/10"
              aria-hidden
            />
            <motion.div
              className="pointer-events-none absolute inset-x-[4%] bottom-[4%] top-[8%] rounded-[2rem] bg-gradient-to-t from-white/[0.1] via-white/[0.02] to-transparent"
              aria-hidden
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.1, ease: EASE_OUT, delay: 0.15 }}
            />
          </>
        ) : null}
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={isSplit ? '(max-width: 1024px) 100vw, 50vw' : '(max-width: 1024px) 90vw, 420px'}
          className={`relative z-[1] grayscale ${getPortraitClasses(src)} ${
            isSplit
              ? 'lg:[mask-image:linear-gradient(to_right,black_58%,rgba(0,0,0,0.95)_78%,rgba(0,0,0,0.55)_90%,transparent_100%)]'
              : ''
          }`}
        />
        <div
          className={`pointer-events-none absolute inset-0 z-[2] ${
            isSplit
              ? 'bg-gradient-to-t from-[var(--color-surface)] via-[var(--color-surface)]/15 to-[var(--color-surface)]/35 lg:bg-gradient-to-r lg:from-[var(--color-surface)]/40 lg:via-transparent lg:to-[var(--color-surface)]'
              : 'bg-gradient-to-t from-[var(--color-surface)]/50 via-transparent to-[var(--color-surface)]/30'
          }`}
          aria-hidden
        />
        {isSplit ? (
          <>
            <div
              className="pointer-events-none absolute inset-y-0 left-0 z-[3] hidden w-20 bg-gradient-to-r from-[var(--color-surface)]/55 via-[var(--color-surface)]/20 to-transparent lg:block"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-y-0 right-0 z-[3] hidden w-28 bg-gradient-to-l from-[var(--color-surface)] via-[var(--color-surface)]/75 to-transparent lg:block xl:w-36"
              aria-hidden
            />
          </>
        ) : null}
      </div>
    </motion.div>
  );
}

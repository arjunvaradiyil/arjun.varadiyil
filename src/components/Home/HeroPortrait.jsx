'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { NEU } from '../ui/neuTheme';
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

function splitDisplayName(name) {
  const parts = name.trim().split(/\s+/);
  if (parts.length <= 1) return { first: name, last: null };
  return { first: parts[0], last: parts.slice(1).join(' ') };
}

export default function HeroPortrait({
  src,
  alt,
  name,
  role,
  className = '',
  priority = false,
  size = 'default',
  showNameOverlay = true,
}) {
  const reduceMotion = useReducedMotion();
  const isSplit = size === 'split';
  const isLcp = priority && isSplit;
  const displayName = name ? splitDisplayName(name) : null;

  return (
    <motion.div
      initial={reduceMotion || isLcp ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={isLcp ? { duration: 0 } : { duration: 0.9, ease: EASE_OUT, delay: 0.1 }}
      className={[
        isSplit ? 'relative h-full min-h-[55vh] w-full lg:min-h-full' : 'relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div className={SIZE_CLASSES[size] || SIZE_CLASSES.default}>
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
        ) : (
          <motion.div
            className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[min(55vw,400px)] w-[min(55vw,400px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0.03)_45%,transparent_72%)] lg:h-[min(24vw,480px)] lg:w-[min(24vw,480px)]"
            aria-hidden
            animate={
              reduceMotion
                ? undefined
                : { opacity: [0.7, 1, 0.7], scale: [1, 1.04, 1] }
            }
            transition={
              reduceMotion
                ? undefined
                : { duration: 7, repeat: Infinity, ease: 'easeInOut' }
            }
          />
        )}
        <motion.div
          className="absolute inset-0 z-[1]"
          initial={reduceMotion || isLcp ? false : { opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={
            isLcp
              ? { duration: 0 }
              : { duration: 1.1, ease: EASE_OUT, delay: 0.05 }
          }
        >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          fetchPriority={priority ? 'high' : 'auto'}
          sizes={isSplit ? '(max-width: 1024px) 100vw, 50vw' : '(max-width: 1024px) 90vw, 420px'}
          className={`grayscale ${getPortraitClasses(src)} ${
            isSplit ? 'object-cover object-center' : ''
          }`}
        />
        </motion.div>
        <div
          className={`pointer-events-none absolute inset-0 z-[2] ${
            isSplit
              ? 'bg-gradient-to-t from-[var(--color-surface)] via-[var(--color-surface)]/20 to-transparent lg:bg-gradient-to-t lg:from-[var(--color-surface)]/70 lg:via-transparent lg:to-transparent'
              : 'bg-gradient-to-t from-[var(--color-surface)]/50 via-transparent to-[var(--color-surface)]/30'
          }`}
          aria-hidden
        />
        {isSplit ? (
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 z-[3] h-24 bg-gradient-to-t from-[var(--color-surface)] to-transparent lg:hidden"
            aria-hidden
          />
        ) : null}
        {displayName && showNameOverlay ? (
          reduceMotion ? (
            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[4] bg-gradient-to-t from-[var(--color-surface)] via-[var(--color-surface)]/90 to-transparent px-8 pb-8 pt-20 sm:px-10 sm:pb-10 lg:px-12 lg:pb-12">
              <p className={`${NEU.displayHero} text-[clamp(2rem,7vw,3.5rem)] leading-[0.88] lg:text-[clamp(2.25rem,3.5vw,3.75rem)]`}>
                <span className="block">{displayName.first}</span>
                {displayName.last ? <span className="block">{displayName.last}</span> : null}
              </p>
              {role ? <p className={`mt-3 ${NEU.eyebrow}`}>{role}</p> : null}
            </div>
          ) : (
          <motion.div
            className="pointer-events-none absolute inset-x-0 bottom-0 z-[4] bg-gradient-to-t from-[var(--color-surface)] via-[var(--color-surface)]/90 to-transparent px-8 pb-8 pt-20 sm:px-10 sm:pb-10 lg:px-12 lg:pb-12"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.1, delayChildren: 0.35 },
              },
            }}
          >
            <motion.p
              className={`${NEU.displayHero} text-[clamp(2rem,7vw,3.5rem)] leading-[0.88] lg:text-[clamp(2.25rem,3.5vw,3.75rem)]`}
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.08, delayChildren: 0 },
                },
              }}
            >
              <motion.span
                className="block"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE_OUT } },
                }}
              >
                {displayName.first}
              </motion.span>
              {displayName.last ? (
                <motion.span
                  className="block"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE_OUT } },
                  }}
                >
                  {displayName.last}
                </motion.span>
              ) : null}
            </motion.p>
            {role ? (
              <motion.p
                className={`mt-3 ${NEU.eyebrow}`}
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE_OUT } },
                }}
              >
                {role}
              </motion.p>
            ) : null}
          </motion.div>
          )
        ) : null}
      </div>
    </motion.div>
  );
}

'use client';

import React from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { NEU } from './neuTheme';
import { EASE_OUT, scaleIn } from '../../lib/motion';

export default function Modal({ isOpen, onClose, icon, title, children, closable = true }) {
  const reduceMotion = useReducedMotion();

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--color-surface)]/75 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.25 }}
          onClick={closable ? onClose : undefined}
        >
          <motion.div
            className={`${NEU.modalPanel} ${closable ? '' : ''}`}
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: reduceMotion ? 0 : 0.35, ease: EASE_OUT }}
            onClick={(e) => e.stopPropagation()}
          >
            {icon ? (
              <motion.div
                className="mb-2 text-5xl"
                initial={reduceMotion ? false : { scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.1, type: 'spring', stiffness: 260, damping: 18 }}
              >
                {icon}
              </motion.div>
            ) : null}
            {title ? <h2 className={`${NEU.display} text-xl`}>{title}</h2> : null}
            {children}
            {closable ? (
              <motion.button
                type="button"
                onClick={onClose}
                className={`${NEU.btn} mt-5 text-xs`}
                aria-label="Close dialog"
                whileHover={reduceMotion ? undefined : { scale: 1.02 }}
                whileTap={reduceMotion ? undefined : { scale: 0.98 }}
              >
                OK
              </motion.button>
            ) : null}
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

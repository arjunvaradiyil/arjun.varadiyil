'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { EASE_OUT, scaleIn } from '../lib/motion';

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: reduceMotion ? 'auto' : 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {visible ? (
        <motion.button
          type="button"
          onClick={scrollToTop}
          className="scroll-to-top-btn fixed bottom-6 right-4 z-50 border border-gray-900/15 bg-white p-3 text-gray-900 shadow-md dark:border-white/15 dark:bg-[#111111] dark:text-white md:right-6"
          style={{ willChange: 'transform' }}
          aria-label="Scroll to top"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={scaleIn}
          transition={{ duration: 0.3, ease: EASE_OUT }}
          whileHover={reduceMotion ? undefined : { scale: 1.08, borderColor: 'rgba(251, 191, 36, 0.6)' }}
          whileTap={reduceMotion ? undefined : { scale: 0.95 }}
        >
          <ArrowUp size={22} />
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}

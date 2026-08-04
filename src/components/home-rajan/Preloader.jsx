'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const WORDS = ['NEXT.JS', 'PAYLOAD', 'TYPESCRIPT', 'LANGCHAIN', 'AI', 'REACT'];

export default function Preloader({ onComplete }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2200;
    const intervalTime = 16;
    const step = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      setCount((prev) => {
        const next = prev + step;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            onComplete();
          }, 200);
          return 100;
        }
        return next;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  const wordIndex = Math.min(Math.floor((count / 100) * WORDS.length), WORDS.length - 1);

  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{
        y: '-100%',
        transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] },
      }}
      className="fixed inset-0 z-[9999] flex h-[100dvh] max-h-[100dvh] w-full flex-col justify-between overflow-hidden bg-[#0a0a0a] p-8 font-mono text-white md:p-16"
      aria-busy="true"
      aria-label="Loading portfolio"
    >
      <div className="flex shrink-0 items-start justify-between text-xs uppercase tracking-widest text-neutral-500">
        <span>Arjun Varadiyil</span>
        <span>© {new Date().getFullYear()}</span>
      </div>

      {/* flex-1 (not h-full) so header + counter stay on-screen on mobile — Rajan layout fix */}
      <div className="flex min-h-0 flex-1 flex-col items-center justify-center">
        <motion.h1
          key={wordIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="text-center font-display text-4xl font-bold tracking-tighter text-white md:text-7xl"
        >
          {WORDS[wordIndex]}
        </motion.h1>
      </div>

      <div className="flex shrink-0 items-end justify-between gap-4">
        <span className="text-xs uppercase tracking-widest text-neutral-500">
          Loading portfolio
        </span>
        <div className="select-none font-display text-7xl font-bold leading-none tracking-tighter text-white md:text-9xl">
          {Math.floor(count)}%
        </div>
      </div>
    </motion.div>
  );
}

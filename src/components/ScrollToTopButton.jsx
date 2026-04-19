'use client';

import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

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
      behavior: 'smooth',
    });
  };

  if (!visible) return null;

  return (
    <button
      type='button'
      onClick={scrollToTop}
      className='scroll-to-top-btn fixed bottom-6 right-6 z-50 rounded-lg border-2 border-gray-900 bg-white p-3 text-gray-900 shadow-[4px_4px_0_0_rgb(17,24,39)] transition-transform hover:scale-105 hover:shadow-[6px_6px_0_0_rgb(17,24,39)] dark:border-white dark:bg-zinc-900 dark:text-white dark:shadow-[4px_4px_0_0_rgb(255,255,255)]'
      style={{ willChange: 'transform' }}
      aria-label='Scroll to top'
    >
      <ArrowUp size={22} />
    </button>
  );
}

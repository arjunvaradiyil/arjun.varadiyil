'use client';

import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { NEU } from './ui/neuTheme';

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    toggleVisibility();
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({
      top: 0,
      behavior: reduceMotion ? 'auto' : 'smooth',
    });
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={`scroll-to-top-btn fixed bottom-6 right-4 z-50 p-3 transition md:right-8 ${NEU.btn}`}
      aria-label="Scroll to top"
    >
      <ArrowUp className="h-5 w-5" aria-hidden />
    </button>
  );
}

'use client';

import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

const TextHighlight = ({ children }: { children: React.ReactNode }) => {
  const textRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!textRef.current) return;
    
    const text = new SplitType(textRef.current, { types: 'words,lines' });
    if (!text.words) return;

    const finalColor = window.getComputedStyle(text.words[0]).color;
    const dimColor = '#555555'; // A muted gray color for the initial state

    gsap.set(text.words, { color: dimColor, immediateRender: false });

    const st = ScrollTrigger.create({
      trigger: textRef.current,
      start: 'top 80%',
      end: 'bottom 50%',
      scrub: 1,
      animation: gsap.to(text.words, {
        color: finalColor,
        stagger: 0.1,
        ease: 'none',
      }),
    });

    return () => {
      st.kill();
    };
  }, []);

  return <div ref={textRef}>{children}</div>;
};

export default TextHighlight; 
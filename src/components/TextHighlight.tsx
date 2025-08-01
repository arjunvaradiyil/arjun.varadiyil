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
    
    let splitText: SplitType | null = null;
    let scrollTrigger: ScrollTrigger | null = null;
    
    // Small delay to ensure DOM is ready
    const timeoutId = setTimeout(() => {
      try {
        // Split the text into words
        splitText = new SplitType(textRef.current!, { 
          types: 'words,lines',
          tagName: 'span'
        });
        
        if (!splitText.words || splitText.words.length === 0) return;

        // Get the computed style to determine the target color
        const computedStyle = window.getComputedStyle(textRef.current!);
        let targetColor = computedStyle.color;
        
        // Fallback to a default color if the computed color is not valid
        if (!targetColor || targetColor === 'rgba(0, 0, 0, 0)' || targetColor === 'transparent') {
          targetColor = '#e5e7eb'; // gray-200 as fallback
        }
        
        // Use a more muted color for the initial state
        const initialColor = '#6b7280'; // gray-500

        // Set initial state
        gsap.set(splitText.words, { 
          color: initialColor,
          immediateRender: false 
        });

        // Create the scroll trigger animation
        scrollTrigger = ScrollTrigger.create({
          trigger: textRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: 1,
          animation: gsap.to(splitText.words, {
            color: targetColor,
            stagger: 0.05,
            ease: 'none',
            duration: 1
          }),
          onUpdate: (self) => {
            // Ensure the animation completes properly
            if (self.progress === 1 && splitText?.words) {
              gsap.set(splitText.words, { color: targetColor });
            }
          },
          onEnter: () => {
            // Ensure text is visible when entering viewport
            if (splitText?.words) {
              gsap.set(splitText.words, { visibility: 'visible' });
            }
          }
        });

      } catch (error) {
        console.error('Error in TextHighlight animation:', error);
      }
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      // Clean up animations
      if (scrollTrigger) {
        scrollTrigger.kill();
      }
      if (splitText) {
        splitText.revert();
      }
    };
  }, []);

  return <div ref={textRef}>{children}</div>;
};

export default TextHighlight; 
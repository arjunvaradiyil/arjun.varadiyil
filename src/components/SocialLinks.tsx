'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function SocialLinks() {
  const socialRef = useRef(null);

  useEffect(() => {
    gsap.from(socialRef.current, {
      opacity: 0,
      x: 30, // Animate from right
      duration: 1,
      delay: 2, 
      ease: 'power3.out',
    });
  }, []);

  return (
    <div ref={socialRef} className="hidden md:flex flex-col gap-6 fixed right-6 bottom-10 z-30">
      <a 
        href="https://github.com/arjunvaradiyil" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="text-white/60 hover:text-white transition-colors duration-300 hover:scale-110"
      >
        <Github size={24} />
      </a>
      <a 
        href="https://linkedin.com/in/arjunvaradiyil" 
        target="_blank" 
        rel="noopener noreferrer" 
        aria-label="LinkedIn"
        className="text-white/60 hover:text-white transition-colors duration-300 hover:scale-110"
      >
        <Linkedin size={24} />
      </a>
      <a 
        href="mailto:arjunvaradiyil203@gmail.com"
        aria-label="Email"
        className="text-white/60 hover:text-white transition-colors duration-300 hover:scale-110"
      >
        <Mail size={24} />
      </a>
      <div className="w-px h-24 bg-white/60 mx-auto mt-4"></div>
    </div>
  );
} 
'use client';
import { ArrowDownToLine } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect, useRef, MouseEvent } from 'react';
import { gsap } from 'gsap';
import SplitType from 'split-type';

interface HeroContentProps {
  isHomePage: boolean;
  handleNavClick: (e: MouseEvent<HTMLAnchorElement>, targetId: string) => void;
}

export default function HeroContent({ isHomePage, handleNavClick }: HeroContentProps) {
  const titleRef1 = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonGroupRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const title = new SplitType(titleRef1.current!, { types: 'words' });
    const subtitle = new SplitType(subtitleRef.current!, { types: 'words' });

    gsap.set(title.words, { y: 50, opacity: 0 });
    gsap.set(subtitle.words, { y: 30, opacity: 0 });

    const tl = gsap.timeline();

    tl.from(headerRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.8,
        ease: 'power3.out'
      })
      .to(title.words, {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.6,
        ease: 'power3.out'
      }, "-=0.6")
      .to(subtitle.words, {
        y: 0,
        opacity: 1,
        stagger: 0.08,
        duration: 0.5,
        ease: 'power3.out',
      }, "-=0.6")
      .from(buttonGroupRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.5,
        ease: 'power3.out'
      }, "-=0.4");
    
    return () => {
      tl.kill();
      title.revert();
      subtitle.revert();
    };
  }, []);

  return (
    <div className="relative z-10 text-center text-white px-4 max-w-4xl">
      <h1 ref={titleRef1} className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-4 uppercase">
        Arjun Varadiyil
      </h1>
      <p ref={subtitleRef} className="text-xl md:text-2xl text-white max-w-2xl mx-auto mb-12 uppercase tracking-wider">
        Software Engineer & Full Stack Developer
      </p>
      <div ref={buttonGroupRef} className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a
          href="https://drive.google.com/file/d/1ZnYLAnJzsW0EkUPe_3R-6agIO6oWDzT-/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto bg-white text-gray-900 font-semibold py-3 px-8 rounded-full flex items-center justify-center gap-2 transition-transform duration-300 hover:scale-105 hover:bg-gray-200"
        >
          <ArrowDownToLine size={20} />
          Download CV
        </a>
        {isHomePage ? (
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, 'contact')}
            className="w-full sm:w-auto bg-transparent border border-white text-white font-semibold py-3 px-8 rounded-full flex items-center justify-center gap-2 transition-all duration-300 hover:bg-white hover:text-gray-900"
          >
            Get In Touch
          </a>
        ) : (
          <Link
            href="/contact"
            className="w-full sm:w-auto bg-transparent border border-white text-white font-semibold py-3 px-8 rounded-full flex items-center justify-center gap-2 transition-all duration-300 hover:bg-white hover:text-gray-900"
          >
            Get In Touch
          </Link>
        )}
      </div>
    </div>
  );
} 
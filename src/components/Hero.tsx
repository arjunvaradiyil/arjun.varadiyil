'use client';

import { ArrowDownToLine, Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import SplitType from 'split-type';
import Image from 'next/image';

export default function Hero() {
  const titleRef1 = useRef(null);
  const titleRef2 = useRef(null);
  const subtitleRef = useRef(null);
  const descriptionRef = useRef(null);
  const quoteRef = useRef(null);
  const buttonGroupRef = useRef(null);
  const headerRef = useRef(null);
  const imageRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const title1 = new SplitType(titleRef1.current!, { types: 'chars' });
    const title2 = new SplitType(titleRef2.current!, { types: 'words,chars' });

    gsap.set(title1.chars, { y: 100, opacity: 0 });
    gsap.set(title2.chars, { y: 100, opacity: 0 });

    const tl = gsap.timeline();

    tl.from(headerRef.current, { 
        opacity: 0, 
        y: -20, 
        duration: 0.8, 
        ease: 'power3.out' 
      })
      .to(title1.chars, {
        y: 0,
        opacity: 1,
        stagger: 0.05,
        duration: 0.8,
        ease: 'power3.out'
      }, "-=0.6")
      .to(title2.chars, {
        y: 0,
        opacity: 1,
        stagger: 0.03,
        duration: 0.8,
        ease: 'power3.out'
      }, "-=0.8")
      .from(subtitleRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.5,
        ease: 'power3.out',
      }, "-=0.6")
      .from(descriptionRef.current, { 
        opacity: 0, 
        y: 20, 
        duration: 0.5, 
        ease: 'power3.out' 
      }, "-=0.4")
      .from(quoteRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.5,
        ease: 'power3.out'
      }, "-=0.4")
      .from(buttonGroupRef.current, { 
        opacity: 0, 
        y: 20, 
        duration: 0.5, 
        ease: 'power3.out' 
      }, "-=0.4");
      
    return () => {
      tl.kill();
      title1.revert();
      title2.revert();
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      gsap.to(menuRef.current, { x: '0%', duration: 0.5, ease: 'power3.out' });
    } else {
      gsap.to(menuRef.current, { x: '-100%', duration: 0.5, ease: 'power3.in' });
    }
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Mobile Menu */}
      <div 
        ref={menuRef}
        className="fixed top-0 left-0 w-full h-full bg-[#0F172A] z-50 flex flex-col items-center justify-center"
        style={{ transform: 'translateX(-100%)' }}
      >
        <button onClick={() => setIsMenuOpen(false)} className="absolute top-6 right-4 sm:right-6 text-white">
          <X size={28} />
        </button>
        <nav className="flex flex-col items-center gap-8">
          <a href="#about" className="text-white text-3xl font-bold hover:text-amber-400 transition-colors" onClick={() => setIsMenuOpen(false)}>About</a>
          <a href="#experience" className="text-white text-3xl font-bold hover:text-amber-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Experience</a>
          <a href="#education" className="text-white text-3xl font-bold hover:text-amber-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Education</a>
          <a href="#skills" className="text-white text-3xl font-bold hover:text-amber-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Skills</a>
          <a href="#projects" className="text-white text-3xl font-bold hover:text-amber-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Projects</a>
          <a href="#certifications" className="text-white text-3xl font-bold hover:text-amber-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Certifications</a>
          <a href="#volunteering" className="text-white text-3xl font-bold hover:text-amber-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Volunteering</a>
          <a href="#contact" className="text-white text-3xl font-bold hover:text-amber-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</a>
        </nav>
      </div>

      {/* Header */}
      <header 
        ref={headerRef} 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'py-4 bg-[#0F172A]/70 backdrop-blur-sm shadow-md' : 'py-6'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-white hover:text-gray-200 transition-colors">
              Arjun Varadiyil
            </Link>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-white hover:text-gray-200 transition-colors">About</a>
              <a href="#experience" className="text-white hover:text-gray-200 transition-colors">Experience</a>
              <a href="#education" className="text-white hover:text-gray-200 transition-colors">Education</a>
              <a href="#skills" className="text-white hover:text-gray-200 transition-colors">Skills</a>
              <a href="#projects" className="text-white hover:text-gray-200 transition-colors">Projects</a>
              <a href="#certifications" className="text-white hover:text-gray-200 transition-colors">Certifications</a>
              <a href="#volunteering" className="text-white hover:text-gray-200 transition-colors">Volunteering</a>
              <a href="#contact" className="text-white hover:text-gray-200 transition-colors">Contact</a>
            </nav>
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(true)} className="text-white">
                <Menu size={28} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-4">
          <span ref={titleRef1} className="block">Arjun Varadiyil</span>
          <span ref={titleRef2} className="block text-amber-400 text-4xl sm:text-5xl md:text-6xl mt-2">
            Full Stack Developer
          </span>
        </h1>
        <p ref={subtitleRef} className="text-xl md:text-2xl text-white max-w-2xl mx-auto mb-8">
          Specializing in the MERN Stack & Modern Web Technologies.
        </p>
        <p ref={descriptionRef} className="text-lg md:text-xl text-white mb-6 max-w-2xl mx-auto">
          I transform complex ideas into intuitive and performant web applications, building scalable solutions from front to back.
        </p>
        <p ref={quoteRef} className="text-lg md:text-xl text-amber-400/80 italic font-light mb-12 max-w-xl mx-auto">
          &quot;Code with purpose, design with passion.&quot;
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
          <a
            href="#contact"
            className="w-full sm:w-auto bg-transparent border border-white text-white font-semibold py-3 px-8 rounded-full flex items-center justify-center gap-2 transition-all duration-300 hover:bg-white hover:text-gray-900"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
} 
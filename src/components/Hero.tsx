'use client';
import { ArrowDownToLine, Menu, X } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect, useRef, useState, MouseEvent } from 'react';
import { gsap } from 'gsap';
import SplitType from 'split-type';
import { usePathname } from 'next/navigation';

export default function Hero() {
  const titleRef1 = useRef(null);
  const subtitleRef = useRef(null);
  const buttonGroupRef = useRef(null);
  const headerRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);
  const pathname = usePathname();

  // Check if we're on the homepage
  const isHomePage = pathname === '/';

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, targetId: string) => {
    if (!isHomePage) return; // Only handle scroll on homepage
    
    e.preventDefault();
    setIsMenuOpen(false);
    
    // Add a small delay to ensure menu closes smoothly
    setTimeout(() => {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const yOffset = -120; // Increased offset to account for sticky header
        const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ 
          top: y, 
          behavior: 'smooth' 
        });
      }
    }, 100);
  };

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

  // Navigation items configuration
  const navItems = [
    { href: '/about', anchor: '#about', label: 'About' },
    { href: '/experience', anchor: '#experience', label: 'Experience' },
    { href: '/education', anchor: '#education', label: 'Education' },
    { href: '/skills', anchor: '#skills', label: 'Skills' },
    { href: '/projects', anchor: '#projects', label: 'Projects' },
    { href: '/certifications', anchor: '#certifications', label: 'Certifications' },
    { href: '/volunteering', anchor: '#volunteering', label: 'Volunteering' },
    { href: '/contact', anchor: '#contact', label: 'Contact' }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Mobile Menu */}
      <div 
        ref={menuRef}
        className="fixed top-0 left-0 w-full h-full bg-zinc-900/70 z-50 flex flex-col items-center justify-center"
        style={{ transform: 'translateX(-100%)' }}
      >
        <button onClick={() => setIsMenuOpen(false)} className="absolute top-6 right-4 sm:right-6 text-white">
          <X size={28} />
        </button>
        <nav className="flex flex-col items-center gap-8">
          {navItems.map((item) => (
            isHomePage ? (
              <a 
                key={item.label}
                href={item.anchor} 
                onClick={(e) => handleNavClick(e, item.anchor.slice(1))} 
                className="text-white text-3xl font-bold hover:text-amber-400 transition-colors"
              >
                {item.label}
              </a>
            ) : (
              <Link 
                key={item.label}
                href={item.href} 
                onClick={() => setIsMenuOpen(false)} 
                className="text-white text-3xl font-bold hover:text-amber-400 transition-colors"
              >
                {item.label}
              </Link>
            )
          ))}
        </nav>
      </div>

      {/* Header */}
      <header 
        ref={headerRef} 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'py-4 bg-zinc-900/70 backdrop-blur-sm shadow-md' : 'py-6'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-white hover:text-gray-200 transition-colors">
              Arjun Varadiyil
            </Link>
            <div className="hidden md:flex items-center">
              <nav className="flex items-center space-x-8">
                {navItems.map((item) => (
                  isHomePage ? (
                    <a 
                      key={item.label}
                      href={item.anchor} 
                      onClick={(e) => handleNavClick(e, item.anchor.slice(1))} 
                      className="text-white hover:text-gray-200 transition-colors"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link 
                      key={item.label}
                      href={item.href} 
                      className="text-white hover:text-gray-200 transition-colors"
                    >
                      {item.label}
                    </Link>
                  )
                ))}
              </nav>
            </div>
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
    </section>
  );
} 
'use client';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect, useRef, useState, MouseEvent, Suspense } from 'react';
import { usePathname } from 'next/navigation';

// Lazy load heavy dependencies
const HeroContent = React.lazy(() => import('./HeroContent'));

export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
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
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      if (menuRef.current) {
        menuRef.current.style.transform = 'translateX(0%)';
      }
    } else {
      if (menuRef.current) {
        menuRef.current.style.transform = 'translateX(-100%)';
      }
    }
  }, [isMenuOpen]);

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
        className="fixed top-0 left-0 w-full h-full bg-zinc-900/70 z-50 flex flex-col items-center justify-center transition-transform duration-500 ease-in-out"
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
      <Suspense fallback={
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-4 uppercase">
            Arjun Varadiyil
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-2xl mx-auto mb-12 uppercase tracking-wider">
            Software Engineer & Full Stack Developer
          </p>
        </div>
      }>
        <HeroContent isHomePage={isHomePage} handleNavClick={handleNavClick} />
      </Suspense>
    </section>
  );
} 
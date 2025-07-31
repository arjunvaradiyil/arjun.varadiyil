'use client';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect, useRef, useState, MouseEvent, Suspense } from 'react';
import { usePathname } from 'next/navigation';

// Lazy load heavy dependencies
const ModernHeroContent = React.lazy(() => import('./ModernHeroContent'));

export default function ModernHero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Check if we're on the modern homepage
  const isModernHomePage = pathname === '/modern';

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, targetId: string) => {
    if (!isModernHomePage) return; // Only handle scroll on modern homepage
    
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

  const handleKeyDown = (e: React.KeyboardEvent, targetId: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      const syntheticEvent = {
        preventDefault: () => {},
        target: e.target
      } as MouseEvent<HTMLAnchorElement>;
      handleNavClick(syntheticEvent, targetId);
    }
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
    { href: '/modern/about', anchor: '#about', label: 'About' },
    { href: '/modern/experience', anchor: '#experience', label: 'Experience' },
    { href: '/modern/education', anchor: '#education', label: 'Education' },
    { href: '/modern/skills', anchor: '#skills', label: 'Skills' },
    { href: '/modern/projects', anchor: '#projects', label: 'Projects' },
    { href: '/modern/certifications', anchor: '#certifications', label: 'Certifications' },
    { href: '/modern/volunteering', anchor: '#volunteering', label: 'Volunteering' },
    { href: '/modern/contact', anchor: '#contact', label: 'Contact' }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center modern-hero" role="banner" aria-label="Modern hero section">
      {/* Mobile Menu */}
      <div 
        ref={menuRef}
        className="fixed top-0 left-0 w-full h-full bg-white/90 backdrop-blur-md z-50 flex flex-col items-center justify-center transition-transform duration-500 ease-in-out"
        style={{ transform: 'translateX(-100%)' }}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
        aria-hidden={!isMenuOpen}
      >
        <button 
          onClick={() => setIsMenuOpen(false)} 
          className="absolute top-6 right-4 sm:right-6 text-gray-800 hover:text-gray-600 transition-colors"
          aria-label="Close mobile menu"
        >
          <X size={24} />
        </button>
        
        <nav className="flex flex-col items-center space-y-8" role="navigation" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={isModernHomePage ? item.anchor : item.href}
              onClick={(e) => handleNavClick(e, item.anchor.slice(1))}
              onKeyDown={(e) => handleKeyDown(e, item.anchor.slice(1))}
              className="text-2xl font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-300 modern-nav-link"
              tabIndex={0}
              aria-label={`Navigate to ${item.label} section`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-200/50' 
            : 'bg-transparent'
        }`}
        role="banner"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link 
              href="/modern" 
              className="text-2xl font-bold modern-gradient-text hover:scale-105 transition-transform duration-300"
              aria-label="Go to modern homepage"
            >
              AV
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8" role="navigation" aria-label="Desktop navigation">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={isModernHomePage ? item.anchor : item.href}
                  onClick={(e) => handleNavClick(e, item.anchor.slice(1))}
                  onKeyDown={(e) => handleKeyDown(e, item.anchor.slice(1))}
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 relative group modern-nav-link"
                  tabIndex={0}
                  aria-label={`Navigate to ${item.label} section`}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="md:hidden text-gray-700 hover:text-gray-900 transition-colors"
              aria-label="Open mobile menu"
              aria-expanded={isMenuOpen}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Content */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <Suspense fallback={
          <div className="flex items-center justify-center min-h-[60vh]">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        }>
          <ModernHeroContent />
        </Suspense>
      </div>

      {/* Floating Elements for Parallax Effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 animate-pulse modern-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 animate-pulse modern-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-gradient-to-r from-pink-400 to-blue-400 rounded-full opacity-20 animate-pulse modern-float" style={{ animationDelay: '4s' }}></div>
      </div>
    </section>
  );
} 
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-amber-50 hover:text-amber-300 transition-colors">
            Arjun V
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-3 lg:space-x-4">
            <Link href="#about" className="text-amber-100 hover:text-amber-300 transition-colors text-xs lg:text-sm">
              About
            </Link>
            <Link href="#experience" className="text-amber-100 hover:text-amber-300 transition-colors text-xs lg:text-sm">
              Experience
            </Link>
            <Link href="#education" className="text-amber-100 hover:text-amber-300 transition-colors text-xs lg:text-sm">
              Education
            </Link>
            <Link href="#skills" className="text-amber-100 hover:text-amber-300 transition-colors text-xs lg:text-sm">
              Skills
            </Link>
            <Link href="#services" className="text-amber-400 hover:text-amber-300 transition-colors text-xs lg:text-sm font-bold border-2 border-amber-400 px-2 py-1 rounded bg-amber-400/10">
              Services
            </Link>
            <Link href="#projects" className="text-amber-100 hover:text-amber-300 transition-colors text-xs lg:text-sm">
              Projects
            </Link>
            <Link href="#certifications" className="text-amber-100 hover:text-amber-300 transition-colors text-xs lg:text-sm">
              Certifications
            </Link>
            <Link href="#contact" className="text-amber-100 hover:text-amber-300 transition-colors text-xs lg:text-sm">
              Contact
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-amber-100 hover:text-amber-300 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 top-16 bg-black/95 backdrop-blur-md z-[9999]">
            <div className="flex flex-col h-full pt-8 px-6">
              <div className="space-y-4">
                <Link 
                  href="#about" 
                  className="block px-4 py-4 text-white hover:text-amber-300 transition-colors rounded-lg hover:bg-amber-400/10 text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <Link 
                  href="#experience" 
                  className="block px-4 py-4 text-white hover:text-amber-300 transition-colors rounded-lg hover:bg-amber-400/10 text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Experience
                </Link>
                <Link 
                  href="#education" 
                  className="block px-4 py-4 text-white hover:text-amber-300 transition-colors rounded-lg hover:bg-amber-400/10 text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Education
                </Link>
                <Link 
                  href="#skills" 
                  className="block px-4 py-4 text-white hover:text-amber-300 transition-colors rounded-lg hover:bg-amber-400/10 text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Skills
                </Link>
                <Link 
                  href="#services" 
                  className="block px-4 py-4 text-amber-400 hover:text-amber-300 transition-colors font-bold bg-amber-400/30 rounded-lg border-2 border-amber-400 text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </Link>
                <Link 
                  href="#projects" 
                  className="block px-4 py-4 text-white hover:text-amber-300 transition-colors rounded-lg hover:bg-amber-400/10 text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Projects
                </Link>
                <Link 
                  href="#certifications" 
                  className="block px-4 py-4 text-white hover:text-amber-300 transition-colors rounded-lg hover:bg-amber-400/10 text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Certifications
                </Link>
                <Link 
                  href="#contact" 
                  className="block px-4 py-4 text-white hover:text-amber-300 transition-colors rounded-lg hover:bg-amber-400/10 text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
} 
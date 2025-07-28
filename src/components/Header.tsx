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
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-amber-100 hover:text-amber-300 transition-colors">
              Home
            </Link>
            <Link href="#about" className="text-amber-100 hover:text-amber-300 transition-colors">
              About
            </Link>
            <Link href="#projects" className="text-amber-100 hover:text-amber-300 transition-colors">
              Projects
            </Link>
            <Link href="#contact" className="text-amber-100 hover:text-amber-300 transition-colors">
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
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/70 backdrop-blur-sm border-t border-amber-300/30">
              <Link href="/" className="block px-3 py-2 text-amber-100 hover:text-amber-300 transition-colors">
                Home
              </Link>
              <Link href="#about" className="block px-3 py-2 text-amber-100 hover:text-amber-300 transition-colors">
                About
              </Link>
              <Link href="#projects" className="block px-3 py-2 text-amber-100 hover:text-amber-300 transition-colors">
                Projects
              </Link>
              <Link href="#contact" className="block px-3 py-2 text-amber-100 hover:text-amber-300 transition-colors">
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
} 
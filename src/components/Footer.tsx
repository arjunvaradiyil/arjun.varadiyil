'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Mail, Linkedin, Github, ArrowUp } from 'lucide-react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const yOffset = -100;
      const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Volunteering', href: '#volunteering' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-slate-900/50 text-white border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Brand and Subscribe */}
          <div className="space-y-6">
            <Link href="/" className="text-3xl font-bold text-white hover:text-gray-200 transition-colors">
              Arjun Varadiyil
            </Link>
            <p className="text-gray-400">Full Stack Developer passionate about building modern web applications.</p>
            <div className="flex justify-start gap-4">
              <a href="mailto:arjunvaradiyil203@gmail.com" aria-label="Email" className="text-gray-400 hover:text-amber-400 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/in/arjunvaradiyil" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-amber-400 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://github.com/arjunvardiyil" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-400 hover:text-amber-400 transition-colors">
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map(link => (
                <li key={link.name}>
                  <a href={link.href} onClick={(e) => handleNavClick(e, link.href.substring(1))} className="text-gray-400 hover:text-amber-400 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Connect */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://linkedin.com/in/arjunvaradiyil" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-amber-400 transition-colors">LinkedIn</a>
              </li>
              <li>
                <a href="https://github.com/arjunvardiyil" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-amber-400 transition-colors">GitHub</a>
              </li>
              <li>
                <a href="mailto:arjunvaradiyil203@gmail.com" className="text-gray-400 hover:text-amber-400 transition-colors">Email Me</a>
              </li>
            </ul>
          </div>
          
          {/* Column 4: Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Subscribe to my newsletter</h3>
            <form className="flex">
              <input 
                type="email" 
                placeholder="example@gmail.com" 
                className="w-full px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-l-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-400/50"
              />
              <button type="submit" className="bg-amber-400 text-gray-900 font-bold px-4 rounded-r-md hover:bg-amber-500 transition-colors">&rarr;</button>
            </form>
            <p className="text-xs text-gray-500 mt-2">Get notified about my new projects and articles.</p>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-800/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex justify-between items-center">
          <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Arjun Varadiyil. All rights reserved.</p>
          {isVisible && (
            <button onClick={scrollToTop} className="bg-amber-400/80 p-2 rounded-full text-gray-900 hover:bg-amber-400 transition-colors">
              <ArrowUp className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
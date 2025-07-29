'use client';

import { Mail, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900/50 text-white py-8 border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center">
        <div className="text-center sm:text-left mb-4 sm:mb-0">
          <p className="text-lg font-semibold">Arjun Varadiyil</p>
          <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>
        <div className="flex justify-center gap-6">
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
    </footer>
  );
};

export default Footer; 
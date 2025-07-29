'use client';

import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/20 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-2">Arjun Varadiyil</h3>
          <p className="text-gray-400">Full Stack Developer</p>
          <div className="mt-4 flex justify-center space-x-6">
            <a href="https://github.com/arjunvaradiyil" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white"><Github /></a>
            <a href="https://linkedin.com/in/arjunvaradiyil" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white"><Linkedin /></a>
            <a href="mailto:arjunvaradiyil203@gmail.com" className="text-gray-400 hover:text-white"><Mail /></a>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-white/10 pt-8 text-center text-gray-400 text-sm">
        © 2025 Arjun Varadiyil. All rights reserved. | Built with Next.js & Tailwind CSS
      </div>
    </footer>
  );
} 
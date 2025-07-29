'use client';

import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Linkedin, Github, MapPin } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    
    gsap.set(el, { autoAlpha: 0 });
    gsap.fromTo(
      el,
      { y: 50 },
      {
        autoAlpha: 1,
        y: 0,
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
        duration: 1,
      }
    );
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="relative py-24 sm:py-32 bg-gray-900/50 backdrop-blur-sm overflow-hidden border-y border-slate-800/50 scroll-mt-24 invisible">
      <div className="absolute inset-0 bg-grid-slate-800/[0.04] bg-[bottom_1px_center] dark:bg-grid-slate-400/[0.05] dark:bg-bottom_1px_center"></div>
      <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold leading-7 text-amber-400">Contact</p>
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">Get In Touch</h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg leading-8 text-gray-300">
            I&apos;m currently open to new opportunities and collaborations. Feel free to reach out if you have a project in mind, want to discuss a role, or just want to say hello!
          </p>
        </div>
        <div className="mt-16">
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="sr-only">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400/50 transition duration-300"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400/50 transition duration-300"
                  placeholder="Your email"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400/50 transition duration-300"
                placeholder="Tell me about your project or just say hello!"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="inline-block bg-amber-400 text-gray-900 py-3 px-8 rounded-full hover:bg-amber-500 transition-colors font-semibold shadow-lg hover:shadow-xl"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
        <div className="mt-20 text-center">
          <div className="flex justify-center gap-8">
            <a href="mailto:arjunvaradiyil203@gmail.com" className="text-gray-400 hover:text-amber-400 transition-colors">
              <Mail className="w-6 h-6" />
              <span className="sr-only">Email</span>
            </a>
            <a href="https://linkedin.com/in/arjunvaradiyil" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-amber-400 transition-colors">
              <Linkedin className="w-6 h-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="https://github.com/arjunvardiyil" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-amber-400 transition-colors">
              <Github className="w-6 h-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <div className="flex items-center text-gray-400">
              <MapPin className="w-6 h-6 mr-2" />
              <span>Kochi, India</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 
'use client';

import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaFacebook, FaMedium } from 'react-icons/fa';

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

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/arjunvaradiyil', icon: FaGithub, color: 'hover:text-gray-400' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/arjunvaradiyil/', icon: FaLinkedin, color: 'hover:text-blue-400' },
    { name: 'Instagram', url: 'https://www.instagram.com/arjunvardiyil/', icon: FaInstagram, color: 'hover:text-pink-400' },
    { name: 'Twitter', url: 'https://twitter.com/arjunvaradiyill', icon: FaTwitter, color: 'hover:text-blue-400' },
    { name: 'Facebook', url: 'https://www.facebook.com/arjun.varadiyil', icon: FaFacebook, color: 'hover:text-blue-600' },
    { name: 'Medium', url: 'https://medium.com/@arjunvaradiyil203', icon: FaMedium, color: 'hover:text-green-400' },
  ];

  return (
    <section id="contact" ref={sectionRef} className="relative py-24 sm:py-32 bg-gray-900/50 backdrop-blur-sm overflow-hidden border-y border-slate-800/50 scroll-mt-24 invisible">
      <div className="absolute inset-0 bg-grid-slate-800/[0.04] bg-[bottom_1px_center] dark:bg-grid-slate-400/[0.05] dark:bg-bottom_1px_center"></div>
      <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold leading-7 text-amber-400">Contact</p>
          <h2 id="contact-heading" className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">Get In Touch</h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg leading-8 text-gray-300">
            I&apos;m currently open to new opportunities and collaborations. Feel free to reach out if you have a project in mind, want to discuss a role, or just want to say hello!
          </p>
        </div>
        <div className="mt-16">
          <form className="space-y-6" role="form" aria-labelledby="contact-heading">
            <fieldset className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <legend className="sr-only">Contact Information</legend>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                  Name <span className="text-red-400" aria-label="required">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  aria-required="true"
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400/50 transition duration-300"
                  placeholder="Your name"
                  aria-describedby="name-error"
                />
                <div id="name-error" className="sr-only" role="alert"></div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                  Email <span className="text-red-400" aria-label="required">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  aria-required="true"
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400/50 transition duration-300"
                  placeholder="Your email"
                  aria-describedby="email-error"
                />
                <div id="email-error" className="sr-only" role="alert"></div>
              </div>
            </fieldset>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                Message <span className="text-red-400" aria-label="required">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                aria-required="true"
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400/50 transition duration-300"
                placeholder="Tell me about your project or just say hello!"
                aria-describedby="message-error"
              ></textarea>
              <div id="message-error" className="sr-only" role="alert"></div>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="inline-block bg-amber-400 text-gray-900 py-3 px-8 rounded-full hover:bg-amber-500 transition-colors font-semibold shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-gray-900"
                aria-describedby="submit-status"
              >
                Send Message
              </button>
              <div id="submit-status" className="sr-only" role="status" aria-live="polite"></div>
            </div>
          </form>
        </div>

        {/* Social Media Links Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Connect With Me</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex flex-col items-center p-4 rounded-lg bg-slate-800/30 border border-slate-700/30 hover:bg-slate-700/50 hover:border-slate-600/50 transition-all duration-300 group ${social.color}`}
                  aria-label={`Visit ${social.name} profile`}
                >
                  <IconComponent className="w-8 h-8 mb-2 text-gray-300 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                    {social.name}
                  </span>
                </a>
              );
            })}
          </div>
          <p className="mt-8 text-gray-400 text-sm">
            Follow me on social media for the latest updates, tech insights, and project showcases.
          </p>
        </div>
      </div>
    </section>
  );
} 
'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { NEU } from './ui/neuTheme';
import { Reveal, StaggerReveal, StaggerItem } from './ui/Reveal';
import { FACEBOOK_URL, TOPMATE_URL, X_URL, YOUTUBE_URL } from '../lib/siteSeo';
import { CENTER_NAV } from '../lib/navLinks';
import BrandLogo from './BrandLogo';

const OPTIONAL_SOCIAL = [
  { label: 'Facebook', href: FACEBOOK_URL },
  { label: 'X', href: X_URL },
  { label: 'YouTube', href: YOUTUBE_URL },
].filter((item) => typeof item.href === 'string' && item.href.length > 0);

export default function Footer() {
  const reduceMotion = useReducedMotion();

  return (
    <footer className="border-t border-gray-900/10 bg-[#f5f2ea] py-12 dark:border-white/10 dark:bg-[#050505]">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 md:px-12">
        <StaggerReveal className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <StaggerItem>
            <BrandLogo
              href={null}
              imageClassName="h-10 w-auto object-contain"
              animate
              reduceMotion={reduceMotion}
            />
            <p className={`mt-4 ${NEU.display} text-lg`}>Arjun Varadiyil</p>
            <p className={`mt-2 text-sm ${NEU.bodyText}`}>Web developer · Kerala, India</p>
          </StaggerItem>

          <StaggerItem>
            <nav aria-label="Footer" className="flex flex-col gap-2">
              <p className={NEU.eyebrow}>Navigate</p>
              {CENTER_NAV.map((item) => (
                <Link key={item.href} href={item.href} className={`text-sm ${NEU.link}`}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </StaggerItem>

          <StaggerItem>
            <div>
              <p className={NEU.eyebrow}>Connect</p>
              <div className="mt-2 flex flex-col gap-2">
                <a href="mailto:arjunvaradiyil203@gmail.com" className={`text-sm ${NEU.link}`}>
                  Email
                </a>
                <a href={TOPMATE_URL} className={`text-sm ${NEU.link}`} target="_blank" rel="noopener noreferrer">
                  Book a call
                </a>
                {OPTIONAL_SOCIAL.map(({ label, href }) => (
                  <a key={label} href={href} className={`text-sm ${NEU.link}`} target="_blank" rel="noopener noreferrer me">
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </StaggerItem>
        </StaggerReveal>

        <Reveal className="mt-10 border-t border-gray-900/10 pt-8 dark:border-white/10" variant="in" delay={0.15}>
          <p className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm text-gray-600 dark:text-gray-500">
            <span>Made with</span>
            <motion.span
              animate={reduceMotion ? undefined : { scale: [1, 1.2, 1] }}
              transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 2 }}
            >
              <Heart className="h-4 w-4 fill-amber-400 text-amber-400" aria-hidden />
            </motion.span>
            <span>
              by{' '}
              <span className="font-semibold text-gray-800 dark:text-gray-300">arjunvaradiyil</span>
            </span>
            <span className="text-gray-400 dark:text-gray-600">·</span>
            <span>© {new Date().getFullYear()}</span>
          </p>
        </Reveal>
      </div>
    </footer>
  );
}

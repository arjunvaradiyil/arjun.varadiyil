'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import SidebarMenu from './SidebarMenu';
import { Menu } from 'lucide-react';
import { CENTER_NAV, isNavActive } from '../lib/navLinks';
import { useSiteSettings } from './SiteSettingsProvider';
import { EASE_OUT } from '../lib/motion';
import BrandLogo from './BrandLogo';

const categoryLinkClass = (active) =>
  [
    'shrink-0 px-4 py-2 font-sans text-[10px] font-bold uppercase tracking-[0.18em] transition sm:px-5',
    active
      ? 'bg-amber-400 text-black'
      : 'text-gray-600 hover:text-gray-950 dark:text-gray-400 dark:hover:text-amber-400',
  ].join(' ');

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const { navCategories } = useSiteSettings();
  const baseNav = navCategories?.length ? navCategories : CENTER_NAV;
  const centerNav = baseNav.some((item) => item.href === '/contact')
    ? baseNav
    : [...baseNav, { label: 'Contact', href: '/contact' }];

  return (
    <>
      <motion.header
        className="pointer-events-none fixed left-0 right-0 top-0 z-50"
        initial={reduceMotion ? false : { y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: EASE_OUT }}
      >
        <div className="pointer-events-auto border-b border-gray-900/10 bg-[#f5f2ea]/90 backdrop-blur-md dark:border-white/10 dark:bg-[#050505]/85">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 sm:px-8 md:px-12">
            <BrandLogo priority animate reduceMotion={reduceMotion} />

            <div className="flex shrink-0 items-center gap-2 sm:gap-3">
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="flex h-9 w-9 items-center justify-center text-gray-800 lg:hidden dark:text-white"
                aria-label="Open menu"
                aria-expanded={open}
                aria-controls="mobile-navigation"
              >
                <Menu className="h-5 w-5" strokeWidth={2.5} aria-hidden />
              </button>
            </div>
          </div>

          <nav
            className="flex flex-wrap items-center justify-center gap-1 border-t border-gray-900/10 px-5 py-2 dark:border-white/10 sm:gap-2 sm:px-8 md:px-12"
            aria-label="Primary navigation"
          >
            {centerNav.map((item) => {
              const active = isNavActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  prefetch
                  className={categoryLinkClass(active)}
                  aria-current={active ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </motion.header>

      <SidebarMenu open={open} setOpen={setOpen} />
    </>
  );
}

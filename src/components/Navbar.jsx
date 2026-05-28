'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import SidebarMenu from './SidebarMenu';
import { Menu } from 'lucide-react';
import { CENTER_NAV, isNavActive } from '../lib/navLinks';
import { useSiteSettings } from './SiteSettingsProvider';
import { NEU } from './ui/neuTheme';
import { EASE_OUT } from '../lib/motion';
import BrandLogo from './BrandLogo';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const { workStatus: WORK_STATUS, navCategories } = useSiteSettings();
  const centerNav = navCategories?.length ? navCategories : CENTER_NAV;

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

            <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
              {centerNav.map((item) => {
                const active = isNavActive(pathname, item.href);
                return (
                  <motion.div
                    key={item.href}
                    whileHover={reduceMotion ? undefined : { y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      href={item.href}
                      prefetch
                      className={[NEU.navLink, active ? NEU.navLinkActive : ''].join(' ')}
                      aria-current={active ? 'page' : undefined}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            <div className="flex shrink-0 items-center gap-2 sm:gap-3">
              <Link href="/contact" prefetch className={`${NEU.btnPrimary} hidden min-h-9 sm:inline-flex`}>
                {WORK_STATUS.navCta}
              </Link>

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
            className="flex gap-1 overflow-x-auto border-t border-gray-900/10 px-5 py-2 lg:hidden dark:border-white/10 sm:px-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            aria-label="Categories"
          >
            {centerNav.map((item) => {
              const active = isNavActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  prefetch
                  className={[
                    'shrink-0 px-4 py-2 font-sans text-[10px] font-bold uppercase tracking-[0.18em] transition',
                    active
                      ? 'bg-amber-400 text-black'
                      : 'text-gray-600 hover:text-gray-950 dark:text-gray-400 dark:hover:text-amber-400',
                  ].join(' ')}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              prefetch
              className={[
                'shrink-0 px-4 py-2 font-sans text-[10px] font-bold uppercase tracking-[0.18em]',
                isNavActive(pathname, '/contact') ? 'bg-amber-400 text-black' : NEU.navLink,
              ].join(' ')}
            >
              Contact
            </Link>
          </nav>
        </div>
      </motion.header>

      <SidebarMenu open={open} setOpen={setOpen} />
    </>
  );
}

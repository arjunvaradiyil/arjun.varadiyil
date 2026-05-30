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

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const { navCategories } = useSiteSettings();
  const nav = navCategories?.length ? navCategories : CENTER_NAV;

  return (
    <>
      <motion.header
        className="pointer-events-none fixed left-0 right-0 top-0 z-50"
        initial={reduceMotion ? false : { y: -12, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: EASE_OUT }}
      >
        <div className={`pointer-events-auto ${NEU.headerShell}`}>
          <div className="mx-auto grid max-w-7xl grid-cols-[1fr_auto] items-center gap-4 px-5 py-4 sm:px-8 md:grid-cols-[1fr_auto_1fr] md:px-12">
            <Link
              href="/"
              className="font-sans text-[10px] font-medium uppercase tracking-[0.28em] text-[var(--color-foreground-soft)] transition hover:text-[var(--color-foreground)]"
            >
              Arjun Varadiyil
            </Link>

            <nav className="hidden items-center justify-center gap-8 md:flex" aria-label="Primary">
              {nav.map((item) => {
                const active = isNavActive(pathname, item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    prefetch
                    className={[NEU.navLink, active ? NEU.navLinkActive : ''].join(' ')}
                    aria-current={active ? 'page' : undefined}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center justify-end gap-2">
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="flex h-9 w-9 items-center justify-center text-[var(--color-foreground-soft)] transition hover:text-[var(--color-foreground)] md:hidden"
                aria-label="Open menu"
                aria-expanded={open}
                aria-controls="mobile-navigation"
              >
                <Menu className="h-5 w-5" strokeWidth={1.5} aria-hidden />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <SidebarMenu open={open} setOpen={setOpen} />
    </>
  );
}

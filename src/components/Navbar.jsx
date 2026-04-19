'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import SidebarMenu from './SidebarMenu';
import { Sun, Moon, Menu } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { NEU } from './ui/neuTheme';

const SITE_URL = 'https://arjunvaradiyil.in';

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Certifications', href: '/certifications' },
  { label: 'Contact', href: '/contact' },
];

function navLinkActive(pathname, href) {
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  return (
    <>
      <header className='fixed left-0 right-0 top-0 z-50 border-b-4 border-gray-900 bg-[#f5f2ea]/95 pb-2.5 backdrop-blur-md dark:border-white dark:bg-[#0e0d12]/95 md:pb-2'>
        <div className='mx-auto flex min-h-14 max-w-7xl items-center justify-between gap-3 px-4 sm:gap-4 sm:px-6 md:h-16 md:min-h-0'>
          <a
            href={SITE_URL}
            className={`${NEU.display} shrink-0 text-base tracking-tight text-gray-900 dark:text-white sm:text-lg`}
            rel='noopener noreferrer'
          >
            Arjun Varadiyil
          </a>

          <nav
            className='hidden items-center gap-1 md:flex lg:gap-2'
            aria-label='Primary'
          >
            {NAV_ITEMS.map((item) => {
              const active = navLinkActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={[
                    'rounded-lg border-2 px-2.5 py-1.5 text-xs font-bold uppercase tracking-wider transition lg:px-3',
                    active
                      ? 'border-gray-900 bg-gray-900 text-white shadow-[3px_3px_0_0_rgb(17,24,39)] dark:border-white dark:bg-white dark:text-gray-900 dark:shadow-[3px_3px_0_0_rgb(255,255,255)]'
                      : 'border-transparent text-gray-800 hover:border-gray-900 hover:bg-white hover:shadow-[3px_3px_0_0_rgb(17,24,39)] dark:text-gray-200 dark:hover:border-white dark:hover:bg-zinc-900 dark:hover:shadow-[3px_3px_0_0_rgb(255,255,255)]',
                  ].join(' ')}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className='flex shrink-0 items-center gap-2'>
            <div className='flex items-center gap-0.5 rounded-lg border-2 border-gray-900 bg-white px-1 py-1 shadow-[3px_3px_0_0_rgb(17,24,39)] dark:border-white dark:bg-zinc-900 dark:shadow-[3px_3px_0_0_rgb(255,255,255)] md:gap-1 md:shadow-[4px_4px_0_0_rgb(17,24,39)] md:dark:shadow-[4px_4px_0_0_rgb(255,255,255)]'>
              <button
                type='button'
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className='flex h-9 w-9 items-center justify-center rounded-md transition hover:bg-gray-100 dark:hover:bg-white/10 md:h-10 md:w-10'
                aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {theme === 'dark' ? (
                  <Sun className='h-5 w-5 text-amber-600 dark:text-amber-400' />
                ) : (
                  <Moon className='h-5 w-5 text-indigo-800' />
                )}
              </button>

              <div className='md:hidden'>
                <button
                  type='button'
                  onClick={() => setOpen(true)}
                  className='flex h-9 w-9 items-center justify-center rounded-md'
                  aria-label='Open navigation menu'
                  aria-expanded={open}
                  aria-controls='mobile-navigation'
                >
                  <Menu className='h-5 w-5 text-gray-800 dark:text-gray-200' strokeWidth={2.5} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <SidebarMenu open={open} setOpen={setOpen} />
    </>
  );
}

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import ThemeToggle from '../ThemeToggle';

const navItems = [
  { id: 'work', label: 'WORK', href: '/work' },
  { id: 'about', label: 'ABOUT', href: '/about' },
  { id: 'experience', label: 'EXPERIENCE', href: '/experience' },
  { id: 'contact', label: 'CONTACT', href: '/contact' },
];

function isActive(pathname, item) {
  if (item.id === 'work') {
    return pathname === '/work' || pathname.startsWith('/projects');
  }
  return pathname === item.href || pathname.startsWith(`${item.href}/`);
}

export default function BottomPillNav() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-8 left-1/2 z-50 flex w-full max-w-max -translate-x-1/2 justify-center px-4">
      <nav
        className="flex items-center gap-1 rounded-full border border-neutral-200/50 bg-[#f6f6f6]/85 px-2 py-1.5 shadow-lg backdrop-blur-md dark:border-neutral-700/60 dark:bg-neutral-900/85"
        aria-label="Primary"
      >
        <Link
          href="/"
          className={`relative select-none rounded-full px-3 py-2 font-mono text-[10px] font-bold tracking-widest transition-colors duration-300 sm:px-4 sm:text-xs ${
            pathname === '/'
              ? 'text-white dark:text-black'
              : 'text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white'
          }`}
        >
          {pathname === '/' ? (
            <motion.span
              layoutId="siteActiveNavBackground"
              transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              className="absolute inset-0 -z-10 rounded-full bg-neutral-950 dark:bg-white"
            />
          ) : null}
          HOME
        </Link>
        {navItems.map((item) => {
          const active = isActive(pathname, item);
          return (
            <Link
              key={item.id}
              href={item.href}
              className={`relative select-none rounded-full px-4 py-2 font-mono text-[10px] font-bold tracking-widest transition-colors duration-300 sm:px-5 sm:text-xs ${
                active
                  ? 'text-white dark:text-black'
                  : 'text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white'
              }`}
              aria-current={active ? 'page' : undefined}
            >
              {active ? (
                <motion.span
                  layoutId="siteActiveNavBackground"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  className="absolute inset-0 -z-10 rounded-full bg-neutral-950 dark:bg-white"
                />
              ) : null}
              {item.label}
            </Link>
          );
        })}
        <div className="mx-0.5 h-5 w-px bg-neutral-300 dark:bg-neutral-600" aria-hidden />
        <ThemeToggle variant="editorial" className="h-8 w-8" />
      </nav>
    </div>
  );
}

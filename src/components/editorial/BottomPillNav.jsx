'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const navItems = [
  { id: 'home', label: 'HOME', short: 'HOME', href: '/' },
  { id: 'work', label: 'WORK', short: 'WORK', href: '/work' },
  { id: 'about', label: 'ABOUT', short: 'ABOUT', href: '/about' },
  { id: 'experience', label: 'EXPERIENCE', short: 'EXP', href: '/experience' },
  { id: 'contact', label: 'CONTACT', short: 'CONTACT', href: '/contact' },
];

function isActive(pathname, item) {
  if (item.id === 'home') return pathname === '/';
  if (item.id === 'work') {
    return pathname === '/work' || pathname.startsWith('/projects');
  }
  return pathname === item.href || pathname.startsWith(`${item.href}/`);
}

export default function BottomPillNav() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-5 left-1/2 z-[55] flex w-full max-w-max -translate-x-1/2 justify-center px-3">
      <nav
        className="flex items-center gap-0.5 rounded-full border border-neutral-200/60 bg-[#f6f6f6]/90 px-1 py-1 shadow-md backdrop-blur-md"
        aria-label="Primary"
      >
        {navItems.map((item) => {
          const active = isActive(pathname, item);
          return (
            <Link
              key={item.id}
              href={item.href}
              className={`relative select-none rounded-full px-2.5 py-1 font-mono text-[9px] font-bold tracking-wider transition-colors duration-300 sm:px-3 sm:text-[10px] sm:tracking-widest ${
                active ? 'text-white' : 'text-neutral-500 hover:text-neutral-900'
              }`}
              aria-current={active ? 'page' : undefined}
              aria-label={item.label}
            >
              {active ? (
                <motion.span
                  layoutId="siteActiveNavBackground"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  className="absolute inset-0 -z-10 rounded-full bg-neutral-950"
                />
              ) : null}
              <span className="sm:hidden">{item.short}</span>
              <span className="hidden sm:inline">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}

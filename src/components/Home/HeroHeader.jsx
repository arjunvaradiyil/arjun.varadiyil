'use client';

import Link from 'next/link';
import { Menu } from 'lucide-react';
import { CENTER_NAV } from '../../lib/navLinks';
import { NEU } from '../ui/neuTheme';

const navLink = `${NEU.navLink} transition-colors`;

export default function HeroHeader({ menuOpen, onOpenMenu, variant = 'overlay' }) {
  const isOverlay = variant === 'overlay';
  const shell = isOverlay
    ? `absolute inset-x-0 top-0 z-30 border-b border-[var(--color-border)]`
    : `relative z-30 border-b border-[var(--color-border)] ${NEU.surface}`;

  return (
    <header className={shell}>
      <div className="mx-auto grid max-w-7xl grid-cols-[1fr_auto] items-center gap-4 px-5 py-4 sm:px-8 md:grid-cols-[1fr_auto_1fr] md:px-12">
        <Link
          href="/"
          className="font-sans text-[10px] font-medium uppercase tracking-[0.28em] text-[var(--color-foreground-soft)] transition hover:text-[var(--color-foreground)]"
        >
          Arjun Varadiyil
        </Link>

        <nav
          className="hidden items-center justify-center gap-8 md:flex"
          aria-label="Primary"
        >
          {CENTER_NAV.map((item) => (
            <Link key={item.href} href={item.href} prefetch className={navLink}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-2">
          <button
            type="button"
            onClick={onOpenMenu}
            className="flex h-9 w-9 items-center justify-center text-[var(--color-foreground-soft)] transition hover:text-[var(--color-foreground)] md:hidden"
            aria-label="Open menu"
            aria-expanded={menuOpen}
          >
            <Menu className="h-5 w-5" strokeWidth={1.5} aria-hidden />
          </button>
        </div>
      </div>
    </header>
  );
}

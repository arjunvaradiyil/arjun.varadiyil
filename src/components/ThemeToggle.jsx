'use client';

import { Moon, Sun } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { useTheme } from './ThemeProvider';
import { THEMES } from '../lib/theme';

const VARIANT_CLASSES = {
  default:
    'border border-[var(--color-border-strong)] text-[var(--color-foreground-soft)] hover:border-[var(--color-accent)] hover:bg-[var(--color-primary-bg)] hover:text-[var(--color-primary-fg)]',
  editorial:
    'rounded-full border border-neutral-300 text-neutral-600 hover:border-neutral-900 hover:bg-neutral-950 hover:text-white dark:border-neutral-600 dark:text-neutral-300 dark:hover:border-white dark:hover:bg-white dark:hover:text-black',
};

export default function ThemeToggle({ className = '', variant = 'default' }) {
  const { theme, toggleTheme } = useTheme();
  const reduceMotion = useReducedMotion();
  const isDark = theme === THEMES.DARK;
  const label = isDark ? 'Switch to light theme' : 'Switch to dark theme';
  const variantClass = VARIANT_CLASSES[variant] || VARIANT_CLASSES.default;

  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
      className={`flex h-9 w-9 shrink-0 items-center justify-center transition ${variantClass} ${className}`}
      whileHover={reduceMotion ? undefined : { y: -1 }}
      whileTap={reduceMotion ? undefined : { scale: 0.96 }}
    >
      {isDark ? (
        <Sun className="h-4 w-4" strokeWidth={1.5} aria-hidden />
      ) : (
        <Moon className="h-4 w-4" strokeWidth={1.5} aria-hidden />
      )}
      <span className="sr-only">{label}</span>
    </motion.button>
  );
}

export function ThemeToggleLabeled({ className = '' }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === THEMES.DARK;

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`inline-flex items-center gap-2 border border-[var(--color-border-strong)] px-3 py-2 font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--color-foreground-soft)] transition hover:border-[var(--color-foreground)] hover:text-[var(--color-foreground)] ${className}`}
    >
      {isDark ? <Sun className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden /> : null}
      {!isDark ? <Moon className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden /> : null}
      {isDark ? 'Light' : 'Dark'}
    </button>
  );
}

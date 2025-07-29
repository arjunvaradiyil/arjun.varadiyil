'use client';

import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className="relative inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-800/50 hover:bg-slate-700/50 transition-colors"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      aria-label="Toggle theme"
    >
      <Sun className="w-5 h-5 text-amber-400 transition-transform duration-500 rotate-0 scale-100 dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute w-5 h-5 text-amber-400 transition-transform duration-500 rotate-90 scale-0 dark:rotate-0 dark:scale-100" />
    </button>
  );
} 
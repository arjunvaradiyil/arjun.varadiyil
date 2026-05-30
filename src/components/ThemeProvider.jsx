'use client';

import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { NEU } from './ui/neuTheme';
import { applyTheme, getStoredTheme, THEME_STORAGE_KEY, THEMES } from '../lib/theme';

const ThemeContext = createContext({
  theme: THEMES.DARK,
  setTheme: () => {},
  toggleTheme: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}

export default function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(THEMES.DARK);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const initial = getStoredTheme();
    applyTheme(initial);
    setThemeState(initial);
    setMounted(true);
  }, []);

  const setTheme = useCallback((next) => {
    const value = next === THEMES.LIGHT ? THEMES.LIGHT : THEMES.DARK;
    applyTheme(value);
    localStorage.setItem(THEME_STORAGE_KEY, value);
    setThemeState(value);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(theme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK);
  }, [setTheme, theme]);

  const value = useMemo(
    () => ({
      theme: mounted ? theme : THEMES.DARK,
      setTheme,
      toggleTheme,
    }),
    [mounted, setTheme, theme, toggleTheme],
  );

  return (
    <ThemeContext.Provider value={value}>
      <div className={NEU.pageRoot}>{children}</div>
    </ThemeContext.Provider>
  );
}

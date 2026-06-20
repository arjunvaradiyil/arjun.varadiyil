'use client';

import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { NEU } from './ui/neuTheme';
import { THEMES, applyTheme, getStoredTheme } from '../lib/theme';

const ThemeContext = React.createContext({
  theme: THEMES.DARK,
  toggleTheme: () => {},
});

export function useTheme() {
  return React.useContext(ThemeContext);
}

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(THEMES.DARK);

  useEffect(() => {
    setTheme(getStoredTheme());
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((current) => {
      const next = current === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK;
      applyTheme(next);

      try {
        localStorage.setItem('theme', next);
      } catch {
        /* ignore */
      }

      return next;
    });
  }, []);

  const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

  return (
    <ThemeContext.Provider value={value}>
      <div className={NEU.pageRoot}>{children}</div>
    </ThemeContext.Provider>
  );
}

'use client';

import React, { createContext, useContext, useEffect } from 'react';
import { NEU } from './ui/neuTheme';

const ThemeContext = createContext({
  theme: 'dark',
  setTheme: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}

export default function ThemeProvider({ children }) {
  useEffect(() => {
    document.documentElement.classList.remove('light');
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }, []);

  return (
    <ThemeContext.Provider value={{ theme: 'dark', setTheme: () => {} }}>
      <div className={NEU.pageRoot}>{children}</div>
    </ThemeContext.Provider>
  );
}

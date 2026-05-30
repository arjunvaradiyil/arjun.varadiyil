'use client';

import React from 'react';
import { NEU } from './ui/neuTheme';
import { THEMES } from '../lib/theme';

const ThemeContext = React.createContext({
  theme: THEMES.DARK,
});

export function useTheme() {
  return React.useContext(ThemeContext);
}

/** Dark theme only — keeps useTheme() working for existing components. */
export default function ThemeProvider({ children }) {
  return (
    <ThemeContext.Provider value={{ theme: THEMES.DARK }}>
      <div className={NEU.pageRoot}>{children}</div>
    </ThemeContext.Provider>
  );
}

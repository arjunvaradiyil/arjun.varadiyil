export const THEME_STORAGE_KEY = 'theme';

export const THEMES = {
  LIGHT: 'light',
  DARK: 'dark',
};

export function applyTheme(theme) {
  const root = document.documentElement;
  const isDark = theme === THEMES.DARK;

  root.classList.toggle('dark', isDark);
  root.classList.toggle('light', !isDark);
  root.style.colorScheme = isDark ? 'dark' : 'light';
}

export function getStoredTheme() {
  if (typeof window === 'undefined') return THEMES.DARK;

  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    return stored === THEMES.LIGHT || stored === THEMES.DARK ? stored : THEMES.DARK;
  } catch {
    return THEMES.DARK;
  }
}

export const THEME_INIT_SCRIPT = `(function(){try{var t=localStorage.getItem('${THEME_STORAGE_KEY}');var isLight=t==='${THEMES.LIGHT}';document.documentElement.classList.toggle('light',isLight);document.documentElement.classList.toggle('dark',!isLight);document.documentElement.style.colorScheme=isLight?'light':'dark';}catch(e){document.documentElement.classList.add('dark');document.documentElement.classList.remove('light');}})();`;

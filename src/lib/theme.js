export const THEME_STORAGE_KEY = 'theme';

export const THEMES = {
  DARK: 'dark',
};

export function applyTheme() {
  const root = document.documentElement;
  root.classList.add('dark');
  root.classList.remove('light');
  root.style.colorScheme = 'dark';
}

export function getStoredTheme() {
  return THEMES.DARK;
}

export const THEME_INIT_SCRIPT = `(function(){try{document.documentElement.classList.add('dark');document.documentElement.classList.remove('light');document.documentElement.style.colorScheme='dark';localStorage.setItem('${THEME_STORAGE_KEY}','${THEMES.DARK}');}catch(e){document.documentElement.classList.add('dark');}})();`;

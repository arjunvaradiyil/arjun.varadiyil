export const THEME_STORAGE_KEY = 'theme';

export const THEMES = {
  DARK: 'dark',
  LIGHT: 'light',
};

export function applyTheme(theme) {
  const root = document.documentElement;
  const isDark = theme !== THEMES.LIGHT;

  root.classList.toggle('dark', isDark);
  root.classList.toggle('light', !isDark);
  root.style.colorScheme = isDark ? 'dark' : 'light';

  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) {
    meta.setAttribute('content', isDark ? '#0a0a0a' : '#f5f2eb');
  }
}

export function getStoredTheme() {
  if (typeof window === 'undefined') return THEMES.DARK;

  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    return stored === THEMES.LIGHT ? THEMES.LIGHT : THEMES.DARK;
  } catch {
    return THEMES.DARK;
  }
}

export const THEME_INIT_SCRIPT = `(function(){try{var t=localStorage.getItem('${THEME_STORAGE_KEY}');var d=t!=='${THEMES.LIGHT}';var r=document.documentElement;r.classList.toggle('dark',d);r.classList.toggle('light',!d);r.style.colorScheme=d?'dark':'light';}catch(e){document.documentElement.classList.add('dark');}})();`;

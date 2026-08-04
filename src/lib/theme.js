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
    meta.setAttribute('content', isDark ? '#0a0a0a' : '#ffffff');
  }
}

/** Prefer light (white editorial) when no preference is stored. */
export function getStoredTheme() {
  if (typeof window === 'undefined') return THEMES.LIGHT;

  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    if (stored === THEMES.DARK) return THEMES.DARK;
    if (stored === THEMES.LIGHT) return THEMES.LIGHT;
    return THEMES.LIGHT;
  } catch {
    return THEMES.LIGHT;
  }
}

export const THEME_INIT_SCRIPT = `(function(){try{var t=localStorage.getItem('${THEME_STORAGE_KEY}');var d=t==='${THEMES.DARK}';var r=document.documentElement;r.classList.toggle('dark',d);r.classList.toggle('light',!d);r.style.colorScheme=d?'dark':'light';var m=document.querySelector('meta[name="theme-color"]');if(m)m.setAttribute('content',d?'#0a0a0a':'#ffffff');}catch(e){document.documentElement.classList.add('light');}})();`;

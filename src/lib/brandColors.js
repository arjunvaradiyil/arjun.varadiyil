/** Shared brand palette — site theme, OG image, and email templates. */

export const BRAND = {
  accent: '#c9a227',
  accentMuted: '#8b6914',
  accentSoft: 'rgba(201, 162, 39, 0.14)',
  surface: '#0a0a0a',
  surfaceElevated: '#141414',
  foreground: '#f5f0e8',
  foregroundMuted: 'rgba(245, 240, 232, 0.65)',
  lightSurface: '#f5f2eb',
  lightForeground: '#1a1a1a',
  lightMuted: '#5c5348',
};

export function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

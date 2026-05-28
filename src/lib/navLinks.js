import { NJR_NAV_CATEGORIES } from './njrTheme';

/** Center nav — Work / Profile */
export const CENTER_NAV = NJR_NAV_CATEGORIES;

export const DRAWER_NAV = [
  { label: 'Home', href: '/' },
  ...CENTER_NAV,
  { label: 'Certifications', href: '/certifications' },
  { label: 'Contact', href: '/contact' },
  { label: 'Hobbies', href: '/hobbies' },
];

export function isNavActive(pathname, href) {
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(`${href}/`);
}

/** Routes that use the white/black editorial shell (no default Navbar/Footer). */

export const EDITORIAL_PAGE_PATHS = ['/', '/about', '/work', '/experience', '/contact', '/projects', '/blog'];

export function isEditorialPage(pathname) {
  if (!pathname) return false;
  if (EDITORIAL_PAGE_PATHS.includes(pathname)) return true;
  if (pathname.startsWith('/projects/')) return true;
  if (pathname.startsWith('/blog/')) return true;
  return false;
}

/** Routes that use the white/black Rajan editorial shell (no default Navbar/Footer). */

export const RAJAN_PAGE_PATHS = ['/', '/about', '/work', '/experience', '/contact', '/projects', '/blog'];

export function isRajanPage(pathname) {
  if (!pathname) return false;
  if (RAJAN_PAGE_PATHS.includes(pathname)) return true;
  if (pathname.startsWith('/projects/')) return true;
  if (pathname.startsWith('/blog/')) return true;
  return false;
}

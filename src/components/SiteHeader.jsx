'use client';

import { usePathname } from 'next/navigation';
import Navbar from './Navbar';

export default function SiteHeader({ maintenance = false }) {
  const pathname = usePathname();
  const isHome = pathname === '/';

  if (maintenance) {
    return null;
  }

  if (isHome) {
    return null;
  }

  return <Navbar />;
}

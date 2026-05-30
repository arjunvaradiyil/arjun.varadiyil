'use client';

import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import BrandLogo from './BrandLogo';
import { NEU } from './ui/neuTheme';

export default function SiteHeader({ maintenance = false }) {
  const pathname = usePathname();
  const isHome = pathname === '/';

  if (maintenance) {
    return (
      <header className={`fixed left-0 right-0 top-0 z-50 ${NEU.headerShell}`}>
        <div className="mx-auto flex max-w-7xl justify-center px-5 py-3 sm:px-8 md:px-12">
          <BrandLogo href={null} imageClassName="h-9 w-auto object-contain" />
        </div>
      </header>
    );
  }

  if (isHome) {
    return null;
  }

  return <Navbar />;
}

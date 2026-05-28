'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { DRAWER_NAV, isNavActive } from '../lib/navLinks';
import { useSiteSettings } from './SiteSettingsProvider';
import { NEU } from './ui/neuTheme';
import BrandLogo from './BrandLogo';
import { TOPMATE_URL } from '../lib/siteSeo';

const resume = 'https://drive.google.com/file/d/1ZnYLAnJzsW0EkUPe_3R-6agIO6oWDzT-/view';

const PAGE_LINKS = DRAWER_NAV.map((item) => ({
  slug: item.href === '/' ? 'HOME' : item.href.slice(1).split('/')[0].toUpperCase(),
  label: item.label,
  href: item.href,
}));

const SOCIALS = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/arjunvaradiyil' },
  { name: 'Instagram', url: 'https://www.instagram.com/_arjuo__?igsh=MWZiOXdxMmg3c3Bodw%3D%3D&utm_source=qr' },
  { name: 'Github', url: 'https://github.com/arjunvaradiyil/arjun.varadiyil' },
  { name: 'Book a call', url: TOPMATE_URL },
  { name: 'Whatsapp', url: 'https://wa.me/9946642065' },
  { name: 'Resume', url: resume },
];

export default function SidebarMenu({ open, setOpen }) {
  const { workStatus: WORK_STATUS } = useSiteSettings();
  const pathname = usePathname();
  const router = useRouter();
  const contactActive = isNavActive(pathname, '/contact');

  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    if (open) {
      document.body.setAttribute('data-mobile-nav-open', 'true');
      document.body.style.overflow = 'hidden';
    } else {
      document.body.removeAttribute('data-mobile-nav-open');
      document.body.style.overflow = prevOverflow || '';
    }
    return () => {
      document.body.removeAttribute('data-mobile-nav-open');
      document.body.style.overflow = prevOverflow || '';
    };
  }, [open]);

  /** Prefetch main routes while the drawer is open so taps feel instant. */
  useEffect(() => {
    if (!open) return;
    const hrefs = [...PAGE_LINKS.map((p) => p.href), '/contact'];
    hrefs.forEach((href) => {
      try {
        router.prefetch(href);
      } catch {
        /* noop */
      }
    });
  }, [open, router]);

  /** Close after route change — avoids syncing setOpen on tap, which can interrupt Link on mobile. */
  useEffect(() => {
    setOpen(false);
  }, [pathname, setOpen]);

  const panel =
    'border-l border-gray-900/15 bg-[#f5f2ea] text-gray-900 dark:border-amber-400/20 dark:bg-[#050505] dark:text-gray-100';

  return (
    <>
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-[75] bg-black/60 transition-opacity duration-200 ease-out motion-reduce:transition-none md:hidden ${
          open ? 'visible opacity-100' : 'invisible pointer-events-none opacity-0'
        }`}
        aria-hidden={!open}
      />

      <aside
        id='mobile-navigation'
        className={`fixed right-0 top-0 z-[80] flex h-[100dvh] max-h-[100dvh] w-full max-w-md flex-col overflow-y-auto overflow-x-hidden overscroll-contain font-syne sm:w-[85%]
        transform transition-transform duration-200 ease-in-out will-change-transform motion-reduce:transition-none md:hidden ${panel}
        ${open ? 'pointer-events-auto translate-x-0' : 'pointer-events-none translate-x-full'}`}
        aria-hidden={!open}
      >
        <div className='flex shrink-0 items-center justify-between border-b border-gray-900/10 px-6 pb-4 pt-5 dark:border-white/10 sm:px-8 sm:pb-5 sm:pt-6'>
          <div className='flex items-center gap-3'>
            <BrandLogo href={null} imageClassName='h-9 w-auto object-contain' />
            <span className={`${NEU.eyebrow} !text-gray-800 dark:!text-gray-300`}>Menu</span>
          </div>

          <button
            type='button'
            onClick={() => setOpen(false)}
            className='flex h-10 w-10 shrink-0 items-center justify-center border border-gray-900/20 text-lg leading-none text-gray-900 transition hover:border-amber-400/50 hover:text-amber-600 dark:border-white/20 dark:text-white dark:hover:text-amber-400'
            aria-label='Close navigation menu'
          >
            ✕
          </button>
        </div>

        <nav
          aria-label='Primary pages'
          className='shrink-0 px-6 pb-10 pt-4 sm:px-10 sm:pb-12 sm:pt-5'
        >
          <p className='mb-4 text-[10px] font-bold uppercase tracking-[0.25em] text-gray-500 dark:text-gray-400'>Pages</p>
          {PAGE_LINKS.map((item, i) => {
            const isActive = isNavActive(pathname, item.href);
            return (
              <div key={item.slug} className={`group ${i === 0 ? '' : 'mt-3 sm:mt-4'}`}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  prefetch
                  className={`relative z-10 block min-h-[44px] touch-manipulation py-2 text-[26px] font-bold capitalize leading-tight sm:min-h-[48px] sm:text-[30px] ${
                    isActive
                      ? 'text-gray-900 dark:text-white'
                      : 'text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className='ml-2 inline-block h-2 w-2 translate-y-[-0.12em] bg-amber-500 dark:bg-amber-400' />
                  )}
                  <span className='absolute bottom-1 left-0 h-[1px] w-0 bg-amber-600 transition-all duration-200 group-hover:w-[45%] dark:bg-amber-400' />
                </Link>
                <div className='mt-4 h-px w-full bg-gray-900/12 dark:bg-white/15' />
              </div>
            );
          })}
          <div className='mt-8 sm:mt-10'>
            <Link
              href='/contact'
              prefetch
              onClick={() => setOpen(false)}
              className={`${NEU.btnPrimary} flex min-h-[52px] w-full items-center justify-center text-center text-xs font-bold uppercase tracking-wider`}
            >
              {WORK_STATUS.primaryCta}
            </Link>
            <p className='mt-3 text-center text-xs leading-snug text-gray-600 dark:text-gray-400'>
              {WORK_STATUS.contactNote}
            </p>
          </div>
        </nav>

        <section
          aria-labelledby='drawer-connect-label'
          className='shrink-0 border-t border-gray-900/10 px-6 py-8 dark:border-white/10 sm:px-10 sm:py-9'
          style={{
            paddingBottom: 'max(5.5rem, calc(2.25rem + env(safe-area-inset-bottom, 0px)))',
          }}
        >
          <p
            id='drawer-connect-label'
            className='mb-4 text-[10px] font-bold uppercase tracking-[0.25em] text-gray-500 dark:text-gray-400'
          >
            Connect
          </p>

          <div className='space-y-8'>
            <div>
              <Link
                href='/contact'
                onClick={() => setOpen(false)}
                prefetch
                className={`${NEU.display} block text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl ${
                  contactActive ? 'text-amber-600 dark:text-amber-400' : ''
                }`}
              >
                Contact
                {contactActive ? (
                  <span className='ml-2 inline-block h-2 w-2 translate-y-[-0.1em] bg-amber-500 dark:bg-amber-400' />
                ) : null}
              </Link>
            </div>

            <address className='not-italic'>
              <div className='space-y-1'>
                <p className='text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400'>Email</p>
                <a
                  href='mailto:arjunvaradiyil203@gmail.com'
                  className={`block break-all text-base font-semibold sm:text-lg ${NEU.link}`}
                >
                  arjunvaradiyil203@gmail.com
                </a>
              </div>

              <div className='mt-8'>
                <p className='mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400'>
                  Socials
                </p>
                <div className='grid grid-cols-2 gap-x-6 gap-y-2.5 sm:gap-x-10'>
                  {SOCIALS.map((item, i) => {
                    const isResume = item.name === 'Resume';
                    const isBookCall = item.url === TOPMATE_URL;
                    return (
                      <a
                        key={i}
                        href={item.url}
                        target='_blank'
                        rel={
                          isResume || isBookCall
                            ? 'noopener noreferrer'
                            : 'noopener noreferrer me'
                        }
                        title={`${item.name} (opens in a new tab)`}
                        className='group relative inline-block w-fit max-w-full'
                      >
                        <span className={`text-sm font-semibold sm:text-base ${NEU.link}`}>{item.name}</span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </address>
          </div>
        </section>
      </aside>
    </>
  );
}

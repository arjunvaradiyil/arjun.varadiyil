'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { NEU } from './ui/neuTheme';

const resume = 'https://drive.google.com/file/d/1ZnYLAnJzsW0EkUPe_3R-6agIO6oWDzT-/view';

/** Portfolio order: work first after home, then profile, then connect lives in the footer block */
const PAGE_LINKS = [
  { slug: 'HOME', label: 'Home', href: '/' },
  { slug: 'PROJECTS', label: 'Projects', href: '/projects' },
  { slug: 'ABOUT', label: 'About', href: '/about' },
  { slug: 'CERTIFICATIONS', label: 'Certifications', href: '/certifications' },
];

const SOCIALS = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/arjunvaradiyil' },
  { name: 'Instagram', url: 'https://www.instagram.com/_arjuo__?igsh=MWZiOXdxMmg3c3Bodw%3D%3D&utm_source=qr' },
  { name: 'Github', url: 'https://github.com/arjunvaradiyil/arjun.varadiyil' },
  { name: 'Whatsapp', url: 'https://wa.me/9946642065' },
  { name: 'Resume', url: resume },
];

export default function SidebarMenu({ open, setOpen }) {
  const pathname = usePathname();
  const router = useRouter();
  const segment = pathname === '/' ? '' : pathname.slice(1).split('/')[0];
  const active = pathname === '/' ? 'HOME' : segment.toUpperCase();
  const contactActive = pathname === '/contact' || pathname.startsWith('/contact/');

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
    'border-l-4 border-gray-900 bg-[#f5f2ea] text-gray-900 dark:border-white dark:bg-[#0e0d12] dark:text-gray-100';

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
        <div className='flex shrink-0 items-center justify-between border-b-4 border-gray-900 px-6 pb-4 pt-5 dark:border-white sm:px-8 sm:pb-5 sm:pt-6'>
          <div className='text-[15px] font-bold uppercase tracking-wide text-gray-800 dark:text-gray-200 sm:text-[16px]'>
            <span className='mr-3 text-amber-600 dark:text-amber-400'>■</span>
            Menu
          </div>

          <button
            type='button'
            onClick={() => setOpen(false)}
            className='flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border-2 border-gray-900 bg-white text-lg leading-none text-gray-900 shadow-[2px_2px_0_0_rgb(17,24,39)] transition hover:bg-gray-50 active:scale-95 dark:border-white dark:bg-zinc-900 dark:text-gray-100 dark:shadow-[2px_2px_0_0_rgb(255,255,255)] dark:hover:bg-zinc-800 sm:shadow-[3px_3px_0_0_rgb(17,24,39)] sm:dark:shadow-[3px_3px_0_0_rgb(255,255,255)]'
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
            const isActive = active === item.slug;
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
        </nav>

        <section
          aria-labelledby='drawer-connect-label'
          className='shrink-0 border-t-4 border-gray-900 px-6 py-8 dark:border-white sm:px-10 sm:py-9'
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
                  contactActive ? 'text-indigo-800 dark:text-amber-400' : ''
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
                    return (
                      <a
                        key={i}
                        href={item.url}
                        target='_blank'
                        rel={isResume ? 'noopener noreferrer' : 'noopener noreferrer me'}
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

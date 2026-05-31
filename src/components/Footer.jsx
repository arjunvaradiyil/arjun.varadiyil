'use client';

import Link from 'next/link';
import { useGsap } from '../hooks/useGsap';
import { prefersReducedMotion, scrollReveal, EDITORIAL_EASE } from '../lib/gsap';
import { SITE_EMAIL } from '../lib/siteSeo';
import { LINKEDIN_URL } from '../data/proof';
import { CENTER_NAV } from '../lib/navLinks';
import { useSiteSettings } from './SiteSettingsProvider';
import { NEU } from './ui/neuTheme';

const CONNECT_LINKS = (email) => [
  { label: 'Email', href: `mailto:${email}`, external: false },
  { label: 'LinkedIn', href: LINKEDIN_URL, external: true },
  { label: 'GitHub', href: 'https://github.com/arjunvaradiyil/arjun.varadiyil', external: true },
];

const footerLink =
  'font-sans text-sm uppercase tracking-[0.16em] text-[var(--color-foreground-muted)] transition hover:text-[var(--color-foreground)]';

function FooterColumn({ label, children, align = 'left' }) {
  return (
    <div
      data-gsap="footer-reveal"
      className={`bg-[var(--color-surface)] px-5 py-6 sm:px-7 sm:py-8 ${align === 'right' ? 'md:text-right' : ''}`}
    >
      <p className={NEU.eyebrow}>{label}</p>
      <div className="mt-5">{children}</div>
    </div>
  );
}

export default function Footer() {
  const { profile, workStatus } = useSiteSettings();
  const email = profile?.email || SITE_EMAIL;
  const location = profile?.location || 'Kerala, India';

  const scopeRef = useGsap(({ gsap, scope }) => {
    if (prefersReducedMotion()) return;

    scrollReveal(scope, '[data-gsap="footer-reveal"]', {
      trigger: scope,
      start: 'top 92%',
      y: 20,
      stagger: 0.08,
      duration: 0.55,
    });

    gsap.from('[data-gsap="footer-name-line"]', {
      scrollTrigger: {
        trigger: '[data-gsap="footer-brand"]',
        start: 'top 88%',
        once: true,
      },
      y: 48,
      opacity: 0,
      duration: 0.85,
      stagger: 0.12,
      ease: EDITORIAL_EASE,
    });

    scrollReveal(scope, '[data-gsap="footer-meta"]', {
      trigger: '[data-gsap="footer-brand"]',
      start: 'top 85%',
      y: 12,
      duration: 0.5,
    });
  }, []);

  return (
    <footer ref={scopeRef} className="border-t border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-foreground)]">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 md:py-20 lg:px-12">
        <div className="grid gap-px border border-[var(--color-border)] bg-[var(--color-grid-line)] md:grid-cols-3">
          <FooterColumn label="Navigate">
            <nav className="flex flex-col gap-3" aria-label="Footer">
              {CENTER_NAV.map((item) => (
                <Link key={item.href} href={item.href} className={footerLink}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </FooterColumn>

          <FooterColumn label="Connect">
            <div className="flex flex-col gap-3">
              {CONNECT_LINKS(email).map(({ label, href, external }) =>
                external ? (
                  <a
                    key={href}
                    href={href}
                    className={footerLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {label}
                  </a>
                ) : (
                  <a key={href} href={href} className={footerLink}>
                    {label}
                  </a>
                ),
              )}
            </div>
          </FooterColumn>

          <FooterColumn label="Based in" align="right">
            <p className="font-syne text-sm font-bold uppercase tracking-[0.06em] text-[var(--color-foreground)] sm:text-base">
              {location}
            </p>
            {workStatus?.badge ? (
              <p className={`mt-4 ${NEU.badge}`}>{workStatus.badge}</p>
            ) : null}
          </FooterColumn>
        </div>

        <div
          data-gsap="footer-brand"
          className="mt-14 border-t border-[var(--color-border)] pt-10 md:mt-20 md:pt-14"
        >
          <p className="sr-only">Arjun Varadiyil</p>
          <div
            className={`${NEU.displayHero} text-[clamp(2.75rem,18vw,10rem)] leading-[0.82] text-[var(--color-foreground)]`}
            aria-hidden
          >
            <span data-gsap="footer-name-line" className="block">
              Arjun
            </span>
            <span data-gsap="footer-name-line" className="block">
              Varadiyil
            </span>
          </div>

          <p
            data-gsap="footer-meta"
            className="mt-8 font-sans text-[10px] uppercase tracking-[0.24em] text-[var(--color-foreground-faint)]"
          >
            © {new Date().getFullYear()} — Full stack developer · {location}
          </p>
        </div>
      </div>
    </footer>
  );
}

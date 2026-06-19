'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { certifications as defaultCertifications } from '../../data/certificationsData';
import Certifications from './Certifications';
import { NEU } from '../ui/neuTheme';

export default function AboutCertifications({
  certifications = defaultCertifications,
}) {
  return (
    <section
      data-gsap="about-section"
      className={`border-t border-[var(--color-border)] ${NEU.section} ${NEU.sectionPad}`}
    >
      <div className="mx-auto max-w-7xl">
        <header
          data-gsap="reveal"
          className="mb-10 flex flex-col gap-4 md:mb-14 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <p className={NEU.eyebrow}>Credentials</p>
            <h2 className={`mt-3 ${NEU.display} text-3xl md:text-4xl`}>Certifications</h2>
            <p className={`mt-3 max-w-2xl text-base md:text-lg ${NEU.bodyText}`}>
              MERN stack, JavaScript, and NSDC programs.
            </p>
          </div>
          <Link href="/certifications" className={`inline-flex shrink-0 items-center gap-1 ${NEU.link}`}>
            View all
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </Link>
        </header>
        <Certifications showHeader={false} certifications={certifications.slice(0, 3)} />
      </div>
    </section>
  );
}

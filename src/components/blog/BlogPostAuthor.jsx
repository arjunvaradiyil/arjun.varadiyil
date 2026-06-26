import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { PROFILE, PROFESSIONAL_SUMMARY } from '../../data/aboutData';
import { LINKEDIN_URL } from '../../data/proof';
import { NEU } from '../ui/neuTheme';

export default function BlogPostAuthor() {
  return (
    <section
      className="mt-12 flex flex-col gap-5 border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-5 sm:flex-row sm:items-start sm:gap-6 sm:p-6"
      aria-labelledby="blog-author-heading"
    >
      <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]">
        <Image
          src="/assets/images/profilepic.png"
          alt={PROFILE.name}
          fill
          sizes="64px"
          className="object-cover object-center"
        />
      </div>

      <div className="min-w-0 flex-1">
        <p className={NEU.eyebrow}>Author</p>
        <h2 id="blog-author-heading" className="mt-2 font-syne text-lg font-bold text-[var(--color-foreground)]">
          {PROFILE.name}
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-[var(--color-foreground-muted)] sm:text-[15px]">
          {PROFESSIONAL_SUMMARY}
        </p>
        <Link
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer me"
          className={`mt-4 inline-flex items-center gap-1.5 ${NEU.link}`}
        >
          Connect on LinkedIn
          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
        </Link>
      </div>
    </section>
  );
}

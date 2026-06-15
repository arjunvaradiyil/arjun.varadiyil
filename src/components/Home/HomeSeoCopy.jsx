import { NEU } from '../ui/neuTheme';
import { DEVELOPER_APPROACH } from '../../data/proof';
import { ROLE_AT_EMPLOYER } from '../../lib/employment';

/** Crawlable homepage copy — keywords in headings for on-page SEO. */
export default function HomeSeoCopy() {
  return (
    <section
      className={`border-t border-[var(--color-border)] ${NEU.section} ${NEU.sectionPad}`}
      aria-labelledby="home-seo-heading"
    >
      <div className="mx-auto max-w-3xl">
        <h2 id="home-seo-heading" className={`${NEU.display} text-2xl md:text-3xl`}>
          {ROLE_AT_EMPLOYER}
        </h2>
        <p className={`mt-6 ${NEU.bodyText}`}>
          {DEVELOPER_APPROACH}{' '}
          <a href="/projects" className="underline underline-offset-4 hover:text-[var(--color-foreground)]">
            Case studies
          </a>
          {' · '}
          <a href="/contact" className="underline underline-offset-4 hover:text-[var(--color-foreground)]">
            Contact
          </a>
        </p>
      </div>
    </section>
  );
}

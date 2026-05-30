import { NEU } from '../ui/neuTheme';

/** Crawlable homepage copy — keywords in headings for on-page SEO. */
export default function HomeSeoCopy() {
  return (
    <section
      className={`border-t border-[var(--color-border)] ${NEU.section} ${NEU.sectionPad}`}
      aria-labelledby="home-seo-heading"
    >
      <div className="mx-auto max-w-3xl">
        <p className={NEU.eyebrow}>Full stack developer</p>
        <h2 id="home-seo-heading" className={`mt-3 ${NEU.display} text-2xl md:text-3xl`}>
          Next.js & Payload CMS work in Kerala
        </h2>
        <div className={`mt-6 space-y-5 ${NEU.bodyText}`}>
          <p>
            I&apos;m <strong>Arjun Varadiyil</strong>, a full stack developer based in Kerala who
            ships production web platforms for editorial teams. My work spans news portals, biennale
            programmes, and civic tools — products where content editors, performance budgets, and
            reliable delivery all matter under real traffic.
          </p>
          <p>
            I specialise in <strong>Next.js</strong> and <strong>Payload CMS</strong>: custom
            collections, reusable blocks, and APIs shaped for publishing workflows instead of
            one-off pages. From architecture through launch, I focus on maintainable TypeScript,
            accessible UI, and systems teams can extend after go-live.
          </p>
          <h3 className={`pt-2 ${NEU.display} text-lg md:text-xl`}>
            Production platforms & news publishing
          </h3>
          <p>
            Recent work includes a Kochi-Muziris Biennale platform and a Deshabhimani news portal
            — both built as CMS-driven products with editor-friendly workflows. Whether you need a
            headless CMS migration, a greenfield editorial stack, or help scaling an existing
            Next.js app, I bring hands-on experience from agile teams shipping to production.
          </p>
          <p>
            Explore the{' '}
            <a href="/projects" className="underline underline-offset-4 hover:text-[var(--color-foreground)]">
              project archive
            </a>{' '}
            for case studies, read my{' '}
            <a href="/about" className="underline underline-offset-4 hover:text-[var(--color-foreground)]">
              work profile
            </a>
            , or{' '}
            <a href="/contact" className="underline underline-offset-4 hover:text-[var(--color-foreground)]">
              get in touch
            </a>{' '}
            to discuss your next build.
          </p>
        </div>
      </div>
    </section>
  );
}

import { NEU } from '../ui/neuTheme';

/** Crawlable homepage copy — keywords in headings for on-page SEO. */
export default function HomeSeoCopy() {
  return (
    <section
      className={`border-t border-[var(--color-border)] ${NEU.section} ${NEU.sectionPad}`}
      aria-labelledby="home-seo-heading"
    >
      <div className="mx-auto max-w-3xl">
        <p className={NEU.eyebrow}>Based in Kerala</p>
        <h2 id="home-seo-heading" className={`mt-3 ${NEU.display} text-2xl md:text-3xl`}>
          Payload CMS & Next.js for teams that publish daily
        </h2>
        <div className={`mt-6 space-y-5 ${NEU.bodyText}`}>
          <p>
            I&apos;m <strong>Arjun Varadiyil</strong>, a developer at Faircode Infotech in Kerala.
            My recent work includes a Deshabhimani news portal, the Kochi–Muziris Biennale platform,
            and a MyIdukki civic pledge app — products where reporters, curators, and district staff
            need to update content without opening a dev ticket.
          </p>
          <p>
            I care about one thing more than stack choices: editors should not wait on deploys to
            publish. That means Payload collections and blocks shaped around real workflows, and
            Next.js frontends that stay fast when a story or exhibition goes live.{' '}
            <a href="/projects" className="underline underline-offset-4 hover:text-[var(--color-foreground)]">
              See the case studies
            </a>{' '}
            or{' '}
            <a href="/contact" className="underline underline-offset-4 hover:text-[var(--color-foreground)]">
              get in touch
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}

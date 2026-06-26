'use client';

import Image from 'next/image';
import { certifications as defaultCertifications } from '../../data/certificationsData';
import { StaggerItem, StaggerReveal } from '../ui/Reveal';
import { NEU } from '../ui/neuTheme';

export default function Certifications({ showHeader = true, certifications = defaultCertifications }) {
  return (
    <section className={`${NEU.section} ${showHeader ? NEU.sectionPad : ''}`}>
      <div className="relative z-10 mx-auto max-w-7xl">
        {showHeader ? (
          <>
            <p className={NEU.eyebrow}>Certifications</p>
            <h2 className={`mt-3 ${NEU.display} text-3xl md:text-4xl`}>Certifications</h2>
            <p className={`mt-4 max-w-3xl ${NEU.bodyText}`}>
              Professional certifications in full-stack development and core programming skills.
            </p>
          </>
        ) : null}

        <StaggerReveal
          as="ul"
          className={`grid list-none grid-cols-1 gap-px border border-[var(--color-border)] bg-[var(--color-grid-line)] sm:grid-cols-2 lg:grid-cols-3 ${showHeader ? 'mt-12 md:mt-14' : ''}`}
          aria-label="Certification cards"
        >
          {certifications.map((cert) => (
            <StaggerItem key={cert.id} as="li" className="min-w-0 bg-[var(--color-surface)]">
              <article className="flex h-full flex-col p-6 sm:p-7">
                {cert.image ? (
                  <div className={`relative mb-5 h-20 w-full overflow-hidden ${NEU.frame}`}>
                    <Image
                      src={cert.image}
                      alt={`${cert.title} certification badge`}
                      fill
                      className="object-contain object-left grayscale"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                ) : null}

                <div className="mb-4 flex items-start justify-between gap-3">
                  <span className={`${NEU.sectionIndex} text-lg`}>
                    {cert.id}
                    <span className="text-[var(--color-foreground-faint)]">.</span>
                  </span>
                  <span className={NEU.techTag}>{cert.date}</span>
                </div>

                <h3 className={`${NEU.display} text-lg sm:text-xl`}>{cert.title}</h3>
                <p className="mt-2 text-sm font-medium text-[var(--color-foreground-soft)]">{cert.issuer}</p>
                <p className={`mt-4 flex-1 border-t border-[var(--color-border)] pt-4 text-sm ${NEU.bodyText}`}>
                  {cert.description}
                </p>
              </article>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}

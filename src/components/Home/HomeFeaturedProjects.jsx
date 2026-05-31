'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { NEU } from '../ui/neuTheme';
import { Reveal, StaggerReveal, StaggerItem } from '../ui/Reveal';
import { transition } from '../../lib/motion';
import ProjectCard from '../projects/ProjectCard';

export default function HomeFeaturedProjects({ projects = [] }) {
  const featured = projects.slice(0, 2);
  const reduceMotion = useReducedMotion();

  return (
    <section className={`border-t border-[var(--color-border)] ${NEU.section} ${NEU.sectionPad}`}>
      <div className="mx-auto max-w-7xl">
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className={NEU.eyebrow}>Featured work</p>
            <h2 className={`mt-3 ${NEU.display} text-3xl md:text-5xl`}>
              Case studies with real impact
            </h2>
            <p className={`mt-3 max-w-lg ${NEU.bodyText}`}>
              Problem, solution, and measurable results — not just tech stacks.
            </p>
          </div>
          <Link href="/projects" className={`inline-flex items-center gap-2 ${NEU.link}`}>
            All projects
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </Link>
        </Reveal>

        <StaggerReveal as="ul" className="mt-10 grid gap-px bg-[var(--color-grid-line)] md:mt-12 md:grid-cols-2">
          {featured.map((project) => (
            <StaggerItem key={project.slug} as="li" className="bg-[var(--color-surface)]">
              <motion.div
                className="h-full"
                whileHover={reduceMotion ? undefined : { opacity: 0.92 }}
                transition={transition(0.25)}
              >
                <ProjectCard project={project} variant="featured" />
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}

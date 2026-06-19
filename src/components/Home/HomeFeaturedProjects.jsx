'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { NEU } from '../ui/neuTheme';
import { Reveal, StaggerReveal, StaggerItem } from '../ui/Reveal';
import { transition } from '../../lib/motion';
import { HIDDEN_FROM_HOME_SLUGS } from '../../lib/employment';
import ProjectCard from '../projects/ProjectCard';

export default function HomeFeaturedProjects({ projects = [] }) {
  const featured = projects.filter(
    (project) => project?.slug && !HIDDEN_FROM_HOME_SLUGS.includes(project.slug),
  );
  const reduceMotion = useReducedMotion();

  if (featured.length === 0) return null;

  return (
    <section className={`border-t border-[var(--color-border)] ${NEU.section} ${NEU.sectionPad}`}>
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <h2 className={`${NEU.display} text-3xl md:text-5xl`}>Work</h2>
        </Reveal>

        <StaggerReveal as="ul" className="mt-10 space-y-8 md:mt-12 md:space-y-10">
          {featured.map((project, index) => (
            <StaggerItem key={project.slug} as="li">
              <motion.div
                whileHover={reduceMotion ? undefined : { opacity: 0.96 }}
                transition={transition(0.25)}
              >
                <ProjectCard project={project} variant="list" index={index + 1} />
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}

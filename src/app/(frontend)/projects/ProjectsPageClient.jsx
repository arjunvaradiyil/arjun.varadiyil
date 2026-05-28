'use client';

import React, { useMemo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { hoverLift, transition } from '../../../lib/motion';
import PageHeader from '../../../components/layout/PageHeader';
import PageShell from '../../../components/layout/PageShell';
import ProjectCard from '../../../components/projects/ProjectCard';

export default function ProjectsPageClient({ projects = [], description = '' }) {
  const reduceMotion = useReducedMotion();
  const uniqueProjects = useMemo(() => {
    const seen = new Set();
    return projects.filter((project) => {
      if (!project?.slug || seen.has(project.slug)) return false;
      seen.add(project.slug);
      return true;
    });
  }, [projects]);

  return (
    <PageShell>
      <PageHeader
        index="01"
        eyebrow="Work"
        title="Projects"
        description={
          description ||
          'News portals, biennale platform, and civic tech — Next.js, Payload CMS, and MERN stack.'
        }
      />

      <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 md:items-stretch md:gap-8">
        {uniqueProjects.map((project, index) => (
          <motion.li
            key={project.id}
            className="h-full"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: Math.min(index * 0.08, 0.32) }}
          >
            <motion.div
              className="h-full"
              whileHover={reduceMotion ? undefined : hoverLift}
              transition={transition(0.25)}
            >
              <ProjectCard project={project} variant="full" />
            </motion.div>
          </motion.li>
        ))}
      </ul>
    </PageShell>
  );
}

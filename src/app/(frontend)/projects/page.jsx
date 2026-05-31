import { notFound } from 'next/navigation';

// import { getProjects, getSiteSettings } from '../../../lib/cms/content';
// import ProjectsPageClient from './ProjectsPageClient';

export const revalidate = 60;

/** Work / projects section temporarily disabled */
export default async function ProjectsPage() {
  notFound();

  // const [projects, site] = await Promise.all([getProjects(), getSiteSettings()]);
  //
  // return (
  //   <ProjectsPageClient
  //     projects={projects}
  //     description={site.projectsPageDescription}
  //   />
  // );
}

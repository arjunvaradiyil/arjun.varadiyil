import { notFound } from 'next/navigation';

// import { getProjectBySlug, getProjects } from '../../../../lib/cms/content';
// import ProjectDetailClient from './ProjectDetailClient';

export const revalidate = 60;

/** Project detail (slug) pages temporarily disabled */
export default async function ProjectDetailPage() {
  notFound();

  // const { slug } = await params;
  // const [projects, project] = await Promise.all([getProjects(), getProjectBySlug(slug)]);
  //
  // return <ProjectDetailClient slug={slug} projects={projects} project={project} />;
}

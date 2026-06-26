import { getProjectBySlug, getProjects } from '../../../../lib/cms/content';
import PageStructuredData from '../../../../components/PageStructuredData';
import { buildBreadcrumbSchema, buildCreativeWorkSchema } from '../../../../lib/zeroClickSeo';
import ProjectDetailClient from './ProjectDetailClient';

export const revalidate = 60;

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const [projects, project] = await Promise.all([getProjects(), getProjectBySlug(slug)]);

  const schemas = project
    ? [
        buildCreativeWorkSchema(project),
        buildBreadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Projects', url: '/projects' },
          { name: project.title, url: `/projects/${slug}` },
        ]),
      ]
    : [];

  return (
    <>
      {schemas.length > 0 ? <PageStructuredData schemas={schemas} /> : null}
      <ProjectDetailClient slug={slug} projects={projects} project={project} />
    </>
  );
}

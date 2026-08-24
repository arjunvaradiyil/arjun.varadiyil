/** Homepage featured work — only these slugs get SEO / LLM copy on `/`. */

export const FEATURED_HOME_SLUGS = [
  'kochi-muziris-biennale',
  'deshabhimani-news-portal',
  'left-views',
  'hello-2-ai',
];

export function getFeaturedHomeProjects(projects = []) {
  const bySlug = new Map(
    projects.filter((project) => project?.slug).map((project) => [project.slug, project]),
  );

  return FEATURED_HOME_SLUGS.map((slug) => bySlug.get(slug)).filter(Boolean);
}

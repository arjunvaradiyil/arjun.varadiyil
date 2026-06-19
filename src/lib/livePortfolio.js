const INDUSTRY_SHORT = {
  'Arts & Culture': 'Culture',
  'News & Media': 'News',
  Healthcare: 'Healthcare',
  'Civic Tech': 'Civic',
  'Education & Civic': 'Education',
  'Education & AI Literacy': 'Campaigns',
};

/** Summarise projects that still have a live preview URL. */
export function summarizeLiveProjects(projects = []) {
  const live = projects.filter((project) => project?.previewLink);

  const types = [
    ...new Set(
      live
        .map((project) => INDUSTRY_SHORT[project.industry] || project.industry)
        .filter(Boolean),
    ),
  ];

  const count = live.length;
  const buildsLabel =
    count === 0
      ? 'No public live URLs yet'
      : `${count} ${count === 1 ? 'site' : 'sites'} in production`;

  return {
    count,
    typesLabel: types.join(' · '),
    buildsLabel,
    /** One line for compact UI cells — types when available, else count. */
    displayLabel: types.length > 0 ? types.join(' · ') : buildsLabel,
  };
}

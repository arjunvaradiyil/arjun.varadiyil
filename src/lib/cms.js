const getCmsBaseUrl = () => {
  const fromEnv =
    process.env.NEXT_PUBLIC_PAYLOAD_URL ||
    process.env.NEXT_PUBLIC_CMS_URL ||
    process.env.PAYLOAD_PUBLIC_SERVER_URL ||
    '';

  return fromEnv.replace(/\/$/, '');
};

const toUrl = (path) => {
  const base = getCmsBaseUrl();
  if (!base) return null;
  return `${base}${path}`;
};

export async function fetchCollection(collection, searchParams = '') {
  try {
    const suffix = searchParams ? `?${searchParams}` : '';
    const url = toUrl(`/api/${collection}${suffix}`);
    if (!url) return null;

    const res = await fetch(url, { next: { revalidate: 60 } });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

export const mapCmsProjects = (docs = []) =>
  docs.map((doc, index) => ({
    id: String(index + 1).padStart(2, '0'),
    slug: doc.slug,
    title: doc.title,
    tagline: doc.tagline || '',
    description: doc.description || '',
    year: doc.year || '',
    timeline: doc.timeline || '',
    industry: doc.industry || '',
    services: Array.isArray(doc.services) ? doc.services.map((s) => s?.service).filter(Boolean) : [],
    about: doc.about || '',
    role: doc.role || '',
    teamMembers: doc.teamMembers ?? null,
    duration: doc.duration || '—',
    responsibilities: Array.isArray(doc.responsibilities)
      ? doc.responsibilities.map((item) => item?.item || item).filter(Boolean)
      : [],
    image: doc.image || '/assets/images/image.png',
    type: doc.type || 'image',
    previewLink: doc.liveUrl || '',
    gitLink: doc.gitLink || '',
    linkedinLink: doc.linkedinLink || '',
  }));

export async function getProjectsForFrontend() {
  const data = await fetchCollection('projects', 'limit=100&sort=-updatedAt');
  const docs = data?.docs || [];
  if (!docs.length) return [];

  const mapped = mapCmsProjects(docs).filter((p) => p.slug && p.title);
  return mapped;
}

export const mapCmsCertifications = (docs = []) =>
  docs.map((doc, index) => ({
    id: String(index + 1).padStart(2, '0'),
    issuer: doc.issuer || '',
    title: doc.name || '',
    date: doc.issueDate ? new Date(doc.issueDate).getFullYear().toString() : '',
    description:
      Array.isArray(doc.skills) && doc.skills.length
        ? `Skills: ${doc.skills.map((s) => s?.skill).filter(Boolean).join(', ')}`
        : doc.credentialUrl || 'Certification record managed via CMS.',
  }));

export async function getCertificationsForFrontend() {
  const data = await fetchCollection('certifications', 'limit=100&sort=-issueDate');
  const docs = data?.docs || [];
  if (!docs.length) return [];

  const mapped = mapCmsCertifications(docs).filter((c) => c.title);
  return mapped;
}

export async function getAboutSummaryForFrontend() {
  const data = await fetchCollection('about', 'limit=1&sort=-updatedAt');
  const doc = data?.docs?.[0];
  return doc?.summary || null;
}

export async function getAboutDocForFrontend() {
  const data = await fetchCollection('about', 'limit=1&sort=-updatedAt');
  return data?.docs?.[0] || null;
}

export async function getHomeServicesFromProjects() {
  const projects = await getProjectsForFrontend();
  const unique = [...new Set(projects.flatMap((project) => project.services || []))].filter(Boolean);

  return unique.map((service, index) => ({
    id: String(index + 1).padStart(2, '0'),
    title: service,
    description: `Delivered as part of real client and portfolio project work.`,
  }));
}

export async function getHomeStatsFromProjects() {
  const projects = await getProjectsForFrontend();
  const certifications = await getCertificationsForFrontend();
  const services = [...new Set(projects.flatMap((project) => project.services || []))];

  return [
    {
      to: projects.length,
      suffix: '',
      label: 'Projects currently managed via CMS',
    },
    {
      to: services.length,
      suffix: '',
      label: 'Technologies represented across project entries',
    },
    {
      to: certifications.length,
      suffix: '',
      label: 'Certifications published in CMS',
    },
  ];
}

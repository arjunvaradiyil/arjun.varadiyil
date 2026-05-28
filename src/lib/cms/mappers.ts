import { toAbsoluteMediaUrl } from '../s3';

/** Resolve Payload upload field (populated doc or URL string) */
export function resolveMediaUrl(
  value: unknown,
  fallback = '',
): string {
  if (!value) return fallback;

  let url = fallback;

  if (typeof value === 'string') {
    url = value;
  } else if (typeof value === 'object' && value !== null) {
    const media = value as {
      url?: string;
      filename?: string;
      sizes?: Record<string, { url?: string }>;
    };
    if (media.url) {
      url = String(media.url);
    } else if (media.filename) {
      url = `/api/media/file/${media.filename}`;
    } else if (media.sizes?.card?.url) {
      url = String(media.sizes.card.url);
    }
  }

  if (!url || url === fallback) return fallback;
  return toAbsoluteMediaUrl(url);
}

export function mapProject(doc: Record<string, unknown>) {
  const services = Array.isArray(doc.services)
    ? doc.services.map((item: { label?: string }) => item?.label).filter(Boolean)
    : [];

  const responsibilities = Array.isArray(doc.responsibilities)
    ? doc.responsibilities.map((item: { text?: string }) => item?.text).filter(Boolean)
    : [];

  return {
    id: String(doc.projectId ?? doc.id ?? ''),
    slug: String(doc.slug ?? ''),
    title: String(doc.title ?? ''),
    tagline: String(doc.tagline ?? ''),
    description: String(doc.description ?? ''),
    about: String(doc.about ?? ''),
    year: String(doc.year ?? ''),
    timeline: String(doc.timeline ?? ''),
    industry: String(doc.industry ?? ''),
    services,
    role: String(doc.role ?? ''),
    teamMembers: Number(doc.teamMembers ?? 0),
    duration: String(doc.duration ?? ''),
    responsibilities,
    image: resolveMediaUrl(doc.imageMedia, String(doc.image ?? '')),
    logo: resolveMediaUrl(doc.logoMedia, String(doc.logo ?? '')),
    type: String(doc.type ?? 'image'),
    gitLink: String(doc.gitLink ?? ''),
    previewLink: String(doc.previewLink ?? ''),
    linkedinLink: String(doc.linkedinLink ?? ''),
  };
}

export function mapExperience(doc: Record<string, unknown>) {
  const points = Array.isArray(doc.points)
    ? doc.points.map((item: { text?: string }) => item?.text).filter(Boolean)
    : [];

  return {
    period: String(doc.period ?? ''),
    role: String(doc.role ?? ''),
    company: String(doc.company ?? ''),
    points,
    logo: resolveMediaUrl(doc.logoMedia, String(doc.logo ?? '')),
  };
}

export function mapSkill(doc: Record<string, unknown>) {
  const features = Array.isArray(doc.features)
    ? doc.features.map((item: { text?: string }) => item?.text).filter(Boolean)
    : [];

  const tags = Array.isArray(doc.tags)
    ? doc.tags.map((item: { label?: string }) => item?.label).filter(Boolean)
    : [];

  return {
    id: String(doc.skillId ?? doc.id ?? ''),
    title: String(doc.title ?? ''),
    cardBlurb: String(doc.cardBlurb ?? ''),
    description: String(doc.description ?? ''),
    features,
    image: resolveMediaUrl(doc.imageMedia, String(doc.image ?? '')),
    tags,
  };
}

export function mapCertification(doc: Record<string, unknown>) {
  return {
    id: String(doc.certId ?? doc.id ?? ''),
    issuer: String(doc.issuer ?? ''),
    title: String(doc.title ?? ''),
    date: String(doc.date ?? ''),
    description: String(doc.description ?? ''),
    image: resolveMediaUrl(doc.imageMedia, ''),
  };
}

export function mapEducation(doc: Record<string, unknown>) {
  return {
    year: String(doc.year ?? ''),
    title: String(doc.title ?? ''),
    description: String(doc.description ?? ''),
    grade: String(doc.grade ?? ''),
    image: resolveMediaUrl(doc.imageMedia, String(doc.image ?? '')),
  };
}

export function mapSiteSettings(global: Record<string, unknown> | null | undefined) {
  if (!global) return null;

  const profileRaw = (global.profile as Record<string, unknown>) || {};
  const profilePhoto = resolveMediaUrl(
    profileRaw.photo,
    String(profileRaw.photoFallback ?? '/arjunvaradiyil.png'),
  );
  const workStatus = (global.workStatus as Record<string, string>) || {};
  const heroStats = Array.isArray(global.heroStats)
    ? global.heroStats.map((stat: { value?: string; label?: string }) => ({
        value: String(stat?.value ?? ''),
        label: String(stat?.label ?? ''),
      }))
    : [];

  const navCategories = Array.isArray(global.navCategories)
    ? global.navCategories.map((item: { label?: string; href?: string }) => ({
        label: String(item?.label ?? ''),
        href: String(item?.href ?? ''),
      }))
    : [];

  return {
    profile: {
      name: String(profileRaw.name ?? ''),
      fullName: String(profileRaw.fullName ?? ''),
      designation: String(profileRaw.designation ?? ''),
      experience: String(profileRaw.experience ?? ''),
      education: String(profileRaw.education ?? ''),
      location: String(profileRaw.location ?? ''),
      email: String(profileRaw.email ?? ''),
      photo: profilePhoto,
    },
    heroImage: resolveMediaUrl(global.heroImage, ''),
    professionalSummary: String(global.professionalSummary ?? ''),
    workStatus: {
      badge: String(workStatus.badge ?? ''),
      eyebrow: String(workStatus.eyebrow ?? ''),
      company: String(workStatus.company ?? ''),
      primaryCta: String(workStatus.primaryCta ?? ''),
      navCta: String(workStatus.navCta ?? ''),
      contactNote: String(workStatus.contactNote ?? ''),
    },
    heroStats,
    navCategories,
    projectsPageDescription: String(global.projectsPageDescription ?? ''),
    aboutSkillsSubtitle: String(global.aboutSkillsSubtitle ?? ''),
    experienceIntro: String(global.experienceIntro ?? ''),
  };
}

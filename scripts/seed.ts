import 'dotenv/config';
import { getPayload } from 'payload';
import config from '../src/payload.config';

import { projects } from '../src/data/projectData';
import { experienceData } from '../src/data/experienceData';
import { skills } from '../src/data/skills';
import { certifications } from '../src/data/certificationsData';
import {
  EDUCATION_TIMELINE,
  PROFILE,
  PROFESSIONAL_SUMMARY,
} from '../src/data/aboutData';
import { HERO_STATS, NJR_NAV_CATEGORIES, WORK_STATUS } from '../src/lib/njrTheme';

async function seed() {
  if (!process.env.DATABASE_URI || !process.env.PAYLOAD_SECRET) {
    console.error('Set DATABASE_URI and PAYLOAD_SECRET in .env before seeding.');
    process.exit(1);
  }

  const payload = await getPayload({ config });

  console.log('Seeding site settings…');
  await payload.updateGlobal({
    slug: 'site-settings',
    data: {
      profile: {
        ...PROFILE,
        photoFallback: '/arjunvaradiyil.png',
      },
      professionalSummary: PROFESSIONAL_SUMMARY,
      workStatus: WORK_STATUS,
      heroStats: HERO_STATS,
      navCategories: NJR_NAV_CATEGORIES,
      projectsPageDescription:
        'Six live full stack builds — news, culture, healthcare, civic, and campaign platforms.',
      aboutSkillsSubtitle: 'Next.js, Payload CMS, MongoDB, and production delivery.',
      experienceIntro:
        'Full Stack Developer at Faircode Infotech — Next.js from database to deploy.',
    },
  });

  const removedProjectSlugs = [
    'deshabhimani-news-portal',
    'prajashakti-news-portal',
    'i-serve',
    'myidukki-election-pledge',
    'arts-culture-cms-platform',
    'digital-newsroom-platform',
    'arts-festival-cms-platform',
    'regional-news-portal',
    'civic-election-pledge-platform',
    'personal-portfolio-cms',
    'core-election-specialist',
    'hello-2-ai-campaign',
  ];

  console.log('Removing stale projects…');
  for (const slug of removedProjectSlugs) {
    const { docs } = await payload.find({
      collection: 'projects',
      where: { slug: { equals: slug } },
      limit: 10,
    });
    for (const doc of docs) {
      await payload.delete({ collection: 'projects', id: doc.id });
      console.log(`Removed project: ${slug}`);
    }
  }

  console.log('Seeding projects…');
  const { docs: existingProjects } = await payload.find({
    collection: 'projects',
    limit: 200,
  });
  for (const [index, doc] of existingProjects.entries()) {
    await payload.update({
      collection: 'projects',
      id: doc.id,
      data: { projectId: `tmp-${index}` },
    });
  }

  for (const [index, project] of projects.entries()) {
    const existing = await payload.find({
      collection: 'projects',
      where: { slug: { equals: project.slug } },
      limit: 1,
    });

    const data = {
      projectId: project.id,
      slug: project.slug,
      published: true,
      sortOrder: index,
      title: project.title,
      tagline: project.tagline,
      description: project.description,
      about: project.about,
      year: project.year,
      timeline: project.timeline,
      duration: project.duration,
      industry: project.industry,
      role: project.role,
      teamMembers: project.teamMembers,
      type: project.type,
      services: project.services.map((label) => ({ label })),
      responsibilities: project.responsibilities.map((text) => ({ text })),
      image: project.image,
      logo: project.logo,
      gitLink: project.gitLink,
      previewLink: project.previewLink,
      linkedinLink: project.linkedinLink,
    };

    if (existing.docs[0]) {
      await payload.update({
        collection: 'projects',
        id: existing.docs[0].id,
        data,
      });
    } else {
      await payload.create({ collection: 'projects', data });
    }
  }

  console.log('Seeding experience…');
  for (const [index, item] of experienceData.entries()) {
    const existing = await payload.find({
      collection: 'experience',
      where: { company: { equals: item.company } },
      limit: 1,
    });

    const data = {
      period: item.period,
      role: item.role,
      company: item.company,
      logo: item.logo,
      sortOrder: index,
      points: item.points.map((text) => ({ text })),
    };

    if (existing.docs[0]) {
      await payload.update({ collection: 'experience', id: existing.docs[0].id, data });
    } else {
      await payload.create({ collection: 'experience', data });
    }
  }

  console.log('Seeding skills…');
  for (const [index, skill] of skills.entries()) {
    const existing = await payload.find({
      collection: 'skills',
      where: { skillId: { equals: skill.id } },
      limit: 1,
    });

    const data = {
      skillId: skill.id,
      title: skill.title,
      cardBlurb: skill.cardBlurb,
      description: skill.description,
      features: skill.features.map((text) => ({ text })),
      tags: skill.tags.map((label) => ({ label })),
      image: skill.image,
      sortOrder: index,
    };

    if (existing.docs[0]) {
      await payload.update({ collection: 'skills', id: existing.docs[0].id, data });
    } else {
      await payload.create({ collection: 'skills', data });
    }
  }

  console.log('Seeding certifications…');
  for (const [index, cert] of certifications.entries()) {
    const existing = await payload.find({
      collection: 'certifications',
      where: { certId: { equals: cert.id } },
      limit: 1,
    });

    const data = {
      certId: cert.id,
      issuer: cert.issuer,
      title: cert.title,
      date: cert.date,
      description: cert.description,
      sortOrder: index,
    };

    if (existing.docs[0]) {
      await payload.update({ collection: 'certifications', id: existing.docs[0].id, data });
    } else {
      await payload.create({ collection: 'certifications', data });
    }
  }

  console.log('Seeding education…');
  for (const [index, edu] of EDUCATION_TIMELINE.entries()) {
    const existing = await payload.find({
      collection: 'education',
      where: { title: { equals: edu.title } },
      limit: 1,
    });

    const data = {
      year: edu.year,
      title: edu.title,
      description: edu.description,
      grade: edu.grade,
      image: edu.image,
      sortOrder: index,
    };

    if (existing.docs[0]) {
      await payload.update({ collection: 'education', id: existing.docs[0].id, data });
    } else {
      await payload.create({ collection: 'education', data });
    }
  }

  const users = await payload.find({ collection: 'users', limit: 1 });
  if (!users.docs.length) {
    console.log('\nNo admin user found. Create one at /admin after starting the dev server.');
  }

  console.log('\nSeed complete.');
  process.exit(0);
}

seed().catch((error) => {
  console.error(error);
  process.exit(1);
});

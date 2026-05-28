import type { GlobalConfig } from 'payload';

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  label: 'Site settings',
  admin: {
    group: 'Portfolio',
  },
  fields: [
    {
      name: 'profile',
      type: 'group',
      fields: [
        { name: 'name', type: 'text', required: true },
        { name: 'fullName', type: 'text', required: true },
        { name: 'designation', type: 'text', required: true },
        { name: 'experience', type: 'text' },
        { name: 'education', type: 'text' },
        { name: 'location', type: 'text' },
        { name: 'email', type: 'email', required: true },
        {
          name: 'photo',
          type: 'upload',
          relationTo: 'media',
          label: 'Profile photo',
        },
        {
          name: 'photoFallback',
          type: 'text',
          label: 'Profile photo fallback',
          defaultValue: '/arjunvaradiyil.png',
          admin: {
            description: 'Used when no profile photo is uploaded.',
          },
        },
      ],
    },
    {
      name: 'heroImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Home hero image (optional)',
    },
    {
      name: 'professionalSummary',
      type: 'textarea',
      required: true,
    },
    {
      name: 'workStatus',
      type: 'group',
      label: 'Work status & CTAs',
      fields: [
        { name: 'badge', type: 'text', required: true },
        { name: 'eyebrow', type: 'text', required: true },
        { name: 'company', type: 'text', required: true },
        { name: 'primaryCta', type: 'text', required: true },
        { name: 'navCta', type: 'text', required: true },
        { name: 'contactNote', type: 'textarea', required: true },
      ],
    },
    {
      name: 'heroStats',
      type: 'array',
      fields: [
        { name: 'value', type: 'text', required: true },
        { name: 'label', type: 'text', required: true },
      ],
    },
    {
      name: 'navCategories',
      type: 'array',
      fields: [
        { name: 'label', type: 'text', required: true },
        { name: 'href', type: 'text', required: true },
      ],
    },
    {
      name: 'projectsPageDescription',
      type: 'textarea',
      label: 'Projects page intro',
    },
    {
      name: 'aboutSkillsSubtitle',
      type: 'textarea',
      label: 'About skills section subtitle',
    },
    {
      name: 'experienceIntro',
      type: 'textarea',
      label: 'Experience section intro',
    },
  ],
};

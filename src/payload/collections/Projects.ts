import type { CollectionConfig } from 'payload';
import { imageUploadFields } from '../fields/imageUpload';

export const Projects: CollectionConfig = {
  slug: 'projects',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'imageMedia', 'slug', 'year', 'published'],
  },
  fields: [
    {
      name: 'projectId',
      type: 'text',
      required: true,
      unique: true,
      label: 'Display ID',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      index: true,
    },
    {
      name: 'published',
      type: 'checkbox',
      defaultValue: true,
    },
    {
      name: 'sortOrder',
      type: 'number',
      defaultValue: 0,
      admin: { position: 'sidebar' },
    },
    { name: 'title', type: 'text', required: true },
    { name: 'tagline', type: 'textarea' },
    { name: 'description', type: 'textarea' },
    { name: 'about', type: 'textarea' },
    { name: 'year', type: 'text' },
    { name: 'timeline', type: 'text' },
    { name: 'duration', type: 'text' },
    { name: 'industry', type: 'text' },
    { name: 'role', type: 'text' },
    { name: 'teamMembers', type: 'number' },
    {
      name: 'type',
      type: 'select',
      options: [
        { label: 'Image', value: 'image' },
        { label: 'Video', value: 'video' },
      ],
      defaultValue: 'image',
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Content',
          fields: [
            {
              name: 'services',
              type: 'array',
              fields: [{ name: 'label', type: 'text', required: true }],
            },
            {
              name: 'responsibilities',
              type: 'array',
              fields: [{ name: 'text', type: 'text', required: true }],
            },
          ],
        },
        {
          label: 'Images',
          fields: [
            ...imageUploadFields({
              uploadName: 'imageMedia',
              uploadLabel: 'Cover image',
              fallbackName: 'image',
              fallbackLabel: 'Cover image fallback',
              fallbackDescription: 'Public path when no upload is set (e.g. /myidukki.png).',
            }),
            ...imageUploadFields({
              uploadName: 'logoMedia',
              uploadLabel: 'Logo',
              fallbackName: 'logo',
              fallbackLabel: 'Logo fallback',
            }),
          ],
        },
        {
          label: 'Links',
          fields: [
            { name: 'gitLink', type: 'text' },
            { name: 'previewLink', type: 'text' },
            { name: 'linkedinLink', type: 'text' },
          ],
        },
      ],
    },
  ],
};

import type { CollectionConfig } from 'payload';
import { imageUploadFields } from '../fields/imageUpload';

export const Skills: CollectionConfig = {
  slug: 'skills',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'imageMedia', 'sortOrder'],
  },
  fields: [
    { name: 'skillId', type: 'text', required: true, unique: true, label: 'Display ID' },
    { name: 'title', type: 'text', required: true },
    { name: 'cardBlurb', type: 'textarea' },
    { name: 'description', type: 'textarea' },
    ...imageUploadFields({
      uploadName: 'imageMedia',
      uploadLabel: 'Card image',
      fallbackName: 'image',
      fallbackLabel: 'Image URL fallback',
      fallbackDescription: 'External image URL when no upload is selected.',
    }),
    {
      name: 'features',
      type: 'array',
      fields: [{ name: 'text', type: 'text', required: true }],
    },
    {
      name: 'tags',
      type: 'array',
      fields: [{ name: 'label', type: 'text', required: true }],
    },
    {
      name: 'sortOrder',
      type: 'number',
      defaultValue: 0,
      admin: { position: 'sidebar' },
    },
  ],
};

import type { CollectionConfig } from 'payload';
import { imageUploadFields } from '../fields/imageUpload';

export const Experience: CollectionConfig = {
  slug: 'experience',
  admin: {
    useAsTitle: 'company',
    defaultColumns: ['role', 'company', 'logoMedia', 'period'],
  },
  fields: [
    { name: 'period', type: 'text', required: true },
    { name: 'role', type: 'text', required: true },
    { name: 'company', type: 'text', required: true },
    ...imageUploadFields({
      uploadName: 'logoMedia',
      uploadLabel: 'Company logo',
      fallbackName: 'logo',
      fallbackLabel: 'Logo fallback',
      fallbackDescription: 'Path in /public when no upload is set (e.g. /assets/images/fclogo.png).',
    }),
    {
      name: 'sortOrder',
      type: 'number',
      defaultValue: 0,
      admin: { position: 'sidebar' },
    },
    {
      name: 'points',
      type: 'array',
      fields: [{ name: 'text', type: 'text', required: true }],
    },
  ],
};

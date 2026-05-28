import type { CollectionConfig } from 'payload';
import { imageUploadFields } from '../fields/imageUpload';

export const Education: CollectionConfig = {
  slug: 'education',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'imageMedia', 'year'],
  },
  fields: [
    { name: 'year', type: 'text', required: true },
    { name: 'title', type: 'text', required: true },
    { name: 'description', type: 'textarea' },
    { name: 'grade', type: 'text' },
    ...imageUploadFields({
      uploadName: 'imageMedia',
      uploadLabel: 'Institution image',
      fallbackName: 'image',
      fallbackLabel: 'Image path fallback',
      fallbackDescription: 'Path in /public (e.g. /assets/images/cusat.png).',
    }),
    {
      name: 'sortOrder',
      type: 'number',
      defaultValue: 0,
      admin: { position: 'sidebar' },
    },
  ],
};

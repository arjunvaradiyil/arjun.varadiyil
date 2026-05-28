import type { CollectionConfig } from 'payload';
import { imageUploadFields } from '../fields/imageUpload';

export const Certifications: CollectionConfig = {
  slug: 'certifications',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'imageMedia', 'issuer', 'date'],
  },
  fields: [
    { name: 'certId', type: 'text', required: true, unique: true, label: 'Display ID' },
    { name: 'issuer', type: 'text', required: true },
    { name: 'title', type: 'text', required: true },
    { name: 'date', type: 'text', required: true },
    { name: 'description', type: 'textarea' },
    ...imageUploadFields({
      uploadName: 'imageMedia',
      uploadLabel: 'Certificate / badge image',
    }),
    {
      name: 'sortOrder',
      type: 'number',
      defaultValue: 0,
      admin: { position: 'sidebar' },
    },
  ],
};

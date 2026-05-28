import type { Field } from 'payload';

type ImageUploadOptions = {
  uploadName: string;
  uploadLabel: string;
  fallbackName?: string;
  fallbackLabel?: string;
  fallbackDescription?: string;
};

/** Upload to Media (S3) with optional text/URL fallback for legacy static paths */
export function imageUploadFields({
  uploadName,
  uploadLabel,
  fallbackName,
  fallbackLabel,
  fallbackDescription,
}: ImageUploadOptions): Field[] {
  const fields: Field[] = [
    {
      name: uploadName,
      type: 'upload',
      relationTo: 'media',
      label: uploadLabel,
    },
  ];

  if (fallbackName) {
    fields.push({
      name: fallbackName,
      type: 'text',
      label: fallbackLabel ?? 'Image path / URL fallback',
      admin: {
        description:
          fallbackDescription ??
          'Used when no uploaded image is selected. Use a path like /photo.png or an external URL.',
      },
    });
  }

  return fields;
}

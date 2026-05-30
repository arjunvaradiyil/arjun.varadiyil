import { s3Storage } from '@payloadcms/storage-s3';
import type { Plugin } from 'payload';
import { getS3Bucket, getS3ClientConfig, isS3Configured } from '../../lib/s3';

const prefix = process.env.AWS_S3_PREFIX?.trim() || 'portfolio/media';

export function s3StoragePlugin(): Plugin {
  if (!isS3Configured()) {
    return (config) => config;
  }

  return s3Storage({
    bucket: getS3Bucket(),
    // Upload from browser → S3 (avoids Vercel 4.5MB limit + serverless timeouts)
    clientUploads: true,
    alwaysInsertFields: true,
    collections: {
      media: {
        prefix,
        signedDownloads: {
          expiresIn: 7200,
        },
      },
    },
    config: getS3ClientConfig(),
    enabled: true,
  });
}

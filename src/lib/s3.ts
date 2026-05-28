/**
 * AWS S3 helpers — reads vars from .env (see .env.example).
 */

export function isS3Configured() {
  return Boolean(
    process.env.AWS_S3_BUCKET?.trim() &&
      process.env.AWS_REGION?.trim() &&
      process.env.AWS_ACCESS_KEY_ID?.trim() &&
      process.env.AWS_SECRET_ACCESS_KEY?.trim(),
  );
}

export function getS3Region() {
  return process.env.AWS_REGION?.trim() || 'ap-south-1';
}

export function getS3Bucket() {
  return process.env.AWS_S3_BUCKET?.trim() || '';
}

/** Path-style endpoint used by @payloadcms/storage-s3 generateURL */
export function getS3Endpoint() {
  const region = getS3Region();
  return `https://s3.${region}.amazonaws.com`;
}

/** Virtual-hosted–style S3 hostname for Next.js Image remotePatterns */
export function getS3BucketHostname() {
  const bucket = getS3Bucket();
  const region = getS3Region();
  if (!bucket) return null;
  return `${bucket}.s3.${region}.amazonaws.com`;
}

/** AWS SDK client config for Payload S3 storage */
export function getS3ClientConfig() {
  return {
    region: getS3Region(),
    endpoint: getS3Endpoint(),
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
    },
  };
}

/** Turn Payload /api/media URLs into absolute URLs for Next.js Image */
export function toAbsoluteMediaUrl(url: string) {
  if (!url) return url;
  if (url.startsWith('http://') || url.startsWith('https://')) return url;
  const base = (process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000').replace(
    /\/$/,
    '',
  );
  return `${base}${url.startsWith('/') ? url : `/${url}`}`;
}

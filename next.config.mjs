import { withPayload } from '@payloadcms/next/withPayload';

const s3Hostname =
  process.env.AWS_S3_BUCKET && process.env.AWS_REGION
    ? `${process.env.AWS_S3_BUCKET}.s3.${process.env.AWS_REGION}.amazonaws.com`
    : null;
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [{ key: 'X-Robots-Tag', value: 'index, follow' }],
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '/api/media/**',
      },
      ...(s3Hostname ? [{ protocol: 'https', hostname: s3Hostname, pathname: '/**' }] : []),
      { protocol: 'https', hostname: '**' },
      { protocol: 'http', hostname: '**' },
    ],
    unoptimized: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

export default withPayload(nextConfig, {
  // Bundles Payload server deps in dev — avoids missing vendor-chunks (e.g. date-fns) on /admin
  devBundleServerPackages: true,
});

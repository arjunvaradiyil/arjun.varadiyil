import { withPayload } from '@payloadcms/next/withPayload';

const s3Hostname =
  process.env.AWS_S3_BUCKET && process.env.AWS_REGION
    ? `${process.env.AWS_S3_BUCKET}.s3.${process.env.AWS_REGION}.amazonaws.com`
    : null;
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.arjunvaradiyil.in' }],
        destination: 'https://arjunvaradiyil.in/:path*',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [{ key: 'X-Robots-Tag', value: 'index, follow' }],
      },
    ];
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '/api/media/**',
      },
      ...(s3Hostname ? [{ protocol: 'https', hostname: s3Hostname, pathname: '/**' }] : []),
      { protocol: 'https', hostname: 'arjunvaradiyil.in', pathname: '/**' },
      { protocol: 'https', hostname: 'www.arjunvaradiyil.in', pathname: '/**' },
      ...(s3Hostname ? [] : [{ protocol: 'https', hostname: '**' }]),
    ],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

export default withPayload(nextConfig, {
  // Bundles Payload server deps in dev — avoids missing vendor-chunks (e.g. date-fns) on /admin
  devBundleServerPackages: true,
});

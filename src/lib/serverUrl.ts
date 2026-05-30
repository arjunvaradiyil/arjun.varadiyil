/** Canonical production site — used for CSRF/CORS when env is unset in prod. */
export const PRODUCTION_SITE_URL = 'https://arjunvaradiyil.in';

const LOCAL_DEV_URL = 'http://localhost:3000';

function normalizeUrl(url: string) {
  return url.replace(/\/$/, '');
}

/** Primary URL for Payload serverURL and absolute media links. */
export function getServerURL() {
  const fromEnv = process.env.NEXT_PUBLIC_SERVER_URL?.trim();
  if (fromEnv) return normalizeUrl(fromEnv);

  if (process.env.VERCEL_URL) {
    return normalizeUrl(`https://${process.env.VERCEL_URL}`);
  }

  return LOCAL_DEV_URL;
}

/**
 * Origins allowed for Payload admin API (CSRF cookies + CORS).
 * Include both localhost and production so dev/prod admin both work.
 */
export function getPayloadAllowedOrigins() {
  const extra =
    process.env.PAYLOAD_CORS_ORIGINS?.split(',')
      .map((origin) => origin.trim())
      .filter(Boolean) ?? [];

  const origins = [
    getServerURL(),
    LOCAL_DEV_URL,
    PRODUCTION_SITE_URL,
    `https://www.arjunvaradiyil.in`,
    ...extra,
  ];

  return [...new Set(origins.map(normalizeUrl))];
}

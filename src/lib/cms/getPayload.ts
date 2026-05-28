import { getPayload } from 'payload';
import config from '@payload-config';

const INIT_TIMEOUT_MS = 5_000;
const CMS_COOLDOWN_MS = 60_000;

const globalForPayload = globalThis as typeof globalThis & {
  payload?: {
    client: Awaited<ReturnType<typeof getPayload>> | null;
    promise: Promise<Awaited<ReturnType<typeof getPayload>>> | null;
    unavailableUntil: number;
  };
};

if (!globalForPayload.payload) {
  globalForPayload.payload = { client: null, promise: null, unavailableUntil: 0 };
}

const cached = globalForPayload.payload;

function resetPayloadCache() {
  cached.client = null;
  cached.promise = null;
}

function withTimeout<T>(promise: Promise<T>, ms: number, label: string): Promise<T> {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      reject(new Error(`${label} timed out after ${ms}ms`));
    }, ms);

    promise
      .then((value) => {
        clearTimeout(timer);
        resolve(value);
      })
      .catch((error) => {
        clearTimeout(timer);
        reject(error);
      });
  });
}

/** @deprecated Prefer tryGetPayloadClient — never throws. */
export async function getPayloadClient() {
  const client = await tryGetPayloadClient();
  if (!client) {
    throw new Error('Payload CMS is unavailable');
  }
  return client;
}

/** Returns Payload client or null if init fails or times out (frontend keeps serving static data). */
export async function tryGetPayloadClient() {
  if (Date.now() < cached.unavailableUntil) {
    return null;
  }

  if (cached.client) {
    return cached.client;
  }

  if (!cached.promise) {
    cached.promise = getPayload({ config });
  }

  try {
    cached.client = await withTimeout(cached.promise, INIT_TIMEOUT_MS, 'Payload init');
    cached.unavailableUntil = 0;
    return cached.client;
  } catch (error) {
    resetPayloadCache();
    cached.unavailableUntil = Date.now() + CMS_COOLDOWN_MS;
    console.warn('[cms] Payload unavailable:', error);
    return null;
  }
}

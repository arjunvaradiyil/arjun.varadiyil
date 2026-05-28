import { getPayload } from 'payload';
import config from '@payload-config';

const globalForPayload = globalThis as typeof globalThis & {
  payload?: {
    client: Awaited<ReturnType<typeof getPayload>> | null;
    promise: Promise<Awaited<ReturnType<typeof getPayload>>> | null;
  };
};

if (!globalForPayload.payload) {
  globalForPayload.payload = { client: null, promise: null };
}

const cached = globalForPayload.payload;

export async function getPayloadClient() {
  if (cached.client) {
    return cached.client;
  }

  if (!cached.promise) {
    cached.promise = getPayload({ config });
  }

  try {
    cached.client = await cached.promise;
  } catch (error) {
    cached.promise = null;
    throw error;
  }

  return cached.client;
}

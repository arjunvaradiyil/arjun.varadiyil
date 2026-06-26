---
title: Payload CMS Tutorial — From Zero to Production
description: A hands-on guide to setting up Payload CMS 3 with Next.js, collections, media uploads, and deployment patterns I use on client projects.
date: 2026-06-28
slug: payload-cms-tutorial
image: /payloadcms.png
imageAlt: Payload CMS tutorial — from zero to production
published: true
---

# Payload CMS Tutorial — From Zero to Production

Payload CMS 3 embeds directly inside Next.js — no separate API server, no duplicate type definitions. If you ship editorial platforms or client sites that need a real admin, this is the stack I reach for first.

This tutorial walks through the setup I use on production builds like [Prajasakti](https://prajasakti.com/) and [arjunvaradiyil.in](https://arjunvaradiyil.in).

## What you need

- Node.js 20+
- MongoDB (local Docker or Atlas)
- A Next.js 15 App Router project

```bash
npx create-payload-app@latest my-cms-app
# Choose: Next.js, MongoDB, TypeScript
```

Or add Payload to an existing Next.js app:

```bash
npm install payload @payloadcms/next @payloadcms/db-mongodb @payloadcms/richtext-lexical
```

## Project structure

Payload lives inside your Next.js app:

```
src/
  payload.config.ts      # collections, globals, plugins
  payload/
    collections/         # Projects, Posts, Media, Users
    globals/             # SiteSettings
  app/
    (payload)/admin/     # auto-generated admin UI
    (frontend)/          # public site
```

The admin panel is at `/admin`. Public routes stay in `(frontend)`.

## Define your first collection

```ts
// src/payload/collections/Posts.ts
import type { CollectionConfig } from 'payload'

export const Posts: CollectionConfig = {
  slug: 'posts',
  admin: { useAsTitle: 'title' },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'slug', type: 'text', required: true, unique: true },
    { name: 'body', type: 'richText' },
    { name: 'publishedAt', type: 'date' },
  ],
}
```

Register it in `payload.config.ts`:

```ts
import { Posts } from './payload/collections/Posts'

export default buildConfig({
  collections: [Posts],
  // ...
})
```

## Fetch content in Next.js

```ts
// src/lib/cms/getPayload.ts
import { getPayload } from 'payload'
import config from '@/payload.config'

export async function getPosts() {
  const payload = await getPayload({ config })
  const { docs } = await payload.find({
    collection: 'posts',
    sort: '-publishedAt',
    limit: 20,
  })
  return docs
}
```

Use in a Server Component with ISR:

```ts
export const revalidate = 60

export default async function BlogPage() {
  const posts = await getPosts()
  return (/* render list */)
}
```

## Media uploads on Vercel

Server-side uploads hit Vercel's body limit. Use **client-side S3 uploads**:

```bash
npm install @payloadcms/storage-s3
```

```ts
// payload.config.ts
import { s3Storage } from '@payloadcms/storage-s3'

plugins: [
  s3Storage({
    collections: { media: true },
    bucket: process.env.AWS_S3_BUCKET!,
    config: { region: process.env.AWS_REGION },
    clientUploads: true, // critical for Vercel
  }),
],
```

## Static fallback pattern

I always add static JSON fallbacks so the site builds without MongoDB in CI:

```ts
export async function getPosts() {
  if (!process.env.DATABASE_URI) {
    return staticPosts // from src/data/
  }
  try {
    return await fetchFromPayload()
  } catch {
    return staticPosts
  }
}
```

This keeps `next build` reliable and local dev friction low.

## Next steps

- Add **blocks** for flexible page layouts
- Wire **on-demand revalidation** when editors publish
- Set up **access control** per collection role

---

**Related:** [Payload CMS Collections for Newsroom Workflows](https://arjunvaradiyil.in/blog/payload-cms-collections-for-newsroom-workflows) · [CMS Architecture Guide](https://arjunvaradiyil.in/blog/headless-cms-architecture)

**Connect:** [LinkedIn](https://www.linkedin.com/in/arjunvaradiyil) · [GitHub](https://github.com/arjunvaradiyil/arjun.varadiyil) · [Contact](https://arjunvaradiyil.in/contact)

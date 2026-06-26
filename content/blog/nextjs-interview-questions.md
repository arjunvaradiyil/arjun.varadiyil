---
title: Next.js Interview Questions — App Router Edition
description: 25 Next.js interview questions with concise answers covering App Router, caching, SSR, ISR, and patterns from production Next.js 15 builds.
date: 2026-06-29
slug: nextjs-interview-questions
image: /nextjs.png
imageAlt: Next.js interview questions — App Router edition
published: true
---

# Next.js Interview Questions — App Router Edition

These are the questions I see most often — and the answers I give when interviewing or being interviewed for full stack Next.js roles. Grounded in App Router (Next.js 13+), not the legacy Pages Router.

## Fundamentals

### 1. What is the App Router?

The App Router uses a `app/` directory with file-system routing. `page.tsx` defines a route, `layout.tsx` wraps children, `loading.tsx` shows suspense fallbacks, and `error.tsx` handles errors per segment. Server Components are the default.

### 2. Server Components vs Client Components?

**Server Components** run on the server only — no JS sent to the client, can fetch data directly, access secrets. Mark client interactivity with `'use client'` at the top of the file. Rule: push `'use client'` as far down the tree as possible.

### 3. How does `fetch` caching work in App Router?

By default, `fetch` in Server Components is cached (`force-cache`). Pass `{ cache: 'no-store' }` for dynamic data, or `next: { revalidate: 60 }` for ISR. Use `revalidatePath` / `revalidateTag` for on-demand invalidation.

### 4. What is `generateStaticParams`?

Pre-builds dynamic routes at build time. Used for `/blog/[slug]` and `/projects/[slug]`:

```ts
export async function generateStaticParams() {
  const posts = await getPosts()
  return posts.map((p) => ({ slug: p.slug }))
}
```

### 5. Difference between SSR, SSG, and ISR?

| Mode | When HTML is generated | Use case |
|------|------------------------|----------|
| SSG | Build time | Marketing pages, case studies |
| ISR | Build + periodic revalidation | News, blogs, CMS content |
| SSR | Every request | Personalized, auth-gated pages |

## Caching & Performance

### 6. What is `revalidate` on a page?

```ts
export const revalidate = 60 // seconds
```

Tells Next.js to regenerate the page in the background after 60 seconds when the next request arrives.

### 7. How do you optimize images?

Use `next/image` — automatic WebP/AVIF, lazy loading, responsive `sizes`, and `priority` for LCP images. Never serve unoptimized PNG heroes on mobile.

### 8. What causes layout shift (CLS)?

Unsized images, web fonts without `display: swap`, dynamically injected content above the fold. Fix with `next/font`, explicit image dimensions, and skeleton placeholders.

### 9. How do you reduce client JS bundle size?

- Default to Server Components
- Dynamic import heavy client libs: `const Chart = dynamic(() => import('./Chart'))`
- Avoid importing entire icon libraries — use tree-shakeable imports

### 10. What is Partial Prerendering (PPR)?

Experimental feature combining static shell with dynamic holes. Static parts serve instantly; dynamic parts stream in. Useful for pages with mostly static content and one personalized widget.

## Data & API

### 11. Route Handlers vs API Routes?

Route Handlers live in `app/api/*/route.ts`. They replace Pages Router API routes. Export `GET`, `POST`, etc. as named functions.

### 12. How do you call a Route Handler from a Client Component?

Use `fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) })`. Never import server-only modules in client components.

### 13. What is `middleware.ts` used for?

Runs before a request completes — auth checks, redirects, A/B testing, geo routing, maintenance mode. Runs on the Edge runtime.

### 14. How do you handle environment variables?

- `NEXT_PUBLIC_*` — exposed to the browser
- Everything else — server-only, never prefix with `NEXT_PUBLIC_`

### 15. How do you embed a headless CMS?

Fetch in Server Components with ISR. Trigger `revalidatePath` from a CMS webhook on publish. Keep admin UI separate from the public bundle.

## Metadata & SEO

### 16. How does the Metadata API work?

Export `metadata` or `generateMetadata` from `layout.tsx` / `page.tsx`. Supports title templates, Open Graph, Twitter cards, canonical URLs, and robots directives.

### 17. How do you add JSON-LD structured data?

Render a `<script type="application/ld+json">` in a Server Component or layout. Use `@graph` to link Person, WebSite, and FAQPage schemas.

## Architecture

### 18. When would you NOT use Next.js?

- Pure SPA with no SEO needs (Vite + React may be simpler)
- Real-time apps needing persistent WebSocket state at scale
- Teams with zero React experience and tight deadlines on static sites

### 19. Monorepo with Next.js?

Turborepo + shared `packages/ui` and `packages/types`. Payload CMS config can live in `apps/web`. Share TypeScript types generated from Payload schema.

### 20. How do you handle auth in App Router?

NextAuth.js (Auth.js) with middleware for protected routes. Store session in JWT or database. Keep auth checks in middleware + server actions, not just client-side.

## Scenario questions

### 21. A page is slow on first load. How do you debug?

1. Check Lighthouse — LCP element, TTFB, unused JS
2. Verify image optimization and font loading
3. Check if data fetching blocks rendering (add Suspense boundaries)
4. Profile with `next build` output — look at bundle sizes per route

### 22. CMS content updated but site shows stale data?

Check `revalidate` value, verify on-demand revalidation webhook fires, confirm CDN cache headers, and test with `cache: 'no-store'` temporarily to isolate.

### 23. Build fails without database in CI?

Add static fallbacks — try CMS, catch errors, return `src/data/` files. Set `CMS_ENABLED=false` in CI env.

### 24. How do you deploy?

Vercel is the default — zero config for Next.js. Set env vars in dashboard. Use preview deploys per PR. For Payload, ensure MongoDB Atlas and S3 are configured.

### 25. What makes a strong Next.js portfolio project?

A real CMS behind it, ISR in production, structured data, Core Web Vitals under budget, and a case study explaining architecture trade-offs — not a template with swapped colors.

---

**Related:** [Next.js ISR Patterns](https://arjunvaradiyil.in/blog/nextjs-isr-patterns-for-editorial-sites) · [React Performance](https://arjunvaradiyil.in/blog/react-performance-optimization)

**Connect:** [LinkedIn](https://www.linkedin.com/in/arjunvaradiyil) · [Contact](https://arjunvaradiyil.in/contact)

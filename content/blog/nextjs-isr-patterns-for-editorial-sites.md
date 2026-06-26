---
title: Next.js ISR Patterns for High-Traffic Editorial Sites
description: Revalidation strategies, cache boundaries, and performance trade-offs when serving news and festival content on Next.js 15.
date: 2025-06-22
slug: nextjs-isr-patterns-for-editorial-sites
published: true
---

# Next.js ISR Patterns for High-Traffic Editorial Sites

Static generation is fast until content changes every hour. Full SSR is flexible until traffic spikes. **Incremental Static Regeneration (ISR)** is the middle path I use on news portals, festival CMS sites, and civic platforms where freshness and performance both matter.

## Pick a revalidate window per route type

Not every page needs the same TTL:

| Route | Typical `revalidate` | Why |
|-------|---------------------|-----|
| Homepage | 60s | Featured stories rotate |
| Article detail | 60–300s | Balance freshness vs. origin load |
| Category archive | 300s | Lists change less often than breaking news |
| About / contact | 3600s | Rarely changes |

In the App Router, `export const revalidate = 60` on a page is enough for most editorial routes. Tune per segment — do not copy one value site-wide.

## On-demand revalidation after CMS publish

Time-based ISR alone means editors wait up to N seconds after publish. Wire a **revalidation webhook** from Payload (or your CMS) to a Next.js API route:

1. Editor clicks publish in Payload
2. `afterChange` hook POSTs to `/api/revalidate?secret=...&path=/articles/my-slug`
3. Next.js calls `revalidatePath` or `revalidateTag`

This gives near-instant updates without abandoning static delivery.

## Tag-based invalidation for related pages

When an article publishes, invalidate:

- The article path
- Its category archive
- The homepage (if it surfaces "latest")

Use `revalidateTag('articles')` on list queries and `revalidateTag(\`article:${slug}\`)` on detail queries. One publish event can bust exactly the caches that need it.

## Image and font choices matter more than cache headers

ISR fixes stale HTML. It does not fix a 2MB hero PNG. On editorial sites I still:

- Serve images through `next/image` with AVIF/WebP
- Preload only the LCP image on above-the-fold routes
- Lazy-load below-fold media and motion libraries

Lighthouse "unused JavaScript" often comes from animation libraries on pages that do not need them — split client bundles per route.

## When to skip ISR entirely

Use **fully static** builds for marketing pages and case studies that change monthly. Use **dynamic SSR** only for personalized or authenticated views (account pages, admin previews).

The goal is predictable TTFB under load — not the maximum possible dynamism.

---

**Related work:** [Kochi Muziris Biennale](https://arjunvaradiyil.in/projects/kochi-muziris-biennale) · [Prajasakti News Portal](https://arjunvaradiyil.in/projects/prajasakti-news-portal)

**Connect:** [LinkedIn](https://www.linkedin.com/in/arjunvaradiyil) · [GitHub](https://github.com/arjunvaradiyil/arjun.varadiyil) · [Contact](https://arjunvaradiyil.in/contact)

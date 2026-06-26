---
title: Building My Portfolio with Next.js 15, Payload CMS, and a CMS-First Mindset
description: How I built arjunvaradiyil.in — hybrid CMS architecture, S3 uploads, motion design, and SEO infrastructure for a production-grade developer portfolio.
date: 2025-06-01
slug: building-my-portfolio-with-nextjs-and-payload-cms
image: /portfloio.png
imageAlt: Building my portfolio with Next.js and Payload CMS
published: true
---

# Building My Portfolio with Next.js 15, Payload CMS, and a CMS-First Mindset

**Author:** Arjun Varadiyil  
**Site:** [arjunvaradiyil.in](https://arjunvaradiyil.in)  
**Stack:** Next.js 15 · React 19 · Payload CMS 3 · MongoDB · AWS S3 · Vercel

---

Most developer portfolios look the same: a hero section, a grid of project cards, and a contact form that sends mail to nowhere. I wanted something different — a site that *felt* like the full stack work I actually ship: clinic sites, civic platforms, quiz apps, and campaign hubs under real traffic.

This post walks through how I built [arjunvaradiyil.in](https://arjunvaradiyil.in) — the architecture, the design choices, and the problems I solved along the way.

---

## Why not a template?

I build production Next.js systems for healthcare, civic, education, and campaign clients. My portfolio should reflect that same standard: structured content, performance-conscious delivery, and an admin experience I'd actually use day to day.

A static HTML export or a Notion page wouldn’t cut it. I needed:

- **A headless CMS** so I can update projects, skills, and site copy without redeploying
- **Static fallbacks** so the site still works locally and in CI without a database
- **SEO and structured data** baked in from the start — not bolted on later
- **Motion and layout** that match the polished, production feel of the products I ship

---

## The stack

| Layer | Choice | Why |
|-------|--------|-----|
| Framework | **Next.js 15** (App Router) | SSR/SSG, metadata API, image optimization, Vercel deployment |
| UI | **React 19** + **Tailwind CSS** | Component model + utility-first styling for a custom design system |
| CMS | **Payload CMS 3** | TypeScript-native, embeds in Next.js, Lexical editor, flexible collections |
| Database | **MongoDB** | Payload’s default adapter; fits document-shaped content |
| Media | **AWS S3** + Payload S3 plugin | Client-side uploads — avoids Vercel’s 4.5MB body limit |
| Email | **Resend** | Contact form delivery |
| Motion | **Framer Motion** + **GSAP** | Scroll reveals, hero animations, editorial page transitions |
| Fonts | **next/font** (Inter, Syne) | Zero layout shift, self-hosted |
| Hosting | **Vercel** | Edge network, preview deploys, environment-based config |

Payload runs inside the same Next.js app at `/admin`. One repo, one deploy — no separate CMS host to maintain.

---

## Design: editorial, dark, and intentional

The visual language is inspired by [neymarjr.com](https://www.neymarjr.com/en) — dark cinematic layout, grid-based sections, uppercase eyebrow labels, and large display typography. Not because I build football sites, but because that site nails *editorial rhythm*: strong hierarchy, generous whitespace, and content that reads like a magazine spread.

Key UI patterns:

- **Split hero** — portrait on one side, headline and CTAs on the other
- **Grid lines** — 1px borders creating a modular, newspaper-like structure
- **Ghost watermarks** — oversized background type (“Skills”, “Work”) for depth
- **Dark-only theme** — one coherent visual identity; no light/dark toggle noise

Typography uses **Syne** for display headings and **Inter** for body copy — loaded via `next/font` with preload for faster first paint.

---

## CMS architecture with graceful fallback

The trickiest architectural decision was **how to keep the site usable without MongoDB**.

In `src/lib/cms/content.ts`, every data fetch follows the same pattern:

1. Check if CMS is configured (`DATABASE_URI`, `PAYLOAD_SECRET`, `CMS_ENABLED`)
2. Try Payload
3. Fall back to static data in `src/data/` if anything fails

```ts
export async function getProjects() {
  if (!isCmsConfigured()) return staticProjects;
  // ... fetch from Payload, map, fallback on error
}
```

This means:

- **Local dev** works out of the box with static project data
- **Production** pulls live content from Payload when the database is connected
- **Builds never fail** because MongoDB was down for five minutes

Collections: Projects, Skills, Experience, Education, Certifications, Media, Users. Globals: SiteSettings (profile, hero stats, work status, nav).

---

## S3 uploads that actually work on Vercel

Serverless functions and large file uploads don’t mix. Payload’s default server-side upload path hits Vercel’s body size limit and can time out on slow connections.

The fix: **client-side uploads** via `@payloadcms/storage-s3` with `clientUploads: true`. The browser uploads directly to S3; Payload only stores the metadata. Combined with signed download URLs and CORS configured on the bucket, admin media uploads stay reliable in production.

---

## Performance choices

Early Lighthouse runs flagged mobile LCP and unused JavaScript. Changes that helped:

- **`next/image`** with AVIF/WebP formats instead of unoptimized PNGs
- **Font preloading** and a high-priority preload for the hero portrait
- **Removing console logs** in production via Next.js compiler config
- **Framer Motion** limited to `opacity` and `transform` — GPU-friendly, respects `prefers-reduced-motion`

The hero image (`profilepic.png`) is still a candidate for further compression — image weight is often the biggest mobile LCP lever on portfolio sites.

---

## Motion: line reveals and moving highlighters

Animations serve readability, not decoration.

- **Framer Motion** handles hero entrance, scroll-triggered section reveals (`whileInView`), and staggered grid items
- **GSAP + ScrollTrigger** powers longer editorial pages — project detail timelines, footer name reveal
- **`LineStaggerReveal`** — a custom component where each headline line slides up, then a white highlighter bar sweeps left-to-right underneath — used on the home hero and about page name

Every animation checks `useReducedMotion()` and degrades to instant visibility when the user prefers reduced motion.

---

## SEO and discoverability

A portfolio nobody finds is a README with extra steps. SEO was treated as infrastructure:

- **Centralized metadata** in `src/lib/siteSeo.js` — title, description, keywords, canonical URL
- **JSON-LD** — Person, ProfessionalService, LocalBusiness, FAQPage schemas
- **`llms.txt`** — a machine-readable site summary for AI crawlers and GEO
- **Sitemap + robots.txt** — generated routes, admin and API paths disallowed
- **Hreflang** — `en`, `en-IN`, and `x-default` for India-focused targeting
- **Obfuscated emails** in visible UI — contact form and labeled links instead of scrape-friendly plain text

Target keywords align with actual work: *Full Stack Developer in Kerala*, *Next.js*, *Payload CMS*, *healthcare website*, *civic platform*.

---

## Contact form

The contact page uses a two-step modal form (details → message) with **Resend** on the API route. No third-party widget, no spam-prone `mailto:` as the primary path. Validation and loading states are handled client-side; the API route validates again server-side before sending.

---

## Project showcase

Each project page is a case study, not a screenshot gallery:

- **Kochi Muziris Biennale** — Payload CMS festival platform at [kochimuzirisbiennale.org](https://www.kochimuzirisbiennale.org/)
- **Prajasakti News Portal** — Telugu news publishing at [prajasakti.com](https://prajasakti.com/)
- **Dr. Naseeha's Homoeopathic Clinic** — healthcare site with treatment pages and online consultation
- **My Vote My Voice (Idukki)** — civic voter pledge and booth lookup at [myidukki.com](https://myidukki.com/)
- **Know Kerala** — interactive Malayalam quiz platform at [knowkeralam.com](https://www.knowkeralam.com/)
- **Hello 2 AI** — DYFI Kerala AI literacy campaign at [aiohello.vercel.app](https://aiohello.vercel.app/)

Project data includes role, timeline, responsibilities, and tech stack — the same fields I’d want when evaluating someone else’s portfolio.

---

## What I’d do differently

1. **Compress hero assets earlier** — large PNGs hurt mobile scores more than any JS bundle tweak
2. **Blog as a Payload collection** — this post lives in `content/blog/` for now; a `Posts` collection would make publishing first-class
3. **Analytics from day one** — GA4 via `NEXT_PUBLIC_GA_MEASUREMENT_ID` is wired but optional; I’d enable it before launch next time
4. **E2E tests for CMS fallback** — assert static data renders when `CMS_ENABLED=false`

---

## Try it yourself

```bash
git clone https://github.com/arjunvaradiyil/arjun.varadiyil.git
cd arjun.varadiyil
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The site runs on static data by default. Add `DATABASE_URI` and `PAYLOAD_SECRET` to connect Payload and manage content at `/admin`.

---

## Closing thought

Your portfolio is a product. If you build CMS platforms for a living, your site should *be* a CMS platform — or at least behave like one. Next.js and Payload made that achievable in a single codebase, with static fallbacks keeping development friction low.

If you're building something similar — full stack Next.js product, headless CMS migration, or a civic/education platform — [get in touch](https://arjunvaradiyil.in/contact).

---

**Links**

- Live site: [arjunvaradiyil.in](https://arjunvaradiyil.in)
- GitHub: [github.com/arjunvaradiyil/arjun.varadiyil](https://github.com/arjunvaradiyil/arjun.varadiyil)
- LinkedIn: [linkedin.com/in/arjunvaradiyil](https://www.linkedin.com/in/arjunvaradiyil)

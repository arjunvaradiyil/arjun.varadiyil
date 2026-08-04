# Technical Documentation — arjunvaradiyil.in

Portfolio and content platform for **Arjun Varadiyil**, a Full Stack Developer in Kerala. The site showcases projects, technical blog posts, profile information, and a contact channel. It is built as a **Next.js 15** application with an optional **Payload CMS 3** backend, file-based blog, and a strong SEO / structured-data layer.

**Production URL:** https://arjunvaradiyil.in  
**Repository:** https://github.com/arjunvaradiyil/arjun.varadiyil

---

## Table of contents

1. [Architecture overview](#1-architecture-overview)
2. [Technology stack](#2-technology-stack)
3. [Repository structure](#3-repository-structure)
4. [Application routing](#4-application-routing)
5. [Data layer & CMS](#5-data-layer--cms)
6. [Blog system](#6-blog-system)
7. [SEO & discoverability](#7-seo--discoverability)
8. [API routes](#8-api-routes)
9. [Design system & UI](#9-design-system--ui)
10. [Environment variables](#10-environment-variables)
11. [Development workflow](#11-development-workflow)
12. [Deployment](#12-deployment)
13. [Content operations](#13-content-operations)
14. [Maintenance & operations](#14-maintenance--operations)

---

## 1. Architecture overview

```
┌─────────────────────────────────────────────────────────────────┐
│                         Next.js 15 App                          │
├────────────────────────────┬────────────────────────────────────┤
│   (frontend) route group   │      (payload) route group         │
│   Public pages, blog, SEO  │      /admin, Payload REST API      │
├────────────────────────────┴────────────────────────────────────┤
│  Data sources (priority order)                                    │
│  1. Payload CMS (MongoDB) — when DATABASE_URI + PAYLOAD_SECRET    │
│  2. Static fallbacks in src/data/ — always available              │
│  3. Markdown files in content/blog/ — file-based blog           │
├─────────────────────────────────────────────────────────────────┤
│  External services                                              │
│  • MongoDB (CMS)  • AWS S3 (media)  • Resend (contact email)    │
│  • Google Analytics (optional)                                    │
└─────────────────────────────────────────────────────────────────┘
```

### Key design decisions

| Decision | Rationale |
|----------|-----------|
| **CMS with static fallback** | Site renders without MongoDB; production can run on static data if CMS is unavailable. |
| **File-based blog** | Posts live in Git as Markdown; no CMS dependency for technical writing. |
| **App Router + SSG/ISR** | `generateStaticParams` for blog and project slugs; `revalidate` on key routes. |
| **Route groups** | `(frontend)` and `(payload)` separate public site from admin/API surface. |
| **Single Next.js deployment** | Payload admin and API ship in the same Vercel project via `@payloadcms/next`. |

---

## 2. Technology stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 15 (App Router) |
| UI | React 19, Tailwind CSS 3 |
| CMS | Payload CMS 3, MongoDB (`@payloadcms/db-mongodb`) |
| Rich text (admin) | Lexical (`@payloadcms/richtext-lexical`) |
| Media storage | AWS S3 (`@payloadcms/storage-s3`) |
| Blog | `gray-matter`, `react-markdown`, `remark-gfm` |
| Animation | Framer Motion, GSAP |
| 3D (select pages) | Three.js, React Three Fiber |
| Email | Resend |
| Image processing | Sharp |
| Language | JavaScript + TypeScript (Payload config, mappers, collections) |
| Hosting | Vercel (recommended) |

---

## 3. Repository structure

```
My-Portfolio/
├── content/blog/              # Markdown blog posts (frontmatter + body)
├── public/                    # Static assets, favicons, OG images, llms.txt
├── scripts/
│   ├── seed.ts                # Seed Payload from src/data/*
│   └── remove-projects.ts     # Remove stale CMS project entries
├── src/
│   ├── app/
│   │   ├── (frontend)/        # Public site pages & layouts
│   │   ├── (payload)/         # Payload admin + /api/* catch-all
│   │   ├── api/               # contact, github
│   │   ├── robots.js
│   │   ├── sitemap.js
│   │   └── rss.xml/route.js
│   ├── components/            # React UI (Home, blog, projects, seo, ui)
│   ├── data/                  # Static fallback content
│   ├── hooks/                 # useGsap, etc.
│   ├── lib/
│   │   ├── blog.js            # Blog parsing & helpers
│   │   ├── cms/               # Payload client, content fetchers, mappers
│   │   ├── siteSeo.js         # Global metadata constants
│   │   ├── zeroClickSeo.js    # JSON-LD schema builders
│   │   ├── sitemap.js         # Static sitemap page list
│   │   └── ...
│   ├── payload/               # Collections, globals, plugins
│   └── payload.config.ts
├── .env.example
├── next.config.mjs
├── vercel.json
└── TECHNICAL.md               # This document
```

---

## 4. Application routing

### Public routes (`src/app/(frontend)/`)

| Route | Description | Data source |
|-------|-------------|-------------|
| `/` | Homepage — hero, featured projects, intro, latest blog, CTA | CMS / static |
| `/projects` | Project index | CMS / `projectData.js` |
| `/projects/[slug]` | Project case study | CMS / static |
| `/blog` | Blog index | `content/blog/*.md` |
| `/blog/[slug]` | Blog post detail | Markdown |
| `/about` | Profile, skills, experience, education | CMS / static |
| `/contact` | Contact form | Resend API |
| `/certifications` | Certifications list | CMS / static |
| `/hobbies` | Photography / hobbies gallery | Static |

### CMS & admin (`src/app/(payload)/`)

| Route | Description |
|-------|-------------|
| `/admin` | Payload CMS admin panel |
| `/api/*` | Payload REST / GraphQL (via catch-all route) |

### Metadata & feeds

| Route | Description |
|-------|-------------|
| `/sitemap.xml` | Dynamic sitemap (static pages + projects + blog) |
| `/robots.txt` | Crawl rules; disallows `/api/`, `/admin` |
| `/rss.xml` | Blog RSS 2.0 feed |
| `/opengraph-image` | Dynamic OG image generation |

### Middleware (`src/middleware.ts`)

When `MAINTENANCE_MODE=true`:

- All public routes redirect to `/` except `/`, `/admin`, `/api`, `/_next`, `/robots.txt`, `/sitemap.xml`, `/rss.xml`.
- Homepage renders `MaintenanceScreen` when maintenance is enabled.

---

## 5. Data layer & CMS

### CMS detection

`isCmsConfigured()` in `src/lib/cms/content.ts` returns `true` only when:

- `DATABASE_URI` and `PAYLOAD_SECRET` are set
- `CMS_ENABLED` is not `"false"`
- `PAYLOAD_SECRET` is not a placeholder string

### Payload collections

| Collection | Purpose |
|------------|---------|
| `users` | Admin authentication |
| `media` | Uploads (S3-backed when configured) |
| `projects` | Portfolio case studies |
| `experience` | Work history |
| `skills` | Skill groups |
| `certifications` | Certifications |
| `education` | Education timeline |

### Globals

| Global | Purpose |
|--------|---------|
| `site-settings` | Profile, hero image, nav, work status, CTAs, page copy |

### Content fetchers (`src/lib/cms/content.ts`)

| Function | Fallback |
|----------|----------|
| `getSiteSettings()` | `njrTheme.js` + `aboutData.js` |
| `getProjects()` | `projectData.js` (filtered by `filterPublicProjects`) |
| `getProjectBySlug(slug)` | Static project lookup |
| `getExperience()`, `getSkills()`, etc. | Matching files in `src/data/` |

Mappers in `src/lib/cms/mappers.ts` normalize Payload documents into shapes the React components expect (media URLs, arrays, nested groups).

### Seeding the CMS

```bash
# Requires DATABASE_URI and PAYLOAD_SECRET in .env
npm run cms:seed
```

`scripts/seed.ts` imports static data and upserts collections/globals. Use after first deploy or when resetting the database.

---

## 6. Blog system

### Location

Posts live in `content/blog/*.md`.

### Frontmatter schema

```yaml
---
title: Post title
description: Meta description (120–160 chars recommended)
date: 2025-06-15
slug: optional-custom-slug   # defaults to filename
image: /nextjs.png           # optional; see DEFAULT_POST_IMAGES in blog.js
imageAlt: Cover alt text
tags: ['Next.js', 'Payload CMS']
published: true              # false hides from index/sitemap
---
```

### Processing pipeline (`src/lib/blog.js`)

1. **Parse** — `gray-matter` splits frontmatter and body.
2. **Normalize** — dates, image paths, slug.
3. **Strip** — leading `# H1` (rendered in page header) and trailing “Related” CTA blocks.
4. **Sort** — newest `date` first.
5. **SSG** — `generateStaticParams()` in `blog/[slug]/page.jsx` prebuilds all slugs.

### Blog UI components

| Component | Role |
|-----------|------|
| `BlogPostHero` | Cover image + title, meta, tags |
| `BlogPostContent` | Markdown renderer (custom typography) |
| `BlogPostAuthor` | Author card / sidebar rail |
| `BlogPostShare` | LinkedIn, X, profile links |
| `BlogRelatedPosts` | 3 related posts grid |
| `BlogPostCard` | Index card with thumbnail |

### Adding a post

1. Create `content/blog/your-slug.md` with frontmatter.
2. Add a default cover in `DEFAULT_POST_IMAGES` in `src/lib/blog.js` if no `image` in frontmatter.
3. Rebuild or wait for ISR (`revalidate = 60` on blog routes).

---

## 7. SEO & discoverability

### Central config — `src/lib/siteSeo.js`

- `SITE_URL`, `SITE_NAME`, `SITE_EMAIL`
- Default title, description, OG/Twitter copy
- `KEYWORDS` array for metadata
- `absoluteUrl(path)` for canonical and OG URLs

### Structured data — `src/lib/zeroClickSeo.js`

JSON-LD builders used via `StructuredData.jsx` and `PageStructuredData.jsx`:

| Schema | Where used |
|--------|------------|
| `Person`, `WebSite`, `ProfilePage` | Homepage `@graph` |
| `ProfessionalService` | Homepage |
| `FAQPage` | Homepage FAQ (when enabled) |
| `BlogPosting` | Each blog post |
| `BreadcrumbList` | Blog, projects, inner pages |
| `ItemList` | Blog index |
| `CreativeWork` / project schemas | Project detail pages |

### Sitemap — `src/app/sitemap.js`

Combines:

- `STATIC_SITEMAP_PAGES` from `src/lib/sitemap.js`
- Published project slugs from CMS/static
- Published blog slugs from Markdown

`revalidate = 3600` (1 hour).

### AI / LLM discovery

- `public/llms.txt` — curated site summary and key URLs for LLM crawlers
- `public/.well-known/ai.txt` — additional AI crawler hints

### RSS

`/rss.xml` — all published blog posts with title, link, date, description.

---

## 8. API routes

### `POST /api/contact`

**Purpose:** Contact form submissions.

**Body:** `{ name, email, message }`

**Flow:**

1. Validates required fields and email format.
2. Escapes HTML in user input (`escapeHtml`).
3. Sends two emails via Resend (parallel):
   - Notification to `arjunvaradiyil203@gmail.com`
   - Confirmation to submitter
4. Returns `{ message, id, confirmationSent }` or error.

**Requires:** `RESEND_API_KEY`

### `GET /api/github`

**Purpose:** Fetches public GitHub activity/stats for the about page (cached).

### Payload API — `/api/*`

Handled by Payload’s catch-all route. Used by the admin panel and for media URLs (`/api/media/file/...`).

---

## 9. Design system & UI

### Theme tokens — `src/index.css`

CSS custom properties for dark (default) and light modes:

- Surfaces: `--color-surface`, `--color-surface-elevated`
- Text: `--color-foreground`, `--color-foreground-muted`, etc.
- Accent: `--color-accent` (gold `#c9a227` in dark mode)
- Borders, grid lines, hover states

Theme is applied via `ThemeProvider` + `class="dark"` / `class="light"` on `<html>`. Initial theme is set by inline script (`THEME_INIT_SCRIPT`) to avoid flash.

### UI primitives — `src/components/ui/neuTheme.js`

Shared Tailwind class strings:

- `NEU.display`, `NEU.displayHero` — Syne headings
- `NEU.eyebrow`, `NEU.bodyText` — labels and body copy
- `NEU.btn`, `NEU.btnPrimary`, `NEU.card`, `NEU.techTag`
- `NEU.section`, `NEU.sectionPad` — section spacing

### Shared layout components

| Component | Use |
|-----------|-----|
| `SectionHeader` | Numbered section titles (homepage) |
| `PageIntro` | Inner page hero with accent-bordered description |
| `Breadcrumbs` | Semantic breadcrumb nav |
| `Reveal` / `StaggerReveal` | Scroll entrance animations |
| `GhostWatermark` | Large background watermark text |

### Fonts — `src/lib/fonts.js`

- **Syne** — display headings
- **Inter** — body text
- Loaded via `@fontsource/*` and Next.js font classes

### Homepage layout

```
Banner (split hero + portrait)
  → HomeFeaturedProjects
  → HomeIntro
  → HomeLatestBlog
  → HomeCta
Footer
```

Homepage uses `HeroHeader` (overlay nav) instead of the global `SiteHeader` / `Navbar`.

---

## 10. Environment variables

Copy `.env.example` to `.env.local` for local development.

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_SERVER_URL` | Yes (CMS) | Public site URL, e.g. `http://localhost:3010` |
| `PAYLOAD_SECRET` | CMS | Long random secret for Payload |
| `DATABASE_URI` | CMS | MongoDB connection string |
| `CMS_ENABLED` | No | Set `false` to force static-only mode |
| `AWS_REGION` | S3 | e.g. `ap-south-1` |
| `AWS_S3_BUCKET` | S3 | Bucket name |
| `AWS_ACCESS_KEY_ID` | S3 | IAM credentials |
| `AWS_SECRET_ACCESS_KEY` | S3 | IAM credentials |
| `AWS_S3_PREFIX` | No | Folder prefix inside bucket |
| `RESEND_API_KEY` | Contact | Resend API key |
| `MAINTENANCE_MODE` | No | `true` enables maintenance screen |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | No | Google Analytics 4 |
| `PAYLOAD_CORS_ORIGINS` | No | Extra admin CORS origins (comma-separated) |
| `PAYLOAD_ADMIN_EMAIL` | Seed | First admin email (seed script) |
| `PAYLOAD_ADMIN_PASSWORD` | Seed | First admin password (seed script) |

**Note:** Dev server runs on port **3010** (`npm run dev`). Set `NEXT_PUBLIC_SERVER_URL=http://localhost:3010` locally.

---

## 11. Development workflow

### Prerequisites

- Node.js 18+
- npm
- MongoDB (optional, for CMS)
- AWS S3 bucket (optional, for media uploads)

### Setup

```bash
git clone https://github.com/arjunvaradiyil/arjun.varadiyil.git
cd arjun.varadiyil   # or your local folder name
npm install
cp .env.example .env.local
# Edit .env.local with your values
npm run dev
```

Open **http://localhost:3010**.

### Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Dev server on port 3010 |
| `npm run build` | Production build |
| `npm start` | Start production server |
| `npm run lint` | ESLint |
| `npm run payload` | Payload CLI |
| `npm run generate:importmap` | Regenerate admin import map |
| `npm run cms:seed` | Seed database from static data |
| `npm run cms:remove-projects` | Remove deprecated project slugs |

### Payload admin

With CMS configured: **http://localhost:3010/admin**

After seeding, create or use the admin user from the seed script.

---

## 12. Deployment

### Vercel (recommended)

1. Connect the GitHub repository.
2. Set environment variables from [§10](#10-environment-variables).
3. `NEXT_PUBLIC_SERVER_URL` must be `https://arjunvaradiyil.in` in production.
4. Deploy — `vercel.json` uses `npm run build` and output `.next`.

### Production checklist

- [ ] `DATABASE_URI` points to production MongoDB (e.g. Atlas)
- [ ] `PAYLOAD_SECRET` is a strong unique value
- [ ] S3 CORS allows `https://arjunvaradiyil.in` and admin origins
- [ ] `RESEND_API_KEY` set; verify domain in Resend for custom `from` addresses
- [ ] Submit `https://arjunvaradiyil.in/sitemap.xml` in Google Search Console
- [ ] Add Search Console verification meta in `layout.jsx` when ready
- [ ] Confirm `robots.txt` and canonical URLs resolve correctly

### Image domains

`next.config.mjs` whitelists:

- Local Payload media (`localhost:3000/api/media/**`)
- S3 bucket hostname (when AWS env vars set)
- `arjunvaradiyil.in` / `www.arjunvaradiyil.in`

---

## 13. Content operations

### Update portfolio projects (without CMS)

Edit `src/data/projectData.js`. Each project includes slug, title, industry, images, case study fields, and `previewLink`.

### Update portfolio projects (with CMS)

1. Log in to `/admin`.
2. Edit **Projects** collection entries.
3. Set `published: true` and `sortOrder` for homepage ordering.

### Update site copy / hero

- **Static:** `src/data/seoContent.js`, `src/lib/njrTheme.js`, `src/data/proof.js`
- **CMS:** **Site settings** global in admin

### Update navigation

- **Static:** `NJR_NAV_CATEGORIES` in `src/lib/njrTheme.js`
- **CMS:** `navCategories` in site settings

### Hidden projects on homepage

`HIDDEN_FROM_HOME_SLUGS` in `src/lib/employment.js` excludes slugs from the homepage featured grid (still visible on `/projects`).

---

## 14. Maintenance & operations

### Maintenance mode

```env
MAINTENANCE_MODE=true
```

- Homepage shows `MaintenanceScreen`.
- Middleware redirects all other public routes to `/`.
- Admin and API remain accessible.

### Caching / revalidation

| Route | `revalidate` |
|-------|--------------|
| Homepage, blog, projects | 60s |
| Sitemap | 3600s |
| GitHub API route | 3600s |

### Logging

Production builds strip `console.*` via `next.config.mjs` `compiler.removeConsole`.

CMS fetch failures log `[cms] ... fallback` warnings and use static data.

### Security notes

- Contact form input is HTML-escaped before email templates.
- `/admin` and `/api` disallowed in `robots.txt`.
- Payload CSRF/CORS restricted via `getPayloadAllowedOrigins()`.
- Do not commit `.env` or secrets.

---

## Related files

| Topic | File |
|-------|------|
| SEO copy | `src/lib/siteSeo.js`, `src/data/seoContent.js` |
| JSON-LD | `src/lib/zeroClickSeo.js`, `src/components/StructuredData.jsx` |
| Employment / location | `src/lib/employment.js` |
| Sitemap pages list | `src/lib/sitemap.js` |
| Google Search Console notes | `GOOGLE_SEARCH_CONSOLE_REMOVAL.md` |
| LLM summary | `public/llms.txt` |

---

## Contact & ownership

**Developer:** Arjun Varadiyil  
**Email:** arjunvaradiyil203@gmail.com  
**Site:** https://arjunvaradiyil.in

---

*Last updated: June 2026 — reflects Next.js 15, Payload CMS 3, and the current App Router structure.*

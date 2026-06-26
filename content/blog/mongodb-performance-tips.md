---
title: MongoDB Performance Tips for Production Next.js Apps
description: Indexing, query patterns, connection pooling, and schema design lessons from shipping MongoDB-backed CMS and civic platforms at scale.
date: 2026-06-30
slug: mongodb-performance-tips
image: /mongo.png
imageAlt: MongoDB performance optimization for production Next.js applications
published: true
---

# MongoDB Performance Tips for Production Next.js Apps

MongoDB is the default database for Payload CMS and many MERN-stack builds I ship. It is flexible — but flexibility without discipline leads to slow queries under load. These are the patterns I apply before launch day.

## Index what you query

Every `find`, `sort`, and `filter` field needs an index. Check with `.explain('executionPlans')`:

```js
db.articles.find({ status: 'published' }).sort({ publishedAt: -1 }).explain()
```

Look for `COLLSCAN` — that means a full collection scan. Add a compound index:

```js
db.articles.createIndex({ status: 1, publishedAt: -1 })
```

**Rule:** index fields in equality → sort → range order.

## Limit fields with projection

Payload and Mongoose return full documents by default. On list pages, select only what you need:

```ts
const { docs } = await payload.find({
  collection: 'articles',
  select: { title: true, slug: true, publishedAt: true, featuredImage: true },
  limit: 20,
})
```

Smaller documents = less network I/O = faster TTFB.

## Paginate, never load all

```ts
const { docs, hasNextPage, nextPage } = await payload.find({
  collection: 'articles',
  page: 2,
  limit: 20,
})
```

Cursor-based pagination (`_id > lastId`) scales better than `skip` for deep pages, but offset pagination is fine for editorial sites with shallow archives.

## Connection pooling

On serverless (Vercel), each function invocation can open a new connection. Use MongoDB Atlas with connection pooling enabled, or a driver option:

```ts
// mongoose
mongoose.connect(uri, { maxPoolSize: 10, serverSelectionTimeoutMS: 5000 })
```

Payload 3 manages its own connection — avoid creating multiple Payload instances per request. Use a singleton `getPayload()` helper.

## Schema design for read-heavy CMS workloads

| Pattern | When to use |
|---------|-------------|
| Embed subdocuments | Small, always-fetched-together data (author name on article) |
| Reference by ID | Large or shared data (media, categories) |
| Denormalize counts | View counts, comment totals — update async |

For news platforms, **embed blocks** in article documents (Payload blocks) rather than joining 10 collections per article fetch.

## Avoid N+1 queries

Bad:

```ts
for (const article of articles) {
  article.author = await payload.findByID({ collection: 'users', id: article.authorId })
}
```

Good — use `depth` in Payload:

```ts
await payload.find({ collection: 'articles', depth: 1 })
```

Or batch-fetch related IDs in one query.

## TTL indexes for ephemeral data

Sessions, OTP codes, rate-limit counters:

```js
db.sessions.createIndex({ createdAt: 1 }, { expireAfterSeconds: 3600 })
```

MongoDB deletes expired documents automatically.

## Monitor in production

- **Atlas Performance Advisor** — suggests missing indexes
- **Slow query log** — threshold at 100ms
- **Query shapes** — watch for growing `docsExamined` vs `docsReturned` ratio

## When MongoDB struggles

- Heavy relational joins across many collections → consider PostgreSQL for that domain
- Full-text search at scale → add Atlas Search or Elasticsearch
- Complex aggregations on every request → precompute in a materialized collection

For CMS and civic platforms, MongoDB with proper indexes handles launch-day traffic well — I've run it on [My Vote My Voice](https://myidukki.com/) and multiple Payload builds without switching databases.

---

**Related:** [Payload CMS Tutorial](https://arjunvaradiyil.in/blog/payload-cms-tutorial) · [CMS Architecture](https://arjunvaradiyil.in/blog/headless-cms-architecture)

**Connect:** [LinkedIn](https://www.linkedin.com/in/arjunvaradiyil) · [Contact](https://arjunvaradiyil.in/contact)

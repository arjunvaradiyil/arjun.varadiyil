---
title: React Performance Optimization — Practical Patterns
description: Memoization, rendering boundaries, bundle splitting, and motion performance tips from shipping React 19 and Next.js production UIs.
date: 2026-07-01
slug: react-performance-optimization
image: /REACT.png
imageAlt: React performance optimization — practical patterns for faster and scalable apps
published: true
---

# React Performance Optimization — Practical Patterns

React performance is not about memorizing every hook rule — it is about knowing which renders cost real user time. These are the patterns I apply on portfolio and client builds where Lighthouse and Core Web Vitals matter.

## Default to Server Components (Next.js)

The biggest React perf win in 2025/2026: **don't ship component JS to the browser unless it needs interactivity**.

```tsx
// Server Component — zero client JS
export default async function ProjectList() {
  const projects = await getProjects()
  return <ul>{projects.map(p => <li key={p.slug}>{p.title}</li>)}</ul>
}
```

```tsx
// Client Component — only where needed
'use client'
export function FilterTabs({ onChange }) { /* ... */ }
```

## Push `'use client'` down the tree

Bad: mark an entire page as client because one button has `onClick`.

Good: keep the page as a Server Component; import a small client child for the interactive part.

## Dynamic imports for heavy libraries

GSAP, Three.js, chart libraries — load only on routes that need them:

```tsx
import dynamic from 'next/dynamic'

const ThreeCanvas = dynamic(() => import('./ThreeCanvas'), {
  ssr: false,
  loading: () => <div className="h-64 animate-pulse bg-neutral-900" />,
})
```

This keeps the homepage bundle lean.

## Memoization — when it actually helps

`useMemo` and `useCallback` help when:

1. A child is wrapped in `React.memo` and receives object/function props
2. A computation is genuinely expensive (filtering 10k rows, complex transforms)

They do **not** help when:

- The child re-renders anyway due to context changes
- The computation is trivial (string concat, simple map)

```tsx
const filtered = useMemo(
  () => items.filter(i => i.status === activeTab),
  [items, activeTab]
)
```

## List virtualization for long lists

Rendering 500 DOM nodes kills scroll performance. Use `@tanstack/react-virtual` or `react-window` for admin tables and search results.

## Avoid layout thrashing in animations

Framer Motion and GSAP should animate only `transform` and `opacity` — properties that skip layout recalculation:

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
/>
```

Never animate `width`, `height`, or `top`/`left` on large sections. Respect `prefers-reduced-motion`:

```tsx
const reduceMotion = useReducedMotion()
<motion.div animate={reduceMotion ? false : { opacity: 1, y: 0 }} />
```

## State colocation

Keep state as close to where it is used as possible. Lifting `useState` to a parent re-renders all siblings on every keystroke.

```tsx
// Bad — entire page re-renders on search input
function Page() {
  const [query, setQuery] = useState('')
  return <><Search query={query} onChange={setQuery} /><HeavyList /><Footer /></>
}

// Good — isolate search state
function SearchBox() {
  const [query, setQuery] = useState('')
  return <input value={query} onChange={e => setQuery(e.target.value)} />
}
```

## Context sparingly

React Context triggers re-renders on all consumers when value changes. For theme and site settings (rarely changing), it is fine. For frequently updating data, prefer component state, URL params, or a focused store (Zustand).

## Images and fonts (React-adjacent but critical)

- `next/image` with correct `sizes` — wrong sizes download oversized images
- `next/font` with `display: 'swap'` — eliminates font-related layout shift
- Preload only the LCP image, not every asset on the page

## Measure before optimizing

1. React DevTools Profiler — find components re-rendering on every keystroke
2. Lighthouse — TBT, LCP, CLS
3. `next build` output — check First Load JS per route

Optimize the top offender first. Premature `memo` everywhere adds complexity without measurable gain.

---

**Related:** [Next.js Interview Questions](https://arjunvaradiyil.in/blog/nextjs-interview-questions) · [Next.js ISR Patterns](https://arjunvaradiyil.in/blog/nextjs-isr-patterns-for-editorial-sites)

**Connect:** [LinkedIn](https://www.linkedin.com/in/arjunvaradiyil) · [Contact](https://arjunvaradiyil.in/contact)

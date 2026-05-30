'use client';

import dynamic from 'next/dynamic';

const R3FCanvas = dynamic(() => import('@react-three/fiber').then((mod) => mod.Canvas), {
  ssr: false,
  loading: () => null,
});

/** Client-only WebGL canvas wrapper for Next.js (no SSR). */
export default function ThreeCanvas({ className = '', children, ...props }) {
  return (
    <div className={className} aria-hidden={props['aria-hidden']}>
      <R3FCanvas {...props}>{children}</R3FCanvas>
    </div>
  );
}

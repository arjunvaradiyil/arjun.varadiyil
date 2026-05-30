'use client';

import { useLayoutEffect, useRef } from 'react';
import { gsap, registerGsapPlugins } from '../lib/gsap';

/**
 * Run GSAP inside a scoped client component. Uses gsap.context for automatic cleanup.
 * @param {(ctx: { gsap: typeof gsap, scope: HTMLElement }) => void} setup
 * @param {React.DependencyList} deps
 */
export function useGsap(setup, deps = []) {
  const scopeRef = useRef(null);

  useLayoutEffect(() => {
    let ctx;
    let cancelled = false;

    registerGsapPlugins().then(() => {
      if (cancelled || !scopeRef.current) return;

      ctx = gsap.context(() => {
        setup({ gsap, scope: scopeRef.current });
      }, scopeRef);
    });

    return () => {
      cancelled = true;
      ctx?.revert();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return scopeRef;
}

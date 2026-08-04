'use client';

import { useEffect, useRef } from 'react';

export default function WaveRibbon() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId = 0;
    let time = 0;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const isDark = () => document.documentElement.classList.contains('dark');

    const handleResize = () => {
      const parent = canvas.parentElement;
      canvas.width = parent?.clientWidth || window.innerWidth;
      canvas.height = parent?.clientHeight || window.innerHeight;
    };

    const drawRibbon = (c, w, cy, freq, amp, phaseOffset, linesCount, lineSpacing, dark) => {
      for (let i = 0; i < linesCount; i += 1) {
        c.beginPath();
        for (let x = 0; x <= w; x += 10) {
          const normX = x / w;
          const fade = Math.sin(normX * Math.PI);
          const angle = normX * Math.PI * freq + phaseOffset + i * lineSpacing;
          const y = cy + Math.sin(angle) * amp * fade;
          if (x === 0) c.moveTo(x, y);
          else c.lineTo(x, y);
        }
        const alpha = 0.22 - i * 0.012;
        c.strokeStyle = dark
          ? `rgba(255, 255, 255, ${alpha * 0.7})`
          : `rgba(0, 0, 0, ${alpha})`;
        c.lineWidth = 1;
        c.stroke();
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const { width, height } = canvas;
      const centerY = height / 2;
      const dark = isDark();
      drawRibbon(ctx, width, centerY, 1.6, 90, time * 0.015, 14, 0.035, dark);
      drawRibbon(ctx, width, centerY, 2.4, 60, -time * 0.012, 11, -0.045, dark);
      if (!reduceMotion) {
        time += 1;
        animationFrameId = requestAnimationFrame(draw);
      }
    };

    const mo = new MutationObserver(() => {
      if (reduceMotion) draw();
    });
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    window.addEventListener('resize', handleResize);
    handleResize();
    draw();

    return () => {
      mo.disconnect();
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-80"
      aria-hidden
    />
  );
}

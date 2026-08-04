'use client';

export default function BackgroundGrid() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 flex justify-between px-6 md:px-16 lg:px-24">
      <div className="h-full w-px bg-neutral-200/40" />
      <div className="h-full w-px bg-neutral-200/40" />
      <div className="h-full w-px bg-neutral-200/40" />
      <div className="h-full w-px bg-neutral-200/40" />
      <div className="h-full w-px bg-neutral-200/40" />
    </div>
  );
}

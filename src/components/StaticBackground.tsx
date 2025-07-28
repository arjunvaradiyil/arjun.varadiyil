'use client';

import Image from 'next/image';

export default function StaticBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Image
        src="/hero-bg.jpg"
        alt="Abstract background"
        layout="fill"
        objectFit="cover"
        className="blur-sm"
        priority
      />
      {/* Optional: Add an overlay for better contrast */}
      <div className="absolute inset-0 bg-black/30"></div>
    </div>
  );
} 
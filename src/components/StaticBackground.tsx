'use client';

import Image from 'next/image';

export default function StaticBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Image
        src="/arjun-varadiyil-hero-background.webp"
        alt="Abstract background of purple and black waves"
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
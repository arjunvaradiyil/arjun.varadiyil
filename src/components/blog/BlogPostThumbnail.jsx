import Image from 'next/image';

export default function BlogPostThumbnail({ src, alt, className = '', aspect = 'wide' }) {
  if (!src) return null;

  const aspectClass = aspect === 'video' ? 'aspect-video' : 'aspect-[16/10]';

  return (
    <div
      className={`relative ${aspectClass} w-full shrink-0 overflow-hidden border-0 border-b border-[var(--color-border)] bg-[var(--color-surface-elevated)] ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 640px) 100vw, 208px"
        className="object-cover object-center grayscale transition duration-500 group-hover:grayscale-0"
      />
    </div>
  );
}

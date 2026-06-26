import Image from 'next/image';
import { NEU } from '../ui/neuTheme';

export default function BlogPostCover({
  src,
  alt,
  priority = false,
  variant = 'default',
  className = '',
}) {
  if (!src) return null;

  const isHero = variant === 'hero';

  return (
    <figure
      className={
        isHero
          ? `relative aspect-[21/10] w-full overflow-hidden ${NEU.frame} ${className}`
          : `relative aspect-[16/9] w-full overflow-hidden border border-[var(--color-border)] bg-[var(--color-surface-elevated)] ${className}`
      }
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={isHero ? '(max-width: 1280px) 100vw, 1280px' : '(max-width: 768px) 100vw, 768px'}
        className={
          isHero
            ? 'object-cover object-center'
            : 'object-cover object-center'
        }
      />
      {!isHero ? (
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--color-surface)]/30 via-transparent to-transparent"
          aria-hidden
        />
      ) : null}
    </figure>
  );
}

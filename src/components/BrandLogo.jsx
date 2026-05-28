'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export const BRAND_LOGO = '/logo.png';

export function brandLogoSrc() {
  return BRAND_LOGO;
}

export default function BrandLogo({
  href = '/',
  className = '',
  imageClassName = 'h-9 w-auto object-contain sm:h-10',
  showName = false,
  priority = false,
  animate = false,
  reduceMotion = false,
}) {
  const image = (
    <Image
      src={BRAND_LOGO}
      alt="Arjun Varadiyil"
      width={160}
      height={56}
      priority={priority}
      className={imageClassName}
    />
  );

  const content = (
    <>
      {animate ? (
        <motion.span
          className="inline-flex shrink-0"
          whileHover={reduceMotion ? undefined : { scale: 1.04 }}
          whileTap={reduceMotion ? undefined : { scale: 0.97 }}
        >
          {image}
        </motion.span>
      ) : (
        image
      )}
      {showName ? (
        <span className="hidden font-sans text-[10px] font-bold uppercase tracking-[0.22em] text-gray-500 dark:text-gray-400 sm:block">
          Arjun Varadiyil
        </span>
      ) : null}
    </>
  );

  if (!href) {
    return <span className={`inline-flex items-center gap-2 ${className}`}>{content}</span>;
  }

  return (
    <Link href={href} className={`group inline-flex shrink-0 items-center gap-2 ${className}`}>
      {content}
    </Link>
  );
}

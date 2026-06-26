import { Link2, Linkedin } from 'lucide-react';
import { FaXTwitter } from 'react-icons/fa6';
import { LINKEDIN_URL } from '../../data/proof';

export default function BlogPostShare({ shareUrl, title, className = '' }) {
  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(title);
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`;

  const items = [
    {
      label: 'Share on LinkedIn',
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      icon: Linkedin,
    },
    {
      label: 'Share on X',
      href: twitterShare,
      icon: FaXTwitter,
    },
    {
      label: 'Author on LinkedIn',
      href: LINKEDIN_URL,
      icon: Link2,
    },
  ];

  return (
    <aside
      className={`flex flex-row gap-2 lg:flex-col lg:gap-3 ${className}`}
      aria-label="Share this post"
    >
      {items.map(({ label, href, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-foreground-muted)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
        >
          <Icon className="h-4 w-4" aria-hidden />
        </a>
      ))}
    </aside>
  );
}

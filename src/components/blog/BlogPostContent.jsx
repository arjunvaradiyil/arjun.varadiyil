import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const article =
  'max-w-none text-[var(--color-foreground-soft)] [&_a]:text-[var(--color-accent)] [&_a]:underline [&_a]:underline-offset-4 [&_a]:transition hover:[&_a]:text-[var(--color-foreground)]';

function MarkdownH2({ children }) {
  return (
    <h2 className="mt-10 mb-4 font-syne text-2xl font-bold normal-case tracking-tight text-[var(--color-foreground)] sm:text-[1.65rem]">
      {children}
    </h2>
  );
}

function MarkdownH3({ children }) {
  return (
    <h3 className="mt-10 font-syne text-lg font-bold text-[var(--color-foreground)] sm:text-xl">
      {children}
    </h3>
  );
}

function MarkdownP({ children }) {
  return <p className="my-5 text-sm leading-[1.8] sm:text-base">{children}</p>;
}

function MarkdownUl({ children }) {
  return (
    <ul className="my-6 space-y-3 [&>li]:flex [&>li]:gap-3 [&>li]:before:mt-2 [&>li]:before:h-2 [&>li]:before:w-2 [&>li]:before:shrink-0 [&>li]:before:rounded-full [&>li]:before:bg-[var(--color-accent)] [&>li]:before:content-['']">
      {children}
    </ul>
  );
}

function MarkdownOl({ children }) {
  return <ol className="my-6 list-decimal space-y-3 pl-6 marker:text-[var(--color-accent)]">{children}</ol>;
}

function MarkdownLi({ children }) {
  return <li className="text-sm leading-relaxed sm:text-base">{children}</li>;
}

function MarkdownBlockquote({ children }) {
  return (
    <blockquote className="my-8 border-l-2 border-[var(--color-accent)] py-1 pl-5 italic text-[var(--color-foreground-muted)]">
      {children}
    </blockquote>
  );
}

function MarkdownHr() {
  return <hr className="my-12 border-[var(--color-border)]" />;
}

function MarkdownPre({ children }) {
  return (
    <pre className="my-8 overflow-x-auto rounded-sm border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-4 text-[13px] leading-relaxed sm:p-5 sm:text-sm">
      {children}
    </pre>
  );
}

function MarkdownCode({ inline, className, children, ...props }) {
  if (inline) {
    return (
      <code
        className="rounded bg-[var(--color-surface-elevated)] px-1.5 py-0.5 font-mono text-[0.88em] text-[var(--color-foreground)]"
        {...props}
      >
        {children}
      </code>
    );
  }

  return (
    <code className={`font-mono text-[var(--color-foreground-soft)] ${className || ''}`} {...props}>
      {children}
    </code>
  );
}

function MarkdownStrong({ children }) {
  return <strong className="font-medium text-[var(--color-foreground)]">{children}</strong>;
}

function MarkdownTable({ children }) {
  return (
    <div className="my-8 overflow-x-auto border border-[var(--color-border)]">
      <table className="w-full min-w-[480px] border-collapse text-sm">{children}</table>
    </div>
  );
}

function MarkdownTh({ children }) {
  return (
    <th className="border-b border-[var(--color-border)] bg-[var(--color-surface-elevated)] px-4 py-3 text-left font-sans text-[10px] font-medium uppercase tracking-[0.14em] text-[var(--color-foreground-muted)]">
      {children}
    </th>
  );
}

function MarkdownTd({ children }) {
  return (
    <td className="border-b border-[var(--color-border)] px-4 py-3 text-[var(--color-foreground-soft)] last:border-b-0">
      {children}
    </td>
  );
}

function MarkdownImage({ src, alt }) {
  if (!src) return null;

  const imageSrc = src.startsWith('http') ? src : src.startsWith('/') ? src : `/${src}`;

  return (
    <figure className="relative my-10 aspect-[16/10] w-full overflow-hidden border border-[var(--color-border)] bg-[var(--color-surface-elevated)]">
      <Image
        src={imageSrc}
        alt={alt || ''}
        fill
        sizes="(max-width: 896px) 100vw, 896px"
        className="object-cover object-center"
      />
      {alt ? (
        <figcaption className="border-t border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2.5 font-sans text-[10px] uppercase tracking-[0.16em] text-[var(--color-foreground-muted)]">
          {alt}
        </figcaption>
      ) : null}
    </figure>
  );
}

const markdownComponents = {
  h2: MarkdownH2,
  h3: MarkdownH3,
  p: MarkdownP,
  ul: MarkdownUl,
  ol: MarkdownOl,
  li: MarkdownLi,
  blockquote: MarkdownBlockquote,
  hr: MarkdownHr,
  pre: MarkdownPre,
  code: MarkdownCode,
  strong: MarkdownStrong,
  table: MarkdownTable,
  th: MarkdownTh,
  td: MarkdownTd,
  img: ({ src, alt }) => <MarkdownImage src={src} alt={alt} />,
};

export default function BlogPostContent({ content }) {
  return (
    <div className={article}>
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
        {content}
      </ReactMarkdown>
    </div>
  );
}

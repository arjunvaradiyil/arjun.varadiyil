import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const article =
  'max-w-none text-neutral-700 [&_a]:text-[#ff5e3a] [&_a]:underline [&_a]:underline-offset-4 [&_a]:transition hover:[&_a]:text-black';

const articleLegacy =
  'max-w-none text-[var(--color-foreground-soft)] [&_a]:text-[var(--color-accent)] [&_a]:underline [&_a]:underline-offset-4 [&_a]:transition hover:[&_a]:text-[var(--color-foreground)]';

function MarkdownH2({ children, rajan }) {
  return (
    <h2
      className={`mt-10 mb-4 font-display text-2xl font-bold tracking-tight sm:text-[1.65rem] ${
        rajan ? 'text-black' : 'font-syne normal-case text-[var(--color-foreground)]'
      }`}
    >
      {children}
    </h2>
  );
}

function MarkdownH3({ children, rajan }) {
  return (
    <h3
      className={`mt-10 text-lg font-bold sm:text-xl ${
        rajan ? 'font-display text-black' : 'font-syne text-[var(--color-foreground)]'
      }`}
    >
      {children}
    </h3>
  );
}

function MarkdownP({ children }) {
  return <p className="my-5 text-sm leading-[1.8] sm:text-base">{children}</p>;
}

function MarkdownUl({ children, rajan }) {
  return (
    <ul
      className={`my-6 space-y-3 [&>li]:flex [&>li]:gap-3 [&>li]:before:mt-2 [&>li]:before:h-2 [&>li]:before:w-2 [&>li]:before:shrink-0 [&>li]:before:rounded-full [&>li]:before:content-[''] ${
        rajan ? '[&>li]:before:bg-[#ff5e3a]' : '[&>li]:before:bg-[var(--color-accent)]'
      }`}
    >
      {children}
    </ul>
  );
}

function MarkdownOl({ children, rajan }) {
  return (
    <ol
      className={`my-6 list-decimal space-y-3 pl-6 ${
        rajan ? 'marker:text-[#ff5e3a]' : 'marker:text-[var(--color-accent)]'
      }`}
    >
      {children}
    </ol>
  );
}

function MarkdownLi({ children }) {
  return <li className="text-sm leading-relaxed sm:text-base">{children}</li>;
}

function MarkdownBlockquote({ children, rajan }) {
  return (
    <blockquote
      className={`my-8 border-l-2 py-1 pl-5 italic ${
        rajan
          ? 'border-[#ff5e3a] text-neutral-500'
          : 'border-[var(--color-accent)] text-[var(--color-foreground-muted)]'
      }`}
    >
      {children}
    </blockquote>
  );
}

function MarkdownHr({ rajan }) {
  return (
    <hr className={`my-12 ${rajan ? 'border-black/10' : 'border-[var(--color-border)]'}`} />
  );
}

function MarkdownPre({ children, rajan }) {
  return (
    <pre
      className={`my-8 overflow-x-auto p-4 text-[13px] leading-relaxed sm:p-5 sm:text-sm ${
        rajan
          ? 'border border-black/15 bg-neutral-100 text-neutral-800'
          : 'rounded-sm border border-[var(--color-border)] bg-[var(--color-surface-elevated)]'
      }`}
    >
      {children}
    </pre>
  );
}

function MarkdownCode({ inline, className, children, rajan, ...props }) {
  if (inline) {
    return (
      <code
        className={`rounded px-1.5 py-0.5 font-mono text-[0.88em] ${
          rajan
            ? 'bg-neutral-100 text-black'
            : 'bg-[var(--color-surface-elevated)] text-[var(--color-foreground)]'
        }`}
        {...props}
      >
        {children}
      </code>
    );
  }

  return (
    <code
      className={`font-mono ${rajan ? 'text-neutral-700' : 'text-[var(--color-foreground-soft)]'} ${className || ''}`}
      {...props}
    >
      {children}
    </code>
  );
}

function MarkdownStrong({ children, rajan }) {
  return (
    <strong className={`font-medium ${rajan ? 'text-black' : 'text-[var(--color-foreground)]'}`}>
      {children}
    </strong>
  );
}

function MarkdownTable({ children, rajan }) {
  return (
    <div
      className={`my-8 overflow-x-auto ${
        rajan ? 'border border-black/15' : 'border border-[var(--color-border)]'
      }`}
    >
      <table className="w-full min-w-[480px] border-collapse text-sm">{children}</table>
    </div>
  );
}

function MarkdownTh({ children, rajan }) {
  return (
    <th
      className={`px-4 py-3 text-left font-mono text-[10px] font-medium uppercase tracking-[0.14em] ${
        rajan
          ? 'border-b border-black/10 bg-neutral-100 text-neutral-500'
          : 'border-b border-[var(--color-border)] bg-[var(--color-surface-elevated)] text-[var(--color-foreground-muted)]'
      }`}
    >
      {children}
    </th>
  );
}

function MarkdownTd({ children, rajan }) {
  return (
    <td
      className={`px-4 py-3 last:border-b-0 ${
        rajan
          ? 'border-b border-black/10 text-neutral-700'
          : 'border-b border-[var(--color-border)] text-[var(--color-foreground-soft)]'
      }`}
    >
      {children}
    </td>
  );
}

function MarkdownImage({ src, alt, rajan }) {
  if (!src) return null;

  const imageSrc = src.startsWith('http') ? src : src.startsWith('/') ? src : `/${src}`;

  return (
    <figure
      className={`relative my-10 aspect-[16/10] w-full overflow-hidden ${
        rajan
          ? 'border border-black/15 bg-neutral-100'
          : 'border border-[var(--color-border)] bg-[var(--color-surface-elevated)]'
      }`}
    >
      <Image
        src={imageSrc}
        alt={alt || ''}
        fill
        sizes="(max-width: 896px) 100vw, 896px"
        className="object-cover object-center"
      />
      {alt ? (
        <figcaption
          className={`border-t px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.16em] ${
            rajan
              ? 'border-black/10 bg-white text-neutral-500'
              : 'border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-foreground-muted)]'
          }`}
        >
          {alt}
        </figcaption>
      ) : null}
    </figure>
  );
}

export default function BlogPostContent({ content, variant = 'legacy' }) {
  const rajan = variant === 'rajan';

  const markdownComponents = {
    h2: (props) => <MarkdownH2 rajan={rajan} {...props} />,
    h3: (props) => <MarkdownH3 rajan={rajan} {...props} />,
    p: MarkdownP,
    ul: (props) => <MarkdownUl rajan={rajan} {...props} />,
    ol: (props) => <MarkdownOl rajan={rajan} {...props} />,
    li: MarkdownLi,
    blockquote: (props) => <MarkdownBlockquote rajan={rajan} {...props} />,
    hr: () => <MarkdownHr rajan={rajan} />,
    pre: (props) => <MarkdownPre rajan={rajan} {...props} />,
    code: (props) => <MarkdownCode rajan={rajan} {...props} />,
    strong: (props) => <MarkdownStrong rajan={rajan} {...props} />,
    table: (props) => <MarkdownTable rajan={rajan} {...props} />,
    th: (props) => <MarkdownTh rajan={rajan} {...props} />,
    td: (props) => <MarkdownTd rajan={rajan} {...props} />,
    img: ({ src, alt }) => <MarkdownImage src={src} alt={alt} rajan={rajan} />,
  };

  return (
    <div className={rajan ? article : articleLegacy}>
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
        {content}
      </ReactMarkdown>
    </div>
  );
}

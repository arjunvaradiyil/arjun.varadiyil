import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const prose =
  'max-w-none text-[var(--color-foreground-soft)] [&_a]:text-[var(--color-accent)] [&_a]:underline [&_a]:underline-offset-4 [&_blockquote]:border-l-2 [&_blockquote]:border-[var(--color-accent)] [&_blockquote]:pl-4 [&_blockquote]:italic [&_code]:rounded [&_code]:bg-[var(--color-surface-elevated)] [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-sm [&_h2]:mb-4 [&_h2]:mt-10 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-light [&_h2]:text-[var(--color-foreground)] [&_h3]:mb-3 [&_h3]:mt-8 [&_h3]:font-display [&_h3]:text-xl [&_h3]:font-light [&_h3]:text-[var(--color-foreground)] [&_hr]:my-10 [&_hr]:border-[var(--color-border)] [&_li]:leading-relaxed [&_ol]:my-4 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-6 [&_p]:my-4 [&_p]:leading-relaxed [&_pre]:my-6 [&_pre]:overflow-x-auto [&_pre]:border [&_pre]:border-[var(--color-border)] [&_pre]:bg-[var(--color-surface-elevated)] [&_pre]:p-4 [&_pre_code]:bg-transparent [&_pre_code]:p-0 [&_strong]:font-medium [&_strong]:text-[var(--color-foreground)] [&_table]:my-6 [&_table]:w-full [&_table]:border-collapse [&_td]:border [&_td]:border-[var(--color-border)] [&_td]:px-3 [&_td]:py-2 [&_td]:text-sm [&_th]:border [&_th]:border-[var(--color-border)] [&_th]:bg-[var(--color-surface-elevated)] [&_th]:px-3 [&_th]:py-2 [&_th]:text-left [&_th]:text-xs [&_th]:uppercase [&_th]:tracking-[0.12em] [&_ul]:my-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6';

export default function BlogPostContent({ content }) {
  return (
    <div className={prose}>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </div>
  );
}

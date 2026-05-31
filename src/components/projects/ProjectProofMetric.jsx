import { NEU } from '../ui/neuTheme';

/** Single hard proof metric — the one number/outcome visitors remember. */
export default function ProjectProofMetric({ metric, className = '' }) {
  if (!metric?.value) return null;

  return (
    <div
      className={`border border-[var(--color-border-strong)] bg-[var(--color-primary-bg)] px-4 py-3 text-[var(--color-primary-fg)] ${className}`}
    >
      <p className="font-syne text-2xl font-bold tabular-nums leading-none sm:text-3xl">{metric.value}</p>
      <p className="mt-2 font-sans text-[10px] font-medium uppercase leading-snug tracking-[0.14em] opacity-90">
        {metric.label}
      </p>
      {metric.detail ? (
        <p className="mt-1.5 font-sans text-xs leading-snug opacity-75">{metric.detail}</p>
      ) : null}
    </div>
  );
}

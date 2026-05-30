import BrandLogo from './BrandLogo';

export default function MaintenanceScreen() {
  return (
    <section
      className="flex min-h-[calc(100svh-7.5rem)] flex-col items-center justify-center px-6 py-16 text-center"
      aria-labelledby="maintenance-heading"
    >
      <BrandLogo href={null} imageClassName="h-12 w-auto object-contain opacity-90" />
      <p className="mt-8 font-sans text-[10px] font-medium uppercase tracking-[0.32em] text-[var(--color-foreground-subtle)]">
        Maintenance
      </p>
      <h1
        id="maintenance-heading"
        className="mt-4 font-syne text-3xl font-bold uppercase leading-tight tracking-tight text-[var(--color-foreground)] sm:text-4xl"
      >
        Back shortly
      </h1>
      <p className="mt-5 max-w-md font-sans text-sm leading-relaxed text-gray-400 sm:text-base">
        The site is undergoing scheduled updates. Please check again soon.
      </p>
    </section>
  );
}

/** Editorial monochrome UI — theme-aware via CSS variables */

export const PAGE = {
  shell: 'min-h-screen bg-[var(--color-surface)] text-[var(--color-foreground)]',
  inner: 'mx-auto w-full max-w-7xl px-5 sm:px-8 md:px-12',
  sectionPad: 'py-12 md:py-16 lg:py-20',
  altSection: 'bg-[var(--color-surface)]',
  heroSection: 'bg-[var(--color-surface)]',
};

export const NEU = {
  section: 'relative overflow-hidden bg-[var(--color-surface)]',
  sectionPad: 'px-5 py-12 sm:px-8 md:px-12 md:py-16 lg:py-20',
  sectionPadMd: 'px-5 py-10 sm:px-8 md:px-12 md:py-16',
  card: 'border border-[var(--color-border)] bg-[var(--color-surface)] transition duration-300 hover:border-[var(--color-border-strong)]',
  cardStatic: 'border border-[var(--color-border)] bg-[var(--color-surface)]',
  eyebrow:
    'font-sans text-[10px] font-medium uppercase tracking-[0.32em] text-[var(--color-foreground-subtle)]',
  display: 'font-syne font-bold uppercase tracking-[0.04em] text-[var(--color-foreground)]',
  displayHero:
    'font-syne font-bold uppercase leading-[0.88] tracking-[-0.02em] text-[var(--color-foreground)]',
  displayGhost:
    'pointer-events-none select-none font-syne font-bold uppercase leading-none tracking-tight text-[var(--color-foreground-ghost)]',
  badge:
    'inline-flex items-center border border-[var(--color-border-strong)] px-3 py-1 font-sans text-[10px] font-medium uppercase tracking-[0.24em] text-[var(--color-foreground-soft)]',
  btn: `inline-flex items-center justify-center border border-[var(--color-border-strong)] bg-transparent px-6 py-3 font-sans text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--color-foreground)] transition hover:bg-[var(--color-primary-bg)] hover:text-[var(--color-primary-fg)]`,
  btnPrimary: `inline-flex items-center justify-center border border-[var(--color-primary-bg)] bg-[var(--color-primary-bg)] px-6 py-3 font-sans text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--color-primary-fg)] transition hover:bg-transparent hover:text-[var(--color-primary-bg)]`,
  contactBg: 'bg-[var(--color-surface)] text-[var(--color-foreground)]',
  formCard: 'border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-8',
  frame: 'overflow-hidden border border-[var(--color-border)]',
  pageRoot: 'min-h-screen bg-[var(--color-surface)] text-[var(--color-foreground)] transition-colors duration-300',
  pageShell: 'overflow-x-hidden bg-[var(--color-surface)]',
  modalPanel:
    'mx-4 max-w-md border border-[var(--color-border)] bg-[var(--color-surface)] p-6 text-center text-[var(--color-foreground)]',
  techTag:
    'inline-flex border border-[var(--color-border)] px-2.5 py-1 font-sans text-[10px] font-medium uppercase tracking-[0.16em] text-[var(--color-foreground-muted)]',
  bodyText:
    'font-sans text-sm leading-relaxed text-[var(--color-foreground-muted)] md:text-[15px]',
  link: 'font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--color-foreground-soft)] underline-offset-4 transition hover:text-[var(--color-foreground)]',
  contactHeroMuted: 'text-[var(--color-foreground-muted)]',
  contactHeroDisplay: 'font-syne font-bold uppercase tracking-tight text-[var(--color-foreground)]',
  contactSticker:
    'mt-2 inline-block border border-[var(--color-border-strong)] px-4 py-1.5 font-sans text-[10px] uppercase tracking-[0.2em] text-[var(--color-foreground-soft)]',
  sectionIndex: 'font-sans text-sm font-medium tabular-nums text-[var(--color-foreground-faint)]',
  navLink:
    'font-sans text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--color-foreground-subtle)] transition hover:text-[var(--color-foreground)]',
  navLinkActive: 'text-[var(--color-foreground)]',
  headerShell: 'border-b border-[var(--color-border)] bg-[var(--color-header)] backdrop-blur-md',
  gridLine: 'bg-[var(--color-grid-line)]',
  surface: 'bg-[var(--color-surface)]',
  surfaceElevated: 'bg-[var(--color-surface-elevated)]',
  hoverSurface: 'hover:bg-[var(--color-hover)]',
};

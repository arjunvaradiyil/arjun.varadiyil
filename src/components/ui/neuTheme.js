/** Shared ServiceNeu-style surfaces (Tailwind class strings).
 *  Palette: warm paper / ink surfaces, amber + indigo accents (replaces cool sky defaults).
 */

export const NEU = {
  section: 'relative overflow-hidden bg-[#f5f2ea] dark:bg-[#0e0d12]',
  sectionPad: 'px-6 py-20 md:px-16 md:py-24 lg:px-24 lg:py-28',
  sectionPadMd: 'px-6 py-16 md:px-16 md:py-20 lg:px-24',
  /** Interactive card shell (add padding in the component) */
  card: `rounded-xl border-2 border-gray-900 bg-white shadow-[6px_6px_0_0_rgb(17,24,39)]
    transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[8px_8px_0_0_rgb(17,24,39)]
    dark:border-white dark:bg-zinc-900 dark:shadow-[6px_6px_0_0_rgb(255,255,255)] dark:hover:shadow-[8px_8px_0_0_rgb(255,255,255)]`,
  /** Card shell without hover motion */
  cardStatic: `rounded-xl border-2 border-gray-900 bg-white shadow-[6px_6px_0_0_rgb(17,24,39)]
    dark:border-white dark:bg-zinc-900 dark:shadow-[6px_6px_0_0_rgb(255,255,255)]`,
  eyebrow: 'font-sans text-sm font-medium tracking-wide text-gray-500 dark:text-gray-400',
  display: 'font-syne font-bold tracking-tight text-gray-900 dark:text-white',
  badge:
    'inline-flex items-center gap-2 border-2 border-gray-900 bg-white px-3 py-1.5 text-xs font-bold tracking-wide text-gray-900 shadow-[4px_4px_0_0_rgb(17,24,39)] dark:border-white dark:bg-zinc-900 dark:text-white dark:shadow-[4px_4px_0_0_rgb(255,255,255)]',
  btn: `rounded-lg border-2 border-gray-900 bg-white px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-gray-900 shadow-[4px_4px_0_0_rgb(17,24,39)]
    transition hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_rgb(17,24,39)] active:translate-y-0
    dark:border-white dark:bg-zinc-900 dark:text-white dark:shadow-[4px_4px_0_0_rgb(255,255,255)]`,
  btnPrimary: `rounded-lg border-2 border-gray-900 bg-indigo-950 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-[#f5f2ea] shadow-[5px_5px_0_0_rgb(245_158_11)]
    transition hover:-translate-y-0.5 hover:bg-indigo-900 hover:shadow-[6px_6px_0_0_rgb(245_158_11)] active:translate-y-0
    dark:border-amber-400 dark:bg-amber-400 dark:text-gray-950 dark:shadow-[5px_5px_0_0_rgb(255,255,255)] dark:hover:bg-amber-300`,
  /** Contact band — warm cream surface (same in light/dark for a clear “paper” block) */
  contactBg: 'bg-[#f5f2ea] text-gray-900',
  formCard: `rounded-xl border-2 border-gray-900 bg-white p-6 text-gray-900 shadow-[8px_8px_0_0_rgb(99_102_241)] sm:p-8`,
  frame: `rounded-xl border-2 border-gray-900 shadow-[8px_8px_0_0_rgb(17,24,39)] dark:shadow-[8px_8px_0_0_rgb(255,255,255)]`,
  /** Root wrapper behind all routes (matches section surfaces) */
  pageRoot:
    'min-h-screen bg-[#f5f2ea] text-gray-900 transition-opacity duration-300 dark:bg-[#0e0d12] dark:text-gray-100',
  pageShell: 'overflow-x-hidden bg-[#f5f2ea] dark:bg-[#0e0d12]',
  modalPanel:
    'mx-4 max-w-md rounded-xl border-2 border-gray-900 bg-[#f5f2ea] p-6 text-center text-gray-900 shadow-[8px_8px_0_0_rgb(99_102_241)] dark:border-white dark:bg-zinc-900 dark:text-white dark:shadow-[8px_8px_0_0_rgb(251_191_36)]',
  techTag:
    'inline-flex border-2 border-gray-900 bg-white px-3 py-1 text-sm font-semibold text-gray-900 dark:border-white dark:bg-zinc-800 dark:text-gray-100',
  bodyText: 'text-gray-800 dark:text-gray-300',
  link: 'font-semibold text-indigo-800 underline-offset-4 hover:underline dark:text-amber-400',
  /** Large word on contact hero (e.g. “Ready?”) — on cream, readable */
  contactHeroMuted: 'text-indigo-900 dark:text-indigo-200',
  /** Primary line on contact hero — on cream */
  contactHeroDisplay: 'font-syne font-bold tracking-tight text-gray-900',
  /** “Let’s talk” sticker on contact */
  contactSticker:
    'mt-2 inline-block border-2 border-gray-900 bg-white px-3 py-1 text-gray-900 shadow-[6px_6px_0_0_rgb(245_158_11)]',
};

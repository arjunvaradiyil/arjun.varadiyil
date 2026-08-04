/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/app/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-syne)', 'var(--font-inter)', 'ui-sans-serif', 'system-ui'],
        syne: ['var(--font-syne)', 'sans-serif'],
        display: ['var(--font-space-grotesk)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'ui-monospace', 'monospace'],
        anton: ['"Anton"', '"Anton Placeholder"', 'sans-serif'],
        antonio: ['Antonio', 'sans-serif'],
      },
      colors: {
        brand: {
          accent: '#ff5e3a',
          coral: '#e8927c',
        },
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        marqueeReverse: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        'marquee-reverse': 'marqueeReverse 25s linear infinite',
      },
    },
  },
  plugins: [],
};

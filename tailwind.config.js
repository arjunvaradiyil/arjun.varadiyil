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
        anton: ['"Anton"', '"Anton Placeholder"', 'sans-serif'],
        antonio: ['Antonio', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

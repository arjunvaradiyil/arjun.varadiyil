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
        sans: ["Syne", "Inter", "ui-sans-serif", "system-ui"],
        syne: ["Syne", "sans-serif"],
        anton: ['"Anton"', '"Anton Placeholder"', 'sans-serif'],
        antonio: ["Antonio", "sans-serif"],
      },
    },
  },
  plugins: [],
};

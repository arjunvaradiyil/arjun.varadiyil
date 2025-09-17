/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",             // ✅ include root HTML
    "./src/**/*.{js,jsx,ts,tsx}" // ✅ include all React files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

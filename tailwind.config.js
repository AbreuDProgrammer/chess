/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      spacing: {
        'table': '45rem',
        'encapsulation': '3rem',
      },
      gridRow: {
        'span-9': 'span 9 / span 9',
      }
    },
  },
  plugins: [],
}

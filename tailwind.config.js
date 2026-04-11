/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-navy': '#001F3F',
        'vibrant-pink': '#E91E63',
      }
    },
  },
  plugins: [],
}

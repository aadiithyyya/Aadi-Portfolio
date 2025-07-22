/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  // Scan all components/pages
    "./public/index.html"          // Scan HTML (optional)
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

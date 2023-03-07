/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary':'#77001e',
      'secondary':'#943f49',
      'gray': '#e9e9e9'
    },
    extend: {},
  },
  plugins: [],
}
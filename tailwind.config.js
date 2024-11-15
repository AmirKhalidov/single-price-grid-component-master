/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Karla', 'ui-sans-serif', 'system-ui'], // Replace 'sans' with a custom name if needed
      },
    },
  },
  plugins: [],
}
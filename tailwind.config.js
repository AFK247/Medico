/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'dmserif': ['DM Serif', 'serif'],
        'com': ['Comfortaa', 'cursive'],
      }
    },
  },
  plugins: [require("daisyui")],
}
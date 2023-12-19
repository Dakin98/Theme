/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layout/*.liquid",
    "./sections/*.liquid",
    ".snippet/*.liquid",
    ".templates/customers/*.liquid",
    "./templates/*.liquid"

],
  theme: {
    colors:{
      jet: "#2D2E2E",
    },
    extend: {},
  },
  plugins: [],
}
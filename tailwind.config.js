/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    letterSpacing: {
      tight: '0.05em'
    },
    extend: {
      height: {
        'half-screen': '50vh'
      }
    },
    fontFamily: {
      nm: ["Neue Montreal", "sans-serif"],
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily: {
        'custom': ['Kanit', 'fallbackFont', 'sans-serif']
      },
      colors: {
        'backgroundcolor1': 'var(--backgroundcolor1)',
        'navcolor': 'var(--navcolor)',
        'textcolor1': 'var(--textcolor1)',
        'textcolor2': 'var(--textcolor2)',
        'color3': 'var(--color3)',
        'color1': 'var(--color1)',
      }
    },
  },
  plugins: [],
}

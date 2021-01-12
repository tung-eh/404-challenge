const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateRows: {
        layout: 'auto 1fr auto',
      },
      gridTemplateColumns: {
        'one-col': '1fr',
        'two-cols': '2fr 3fr',
      },
      colors: {
        gray: colors.trueGray,
      },
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
      mono: ['"Space Mono"', 'mono'],
      logo: ['Inconsolata', 'sans-serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

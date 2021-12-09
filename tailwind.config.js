const { coolGray } = require('tailwindcss/colors')
const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      blueGray: colors.blueGray,
      coolGray: colors.coolGray,
      gray: colors.gray,
      trueGray: colors.trueGray,
      warmGrey: colors.warmGray,
      red: colors.red,
      orange: colors.orange,
      amber: colors.amber,
      yellow: colors.yellow,
      blue: colors.sky,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

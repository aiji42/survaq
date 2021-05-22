const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  purge: ['./src/**/*.{ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['YakuHanJP', '"Noto Sans JP"', ...defaultTheme.fontFamily.sans],
      title: ['Georgia']
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

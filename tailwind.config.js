module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Work Sans', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {
      animation: ['hover', 'focus'],
      transform: ['hover', 'focus'],
      transitionProperty: ['hover', 'focus'],
    },
  },
  plugins: [],
}

const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // colors: { ...colors, ...myColors },
    extend: {
      colors: {
        primary: {
          200: '#ff99ff',
          300: '#ff66ff',
          400: '#ff33ff',
          500: '#ff00ff',
          600: '#cc00cc',
          700: '#990099',
          800: '#660066',
        },
        secondary: {
          200: '#9cd1fc',
          300: '#6bbafa',
          400: '#39a3f9',
          500: '#088bf7',
          600: '#0670c6',
          700: '#055494',
          800: '#033863',
        },
        ...colors,
      },
      fontFamily: {
        aldrich: ['Aldrich'],
      },
      zIndex: {
        '-10': '-10',
      },
      animation: {
        hue: 'hue 3s infinite alternate',
      },
      keyframes: {
        hue: {
          '0%': {
            filter: 'hue-rotate(0deg)',
          },
          '100%': {
            filter: 'hue-rotate(90deg)',
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

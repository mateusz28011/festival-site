const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
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
        '-20': '-20',
      },
      animation: {
        hue: 'hue 3s infinite alternate',
        logomobileopacity: 'logoopacity 300ms ease-out 2 alternate',
        logomobilescale: 'logoscale 300ms ease-out 2 alternate',
        updown: 'updown 7s ease-in-out infinite alternate',
      },
      keyframes: {
        hue: {
          '0%': {
            filter: 'hue-rotate(90deg)',
          },
          '100%': {
            filter: 'hue-rotate(0deg)',
          },
        },
        logoopacity: {
          '100%': {
            opacity: '1',
          },
        },
        logoscale: {
          '100%': {
            transform: 'scale(1.1,1.1)',
          },
        },
        updown: {
          '0%': {
            transform: 'translate(0, 0)',
          },
          '33%': {
            transform: 'translate(0, 30px)',
          },
          '66%': {
            transform: 'translate(0, 0)',
          },
          '100%': {
            transform: 'translate(0, -25px)',
          },
        },
      },
      scale: {
        '-1': '-1',
      },
      height: {
        '7/12': '58.333333%',
        '8/12': '66.666667%',
        '9/12': '75%',
        '10/12': '83.333333%',
        '11/12': '91.666667%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

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
        opacity: 'opacity 300ms ease-out 2 alternate',
        scale: 'scale 300ms ease-out 2 alternate',
        updown: 'updown 7s ease-in-out infinite alternate',
        leftright: 'leftright 7s ease-in-out infinite alternate',
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
        opacity: {
          '100%': {
            opacity: '1',
          },
        },
        scale: {
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
        leftright: {
          '0%': {
            transform: 'translate(0, 0)',
          },
          '33%': {
            transform: 'translate(30px,0)',
          },
          '66%': {
            transform: 'translate(0, 0)',
          },
          '100%': {
            transform: 'translate(-30px,0)',
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
    extend: {
      backgroundColor: ['active'],
    },
  },
  plugins: [],
};

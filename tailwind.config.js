/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,md,njk,ejs,pug,js}"],
  theme: {
    extend: {
      colors: {
        backyard: {
          200: '#ffd580',
        },
        'desert-brush': {
          300: '#8a9a5b',
        },
        onion: {
          300: '#c36876',
        },
        sand: {
          400: '#c2b280',
        },
      },
      fontFamily: {
        rubik: ['Rubik Mono One', 'monospace'],
      },
      transitionDuration: {
        '10000': '10000ms',
      }
    },
  },
  plugins: [],
};

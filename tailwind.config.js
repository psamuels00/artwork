/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,md,njk,ejs,pug}"],
  theme: {
    extend: {
      colors: {
        backyard: {
          200: '#ffd580',
        },
        desert_brush: {
          300: '#8a9a5b',
        },
        onion: {
          300: '#c36876',
        },
        sand: {
          400: '#c2b280',
        },
      },
      maxHeight: {
        // 142px and 205px are the combined height of the navigation headers
        // 10px is an arbitrary margin
        fit_in_viewport: 'calc(100vh - 142px - 10px)',
        fit_in_viewport_lg: 'calc(100vh - 205px - 10px)',

        // and similarly for single image pages, except no margin needed bc images have padding
        fit_in_viewport_single: 'calc(100vh - 144px)',
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,md,njk,ejs,pug,js}"],
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
        // 210px and 105px allow room for the Title and first line of Description to be seen
        fit_in_viewport: 'calc(100vh - 142px - 10px - 210px)',
        fit_in_viewport_lg: 'calc(100vh - 205px - 10px - 105px)',

        // and similarly for single image pages, except no margin needed bc images have padding
        // ...although  there is a mystery 110px additional adjustment needed for iPhone!?
        fit_in_viewport_single: 'calc(100vh - 144px - 110px)',
        fit_in_viewport_single_sm: 'calc(100vh - 144px)',
      },
    },
  },
  plugins: [],
};

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
        // For top image on Portfolio project pages
        //   o  142px and 205px are the combined height of the navigation headers
        //   o  10px is an arbitrary margin
        //   o  210px and 105px allow room for the Title and first line of Description to be seen
        fit_in_viewport: 'calc(100vh - 142px - 10px - 210px)',
        fit_in_viewport_lg: 'calc(100vh - 205px - 10px - 105px)',

        // For Doodles single-image pages
        //   o  144px is the combined height of the navigation headers
        //   o  no extra margin is needed because the images all have padding
        //   o  110px is a hack to compensate for browser navigation controls covering part of
        //      the viewport on iPhone and other mobile devices.  This is a subject of hot debate
        //      and hack proposals abound.  As I couldn't get any of the more effective-looking
        //      hacks to work, this dreadful one remains.
        fit_in_viewport_single: 'calc(100vh - 144px - 110px)',
        fit_in_viewport_single_sm: 'calc(100vh - 144px)',
      },
    },
  },
  plugins: [],
};

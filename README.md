# Perrin's Art

[perrins-art.com](https://perrins-art.com/)
to show my artwork and to learn some new tools for front-end Web development.

- 11ty - Static Site builder
- Nunjucks - Javascript templating
- Tailwind CSS - Utility-based styling framework


## Development Environment

To build the pages and serve them up during development, run the following commands in separate windows:

    npm run css   # Tailwind transformations
    npm start     # Build pages and run 11ty server

...or start both in the same terminal:

    npm run develop

Then access the site at http://0.0.0.0:8080/


## TODO

### High priority
_None_

### Medium priority
- get some better pics of the Beach Boardwalk

### Low priority

**UI bug fixes**
- properly fix the mobile viewport problem instead of using my max-h-fit_in_viewport* hack
- pic at top of project page not showing at all on iPhone in landscape orientation
- swipe left/right on body works well for swipe, but you cannot select any text on a page
- swipe left/right works on my Mac browser, with the track pad/mouse, which is annoying

**UI design**
- redesign image page navigation so fingers do not cover image to reach controls,
  maybe eliminate first/last, allow tap on left/right side of image to go to
  prev/next, and have separate link for "hi-res"
- the "X" or Escape to leave image page always takes the user to top of previous page
- maybe display N/M (project #N of M projects) with project title in mobile menu
- somehow the site navigation options need to be presented, including keyboard
  arrow keys, swipe left/right, and prev/next/first/last on image pages

**UI tweaks**
- overall more consistency with the break points across pages: sm, md, lg
- add margin below secondary doodles menu on mobile, there is none in landscape orientation
- improve alignment of secondary hamburger menu; improve consistency of margin around
  secondary hamburger menu on general or specific doodle/portfolio page
- add support for dark backgrounds, esp to use black for The Demo
- maybe add Next/Prev buttons to bottom of project pages
- maybe transition page loads more smoothly

**Refactor code**
- maybe build portfolio menu from data in projects.js, including new ordering options
- use prev/next/first/last page/href provided by 11ty, if possible instead of my own

**New features**
- serve the highest quality file on click-through, which is not a png generated from a jpg
- maybe add descriptions for each project image

**Performance improvements**
- maybe shrink more images for faster page loads

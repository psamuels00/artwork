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
- add margin below secondary doodles menu on mobile, there is none in landscape orientation

**UI design**
- redesign image page navigation so fingers do not cover image to reach controls,
  maybe eliminate first/last, allow tap on left/right side of image to go to
  prev/next, and have separate link for "hi-res"
- the "X" or Escape to leave image page always takes the user to top of previous page
- maybe display N/M (project #N of M projects) with project title in mobile menu

**UI tweaks**
- clean up image names
- overall more consistency with the break points across pages: sm, md, lg
- add support for dark backgrounds, esp to use black for The Demo
- add alt tag to all images
- maybe add floating button to quickly jump to top of any long page
- maybe add Next/Prev buttons to bottom of project pages
- maybe transition page loads more smoothly

**Refactor code**
- maybe build portfolio menu from data in projects.js, including new ordering options

**New features**
- maybe add descriptions for each project image

**Performance improvements**
- maybe shrink more images for faster page loads

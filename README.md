# Perrin's Artwork

[Web site](https://psamuels00.github.io/artwork/)
to show my artwork and to learn some new tools for front-end Web development.

- 11ty - Static Site builder
- Nunjucks - Javascript templating
- Tailwind CSS - Styling framework


## Development Environment

To build the pages and serve them up during development, run the following commands in separate windows:

    npm run css   # Tailwind transformations
    npm start     # Build pages and run 11ty server

...or start both in the same terminal:

    npm run develop

Then access the site at http://0.0.0.0:8080/artwork/.


## Generated Doodle Image Pages

_In retrospect, this can be done using 11ty pagination (as was done subsequently
for the Portfolio pages).  See TODO._

There is a separate page for each doodle image.  These pages are generated automatically.
When a change is made to the images included under each doodle category, or if the order
of the images on the category page has changed, regenerate the image pages:

    misc/generate_doodle_image_pages.py

This script parses src/doodles/\*.html files in a simplistic way.  Please review it
after making formatting changes to one of the files that is parsed.


## TODO

### High priority
_None_

### Medium priority
- get some better pics of the Beach Boardwalk
- get it working on perrin-art.com

### Low priority

**Rewrite to improve code and fully embrace Eleventy**
- use 11ty features to replace generate_doodle_image_pages.py
- product_image.html should use layouts/image.html for more DRYness
- build portfolio menu from data in projects.js, including new ordering options

**Rewrite to improve code and fully embrace Tailwind**
- rewrite the home page to make it more DRY
- update the doodles main page to simplify the markup and improve spacing for mobile

**UI design**
- redesign image page navigation so fingers do not cover image to reach controls,
  maybe eliminate first/last, allow tap on left/right side of image to go to
  prev/next, and have separate link for "hi-res"
- the "X" to leave image page always takes the user to top of previous page
- maybe list the doodles in alphabetical order so they match the menus, at least on mobile
- maybe display N/M (project #N of M projects) with project title in mobile menu

**UI tweak**
- clean up image names and be consistent with slugs vs TitleCase in dir/file names and URLs
- overall more consistency with the break points across pages: sm, md, lg
- add support for dark backgrounds, esp to use black for The Demo
- maybe show two categories/pics per row on doodles main page on mobile
- maybe add floating button to quickly jump to top of any long page
- maybe add Next/Prev buttons to bottom of project pages
- maybe transition page loads more smoothly

**UI fix**
- pic at top of project page not showing at all on iPhone in landscape orientation
- add margin below secondary doodles menu on mobile, there is none in landscape orientation

**New feature**
- maybe add descriptions for each project image

**Performance improvement**
- maybe shrink more images for faster page loads


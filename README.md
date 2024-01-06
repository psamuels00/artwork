# Perrin's Artwork

Web site to show my artwork and to learn some new tools for front-end Web site creation.


## Tools

- 11ty - Static Site builder
- Nunjucks - Javascript templating
- Tailwind CSS - Styling framework
- Alpine.js - modern approach to jQuery
- Python - generate pages


## Development Environment

To build the pages and serve them up during development, run the following commands in separate windows:

    npm run css - Tailwind transformations
    npm start - Build pages and run 11ty server

Then access the site at http://localhost:8080.


## Generated Doodle Image Pages

_In retrospect, this can be done using 11ty pagination and should be removed.  See TODO._

There is a separate page for each doodle image.  These pages are generated automatically.
When a change is made to the images included under each doodle category, or if the order
of the images on the category page has changed, regenerate the image pages:

    misc/generate_doodle_image_pages.py

This script parses src/doodles/\*.html files in a simplistic way.  Please review it
after making formatting changes to one of the files that is parsed.


## Maybe Useful Links

11ty - Static Site Builder
- Tutorials: https://www.11ty.dev/docs/tutorials/

Nunjucks - Javascript templating
- Tutorial: https://learneleventyfromscratch.com/lesson/3.html#what-is-nunjucks
- Reference: https://mozilla.github.io/nunjucks/templating.html

Tailwind CSS - Styling framework
- https://tailwindcss.com/
- https://everythingcs.dev/blog/setup-tailwindcss-eleventy/
- https://css-tricks.com/eleventy-starter-with-tailwind-css-alpine-js/
- https://css-tricks.com/alpine-js-the-javascript-framework-thats-used-like-jquery-written-like-vue-and-inspired-by-tailwindcss/
- https://codepen.io/chris__sev/pen/QWGjQK
- https://v1.tailwindcss.com/components/buttons
- https://www.kindacode.com/article/tailwind-css-how-to-create-a-full-screen-overlay-menu/

Alpine.js - modern approach to jQuery
- https://alpinejs.dev/start-here


## TODO
- add title to top of mobile pages, eg: "Portfolio"
- show doodles menu on main doodles page for non-mobile
- add image pages for projects
- add a projects submenu similar to doodles

- add descriptons for each project
- add descriptions for each project image
- improve doodles main page, for mobile, simplify the markup
- ensure fully contained image on image pages, also first project image
- allow navigation of primary menus with left/right arrow keys on the keyboard
- floating button to quickly jump to top of any long page
- redesign image page navigation so fingers do not cover image to reach controls
- transition page loads more smoothly (maybe)
- shrink all images for fast page loads
- replace generate_doodle_image_pages.py with the 11ty approach
- upload everything and deploy to Github Pages

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

...or start both in the same terminal:

    npm run develop

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

### High priority
- upload everything and deploy to Github Pages

### Medium priority
- ensure fully contained image on image pages, also first project image
- eliminate cursor-not-allowed on doodles image page since it doesn't work for mobile
- update the doodles main page to simplify the markup and improve spacing for mobile
- remove redundancy from image names and take full advantage of slugs
- create a filter for replace(r/([a-z])([A-Z])/g, "$1 $2") if not replaced by slugs
- ESC does not work consistently on image pages (it used to before project image pages)
- product_image.html should use layouts/image.html for more DRYness
- move PerrinLogo.png to src/images/meta and remove src/images/home/*

### Low priority
- the "X" to leave an image page is not great because it always takes you to the top of the portfolio or doodles page
- overall more consistency with the break points: sm, md, lg
- redesign image page navigation so fingers do not cover image to reach controls
- add descriptions for each project image
- allow navigation of primary menus and submenus with left/right arrow keys on the keyboard
- add floating button to quickly jump to top of any long page
- rewrite the home page to make it more DRY
- use 11ty features to replace generate_doodle_image_pages.py
- eliminate the categories directory in /images/doodles/categories/*
- transition page loads more smoothly (maybe)
- shrink all images further for fast page loads (maybe)

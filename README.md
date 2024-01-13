# Perrin's Artwork

[Web site](https://psamuels00.github.io/artwork/)
to show my artwork and to learn some new tools for front-end Web development.


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


## Data-driven Colors for Project Pages

Each portfolio project has an associated color, namely for the page background.
These are not recognized by Tailwind.  As a workaround, a bogus file named
project_colors.html is maintained with a reference to each color that is
referenced in _data/projects.js.

There must be a better way to handle colors referenced only in a data file.


## Generated Doodle Image Pages

_In retrospect, this can be done using 11ty pagination and should be removed.  See TODO._

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

### Low priority

**New feature**
- add descriptions for each project image
- when user clicks on image on single image page, show a high-res version of the image,
  or at least for key images; maybe add "high-res" link on project page in info box.

**Performance improvement**
- shrink more images for faster page loads (maybe)

**Rewrite to fully embrace Eleventy**
- use 11ty features to replace generate_doodle_image_pages.py
- product_image.html should use layouts/image.html for more DRYness
- build portfolio menu from data in projects.js, including new ordering options

**Rewrite to fully embrace Tailwind**
- rewrite the home page to make it more DRY
- update the doodles main page to simplify the markup and improve spacing for mobile
- eliminate the "totalHack" in portfolio.html
- Eliminate the need for project_colors.html.
  But how?... Maybe using @apply in a custom style sheet??

**Restructure**
- move PerrinLogo.png to src/images/meta and remove src/images/home
- eliminate the categories directory in /images/doodles/categories/*
- try moving project.html, project_image.html, and project_colors.html to portfolio/

**UI design**
- add support for dark backgrounds, esp to use black for The Demo
- display N/M (project #N of M projects) with project title in mobile menu
- overall more consistency with the break points across pages: sm, md, lg
- the "X" to leave image page always takes the user to top of previous page
- add floating button to quickly jump to top of any long page
- transition page loads more smoothly (maybe)
- remove redundancy from image names and take full advantage of slugs
- create a filter for replace(r/([a-z])([A-Z])/g, "$1 $2") if not replaced by slugs
- redesign image page navigation so fingers do not cover image to reach controls
- add Next/Prev buttons to bottom of project pages
- maybe show two categories/pics per row on doodles main page on mobile
- maybe list the doodles in alphabetical order so they match the menus, at least on mobile

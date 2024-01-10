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
_none_

### Medium priority
- redesign image page navigation so fingers do not cover image to reach controls
- ensure top image on project page fits on screen fully

### Low priority

**New feature**
- add descriptions for each project image

**Performance improvement**
- shrink all images further for faster page loads (maybe)

**Rewrite to fully embrace Eleventy**
- use 11ty features to replace generate_doodle_image_pages.py
- product_image.html should use layouts/image.html for more DRYness

**Rewrite to fully embrace Tailwind**
- rewrite the home page to make it more DRY
- update the doodles main page to simplify the markup and improve spacing for mobile

**Restructure**
- move PerrinLogo.png to src/images/meta and remove src/images/home/*
- eliminate the categories directory in /images/doodles/categories/*

**UI design**
- eliminate cursor-not-allowed on doodles image page since it doesn't work for mobile
- the "X" to leave image page always goes to top of previous page
- overall more consistency with the break points: sm, md, lg
- add floating button to quickly jump to top of any long page
- transition page loads more smoothly (maybe)
- remove redundancy from image names and take full advantage of slugs
- create a filter for replace(r/([a-z])([A-Z])/g, "$1 $2") if not replaced by slugs

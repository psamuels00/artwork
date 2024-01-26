# Perrin's Art

This is a personal, static Web site built to show my artwork and to learn 11ty.

See [perrins-art.com](https://perrins-art.com/).


## Tech Stack

- 11ty - Static Site builder
- Nunjucks - Javascript templating
- Tailwind CSS - Utility-based styling framework
- Github Pages - Hosting
- Github Actions - Deployment


## Develop

To build the pages and serve them up during development, run the following commands in separate windows:

    npm run css   # Tailwind transformations
    npm start     # Build pages and run 11ty server

...or start both in the same terminal:

    npm run develop

Then access the site at http://0.0.0.0:8080/


## Test

The following command will check for broken links.

    npm test   # Run Linkinator


## Deploy

The following command will publish updates to the site.

    git push

Before the site is published to GitHub pages, the Linkinator test must pass.


## TODO

### High priority
_None_

### Medium priority
- Get some better pics of the Beach Boardwalk

### Low priority

**UI design**
- Add support for dark backgrounds, esp to use black for The Demo

**UI tweaks**
- Overall more consistency with the break points across pages: sm, md, lg
- Add margin below secondary doodles menu on mobile, there is none in landscape orientation
- Improve alignment of secondary hamburger menu; improve consistency of margin around
  secondary hamburger menu on general or specific doodle/portfolio page
- Make sure the footer is always at the bottom of the page, eg, see About in full window mode
- _Maybe_ add Next/Prev buttons to bottom of project pages
- _Maybe_ transition page loads more smoothly

**Refactor code**
- _Maybe_ use prev/next/first/last page/href provided by 11ty, where possible instead of my own
- _Maybe_ build portfolio menu from data in projects.js, including new ordering options

**New features**
- _Maybe_ add descriptions for each project image

**Other**
- _Maybe_ use favicons instead of eleventy-plugin-gen-favicons, or fork the latter for my use
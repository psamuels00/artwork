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
- The "X" or Escape to leave image page always takes the user to top of previous page
- Somehow the site navigation options need to be presented, including keyboard
  arrow keys, swipe left/right, and <<</prev/next/>>> buttons on image pages
- _Maybe_ display N/M (project #N of M projects) with project title in mobile menu

**UI tweaks**
- Overall more consistency with the break points across pages: sm, md, lg
- Add margin below secondary doodles menu on mobile, there is none in landscape orientation
- Improve alignment of secondary hamburger menu; improve consistency of margin around
  secondary hamburger menu on general or specific doodle/portfolio page
- Add support for dark backgrounds, esp to use black for The Demo
- Make sure the footer is always at the bottom of the page, eg, see About in full window mode
- _Maybe_ add Next/Prev buttons to bottom of project pages
- _Maybe_ transition page loads more smoothly

**Refactor code**
- Use prev/next/first/last page/href provided by 11ty, if possible instead of my own
- _Maybe_ build portfolio menu from data in projects.js, including new ordering options

**New features**
- Serve the highest quality file on click-through, which is not a png generated from a jpg
- _Maybe_ add descriptions for each project image

**Performance improvements**
- _Maybe_  shrink more images for faster page loads

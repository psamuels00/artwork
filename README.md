# Perrin's Art

Personal Web site to show my artwork and learn 11ty.
See [perrins-art.com](https://perrins-art.com/).


## Tech Stack

- 11ty - Static Site builder
- Nunjucks - Javascript templating
- Tailwind CSS - Utility-based styling framework
- Github Pages - Hosting
- Github Actions - Deployment

Extra functionality:
- [@11ty/eleventy-img](https://www.npmjs.com/package/@11ty/eleventy-img) - optimize images, generating multiple sizes,
  considerably speed up site
- [@quasibit/eleventy-plugin-sitemap](https://www.npmjs.com/package/@quasibit/eleventy-plugin-sitemap) - make a site map
- [favicons](https://www.npmjs.com/package/favicons) - generate favicons and HTML to link them
- [hammerjs](https://www.npmjs.com/package/hammerjs) - support for swipe left/right
- [html-minifier-terser](https://www.npmjs.com/package/html-minifier-terser) - reduce size of HTML delivered
- [http-server](https://www.npmjs.com/package/http-server) - used to run Linkinator before public deployment
- [image-size](https://www.npmjs.com/package/image-size) - used to determine image orientation (portrait/landscape)
- [linkinator](https://www.npmjs.com/package/linkinator) - check for broken links, used to gate deployment


## Develop

To build the pages and serve them up during development, run the following commands in separate windows:

    npm run css   # Tailwind transformations
    npm start     # Build pages and run 11ty server

...or start both in the same terminal:

    npm run develop

Then access the site at http://0.0.0.0:8080/


## Update Favicons

If any change is made to the image used for favicons, then the favicons need to be
regenerated as follows:

    npm run favicons


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

**UI tweaks**
- Improve alignment of secondary hamburger menu; improve consistency of margin around
  secondary hamburger menu on general or specific doodle/portfolio page
- Make sure the footer is always at the bottom of the page, eg, see About in full window mode

**Performance/Accessibility**
- Study reports from the following for more recommendations:
  - Google's PageSpeed Insights
  - Catchpoint's Webpage Test

**Refactor code**
- _Maybe_ use prev/next/first/last page/href provided by 11ty, where possible instead of my own
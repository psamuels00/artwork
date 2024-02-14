# Perrin's Art

Personal Web site to show my artwork and learn 11ty.
See [perrins-art.com](https://perrins-art.com/).


## Tech Stack

- 11ty - Static Site builder
- Nunjucks - Javascript templating
- Alpine.js - Lightweight framework, replaces jQuery
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

To build and serve the pages during development, run the following commands in separate windows:

    npm run develop-css       # Tailwind transformations
    npm run develop-eleventy  # Build pages and run 11ty server

...or start both in the same terminal:

    npm run develop

Then access the site at http://0.0.0.0:8080/


## Test

The following command will check for empty generated files and broken links.

    npm test


## Deploy

The following command will publish updates to the site.

    git push

Before the site is published to GitHub pages, the tests must pass.


## TODO

**Content**
- Get some better pics of the Beach Boardwalk

**UI Tweak**
- The first image on a portfolio project page does not render well in some cases,
  namely on my iPhone in landscape orientation.

**Performance/Accessibility**
- Study reports from the following for more recommendations:
  - Google's PageSpeed Insights
  - Catchpoint's Webpage Test

**New Features**
- Add search capability.  Get smart with automatically generated tags for all images.
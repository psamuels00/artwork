import { EleventyHtmlBasePlugin } from '@11ty/eleventy';
import sitemap from '@quasibit/eleventy-plugin-sitemap';

import filters from './src/_eleventy/filter/_all.js';
import shortcodes from './src/_eleventy/shortcode/_all.js';
import transforms from './src/_eleventy/transform/_all.js';


export default (config) => {
  // logging
  config.setQuietMode(true);

  // copy files
  config.addPassthroughCopy({
    'build/': '/',
  });
  config.addPassthroughCopy({
    'src/_docs/': 'assets/docs/',
  });
  config.addPassthroughCopy({
    'src/_includes/favicons/': 'assets/favicons/',
  });
  config.addPassthroughCopy({
    'src/_includes/fonts/': 'fonts/',
  });
  config.addPassthroughCopy({
    'src/_includes/js/': 'js/',
  });
  config.addPassthroughCopy({
    'src/_meta/robots.txt': '/robots.txt',
  });

  // manage URLs
  config.addPlugin(EleventyHtmlBasePlugin);

  // favicons
  config.addNunjucksAsyncShortcode('favicons', shortcodes.favicons);
  config.watchIgnores.add('src/_includes/snippets/favicons.html');

  // images
  config.addNunjucksAsyncShortcode('doodleFigure', shortcodes.doodleFigure);
  config.addNunjucksAsyncShortcode('figure', shortcodes.figure);
  config.addNunjucksAsyncShortcode('image', shortcodes.image);
  config.addFilter('isLandscape', filters.isLandscape);

  // copyright year
  config.addFilter('yearSince', filters.yearSince);

  // sitemap
  config.addPlugin(sitemap, {
    sitemap: {
      hostname: 'https://perrins-art.com',
    },
  });

  // minify HTML
  if (process.env.NODE_ENV === 'production') {
    config.addTransform('html-minify', transforms.minifyHtml);
  }

  return {
    dir: {
      input: 'src',
      output: 'dist'
    },
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk'
  };
};

import { EleventyHtmlBasePlugin } from '@11ty/eleventy';
import sitemap from '@quasibit/eleventy-plugin-sitemap';

import filterCapWords from './src/_eleventy/filter/cap-words.js';
import filterCleanupHack from './src/_eleventy/filter/cleanup-hack.js';
import filterIsLandscape from './src/_eleventy/filter/is-landscape.js';
import filterRmFileExt from './src/_eleventy/filter/rm-file-ext.js';
import filterRmSpaces from './src/_eleventy/filter/rm-spaces.js';
import filterSepWords from './src/_eleventy/filter/sep-words.js';
import filterYearSince from './src/_eleventy/filter/year-since.js';
import shortcodeDoodleFigure from './src/_eleventy/shortcode/doodle-figure.js';
import shortcodeFigure from './src/_eleventy/shortcode/figure.js';
import shortcodeImage from './src/_eleventy/shortcode/image.js';
import transformMinifyHtml from './src/_eleventy/transform/minify-html.js';


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
  config.addFilter('cleanupHack', filterCleanupHack);
  config.addFilter('rmFileExt', filterRmFileExt);
  config.addFilter('rmSpaces', filterRmSpaces);
  config.addFilter('sepWords', filterSepWords);

  // images
  config.addNunjucksAsyncShortcode('doodleFigure', shortcodeDoodleFigure);
  config.addNunjucksAsyncShortcode('figure', shortcodeFigure);
  config.addNunjucksAsyncShortcode('image', shortcodeImage);

  // image orientation
  config.addFilter('isLandscape', filterIsLandscape);

  // image title
  config.addFilter('capWords', filterCapWords);

  // copyright year
  config.addFilter('yearSince', filterYearSince);

  // sitemap
  config.addPlugin(sitemap, {
    sitemap: {
      hostname: 'https://perrins-art.com',
    },
  });

  // minify HTML
  if (process.env.NODE_ENV === 'production') {
    config.addTransform('html-minify', transformMinifyHtml);
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

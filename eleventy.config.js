import { EleventyHtmlBasePlugin } from '@11ty/eleventy';
import path from 'path';
import sitemap from '@quasibit/eleventy-plugin-sitemap';
import sizeOf from 'image-size';

import doodleFigureShortcode from './src/_eleventy/shortcode/doodle-figure.js';
import figureShortcode from './src/_eleventy/shortcode/figure.js';
import { cleanupHack, rmFileExt, rmSpaces, sepWords } from './src/_eleventy/filters.js';
import imageShortcode from './src/_eleventy/shortcode/image.js';
import minifyHtml from './src/_eleventy/minify-html.js';


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
  config.addFilter('cleanupHack', cleanupHack);
  config.addFilter('rmFileExt', rmFileExt);
  config.addFilter('rmSpaces', rmSpaces);
  config.addFilter('sepWords', sepWords);

  // images
  config.addNunjucksAsyncShortcode('doodleFigure', doodleFigureShortcode);
  config.addNunjucksAsyncShortcode('figure', figureShortcode);
  config.addNunjucksAsyncShortcode('image', imageShortcode);

  // image title
  config.addFilter('capWords', value => {
    return value.replace(/\b\w/g, function(match) {
        return match.toUpperCase();
    });
  });

  // image orientation
  config.addFilter('isLandscape', imagePath => {
    const dimensions = sizeOf(imagePath);
    return dimensions.width > dimensions.height;
  });

  // copyright year
  config.addFilter('yearSince', value => {
    const year = new Date().getFullYear();
    return (year === value) ? year : ` ${value}-${year}`;
  });

  // sitemap
  config.addPlugin(sitemap, {
    sitemap: {
      hostname: 'https://perrins-art.com',
    },
  });

  // minify HTML
  config.addTransform('html-minify', minifyHtml);

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

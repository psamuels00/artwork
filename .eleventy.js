const doodleFigureShortcode = require('./src/_eleventy/shortcode/doodle-figure');
const { EleventyHtmlBasePlugin } = require('@11ty/eleventy');
const figureShortcode = require('./src/_eleventy/shortcode/figure');
const filters = require('./src/_eleventy/filters');
const imageShortcode = require('./src/_eleventy/shortcode/image');
const minifyHtml = require('./src/_eleventy/minify-html');
const path = require('path');
const sitemap = require('@quasibit/eleventy-plugin-sitemap');
const sizeOf = require('image-size');


module.exports = config => {
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
  config.addFilter('cleanupHack', filters.cleanupHack);
  config.addFilter('rmFileExt', filters.rmFileExt);
  config.addFilter('rmSpaces', filters.rmSpaces);
  config.addFilter('sepWords', filters.sepWords);

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
    const fullPath = path.join(__dirname, 'src', imagePath);
    const dimensions = sizeOf(imagePath);
    return dimensions.width > dimensions.height;
  });

  // copyright year
  config.addFilter('yearSince', value => {
    year = new Date().getFullYear();
    return (year === value) ? year : ` ${value}-${year}`;
  });

  // sitemap
  config.addPlugin(sitemap, {
    sitemap: {
      hostname: 'https://perrins-art.com',
    },
  });

  // minify HTML
  config.addTransform("html-minify", minifyHtml);

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

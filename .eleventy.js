const { EleventyHtmlBasePlugin } = require('@11ty/eleventy');
const path = require('path');
const sitemap = require('@quasibit/eleventy-plugin-sitemap');
const sizeOf = require('image-size');
const filters = require('./src/_data/filters');


module.exports = config => {
  // logging
  config.setQuietMode(true);

  // copy files
  config.addPassthroughCopy('src/images/');
  config.addPassthroughCopy({
    'src/_meta/robots.txt': '/robots.txt',
  });
  config.addPassthroughCopy({
    'global.out.css': 'global.css',
  });
  config.addPassthroughCopy({
    'src/_includes/js/': 'js/',
  });
  config.addPassthroughCopy({
    'src/_includes/fonts/': 'fonts/',
  });

  // manage URLs
  config.addPlugin(EleventyHtmlBasePlugin);
  config.addFilter('rmFileExt', filters.rmFileExt);
  config.addFilter('cleanupHack', filters.cleanupHack);
  config.addFilter('sepWords', filters.sepWords);

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

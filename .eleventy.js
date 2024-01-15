const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");
const path = require('path');
const sizeOf = require('image-size');

module.exports = config => {
  // logging
  config.setQuietMode(true);

  // copy files
  config.addPassthroughCopy('src/images/');
  config.addPassthroughCopy({
    'global.out.css': 'global.css',
  });
  config.addPassthroughCopy({
    'src/_includes/js/': 'js/',
  });

  // manage URLs
  config.addPlugin(EleventyHtmlBasePlugin);
  config.addFilter('rmFileExt', value => {
    return value.replace(/\..+$/, '');
  });
  config.addFilter('cleanupHack', value => {
    return value.replace(/^(.+-)?\d\d-/, '');
  });
  config.addFilter('sepWords', value => {
    return value
      .replace(/-/g, ' ')
      .replace(/([a-z])([A-Z])/g, '$1 $2')
      .replace(/([A-Z])([A-Z])/g, '$1 $2')
      .replace(/(\d+)([a-zA-Z_])/g, '$1 $2')
      .replace(/([a-zA-Z_])(\d+)/g, '$1 $2')
  });

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

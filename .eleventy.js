const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");
const path = require('path');
const sizeOf = require('image-size');

module.exports = config => {
  // logging
  config.setQuietMode(false);

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

  // image orientation
  config.addFilter('isLandscape', imagePath => {
    const fullPath = path.join(__dirname, 'src', imagePath);
    const dimensions = sizeOf(imagePath);
    return dimensions.width > dimensions.height;
  });

  return {
    dir: {
      input: 'src',
      output: 'dist'
    },
    pathPrefix: '/artwork/',
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk'
  };
};

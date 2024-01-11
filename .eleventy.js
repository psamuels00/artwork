const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

module.exports = config => {
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

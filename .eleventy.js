module.exports = config => {
  config.addPassthroughCopy('src/images/');
  config.addPassthroughCopy({
    'global.out.css': 'global.css',
  });
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
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk'
  };
};

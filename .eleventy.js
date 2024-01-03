module.exports = config => {
  config.addPassthroughCopy('src/images/');
  config.addPassthroughCopy({
    "global.out.css": "global.css",
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

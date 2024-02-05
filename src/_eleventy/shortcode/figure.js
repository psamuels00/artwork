const imageShortcode = require('./image');
const outdent = require('outdent');


const shortcode = async function(src, alt, title) {
  imageClass = 'swipeable';

  const outputPath = this.page.outputPath;
  const image = await imageShortcode(src, alt, imageClass, {linkable: true, outputPath})

  const figure = `<figure class="mt-8 sm:mt-0 mx-16 sm:mx-8 md:mx-20">
      ${image}
      <figcaption class="mt-2 mb-16 sm:mb-8">${title}</figcaption>
  </figure>`;

  return outdent`${figure}`;
};


module.exports = shortcode;
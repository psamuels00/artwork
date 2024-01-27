const { capWords, cleanupHack, rmFileExt, sepWords } = require('../filters');
const imageShortcode = require('./image');
const outdent = require('outdent');


const shortcode = async (categoryName, imageFile) => {
  const title = sepWords(rmFileExt(cleanupHack(imageFile)));

  const imagePath = '/images/doodles/' + categoryName.replace(/ /g, '') + '/' + imageFile;
  const imageAlt = 'Doodle item ' + categoryName + ' image ' + title;
  const imageClass = 'swipeable hover:brightness-90';
  const image = await imageShortcode(imagePath, imageAlt, imageClass)

  const href = ('/doodles/' + categoryName + '/' + title.replace(/ /g, '-')).toLowerCase();
  const caption = capWords(title);

  const figure = `<figure class="sm:my-0 my-8 text-sm font-extralight">
    <a href="${href}">
      ${image}
    </a>
    <figcaption>${caption}</figcaption>
  </figure>`;

  return outdent`${figure}`;
};


module.exports = shortcode;

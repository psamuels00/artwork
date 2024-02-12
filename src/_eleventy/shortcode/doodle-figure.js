import outdent from 'outdent';

import capWords from '../filter/cap-words.js';
import cleanupHack from '../filter/cleanup-hack.js';
import rmFileExt from '../filter/rm-file-ext.js';
import sepWords from '../filter/sep-words.js';
import shortcodeImage from './image.js';


export default async function(categoryName, imageFile) {
  const title = sepWords(rmFileExt(cleanupHack(imageFile)));

  const outputDir = this.eleventy.directories.output;
  const imagePath = '/_images/doodles/' + categoryName.replace(/ /g, '') + '/' + imageFile;
  const imageAlt = 'Doodle item ' + categoryName + ' image ' + title;
  const imageClass = 'swipeable hover:brightness-90';
  const image = await shortcodeImage(imagePath, imageAlt, imageClass, {outputDir})

  const href = ('/doodles/' + categoryName + '/' + title.replace(/ /g, '-')).toLowerCase() + '/';
  const caption = capWords(title);

  const figure = `<figure class="sm:my-0 my-8 text-sm font-extralight">
    <a href="${href}">
      ${image}
    </a>
    <figcaption>${caption}</figcaption>
  </figure>`;

  return outdent`${figure}`;
};

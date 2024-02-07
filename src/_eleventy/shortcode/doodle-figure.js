import { capWords, cleanupHack, rmFileExt, sepWords } from '../filters.js';
import imageShortcode from './image.js';
import outdent from 'outdent';


export default async function(categoryName, imageFile) {
  const title = sepWords(rmFileExt(cleanupHack(imageFile)));

  const outputDir = this.eleventy.directories.output;
  const imagePath = '/images/doodles/' + categoryName.replace(/ /g, '') + '/' + imageFile;
  const imageAlt = 'Doodle item ' + categoryName + ' image ' + title;
  const imageClass = 'swipeable hover:brightness-90';
  const image = await imageShortcode(imagePath, imageAlt, imageClass, {outputDir})

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

import outdent from 'outdent';

import shortcodeImage from './image.js';


export default async function(categoryName, imageFile, title, href, imagePath, imageAlt) {
  const outputDir = this.eleventy.directories.output;
  const imageClass = 'swipeable hover:brightness-90';
  const image = await shortcodeImage(imagePath, imageAlt, imageClass, {outputDir})

  const figure = `<figure class="sm:my-0 my-8 text-sm font-extralight">
    <a href="${href}">
      ${image}
    </a>
    <figcaption>${title}</figcaption>
  </figure>`;

  return outdent`${figure}`;
};

import outdent from 'outdent';

import shortcodeImage from './image.js';


export default async function(image) {
  const outputDir = this.eleventy.directories.output;
  const imageClass = 'swipeable hover:brightness-90';
  const imageHtml = await shortcodeImage(image.path, image.alt, imageClass, {outputDir})

  const figure = `<figure class="sm:my-0 my-8 text-sm font-extralight">
    <a href="${image.href}">
      ${imageHtml}
    </a>
    <figcaption>${image.title}</figcaption>
  </figure>`;

  return outdent`${figure}`;
};

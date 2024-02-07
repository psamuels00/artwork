import imageShortcode from './image.js';
import outdent from 'outdent';


export default async function(src, alt, title) {
  const imageClass = 'swipeable';

  const outputDir = this.eleventy.directories.output;
  const image = await imageShortcode(src, alt, imageClass, {linkable: true, outputDir})

  const figure = `<figure class="mt-8 sm:mt-0 mx-16 sm:mx-8 md:mx-20">
      ${image}
      <figcaption class="mt-2 mb-16 sm:mb-8">${title}</figcaption>
  </figure>`;

  return outdent`${figure}`;
};

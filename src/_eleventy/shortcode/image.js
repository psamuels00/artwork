import fs from 'fs';
import Image from '@11ty/eleventy-img';
import outdent from 'outdent';
import path from 'path';


const outputSubdir = 'assets/images';


const stringifyAttributes = (attributeMap) => {
  return Object.entries(attributeMap)
    .map(([attribute, value]) => {
      if (typeof value === 'undefined') return '';
      return `${attribute}="${value}"`;
    })
    .join(' ');
};


const pathnameFormat = (hash, src, width, format, options, outputPath) => {
  const m = src.match(/src\/_images\/(.*)\/(.*?)\.\w+$/);
  if (!m) {
    return `${hash}-${width}.${format}`;
  }

  try {
    const dirPath = outputPath + '/' + m[1];
    fs.mkdirSync(dirPath, { recursive: true });
  } catch (error) {
    console.error('Error creating directory:', error.message);
    return `${hash}-${width}.${format}`;
  }

  return `${m[1]}/${m[2]}-${width}.${format}`;
};


export default async function(
  src,
  alt,
  className = undefined,
  options = {}
) {
  const {
    formats = ['webp', 'jpeg', null],
    linkable = false,
    loading = 'eager',
    maxWidth = undefined,
    sizes = '100vw',
    outputDir = this.eleventy.directories.output,
  } = options;

  let {
    widths = [400, 800, 1280, 1920, null],
  } = options;

  if (maxWidth) {
    widths = widths.filter(n => n && n < maxWidth);
    widths.push(maxWidth, null);
  }

  const outputPath = outputDir + '/' + outputSubdir;

  const imageMetadata = await Image(`src${src}`, {
    widths,
    formats,
    outputDir: outputPath,
    urlPath: '/' + outputSubdir,
    filenameFormat: (hash, src, width, format, options) => {
      return pathnameFormat(hash, src, width, format, options, outputPath);
    },
  });

  const sourceHtmlString = Object.values(imageMetadata)
    .map((images) => {
      // The first entry is representative of all the
      // others since they each have the same shape.
      const { sourceType } = images[0];

      if (maxWidth && images[images.length - 1].width > maxWidth) {
        images = Array.from(images);
        images.pop();
      }

      const sourceAttributes = stringifyAttributes({
        type: sourceType,
        srcset: images.map((image) => image.srcset).join(', '),
        sizes,
      });

      return `<source ${sourceAttributes}>`;
    })
    .join('\n');

  const getLargeImage = (format, largest) => {
    const images = imageMetadata[format];
    let offset = images.length - 1;
    if (!largest && maxWidth && images[images.length - 1].width > maxWidth) {
      offset -= 1;
    }
    return images[offset];
  }
  const selectImage = getLargeImage(formats[0], false);

  const imgAttributes = stringifyAttributes({
    class: className,
    src: selectImage.url,
    width: selectImage.width,
    height: selectImage.height,
    alt,
    loading,
    decoding: 'async',
  });
  const imgHtmlString = `<img ${imgAttributes}>`;

  const pictureHtmlString = `<picture>
    ${sourceHtmlString}
    ${imgHtmlString}
  </picture>`;

  let html = pictureHtmlString;
  if (linkable) {
    const largestImage = getLargeImage(formats[0], true);
    const aAttributes = stringifyAttributes({
      href: largestImage.url,
    });
    const aHtmlString = `<a ${aAttributes}>
      ${pictureHtmlString}
    </a>`
    html = aHtmlString;
  }

  return outdent`${html}`;
};

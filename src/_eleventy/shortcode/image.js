const fs = require('fs');
const Image = require('@11ty/eleventy-img');
const outdent = require('outdent');
const path = require('path');


const outputDir = 'dist/assets/images';


const stringifyAttributes = (attributeMap) => {
  return Object.entries(attributeMap)
    .map(([attribute, value]) => {
      if (typeof value === 'undefined') return '';
      return `${attribute}="${value}"`;
    })
    .join(' ');
};


const pathnameFormat = (hash, src, width, format, options) => {
  const m = src.match(/src\/images\/(.*)\/(.*?)\.\w+$/);
  if (!m) {
    return `${hash}-${width}.${format}`;
  }

  try {
    dirPath = outputDir + '/' + m[1];
    fs.mkdirSync(dirPath, { recursive: true });
  } catch (error) {
    console.error('Error creating directory:', error.message);
    return `${hash}-${width}.${format}`;
  }

  return `${m[1]}/${m[2]}-${width}.${format}`;
};


const shortcode = async (
  src,
  alt,
  className = undefined,
  options = {}
) => {
  const {
    formats = ['webp', 'jpeg', null],
    linkable = false,
    loading = 'eager',
    maxWidth = undefined,
    sizes = '100vw',
  } = options;

  let {
    widths = [400, 800, 1280, 1920, null],
  } = options;

  if (maxWidth) {
    widths = widths.filter(n => n && n < maxWidth);
    widths.push(maxWidth, null);
  }

  const imageMetadata = await Image(`src${src}`, {
    widths,
    formats,
    outputDir,
    urlPath: '/assets/images',
    filenameFormat: pathnameFormat,
  });

  const sourceHtmlString = Object.values(imageMetadata)
    .map((images) => {
      // The first entry is representative of all the
      // others since they each have the same shape.
      const { sourceType } = images[0];

      if (maxWidth) {
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
    if (!largest && maxWidth) {
      while (offset > 0 && images[offset].width > maxWidth) {
        offset -= 1;
      }
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

  let html = `<picture>
    ${sourceHtmlString}
    ${imgHtmlString}
  </picture>`;

  if (linkable) {
    const largestImage = getLargeImage(formats[0], true);
    const aAttributes = stringifyAttributes({
      href: largestImage.url,
    });
    html = `<a ${aAttributes}>
      ${html}
    </a>`
  }

  return outdent`${html}`;
};

module.exports = shortcode;
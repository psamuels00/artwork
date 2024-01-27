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
    formats = ['webp', 'jpeg'],
    linkable = false,
    loading = 'lazy',
    sizes = '100vw',
    widths = [400, 800, 1280],
  } = options;

  const imageMetadata = await Image(`src${src}`, {
    widths: [...widths, null],
    formats: [...formats, null],
    outputDir,
    urlPath: '/assets/images',
    filenameFormat: pathnameFormat,
  });

  const sourceHtmlString = Object.values(imageMetadata)
    // Map each format to the source HTML markup
    .map((images) => {
      // The first entry is representative of all the others
      // since they each have the same shape
      const { sourceType } = images[0];

      // Use our util from earlier to make our lives easier
      const sourceAttributes = stringifyAttributes({
        type: sourceType,
        // srcset needs to be a comma-separated attribute
        srcset: images.map((image) => image.srcset).join(', '),
        sizes,
      });

      // Return one <source> per format
      return `<source ${sourceAttributes}>`;
    })
    .join('\n');

  const getLargestImage = (format) => {
    const images = imageMetadata[format];
    return images[images.length - 1];
  }

  const largestUnoptimizedImg = getLargestImage(formats[0]);
  const imgAttributes = stringifyAttributes({
    class: className,
    src: largestUnoptimizedImg.url,
    width: largestUnoptimizedImg.width,
    height: largestUnoptimizedImg.height,
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
    const aAttributes = stringifyAttributes({
      href: largestUnoptimizedImg.url,
    });
    html = `<a ${aAttributes}>
      ${html}
    </a>`
  }

  return outdent`${html}`;
};

module.exports = shortcode;
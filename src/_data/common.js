import rmFileExt from '../_eleventy/filter/rm-file-ext.js';
import rmSpaces from '../_eleventy/filter/rm-spaces.js';
import sepWords from '../_eleventy/filter/sep-words.js';
import slug from '../_eleventy/filter/slug.js';


export const navigable = (items, topPageName) => {
  // embellish each item with circular prev/next, and a bunch more!

  return items.map((object, offset) => {
    const prev = (offset == 0 ? items[items.length - 1].name : items[offset - 1].name);
    const next = (offset == (items.length - 1) ? items[0].name : items[offset + 1].name);
    const prevHrefLocation = topPageName + '/' + slug(prev) + '/';
    const nextHrefLocation = topPageName + '/' + slug(next) + '/';
    const enterUrl = topPageName + '/' + slug(object.name) + '/' + slug(sepWords(rmFileExt(object.images[0]))) + '/';

    const images = object.images.map((name) => {
      return {
        name,
        title: sepWords(rmFileExt(name)),
        href: '/' + topPageName + '/' + slug(object.name) + '/' + slug(sepWords(rmFileExt(name))) + '/',
        path: '/_images/' + topPageName + '/' + rmSpaces(object.name) + '/' + name,
        alt: topPageName.charAt(0).toUpperCase() + topPageName.slice(1) +
             ' item ' + sepWords(object.name) + ' image ' + sepWords(rmFileExt(name)),
      };
    });

    return {
      ...object,
      images,
      prev,
      next,
      prevHrefLocation,
      nextHrefLocation,
      enterUrl,
    };
  });
};


export const flattened = (items, topPageName) => {
  // flatten items wrt images, and embellish each item with circular prevPrev/prev/next/nextNext
  // assumes items like [ { name: name, images: [image,...], ... }, ... ]

  let allImages = [];

  let lastItem = items[items.length - 1];
  let prev = {
    name: lastItem.name,
    image: lastItem.images[lastItem.images.length - 1],
  };
  let next = undefined;

  for (let itemOffset = 0; itemOffset < items.length; itemOffset++) {
    const item = items[itemOffset];

    let firstOffset = undefined;
    if (itemOffset == 0) {
      firstOffset = items.length - 1;
    } else {
      firstOffset = itemOffset - 1;
    }
    const prevPrev = {
      name: items[firstOffset].name,
      image: items[firstOffset].images[0],
    };

    let lastOffset = undefined;
    if (itemOffset == items.length - 1) {
      lastOffset = 0;
    } else {
      lastOffset = itemOffset + 1;
    }
    const nextNext = {
      name: items[lastOffset].name,
      image: items[lastOffset].images[0],
    };

    for (let imageOffset = 0; imageOffset < item.images.length; imageOffset++) {
      const image = item.images[imageOffset];

      if (imageOffset == item.images.length - 1) {
        if (itemOffset == items.length - 1) {
          next = {
            name: items[0].name,
            image: items[0].images[0],
          };
        } else {
          next = {
            name: items[itemOffset + 1].name,
            image: items[itemOffset + 1].images[0],
          };
        }
      } else {
        next = {
          name: items[itemOffset].name,
          image: item.images[imageOffset + 1],
        };
      }

      const imageTitle = sepWords(rmFileExt(image));
      const pageTitle = item.pageTitle + ': ' + imageTitle;
      const imagePath = '/_images/' + topPageName + '/' + rmSpaces(item.name) + '/' + image;
      const imageAlt = topPageName.charAt(0).toUpperCase() + topPageName.slice(1)
                      + ' item ' + item.name + ' image ' + imageTitle;

      const buildHref = (item) => {
        return topPageName + '/' + slug(item.name) + '/' + slug(sepWords(rmFileExt(item.image))) + '/';
      };

      const prevPrevHref = '/' + buildHref(prevPrev);
      const prevHref = '/' + buildHref(prev);
      const nextHref = '/' + buildHref(next);
      const nextNextHref = '/' + buildHref(nextNext);

      const prevHrefLocation = buildHref(prev);
      const nextHrefLocation = buildHref(next);

      const permalink = buildHref({name: item.name, image});

      const embellishedItem = {
        ...item,
        image,
        permalink,

        imageTitle,
        pageTitle,
        imagePath,
        imageAlt,

        prevPrev,
        prev,
        next,
        nextNext,

        prevPrevHref,
        prevHref,
        nextHref,
        nextNextHref,
        prevHrefLocation,
        nextHrefLocation,

        imageOffset,
        numImages: item.images.length,
      }
      delete embellishedItem.images;

      prev = { name: item.name, image }

      allImages.push(embellishedItem);
    }
  }
  return allImages;
};

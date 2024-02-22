import rmFileExt from '../_eleventy/filter/rm-file-ext.js';
import rmSpaces from '../_eleventy/filter/rm-spaces.js';
import sepWords from '../_eleventy/filter/sep-words.js';
import slug from '../_eleventy/filter/slug.js';


export const navigable = (items, top_page_name) => {
  // embellish each item with circular prev/next, and a bunch more!

  return items.map((object, offset) => {
    const prev = (offset == 0 ? items[items.length - 1].name : items[offset - 1].name);
    const next = (offset == (items.length - 1) ? items[0].name : items[offset + 1].name);
    const prev_href_location = top_page_name + '/' + slug(prev) + '/';
    const next_href_location = top_page_name + '/' + slug(next) + '/';
    const enter_url = top_page_name + '/' + slug(object.name) + '/' + slug(sepWords(rmFileExt(object.images[0]))) + '/';

    const images = object.images.map((name) => {
      return {
        name,
        title: sepWords(rmFileExt(name)),
        href: '/' + top_page_name + '/' + slug(object.name) + '/' + slug(sepWords(rmFileExt(name))) + '/',
        path: '/_images/' + top_page_name + '/' + rmSpaces(object.name) + '/' + name,
        alt: top_page_name.charAt(0).toUpperCase() + top_page_name.slice(1) +
             ' item ' + sepWords(object.name) + ' image ' + sepWords(rmFileExt(name)),
      };
    });

    return {
      ...object,
      images,
      prev,
      next,
      prev_href_location,
      next_href_location,
      enter_url,
    };
  });
};


export const flattened = (items, top_page_name) => {
  // flatten items wrt images, and embellish each item with circular prev_prev/prev/next/next_next
  // assumes items like [ { name: name, images: [image,...], ... }, ... ]

  let all_images = [];

  let last_item = items[items.length - 1];
  let prev = {
    name: last_item.name,
    image: last_item.images[last_item.images.length - 1],
  };
  let next = undefined;

  for (let item_offset = 0; item_offset < items.length; item_offset++) {
    const item = items[item_offset];

    let first_offset = undefined;
    if (item_offset == 0) {
      first_offset = items.length - 1;
    } else {
      first_offset = item_offset - 1;
    }
    const prev_prev = {
      name: items[first_offset].name,
      image: items[first_offset].images[0],
    };

    let last_offset = undefined;
    if (item_offset == items.length - 1) {
      last_offset = 0;
    } else {
      last_offset = item_offset + 1;
    }
    const next_next = {
      name: items[last_offset].name,
      image: items[last_offset].images[0],
    };

    for (let image_offset = 0; image_offset < item.images.length; image_offset++) {
      const image = item.images[image_offset];

      if (image_offset == item.images.length - 1) {
        if (item_offset == items.length - 1) {
          next = {
            name: items[0].name,
            image: items[0].images[0],
          };
        } else {
          next = {
            name: items[item_offset + 1].name,
            image: items[item_offset + 1].images[0],
          };
        }
      } else {
        next = {
          name: items[item_offset].name,
          image: item.images[image_offset + 1],
        };
      }

      const image_title = sepWords(rmFileExt(image));
      const page_title = item.page_title + ': ' + image_title;
      const image_path = '/_images/' + top_page_name + '/' + rmSpaces(item.name) + '/' + image;
      const image_alt = top_page_name.charAt(0).toUpperCase() + top_page_name.slice(1)
                      + ' item ' + item.name + ' image ' + image_title;

      const build_href = (item) => {
        return top_page_name + '/' + slug(item.name) + '/' + slug(sepWords(rmFileExt(item.image))) + '/';
      };

      const prev_prev_href = '/' + build_href(prev_prev);
      const prev_href = '/' + build_href(prev);
      const next_href = '/' + build_href(next);
      const next_next_href = '/' + build_href(next_next);

      const prev_href_location = build_href(prev);
      const next_href_location = build_href(next);

      const permalink = build_href({name: item.name, image});

      const embellished_item = {
        ...item,
        image,
        permalink,

        image_title,
        page_title,
        image_path,
        image_alt,

        prev_prev,
        prev,
        next,
        next_next,

        prev_prev_href,
        prev_href,
        next_href,
        next_next_href,
        prev_href_location,
        next_href_location,

        image_offset,
        num_images: item.images.length,
      }
      delete embellished_item.images;

      prev = { name: item.name, image }

      all_images.push(embellished_item);
    }
  }
  return all_images;
};

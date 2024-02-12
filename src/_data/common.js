import sepWords from '../_eleventy/filter/sep-words.js';
import rmFileExt from '../_eleventy/filter/rm-file-ext.js';


export const navigable = (items) => {
  // embellish each item with circular prev/next

  return items.map((object, offset) => ({
    ...object,
    prev: (offset == 0 ? items[items.length - 1].name : items[offset - 1].name),
    next: (offset == (items.length - 1) ? items[0].name : items[offset + 1].name),
  }))
};


export const flattened = (items) => {
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

      const page_title = item.page_title + ': ' + sepWords(rmFileExt(image));

      const embellished_item = {
        ...item,
        page_title,
        image,
        prev_prev,
        prev,
        next,
        next_next,
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

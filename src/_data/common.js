function combineImages(items) {
  // combine *_images into a single list: images
  for (let item of items) {
    if ('top_images' in item) {
      item.images = [...item.top_images, ...item.left_images, ...item.right_images];
    }
  }
}


module.exports = {
  navigable: (items) => {
    // embellish each item with prev/next and item_number/max_item_number
    combineImages(items);

    return items.map((object, offset) => ({
      ...object,
      prev: (offset == 0 ? items[items.length - 1].name : items[offset - 1].name),
      next: (offset == (items.length - 1) ? items[0].name : items[offset + 1].name),
      item_number: offset + 1,
      max_item_number: items.length,
    }))
  },

  flattened: (items) => {
    // flatten items wrt images, and embellish each item with first/last/prev/next
    // assumes items like [ { name: name, images: [image,...], ... }, ... ]
    let all_images = [];

    combineImages(items);

    let last_item = items[items.length - 1];
    let prev = {
      name: last_item.name,
      image: last_item.images[last_item.images.length - 1],
    };

    for (let item_offset = 0; item_offset < items.length; item_offset++) {
      item = items[item_offset];
      first = {
        name: item.name,
        image: item.images[0],
      };
      last = {
        name: item.name,
        image: item.images[item.images.length - 1],
      };

      for (let image_offset = 0; image_offset < item.images.length; image_offset++) {
        image = item.images[image_offset];

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

        embellished_item = {
          image,
          first,
          last,
          prev,
          next,
          ...item,
        }
        delete embellished_item.images;

        prev = { name: item.name, image }

        all_images.push(embellished_item);
      }
    }
    return all_images;
  },
};
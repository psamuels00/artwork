module.exports = {
  combineImages: (items) => {
    // combine *_images into a single list: images
    for (let item of items) {
      if ('top_images' in item) {
        item.images = [...item.top_images, ...item.left_images, ...item.right_images];
      }
    }
  },

  navigable: (items) => {
    // embellish each item with prev/next and item_number/max_item_number
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
    let all_images = [];

    let last_item = items[items.length - 1];
    let image_prev = last_item.images[last_item.images.length - 1];
    let name_prev = last_item.name;

    for (let item_offset = 0; item_offset < items.length; item_offset++) {
      item = items[item_offset];
      image_first = item.images[0];
      image_last = item.images[item.images.length - 1];

      for (let image_offset = 0; image_offset < item.images.length; image_offset++) {
        image = item.images[image_offset];

        if (image_offset == item.images.length - 1) {
          if (item_offset == items.length - 1) {
            name_next = items[0].name;
            image_next = items[0].images[0];
          } else {
            name_next = items[item_offset + 1].name;
            image_next = items[item_offset + 1].images[0];
          }
        } else {
          name_next = items[item_offset].name;
          image_next = item.images[image_offset + 1];
        }

        item = {
          image,
          image_first,
          image_last,
          name_prev,
          image_prev,
          name_next,
          image_next,
          ...item,
        }
        delete item.images;

        name_prev = item.name;
        image_prev = image;

        all_images.push(item);
      }
    }
    return all_images;
  },
};
const projects = [
  {
    name: 'Emma',
    title: 'Emma',
    description: 'Emma sitting relaxed, attentive.  My first attempt to focus on tone, ' +
                 'trying to achieve a nice tonal balance.',
    category: 'Portrait painting',
    date: 'Dec, 2023',
    location: 'Concord, CA',
    medium: 'Acrylic on copy paper, coated with gesso',
    dimensions: '11 x 8½ inches',
    images: [
      'EmmaSittingRelaxedAttentive-12-final-framed.jpg',
      'EmmaSittingRelaxedAttentive-02-photo.jpg',
      'EmmaSittingRelaxedAttentive-03-demo.jpg',
      'EmmaSittingRelaxedAttentive-05-first-drawing.jpg',
      'EmmaSittingRelaxedAttentive-13-final-zoom-head.jpg',
      'EmmaSittingRelaxedAttentive-14-final-zoom-face.jpg',
      'EmmaSittingRelaxedAttentive-07-ground.jpg',
      'EmmaSittingRelaxedAttentive-08-floor.jpg',
      'EmmaSittingRelaxedAttentive-09-counter-bg.jpg',
      'EmmaSittingRelaxedAttentive-10-dark-body.jpg',
      'EmmaSittingRelaxedAttentive-11-final.jpg',
      'EmmaSittingRelaxedAttentive-04-photo-and-drawing.jpg',
      'EmmaSittingRelaxedAttentive-06-second-drawing.jpg',
    ],
  },
  {
    name: 'The Demo',
    title: 'The Demo',
    description: 'This is a painting of a human dummy performing a demo of a wall dummy.  It is my "masterpiece" ' +
                 'product of Covid lockdown.',
    category: 'Portrait painting',
    date: '2020',
    location: 'Mission District, San Francisco, CA',
    medium: 'Acrylic paint on thin, roll paper, covered with gesso.',
    dimensions: '34 x 24½ inches',
    images: [
      '02-PaintingFull.jpg',
      '01-OriginalPhoto.jpg',
      '14-Fence.jpg',
      '05-Dummy.jpg',
      '07-Dummy2.jpg',
      '04-Surfer.jpg',
      '12-Dummy2LeftHand.jpg',
      '13-Dummy2RightHand.jpg',
      '15-DummyLeftHand.jpg',
      '16-DummyRightHand.jpg',
      '17-RightHands.jpg',
      '03-DummyAndDummy.jpg',
      '09-Dummy2Face.jpg',
      '10-Dummy2Eyes.jpg',
      '11-Dummy2Mouth.jpg',
      '18-Signature.jpg',
    ],
  },
  {
    name: 'Dolphin',
    title: 'Dolphin',
    description: 'My second painting.  My first background.',
    category: 'Seascape painting',
    date: '2020',
    location: 'San Francisco, CA',
    medium: 'Acrylic paint on thin, roll paper, covered with gesso.',
    dimensions: '16 x 12 inches',
    images: [
      '02-TheDolphin.jpg',
      '01-TheArtistAndTheDolphin.jpg',
      '03-TheDolphinCropped.jpg',
    ],
  },
  {
    name: 'Backyard Hills',
    title: 'Outpost Backyard Hills',
    description: 'View of the hills from the back yard of The Outpost.',
    category: 'Landscape painting',
    date: 'Dec, 2023',
    location: 'Concord, CA',
    medium: 'Acrylic paint on cheap, glossy product paper',
    dimensions: '16 x 12 inches',
    images: [
      'Backyard-09-finished-cropped.jpg',
      'Backyard-05-ref-photo.jpg',
      'Backyard-01-orig-drawing.jpg',
      'Backyard-06-in-progress-1.jpg',
      'Backyard-07-in-progress-2.jpg',
      'Backyard-08-finished.jpg',
      'Backyard-04-both-drawings.jpg',
    ],
  },
  {
    name: 'The Onion',
    title: 'The Onion',
    description: 'My first painting, a product of Covid lockdown and the need to express myself.',
    category: 'Still life painting',
    date: '2020',
    location: 'San Francisco, CA',
    medium: 'Acrylic paint on thin, roll paper, covered with gesso.',
    dimensions: '70 x 46 inches',
    images: [
      '01-RedOnion.jpg',
      '03-TheArtistAndRedOnion.jpg',
      '04-RedOnionFullWall.jpg',
      '02-RedOnionCloseUp.jpg',
    ],
  },
  {
    name: 'Starry Night',
    title: 'Starry Night',
    description: 'A one-off, early painting that happened one day while phoning in to a boring meeting at work, ' +
                 'holding a paintbrush with black paint, and staring at my wallpaper image of the famous Cypresses.',
    category: 'Landscape painting',
    date: '2013',
    location: 'Concord, CA',
    medium: 'Acrylic black on untreated copy paper.',
    dimensions: '11 x 8½ inches',
    images: [
      '01-StarryStarryNight.jpg',
    ],
  },
  {
    name: 'Beach Boardwalk',
    title: 'Beach Boardwalk',
    description: 'A sketch I made from pure thin air for a painting, not yet painted.',
    category: 'Landscape drawing',
    date: 'Oct, 2023',
    location: 'Concord, CA',
    medium: 'Pencil on baking parchment paper',
    dimensions: '24 x 16 inches',
    images: [
      'BeachBoardwalkSketch-02-bench.jpg',
      'BeachBoardwalkSketch-03-barge.jpg',
      'BeachBoardwalkSketch-04-lifeguard.jpg',
      'BeachBoardwalkSketch-05-kite.jpg',
      'BeachBoardwalkSketch-06-surfers.jpg',
      'BeachBoardwalkSketch-01-full.jpg',
    ],
  },
  {
    name: 'Desert Flower',
    title: 'Color Wheel Desert Flower',
    description: 'After making a color wheel, the leftover paint expressed itself as a landscape.',
    category: 'Landscape painting',
    date: 'Nov, 2023',
    location: 'Concord, CA',
    medium: 'Acrylic on copy paper, coated with gesso',
    dimensions: '11 x 8½ inches',
    images: [
      'ColorWheelDesertFlower-01-final.jpg',
    ],
  },
]

function navigable(projects) {
  // embellish each project with prev/next
  return projects.map((object, offset) => ({
    ...object,
    prev: (offset == 0 ? projects[projects.length - 1].name : projects[offset - 1].name),
    next: (offset == (projects.length - 1) ? projects[0].name : projects[offset + 1].name),
  }))
}

function flattened(projects) {
  // flatten projects wrt images, and embellish each item with first/last/prev/next
  let project_images = [];

  for (const project of projects) {
    image_first = project.images[0];
    image_last = project.images[project.images.length - 1];

    for (let i = 0; i < project.images.length; i++) {
      image_prev = (i === 0) ? '' : project.images[i - 1];
      image_next = (i === project.images.length - 1) ? '' : project.images[i + 1];

      item = {
        image: project.images[i],
        image_first,
        image_last,
        image_prev,
        image_next,
        ...project,
      }
      delete item.images;

      project_images.push(item);
    }
  }
  return project_images;
}

module.exports = {
    structured: navigable(projects),
    flat: flattened(projects),
};
let projects = [
  {
    name: 'Emma',
    title: 'Emma',
    description: 'Emma sitting relaxed, attentive.  My first attempt to focus on tone, ' +
                 'trying to achieve a nice tonal balance.',
    category: 'Portrait painting',
    date: 'Dec, 2023',
    location: 'Concord, CA',
    medium: 'Acrylic on copy paper, coated with gesso',
    size: '11 x 8½ inches',
    color: {
      body: {
        defaults: 'bg-amber-50'
      }
    },
    images: [
      'FullPainting.jpg',
      'ReferencePhoto.jpg',
      'DemoOfEmmasLook.jpg',
      'FirstDrawing.jpg',
      'HeadZoom.jpg',
      'FaceZoom.jpg',
      'Groundwork.jpg',
      'TheFloor.jpg',
      'TheCounter.jpg',
      'WithDarkTones.jpg',
      'FinalPainting.jpg',
      'PhotoAndFirstDrawing.jpg',
      'FirstAndSecondDrawing.jpg',
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
    size: '34 x 24½ inches',
    color: {
      body: {
        defaults: 'bg-zinc-950 text-stone-100'
      },
      closeX: {
        hover: 'hover:bg-stone-800'
      },
      logo: {
        use_original: 'true',
        divider: 'border-stone-100'
      },
      menu: {
        current: 'bg-stone-600',
        hover: 'hover:bg-stone-700'
      }
    },
    images: [
      'FullPaintingReduced.jpg',
      'ReferencePhoto.jpg',
      'FenceCloseup.jpg',
      'WallDummyFace.jpg',
      'HumanDummyFace.jpg',
      'SurferGirlFace.jpg',
      'HumanDummyLeftHand.jpg',
      'HumanDummyRightHand.jpg',
      'WallDummyLeftHand.jpg',
      'WallDummyRightHand.jpg',
      'BothDummiesRightHand.jpg',
      'DummyAndDummy.jpg',
      'HumanDummyFaceCloseup.jpg',
      'HumanDummyEyesCloseup.jpg',
      'HumanDummyMouthCloseup.jpg',
      'ArtistSignature.jpg',
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
    size: '16 x 12 inches',
    color: {
      body: {
        defaults: 'bg-sky-300'
      }
    },
    images: [
      'FullPainting.webp',
      'TheArtistAndTheDolphin.jpg',
      'TheDolphinCropped.jpg',
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
    size: '16 x 12 inches',
    color: {
      body: {
        defaults: 'bg-backyard-200'
      }
    },
    images: [
      'FullPainting.jpg',
      'ReferencePhoto.jpg',
      'FirstDrawing.jpg',
      'InProgress1.jpg',
      'InProgress2.jpg',
      'FinalPainting.jpg',
      'FirstAndSecondDrawing.jpg',
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
    size: '70 x 46 inches',
    color: {
      body: {
        defaults: 'bg-onion-300'
      }
    },
    images: [
      'FullPainting.webp',
      'TheArtistAndTheOnion.jpg',
      'FullCanvas.jpg',
      'Closeup.jpg',
    ],
  },
  {
    name: 'Starry Night',
    title: 'Starry Night',
    description: 'A one-off, early painting that happened one day while phoning in to a boring meeting at work, ' +
                 'holding a paintbrush with black paint, and staring at my wallpaper image of the famous Cypresses.',
    category: 'Landscape painting',
    date: '2013',
    location: 'San Francisco, CA',
    medium: 'Acrylic black on untreated copy paper.',
    size: '11 x 8½ inches',
    color: {
      body: {
        defaults: 'bg-yellow-500'
      }
    },
    images: [
      'FullPainting.jpg',
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
    size: '24 x 16 inches',
    color: {
      body: {
        defaults: 'bg-sand-400'
      }
    },
    images: [
      'TheBench.jpg',
      'TheBarge.jpg',
      'TheLifeguard.jpg',
      'TheKite.jpg',
      'TheSurfers.jpg',
      'FullPainting.jpg',
    ],
  },
  {
    name: 'Desert Flower',
    title: 'Desert Flower',
    description: 'After making a color wheel, the leftover paint expressed itself as a landscape.',
    category: 'Landscape painting',
    date: 'Nov, 2023',
    location: 'Concord, CA',
    medium: 'Acrylic on copy paper, coated with gesso',
    size: '11 x 8½ inches',
    color: {
      body: {
        defaults: 'bg-desert_brush-300'
      }
    },
    images: [
      'FullPainting.jpg',
    ],
  },
]

// add page title
projects = projects.map(project => {
  return {
    page_title: "Perrin's \"" + project.name + "\" Painting",
    ...project
  };
});

const common = require('./common');

module.exports = {
    structured: common.navigable(projects),
    flat: common.flattened(projects),
};

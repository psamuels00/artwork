const { favicons } = require('favicons');
const fs = require('fs/promises');
const path = require('path');


generate_favicons({
  source: 'src/images/meta/favicon/EmmasFace.png',
  destDir: 'src/_includes/favicons/',
  htmlFile: 'favicons.html',
  hrefPath: '/assets/favicons/',
});


async function generate_favicons(options = {}) {
  const {
    source = undefined,
    destDir = undefined,
    htmlFile = undefined,
    hrefPath = undefined,
  } = options;

  const configuration = {
    appDescription: "Personal Web site to show my artwork and learn 11ty.",
    appName: "Perrin's Artwork",
    appShortName: "Perrin's Art",
    cacheBustingQueryParam: null,
    developerName: "Perrin Samuels",
    developerURL: "https://perrins-art.com",
    path: hrefPath,
    start_url: '/',
  };

  let response = undefined;
  try {
    response = await favicons(source, configuration);
  } catch (error) {
    console.log('***** Error generating favicons: %s', error.message);
    return;
  }

  await fs.mkdir(destDir, { recursive: true });

  await Promise.all(
    response.images.map(
      async (image) =>
        await fs.writeFile(path.join(destDir, image.name), image.contents),
    ),
  );

  await Promise.all(
    response.files.map(
      async (file) =>
        await fs.writeFile(path.join(destDir, file.name), file.contents),
    ),
  );

  await fs.writeFile(path.join(destDir, htmlFile), response.html.join("\n"));
}

import { favicons } from 'favicons';
import fs from 'fs/promises';
import path from 'path';


export default async (options = {}) => {
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
    console.log('@ make-favicons before favicons()')
    response = await favicons(source, configuration);
    console.log('@ make-favicons after favicons()')
  } catch (error) {
    console.log('***** Error generating favicons: %s', error.message);
    return;
  }

  await fs.mkdir(destDir, { recursive: true });

  console.log('@ make-favicons 1')
  await fs.writeFile(path.join(destDir, htmlFile), response.html.join("\n"));

  console.log('@ make-favicons 2')
  await Promise.all(
    response.images.map(
      async (image) =>
        await fs.writeFile(path.join(destDir, image.name), image.contents),
    ),
  );

  console.log('@ make-favicons 3')
  await Promise.all(
    response.files.map(
      async (file) =>
        await fs.writeFile(path.join(destDir, file.name), file.contents),
    ),
  );
  console.log('@ make-favicons 4')
}

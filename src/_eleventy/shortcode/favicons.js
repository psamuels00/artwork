import { favicons } from 'favicons';
import fs from 'fs/promises';
import outdent from 'outdent';
import path from 'path';


export default async function(options) {
  const { source, hrefPath } = options;

  const destDir = this.eleventy.directories.output + hrefPath;
  await fs.mkdir(destDir, { recursive: true });

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
  const response = await favicons(source, configuration);

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

  const html = response.html.join("\n");
  return outdent`${html}`;
};

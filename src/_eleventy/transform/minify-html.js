import { minify } from 'html-minifier-terser';


export default async (source, outputPath) => {
  if (!outputPath.endsWith('.html')) {
    return source;
  }

  const result = await minify(source, {
    collapseBooleanAttributes: true,
    collapseWhitespace: true,
    collapseInlineTagWhitespace: true,
    continueOnParseError: true,
    decodeEntities: true,
    keepClosingSlash: true,
    minifyCSS: true,
    quoteCharacter: `"`,
    removeComments: true,
    removeAttributeQuotes: true,
    removeRedundantAttributes: true,
    removeScriptTypeAttributes: true,
    removeStyleLinkTypeAttributes: true,
    sortAttributes: true,
    sortClassName: true,
    useShortDoctype: true
  });

  // const reduction = `(${((1 - (result.length / source.length)) * 100).toFixed(2)}% reduction)`;
  // console.log(`MINIFY ${outputPath}`, source.length, `→`, result.length, reduction);

  return result;
};

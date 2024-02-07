import sizeOf from 'image-size';


export default (imagePath) => {
  const dimensions = sizeOf(imagePath);
  return dimensions.width > dimensions.height;
};
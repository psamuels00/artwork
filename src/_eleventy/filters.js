export const capWords = value => {
  return value
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};


export const cleanupHack = value => {
  return value.replace(/^(.+-)?\d\d-/, '');
};


export const rmFileExt = value => {
  return value.replace(/\..+$/, '');
};


export const rmSpaces = value => {
  return value.replace(/ /g, '');
};


export const sepWords = value => {
  return value
    .replace(/-/g, ' ')
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/([A-Z])([A-Z])/g, '$1 $2')
    .replace(/(\d+)([a-zA-Z_])/g, '$1 $2')
    .replace(/([a-zA-Z_])(\d+)/g, '$1 $2')
};
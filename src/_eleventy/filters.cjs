module.exports = {
  capWords: value => {
    return value
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  },

  cleanupHack: value => {
    return value.replace(/^(.+-)?\d\d-/, '');
  },

  rmFileExt: value => {
    return value.replace(/\..+$/, '');
  },

  rmSpaces: value => {
    return value.replace(/ /g, '');
  },

  sepWords: value => {
    return value
      .replace(/-/g, ' ')
      .replace(/([a-z])([A-Z])/g, '$1 $2')
      .replace(/([A-Z])([A-Z])/g, '$1 $2')
      .replace(/(\d+)([a-zA-Z_])/g, '$1 $2')
      .replace(/([a-zA-Z_])(\d+)/g, '$1 $2')
  },
};
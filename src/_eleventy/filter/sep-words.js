export default (value) => {
  return value
    .replace(/-/g, ' ')
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/([A-Z])([A-Z])/g, '$1 $2')
    .replace(/(\d+)([a-zA-Z_])/g, '$1 $2')
    .replace(/([a-zA-Z_])(\d+)/g, '$1 $2')
};
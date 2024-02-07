export default (value) => {
  const year = new Date().getFullYear();
  return (year === value) ? year : ` ${value}-${year}`;
};
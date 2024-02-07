const config = [
  { name: 'Home', href: '/' },
  { name: 'Portfolio', enter: '/portfolio/emma/' },
  { name: 'Doodles', enter: '/doodles/abstract/' },
  { name: 'About' },
  { name: 'Resume' },
  { name: 'Nightmare', include: false },
];


const href = (name) => {
  return '/' + name.toLowerCase() + '/';
};


const normalize = (pages) => {
  for (let page of pages) {
    page.href = page.href || href(page.name);
    page.enter = page.enter || '';
    page.include = page.include ??= true;
  }

  return pages;
};


const addPrev = (pages) => {
  let offset = pages.length - 1;
  while (!pages[offset].include) {
    offset -= 1;
  }

  for (let i = 0; i < pages.length; i++) {
    let page = pages[i];
    page.prev = pages[offset].href;
    if (page.include) {
      offset = i;
    }
  }

  return pages;
};


const addNext = (pages) => {
  let offset = 0;
  while (!pages[offset].include) {
    offset += 1;
  }

  for (let i = pages.length - 1; i >= 0; i--) {
    let page = pages[i];
    page.next = pages[offset].href;
    if (page.include) {
      offset = i;
    }
  }

  return pages;
};


const indexByHref = (pages) => {
  const lookup = {};
  for (let page of pages) {
    lookup[page.href] = page;
  }

  return lookup;
};


let pages = addPrev(addNext(normalize(config)));
let lookup = indexByHref(pages);
pages = pages.filter(page => page.include);


module.exports = { pages, lookup };
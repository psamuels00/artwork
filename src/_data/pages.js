const configuration = [
  { name: 'Home', href: '/' },
  { name: 'Portfolio', enter: '/portfolio/emma/' },
  { name: 'Doodles', enter: '/doodles/abstract/' },
  { name: 'About' },
  { name: 'Resume' },
  { name: 'Nightmare', include: false },
];


class Config {
  constructor(pages) {
    pages = this.normalize(pages);
    pages = this.addPrev(pages);
    pages = this.addNext(pages);
    this.lookup = this.indexByHref(pages)
    this.pages = pages.filter(page => page.include);
  }

  href(name) {
    return '/' + name.toLowerCase() + '/';
  }

  normalize(pages) {
    for (let page of pages) {
      page.href = page.href || this.href(page.name);
      page.enter = page.enter || '';
      page.include = page.include ??= true;
    }

    return pages;
  }

  addPrev(pages) {
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
  }

  addNext(pages) {
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
  }

  indexByHref(pages) {
    const lookup = {};
    for (let page of pages) {
      lookup[page.href] = page;
    }

    return lookup;
  }
}


const config = new Config(configuration);

export const pages = config.pages;
export const lookup = config.lookup;

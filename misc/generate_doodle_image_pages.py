#!/usr/bin/env python

import os
import re


categories_pages_path = "src/doodles"


def read_file(file):
    with open(file, "r", encoding="utf-8") as fh:
        return [ line.rstrip() for line in fh ]


def write_file(file, content):
    with open(file, "w", encoding="utf-8") as fh:
        fh.write(content)


def parse_front_matter(lines, category):
    offset = 0
    num_front_matter_markers = 0

    while offset < len(lines) and num_front_matter_markers < 2:
        if lines[offset] == "---":
            num_front_matter_markers += 1
        offset += 1

    if num_front_matter_markers != 2:
        raise ValueError(f"Cannot identify front matter in {category}.html file.")

    return offset


def parse_category_page(lines, category):
    offset = parse_front_matter(lines, category)
    names = []

    while offset < len(lines):
        m = re.search(r"^\s+'([A-Z][A-Za-z]*)',?$", lines[offset])
        if m:
            names.append(m.group(1))
        offset += 1

    return names


def build_image_page_content(category, name, first, last, prev, next):
    title = re.sub(r'([a-z])([A-Z])', r'\1 \2', name)
    print(f"{category:10} {title}")
    curr = f"doodles/{category}/{name}.jpg"

    record = [
        "---",
        f"title:    {title}",
        f"layout:   pages/doodles/image.html",
        f"category: {category}",
        f"first:    {first}",
        f"prev:     {prev}",
        f"curr:     {curr}",
        f"next:     {next}",
        f"last:     {last}",
        "---",
    ]

    content = "".join([line + "\n" for line in record])
    return content


def generate_image_page(image):
    category = image['category']
    name = image['name']
    first = image['first']
    last = image['last']
    prev = image['prev']
    next = image['next']

    content = build_image_page_content(category, name, first, last, prev, next)

    out_file = os.path.join(categories_pages_path, category, name) + ".html"
    write_file(out_file, content)


def generate_image_pages(categories, image_map):
    images = []

    for category in categories:
        names = image_map[category]
        for name in names:
            images.append(dict(
                name=name,
                category=category,
                path=f"../../{category}/{name}/",
                first=f"../../{category}/{names[0]}/",
                last=f"../../{category}/{names[-1]}/",
            ))

    for offset, image in enumerate(images):
        if offset == 0:
            image['prev'] = images[-1]['path']
            image['next'] = images[offset + 1]['path']
        elif offset == len(images) - 1:
            image['prev'] = images[offset - 1]['path']
            image['next'] = images[0]['path']
        else:
            image['prev'] = images[offset - 1]['path']
            image['next'] = images[offset + 1]['path']

    for image in images:
        generate_image_page(image)


def read_category_file(category):
    file = os.path.join(categories_pages_path, category) + ".html"
    lines = read_file(file)

    return parse_category_page(lines, category)


def read_category_files():
    image_map = dict()
    categories = [
        f[:-5] for f in sorted(os.listdir(categories_pages_path))
        if f.endswith(".html")
    ]
    for category in categories:
        image_map[category] = read_category_file(category)

    return categories, image_map


def main():
    categories, image_map = read_category_files()
    generate_image_pages(categories, image_map)


main()

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
    curr = f"doodles/categories/{category}/{name}.jpg"

    record = [
        "---",
        f"title:    {title}",
        f"layout:   layouts/image.html",
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


def generate_image_pages(category):
    file = os.path.join(categories_pages_path, category) + ".html"
    lines = read_file(file)

    names = parse_category_page(lines, category)
    first = "../" + names[0]
    last = "../" + names[-1]

    offset = 0
    while offset < len(names):
        name = names[offset]
        prev = "''" if offset == 0 else "../" + names[offset - 1]
        next = "''" if offset == len(names) - 1 else "../" + names[offset + 1]
        content = build_image_page_content(category, name, first, last, prev, next)

        out_file = os.path.join(categories_pages_path, category, name) + ".html"
        write_file(out_file, content)
        offset += 1


def main():
    categories = [
        f[:-5] for f in os.listdir(categories_pages_path)
        if f.endswith(".html")
    ]
    for category in sorted(categories):
        generate_image_pages(category)


main()
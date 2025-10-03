---
title: HTML Basics
description: A small session about HTML, life hacks, every day tips, myths
layout: base
---
## Is HTML a programming language?

- Yes!
- It has a formal grammar and syntax
- You instruct the browser to do something
- a programming language that does one thing well: structure content
- It doesn't need to be turing complete to be considered a programming language
- In fact, the latter is the best feature of it, not a flaw

## Minimal HTML Example

```html
<!DOCTYPE html>
<title>Hello World</title>
Hello World!
```

This is already a valid HTML document. You don't even need
to define a head or a body. You can even omit the
top-most `<html>` tag. The only required tag is the `<title>` element.

## Adding more Structure

To be fair, you will want to have a little more structure to your document,
like metadata for search engines, and maybe a top-level
heading (`h1`) and a paragraph (`p`).

```html
<!DOCTYPE html>
<title>Hello World</title>
<meta name="description" content="This is a description">
<!-- who wrote this content ? -->
<meta name="author" content="Lea Rosema">

<!-- add a short description which will be shown under search results -->
<meta name="description" content="A minisite about HTML and accessibility fundamentals.">

<h1>Hello World</h1>
<p>Welcome to my website!</p>
```

## Further Resources

- The HTML living standard: <https://html.spec.whatwg.org/>
- Caninclude: <https://caninclude.onrender.com>
- Also look into modern css
  - <https://moderncss.dev> by Stephanie Eckles
  - <https://smolcss.dev> by Stephanie Eckles
  - [100 days of more or less modern CSS](https://www.matuzo.at/blog/2022/100-days-of-more-or-less-modern-css)
    by [Manuel Matuzovic](https://matuzo.at)
- [Inclusive Components](https://inclusive-components.design) by [Heydon Pickering](https://heydonworks.com/)
- [Every Layout](https://every-layout.dev)

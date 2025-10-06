---
title: Missing alternative text
layout: base
---

This one is also an auto-detectable issue: Whenever you have content
which is not in text form, you will need to provide alternative text.
In short: alt text.

There are people who cannot see what is on an image. This includes but
is not limited to blind people, but also other visual impairments, such as
low vision or colorblindness.

They usually use a software called "screenreader", which reads what is
seen in on an image.

## AI-generated Alternative text

Blind and low vision people often use AI tools to get a description of an image.

This is why AI is often considered a game changer. But:

- Sometimes misses important context
- AI can make mistakes

It should be a tool for users, not for authors.
[Casey](https://conesible.de) made a talk about this.

### Decorative images

Some images you use may be purely decorative.

You can add an empty alt tag (like this: `alt=""`) to the image then.
Another way is to use `aria-hidden="true"` to remove something from an
accessibility tree.

It is a bit opinionated whether they are really decorative or not.

People are sometimes devided on whether it makes sense to add alt text
to a stock image. It usually isn't too relevant to the content and it is
okay to consider them "decorative".

But on the other side, a shining smile stock image on a dentist's
page is probably not purely decorative and actually relevant to the content.

My unpopular advice is: maybe forget about stock images.
They add unnecessary noise to the webpage.

### Best practives for authoring alternative text

- Describe what is seen on an image.
- Don't include further interpretations.
- Don't make assumptions
- Describe all relevant details of the image. If it contributes to
  perceiving the content, also describe less relevant details
  (then, it isn't non-relevant at all)

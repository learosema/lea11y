---
title: Low-Effort Things
description: 
  If you are like me and work for employers and clients who lack 
  awareness about the importance of accessibility but still want 
  to start integrating accessibility best-practices, this is for you.
layout: base
date: 2025-10-05
reviewed:
  - 2025-10-25 Lea Rosema <lea@lea.lgbt>
---
If you work as a frontend developer working for several clients, chances
are that you heard there's "no budget for accessibility".

I think this especially a reason to start integrating basic
accessibility checks into the development process.

They are really low effort to follow.

The techniques below will not guarantee you will get an accessible product in 
the end, but it usually saves you from having to do expensive
"let's fix it afterwards"measures.

## Low hanging fruits

The [WEBAIM million report](https://webaim.org/projects/million/) mentions
the 6 most common accessibility issues they found in a million webpages.

They are usually easy to fix and even autodetectable. Focusing on
these problems alone would already improve accessibility significantly:

- Low color contrast
- Missing alternative text on images, videos and other non-text media
- Missing labels on form controls
- Empty buttons (without text)
- Empty links (without text)
- Missing document language




### Missing document language

This one is usually trivial to fix. Or not when working in big
enterprisey projects with a SPA architecture.

You can append a `lang`-attribute to
your `<html>` tag with the 2-letter language code of the language you use
in your document.

You can also add the `lang` attribute to other tags, which allows you to
embed content in other languages to your page.

## Keyboard navigation

Keyboard navigation is also a "key" accessibility thing, literally.

If your website or application is not keyboard-accessible, a lot of
people will have a problem using it.

### How to check

If you are using Safari, be aware it has some weird behavior when it
comes to the behavior of the <kbd>tab</kbd> key.
Go into the settings, advanced to change this.
Tick "Press tab to highlight each item on a webpage".

- Hit <kbd>tab</kbd> and check:
  - are all interactive items (links, buttons, inputs) accessible via keyboard?
  - is the order of highlighted items logical to you?

### Keyboard shortcuts

Sometimes, it might make sense to provide a couple keyboard shortcuts.
You can use the `accesskey` attribute on interactive elements to provide
some shortcuts.

Some websites include a micro library called `tiny-keys` to integrate a
quick search (command/control K) or command palette (command/control P).

But: be aware to test it with common screenreaders for conflicting key
mappings.

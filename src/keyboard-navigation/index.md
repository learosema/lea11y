---
title: Keyboard navigation
layout: base
---
Keyboard navigation is also a "key" accessibility thing, literally.

If your website or application is not keyboard-accessible, a lot of
people will have a problem using it.

## How to check

If you are using Safari, be aware it has some weird behavior when it
comes to the behavior of the <kbd>tab</kbd> key.
Go into the settings, advanced to change this.
Tick "Press tab to highlight each item on a webpage".

- Hit <kbd>tab</kbd> and check:
  - are all interactive items (links, buttons, inputs) accessible via keyboard?
  - is the order of highlighted items logical to you?

## Keyboard shortcuts

Sometimes, it might make sense to provide a couple keyboard shortcuts.
You can use the `accesskey` attribute on interactive elements to provide
some shortcuts.

Some websites include a micro library called `tiny-keys` to integrate a
quick search (command/control K) or command palette (command/control P).

But: be aware to test it with common screenreaders for conflicting key
mappings.

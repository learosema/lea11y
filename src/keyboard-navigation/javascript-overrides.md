---
title: JavaScript Overrides
layout: base
---
You can override some of the keyboard handling via JavaScript, but this
comes with the risk of breaking accessibility for screenreader users.

## Keyboard handling for canvas-based games

Browser-based games often override the arrow keys.
One way is to add the event listeners on the `window` object.
However, this will deactivate the cursors for everything else
on the webpage.

Adding a `tabindex="0"` would mark the canvas as an interactive
element and whenever it gets focused, it can receive keyboard events.
This is the more accessible option to activate custom keyboard handling.

## Custom keyboard shortcuts

Sometimes, it might make sense to provide a couple keyboard shortcuts.
You can use the `accesskey` attribute on interactive elements to provide
some shortcuts.

Some websites include a micro library called `tiny-keys` to integrate a
quick search (command/control K) or command palette (command/control P).

But as always: be aware to test it with common screenreaders and browsers
for conflicting keymappings.

---
title: Focus
description: They concept of focus, explained
layout: base
---
## What is focus

In user interfaces, focussing is marking an element as the current
active element.

## The focus ring

The focus ring is an important visual feedback when working with the keyboard.
By default, it highlights the current active element with a blue border.

A decent option is a basic outline in the current color:

```css
*:focus {
    outline: max(2px, 0.125em) solid currentColor;
}
```

The `max(2px, 0.125em)` expression ensures a focus outline width of at least
2 pixels, and it grows relatively to the current font size of the element.

You can choose to enable the focus ring only for keyboard users.
Whenever an interactive element is focused via keyboard, then the
focus outline defined by `focus-visible` becomes visible.
When clicking with a pointer device, these styles won't become
effective.

```css
*:focus-visible {
    outline: max(2px, 0.125em) solid currentColor;
}
```

## Antipattern: hiding focus

Some websites disable this via CSS.
This is discouraged, as this will make the
website inoperable via keyboard.

```css
/* this is not recommended
 * and introduces an accessibility problem, 
 * as you cannot see the focus anymore
 * so never do this.
 */
*:focus { 
    outline: none; 
}
```

People defending this piece of CSS sometimes say this
won't affect screenreader users. While this doesn't
stop screenreaders from announcing the active element,
it removes all the visual feedback which is also
bad for some screenreader users. Screenreader are
not necessarily blind, for example for users with low
vision.

## Focusable elements

There are interactive controls on the web. These are:

- form controls (`<input>`, `<label>`, `<button>`, `<textarea>`)
- links (`<a href="...">...</a>`)
- elements with a `tabindex` attribute (`tabindex="0"` or `tabindex="-1"`)

### tabindex

Elements with a `tabindex` become focusable. The numeric value specifies the
tab order of the element.

Using positive values for `tabindex` is considered bad practice. In theory,
you can enumerate through everything which should be focusable.
But this is a maintainance nightmare.

Common accessibility audits would mark this as an issue.

With a value of `"0"`, the tab order is not changed. This is helpful to
make custom controls focusable. An example for this is probably the canvas
element. Adding a `tabindex="0"` to a canvas will also enable it to receive
keyboard events.

A value of `"-1"` will remove the element from the focus order. It becomes
unreachable via the tab key, but it can still programmatically focused,
either via JavaScript (`element.focus()`) or via HTML, using hash links.

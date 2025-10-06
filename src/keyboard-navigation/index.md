---
title: Keyboard navigation
layout: base
---
Keyboard navigation is also a "key" accessibility thing, literally.

If your website or application is not keyboard-accessible, a lot of
people will have a problem using it.

## Browser Configuration

Some browsers have unusual an behavior when it comes to the tab key,
which is important for keyboard navigation.

Safari and Vivaldi don't focus every element on tab.
Other browsers should work just fine.

Safari:

- Go into the settings, advanced
- Tick "Press tab to highlight each item on a webpage".

If you are using Vivaldi:

- Go into settings, keyboard, tick "TAB focuses all controls"
- Go into settings, webpages, webpage focus, "Focus All Controls and Links"

## How to check

To check whether all interactive elements are reachable via keyboard, hit the
<kbd>tab</kbd> key repeatedly until you get through the whole page back to the
start.  

- Do you see which element is currently focused?
- Are all interactive elements reachable?
- Does the order of highlighted items make sense to you?

## Focusable elements

There are interactive controls on the web. These are:

- form controls (`<input>`, `<label>`, `<button>`, `<textarea>`)
- links (`<a href="...">...</a>`)
- elements with a `tabindex` attribute (`tabindex="0"` or `tabindex="-1"`)

### Form Controls

Yeah, `<label>` is an interactive element, even if it looks just like
regular text by default. Clicking a label will focus the input field associated
with it. You can associate an input control to the label via
the `<label for="...">` attribute.

### tabindex

Elements with a `tabindex` become focusable. The numeric value specifies the
tab order of the element. With a value of `"0"`, the tab order is not changed.
A value of `"-1"` will make it not reachable via the tab key, but it can still
programmatically focused, either via JavaScript (`element.focus()`) or via
HTML, using hash links.

Example: Clicking this link will bring the user to the main content of the page.

```html
<a class="skip-link" href="#main-content">Skip to main</a>
<nav>
<a href="...">Navigation link</a>
</nav>
<main tabindex="-1" id="main-content">
  <h1>Hello World</h1>
  <p>Lorem ipsum dolor sit amet</p>
</main>
```

## Keyboard shortcuts

Sometimes, it might make sense to provide a couple keyboard shortcuts.
You can use the `accesskey` attribute on interactive elements to provide
some shortcuts.

Some websites include a micro library called `tiny-keys` to integrate a
quick search (command/control K) or command palette (command/control P).

But: be aware to test it with common screenreaders for conflicting key
mappings.

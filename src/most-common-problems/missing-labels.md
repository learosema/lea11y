---
title: Missing labels on form controls
layout: base
---
Here's an input:

<input>

```html
<input>
```

It misses a label. Without a label, you don't know
what it is for. It could be anything and you have no choice
but to guess.

You sometimes see this with search pages. There's just a text box
and most people guess it's a search field. Because, well, you're on
a search page.

But what if it is not obvious, like in the example above?

Some sites try to fix this by putting a magnifier icon into the box.
This works for some users. Others can't see it at all: blind users,
people with low vision or folks with forced css themes that hide images.

And even if you can see it, the meaning of "magnifier" meaning "search" isn't universal.

## Why labelling is important

If a form field has no label, a screen reader might just announce

"Edit text. Blank."

There's no context and the user has no clue what to type.

Putting an icon into the box won't help either, as the screen reader
cannot interpret icons automatically.

Putting a `<div>` next to the field is still not a proper label.
When the text field is focused, the screen reader still won't
announce the label of the text field. To be fair, it is already
better than putting just an icon. But let's see how a proper
label looks like.

## Label your input

To associate a label to an input, use a `<label>` tag with a `for`
attribute. The `for` attribute points to an `id` of the input.

```html
<label for="surname">Surname</label>
<input id="surname">
```

Alternatively, you can wrap the input within a label element:

```html
<label>
    Surname
    <input>
</label>
```

<strong>Bonus usability win:</strong> Clicking the label focuses the input.

That’s especially nice for checkboxes, where the click
area of the box itself is tiny.

## Hiding the label

If you don't want a label but want to keep an invisible label
for screen reader users, you can use CSS. But be aware that
`display: none` or `visibility: hidden` also removes it from the
accessibility tree, so screen readers won't announce it.

A common CSS technique is placing it off-screen or sizing it down
to a pixel and clip it away. This way, the label is visually
hidden but would still be announced by screen readers.

```css
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
}
```

## Using ARIA

Instead of using a label with a `.visually-hidden` class, you can use ARIA labels.

```html
<input aria-label="Surname">


<h2 id="surnameLabel">Enter your surname</h2>
<input aria-labelledby="surnameLabel">
```

You can use `aria-label` to directly give it a label.
Or `aria-labelledby` to reference another element by its `id`.

Caveats: `aria-label` is sometimes not translated by automatic translation.
Also, no usability win as explained above like with a proper `<label>` tag,
so clicking the `<h2>` from the example above won't focus the text field.

## Placeholders

Be aware that placeholders don't replace labels.
Placeholders go away as soon as the user types text.
Also, screen readers often don't announce it.
Additionally, placeholders can make a form field look as if
the field is already filled in.

I usually advise against using placeholders for this reason.
If you still want to use placeholders, use them for example values
but <strong>never for labelling the field</strong>.

## Summary

- Always give inputs a label
- Don't rely on icons or placeholders
- Labels are a usability win

## Reference

- [MDN: label](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/label)
- [WCAG: Labels or instructions (Level A)](https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions)

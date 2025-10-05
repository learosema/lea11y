---
title: Missing labels on form controls
layout: base
---
Often, there are input fields and you don't know what it is for.
You often see this with search engine pages or search functions in general.

For many users, this is probably not a problem on a search engine page,
because they know it is a search field as the are on a search page.

But, well: what if not?

Some website use icons as an alternative. Often, a magnifier icon is used to
convey an input field to be a search field.

But some users can't see this item. This can be due to blindness
or low-vision eye conditions, for example.

Also, the meaning of a magnifier to convey "search" is probably less
trivial than you think.

## Labelling a form input

To associate a label to an input, use a `<label>` tag. Add an `id` attribute to
the input and link to it on the label via a `for` attribute.

```html
<label for="surname">Surname</label>
<input id="surname">
```

A usabilty win is: if you click on the label now, the input is focused.
Especially, this is helpful for checkboxes, where the clickable area of the tick
box is usually very slow.

If you don't like to have a visible label, there is the possibility to hide it for
visual users without removing it from the accessibility tree. This way, screenreader
users still get information about the text field when they focus it.

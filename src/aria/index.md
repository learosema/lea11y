---
title: On ARIA
layout: base
---
ARIA stands for <strong>Accessible Rich Internet Applications</strong>.

It is a set of attributes that is used to add further information to HTML elements
for assistive technology users. (TODO: explain more in detail)

But when it comes to aria-* attributes, I totally suck.
I try to avoid aria attributes whereever I can.

That is already a best practice and rule number one in the ARIA practices guide.
Overusing ARIA is often error-prone and can lead to accessibility issues.

## Frequently used ARIA-Attributes

There is a tiny subset of aria-attributes I frequently use.

### Emojis inside sentences

I mark my heart emoji in my footer `aria-hidden="true"` (Made with 💜 love by Lea).
This aria-hidden attribute is pretty dangerous, as it hides everything inside
from the accessibility tree. For hiding emojis inside sentences like in the example
above, it's fine as long as the sentence still makes sense if you remove the emojis.

```html
<footer>
<p>Made with <span aria-hidden="true">💜</span> love by Lea</p>
</footer>
```

### Form validation

I use `aria-describedby` to programmatically link an input to a form validation
error, used in combination with `aria-invalid="true"`

```html
<label for="name-input">Name</label>
<input id="name-input" name="name" aria-invalid="true" aria-describedby="error">
<p id="error">This field needs to be filled with your full name</p>
```

### Active links in navigation

I use `aria-current="page"` in my navigation to mark the currently active link in
my navigation, which can also be used with CSS to style that.

```html
<nav><ul>
<li><a href="/">Home</a></li>
<li><a href="/" aria-current="page">About</a></li>
<li><a href="/">Contact</a></li>
</ul></nav>
```

You could even use an attribute selector in CSS to style the currently active link:

```css
a[aria-current="page"] {
  text-decoration: underline;
}
```

### Button press state

Via `aria-pressed="true|false"` you can add a pressed state to a button.

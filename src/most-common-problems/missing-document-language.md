---
title: Missing document language
layout: base
---

This one is trivial to fix in most cases.
Yet, it isn't in these situations:

- when working in big enterprisey projects.
- when working with a Single-Page-Application architecture.
  Angular, React and friends often forget about setting it,
  because the setting is in the static html and not in the dynamically generated
  markup.
- with authored content. Either autodetect the language or let
  the user specify it. I usually forget specifying the language on social media.
  
To set the document language, you append a `lang`-attribute to
your `<html>` tag. The value is a with the 2-letter language code
of the language you use in your document.

You can also add the `lang` attribute to just parts of the document.
This allows you to embed content in other languages to your page.

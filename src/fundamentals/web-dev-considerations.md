---
title: Web Design considerations
layout: base
---
Here, I'm listing the most important web design considerations when building with
accessibility in mind. I only listed things that came up into my head by heart
while writing this. Chances are this is very incomplete, but I think I got some
important points.

## Blindness

Blind people can use their computer with a screen reader or braille display.
The braille display enables them to read text by feeling with their fingers.

Not all screen reader users are blind. You don't know.

- Images and videos (all non-text-media) must have alternative text
- keyboard navigation must work
- longer pages should be structured, make use of headlines and landmarks
- tables containing nested tables can be very difficult to read

## Colorblindness

- Colorblind people may struggle interpreting charts when color is used as sole
  characteristic to convey information.
- It isn't necessarily only red/green, some people cannot see colors at all

## Low vision

There are a wide variety of vision impairments.

- Low vision people might also use a screen reader. Or not. You don't know.
- There is also software that can magnify parts of the screen, and sometimes there
  is also a screenreader integrated.
- Some low vision people override the colors on operating system level, eg.
  high contrast themes
- there are also browser-level overrides, so called user agent stylesheets.
- Bright colors can cause pain. People often use eye-friendly themings, such as
  yellow text on black
- vision can be blurry; users may struggle reading blocks of text
- small text (< 16px) should be avoided
- dense line height (< 1.2) should be avoided.
- enlarging the text to, say, 400% must not break the page layout

## Deafness

Deaf people will need captions on audio elements, including videos when they also
contain audio tracks.

- use Live Captions, best when done or at least reviewed by a human :)
- the transcript has all the content in a text document.

## Deafblindness

Every considerations for both deafness and blindness apply, plus:

- live captions in videos won't work, they require a transcript

## Motor disabilities

Again, there's a wide variety of motor disabilities

- some people cannot move their body, they use alternative input methods just as
  eye tracking assistive technology or speech-input
- people with tremor cannot use pointer devices reliably, so
  keyboard navigation must work

## Cognitive disabilities

There's also a wide variety of cognitive disabilities, such as

- difficulty reading (Dyslexia)
- difficulty doing maths (Dyscalculia)
- difficulty understanding
- struggle with captchas, they are probably impossible to solve
- struggle with overloaded pages
- struggle with time limits (session timeout, 2FA)

So:

- don't overload the page
- use easy language
- provide a way to extend sessions
- implement a "save draft" for more complex forms, so users can finish it later

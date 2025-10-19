---
title: Low color contrast
layout: base
script: blurry-vision.js
---

The following text uses a greyish color and is a little smaller:

<span style="color: #777; font-size: smaller;">Hello. Can you read this?</span>

Now, you can click the button to blur this page a bit for a temporary amount of time.
It will probably still be readable, but this depends on your eyesight, your vision
and your lighting.

<button id="blurButton"> Activate blurry vision </button>

## Low contrast in designs

Designers sometimes pick color combos that look stylish on their monitors —  
but not everyone sees like they do.  

People with low vision, color blindness, or even just bright
sunlight on their screen can make it hard to read low-contrast text
or spot faint UI elements.

Even Apple does it.  
Their light-green buttons on white backgrounds (e.g., `#34C759` on `#FFFFFF`)  
don't meet the [WCAG 2.2 contrast ratio requirements](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum).

You only get enough contrast if you enable the "Increase Contrast"
setting in macOS accessibility options.

That's the wrong mindset. Accessibility shouldn't require users to adjust
system settings for sufficient contrast ratios.

Liquid Glass makes it even worse. Everything is transparent.

## The numbers

WCAG 2.2 defines minimum contrast ratios for text:

- 4.5 to 1 for normal text  
- 3 to 1 for large text (18 pt regular or 14 pt bold and up)

## How to check

There are a lot of tools to check it:

- [Webaim color contrast checker](https://webaim.org/resources/contrastchecker/)
- [Contraste App](https://contrasteapp.com) for macOS
- [Chrome dev tools](https://developer.chrome.com/blog/devtools-tips-5)
- [Chrome dev tools: Lighthouse](https://developer.chrome.com/docs/lighthouse/overview)
- KDE has a built-in color contrast checker app
- Browser extensions (WAVE, AXE, etc)

## What about APCA?

You may have heard about APCA (Advanced Perceptual Contrast Algorithm).
Some recommend to use it instead of the WCAG color contrast specification.

They’re not wrong: APCA models human perception more accurately,
especially for light-on-dark text.

The thing is: APCA is not part of the WCAG 2.2 specification.
It is mentioned in the WCAG 3, which is not ready yet.

For commercial projects, you are probably required to follow the
WCAG 2.2 specification.

For private projects, you can maybe go ahead and try that out,
but be aware things can be subject to change.

## Reference

- [WCAG Contrast Minimum (Level AA)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum)
- <https://apcacontrast.com>

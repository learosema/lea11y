# Low color contrast

Designers sometimes tend to select color combinations which
won't work for people with low vision.

I would include the folks at Apple here, their lightgreen on white
buttons fail the WCAG color contrast success criterion. You only get
sufficient contrast when you activate the "high contrast" setting in the
accessibility settings.

Which is the wrong mindset.

## How to check

- Contraste App for Mac OS
- KDE has a built-in color contrast checker app
- Webaim color contrast checker
- Lighthouse (integrated in Chromium-based browsers)
- Browser extensions (WAVE, AXE, etc)

## What about APCA?

Some folks at LinkedIn recommend to follow the APCA
guidelines for color contrast, calling the WCAG color contrast deprecated.

The thing is: APCA is not part of the WCAG 2.2 specification.
It is mentioned in the WCAG 3, which is not ready yet.

For commercial projects, you are probably required to follow the
WCAG 2.2 specification.

For private projects, you can maybe go ahead and try that out,
but be aware things can be subject to change.

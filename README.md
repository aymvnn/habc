# HA Business Club

A holding-style, single-screen site. **Bringing worlds together** — connecting the
business worlds of the Netherlands and the Arab world.

Deliberately minimal: a heraldic crest, the wordmark, one line, no scroll. The
restraint is the message.

## Structure

- `index.html` — the entire site (self-contained: inline CSS + a little JS)
- `assets/` — crest, wordmark, lockup, favicon and social image (cut from the master logo)
- `vercel.json` — clean URLs + long-lived caching for `/assets`

## Local preview

Any static server works, e.g.:

```bash
python -m http.server 8123
# then open http://localhost:8123
```

## Tech notes

- No build step. Pure HTML/CSS/JS.
- Type: Bodoni Moda (display), Cinzel (engraved caps), Amiri (Arabic).
- Respects `prefers-reduced-motion`; single viewport on desktop and mobile.

Hosted on Vercel.

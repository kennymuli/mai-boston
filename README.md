# mai — "Innovation Meets Tradition"

Redesign of [mai.boston](https://www.mai.boston/), a French-inspired Japanese izakaya at the entrance to Boston's Seaport District (31 Northern Ave). Built on the Matsunori site template — same stack, motion grammar, and section specs, re-skinned for Mai.

Single-page marketing site: hero with brand video, live open/closed status, a scroll-pinned "Art of the Handroll" sequence (HOLD / DIP / EAT, straight from Mai's dinner menu), story sections from the About page, a menus dossier linking the three PDF menus, izakaya quote, gallery (desktop strip / mobile swipe deck), footer. Dark, editorial, motion-forward.

## Stack

Static vanilla HTML/CSS/JS — no framework, no build step — served by a Cloudflare Worker (static assets only; no API routes).

```
public/
├── index.html        # all markup, JSON-LD
├── css/styles.css    # design tokens + all styles
├── js/main.js        # status computation, reveal system, pinned sections, gallery deck
├── js/cursor.js      # the seam-and-seal cursor
└── assets/           # photography, renders, hero video, logo, menu PDFs
src/
└── worker.js         # serves assets
```

## Develop

```sh
wrangler dev
# → http://localhost:8787
```

The mobile experience (gallery swipe deck, compact pinned section) activates below 780px viewport width. The intro loader plays once per session (`sessionStorage` key `mai-intro`); clear storage to replay it.

## Deploy

```sh
wrangler deploy
```

Routes are configured for `mai.boston` / `www.mai.boston` (Cloudflare custom domains).

## Design notes

- Tokens and motion grammar are inherited from the Matsunori template. Colors are never pure black/white; the two Matsunori accents are re-mapped to Mai's palette: **patina teal `#4FB3A9`** (from the verdigris walls in Mai's photography) is the only interactive accent, and **bordeaux wine `#8E3B3F`** (from the menu's maroon) is ceremonial — max one moment per view.
- The brand kanji is 舞 ("mai" — dance); the loader/footer tag is 居酒屋 (izakaya).
- Open/closed status is computed live in `America/New_York` from Mai's hours: lunch daily 12–3 PM; dinner Sun–Thu 5–10:30 PM, Fri–Sat 5 PM–12 AM.
- Reservations: OpenTable rid 1402168. Delivery: Uber Eats. Gift cards: Square.
- Menu PDFs are baked into `public/assets/` (sourced from the Google Drive embeds on mai.boston); replace them when the menus change.
- `prefers-reduced-motion` is fully supported: loader skipped, reveals render final-state, pinned sections still function with hard cuts.

## Content sources

All copy, photography, renders, the hero video, and the menu PDFs come from mai.boston (Squarespace) and Mai's published menus. Google rating badge is omitted until a rating/count is confirmed.

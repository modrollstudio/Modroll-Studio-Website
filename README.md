# Modroll Studio — website

Public site for [Modroll Studio](https://modroll.studio), a small independent studio
building tabletop-RPG-inspired Minecraft mods.

Static site: **React + SCSS + Vite**, served as Cloudflare Workers static assets.
Every push to `main` builds and deploys automatically: Cloudflare Workers Builds
(configured in the Cloudflare dashboard, not in this repo — there is no GitHub
Action) runs `npm run build` then `npx wrangler deploy`, using `wrangler.jsonc`.
`npm run deploy` does the same from a local checkout, but needs Cloudflare
credentials first (`npx wrangler login`).

## Development

```
npm install
npm run dev      # local dev server
npm run build    # production build → dist/
npm run preview  # serve the production build locally
```

## Structure

- `src/components/` — small presentational components (Button, Card, Grid,
  Navbar, Footer, Header, Section, Badge, Logo, CardArt, TypingText,
  FadeInOnScroll, FloatingEmbers, Roadmap). Plain props and CSS modules, one
  folder each.
- `src/data/mods.js` — **the mod catalogue.** Adding a mod entry here (slug,
  copy, features, links) creates its nav entry, home card, and `/mods/:slug`
  page. Two manual steps remain: put the mod's icon image in `src/assets/`
  (imported at the top of mods.js), and add the page URL to
  `public/sitemap.xml`. Install links only show once `status` is `'Released'`;
  a link with `todo: true` renders as "coming soon" until its `href` goes live.
  `repo` (optional) adds a GitHub button to the page's contribute/contact block.
- `src/data/roadmap.js` — the "road ahead" timeline on the home page: one entry
  per milestone with `status` of `released`, `next`, or `planned`.
- `src/pages/` — Home, the data-driven ModPage template, and the 404 page.
- `src/styles/global.scss` — theme. All colors live as CSS custom properties in
  the `:root` block here — change a color once there and every component picks
  it up (components reference them via the `$` aliases in `_tokens.scss`).

## Theming — "Tavern Table"

Candlelit umber and parchment gold, the campaign-book warmth of tabletop D&D.
Critfall's ember red stays in the family as the damage accent:

| Role | Hex |
|------|-----|
| Background (candlelit umber) | `#191009` |
| Surface | `#251A0E` |
| Border | `#3D2B16` |
| Text | `#EFE3CD` |
| Parchment (headings) | `#F3E6C8` |
| Muted | `#A98F68` |
| Primary (parchment gold) | `#E8A33D` |
| Ember red | `#C24B2E` |
| Deep crimson (status badges) | `#7A1F2B` |

Type: **Cinzel** (display, headings) + **Alegreya Sans** (body), both bundled
locally via `@fontsource` — no runtime font CDN.

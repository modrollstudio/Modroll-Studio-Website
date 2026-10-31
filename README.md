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
  per milestone with `status` of `released`, `ongoing`, `next`, `planned`, 
  `paused` or `abandoned`.
- `src/pages/` — Home, the data-driven ModPage template, and the 404 page.
- `src/styles/global.scss` — theme. All colors live as CSS custom properties in
  the `:root` block here — change a color once there and every component picks
  it up (components reference them via the `$` aliases in `_tokens.scss`).

## Store pages

The CurseForge and Modrinth descriptions share one template. Each mod keeps its text in
`docs/store/modrinth.md` in its own repo; the images live here in `public/store/`, so
`https://modroll.studio/store/...` serves them to both sites.

- `tools/store_art.py` draws the section headers (`public/store/headers/`) and the
  Critfall, Checks and Initiative banners. Python 3 and Pillow; edit the script, not
  the images. The Headless Horseman's banner is copied from his repo's `branding/`.
- `tools/store_page.py <mod repo>` writes `docs/store/curseforge.html` from the
  Markdown. The CurseForge app shows spoilers open, so a `<details>` option list is
  cut to its bold rows there.
- `tools/store_options.py [--main] <config json>` prints a mod's options and their
  defaults from its config file; `--main` prints only each feature's own switch, for
  a mod whose full list would be too long to describe.
- Screenshots come from each mod's `runUiShots` task where it has one, saved as
  JPEG into `public/store/<mod>/`.

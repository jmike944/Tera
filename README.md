# Tera Desarrollos — Sitio web

Marketing site for **Tera Desarrollos**, a Saltillo (Coahuila, México) residential
home builder. Presents the current development — **Fraccionamiento Hacienda El
Milagro (HEM)** — its three home models (Volterra, Top Urban, Sky Deck), the
construction process, amenities, master plan / available lots, and a contact
flow. Spanish-language (es-MX).

Built with **Next.js 16** (App Router, Turbopack), **React 19**, **TypeScript**,
**Tailwind CSS v4**, and a token-driven design system derived from the brand's
design handoff. Icons via **lucide-react**; fonts via `next/font` (Sora, Manrope,
JetBrains Mono).

## Pages

- `/` — Home: hero, models grid (with size filter), construction process, CTA, footer
- `/desarrollo-hem` — Development: hero, location, services, amenities, master plan + lots, contact
- `/modelo/[slug]` — Model detail for `volterra`, `topurban`, `skydeck`

## Project structure

```
src/
  app/
    layout.tsx              # next/font setup + root <html>
    globals.css             # design tokens (colors, type, spacing, motion) + base
    page.tsx                # home
    desarrollo-hem/         # development page
    modelo/[slug]/          # model detail (static-generated for each model)
  components/
    ui/                     # design system: button, badge, card, tag, stat,
                            # icon-button, input, property-card, icon
    site/                   # header, footer, hero, developments, process,
                            # contact-modal + provider
  lib/
    models.ts               # single source of truth — models, common, desarrollo
    utils.ts                # cn() helper
public/
  logo-tera-*.png
  models/<slug>/render.png  # gallery.png · plano-pb.png · plano-pa.png …
  desarrollos/hem/*.png     # acceso · gym · juegos · masterplan · ubicacion
```

All content is data-driven from `src/lib/models.ts`. To change a price, render,
or amenity, edit that file — components consume it directly. Replace with a CMS
fetch when ready.

## Design tokens

Ported verbatim from the design handoff into `src/app/globals.css` as CSS
custom properties:

- **Brand:** `--tera-500 #119FD6` (primary) with aqua→ocean ramp; signature
  gradient `--grad-brand`.
- **Ink/navy** for headings and dark surfaces.
- **Cool neutrals** + a **warm clay** accent for terra/land warmth.
- **Type:** Sora (display), Manrope (body), JetBrains Mono (specs).
- **Scale, radius, shadows, motion** all token-driven (see the top of `globals.css`).

## Getting started

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # production build
npm run lint
```

## Deployment

Optimized for **Vercel**. `next build` prerenders the home page, the development
page, and all three model pages as static HTML — no runtime server required for
the marketing site.

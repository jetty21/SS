# Scribble Street — Creative Agency Website

> **We don't follow trends. We start them.**
> Bold ideas. Sharp execution. Made to be noticed.

A faithful, responsive recreation of the **Scribble Street** boutique creative-agency
landing page — a dark, street-style design built around vivid red + highlighter-lime
accents, tall condensed display type, marker/handwriting scripts, and a gritty
collage aesthetic (torn paper, tape, scribbles, badges, barcodes, asterisks).

## ✦ What's inside

| Section | Headline |
|---|---|
| **Hero** | *We Don't Follow Trends. We Start Them.* |
| **Services** | *Everything Your Brand Needs To Show Up Louder.* (6 service cards) |
| **Work** | *Work That Doesn't Whisper.* (8 project tiles) |
| **About** | *Built Lean. Wired Sharp. Allergic To Boring.* |
| **Process** | *No Drama. No Fluff. Just Impact.* (4 steps) |
| **Contact** | *Let's Make Something Loud.* (CTA + footer) |

## ✦ Tech

- **Plain HTML / CSS / vanilla JS** — zero build step, no dependencies.
- All decorative art (scribbles, asterisks, rotating badges, line icons, barcodes,
  grain texture, wireframe globe, film strips) is **inline SVG + CSS** — fully scalable
  and self-contained.
- **Google Fonts:** Anton (display), Oswald (condensed UI), Inter (body),
  Space Mono (labels/technical), Permanent Marker + Caveat (hand-lettering).
- Scroll-reveal animations, scroll-spy nav, sticky header, mobile menu, and a
  subtle pointer parallax on the hero collage (all respect `prefers-reduced-motion`).
- Responsive from large desktop down to small mobile.

## ✦ Run it

It's a static site — just open `index.html`, or serve the folder:

```bash
# any static server works
python3 -m http.server 8000
# then visit http://localhost:8000
```

## ✦ Project structure

```
.
├── index.html      # all markup (semantic sections + inline SVG art)
├── css/styles.css  # design tokens, layout, components, responsive
├── js/main.js      # nav, scroll-reveal, scroll-spy, parallax
└── assets/         # drop real photography / brand imagery here
```

## ✦ Swapping in real photography

The photographic areas of the collages and project tiles use mood-matched
**CSS/SVG placeholders** (`.ph-*` classes) so the site always renders with no
external assets. To use real imagery, drop files into `assets/` and replace the
relevant `.ph-*` element's `background` with `url(...)` — class names are
descriptive (`.ph-city`, `.ph-portrait-1`, `.ph-rise`, `.ph-laptop`, etc.).

---

*Creative from the street. Built for brands that move.*  ✳

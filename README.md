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

## ✦ Photography

The collages and project tiles use **real AI-generated photography** (night
skyline, moody street portraits, concert crowd, and product shots) that match the
dark / red / lime mood of the design. The image URLs are defined once as CSS
variables at the bottom of `css/styles.css`:

```css
:root{
  --img-city:url("…");      --img-portrait:url("…");
  --img-concert:url("…");   --img-athlete:url("…");
  /* …etc */
}
```

Each photo is layered **over** its original CSS gradient, so if a URL is ever
unreachable the styled gradient shows through — the page never breaks.

**To self-host** (recommended for production): download each image into `assets/`
and change the `url(...)` in the `:root` block to a local path, e.g.
`--img-city:url("assets/city.png");`. The class names are descriptive
(`.ph-city`, `.ph-portrait-bw`, `.ph-rise`, `.ph-laptop`, `.ph-phone`, …) if you
prefer to wire your own brand photography instead.

---

*Creative from the street. Built for brands that move.*  ✳

# 3D Animated Heizen-Inspired Homepage

A WebGL-driven, single-page homepage modeled on the Devin AI / Lusion archive aesthetic — a dark, cinematic 3D canvas with scroll-driven scenes — populated with Heizen's content (AI + Humans shipping supply chain software 10x faster).

## Visual direction

- **Aesthetic**: Pitch-black background, monochrome with one electric accent (electric indigo `#4f46e5` shifting to mint `#73ffb8` on key moments). Heavy use of fine grain/noise, chromatic aberration on hover, large oversized type (Space Grotesk / Inter Tight), and a fixed full-viewport `<Canvas>` behind the DOM content.
- **Vibe**: cinematic, futuristic, "lab" feel — matches both Lusion's tactile 3D and Heizen's "deterministic AI" message.

## Tech stack

- `@react-three/fiber` + `@react-three/drei` + `three` for the 3D layer
- `@react-three/postprocessing` for bloom, chromatic aberration, noise, vignette
- `motion` (Framer Motion) for DOM text/UI animation
- `lenis` for buttery smooth scroll, synced to R3F scroll controls
- Tailwind tokens added to `src/styles.css` (no new files for design system)

## Page structure (single scrollable route at `/`)

```text
┌─────────────────────────────────────────────┐
│ Fixed <Canvas> (z-0, full viewport)          │
│  ├─ Scene 1: Distorted chrome blob + grid    │
│  ├─ Scene 2: Floating data shards / network  │
│  ├─ Scene 3: Particle field forming logos    │
│  └─ Scene 4: Wireframe globe / ticker        │
└─────────────────────────────────────────────┘
┌─────────────────────────────────────────────┐
│ DOM overlay (z-10, scrollable sections)      │
└─────────────────────────────────────────────┘
```

### Sections (DOM, scroll-locked to 3D scenes)

1. **Hero** — Oversized headline "Software Delivery at Light Speed", subline "AI + Humans ship supply chain software 10x faster", primary CTA "Book a Strategy Call". Behind it: a slowly rotating distorted MeshDistortMaterial blob with refraction. Marquee strip at top: "As Seen on Shark Tank · Flat 10% Off on Sprint Cost".
2. **Trusted by** — Horizontal marquee of partner names (ITC, HUL, DHL, Compass Group) and "Backed by Titan Capital". Rendered as 3D extruded text drifting on a track.
3. **Problem** — "Too Many Supply Chain Tools. Not Enough ROI." Large statement type, 3D shattered cube fragments reassembling on scroll.
4. **Pillars (4 cards)** — Scroll-pinned section where each pillar swaps the 3D scene:
   - No More Bottlenecks (natural-language queries)
   - One Trusted View (ERP + 3PL + BI unified)
   - ROI From Tools (agents on data lake)
   - Safe AI Outputs (deterministic / governed / verifiable)
   - Fast Scenarios (what-if modeling, with the Inventory $10,000K / Service 98.4% / Cost $28,000K stats)
5. **Testimonials** — 3D carousel of curved cards (DHL, Goldcast, Tan90, Baki AI quotes).
6. **CTA footer** — Giant "Ship 10x faster." headline, single CTA button, minimal footer links.

## Implementation steps

1. Install deps: `three @react-three/fiber @react-three/drei @react-three/postprocessing motion lenis`.
2. Extend `src/styles.css` with dark theme tokens (background `oklch(0.05 0 0)`, foreground near-white, accent indigo, accent-glow mint) and a `--font-display` for Space Grotesk via Google Fonts link in `__root.tsx` head.
3. Create `src/components/three/Scene.tsx` — fixed-position `<Canvas>` with Suspense, lights, postprocessing stack (Bloom + ChromaticAberration + Noise + Vignette), and a `<ScrollControls>` driving sub-scenes.
4. Create scene primitives in `src/components/three/`:
   - `HeroBlob.tsx` — icosahedron with `MeshDistortMaterial` + `MeshTransmissionMaterial`
   - `ShardField.tsx` — instanced thin boxes drifting / forming a grid
   - `ParticleNetwork.tsx` — `Points` with shader-driven swirl
   - `WireGlobe.tsx` — wireframe sphere with orbiting tickers
5. Create `src/components/sections/` for each DOM section (Hero, TrustedBy, Problem, Pillars, Testimonials, FinalCTA) with motion-driven entrances.
6. Wire Lenis smooth scroll in `__root.tsx` and bridge scroll progress to R3F via a small Zustand store or `useScroll` from drei.
7. Replace `src/routes/index.tsx` placeholder with the composed homepage; update `<head>` meta (title "Heizen — Software Delivery at Light Speed", matching description, og tags).
8. Add graceful fallback: if WebGL unsupported, render static gradient background instead of `<Canvas>`.

## Technical notes

- All 3D runs in a single shared `<Canvas>` to avoid multiple WebGL contexts.
- Postprocessing limited on mobile (detect via `useMediaQuery`) — drop bloom layers, lower DPR to 1.
- Heavy assets lazy-loaded with `React.lazy` + `Suspense` so initial paint stays fast.
- No backend/data — pure presentational marketing page. Content is hardcoded from Heizen's homepage copy.
- No copying of Heizen's images/logos — partner logos rendered as styled text marks; testimonial avatars rendered as initials in 3D-tilted cards.

## Out of scope

- Other Heizen pages (About, Case Studies, Blogs, Careers, Contact) — only the homepage as requested. Nav links can be placeholders.
- Exact 1:1 recreation of Lusion's bespoke shaders (those are proprietary art). We match the structural feel: full-bleed 3D canvas, scroll-driven scenes, oversized typography, cinematic post-processing.

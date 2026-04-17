# COMPASS Template Home Transplant Implementation Plan

> Execute inline, one task at a time. No subagents.

Date: 2026-04-17
Project: COMPASS workshop microsite redesign

## Goal

Adapt the `COMPASS` homepage so it follows the real `Artham` template structure almost intact, while replacing palette, copy, CTA targets, and media with `COMPASS` content and placeholders.

Internal pages remain on the richer `COMPASS` path already approved. The `Programme` page stays vertically readable and separate from the homepage transplant.

## Architecture

- Keep Astro bilingual routing and the existing typed data layer.
- Use the real `Artham` repo as the homepage structural reference.
- Replace the current home composition instead of layering more adjustments on top of it.
- Keep all CTA targets mapped to existing `COMPASS` routes.

## Task Order

### Task 1: Transplant the upper homepage structure

Objective:
- make the top of the homepage feel immediately like the original template

Files:
- `tests/site.test.ts`
- `src/data/site.ts`
- `src/lib/site.ts`
- `src/pages/[lang]/index.astro`
- `src/components/home/HeroSection.astro`
- `src/components/home/ProgrammePreviewSection.astro`
- `src/components/home/DarkStageSection.astro` `new or replacement`

Steps:
- Write failing raw-source tests for:
  - `DarkStageSection` being mounted on the homepage
  - `HeroSection` containing trust-row and marquee structure
  - `ProgrammePreviewSection` exposing three navigation cards
- Run `npm test -- tests/site.test.ts` and confirm failure
- Add homepage content fields for:
  - trust-row labels
  - marquee placeholder labels
  - dark-stage title/copy/video placeholder
  - navigation-card content for `Programme`, `Speakers`, and `Venue`
- Expose those fields from `src/lib/site.ts`
- Rebuild `HeroSection.astro` around:
  - centered title stack
  - dual CTA row
  - trust row
  - full-width moving marquee
- Add `DarkStageSection.astro` after the hero
- Turn `ProgrammePreviewSection.astro` into the three-card navigation band
- Update `src/pages/[lang]/index.astro` to the transplanted top-of-page order
- Run:
  - `npm test -- tests/site.test.ts`
  - `env ASTRO_TELEMETRY_DISABLED=1 npm run build`
- Stop and review in local preview

Preview check:
- `http://127.0.0.1:4321/en/`
- `http://127.0.0.1:4321/it/`

### Task 2: Transplant the lower homepage sections

Objective:
- align the rest of the homepage with the template slots

Files:
- `tests/site.test.ts`
- `src/pages/[lang]/index.astro`
- `src/components/home/FeaturedSpeakersSection.astro`
- `src/components/home/WhyCompassSection.astro`
- `src/components/home/VenuePreviewSection.astro`
- `src/components/home/MediaShowcaseSection.astro`
- `src/components/site/Footer.astro`

Steps:
- Add failing raw-source tests for lower-home section order and key template markers
- Rebuild:
  - speakers showcase
  - editorial `Why COMPASS` slot
  - venue/media sections
  - rich footer
- Run:
  - `npm test -- tests/site.test.ts`
  - `env ASTRO_TELEMETRY_DISABLED=1 npm run build`
- Review locally before touching internal pages

### Task 3: Finish internal-page polish

Objective:
- keep homepage transplant intact while finishing `Programme` and secondary pages

Files:
- `tests/site.test.ts`
- `src/pages/[lang]/programme/index.astro`
- `src/components/programme/SessionBlock.astro`
- `src/components/programme/TalkListItem.astro`
- secondary-page route files
- shared rich-page components

Steps:
- refine `Programme`
- finish richer secondary pages
- run:
  - `npm test`
  - `env ASTRO_TELEMETRY_DISABLED=1 npm run build`
- review representative `en/it` routes locally

## Verification Standard

Do not claim a task complete until both pass:

- `npm test -- tests/site.test.ts` for task-local work
- `env ASTRO_TELEMETRY_DISABLED=1 npm run build`

When a task changes the homepage, also check the local preview visually before moving on.

# COMPASS Template Home Transplant Redesign

Date: 2026-04-17
Project: COMPASS workshop microsite redesign
Status: Approved redesign baseline, revised after template-repo review

## Objective

Refine the current bilingual `COMPASS` Astro microsite so the homepage keeps almost the same visual structure as the original `Artham Summit` template, while swapping in `COMPASS` palette, copy, navigation targets, and placeholder media.

The redesign should feel like a direct `COMPASS` adaptation of the template rather than a loose interpretation.

## Approved Direction

- Keep the existing `Astro` bilingual site structure and typed local content model.
- Rebuild the homepage so it follows the original template's section order and visual grammar almost intact.
- Preserve the `COMPASS` content hierarchy for internal pages and dedicated routes.
- Use placeholders for photos, videos, partner marks, and pending content details so real materials can be swapped in later without layout rework.
- Keep the overall tone `editorial-research`, not startup-marketing, even when the layout mirrors the original template.

## Core Product Decision

This redesign now follows the approved approach:

- `Template transplant on the homepage, COMPASS structure elsewhere`

That means:

- keep the original template's homepage order, full-bleed staging, marquee behavior, dark media stage, card rhythm, carousel rhythm, and rich footer feel
- keep the current `COMPASS` page map, workshop-specific content model, and bilingual routing
- simplify dense information where the current site feels overloaded, especially on `Programme`

## Design Goals

### Visual goals

- Make the homepage feel structurally the same as the original template rather than merely inspired by it.
- Restore moving visual surfaces, layered backgrounds, animated reveals, marquee imagery, and richer section transitions.
- Reintroduce image-driven and video-driven content blocks using placeholder assets.
- Make secondary pages feel intentionally designed, not like plain utility pages.

### Information goals

- Keep the site easy to scan despite the richer presentation.
- Separate overview pages from detail-heavy content.
- Reduce cognitive load in the programme flow.
- Preserve bilingual parity between `en` and `it`.

## Information Architecture

The page map remains:

- Home
- Programme
- Speakers
- Venue
- Registration
- About
- Organizers
- FAQ

The redesign does not add new top-level sections. It improves how these pages are staged, sequenced, and visually presented.

## Homepage Direction

The homepage should become a direct `COMPASS` adaptation of the original template.

### Required behavior

- Rebuild the homepage in the same sequence as the original template.
- Keep the original template's large hero, image marquee, dark stage section, cards, carousel rhythm, and rich footer feel.
- Swap all commercial event copy for `COMPASS` workshop copy and placeholder assets.
- Maintain clear CTAs for `Programme`, `Registration`, `Speakers`, and `Venue`.

### Target homepage structure

- header and section scroll nav
- hero with workshop title, date, venue, CTA, trust row, and full-width moving image marquee
- dark media stage adapted from the original template's second section
- three navigation cards for `Programme`, `Speakers`, and `Venue`
- featured speakers showcase with placeholder images
- editorial `Why COMPASS` section mapped onto the testimonial-style slot
- venue carousel / immersive venue section
- archive or teaser video placeholder section
- rich footer adapted to `COMPASS`

### Content policy

- Use placeholders wherever real imagery, logos, or clips are not available yet.
- Preserve the template's strong visual framing even when the media is placeholder-based.
- The homepage should not collapse back into centered utility blocks.

## Programme Direction

The `Programme` page is the main structural correction in this redesign.

### Problem to solve

The current programme presentation feels too dense and confusing because each session block exposes too much detail too early.

### Approved solution

- Keep the page vertically structured.
- Make it visually broad, calm, and readable.
- Do not surface full abstract content inside the main programme flow.
- Keep talk entries compact and link outward to dedicated talk detail pages.

### Each programme session should show

- time range
- session title
- short session description
- chair or chairs when useful
- compact list of talks

### Each programme session should not show

- full abstracts inline
- large repeated metadata blocks
- visually crowded nested detail panels

### Target reading experience

The page should feel like a clean narrative schedule, not a dense archive. Users should understand the shape of the day quickly, then open talk detail pages only when they want depth.

## Secondary Page Direction

Secondary pages should remain in the richer `COMPASS` direction already agreed, but they do not need to copy the original template one-to-one.

### Principle

It is acceptable to start slightly more expressive and reduce later if needed. The first redesign pass should bias toward richness rather than austerity.

### Target behavior

- Each secondary page should feel designed, not merely formatted.
- Pages should reuse the original template's expressive devices: large media blocks, motion, alternating layouts, and stronger section framing.
- Content hierarchy must remain clear so the added richness does not become clutter.

### Page-level expectations

#### Speakers

- Strong listing grid with placeholder images
- Richer featured-speaker presentation patterns
- Speaker detail pages remain the home for biographies and related talks

#### Venue

- Larger visual treatment
- map or travel panel can be staged more prominently
- placeholder photography allowed

#### Registration

- More event-like staging around the registration CTA
- room for embed, external link, or placeholder media support block

#### About

- Editorial page with stronger visual transitions and supporting media placeholders

#### Organizers

- Richer presentation of committee and affiliations, with placeholder portraits if needed

#### FAQ

- More visually integrated than a plain accordion page, while still prioritizing readability

## Motion and Media Strategy

### Motion

Reintroduce more of the original template's movement vocabulary:

- stronger hero motion
- section reveal choreography
- animated media framing
- layered background movement where it supports atmosphere

Motion should remain lightweight enough for a static site and should not undermine readability.

### Media

Reintroduce:

- placeholder photos
- placeholder speaker imagery
- placeholder venue imagery
- placeholder video sections

Media blocks should help recover the original template's presence even before final assets are available.

## Content and Placeholder Strategy

Until real materials are provided, use placeholder content for:

- speaker images
- venue images
- video thumbnails or video panels
- partner or institutional logo groups
- certain descriptive details that are not yet finalized

Placeholders should be clearly swappable and should not force future structural changes.

## Technical Direction

- Keep the existing bilingual route structure.
- Keep the current typed data layer for `site`, `speakers`, `sessions`, and `talks`.
- Focus implementation effort on page composition, component redesign, and visual behavior.
- Preserve existing dedicated talk pages so abstract and detail depth remain outside the main programme flow.
- Use the actual `Artham` repo as the structural reference for the homepage, not screenshots or approximate recreations.

## Scope for the Next Implementation Pass

### In scope

- homepage redesign toward a near-template transplant
- richer media and motion treatment across key pages
- programme simplification and visual cleanup
- richer secondary page layouts
- placeholder insertion where real assets are missing

### Out of scope

- final production copy everywhere
- real photos and video assets
- final sponsor or partner asset set
- post-event materials
- unnecessary data-model refactors unrelated to presentation needs

## Verification Expectations

Implementation based on this spec should be checked through:

- `npm run build`
- `npm run test`
- route verification for `en` and `it`
- visual review of homepage
- visual review of programme
- visual review of at least one representative secondary page

## Success Criteria

The redesign is successful when:

- the homepage visibly feels like the original template with `COMPASS` content substituted in
- the site still reads as `COMPASS`, not as a generic summit landing page
- the `Programme` page becomes easier to scan and less dense
- placeholders can be replaced later without structural rewrites
- secondary pages feel intentionally designed and visually complete

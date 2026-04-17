# COMPASS Template Rhythm Redesign

Date: 2026-04-17
Project: COMPASS workshop microsite redesign
Status: Approved redesign baseline

## Objective

Refine the current bilingual `COMPASS` Astro microsite so it recovers the visual rhythm, movement, and media presence of the original `Artham Summit` template while keeping the clearer `COMPASS` information architecture already introduced.

The redesign should feel more alive and visually rich than the current implementation, but still academically credible and structurally readable.

## Approved Direction

- Keep the existing `Astro` bilingual site structure and typed local content model.
- Reintroduce the original template's visual energy: strong hero treatment, richer section choreography, placeholder imagery, placeholder video areas, and more visible motion.
- Preserve the `COMPASS` content hierarchy instead of restoring the full original template page structure.
- Use placeholders for photos, videos, partner marks, and pending content details so real materials can be swapped in later without layout rework.
- Keep the overall tone `editorial-research`, not startup-marketing, even when sections become more expressive.

## Core Product Decision

This redesign follows the approved approach:

- `Template rhythm, COMPASS structure`

That means:

- recover the original template's pacing, reveal patterns, media blocks, and section richness
- keep the current `COMPASS` page map and workshop-specific content model
- simplify dense information where the current site feels overloaded, especially on `Programme`

## Design Goals

### Visual goals

- Make the homepage feel closer to the original template in energy and staging.
- Restore moving visual surfaces, layered backgrounds, animated reveals, and richer section transitions.
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

The homepage should become the strongest expression of the redesign.

### Required behavior

- Recover a large, media-rich hero inspired by the original template.
- Use stronger alternating section composition, including image-led and media-led panels.
- Keep the existing editorial `COMPASS` narrative instead of generic event marketing language.
- Maintain clear CTAs for `Programme` and `Registration`.

### Target homepage structure

- hero with workshop title, date, venue, CTA, and motion-rich supporting visual treatment
- `Why COMPASS` editorial introduction
- highlights or metrics block
- programme preview
- featured speakers showcase with placeholder images
- media or video placeholder section derived from the original template language
- venue preview
- registration CTA

### Content policy

- Use placeholders wherever real imagery, logos, or clips are not available yet.
- Placeholder media should still look deliberate and integrated into the design.

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

Secondary pages should become richer, not more minimal.

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
- Prefer reusing or adapting original template patterns over inventing unrelated new UI systems.

## Scope for the Next Implementation Pass

### In scope

- homepage redesign toward original template rhythm
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

- the site visibly feels closer to the original template's energy and media richness
- the site still reads as `COMPASS`, not as a generic summit landing page
- the `Programme` page becomes easier to scan and less dense
- placeholders can be replaced later without structural rewrites
- secondary pages feel intentionally designed and visually complete

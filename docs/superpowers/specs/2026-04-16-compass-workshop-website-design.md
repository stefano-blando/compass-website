# COMPASS Workshop Website Design

Date: 2026-04-16
Project: COMPASS workshop microsite
Status: Approved design baseline

## Objective

Build a bilingual conference microsite for `COMPASS - COmplexity, Markets, Policy, and AI in Social Systems` using the `Artham Summit` Astro theme as a starting point, while reshaping the site into an academic workshop identity.

The site should feel professional, visually strong, and academically credible without drifting into generic startup or marketing-event aesthetics.

## Approved Product Direction

- Use `Astro` and the `Artham Summit` template as the technical and visual base.
- Keep the template's strong scrolling rhythm, section transitions, and light animation behavior.
- Replace the original branding, copy, structure, and visual identity with a dedicated `COMPASS` event identity.
- Ship as a static site deployable to GitHub Pages.
- Keep registration lightweight via an external form embedded in or linked from the site.

## Constraints

- The site must launch as `bilingual` from the start: `English` and `Italian`.
- Registration should stay lightweight in `v1`.
- No custom backend is required.
- No public call for papers or abstract submission flow is needed.
- Speakers are invited, and talk abstracts will be curated by organizers.
- The first public version should already be structurally complete, not a placeholder-only landing page.

## Information Architecture

### Primary navigation

- Home
- Programme
- Speakers
- Venue
- Registration
- About
- Organizers
- FAQ

### Footer content

- Contact details
- Partner and institutional logos
- Language switch
- Inclusion or equal-opportunity note if needed

## Content Model

The site should avoid repeating biographies, abstracts, or schedule details across multiple pages. Content should be modeled relationally.

### Speakers

Each speaker entry should contain:

- name
- affiliation
- role in the workshop
- photo
- short bio
- optional links
- type, such as `keynote`, `panelist`, or `chair`

### Sessions

Each session entry should contain:

- title
- type, such as `keynote`, `panel`, `break`, or `closing`
- start and end time
- description
- order in programme
- one or more chairs

### Talks

Each talk entry should contain:

- title
- abstract
- linked speaker
- linked session
- optional materials or slides

### Relationships

- one speaker can be linked to one or more talks
- each talk belongs to one session
- one session can contain multiple talks
- chairs are modeled as speakers and linked to sessions

## Page Behavior

### Home

The homepage should work as an editorial conference landing page with strong visual hierarchy.

Recommended sections:

- Hero with title, subtitle, date, venue, and key calls to action
- Why COMPASS
- Workshop highlights
- Programme preview
- Featured speakers
- Venue preview
- Registration call to action
- Partners and organizer footer content

### Programme

- Full day structure by time slot
- Sessions clearly separated
- Talks nested within the relevant sessions
- Links from talks to their abstract details

### Speakers

- Speaker listing page with cards
- Individual speaker pages with bio, affiliation, role, and linked talks

### Talk details

- Reachable from Programme and Speaker pages
- Show title, abstract, speaker, affiliation, and linked session
- No separate top-level navigation item for abstracts in `v1`

### Venue

- Location details
- map or location embed if useful
- practical travel information

### Registration

- Short introduction
- external form embed or button
- minimal friction

### Organizers

- organizing committee
- affiliations
- event roles

### FAQ

- practical questions
- participation details
- venue or logistics clarifications

## Visual Design Direction

The approved direction is:

- `editorial-research` as the dominant tone
- with a stronger, more impactful hero inspired by the original summit template

### What should be preserved from the theme

- scroll-driven storytelling
- modern section pacing
- light entrance animations
- interactive rhythm that makes the page feel alive

### What should change

- remove the generic `AI summit` startup feeling
- reduce overly promotional or marketing-like design cues
- make the site feel closer to an academic workshop than a commercial tech event

### Palette direction

The palette should be inspired by `Scuola Superiore Sant'Anna` and `PhD in AI`, without becoming a literal institutional clone.

Target palette behavior:

- off-white or ivory background
- dark navy for primary text and structure
- Sant'Anna-inspired burgundy as the main accent
- cooler blue as the secondary accent
- restrained supporting neutrals

### Graphic language

- subtle network, topology, path, or systems-inspired motifs
- no neon effects
- no dark-mode-first presentation
- no overdesigned startup gradients

### Typography

Use strong contrast between display and text typography.

Recommended pairing:

- serif for headings, such as `Cormorant Garamond` or `Bodoni Moda`
- sans serif for body and UI, such as `Manrope` or `Source Sans 3`

## Bilingual Strategy

- All primary UI and page content should exist in both `it` and `en`
- Speaker bios and abstracts should support both languages where available
- If a bio or abstract is only available in English initially, the Italian site may temporarily display the English version with a short explanatory note

## Registration Strategy

`v1` registration should remain lightweight.

Recommended options:

- `Tally` for cleaner visual integration
- `Google Forms` if speed and familiarity matter more than polish

Expected fields:

- full name
- email
- affiliation
- role or profile
- optional dietary preference
- privacy consent

## Implementation Priorities

### Phase 1: Foundation

- adapt theme branding to `COMPASS`
- establish palette, typography, spacing, and section hierarchy
- introduce bilingual routing strategy
- define structured content collections for speakers, sessions, and talks

### Phase 2: Core content

- build programme pages
- build speaker pages
- build talk-abstract connections
- build venue, organizers, registration, about, and FAQ pages

### Phase 3: Polish

- refine hero and homepage hierarchy
- improve responsive behavior
- tighten visual consistency across cards and section intros
- finalize footer and institutional references

### Phase 4: Pre-event refinement

- final agenda updates
- speaker additions or replacements
- practical venue updates
- optional materials and post-event assets

## Testing and Verification

The site should be verified through:

- local build success
- route checks for both languages
- consistency checks for links between speakers, talks, and sessions
- responsive review on desktop and mobile
- registration flow review
- GitHub Pages deployment verification

## Out of Scope for v1

- paper submission or call for papers workflow
- attendee account system
- custom CMS backend
- heavy analytics or marketing automation
- large archive or multi-edition conference portal

## Design Summary

`COMPASS` should become a dedicated, visually polished academic workshop site built on the technical strength of the `Artham Summit` Astro template, while replacing its original identity with a bilingual, research-oriented, professionally credible conference experience.

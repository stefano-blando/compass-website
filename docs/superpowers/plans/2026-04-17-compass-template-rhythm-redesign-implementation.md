# COMPASS Template Rhythm Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rework the current bilingual COMPASS Astro microsite so it regains the original template's media-rich rhythm and motion while simplifying the programme view and upgrading secondary pages from shells to fully staged placeholder-backed layouts.

**Architecture:** Keep the existing Astro bilingual routing and typed local data layer, but extend the content helpers so page-level rich layouts can be driven from one place. Implement the redesign through focused presentation components: a stronger homepage with restored media cadence, a calmer vertical programme, and reusable rich secondary-page sections that accept placeholders until final materials arrive.

**Tech Stack:** Astro 6, TypeScript, Vue for the existing scroll nav island, Vitest raw-source regression checks, shared CSS in `src/styles/global.css`.

---

## File Structure

- Modify: `src/data/site.ts`
  Purpose: add localized placeholder-backed page content contracts for homepage media, compact programme copy, and rich secondary page sections.
- Modify: `src/lib/site.ts`
  Purpose: expose typed helpers that pages/components can consume without duplicating locale logic.
- Modify: `tests/site.test.ts`
  Purpose: add regression coverage for new content helpers and raw-source composition checks.
- Modify: `src/styles/global.css`
  Purpose: strengthen motion tokens, shared media placeholders, and reusable rich-page layout primitives.
- Modify: `src/pages/[lang]/index.astro`
  Purpose: update homepage section order to reintroduce template-like media rhythm.
- Create: `src/components/home/MediaShowcaseSection.astro`
  Purpose: add a homepage media/video placeholder block inspired by the original template.
- Modify: `src/components/home/HeroSection.astro`
  Purpose: replace the current abstract side panel with a more image-led, motion-heavy hero treatment.
- Modify: `src/components/home/HighlightsSection.astro`
  Purpose: make highlights read as punchier editorial counters.
- Modify: `src/components/home/ProgrammePreviewSection.astro`
  Purpose: reduce density and make preview cards feel more visual than archival.
- Modify: `src/components/home/FeaturedSpeakersSection.astro`
  Purpose: switch from abstract initials to explicit image placeholders and richer motion framing.
- Modify: `src/components/home/VenuePreviewSection.astro`
  Purpose: add placeholder photography and larger venue staging.
- Modify: `src/components/home/RegistrationCtaSection.astro`
  Purpose: turn registration into a richer closing band with support media.
- Modify: `src/pages/[lang]/programme/index.astro`
  Purpose: rewrite the page intro so it frames the programme as a clean overview rather than a seeded data dump.
- Modify: `src/components/programme/ProgrammeTimeline.astro`
  Purpose: simplify the programme scaffolding and remove dense framing copy.
- Modify: `src/components/programme/SessionBlock.astro`
  Purpose: keep sessions broad and vertical while removing nested visual noise.
- Modify: `src/components/programme/TalkListItem.astro`
  Purpose: render talks as compact linked rows with minimal metadata.
- Create: `src/components/site/RichPageHero.astro`
  Purpose: shared hero for secondary pages with media placeholder support.
- Create: `src/components/site/RichPageSection.astro`
  Purpose: shared alternating text/media band for secondary pages.
- Create: `src/components/site/VideoPlaceholder.astro`
  Purpose: reusable animated video/media placeholder block.
- Modify: `src/pages/[lang]/speakers/index.astro`
- Modify: `src/pages/[lang]/venue/index.astro`
- Modify: `src/pages/[lang]/registration/index.astro`
- Modify: `src/pages/[lang]/about/index.astro`
- Modify: `src/pages/[lang]/organizers/index.astro`
- Modify: `src/pages/[lang]/faq/index.astro`
  Purpose: replace route shells with rich pages built from the shared hero/section components.

### Task 1: Add redesign content contracts and regression coverage

**Files:**
- Modify: `tests/site.test.ts`
- Modify: `src/data/site.ts`
- Modify: `src/lib/site.ts`

- [ ] **Step 1: Write the failing tests for the new localized redesign content**

```ts
import homePageSource from '../src/pages/[lang]/index.astro?raw';
import programmePageSource from '../src/pages/[lang]/programme/index.astro?raw';
import speakersPageSource from '../src/pages/[lang]/speakers/index.astro?raw';
import {
  getHomepageContent,
  getProgrammePageContent,
  getRichPageContent,
} from '../src/lib/site';

it('returns homepage media showcase content for both locales', () => {
  const english = getHomepageContent('en');
  const italian = getHomepageContent('it');

  expect(english.mediaShowcase.title).toBeTruthy();
  expect(english.mediaShowcase.items).toHaveLength(3);
  expect(english.mediaShowcase.videoLabel).toMatch(/video|film/i);
  expect(italian.mediaShowcase.items).toHaveLength(3);
  expect(italian.mediaShowcase.videoLabel).toMatch(/video/i);
});

it('returns compact programme-page copy that keeps details outside the schedule flow', () => {
  const english = getProgrammePageContent('en');
  const italian = getProgrammePageContent('it');

  expect(english.intro).toMatch(/overview|day|session/i);
  expect(english.compactTalkLabel).toMatch(/talk/i);
  expect(english.detailNote).toMatch(/detail|abstract/i);
  expect(italian.detailNote).toMatch(/abstract|dettag/i);
});

it('returns rich placeholder-backed secondary page sections', () => {
  const speakers = getRichPageContent('en', 'speakers');
  const venue = getRichPageContent('it', 'venue');

  expect(speakers.hero.mediaType).toBe('portrait-grid');
  expect(speakers.sections).toHaveLength(3);
  expect(venue.hero.mediaType).toBe('landscape');
  expect(venue.sections.some((section) => section.mediaType === 'video')).toBe(true);
});

it('wires the homepage and route pages to the redesign components', () => {
  expect(homePageSource).toContain('MediaShowcaseSection');
  expect(homePageSource).toContain('<MediaShowcaseSection');
  expect(programmePageSource).not.toMatch(/seeded agenda/i);
  expect(speakersPageSource).toContain('RichPageHero');
  expect(speakersPageSource).toContain('RichPageSection');
});
```

- [ ] **Step 2: Run the focused test command and verify it fails**

Run: `npm run test -- --runInBand tests/site.test.ts`

Expected: FAIL because `getProgrammePageContent`, `getRichPageContent`, and `mediaShowcase` do not exist yet, and the route sources do not yet reference the redesign components.

- [ ] **Step 3: Extend `src/data/site.ts` with redesign-oriented content contracts**

```ts
type HomepageMediaShowcaseContent = {
  eyebrow: string;
  title: string;
  intro: string;
  videoLabel: string;
  items: Array<{
    title: string;
    body: string;
    mediaLabel: string;
  }>;
};

type ProgrammePageContent = {
  title: string;
  intro: string;
  sectionLabel: string;
  compactTalkLabel: string;
  detailNote: string;
  cards: string[];
};

type RichPageSection = {
  eyebrow: string;
  title: string;
  body: string;
  mediaLabel: string;
  mediaType: 'portrait-grid' | 'landscape' | 'video' | 'info-panel';
  bullets?: string[];
};

type RichPageContent = {
  hero: {
    eyebrow: string;
    title: string;
    intro: string;
    mediaLabel: string;
    mediaType: 'portrait-grid' | 'landscape' | 'video';
  };
  sections: RichPageSection[];
  ctaLabel?: string;
};
```

```ts
const homepageContent = {
  en: {
    // existing hero / whyCompass / highlights / programme / speakers / venue / registration
    mediaShowcase: {
      eyebrow: 'Workshop Atmosphere',
      title: 'Images, motion, and media should stage the workshop before the final assets arrive.',
      intro: 'Use integrated placeholders now so the site feels alive immediately and can later accept real photos, clips, and partner assets without structural changes.',
      videoLabel: 'Placeholder video preview',
      items: [
        {
          title: 'Venue image placeholder',
          body: 'Reserve a large scenic frame for Sant’Anna campus photography.',
          mediaLabel: 'Campus still placeholder',
        },
        {
          title: 'Workshop motion panel',
          body: 'Carry over the original template’s animated editorial rhythm.',
          mediaLabel: 'Animated editorial panel',
        },
        {
          title: 'Partner/logo strip placeholder',
          body: 'Keep room for institutional marks without forcing the final asset set now.',
          mediaLabel: 'Institutional marks placeholder',
        },
      ],
    },
  },
  it: {
    mediaShowcase: {
      eyebrow: 'Atmosfera Del Workshop',
      title: 'Immagini, movimento e media devono mettere in scena il workshop anche prima degli asset finali.',
      intro: 'Usa placeholder integrati da subito, cosi il sito risulta vivo e potra poi accogliere foto, clip e loghi reali senza modifiche strutturali.',
      videoLabel: 'Anteprima video placeholder',
      items: [
        {
          title: 'Placeholder immagine sede',
          body: 'Riserva un frame scenografico ampio per la fotografia del campus Sant’Anna.',
          mediaLabel: 'Placeholder fotografia campus',
        },
        {
          title: 'Pannello motion del workshop',
          body: 'Riprendi il ritmo editoriale animato del template originale.',
          mediaLabel: 'Pannello editoriale animato',
        },
        {
          title: 'Placeholder partner e loghi',
          body: 'Lascia spazio ai marchi istituzionali senza bloccare ora il set finale.',
          mediaLabel: 'Placeholder marchi istituzionali',
        },
      ],
    },
  },
} as const;

export const programmePageContent = {
  en: {
    title: 'Programme',
    intro: 'A clean overview of the workshop day, organized as a readable vertical schedule.',
    sectionLabel: 'Workshop day overview',
    compactTalkLabel: 'Talk details',
    detailNote: 'Abstracts and full talk details stay on the dedicated talk pages so the schedule remains easy to scan.',
    cards: [
      'Broad vertical schedule with one session block at a time.',
      'Compact linked talk rows without inline abstracts.',
      'A calmer reading rhythm from opening remarks to the social dinner.',
    ],
  },
  it: {
    title: 'Programma',
    intro: 'Una panoramica pulita della giornata, organizzata come agenda verticale facile da leggere.',
    sectionLabel: 'Panoramica della giornata',
    compactTalkLabel: 'Dettagli talk',
    detailNote: 'Abstract e dettagli completi restano nelle pagine dedicate dei talk, cosi il programma principale rimane leggibile.',
    cards: [
      'Agenda verticale ampia, una sessione per volta.',
      'Righe talk compatte con link, senza abstract inline.',
      'Ritmo di lettura piu calmo dall’apertura alla cena sociale.',
    ],
  },
} as const;
```

- [ ] **Step 4: Expose the new helper surface from `src/lib/site.ts`**

```ts
import {
  chromeLabels,
  defaultLocale,
  locales as supportedLocales,
  navLabels,
  pageMetadata,
  programmePageContent,
  richPageContent,
  siteConfig,
  siteIdentity,
  type SitePageKey,
} from '../data/site';

export function getHomepageContent(locale: Locale) {
  return homepageContent[locale];
}

export function getProgrammePageContent(locale: Locale) {
  return programmePageContent[locale];
}

export function getRichPageContent(
  locale: Locale,
  page: Exclude<SitePageKey, 'home' | 'programme'>,
) {
  return richPageContent[locale][page];
}
```

- [ ] **Step 5: Run the focused test command again**

Run: `npm run test -- --runInBand tests/site.test.ts`

Expected: FAIL only on the raw-source assertions because the route files and new components are not updated yet.

- [ ] **Step 6: Commit the content-helper groundwork**

```bash
git add tests/site.test.ts src/data/site.ts src/lib/site.ts
git commit -m "feat: add redesign content helpers"
```

### Task 2: Rebuild the homepage around media rhythm and placeholder motion

**Files:**
- Modify: `src/pages/[lang]/index.astro`
- Create: `src/components/home/MediaShowcaseSection.astro`
- Modify: `src/components/home/HeroSection.astro`
- Modify: `src/components/home/HighlightsSection.astro`
- Modify: `src/components/home/ProgrammePreviewSection.astro`
- Modify: `src/components/home/FeaturedSpeakersSection.astro`
- Modify: `src/components/home/VenuePreviewSection.astro`
- Modify: `src/components/home/RegistrationCtaSection.astro`
- Modify: `src/styles/global.css`

- [ ] **Step 1: Write the failing source-level regression for the homepage composition**

```ts
import heroSectionSource from '../src/components/home/HeroSection.astro?raw';
import mediaShowcaseSource from '../src/components/home/MediaShowcaseSection.astro?raw';

it('uses an image-led hero and a dedicated media showcase band on the homepage', () => {
  expect(homePageSource).toContain('<HeroSection locale={locale} />');
  expect(homePageSource).toContain('<MediaShowcaseSection locale={locale} />');
  expect(heroSectionSource).toContain('data-home-hero-media');
  expect(heroSectionSource).toContain('hero.mediaPrimaryLabel');
  expect(mediaShowcaseSource).toContain('data-media-showcase');
  expect(mediaShowcaseSource).toContain('videoLabel');
});
```

- [ ] **Step 2: Run the focused test command and verify it fails**

Run: `npm run test -- --runInBand tests/site.test.ts`

Expected: FAIL because `MediaShowcaseSection.astro` does not exist and the hero still uses the abstract orbital side panel data.

- [ ] **Step 3: Create `MediaShowcaseSection.astro` and insert it into the homepage**

```astro
---
import type { Locale } from '../../data/types';
import { getHomepageContent } from '../../lib/site';

interface Props {
  locale: Locale;
}

const { locale } = Astro.props;
const { mediaShowcase } = getHomepageContent(locale);
---

<section class="media-showcase" data-home-reveal data-media-showcase>
  <div class="container media-showcase__layout">
    <div class="media-showcase__intro" data-reveal-item>
      <p class="section-kicker">{mediaShowcase.eyebrow}</p>
      <h2>{mediaShowcase.title}</h2>
      <p>{mediaShowcase.intro}</p>
    </div>

    <div class="media-showcase__video" data-reveal-item style="--reveal-delay: 80ms;">
      <span>{mediaShowcase.videoLabel}</span>
    </div>

    <div class="media-showcase__cards">
      {mediaShowcase.items.map((item, index) => (
        <article class="media-showcase__card" data-reveal-item style={`--reveal-delay: ${(index + 2) * 80}ms;`}>
          <p class="media-showcase__label">{item.mediaLabel}</p>
          <h3>{item.title}</h3>
          <p>{item.body}</p>
        </article>
      ))}
    </div>
  </div>
</section>
```

```astro
<main class="home-shell">
  <HeroSection locale={locale} />
  <WhyCompassSection locale={locale} />
  <HighlightsSection locale={locale} />
  <ProgrammePreviewSection locale={locale} />
  <FeaturedSpeakersSection locale={locale} />
  <MediaShowcaseSection locale={locale} />
  <VenuePreviewSection locale={locale} />
  <RegistrationCtaSection locale={locale} />
</main>
```

- [ ] **Step 4: Replace the hero side panel with a media-led composition**

```astro
const heroMedia = {
  primaryLabel: locale === 'it' ? 'Placeholder immagine hero' : 'Hero image placeholder',
  secondaryLabel: locale === 'it' ? 'Placeholder clip workshop' : 'Workshop clip placeholder',
};

<div class="home-hero__layout">
  <div class="home-hero__content" data-home-hero-enter>
    <!-- existing eyebrow / h1 / copy / CTA -->
  </div>

  <aside class="home-hero__media" data-home-hero-enter data-home-hero-media style="--hero-enter-delay: 140ms;">
    <div class="home-hero__media-primary">
      <span>{heroMedia.primaryLabel}</span>
    </div>
    <div class="home-hero__media-secondary">
      <span>{heroMedia.secondaryLabel}</span>
    </div>
  </aside>
</div>
```

- [ ] **Step 5: Update the homepage sections to feel more like the original template cadence**

```astro
// FeaturedSpeakersSection.astro
<div class="featured-speakers__media" aria-hidden="true">
  <div class="featured-speakers__photo-label">
    {locale === 'it' ? 'Foto speaker placeholder' : 'Speaker photo placeholder'}
  </div>
</div>
```

```astro
// ProgrammePreviewSection.astro
<div class="programme-preview__talk">
  <span>{programme.talkLabel}</span>
  <strong>{session.featuredTalkTitle}</strong>
</div>
<a class="programme-preview__inline-link" href={buildLocalizedPath(locale, 'programme')}>
  {labels.viewProgramme}
</a>
```

```css
/* src/styles/global.css */
.media-placeholder,
.video-placeholder {
  position: relative;
  overflow: hidden;
  border-radius: 24px;
  background:
    radial-gradient(circle at top left, rgba(255, 255, 255, 0.5), transparent 30%),
    linear-gradient(135deg, rgba(126, 36, 52, 0.92), rgba(55, 95, 138, 0.92));
}

.media-placeholder::before,
.video-placeholder::before {
  content: "";
  position: absolute;
  inset: 0;
  background:
    linear-gradient(rgba(255, 255, 255, 0.12) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.12) 1px, transparent 1px);
  background-size: 24px 24px;
}
```

- [ ] **Step 6: Run the regression suite and build after the homepage redesign**

Run: `npm run test -- --runInBand tests/site.test.ts`

Expected: PASS for helper and homepage composition assertions.

Run: `npm run build`

Expected: PASS and Astro emits the localized routes successfully.

- [ ] **Step 7: Commit the homepage redesign**

```bash
git add src/pages/[lang]/index.astro src/components/home/MediaShowcaseSection.astro src/components/home/HeroSection.astro src/components/home/HighlightsSection.astro src/components/home/ProgrammePreviewSection.astro src/components/home/FeaturedSpeakersSection.astro src/components/home/VenuePreviewSection.astro src/components/home/RegistrationCtaSection.astro src/styles/global.css tests/site.test.ts
git commit -m "feat: restore template rhythm to homepage"
```

### Task 3: Simplify the programme page into a broad, clean vertical schedule

**Files:**
- Modify: `src/pages/[lang]/programme/index.astro`
- Modify: `src/components/programme/ProgrammeTimeline.astro`
- Modify: `src/components/programme/SessionBlock.astro`
- Modify: `src/components/programme/TalkListItem.astro`
- Modify: `tests/site.test.ts`

- [ ] **Step 1: Add the failing regression for compact programme rendering**

```ts
import sessionBlockSource from '../src/components/programme/SessionBlock.astro?raw';
import talkListItemSource from '../src/components/programme/TalkListItem.astro?raw';

it('keeps programme sessions broad and moves talk depth out of the schedule flow', () => {
  expect(programmePageSource).toContain('getProgrammePageContent');
  expect(programmePageSource).not.toMatch(/seeded agenda|seed shell/i);
  expect(sessionBlockSource).not.toMatch(/session-block__talks-shell/);
  expect(sessionBlockSource).toContain('session-block__talks');
  expect(talkListItemSource).not.toMatch(/speakerLine.*affiliation/);
  expect(talkListItemSource).toContain('talk-item__meta');
});
```

- [ ] **Step 2: Run the focused test command and verify it fails**

Run: `npm run test -- --runInBand tests/site.test.ts`

Expected: FAIL because the current programme page still carries seeded-shell copy and the talk item still renders speaker names plus affiliations in a denser format.

- [ ] **Step 3: Switch `programme/index.astro` to the new localized page copy**

```astro
---
import { getPageMetadata, getProgrammePageContent, getProgrammeSessions, locales } from '../../../lib/site';

const copy = getProgrammePageContent(locale);
---

<section class="page-hero container">
  <div class="page-hero__content">
    <p class="eyebrow">COMPASS</p>
    <h1>{copy.title}</h1>
    <p class="page-lead">{copy.intro}</p>
    <p class="page-hero__supporting-note">{copy.detailNote}</p>
  </div>
  <aside class="page-hero__meta">
    <p class="page-meta__label">{copy.sectionLabel}</p>
    <ul class="page-meta__list">
      {copy.cards.map((item) => <li>{item}</li>)}
    </ul>
  </aside>
</section>
```

- [ ] **Step 4: Remove nested density from `SessionBlock.astro` and compact the talk rows**

```astro
<section class="session-block" data-session-type={session.type}>
  <div class="session-block__rail">
    <p class="session-block__time">{session.startsAt.slice(11, 16)} - {session.endsAt.slice(11, 16)}</p>
  </div>

  <div class="session-block__body">
    <header class="session-block__header">
      <p class="session-block__type">{sessionTypeLabel[session.type]}</p>
      <h2>{session.title[locale]}</h2>
      <p>{session.description[locale]}</p>
      {chairs.length > 0 && <p class="session-block__chairs">{copy.chairs}: {chairs.map((chair) => chair.name).join(', ')}</p>}
    </header>

    {sessionTalks.length > 0 && (
      <ul class="session-block__talks">
        {sessionTalks.map((talk) => <TalkListItem locale={locale} talk={talk} />)}
      </ul>
    )}
  </div>
</section>
```

```astro
const speakerNames = speakers.map((speaker) => speaker.name).join(', ');

<li class="talk-item">
  <a class="talk-item__link" href={buildLocalizedPath(locale, `talks/${talk.slug}`)}>
    {startsAt && <span class="talk-item__time">{startsAt}</span>}
    <span class="talk-item__content">
      <strong>{talk.title[locale]}</strong>
      <span class="talk-item__meta">
        {speakerNames}
        {' · '}
        {locale === 'it' ? 'Apri scheda talk' : 'Open talk page'}
      </span>
    </span>
  </a>
</li>
```

- [ ] **Step 5: Give the programme page more breathing room in CSS**

```css
.programme-timeline__list {
  display: grid;
  gap: 1.6rem;
}

.session-block {
  grid-template-columns: minmax(96px, 120px) minmax(0, 1fr);
  gap: 1.4rem;
}

.session-block__body {
  padding: clamp(1.6rem, 4vw, 2.25rem);
}

.session-block__talks {
  margin: 1.2rem 0 0;
  padding: 0;
  display: grid;
  gap: 0.7rem;
}
```

- [ ] **Step 6: Run tests and build after the programme cleanup**

Run: `npm run test -- --runInBand tests/site.test.ts`

Expected: PASS, including the compact-programme assertions.

Run: `npm run build`

Expected: PASS with the programme route still emitted for both locales.

- [ ] **Step 7: Commit the programme cleanup**

```bash
git add src/pages/[lang]/programme/index.astro src/components/programme/ProgrammeTimeline.astro src/components/programme/SessionBlock.astro src/components/programme/TalkListItem.astro tests/site.test.ts
git commit -m "feat: simplify programme page layout"
```

### Task 4: Replace route shells with rich reusable secondary-page layouts

**Files:**
- Create: `src/components/site/RichPageHero.astro`
- Create: `src/components/site/RichPageSection.astro`
- Create: `src/components/site/VideoPlaceholder.astro`
- Modify: `src/pages/[lang]/speakers/index.astro`
- Modify: `src/pages/[lang]/venue/index.astro`
- Modify: `src/pages/[lang]/registration/index.astro`
- Modify: `src/pages/[lang]/about/index.astro`
- Modify: `src/pages/[lang]/organizers/index.astro`
- Modify: `src/pages/[lang]/faq/index.astro`
- Modify: `src/styles/global.css`
- Modify: `tests/site.test.ts`

- [ ] **Step 1: Add the failing regression for rich secondary pages**

```ts
import venuePageSource from '../src/pages/[lang]/venue/index.astro?raw';
import registrationPageSource from '../src/pages/[lang]/registration/index.astro?raw';
import richPageHeroSource from '../src/components/site/RichPageHero.astro?raw';

it('replaces route shells with reusable rich-page sections', () => {
  expect(richPageHeroSource).toContain('mediaType');
  expect(speakersPageSource).not.toMatch(/route shell/i);
  expect(venuePageSource).toContain('getRichPageContent');
  expect(registrationPageSource).toContain('<RichPageSection');
});
```

- [ ] **Step 2: Run the focused test command and verify it fails**

Run: `npm run test -- --runInBand tests/site.test.ts`

Expected: FAIL because the reusable page components do not exist and the route files are still static shells.

- [ ] **Step 3: Create the reusable hero and alternating section components**

```astro
--- src/components/site/RichPageHero.astro
import type { Locale } from '../../data/types';

interface Props {
  locale: Locale;
  eyebrow: string;
  title: string;
  intro: string;
  mediaLabel: string;
  mediaType: 'portrait-grid' | 'landscape' | 'video';
}

const { eyebrow, title, intro, mediaLabel, mediaType } = Astro.props;
---

<section class="rich-page-hero container">
  <div class="rich-page-hero__content">
    <p class="eyebrow">{eyebrow}</p>
    <h1>{title}</h1>
    <p class="page-lead">{intro}</p>
  </div>
  <div class={`rich-page-hero__media rich-page-hero__media--${mediaType}`}>
    <span>{mediaLabel}</span>
  </div>
</section>
```

```astro
--- src/components/site/RichPageSection.astro
interface Props {
  eyebrow: string;
  title: string;
  body: string;
  mediaLabel: string;
  mediaType: 'portrait-grid' | 'landscape' | 'video' | 'info-panel';
  bullets?: string[];
  reverse?: boolean;
}
---

<section class:list={['rich-page-section', reverse && 'is-reversed']}>
  <div class="rich-page-section__copy">
    <p class="section-kicker">{eyebrow}</p>
    <h2>{title}</h2>
    <p>{body}</p>
    {bullets && (
      <ul>
        {bullets.map((item) => <li>{item}</li>)}
      </ul>
    )}
  </div>
  <div class={`rich-page-section__media rich-page-section__media--${mediaType}`}>
    <span>{mediaLabel}</span>
  </div>
</section>
```

- [ ] **Step 4: Rebuild each secondary route around shared content helpers**

```astro
---
import Footer from '../../../components/site/Footer.astro';
import Header from '../../../components/site/Header.astro';
import RichPageHero from '../../../components/site/RichPageHero.astro';
import RichPageSection from '../../../components/site/RichPageSection.astro';
import type { Locale } from '../../../data/types';
import Layout from '../../../layouts/Layout.astro';
import { getPageMetadata, getRichPageContent, locales } from '../../../lib/site';

const locale = Astro.params.lang as Locale;
const page = getRichPageContent(locale, 'speakers');
---

<Layout locale={locale} title={pageMeta.title} description={pageMeta.description}>
  <Header locale={locale} />
  <main class="page-shell">
    <RichPageHero
      locale={locale}
      eyebrow={page.hero.eyebrow}
      title={page.hero.title}
      intro={page.hero.intro}
      mediaLabel={page.hero.mediaLabel}
      mediaType={page.hero.mediaType}
    />

    <div class="container rich-page-stack">
      {page.sections.map((section, index) => (
        <RichPageSection
          eyebrow={section.eyebrow}
          title={section.title}
          body={section.body}
          mediaLabel={section.mediaLabel}
          mediaType={section.mediaType}
          bullets={section.bullets}
          reverse={index % 2 === 1}
        />
      ))}
    </div>
  </main>
  <Footer locale={locale} />
</Layout>
```

- [ ] **Step 5: Add shared CSS for rich secondary pages**

```css
.rich-page-stack {
  display: grid;
  gap: 2rem;
}

.rich-page-section,
.rich-page-hero {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(280px, 0.92fr);
  gap: 1.2rem;
  align-items: stretch;
}

.rich-page-section.is-reversed {
  direction: rtl;
}

.rich-page-section.is-reversed > * {
  direction: ltr;
}
```

- [ ] **Step 6: Run tests and build after replacing the route shells**

Run: `npm run test -- --runInBand tests/site.test.ts`

Expected: PASS with the rich-route assertions.

Run: `npm run build`

Expected: PASS and all secondary localized routes are still emitted.

- [ ] **Step 7: Commit the secondary-page rebuild**

```bash
git add src/components/site/RichPageHero.astro src/components/site/RichPageSection.astro src/components/site/VideoPlaceholder.astro src/pages/[lang]/speakers/index.astro src/pages/[lang]/venue/index.astro src/pages/[lang]/registration/index.astro src/pages/[lang]/about/index.astro src/pages/[lang]/organizers/index.astro src/pages/[lang]/faq/index.astro src/styles/global.css tests/site.test.ts
git commit -m "feat: redesign secondary pages with rich layouts"
```

### Task 5: Final verification and cleanup pass

**Files:**
- Modify as needed: `src/styles/global.css`
- Modify as needed: `src/components/home/*.astro`
- Modify as needed: `src/components/programme/*.astro`
- Modify as needed: `src/pages/[lang]/**/*.astro`

- [ ] **Step 1: Run the full automated verification suite**

Run: `npm run test`

Expected: PASS with the full Vitest suite green.

Run: `npm run build`

Expected: PASS and Astro reports a successful static build.

- [ ] **Step 2: Inspect the built output for key routes**

Run: `rg --files dist | sort`

Expected: includes at least:

```text
dist/en/index.html
dist/en/programme/index.html
dist/en/speakers/index.html
dist/en/venue/index.html
dist/it/index.html
dist/it/programme/index.html
dist/it/speakers/index.html
dist/it/venue/index.html
```

- [ ] **Step 3: Do a manual visual pass in local preview**

Run: `npm run preview`

Expected visual checks:
- homepage hero feels more image-led and animated
- homepage includes the dedicated media showcase band
- programme reads as a broad, calmer vertical schedule
- one representative secondary page feels rich rather than shell-like

- [ ] **Step 4: Commit the final polish if any follow-up edits were required**

```bash
git add src/styles/global.css src/components/home src/components/programme src/pages/[lang]
git commit -m "fix: polish COMPASS redesign presentation"
```

## Self-Review

- Spec coverage: homepage rhythm, placeholder media, compact programme, rich secondary pages, bilingual continuity, and verification are all mapped to Tasks 1 through 5.
- Placeholder scan: this plan contains no `TODO`, `TBD`, or “implement later” instructions; each task lists exact files, concrete assertions, and exact commands.
- Type consistency: `getProgrammePageContent`, `getRichPageContent`, `mediaShowcase`, `RichPageHero`, and `RichPageSection` are introduced once and referenced consistently in later tasks.

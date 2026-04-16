# COMPASS Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform the `Artham Summit` Astro theme into a bilingual `COMPASS` workshop microsite with a dedicated academic identity, relational content for speakers/sessions/talks, and lightweight registration.

**Architecture:** Keep Astro static rendering and the existing scroll-driven interaction model, but replace the current hardcoded summit content with typed local data modules plus generated localized routes. Use shared layout and section components to keep English and Italian pages aligned while letting programme, speakers, talks, and registration pages pull from one structured data layer.

**Tech Stack:** Astro 6, Vue islands where already useful, Tailwind via existing setup, typed TypeScript data modules, Vitest for helper-level regression checks, GitHub Pages deployment via Astro static build.

---

### Task 1: Establish typed content, locale helpers, and test tooling

**Files:**
- Modify: `package.json`
- Create: `src/data/types.ts`
- Create: `src/data/site.ts`
- Create: `src/data/speakers.ts`
- Create: `src/data/sessions.ts`
- Create: `src/data/talks.ts`
- Create: `src/lib/site.ts`
- Create: `tests/site.test.ts`

- [ ] **Step 1: Write the failing helper test suite**

```ts
// tests/site.test.ts
import { describe, expect, it } from 'vitest';
import {
  buildLocalizedPath,
  getSpeakerBySlug,
  getTalksBySpeaker,
  getProgrammeSessions,
  locales,
} from '../src/lib/site';

describe('site helpers', () => {
  it('exports the supported locales', () => {
    expect(locales).toEqual(['en', 'it']);
  });

  it('builds localized paths without duplicate slashes', () => {
    expect(buildLocalizedPath('en', '/programme')).toBe('/en/programme/');
    expect(buildLocalizedPath('it', 'registration')).toBe('/it/registration/');
  });

  it('links speakers to talks through shared slugs', () => {
    const speaker = getSpeakerBySlug('guido-germano');
    expect(speaker?.name).toBe('Guido Germano');

    const talks = getTalksBySpeaker('guido-germano');
    expect(talks.map((talk) => talk.slug)).toContain('complexity-keynote');
  });

  it('returns programme sessions sorted by start time', () => {
    const sessions = getProgrammeSessions();
    expect(sessions[0]?.slug).toBe('welcome-opening');
    expect(sessions.at(-1)?.slug).toBe('social-dinner');
  });
});
```

- [ ] **Step 2: Run the test command to verify it fails**

Run: `npm run test`

Expected: FAIL because `vitest` is not installed and `src/lib/site.ts` does not exist yet.

- [ ] **Step 3: Add test scripts and dependencies**

```json
// package.json
{
  "name": "frontend",
  "type": "module",
  "version": "0.0.1",
  "engines": {
    "node": ">=22.12.0"
  },
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview",
    "astro": "astro",
    "check": "astro check",
    "test": "vitest run"
  },
  "dependencies": {
    "@astrojs/vue": "^6.0.1",
    "@tailwindcss/vite": "^4.2.2",
    "astro": "^6.1.7",
    "motion": "^12.38.0",
    "simple-icons": "^16.14.0",
    "tailwindcss": "^4.2.2",
    "vue": "^3.5.31"
  },
  "devDependencies": {
    "vitest": "^3.2.4"
  }
}
```

- [ ] **Step 4: Create the typed data contracts and local event data**

```ts
// src/data/types.ts
export type Locale = 'en' | 'it';

export type LocalizedText = Record<Locale, string>;

export type SpeakerRole = 'keynote' | 'panelist' | 'chair' | 'organizer';

export type Speaker = {
  slug: string;
  name: string;
  affiliation: string;
  roleLabel: LocalizedText;
  bio: LocalizedText;
  image: string;
  type: SpeakerRole[];
  links?: {
    website?: string;
    scholar?: string;
  };
};

export type Session = {
  slug: string;
  title: LocalizedText;
  description: LocalizedText;
  type: 'keynote' | 'panel' | 'break' | 'lunch' | 'opening' | 'closing' | 'social';
  startsAt: string;
  endsAt: string;
  chairSlugs: string[];
};

export type Talk = {
  slug: string;
  title: LocalizedText;
  abstract: LocalizedText;
  speakerSlugs: string[];
  sessionSlug: string;
  startsAt?: string;
  materialsUrl?: string;
};
```

```ts
// src/data/site.ts
import type { Locale } from './types';

export const locales: Locale[] = ['en', 'it'];
export const defaultLocale: Locale = 'en';

export const siteConfig = {
  name: 'COMPASS',
  fullTitle: 'COmplexity, Markets, Policy, and AI in Social Systems',
  eventDate: '11 May 2026',
  alternateDate: '18 May 2026',
  venue: 'Scuola Superiore Sant’Anna, Pisa',
  registrationUrl: 'https://tally.so/r/compass-registration',
} as const;

export const navLabels = {
  en: {
    home: 'Home',
    programme: 'Programme',
    speakers: 'Speakers',
    venue: 'Venue',
    registration: 'Registration',
    about: 'About',
    organizers: 'Organizers',
    faq: 'FAQ',
    register: 'Register',
    viewProgramme: 'View Programme',
  },
  it: {
    home: 'Home',
    programme: 'Programma',
    speakers: 'Speaker',
    venue: 'Sede',
    registration: 'Registrazione',
    about: 'About',
    organizers: 'Organizzazione',
    faq: 'FAQ',
    register: 'Registrati',
    viewProgramme: 'Vedi il programma',
  },
} as const;
```

```ts
// src/data/speakers.ts
import type { Speaker } from './types';

export const speakers: Speaker[] = [
  {
    slug: 'guido-germano',
    name: 'Guido Germano',
    affiliation: 'University College London',
    roleLabel: {
      en: 'Keynote Speaker',
      it: 'Keynote Speaker',
    },
    bio: {
      en: 'Professor of Computational Science working on complex systems, economics, and computational methods.',
      it: 'Professore di Computational Science con attività su sistemi complessi, economia e metodi computazionali.',
    },
    image: '/images/speakers/guido-germano.jpg',
    type: ['keynote'],
  },
  {
    slug: 'prabhani-don',
    name: 'Prabhani Kuruppumullage Don',
    affiliation: 'Pennsylvania State University',
    roleLabel: {
      en: 'Keynote Speaker',
      it: 'Keynote Speaker',
    },
    bio: {
      en: 'Associate Professor of Statistics focused on high-dimensional data, model validation, and machine learning.',
      it: 'Associate Professor of Statistics specializzata in dati ad alta dimensionalità, validazione dei modelli e machine learning.',
    },
    image: '/images/speakers/prabhani-don.jpg',
    type: ['keynote'],
  },
];
```

```ts
// src/data/sessions.ts
import type { Session } from './types';

export const sessions: Session[] = [
  {
    slug: 'welcome-opening',
    title: {
      en: 'Opening Remarks',
      it: 'Apertura dei lavori',
    },
    description: {
      en: 'Welcome to COMPASS and overview of the scientific agenda.',
      it: 'Benvenuto a COMPASS e introduzione all’agenda scientifica della giornata.',
    },
    type: 'opening',
    startsAt: '2026-05-11T09:00:00+02:00',
    endsAt: '2026-05-11T09:15:00+02:00',
    chairSlugs: [],
  },
  {
    slug: 'panel-ai-methods',
    title: {
      en: 'Panel 1: AI Methods & Applications',
      it: 'Panel 1: Metodi e applicazioni dell’AI',
    },
    description: {
      en: 'Talks on predictive methods, simulation, and applied AI in complex systems.',
      it: 'Interventi su metodi predittivi, simulazione e AI applicata ai sistemi complessi.',
    },
    type: 'panel',
    startsAt: '2026-05-11T10:30:00+02:00',
    endsAt: '2026-05-11T12:15:00+02:00',
    chairSlugs: ['stefano-blando', 'biancamaria-bombino'],
  },
  {
    slug: 'social-dinner',
    title: {
      en: 'Social Dinner',
      it: 'Cena sociale',
    },
    description: {
      en: 'Closing dinner for invited speakers and organizers.',
      it: 'Cena conclusiva per speaker invitati e organizzatori.',
    },
    type: 'social',
    startsAt: '2026-05-11T20:00:00+02:00',
    endsAt: '2026-05-11T22:00:00+02:00',
    chairSlugs: [],
  },
];
```

```ts
// src/data/talks.ts
import type { Talk } from './types';

export const talks: Talk[] = [
  {
    slug: 'complexity-keynote',
    title: {
      en: 'Modelling Complexity Across Markets and Policy',
      it: 'Modellare la complessità tra mercati e policy',
    },
    abstract: {
      en: 'A keynote on computational models for socio-economic complexity and policy design.',
      it: 'Una keynote su modelli computazionali per la complessità socio-economica e il design delle policy.',
    },
    speakerSlugs: ['guido-germano'],
    sessionSlug: 'welcome-opening',
    startsAt: '2026-05-11T09:15:00+02:00',
  },
];
```

```ts
// src/lib/site.ts
import { defaultLocale, locales as supportedLocales, navLabels, siteConfig } from '../data/site';
import { sessions } from '../data/sessions';
import { speakers } from '../data/speakers';
import { talks } from '../data/talks';
import type { Locale } from '../data/types';

export const locales = supportedLocales;

export function buildLocalizedPath(locale: Locale, pathname = '') {
  const cleanPath = pathname.replace(/^\/+|\/+$/g, '');
  return cleanPath ? `/${locale}/${cleanPath}/` : `/${locale}/`;
}

export function getLabels(locale: Locale) {
  return navLabels[locale] ?? navLabels[defaultLocale];
}

export function getSpeakerBySlug(slug: string) {
  return speakers.find((speaker) => speaker.slug === slug);
}

export function getTalksBySpeaker(slug: string) {
  return talks.filter((talk) => talk.speakerSlugs.includes(slug));
}

export function getProgrammeSessions() {
  return [...sessions].sort((a, b) => a.startsAt.localeCompare(b.startsAt));
}

export function getTalksForSession(sessionSlug: string) {
  return talks.filter((talk) => talk.sessionSlug === sessionSlug);
}

export { defaultLocale, siteConfig };
```

- [ ] **Step 5: Run tests to verify the helper layer now passes**

Run: `npm install && npm run test`

Expected: PASS with `4 passed`.

- [ ] **Step 6: Commit the typed data foundation**

```bash
git add package.json package-lock.json src/data src/lib/site.ts tests/site.test.ts
git commit -m "feat: add typed COMPASS content foundation"
```

### Task 2: Add localized routing, shared layout metadata, and site chrome

**Files:**
- Modify: `src/layouts/Layout.astro`
- Modify: `src/styles/global.css`
- Delete: `src/components/Header.astro`
- Delete: `src/components/Footer.astro`
- Create: `src/components/site/Header.astro`
- Create: `src/components/site/Footer.astro`
- Create: `src/components/site/LanguageSwitcher.astro`
- Create: `src/pages/index.astro`
- Create: `src/pages/[lang]/index.astro`
- Create: `src/pages/[lang]/programme/index.astro`
- Create: `src/pages/[lang]/speakers/index.astro`
- Create: `src/pages/[lang]/venue/index.astro`
- Create: `src/pages/[lang]/registration/index.astro`
- Create: `src/pages/[lang]/about/index.astro`
- Create: `src/pages/[lang]/organizers/index.astro`
- Create: `src/pages/[lang]/faq/index.astro`
- Test: `tests/site.test.ts`

- [ ] **Step 1: Add a failing route smoke test for localized page paths**

```ts
// tests/site.test.ts
import { describe, expect, it } from 'vitest';
import { buildLocalizedPath, locales } from '../src/lib/site';

describe('localized paths', () => {
  it('builds expected top-level routes', () => {
    const routes = locales.flatMap((locale) => [
      buildLocalizedPath(locale),
      buildLocalizedPath(locale, 'programme'),
      buildLocalizedPath(locale, 'speakers'),
      buildLocalizedPath(locale, 'registration'),
    ]);

    expect(routes).toEqual([
      '/en/',
      '/en/programme/',
      '/en/speakers/',
      '/en/registration/',
      '/it/',
      '/it/programme/',
      '/it/speakers/',
      '/it/registration/',
    ]);
  });
});
```

- [ ] **Step 2: Run checks to verify the new pages are still missing**

Run: `npm run test && npm run check`

Expected: tests PASS, but `astro check` FAILS because the `[lang]` pages do not exist yet.

- [ ] **Step 3: Replace the layout head and shared site chrome**

```astro
--- 
// src/layouts/Layout.astro
import '../styles/global.css';
import type { Locale } from '../data/types';

interface Props {
  title: string;
  description: string;
  locale: Locale;
}

const { title, description, locale } = Astro.props;
---

<!doctype html>
<html lang={locale}>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <meta name="description" content={description} />
    <meta name="theme-color" content="#7e2434" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
    <link
      href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Manrope:wght@400;500;600;700;800&display=swap"
      rel="stylesheet"
    />
    <title>{title}</title>
  </head>
  <body>
    <slot />
  </body>
</html>
```

```astro
---
// src/components/site/Header.astro
import LanguageSwitcher from './LanguageSwitcher.astro';
import { buildLocalizedPath, getLabels, siteConfig } from '../../lib/site';
import type { Locale } from '../../data/types';

interface Props {
  locale: Locale;
}

const { locale } = Astro.props;
const labels = getLabels(locale);

const links = [
  { key: 'programme', href: buildLocalizedPath(locale, 'programme') },
  { key: 'speakers', href: buildLocalizedPath(locale, 'speakers') },
  { key: 'venue', href: buildLocalizedPath(locale, 'venue') },
  { key: 'registration', href: buildLocalizedPath(locale, 'registration') },
  { key: 'about', href: buildLocalizedPath(locale, 'about') },
  { key: 'organizers', href: buildLocalizedPath(locale, 'organizers') },
  { key: 'faq', href: buildLocalizedPath(locale, 'faq') },
];
---

<header class="site-header">
  <div class="container site-header__inner">
    <a href={buildLocalizedPath(locale)} class="site-brand">
      <span class="site-brand__wordmark">{siteConfig.name}</span>
      <span class="site-brand__subline">{siteConfig.eventDate} · Pisa</span>
    </a>

    <nav aria-label="Main navigation" class="site-nav">
      <ul>
        {links.map((link) => (
          <li><a href={link.href}>{labels[link.key as keyof typeof labels]}</a></li>
        ))}
      </ul>
    </nav>

    <div class="site-header__actions">
      <LanguageSwitcher locale={locale} />
      <a href={buildLocalizedPath(locale, 'registration')} class="btn-primary">{labels.register}</a>
    </div>
  </div>
</header>
```

```astro
---
// src/components/site/Footer.astro
import { buildLocalizedPath, getLabels, siteConfig } from '../../lib/site';
import type { Locale } from '../../data/types';

interface Props {
  locale: Locale;
}

const { locale } = Astro.props;
const labels = getLabels(locale);
---

<footer class="site-footer">
  <div class="container site-footer__grid">
    <div>
      <p class="site-footer__eyebrow">COMPASS</p>
      <p>{siteConfig.fullTitle}</p>
      <p>{siteConfig.venue}</p>
    </div>
    <div>
      <p class="site-footer__eyebrow">{locale === 'it' ? 'Navigazione' : 'Navigation'}</p>
      <ul>
        <li><a href={buildLocalizedPath(locale, 'programme')}>{labels.programme}</a></li>
        <li><a href={buildLocalizedPath(locale, 'speakers')}>{labels.speakers}</a></li>
        <li><a href={buildLocalizedPath(locale, 'registration')}>{labels.registration}</a></li>
      </ul>
    </div>
    <div>
      <p class="site-footer__eyebrow">{locale === 'it' ? 'Contatti' : 'Contact'}</p>
      <p><a href="mailto:compass-workshop@example.org">compass-workshop@example.org</a></p>
    </div>
  </div>
</footer>
```

- [ ] **Step 4: Create the root redirect and localized route stubs**

```astro
---
// src/pages/index.astro
return Astro.redirect('/en/');
---
```

```astro
---
// src/pages/[lang]/index.astro
import Layout from '../../layouts/Layout.astro';
import Header from '../../components/site/Header.astro';
import Footer from '../../components/site/Footer.astro';
import { locales, siteConfig } from '../../lib/site';
import type { Locale } from '../../data/types';

export function getStaticPaths() {
  return locales.map((lang) => ({ params: { lang } }));
}

const locale = Astro.params.lang as Locale;
---

<Layout
  locale={locale}
  title={`COMPASS | ${siteConfig.fullTitle}`}
  description="COMPASS workshop on complexity, markets, policy, and AI in social systems."
>
  <Header locale={locale} />
  <main class="page-shell">
    <section class="page-hero container">
      <p class="eyebrow">COMPASS</p>
      <h1>{siteConfig.fullTitle}</h1>
      <p>{siteConfig.venue}</p>
    </section>
  </main>
  <Footer locale={locale} />
</Layout>
```

```astro
---
// src/pages/[lang]/programme/index.astro
import Layout from '../../../layouts/Layout.astro';
import Header from '../../../components/site/Header.astro';
import Footer from '../../../components/site/Footer.astro';
import { locales } from '../../../lib/site';
import type { Locale } from '../../../data/types';

export function getStaticPaths() {
  return locales.map((lang) => ({ params: { lang } }));
}

const locale = Astro.params.lang as Locale;
---

<Layout locale={locale} title="Programme | COMPASS" description="Programme page stub">
  <Header locale={locale} />
  <main class="page-shell container"><h1>Programme</h1></main>
  <Footer locale={locale} />
</Layout>
```

Create the remaining localized route stubs explicitly:

```astro
---
// src/pages/[lang]/speakers/index.astro
import Layout from '../../../layouts/Layout.astro';
import Header from '../../../components/site/Header.astro';
import Footer from '../../../components/site/Footer.astro';
import { locales } from '../../../lib/site';
import type { Locale } from '../../../data/types';

export function getStaticPaths() {
  return locales.map((lang) => ({ params: { lang } }));
}

const locale = Astro.params.lang as Locale;
---

<Layout locale={locale} title="Speakers | COMPASS" description="Speaker listing stub">
  <Header locale={locale} />
  <main class="page-shell container"><h1>Speakers</h1></main>
  <Footer locale={locale} />
</Layout>
```

```astro
---
// src/pages/[lang]/venue/index.astro
import Layout from '../../../layouts/Layout.astro';
import Header from '../../../components/site/Header.astro';
import Footer from '../../../components/site/Footer.astro';
import { locales } from '../../../lib/site';
import type { Locale } from '../../../data/types';

export function getStaticPaths() {
  return locales.map((lang) => ({ params: { lang } }));
}

const locale = Astro.params.lang as Locale;
---

<Layout locale={locale} title="Venue | COMPASS" description="Venue page stub">
  <Header locale={locale} />
  <main class="page-shell container"><h1>Venue</h1></main>
  <Footer locale={locale} />
</Layout>
```

```astro
---
// src/pages/[lang]/registration/index.astro
import Layout from '../../../layouts/Layout.astro';
import Header from '../../../components/site/Header.astro';
import Footer from '../../../components/site/Footer.astro';
import { locales } from '../../../lib/site';
import type { Locale } from '../../../data/types';

export function getStaticPaths() {
  return locales.map((lang) => ({ params: { lang } }));
}

const locale = Astro.params.lang as Locale;
---

<Layout locale={locale} title="Registration | COMPASS" description="Registration page stub">
  <Header locale={locale} />
  <main class="page-shell container"><h1>Registration</h1></main>
  <Footer locale={locale} />
</Layout>
```

```astro
---
// src/pages/[lang]/about/index.astro
import Layout from '../../../layouts/Layout.astro';
import Header from '../../../components/site/Header.astro';
import Footer from '../../../components/site/Footer.astro';
import { locales } from '../../../lib/site';
import type { Locale } from '../../../data/types';

export function getStaticPaths() {
  return locales.map((lang) => ({ params: { lang } }));
}

const locale = Astro.params.lang as Locale;
---

<Layout locale={locale} title="About | COMPASS" description="About page stub">
  <Header locale={locale} />
  <main class="page-shell container"><h1>About</h1></main>
  <Footer locale={locale} />
</Layout>
```

```astro
---
// src/pages/[lang]/organizers/index.astro
import Layout from '../../../layouts/Layout.astro';
import Header from '../../../components/site/Header.astro';
import Footer from '../../../components/site/Footer.astro';
import { locales } from '../../../lib/site';
import type { Locale } from '../../../data/types';

export function getStaticPaths() {
  return locales.map((lang) => ({ params: { lang } }));
}

const locale = Astro.params.lang as Locale;
---

<Layout locale={locale} title="Organizers | COMPASS" description="Organizers page stub">
  <Header locale={locale} />
  <main class="page-shell container"><h1>Organizers</h1></main>
  <Footer locale={locale} />
</Layout>
```

```astro
---
// src/pages/[lang]/faq/index.astro
import Layout from '../../../layouts/Layout.astro';
import Header from '../../../components/site/Header.astro';
import Footer from '../../../components/site/Footer.astro';
import { locales } from '../../../lib/site';
import type { Locale } from '../../../data/types';

export function getStaticPaths() {
  return locales.map((lang) => ({ params: { lang } }));
}

const locale = Astro.params.lang as Locale;
---

<Layout locale={locale} title="FAQ | COMPASS" description="FAQ page stub">
  <Header locale={locale} />
  <main class="page-shell container"><h1>FAQ</h1></main>
  <Footer locale={locale} />
</Layout>
```

- [ ] **Step 5: Replace global theme tokens for the COMPASS shell**

```css
/* src/styles/global.css */
@import "tailwindcss";

:root {
  --page-bg: #f6f2ec;
  --surface: #fffdf9;
  --surface-muted: #efe8de;
  --ink: #142033;
  --ink-soft: #435066;
  --accent: #7e2434;
  --accent-strong: #5f1624;
  --accent-cool: #375f8a;
  --line: rgba(20, 32, 51, 0.12);
  --shadow: 0 18px 40px rgba(20, 32, 51, 0.08);
}

html,
body {
  margin: 0;
  padding: 0;
}

body {
  font-family: "Manrope", sans-serif;
  color: var(--ink);
  background:
    radial-gradient(circle at top right, rgba(55, 95, 138, 0.12), transparent 28%),
    radial-gradient(circle at top left, rgba(126, 36, 52, 0.12), transparent 24%),
    var(--page-bg);
}

h1,
h2,
h3,
.display-serif {
  font-family: "Cormorant Garamond", serif;
  letter-spacing: -0.02em;
}

.page-shell {
  padding: 7rem 0 4rem;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem 1.25rem;
  border-radius: 999px;
  background: var(--accent);
  color: white;
  text-decoration: none;
  font-weight: 700;
}
```

- [ ] **Step 6: Run checks to verify localized shells build cleanly**

Run: `npm run check && npm run build`

Expected: PASS with routes emitted for `/en/`, `/it/`, and each localized section stub.

- [ ] **Step 7: Commit the localized site shell**

```bash
git add src/layouts/Layout.astro src/styles/global.css src/components/site src/pages
git commit -m "feat: add localized COMPASS site shell"
```

### Task 3: Build the homepage with COMPASS sections and preserve the template rhythm

**Files:**
- Delete: `src/components/HeroSection.vue`
- Delete: `src/components/NoiseStageSection.astro`
- Delete: `src/components/EventCards.astro`
- Delete: `src/components/TestimonialsSection.astro`
- Delete: `src/components/VenueCarouselSection.astro`
- Delete: `src/components/PreviousYearsVideoSection.vue`
- Delete: `src/components/SpeakersShowcaseSection.astro`
- Delete: `src/components/Welcome.astro`
- Delete: `src/components/LeadCaptureForm.vue`
- Create: `src/components/home/HeroSection.astro`
- Create: `src/components/home/WhyCompassSection.astro`
- Create: `src/components/home/HighlightsSection.astro`
- Create: `src/components/home/ProgrammePreviewSection.astro`
- Create: `src/components/home/FeaturedSpeakersSection.astro`
- Create: `src/components/home/VenuePreviewSection.astro`
- Create: `src/components/home/RegistrationCtaSection.astro`
- Modify: `src/pages/[lang]/index.astro`
- Modify: `src/components/SectionScrollNav.vue`

- [ ] **Step 1: Add a failing content test for homepage highlights**

```ts
// tests/site.test.ts
import { describe, expect, it } from 'vitest';
import { getHomepageHighlights } from '../src/lib/site';

describe('homepage content', () => {
  it('returns the four workshop highlights for each locale', () => {
    expect(getHomepageHighlights('en')).toHaveLength(4);
    expect(getHomepageHighlights('it')[0]?.value).toBe('3');
  });
});
```

- [ ] **Step 2: Run tests to verify the new homepage helper is missing**

Run: `npm run test`

Expected: FAIL because `getHomepageHighlights` is not exported yet.

- [ ] **Step 3: Add homepage helper data and COMPASS sections**

```ts
// add to src/lib/site.ts
export function getHomepageHighlights(locale: Locale) {
  return [
    {
      value: '3',
      label: locale === 'it' ? 'Keynote internazionali' : 'International keynotes',
    },
    {
      value: '3',
      label: locale === 'it' ? 'Panel tematici' : 'Thematic panels',
    },
    {
      value: '1',
      label: locale === 'it' ? 'Giornata interdisciplinare' : 'Interdisciplinary day',
    },
    {
      value: '1',
      label: locale === 'it' ? 'Social dinner finale' : 'Closing social dinner',
    },
  ];
}
```

```astro
---
// src/components/home/HeroSection.astro
import { buildLocalizedPath, getLabels, siteConfig } from '../../lib/site';
import type { Locale } from '../../data/types';

interface Props {
  locale: Locale;
}

const { locale } = Astro.props;
const labels = getLabels(locale);
---

<section class="hero-shell">
  <div class="hero-grid container">
    <div>
      <p class="eyebrow">COMPASS 2026</p>
      <h1 class="hero-title">Complexity, markets, policy, and AI in one academic workshop.</h1>
      <p class="hero-copy">
        {locale === 'it'
          ? 'Un workshop interdisciplinare su sistemi socio-economici, AI, complessità e governance.'
          : 'An interdisciplinary workshop on socio-economic systems, AI, complexity, and governance.'}
      </p>
      <div class="hero-actions">
        <a class="btn-primary" href={buildLocalizedPath(locale, 'registration')}>{labels.register}</a>
        <a class="btn-secondary" href={buildLocalizedPath(locale, 'programme')}>{labels.viewProgramme}</a>
      </div>
    </div>

    <aside class="hero-panel">
      <p>{siteConfig.eventDate}</p>
      <p>{siteConfig.venue}</p>
      <p>{locale === 'it' ? 'Tre keynote, tre panel, speaker invitati, dinner finale.' : 'Three keynotes, three panels, invited speakers, closing dinner.'}</p>
    </aside>
  </div>
</section>
```

```astro
---
// src/components/home/HighlightsSection.astro
import { getHomepageHighlights } from '../../lib/site';
import type { Locale } from '../../data/types';

interface Props {
  locale: Locale;
}

const { locale } = Astro.props;
const highlights = getHomepageHighlights(locale);
---

<section class="section-shell">
  <div class="container highlights-grid">
    {highlights.map((item) => (
      <article class="highlight-card">
        <p class="highlight-card__value">{item.value}</p>
        <p class="highlight-card__label">{item.label}</p>
      </article>
    ))}
  </div>
</section>
```

```astro
---
// src/pages/[lang]/index.astro
import Layout from '../../layouts/Layout.astro';
import Header from '../../components/site/Header.astro';
import Footer from '../../components/site/Footer.astro';
import SectionScrollNav from '../../components/SectionScrollNav.vue';
import HeroSection from '../../components/home/HeroSection.astro';
import WhyCompassSection from '../../components/home/WhyCompassSection.astro';
import HighlightsSection from '../../components/home/HighlightsSection.astro';
import ProgrammePreviewSection from '../../components/home/ProgrammePreviewSection.astro';
import FeaturedSpeakersSection from '../../components/home/FeaturedSpeakersSection.astro';
import VenuePreviewSection from '../../components/home/VenuePreviewSection.astro';
import RegistrationCtaSection from '../../components/home/RegistrationCtaSection.astro';
import { locales } from '../../lib/site';
import type { Locale } from '../../data/types';

export function getStaticPaths() {
  return locales.map((lang) => ({ params: { lang } }));
}

const locale = Astro.params.lang as Locale;
---

<Layout
  locale={locale}
  title="COMPASS | Complexity, Markets, Policy, and AI in Social Systems"
  description="Academic workshop on AI, complexity, markets, policy, and social systems."
>
  <Header locale={locale} />
  <SectionScrollNav client:load />
  <main>
    <HeroSection locale={locale} />
    <WhyCompassSection locale={locale} />
    <HighlightsSection locale={locale} />
    <ProgrammePreviewSection locale={locale} />
    <FeaturedSpeakersSection locale={locale} />
    <VenuePreviewSection locale={locale} />
    <RegistrationCtaSection locale={locale} />
  </main>
  <Footer locale={locale} />
</Layout>
```

- [ ] **Step 4: Retune the scroll nav so it follows the new homepage anchors**

```vue
<!-- src/components/SectionScrollNav.vue -->
<script setup lang="ts">
const sections = [
  { id: 'why-compass', label: 'About' },
  { id: 'programme-preview', label: 'Programme' },
  { id: 'featured-speakers', label: 'Speakers' },
  { id: 'venue-preview', label: 'Venue' },
  { id: 'registration-cta', label: 'Register' },
];
</script>
```

- [ ] **Step 5: Run checks and build to verify the new homepage structure**

Run: `npm run test && npm run check && npm run build`

Expected: PASS, with the localized homepage rendering the new section stack and no references left to the deleted summit content blocks.

- [ ] **Step 6: Commit the homepage rewrite**

```bash
git add src/components/home src/components/SectionScrollNav.vue src/pages/[lang]/index.astro src/lib/site.ts
git commit -m "feat: replace summit homepage with COMPASS landing"
```

### Task 4: Implement programme, talk detail pages, and relational agenda rendering

**Files:**
- Create: `src/components/programme/ProgrammeTimeline.astro`
- Create: `src/components/programme/SessionBlock.astro`
- Create: `src/components/programme/TalkListItem.astro`
- Create: `src/pages/[lang]/talks/[slug].astro`
- Modify: `src/pages/[lang]/programme/index.astro`
- Modify: `src/lib/site.ts`
- Test: `tests/site.test.ts`

- [ ] **Step 1: Add a failing relational test for talks grouped by session**

```ts
// tests/site.test.ts
import { describe, expect, it } from 'vitest';
import { getTalksForSession } from '../src/lib/site';

describe('programme relations', () => {
  it('returns talks for the AI methods panel', () => {
    const talks = getTalksForSession('panel-ai-methods');
    expect(talks.length).toBeGreaterThan(0);
  });
});
```

- [ ] **Step 2: Run tests to verify the session data is still incomplete**

Run: `npm run test`

Expected: FAIL because `panel-ai-methods` still has no talk entries.

- [ ] **Step 3: Expand the session and talk datasets so each panel is populated**

```ts
// add to src/data/talks.ts
export const talks: Talk[] = [
  {
    slug: 'complexity-keynote',
    title: {
      en: 'Modelling Complexity Across Markets and Policy',
      it: 'Modellare la complessità tra mercati e policy',
    },
    abstract: {
      en: 'A keynote on computational models for socio-economic complexity and policy design.',
      it: 'Una keynote sui modelli computazionali per la complessità socio-economica e il design delle policy.',
    },
    speakerSlugs: ['guido-germano'],
    sessionSlug: 'welcome-opening',
    startsAt: '2026-05-11T09:15:00+02:00',
  },
  {
    slug: 'predictive-ai-for-complex-systems',
    title: {
      en: 'Predictive AI for Complex Systems',
      it: 'AI predittiva per sistemi complessi',
    },
    abstract: {
      en: 'How predictive pipelines and simulation-informed AI interact in socio-economic settings.',
      it: 'Come pipeline predittive e AI informata dalla simulazione interagiscono in contesti socio-economici.',
    },
    speakerSlugs: ['stefano-blando'],
    sessionSlug: 'panel-ai-methods',
    startsAt: '2026-05-11T10:40:00+02:00',
  },
];
```

```ts
// add to src/lib/site.ts
export function getTalkBySlug(slug: string) {
  return talks.find((talk) => talk.slug === slug);
}
```

- [ ] **Step 4: Implement the programme timeline and talk detail route**

```astro
---
// src/components/programme/TalkListItem.astro
import { buildLocalizedPath, getSpeakerBySlug } from '../../lib/site';
import type { Locale, Talk } from '../../data/types';

interface Props {
  locale: Locale;
  talk: Talk;
}

const { locale, talk } = Astro.props;
const primarySpeaker = getSpeakerBySlug(talk.speakerSlugs[0]);
---

<li class="talk-item">
  <a href={buildLocalizedPath(locale, `talks/${talk.slug}`)} class="talk-item__link">
    <span class="talk-item__time">{talk.startsAt?.slice(11, 16)}</span>
    <span class="talk-item__content">
      <strong>{talk.title[locale]}</strong>
      {primarySpeaker && <span>{primarySpeaker.name} · {primarySpeaker.affiliation}</span>}
    </span>
  </a>
</li>
```

```astro
---
// src/components/programme/SessionBlock.astro
import { getSpeakerBySlug, getTalksForSession } from '../../lib/site';
import TalkListItem from './TalkListItem.astro';
import type { Locale, Session } from '../../data/types';

interface Props {
  locale: Locale;
  session: Session;
}

const { locale, session } = Astro.props;
const chairs = session.chairSlugs.map(getSpeakerBySlug).filter(Boolean);
const sessionTalks = getTalksForSession(session.slug);
---

<section class="session-block">
  <div class="session-block__header">
    <p class="session-block__time">{session.startsAt.slice(11, 16)}–{session.endsAt.slice(11, 16)}</p>
    <div>
      <h2>{session.title[locale]}</h2>
      <p>{session.description[locale]}</p>
      {chairs.length > 0 && <p class="session-block__chairs">{chairs.map((chair) => chair?.name).join(', ')}</p>}
    </div>
  </div>
  {sessionTalks.length > 0 && (
    <ul class="session-block__talks">
      {sessionTalks.map((talk) => <TalkListItem locale={locale} talk={talk} />)}
    </ul>
  )}
</section>
```

```astro
---
// src/pages/[lang]/talks/[slug].astro
import Layout from '../../../../layouts/Layout.astro';
import Header from '../../../../components/site/Header.astro';
import Footer from '../../../../components/site/Footer.astro';
import { buildLocalizedPath, getSpeakerBySlug, getTalkBySlug, getProgrammeSessions, getTalksForSession, locales } from '../../../../lib/site';
import type { Locale } from '../../../../data/types';

export function getStaticPaths() {
  return locales.flatMap((lang) =>
    getProgrammeSessions().flatMap((session) =>
      getTalksForSession(session.slug).map((talk) => ({
        params: { lang, slug: talk.slug },
      })),
    ),
  );
}

const locale = Astro.params.lang as Locale;
const talk = getTalkBySlug(Astro.params.slug!);
if (!talk) throw new Error(`Unknown talk: ${Astro.params.slug}`);
const speakers = talk.speakerSlugs.map(getSpeakerBySlug).filter(Boolean);
---

<Layout locale={locale} title={`${talk.title[locale]} | COMPASS`} description={talk.abstract[locale]}>
  <Header locale={locale} />
  <main class="page-shell container">
    <p class="eyebrow"><a href={buildLocalizedPath(locale, 'programme')}>Programme</a></p>
    <h1>{talk.title[locale]}</h1>
    <p>{speakers.map((speaker) => `${speaker?.name} · ${speaker?.affiliation}`).join(' / ')}</p>
    <article class="prose">
      <p>{talk.abstract[locale]}</p>
    </article>
  </main>
  <Footer locale={locale} />
</Layout>
```

- [ ] **Step 5: Wire the localized programme page to the new timeline component**

```astro
---
// src/pages/[lang]/programme/index.astro
import Layout from '../../../layouts/Layout.astro';
import Header from '../../../components/site/Header.astro';
import Footer from '../../../components/site/Footer.astro';
import ProgrammeTimeline from '../../../components/programme/ProgrammeTimeline.astro';
import { getProgrammeSessions, locales } from '../../../lib/site';
import type { Locale } from '../../../data/types';

export function getStaticPaths() {
  return locales.map((lang) => ({ params: { lang } }));
}

const locale = Astro.params.lang as Locale;
const sessions = getProgrammeSessions();
---

<Layout locale={locale} title="Programme | COMPASS" description="Full workshop programme">
  <Header locale={locale} />
  <main class="page-shell container">
    <p class="eyebrow">COMPASS</p>
    <h1>{locale === 'it' ? 'Programma' : 'Programme'}</h1>
    <ProgrammeTimeline locale={locale} sessions={sessions} />
  </main>
  <Footer locale={locale} />
</Layout>
```

- [ ] **Step 6: Run verification for programme and talk generation**

Run: `npm run test && npm run check && npm run build`

Expected: PASS, with generated routes for `/en/programme/`, `/it/programme/`, and each `/[lang]/talks/[slug]/`.

- [ ] **Step 7: Commit programme and talk routing**

```bash
git add src/components/programme src/pages/[lang]/programme src/pages/[lang]/talks src/data/talks.ts src/lib/site.ts tests/site.test.ts
git commit -m "feat: add COMPASS programme and talk pages"
```

### Task 5: Implement speakers listing and speaker detail pages from shared data

**Files:**
- Create: `src/components/speakers/SpeakerCard.astro`
- Create: `src/pages/[lang]/speakers/[slug].astro`
- Modify: `src/pages/[lang]/speakers/index.astro`
- Modify: `src/lib/site.ts`
- Test: `tests/site.test.ts`

- [ ] **Step 1: Add a failing test for speaker detail aggregation**

```ts
// tests/site.test.ts
import { describe, expect, it } from 'vitest';
import { getSpeakerBySlug, getTalksBySpeaker } from '../src/lib/site';

describe('speaker detail data', () => {
  it('returns linked talks for a speaker detail page', () => {
    const speaker = getSpeakerBySlug('guido-germano');
    expect(speaker?.affiliation).toBe('University College London');
    expect(getTalksBySpeaker('guido-germano')).toHaveLength(1);
  });
});
```

- [ ] **Step 2: Run tests to verify speaker data is still incomplete**

Run: `npm run test`

Expected: FAIL until the speaker dataset includes all linked participants referenced in talks and sessions.

- [ ] **Step 3: Expand speaker data and add speaker list/detail components**

```ts
// extend src/data/speakers.ts
export const speakers: Speaker[] = [
  {
    slug: 'guido-germano',
    name: 'Guido Germano',
    affiliation: 'University College London',
    roleLabel: {
      en: 'Keynote Speaker',
      it: 'Keynote Speaker',
    },
    bio: {
      en: 'Professor of Computational Science working on complex systems, economics, and computational methods.',
      it: 'Professore di Computational Science con attività su sistemi complessi, economia e metodi computazionali.',
    },
    image: '/images/speakers/guido-germano.jpg',
    type: ['keynote'],
  },
  {
    slug: 'stefano-blando',
    name: 'Stefano Blando',
    affiliation: 'Scuola Superiore Sant’Anna',
    roleLabel: {
      en: 'Chair and Speaker',
      it: 'Chair e Speaker',
    },
    bio: {
      en: 'PhD researcher working on agent-based modeling, complex networks, and robust statistics.',
      it: 'Dottorando che si occupa di agent-based modeling, reti complesse e statistica robusta.',
    },
    image: '/images/speakers/stefano-blando.jpg',
    type: ['chair', 'panelist', 'organizer'],
  },
];
```

```astro
---
// src/components/speakers/SpeakerCard.astro
import { buildLocalizedPath } from '../../lib/site';
import type { Locale, Speaker } from '../../data/types';

interface Props {
  locale: Locale;
  speaker: Speaker;
}

const { locale, speaker } = Astro.props;
---

<article class="speaker-card">
  <a href={buildLocalizedPath(locale, `speakers/${speaker.slug}`)} class="speaker-card__link">
    <img src={speaker.image} alt={speaker.name} loading="lazy" />
    <div>
      <h2>{speaker.name}</h2>
      <p>{speaker.roleLabel[locale]}</p>
      <p>{speaker.affiliation}</p>
    </div>
  </a>
</article>
```

```astro
---
// src/pages/[lang]/speakers/[slug].astro
import Layout from '../../../../layouts/Layout.astro';
import Header from '../../../../components/site/Header.astro';
import Footer from '../../../../components/site/Footer.astro';
import { getSpeakerBySlug, getTalksBySpeaker, locales } from '../../../../lib/site';
import { speakers } from '../../../../data/speakers';
import type { Locale } from '../../../../data/types';

export function getStaticPaths() {
  return locales.flatMap((lang) =>
    speakers.map((speaker) => ({
      params: { lang, slug: speaker.slug },
    })),
  );
}

const locale = Astro.params.lang as Locale;
const speaker = getSpeakerBySlug(Astro.params.slug!);
if (!speaker) throw new Error(`Unknown speaker: ${Astro.params.slug}`);
const talks = getTalksBySpeaker(speaker.slug);
---

<Layout locale={locale} title={`${speaker.name} | COMPASS`} description={speaker.bio[locale]}>
  <Header locale={locale} />
  <main class="page-shell container">
    <img src={speaker.image} alt={speaker.name} class="speaker-detail__image" />
    <p class="eyebrow">{speaker.roleLabel[locale]}</p>
    <h1>{speaker.name}</h1>
    <p>{speaker.affiliation}</p>
    <p>{speaker.bio[locale]}</p>
    <section>
      <h2>{locale === 'it' ? 'Interventi' : 'Talks'}</h2>
      <ul>
        {talks.map((talk) => <li><a href={`/${locale}/talks/${talk.slug}/`}>{talk.title[locale]}</a></li>)}
      </ul>
    </section>
  </main>
  <Footer locale={locale} />
</Layout>
```

- [ ] **Step 4: Replace the speakers index page with data-driven cards**

```astro
---
// src/pages/[lang]/speakers/index.astro
import Layout from '../../../layouts/Layout.astro';
import Header from '../../../components/site/Header.astro';
import Footer from '../../../components/site/Footer.astro';
import SpeakerCard from '../../../components/speakers/SpeakerCard.astro';
import { locales } from '../../../lib/site';
import { speakers } from '../../../data/speakers';
import type { Locale } from '../../../data/types';

export function getStaticPaths() {
  return locales.map((lang) => ({ params: { lang } }));
}

const locale = Astro.params.lang as Locale;
---

<Layout locale={locale} title="Speakers | COMPASS" description="Workshop speakers and chairs">
  <Header locale={locale} />
  <main class="page-shell container">
    <p class="eyebrow">COMPASS</p>
    <h1>{locale === 'it' ? 'Speaker' : 'Speakers'}</h1>
    <div class="speaker-grid">
      {speakers.map((speaker) => <SpeakerCard locale={locale} speaker={speaker} />)}
    </div>
  </main>
  <Footer locale={locale} />
</Layout>
```

- [ ] **Step 5: Run verification for speaker pages and route generation**

Run: `npm run test && npm run check && npm run build`

Expected: PASS, with generated localized listing routes and speaker detail pages.

- [ ] **Step 6: Commit the speaker experience**

```bash
git add src/components/speakers src/pages/[lang]/speakers src/data/speakers.ts src/lib/site.ts tests/site.test.ts
git commit -m "feat: add data-driven speaker pages"
```

### Task 6: Build venue, registration, about, organizers, and FAQ pages with production-ready content blocks

**Files:**
- Create: `src/components/content/SectionIntro.astro`
- Create: `src/components/content/RegistrationEmbed.astro`
- Modify: `src/components/site/Footer.astro`
- Modify: `src/pages/[lang]/venue/index.astro`
- Modify: `src/pages/[lang]/registration/index.astro`
- Modify: `src/pages/[lang]/about/index.astro`
- Modify: `src/pages/[lang]/organizers/index.astro`
- Modify: `src/pages/[lang]/faq/index.astro`
- Modify: `src/data/site.ts`
- Modify: `src/lib/site.ts`

- [ ] **Step 1: Add a failing test for registration labels and event metadata**

```ts
// tests/site.test.ts
import { describe, expect, it } from 'vitest';
import { getRegistrationCopy, siteConfig } from '../src/lib/site';

describe('registration copy', () => {
  it('returns localized registration copy and the configured form URL', () => {
    expect(siteConfig.registrationUrl).toContain('compass-registration');
    expect(getRegistrationCopy('it').title).toBe('Registrazione');
  });
});
```

- [ ] **Step 2: Run tests to verify the registration helper is missing**

Run: `npm run test`

Expected: FAIL because `getRegistrationCopy` is not implemented yet.

- [ ] **Step 3: Add page copy helpers and the reusable registration embed**

```ts
// add to src/lib/site.ts
export function getRegistrationCopy(locale: Locale) {
  return locale === 'it'
    ? {
        title: 'Registrazione',
        intro: 'La partecipazione è gratuita, ma chiediamo di registrarsi per motivi organizzativi.',
        cta: 'Apri il form di registrazione',
      }
    : {
        title: 'Registration',
        intro: 'Attendance is free, but registration is required for organizational planning.',
        cta: 'Open registration form',
      };
}
```

```astro
---
// src/components/content/RegistrationEmbed.astro
import { siteConfig, getRegistrationCopy } from '../../lib/site';
import type { Locale } from '../../data/types';

interface Props {
  locale: Locale;
}

const { locale } = Astro.props;
const copy = getRegistrationCopy(locale);
---

<section class="registration-embed">
  <p>{copy.intro}</p>
  <div class="registration-embed__actions">
    <a class="btn-primary" href={siteConfig.registrationUrl} target="_blank" rel="noreferrer">{copy.cta}</a>
  </div>
  <iframe
    src={siteConfig.registrationUrl}
    title={copy.title}
    loading="lazy"
    class="registration-embed__frame"
  />
</section>
```

- [ ] **Step 4: Replace the secondary pages with localized COMPASS content**

```astro
---
// src/pages/[lang]/registration/index.astro
import Layout from '../../../layouts/Layout.astro';
import Header from '../../../components/site/Header.astro';
import Footer from '../../../components/site/Footer.astro';
import RegistrationEmbed from '../../../components/content/RegistrationEmbed.astro';
import { getRegistrationCopy, locales } from '../../../lib/site';
import type { Locale } from '../../../data/types';

export function getStaticPaths() {
  return locales.map((lang) => ({ params: { lang } }));
}

const locale = Astro.params.lang as Locale;
const copy = getRegistrationCopy(locale);
---

<Layout locale={locale} title={`${copy.title} | COMPASS`} description={copy.intro}>
  <Header locale={locale} />
  <main class="page-shell container">
    <p class="eyebrow">COMPASS</p>
    <h1>{copy.title}</h1>
    <RegistrationEmbed locale={locale} />
  </main>
  <Footer locale={locale} />
</Layout>
```

```astro
---
// src/pages/[lang]/venue/index.astro
import Layout from '../../../layouts/Layout.astro';
import Header from '../../../components/site/Header.astro';
import Footer from '../../../components/site/Footer.astro';
import { locales } from '../../../lib/site';
import type { Locale } from '../../../data/types';

export function getStaticPaths() {
  return locales.map((lang) => ({ params: { lang } }));
}

const locale = Astro.params.lang as Locale;
---

<Layout locale={locale} title="Venue | COMPASS" description="Venue and travel information">
  <Header locale={locale} />
  <main class="page-shell container">
    <p class="eyebrow">Pisa</p>
    <h1>{locale === 'it' ? 'Sede e logistica' : 'Venue & Travel'}</h1>
    <p>{locale === 'it' ? 'Scuola Superiore Sant’Anna, Pisa.' : 'Scuola Superiore Sant’Anna, Pisa.'}</p>
    <p>
      {locale === 'it'
        ? 'La pagina deve includere aula, indirizzo, mappa, indicazioni da stazione e aeroporto, e note su accessibilità.'
        : 'This page should include room, address, map, travel directions from the station and airport, and accessibility notes.'}
    </p>
  </main>
  <Footer locale={locale} />
</Layout>
```

```astro
---
// extend src/components/site/Footer.astro
import { buildLocalizedPath, getLabels, siteConfig } from '../../lib/site';
import type { Locale } from '../../data/types';

interface Props {
  locale: Locale;
}

const { locale } = Astro.props;
const labels = getLabels(locale);
---

<footer class="site-footer">
  <div class="container site-footer__grid">
    <div>
      <p class="site-footer__eyebrow">COMPASS</p>
      <p>{siteConfig.fullTitle}</p>
      <p>{siteConfig.venue}</p>
    </div>
    <div>
      <p class="site-footer__eyebrow">{locale === 'it' ? 'Navigazione' : 'Navigation'}</p>
      <ul>
        <li><a href={buildLocalizedPath(locale, 'programme')}>{labels.programme}</a></li>
        <li><a href={buildLocalizedPath(locale, 'speakers')}>{labels.speakers}</a></li>
        <li><a href={buildLocalizedPath(locale, 'registration')}>{labels.registration}</a></li>
      </ul>
    </div>
    <div>
      <p class="site-footer__eyebrow">{locale === 'it' ? 'Partner' : 'Partners'}</p>
      <ul>
        <li>PhD in AI</li>
        <li>Scuola Superiore Sant’Anna</li>
        <li>University of Pisa</li>
      </ul>
    </div>
  </div>
  <div class="container site-footer__note">
    <p>
      {locale === 'it'
        ? 'COMPASS promuove un ambiente scientifico inclusivo e attento all’equilibrio di genere.'
        : 'COMPASS promotes an inclusive scientific environment and attention to gender balance.'}
    </p>
  </div>
</footer>
```

Replace the remaining content pages with concrete localized sections:

```astro
---
// src/pages/[lang]/about/index.astro
import Layout from '../../../layouts/Layout.astro';
import Header from '../../../components/site/Header.astro';
import Footer from '../../../components/site/Footer.astro';
import { locales } from '../../../lib/site';
import type { Locale } from '../../../data/types';

export function getStaticPaths() {
  return locales.map((lang) => ({ params: { lang } }));
}

const locale = Astro.params.lang as Locale;
---

<Layout locale={locale} title="About | COMPASS" description="Workshop mission and scope">
  <Header locale={locale} />
  <main class="page-shell container">
    <p class="eyebrow">COMPASS</p>
    <h1>{locale === 'it' ? 'Il workshop' : 'About the workshop'}</h1>
    <p>
      {locale === 'it'
        ? 'COMPASS esplora il rapporto tra complessità, mercati, policy e AI nei sistemi sociali.'
        : 'COMPASS explores the relationship between complexity, markets, policy, and AI in social systems.'}
    </p>
  </main>
  <Footer locale={locale} />
</Layout>
```

```astro
---
// src/pages/[lang]/organizers/index.astro
import Layout from '../../../layouts/Layout.astro';
import Header from '../../../components/site/Header.astro';
import Footer from '../../../components/site/Footer.astro';
import { locales } from '../../../lib/site';
import type { Locale } from '../../../data/types';

export function getStaticPaths() {
  return locales.map((lang) => ({ params: { lang } }));
}

const locale = Astro.params.lang as Locale;
---

<Layout locale={locale} title="Organizers | COMPASS" description="Organizing committee">
  <Header locale={locale} />
  <main class="page-shell container">
    <p class="eyebrow">COMPASS</p>
    <h1>{locale === 'it' ? 'Comitato organizzatore' : 'Organizing Committee'}</h1>
    <ul>
      <li>Stefano Blando</li>
      <li>Biancamaria Bombino</li>
      <li>Lorenzo Emer</li>
      <li>Alice Musso</li>
      <li>Roberta Romano</li>
      <li>Roberta Savella</li>
    </ul>
  </main>
  <Footer locale={locale} />
</Layout>
```

```astro
---
// src/pages/[lang]/faq/index.astro
import Layout from '../../../layouts/Layout.astro';
import Header from '../../../components/site/Header.astro';
import Footer from '../../../components/site/Footer.astro';
import { locales } from '../../../lib/site';
import type { Locale } from '../../../data/types';

export function getStaticPaths() {
  return locales.map((lang) => ({ params: { lang } }));
}

const locale = Astro.params.lang as Locale;
---

<Layout locale={locale} title="FAQ | COMPASS" description="Frequently asked questions">
  <Header locale={locale} />
  <main class="page-shell container">
    <p class="eyebrow">COMPASS</p>
    <h1>FAQ</h1>
    <dl>
      <dt>{locale === 'it' ? 'La partecipazione è gratuita?' : 'Is attendance free?'}</dt>
      <dd>{locale === 'it' ? 'Sì, con registrazione obbligatoria.' : 'Yes, with required registration.'}</dd>
      <dt>{locale === 'it' ? 'Dove si svolge il workshop?' : 'Where is the workshop held?'}</dt>
      <dd>Scuola Superiore Sant’Anna, Pisa.</dd>
    </dl>
  </main>
  <Footer locale={locale} />
</Layout>
```

- [ ] **Step 5: Run full verification**

Run: `npm run test && npm run check && npm run build`

Expected: PASS, with all top-level localized pages rendering final content and the registration route showing the external form block.

- [ ] **Step 6: Commit the content pages**

```bash
git add src/components/content src/components/site/Footer.astro src/pages/[lang]/venue src/pages/[lang]/registration src/pages/[lang]/about src/pages/[lang]/organizers src/pages/[lang]/faq src/data/site.ts src/lib/site.ts tests/site.test.ts
git commit -m "feat: add COMPASS content pages and registration"
```

### Task 7: Polish assets, remove leftover summit branding, and prepare GitHub Pages deployment

**Files:**
- Modify: `README.md`
- Modify: `astro.config.mjs`
- Create: `.github/workflows/deploy.yml`
- Create: `public/images/speakers/.gitkeep`
- Replace: `public/artham.png`
- Remove or rewrite any leftover `ARTHAM`, `Tickets`, or dummy-company copy under `src/`
- Test: `npm run build`

- [ ] **Step 1: Add a failing grep-based branding check**

Run: `rg -n "ARTHAM|Tickets|OpenAI|Notion|Anthropic|Vercel|PayPal|Figma" src public README.md`

Expected: FAIL because the cloned theme still contains summit branding and dummy company references.

- [ ] **Step 2: Configure Astro for GitHub Pages static deployment**

```js
// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vue from '@astrojs/vue';

const site = process.env.SITE_URL || 'https://stefano-blando.github.io';
const base = process.env.BASE_PATH || '/compass-website';

export default defineConfig({
  site,
  base,
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [vue()],
});
```

```yaml
# .github/workflows/deploy.yml
name: Deploy Astro site

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm
      - run: npm ci
      - run: npm run build
        env:
          SITE_URL: https://stefano-blando.github.io
          BASE_PATH: /compass-website
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

- [ ] **Step 3: Replace remaining placeholder assets and copy**

```md
<!-- README.md -->
# COMPASS Website

Astro microsite for the COMPASS workshop: COmplexity, Markets, Policy, and AI in Social Systems.

## Commands

- `npm install`
- `npm run dev`
- `npm run check`
- `npm run test`
- `npm run build`
```

```text
public/artham.png -> replace with a temporary COMPASS wordmark or symbol
public/images/speakers/.gitkeep -> keep speaker image directory tracked until real portraits arrive
```

- [ ] **Step 4: Re-run the branding grep and production verification**

Run:

```bash
rg -n "ARTHAM|Tickets|OpenAI|Notion|Anthropic|Vercel|PayPal|Figma" src public README.md
npm run test
npm run check
npm run build
```

Expected:

- `rg` returns no matches
- tests PASS
- `astro check` PASS
- build PASS and emits only COMPASS-branded pages

- [ ] **Step 5: Commit the deployment-ready cleanup**

```bash
git add README.md astro.config.mjs .github/workflows/deploy.yml public src
git commit -m "feat: finalize COMPASS branding and deployment setup"
```

import { describe, expect, it } from 'vitest';
import homePageSource from '../src/pages/[lang]/index.astro?raw';
import programmePageSource from '../src/pages/[lang]/programme/index.astro?raw';
import talkDetailPageSource from '../src/pages/[lang]/talks/[slug].astro?raw';
import speakersPageSource from '../src/pages/[lang]/speakers/index.astro?raw';
import aboutPageSource from '../src/pages/[lang]/about/index.astro?raw';
import faqPageSource from '../src/pages/[lang]/faq/index.astro?raw';
import organizersPageSource from '../src/pages/[lang]/organizers/index.astro?raw';
import registrationPageSource from '../src/pages/[lang]/registration/index.astro?raw';
import venuePageSource from '../src/pages/[lang]/venue/index.astro?raw';
import richContentPageSource from '../src/components/site/RichContentPage.astro?raw';

import headerSource from '../src/components/site/Header.astro?raw';
import darkStageSectionSource from '../src/components/home/DarkStageSection.astro?raw';
import featuredSpeakersSectionSource from '../src/components/home/FeaturedSpeakersSection.astro?raw';
import heroSectionSource from '../src/components/home/HeroSection.astro?raw';
import homeNetworkBackgroundSource from '../src/components/home/HomeNetworkBackground.astro?raw';
import mediaShowcaseSectionSource from '../src/components/home/MediaShowcaseSection.astro?raw';
import whyCompassSectionSource from '../src/components/home/WhyCompassSection.astro?raw';
import programmePreviewSectionSource from '../src/components/home/ProgrammePreviewSection.astro?raw';
import venuePreviewSectionSource from '../src/components/home/VenuePreviewSection.astro?raw';
import registrationCtaSectionSource from '../src/components/home/RegistrationCtaSection.astro?raw';
import rootIndexSource from '../src/pages/index.astro?raw';
import {
  buildLocalizedPath,
  getChromeLabels,
  getHomepageContent,
  getHomepageFeaturedSpeakers,
  getHomepageHighlights,
  getHomepageProgrammePreview,
  getHomepageScrollSections,
  getLabels,
  getPageMetadata,
  getProgrammePageContent,
  getProgrammeSessions,
  getRichPageContent,
  getRootRedirect,
  getSpeakerBySlug,
  getTalkBySlug,
  getTalksForSession,
  getTalksBySpeaker,
  locales,
} from '../src/lib/site';
import { sessions } from '../src/data/sessions';
import { speakers } from '../src/data/speakers';
import { talks } from '../src/data/talks';

describe('site helpers', () => {
  it('wires the homepage route to the hero and media showcase sections', () => {
    expect(homePageSource).toContain('<HeroSection locale={locale} />');
    expect(homePageSource).toContain('<MediaShowcaseSection locale={locale} />');
  });

  it('routes all internal tabs through a shared rich-content page renderer', () => {
    expect(aboutPageSource).toContain("getRichPageContent(locale, 'about')");
    expect(speakersPageSource).toContain("getRichPageContent(locale, 'speakers')");
    expect(venuePageSource).toContain("getRichPageContent(locale, 'venue')");
    expect(registrationPageSource).toContain("getRichPageContent(locale, 'registration')");
    expect(organizersPageSource).toContain("getRichPageContent(locale, 'organizers')");
    expect(faqPageSource).toContain("getRichPageContent(locale, 'faq')");

    expect(aboutPageSource).toContain('<RichContentPage');
    // Speakers page now uses a custom layout with SpeakerNetworkHero and grids
    expect(speakersPageSource).toContain('<SpeakerNetworkHero');
    expect(venuePageSource).toContain('<RichContentPage');
    expect(registrationPageSource).toContain('<RichContentPage');
    expect(organizersPageSource).toContain('<RichContentPage');
    expect(faqPageSource).toContain('<RichContentPage');
  });

  it('adds dedicated venue and faq routes to the main navigation', () => {
    expect(venuePageSource).toContain("page=\"venue\"");
    expect(faqPageSource).toContain("page=\"faq\"");
    expect(headerSource).toContain("buildLocalizedPath(locale, 'venue')");
    expect(headerSource).toContain("buildLocalizedPath(locale, 'faq')");
  });

  it('uses a dedicated mobile header toggle instead of forcing the full desktop nav into small screens', () => {
    expect(headerSource).toContain('site-header__menu-toggle');
    expect(headerSource).toContain('data-mobile-nav-toggle');
    expect(headerSource).toContain('data-mobile-nav-panel');
    expect(headerSource).toContain('aria-expanded="false"');
    expect(headerSource).toContain("header.dataset.mobileNavOpen = next ? 'true' : 'false'");
    expect(headerSource).toContain('window.innerWidth > 720');
  });

  it('defines a rich internal-page renderer with hero media, alternating sections, and a final CTA band', () => {
    expect(richContentPageSource).toContain('rich-page');
    expect(richContentPageSource).toContain('rich-page__hero-shell');
    expect(richContentPageSource).toContain('rich-page__hero-media');
    expect(richContentPageSource).toContain('rich-page__section');
    expect(richContentPageSource).toContain('rich-page__section--reverse');
    expect(richContentPageSource).toContain('rich-page__section-media');
    expect(richContentPageSource).toContain('rich-page__cta-band');
    expect(richContentPageSource).toContain('buildLocalizedPath');
  });

  it('wires the homepage route to the transplanted upper-home template structure', () => {
    expect(homePageSource).toContain('<DarkStageSection locale={locale} />');
    expect(heroSectionSource).toContain('home-hero__marquee');
    expect(heroSectionSource).toContain('home-hero__trust-row');
    expect(programmePreviewSectionSource).toContain('programme-preview__nav-card');
    expect(darkStageSectionSource).toContain('dark-stage');
  });

  it('mounts a home-only network background instead of overlaying the hero copy', () => {
    expect(homePageSource).toContain('<HomeNetworkBackground />');
    expect(homeNetworkBackgroundSource).toContain("from '@tsparticles/engine'");
    expect(homeNetworkBackgroundSource).toContain("from 'tsparticles'");
    expect(homeNetworkBackgroundSource).toContain('tsParticles.load');
    expect(homeNetworkBackgroundSource).toContain('data-home-network-bg');
    expect(heroSectionSource).not.toContain('home-hero__graph');
    expect(heroSectionSource).not.toContain('home-hero__compass');
    expect(darkStageSectionSource).not.toContain('dark-stage__graph');
    expect(darkStageSectionSource).not.toContain('dark-stage__route');
  });

  it('keeps the homepage hero source aligned with the transplanted template hero', () => {
    expect(heroSectionSource).toContain('home-hero__marquee-track');
    expect(heroSectionSource).toContain('data-home-marquee-track');
    expect(heroSectionSource).toContain('requestAnimationFrame(tickMarquee)');
    expect(heroSectionSource).toContain('let marqueeOffset = -sequenceWidth');
    expect(heroSectionSource).toContain('hero.trustItems');
    expect(heroSectionSource).toContain('hero.displayTitle');
  });

  it('defines the homepage media showcase source contract', () => {
    expect(mediaShowcaseSectionSource).toContain('data-media-showcase');
    expect(mediaShowcaseSectionSource).toContain('videoLabel');
  });

  it('frames the programme route with the redesigned editorial hero instead of the old page shell', () => {
    expect(programmePageSource).toContain('programme-page__hero-shell');
    expect(programmePageSource).toContain('programme-page__intro-panel');
    expect(programmePageSource).toContain('programme-page__hero-media');
    expect(programmePageSource).not.toContain('<main class="page-shell">');
    expect(programmePageSource).not.toContain('<section class="page-hero container">');
  });

  it('frames talk detail routes with the same redesigned visual grammar', () => {
    expect(talkDetailPageSource).toContain('talk-detail');
    expect(talkDetailPageSource).toContain('talk-detail__hero-shell');
    expect(talkDetailPageSource).toContain('talk-detail__hero-media');
    expect(talkDetailPageSource).toContain('talk-detail__speaker-grid');
    expect(talkDetailPageSource).not.toContain('<main class="page-shell">');
    expect(talkDetailPageSource).not.toContain('<section class="page-hero container talk-page">');
  });

  it('uses full-bleed home sections and page-level scroll choreography', () => {
    expect(homePageSource).toContain('data-home-parallax');
    expect(homePageSource).toContain("--section-progress");
    expect(homePageSource).not.toContain('SectionScrollNav');
    expect(whyCompassSectionSource).toContain('why-compass__band');
    expect(mediaShowcaseSectionSource).toContain('media-showcase__band');
    expect(programmePreviewSectionSource).toContain('programme-preview__nav-card');
  });

  it('adds a lower-home motion pass to speakers, media, and venue placeholders', () => {
    expect(featuredSpeakersSectionSource).toContain('data-scroll-shift');
    expect(featuredSpeakersSectionSource).toContain('featured-speakers__media-shell');
    expect(featuredSpeakersSectionSource).toContain('featured-speakers__card-media-orbit');
    expect(mediaShowcaseSectionSource).toContain('media-showcase__stage-shell');
    expect(mediaShowcaseSectionSource).toContain('media-showcase__card-media-orbit');
    expect(venuePreviewSectionSource).toContain('venue-preview__visual-shell');
    expect(venuePreviewSectionSource).toContain('venue-preview__route-line');
  });

  it('keeps the lower home aligned to the transplanted template grammar', () => {
    expect(whyCompassSectionSource).toContain('why-compass__editorial-marquee');
    expect(whyCompassSectionSource).toContain('why-compass__editorial-card');
    expect(venuePreviewSectionSource).toContain('data-venue-carousel');
    expect(venuePreviewSectionSource).toContain('venue-preview__slide');
    expect(registrationCtaSectionSource).toContain('registration-cta__media-band');
    expect(registrationCtaSectionSource).toContain('registration-cta__band-shell');
  });

  it('gates homepage reveal choreography behind explicit JS enablement', () => {
    expect(homePageSource).toContain("'IntersectionObserver' in window");
    expect(homePageSource).toContain("document.documentElement.dataset.js = 'true'");
    expect(homePageSource).toContain("if (!('IntersectionObserver' in window))");
    expect(heroSectionSource).toContain(":global(html[data-js='true']) .home-hero__top");
  });

  it('localizes Italian placeholder labels for media and venue sections', () => {
    expect(mediaShowcaseSectionSource).toContain("videoLabel");
    expect(venuePreviewSectionSource).toContain("venueVisualLabel");
  });

  it('keeps registration metadata chips exposed to assistive tech', () => {
    expect(registrationCtaSectionSource).toContain('<div class=\"registration-cta__tags\">');
    expect(registrationCtaSectionSource).not.toContain('<div class=\"registration-cta__tags\" aria-hidden=\"true\">');
  });

  it('exports the supported locales', () => {
    expect(locales).toEqual(['en', 'it']);
  });
  it('defines a zero-delay static root redirect for the default locale', () => {
    const redirect = getRootRedirect();

    expect(redirect.target).toBe('/en/');
    expect(redirect.metaRefresh).toBe('0;url=/en/');
    expect(rootIndexSource).toContain('<meta http-equiv="refresh"');
    expect(rootIndexSource).toContain('window.location.replace');
    expect(rootIndexSource).not.toContain('Astro.redirect');
  });

  it('builds expected top-level routes', () => {
    const routes = locales.flatMap((locale) => [
      buildLocalizedPath(locale),
      buildLocalizedPath(locale, 'programme'),
      buildLocalizedPath(locale, 'speakers'),
      buildLocalizedPath(locale, 'registration'),
      buildLocalizedPath(locale, 'venue'),
      buildLocalizedPath(locale, 'about'),
      buildLocalizedPath(locale, 'organizers'),
      buildLocalizedPath(locale, 'faq'),
    ]);

    expect(routes).toEqual([
      '/en/',
      '/en/programme/',
      '/en/speakers/',
      '/en/registration/',
      '/en/venue/',
      '/en/about/',
      '/en/organizers/',
      '/en/faq/',
      '/it/',
      '/it/programme/',
      '/it/speakers/',
      '/it/registration/',
      '/it/venue/',
      '/it/about/',
      '/it/organizers/',
      '/it/faq/',
    ]);
  });

  it('builds localized paths and collapses duplicate slashes', () => {
    expect(buildLocalizedPath('en', '/programme')).toBe('/en/programme/');
    expect(buildLocalizedPath('it', 'registration')).toBe('/it/registration/');
    expect(buildLocalizedPath('en', '//programme//overview/')).toBe('/en/programme/overview/');
  });

  it('localizes shared chrome labels for English and Italian shells', () => {
    expect(getChromeLabels('en')).toMatchObject({
      mainNavigation: 'Main navigation',
      languageSwitcher: 'Language switcher',
      switchLocale: {
        it: 'Switch to Italian',
      },
    });

    expect(getChromeLabels('it')).toMatchObject({
      mainNavigation: 'Navigazione principale',
      languageSwitcher: 'Selettore della lingua',
      switchLocale: {
        en: 'Passa alla versione inglese',
      },
    });
  });

  it('localizes Italian navigation labels for the shared shell', () => {
    expect(getLabels('it')).toMatchObject({
      home: 'Inizio',
      about: 'Chi siamo',
      speakers: 'Relatori',
      abstracts: 'Abstract',
      organizers: 'Organizzatori',
    });
  });

  it('localizes page metadata for both locales without shell language', () => {
    expect(getPageMetadata('en', 'home')).toEqual({
      title: 'COMPASS | COmplexity, Markets, Policy, and AI in Social Systems',
      description: 'COMPASS is a one-day academic workshop in Pisa with keynotes, panels, and interdisciplinary discussion on complexity, markets, policy, and AI.',
    });

    expect(getPageMetadata('it', 'home')).toEqual({
      title: 'COMPASS | COmplexity, Mercati, Policy e AI nei sistemi sociali',
      description: 'COMPASS e un workshop accademico di una giornata a Pisa con keynote, panel e confronto interdisciplinare su complessita, mercati, policy e AI.',
    });

    expect(getPageMetadata('it', 'about')).toEqual({
      title: 'Chi siamo | COMPASS',
      description: 'Missione del workshop COMPASS e posizionamento interdisciplinare.',
    });

    expect(getPageMetadata('en', 'venue')).toEqual({
      title: 'Venue | COMPASS',
      description: 'Travel notes, access details, and venue guidance for COMPASS attendees.',
    });

    expect(getPageMetadata('it', 'registration')).toEqual({
      title: 'Registrazione | COMPASS',
      description: 'Modalità di partecipazione e modulo di registrazione per il workshop COMPASS.',
    });

    expect(getPageMetadata('en', 'organizers')).toEqual({
      title: 'Organizers | COMPASS',
      description: 'Organizing committee overview and institutional context for COMPASS.',
    });

    expect(getPageMetadata('en', 'programme')).toEqual({
      title: 'Programme | COMPASS',
      description: 'Current COMPASS programme with opening, keynote lectures, panel sessions, breaks, and the closing social dinner.',
    });

    expect(getPageMetadata('it', 'programme')).toEqual({
      title: 'Programma | COMPASS',
      description: 'Programma attuale di COMPASS con apertura, keynote, panel, pause, pranzo e cena sociale conclusiva.',
    });
  });

  it('returns the four workshop highlights for each locale', () => {
    expect(getHomepageHighlights('en')).toHaveLength(4);
    expect(getHomepageHighlights('en')).toEqual([
      { value: 'Interdisciplinary', label: 'Bridge between AI, Economics & Law' },
      { value: '3', label: 'International Keynote Lectures' },
      { value: '6', label: 'Doctoral Organizers and Chairs' },
      { value: 'Pisa Hub', label: 'SSSA, UniPi & CNR Network' },
    ]);

    expect(getHomepageHighlights('it')).toEqual([
      { value: 'Interdisciplinare', label: 'IA, Economia e Diritto' },
      { value: '3', label: 'Keynote Lecture Internazionali' },
      { value: '6', label: 'Dottorandi Organizzatori e Chair' },
      { value: 'Pisa Hub', label: 'Rete SSSA, UniPi e CNR' },
    ]);
  });

  it('returns public-facing homepage copy without planning-language placeholders', () => {
    const english = getHomepageContent('en');
    const italian = getHomepageContent('it');

    expect(english.programme.note).not.toMatch(/task|scope/i);
    expect(english.speakers.note).not.toMatch(/task|scope/i);
    expect(english.whyCompass.asideBody).not.toMatch(/shell/i);
    expect(italian.programme.note).not.toMatch(/task|scope/i);
    expect(italian.speakers.note).not.toMatch(/task|scope/i);
    expect(italian.whyCompass.asideBody).not.toMatch(/shell/i);
  });

  it('returns cloned homepage content', () => {
    const first = getHomepageContent('en');
    first.highlights.push({ value: '99', label: 'Mutated highlight' });
    first.scrollSections.push({ id: 'mutated', label: 'Mutated section' });
    first.mediaShowcase.items[0].title = 'Mutated media title';
    first.whyCompass.pillars[0].title = 'Mutated pillar title';

    const second = getHomepageContent('en');

    expect(second.highlights).not.toContainEqual({ value: '99', label: 'Mutated highlight' });
    expect(second.scrollSections).not.toContainEqual({ id: 'mutated', label: 'Mutated section' });
    expect(second.mediaShowcase.items[0].title).not.toBe('Mutated media title');
    expect(second.whyCompass.pillars[0].title).not.toBe('Mutated pillar title');
  });

  it('returns localized homepage media showcase copy', () => {
    const english = getHomepageContent('en').mediaShowcase;
    const italian = getHomepageContent('it').mediaShowcase;

    expect(english).toMatchObject({
      eyebrow: 'Media showcase',
      videoLabel: 'Workshop overview',
    });
    expect(italian).toMatchObject({
      eyebrow: 'Rassegna media',
      videoLabel: 'Panoramica del workshop',
    });
    expect(english.items).toHaveLength(3);
    expect(italian.items).toHaveLength(3);
    expect(english.items[0]).toMatchObject({
      mediaLabel: 'Aula 3 Campus',
    });
    expect(italian.items[1]).toMatchObject({
      mediaLabel: 'Sessioni Workshop',
    });
    expect(english.title).toMatch(/workshop day/i);
    expect(italian.intro).toMatch(/incontro/i);
  });

  it('returns compact programme page copy with details outside the schedule flow', () => {
    const english = getProgrammePageContent('en');
    const italian = getProgrammePageContent('it');

    expect(english).toMatchObject({
      title: expect.stringContaining('programme'),
      sectionLabel: 'Details outside the timeline',
      compactTalkLabel: 'Compact talk notes',
      detailNote: expect.stringContaining('workshop framing'),
    });
    expect(italian).toMatchObject({
      title: expect.stringContaining('programma'),
      sectionLabel: 'Dettagli fuori dalla timeline',
      compactTalkLabel: 'Note compatte sui talk',
      detailNote: expect.stringContaining('framing del workshop'),
    });
    expect(english.intro).toMatch(/timeline/i);
    expect(italian.intro).toMatch(/timeline|agenda/i);
    expect(english.cards).toHaveLength(3);
    expect(italian.cards).toHaveLength(3);
    expect(english.cards[0]).toMatch(/keynote|opening/i);
    expect(italian.cards[2]).toMatch(/cena sociale|supporto/i);
  });

  it('keeps the published programme page copy aligned with the workshop schedule language', () => {
    expect(programmePageSource).not.toMatch(/seeded agenda|agenda seed/i);
    expect(programmePageSource).toMatch(/comprehensive one-day schedule|agenda completa/i);
  });

  it('returns rich placeholder-backed secondary page sections without future-state shell copy', () => {
    const about = getRichPageContent('en', 'about');
    const speakers = getRichPageContent('en', 'speakers');
    const venue = getRichPageContent('it', 'venue');
    const faq = getRichPageContent('it', 'faq');
    const registration = getRichPageContent('en', 'registration');
    const organizers = getRichPageContent('en', 'organizers');

    expect(about.hero).toMatchObject({
      eyebrow: 'About COMPASS',
      mediaType: 'landscape',
    });
    expect(speakers.hero.mediaType).toBe('speaker-network');
    expect(venue.hero.mediaType).toBe('video');
    expect(about.sections).toHaveLength(3);
    expect(about.sections[0]).toMatchObject({
      eyebrow: 'Mission',
      mediaLabel: 'Mission and Vision',
      mediaType: 'info-panel',
    });
    expect(about.sections[0].bullets).toHaveLength(2);
    expect(about.ctaLabel).toBe('Read the programme');
    expect(about.sections[1]?.body).not.toMatch(/will eventually|reserved/i);
    expect(speakers.hero.intro).not.toMatch(/working page/i);
    // Speakers page doesn't use sections anymore in the rich content sense
    expect(registration.hero.intro).not.toMatch(/will bridge/i);
    expect(organizers.hero.intro).not.toMatch(/will hold/i);
    expect(faq.hero).toMatchObject({
      eyebrow: 'FAQ',
      mediaLabel: 'Panoramica FAQ',
      mediaType: 'landscape',
    });
    expect(faq.sections).toHaveLength(3);
    expect(faq.sections[1]).toMatchObject({
      eyebrow: 'Logistica',
      title: 'Sede e Accessibilità',
      mediaType: 'landscape',
    });
    expect(faq.sections[1]?.body).not.toMatch(/riservat/i);
    expect(venue.sections[2]?.body).not.toMatch(/riservat/i);
    expect(faq.sections[1].bullets).toContain('Sede: Aula 3, Scuola Superiore Sant’Anna (Campus principale).');
    expect(venue.sections.some((section) => section.mediaType === 'landscape')).toBe(true);
  });

  it('returns cloned programme page content', () => {
    const first = getProgrammePageContent('en');
    first.cards.push('Mutated card');

    const second = getProgrammePageContent('en');

    expect(second.cards).not.toContain('Mutated card');
  });

  it('returns cloned rich page content', () => {
    const first = getRichPageContent('en', 'about');
    first.hero.title = 'Mutated hero title';
    first.sections[0].title = 'Mutated section title';
    first.sections[0].bullets?.push('Mutated bullet');

    const second = getRichPageContent('en', 'about');

    expect(second.hero.title).not.toBe('Mutated hero title');
    expect(second.sections[0].title).not.toBe('Mutated section title');
    expect(second.sections[0].bullets).not.toContain('Mutated bullet');
  });

  it('returns curated programme preview entries with localized chair labels', () => {
    const english = getHomepageProgrammePreview('en');
    const italian = getHomepageProgrammePreview('it');

    expect(english.map((session) => session.slug)).toEqual([
      'opening-remarks',
      'keynote-1',
      'panel-1-ai-methods',
      'keynote-2',
      'keynote-legal',
      'panel-2-legal-ethics',
      'panel-3-complexity',
      'social-dinner',
    ]);
    expect(english[2]).toMatchObject({
      title: 'Panel 1: AI for Modeling and Forecasting',
      chairLabel: 'Session chairs',
      chairNames: ['Alice Musso', 'Biancamaria Bombino'],
    });
    expect(italian[2]).toMatchObject({
      title: 'Panel 1: AI per la modellazione e la previsione',
    });
    expect(italian[5]).toMatchObject({
      chairLabel: 'Coordinamento',
      title: 'Panel 2: AI for Legal e Legal for AI Ethics',
    });
    expect(italian[6]).toMatchObject({
      chairLabel: 'Coordinamento',
      title: 'Panel 3: AI per la complessità e i sistemi economici',
    });
    expect(english[4]).toMatchObject({
      title: 'Keynote 3',
    });
  });

  it('returns curated featured speakers with localized homepage role labels', () => {
    const english = getHomepageFeaturedSpeakers('en');
    const italian = getHomepageFeaturedSpeakers('it');

    expect(english.map((speaker) => speaker.slug)).toEqual([
      'guido-germano',
      'prabhani-don',
      'federica-casarosa',
    ]);
    expect(english[0]?.role).toBe('Keynote speaker');
    expect(italian[0]?.role).toBe('Relatore keynote');
    expect(english[1]?.role).toBe('Keynote speaker');
    expect(italian[1]?.role).toBe('Relatrice keynote');
    expect(english[2]?.role).toBe('Keynote speaker');
    expect(italian[2]?.role).toBe('Relatrice keynote');
  });

  it('keeps localized homepage scroll section labels available for future reuse', () => {
    expect(getHomepageScrollSections('it')).toEqual([
      { id: 'dark-stage', label: 'Temi' },
      { id: 'programme-preview', label: 'Programma' },
      { id: 'featured-speakers', label: 'Relatori' },
      { id: 'why-compass', label: 'Visione' },
      { id: 'venue-preview', label: 'Sede' },
      { id: 'registration-cta', label: 'Registrati' },
    ]);
  });

  it('links speakers to talks through shared slugs', () => {
    const speaker = getSpeakerBySlug('guido-germano');
    expect(speaker?.name).toBe('Guido Germano');

    const talks = getTalksBySpeaker('guido-germano');
    expect(talks.map((talk) => talk.slug)).toContain('keynote-guido-germano');
  });

  it('returns programme sessions sorted by start time', () => {
    expect(getProgrammeSessions().map((session) => ({
      slug: session.slug,
      startsAt: session.startsAt,
      endsAt: session.endsAt,
    }))).toEqual([
      {
        slug: 'opening-remarks',
        startsAt: '2026-05-18T09:30:00+02:00',
        endsAt: '2026-05-18T09:45:00+02:00',
      },
      {
        slug: 'keynote-1',
        startsAt: '2026-05-18T09:45:00+02:00',
        endsAt: '2026-05-18T10:30:00+02:00',
      },
      {
        slug: 'coffee-break-1',
        startsAt: '2026-05-18T10:30:00+02:00',
        endsAt: '2026-05-18T11:00:00+02:00',
      },
      {
        slug: 'panel-1-ai-methods',
        startsAt: '2026-05-18T11:00:00+02:00',
        endsAt: '2026-05-18T12:00:00+02:00',
      },
      {
        slug: 'keynote-2',
        startsAt: '2026-05-18T12:00:00+02:00',
        endsAt: '2026-05-18T12:45:00+02:00',
      },
      {
        slug: 'networking-lunch',
        startsAt: '2026-05-18T12:45:00+02:00',
        endsAt: '2026-05-18T13:45:00+02:00',
      },
      {
        slug: 'keynote-legal',
        startsAt: '2026-05-18T13:45:00+02:00',
        endsAt: '2026-05-18T14:30:00+02:00',
      },
      {
        slug: 'panel-2-legal-ethics',
        startsAt: '2026-05-18T14:30:00+02:00',
        endsAt: '2026-05-18T15:30:00+02:00',
      },
      {
        slug: 'coffee-break-2',
        startsAt: '2026-05-18T15:30:00+02:00',
        endsAt: '2026-05-18T16:00:00+02:00',
      },
      {
        slug: 'panel-3-complexity',
        startsAt: '2026-05-18T16:00:00+02:00',
        endsAt: '2026-05-18T17:15:00+02:00',
      },
      {
        slug: 'closing-remarks',
        startsAt: '2026-05-18T17:15:00+02:00',
        endsAt: '2026-05-18T17:45:00+02:00',
      },
      {
        slug: 'social-dinner',
        startsAt: '2026-05-18T20:00:00+02:00',
        endsAt: '2026-05-18T22:30:00+02:00',
      },
    ]);
  });

  it('returns the current lineups for the three thematic panels', () => {
    expect(getTalksForSession('panel-1-ai-methods').map((talk) => talk.title.en)).toEqual([
      'Alice Musso',
      'How online environments shape public debate',
      'RAwR: Role-Aware Rewiring via Approximate Equitable Partition',
      'Model Readability and Explanatory Alignment',
      'Roundtable',
    ]);
    expect(getTalksForSession('panel-2-legal-ethics').map((talk) => talk.title.en)).toEqual([
      'From Risk to Protection: Vulnerability as a Benchmark for European AI Governance',
      'Regulation vs Innovation? Unpacking the dichotomy to foster responsible research',
      'Significant Harm in EU Law: When Voice-Based Virtual Assistants Are Prohibited',
      'Acting without action: Ethics and responsibility in AI systems (online)',
      'Roundtable',
    ]);
    expect(getTalksForSession('panel-3-complexity').map((talk) => talk.title.en)).toEqual([
      'The hidden structure of innovation networks',
      'Network Topology and Machine Learning for Systemic Risk: From Early Warning to Trading Strategies',
      'Giuseppe Squillace (online)',
      'Unveiling Signed Complexity: A Statistically Validated Bipartite Projection',
      'Roundtable',
    ]);
  });

  it('retrieves talks by slug for detail routes', () => {
    expect(getTalkBySlug('keynote-guido-germano')?.sessionSlug).toBe('keynote-2');
    expect(getTalkBySlug('missing-talk')).toBeUndefined();
  });

  it('keeps the published programme aligned with the current workshop agenda', () => {
    expect(sessions).toHaveLength(12);
    expect(speakers).toHaveLength(19);
    expect(talks).toHaveLength(20);

    expect(sessions.map((session) => session.slug)).toEqual([
      'opening-remarks',
      'keynote-1',
      'coffee-break-1',
      'panel-1-ai-methods',
      'keynote-2',
      'networking-lunch',
      'keynote-legal',
      'panel-2-legal-ethics',
      'coffee-break-2',
      'panel-3-complexity',
      'closing-remarks',
      'social-dinner',
    ]);

    expect(speakers.map((speaker) => speaker.slug)).toEqual(expect.arrayContaining([
      'andrea-vandin',
      'guido-germano',
      'prabhani-don',
      'stefano-blando',
      'biancamaria-bombino',
      'lorenzo-emer',
      'alice-musso',
      'roberta-romano',
      'roberta-savella',
      'simone-tonini',
      'corentin-lobet',
      'riccardo-porcedda',
      'giuseppe-f-squillace',
      'anna-gallo',
      'vittoria-caponecchia',
      'elio-grande',
      'francesca-chiaromonte',
      'salvatore-ruggieri',
      'federica-casarosa',
    ]));
    expect(speakers.map((speaker) => speaker.slug)).not.toContain('rettore-sssa');
    expect(speakers.map((speaker) => speaker.slug)).not.toContain('pagopa-speaker');
  });

  it('aligns speaker contribution metadata with the seeded talk sessions', () => {
    for (const talk of talks) {
      const session = getProgrammeSessions().find((candidate) => candidate.slug === talk.sessionSlug);
      expect(session, `missing session for ${talk.slug}`).toBeDefined();

      if (!session || !['panel', 'keynote', 'opening'].includes(session.type)) {
        continue;
      }

      for (const speakerSlug of talk.speakerSlugs) {
        const speaker = getSpeakerBySlug(speakerSlug);
        expect(speaker, `missing talk speaker: ${speakerSlug}`).toBeDefined();
        if (session.type === 'panel') {
          expect(speaker?.type).toContain('panelist');
          expect(speaker?.roleLabel.en.toLowerCase()).toMatch(/panel|track/);
        }

        if (session.type === 'keynote') {
          expect(speaker?.type).toContain('keynote');
          expect(speaker?.roleLabel.en.toLowerCase()).toContain('keynote');
        }
      }
    }
  });

  it('keeps seeded speaker, chair, and talk relations resolvable', () => {
    const orderedSessions = getProgrammeSessions();

    for (const session of orderedSessions) {
      for (const chairSlug of session.chairSlugs) {
        expect(getSpeakerBySlug(chairSlug), `missing chair speaker: ${chairSlug}`).toBeDefined();
      }
    }

    for (const talk of talks) {
      for (const speakerSlug of talk.speakerSlugs) {
        expect(getSpeakerBySlug(speakerSlug), `missing talk speaker for ${talk.slug}: ${speakerSlug}`).toBeDefined();
      }
      const session = orderedSessions.find((candidate) => candidate.slug === talk.sessionSlug);
      expect(session, `missing session for ${talk.slug}`).toBeDefined();
      expect(getTalksForSession(talk.sessionSlug)).toContain(talk);
      expect(session && talk.startsAt).toBeTruthy();
      if (session && talk.startsAt) {
        expect(talk.startsAt >= session.startsAt && talk.startsAt < session.endsAt).toBe(true);
      }
    }
  });

  it('keeps the full programme on the definitive 18 May 2026 workshop date', () => {
    expect(getProgrammeSessions().every((session) => session.startsAt.startsWith('2026-05-18'))).toBe(true);
    expect(talks.every((talk) => !talk.startsAt || talk.startsAt.startsWith('2026-05-18'))).toBe(true);
  });

  it('wires the homepage route to redesigned home sections', () => {
    expect(homePageSource).toContain('MediaShowcaseSection');
    expect(homePageSource).toContain('HeroSection');
  });
});

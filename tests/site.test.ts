import { describe, expect, it } from 'vitest';
import homePageSource from '../src/pages/[lang]/index.astro?raw';
import programmePageSource from '../src/pages/[lang]/programme/index.astro?raw';
import heroSectionSource from '../src/components/home/HeroSection.astro?raw';
import mediaShowcaseSectionSource from '../src/components/home/MediaShowcaseSection.astro?raw';
import venuePreviewSectionSource from '../src/components/home/VenuePreviewSection.astro?raw';
import registrationCtaSectionSource from '../src/components/home/RegistrationCtaSection.astro?raw';
import scrollNavSource from '../src/components/SectionScrollNav.vue?raw';
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

  it('keeps the homepage hero source aligned with media-led placeholders', () => {
    expect(heroSectionSource).toContain('data-home-hero-media');
    expect(heroSectionSource).toContain('hero.mediaPrimaryLabel');
  });

  it('defines the homepage media showcase source contract', () => {
    expect(mediaShowcaseSectionSource).toContain('data-media-showcase');
    expect(mediaShowcaseSectionSource).toContain('videoLabel');
  });

  it('gates homepage reveal choreography behind explicit JS enablement', () => {
    expect(homePageSource).toContain("'IntersectionObserver' in window");
    expect(homePageSource).toContain("document.documentElement.dataset.js = 'true'");
    expect(homePageSource).toContain("if (!('IntersectionObserver' in window))");
    expect(heroSectionSource).toContain(":global(html[data-js='true']) .home-hero__content");
  });

  it('localizes Italian placeholder labels for media and venue sections', () => {
    expect(mediaShowcaseSectionSource).toContain("locale === 'it' ? 'Video segnaposto' : 'Video placeholder'");
    expect(mediaShowcaseSectionSource).toContain("locale === 'it' ? 'Frame della galleria' : 'Gallery frame'");
    expect(venuePreviewSectionSource).toContain("locale === 'it' ? 'Visual della sede Sant’Anna' : 'Sant’Anna venue visual'");
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

    expect(redirect.target).toBe('./en/');
    expect(redirect.metaRefresh).toBe('0;url=./en/');
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
      organizers: 'Organizzatori',
    });
  });

  it('localizes shell page metadata for both locales', () => {
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
      { value: '12', label: 'Scheduled programme blocks' },
      { value: '3', label: 'Keynote lecture slots' },
      { value: '6', label: 'Doctoral organizers and chairs' },
      { value: '15', label: 'Named contributors in the current draft' },
    ]);
    expect(getHomepageHighlights('it')).toEqual([
      { value: '12', label: 'Blocchi in programma' },
      { value: '3', label: 'Slot keynote' },
      { value: '6', label: 'Dottorandi organizzatori e chair' },
      { value: '15', label: 'Contributori nominati nella bozza attuale' },
    ]);
  });

  it('returns public-facing homepage copy without planning-language placeholders', () => {
    const english = getHomepageContent('en');
    const italian = getHomepageContent('it');

    expect(english.programme.note).not.toMatch(/task|scope/i);
    expect(english.speakers.note).not.toMatch(/task|scope/i);
    expect(italian.programme.note).not.toMatch(/task|scope/i);
    expect(italian.speakers.note).not.toMatch(/task|scope/i);
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
      videoLabel: 'Workshop highlight video',
    });
    expect(italian).toMatchObject({
      eyebrow: 'Rassegna media',
      videoLabel: 'Video highlight del workshop',
    });
    expect(english.items).toHaveLength(3);
    expect(italian.items).toHaveLength(3);
    expect(english.items[0]).toMatchObject({
      mediaLabel: 'Venue still',
    });
    expect(italian.items[1]).toMatchObject({
      mediaLabel: 'Immagine del programma',
    });
    expect(english.title).toMatch(/workshop day/i);
    expect(italian.intro).toMatch(/redesign/i);
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

  it('keeps the published programme page copy aligned with the working agenda language', () => {
    expect(programmePageSource).not.toMatch(/seeded agenda|agenda seed/i);
    expect(programmePageSource).toMatch(/working agenda|agenda in lavorazione|current agenda/i);
  });

  it('returns rich placeholder-backed secondary page sections', () => {
    const about = getRichPageContent('en', 'about');
    const speakers = getRichPageContent('en', 'speakers');
    const venue = getRichPageContent('it', 'venue');
    const faq = getRichPageContent('it', 'faq');

    expect(about.hero).toMatchObject({
      eyebrow: 'About COMPASS',
      mediaType: 'video',
    });
    expect(speakers.hero.mediaType).toBe('portrait-grid');
    expect(venue.hero.mediaType).toBe('landscape');
    expect(about.sections).toHaveLength(3);
    expect(about.sections[0]).toMatchObject({
      eyebrow: 'Mission',
      mediaLabel: 'Mission placeholder',
      mediaType: 'info-panel',
    });
    expect(about.sections[0].bullets).toHaveLength(2);
    expect(about.ctaLabel).toBe('Read the programme');
    expect(faq.hero).toMatchObject({
      eyebrow: 'FAQ',
      mediaLabel: 'Segnaposto hero FAQ',
      mediaType: 'video',
    });
    expect(faq.sections).toHaveLength(3);
    expect(faq.sections[1]).toMatchObject({
      eyebrow: 'Logistica',
      title: 'Cosa resta da confermare per i partecipanti',
      mediaType: 'landscape',
    });
    expect(faq.sections[1].bullets).toContain('Viaggio e spostamenti locali a Pisa.');
    expect(venue.sections.some((section) => section.mediaType === 'video')).toBe(true);
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
      'panel-2-networks-nlp',
      'keynote-3-tbc',
      'panel-3-legal-ethics',
    ]);
    expect(english[2]).toMatchObject({
      chairLabel: 'Session chairs',
      chairNames: ['Stefano Blando', 'Bianca Bombino'],
    });
    expect(italian[4]).toMatchObject({
      chairLabel: 'Coordinamento',
      title: 'Panel 2: Networks e NLP',
    });
    expect(english[5]).toMatchObject({
      title: 'Keynote 3',
      featuredTalkTitle: 'Senior Expert on AI Regulation & Ethics (TBC)',
    });
  });

  it('returns curated featured speakers with localized homepage role labels', () => {
    const english = getHomepageFeaturedSpeakers('en');
    const italian = getHomepageFeaturedSpeakers('it');

    expect(english.map((speaker) => speaker.slug)).toEqual([
      'guido-germano',
      'prabhani-don',
      'senior-expert-ai-regulation-tbc',
      'stefano-blando',
      'biancamaria-bombino',
      'lorenzo-emer',
      'alice-musso',
      'roberta-romano',
      'roberta-savella',
    ]);
    expect(english[0]?.role).toBe('Keynote speaker');
    expect(italian[0]?.role).toBe('Relatore keynote');
    expect(english[1]?.role).toBe('Confirmed keynote speaker');
    expect(italian[1]?.role).toBe('Relatrice keynote confermata');
    expect(english[2]?.role).toBe('Keynote slot in confirmation');
    expect(italian[2]?.role).toBe('Slot keynote in conferma');
    expect(italian[3]?.role).toBe('Relatore e co-chair della Track 1');
    expect(italian[4]?.role).toBe('Relatrice e co-chair della Track 1');
    expect(italian[8]?.role).toBe('Relatrice e co-chair della Track 3');
  });

  it('localizes homepage scroll sections for the floating navigation', () => {
    expect(getHomepageScrollSections('it')).toEqual([
      { id: 'why-compass', label: 'Visione' },
      { id: 'programme-preview', label: 'Programma' },
      { id: 'featured-speakers', label: 'Relatori' },
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
        endsAt: '2026-05-18T12:30:00+02:00',
      },
      {
        slug: 'networking-lunch',
        startsAt: '2026-05-18T12:30:00+02:00',
        endsAt: '2026-05-18T13:45:00+02:00',
      },
      {
        slug: 'keynote-2',
        startsAt: '2026-05-18T13:45:00+02:00',
        endsAt: '2026-05-18T14:30:00+02:00',
      },
      {
        slug: 'panel-2-networks-nlp',
        startsAt: '2026-05-18T14:30:00+02:00',
        endsAt: '2026-05-18T16:00:00+02:00',
      },
      {
        slug: 'coffee-break-2',
        startsAt: '2026-05-18T16:00:00+02:00',
        endsAt: '2026-05-18T16:15:00+02:00',
      },
      {
        slug: 'keynote-3-tbc',
        startsAt: '2026-05-18T16:15:00+02:00',
        endsAt: '2026-05-18T17:00:00+02:00',
      },
      {
        slug: 'panel-3-legal-ethics',
        startsAt: '2026-05-18T17:00:00+02:00',
        endsAt: '2026-05-18T18:30:00+02:00',
      },
      {
        slug: 'closing-remarks',
        startsAt: '2026-05-18T18:30:00+02:00',
        endsAt: '2026-05-18T18:40:00+02:00',
      },
    ]);
  });

  it('returns the screenshot lineups for the three thematic panels including unresolved placeholders', () => {
    expect(getTalksForSession('panel-1-ai-methods').map((talk) => talk.title.en)).toEqual([
      'Stefano Blando',
      'Bianca Bombino',
      'Simone Tonini',
      'Speaker (TBD)',
      'Speaker (TBD)',
      'Roundtable',
    ]);
    expect(getTalksForSession('panel-2-networks-nlp').map((talk) => talk.title.en)).toEqual([
      'Lorenzo Emer',
      'Alice Musso',
      'Riccardo Porcedda',
      'Giuseppe Squillace',
      'Anna Gallo',
      'Roundtable',
    ]);
    expect(getTalksForSession('panel-3-legal-ethics').map((talk) => talk.title.en)).toEqual([
      'Roberta Romano',
      'Roberta Savella',
      'Vittoria Caponecchia',
      'Elio Grande',
      'Speaker (TBD)',
      'Roundtable',
    ]);
  });

  it('retrieves talks by slug for detail routes', () => {
    expect(getTalkBySlug('keynote-guido-germano')?.sessionSlug).toBe('keynote-1');
    expect(getTalkBySlug('missing-talk')).toBeUndefined();
  });

  it('keeps the published programme aligned with the current workshop agenda', () => {
    expect(sessions).toHaveLength(11);
    expect(speakers).toHaveLength(20);
    expect(talks).toHaveLength(23);

    expect(sessions.map((session) => session.slug)).toEqual([
      'opening-remarks',
      'keynote-1',
      'coffee-break-1',
      'panel-1-ai-methods',
      'networking-lunch',
      'keynote-2',
      'panel-2-networks-nlp',
      'coffee-break-2',
      'keynote-3-tbc',
      'panel-3-legal-ethics',
      'closing-remarks',
    ]);

    expect(speakers.map((speaker) => speaker.slug)).toEqual(expect.arrayContaining([
      'andrea-vandin',
      'guido-germano',
      'prabhani-don',
      'senior-expert-ai-regulation-tbc',
      'stefano-blando',
      'biancamaria-bombino',
      'lorenzo-emer',
      'alice-musso',
      'roberta-romano',
      'roberta-savella',
      'simone-tonini',
      'riccardo-porcedda',
      'giuseppe-f-squillace',
      'anna-gallo',
      'vittoria-caponecchia',
      'elio-grande',
      'francesca-chiaromonte',
      'speaker-tbd-panel-1-a',
      'speaker-tbd-panel-1-b',
      'speaker-tbd-panel-3-a',
    ]));
    expect(speakers.map((speaker) => speaker.slug)).not.toContain('benedetta-tessa');
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

  it('keeps the floating scroll nav unfocusable while hidden', () => {
    expect(scrollNavSource).toContain(':inert="!isVisible"');
    expect(scrollNavSource).toContain(":tabindex=\"isVisible ? null : -1\"");
  });

  it('wires the homepage route to redesigned home sections', () => {
    expect(homePageSource).toContain('MediaShowcaseSection');
    expect(homePageSource).toContain('HeroSection');
  });
});

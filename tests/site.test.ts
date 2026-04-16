import { describe, expect, it } from 'vitest';
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
  getProgrammeSessions,
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
      'social-dinner',
    ]);
    expect(english[2]).toMatchObject({
      chairLabel: 'Session chairs',
      chairNames: ['Stefano Blando', 'Biancamaria Bombino'],
    });
    expect(italian[4]).toMatchObject({
      chairLabel: 'Coordinamento',
      title: 'Panel 2: Networks e NLP',
    });
    expect(english[5]).toMatchObject({
      title: 'Keynote 3',
      featuredTalkTitle: 'Keynote lecture on AI regulation and ethics (TBC)',
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
    const sessions = getProgrammeSessions();
    expect(sessions[0]?.slug).toBe('opening-remarks');
    expect(sessions.at(-1)?.slug).toBe('social-dinner');
  });

  it('returns talks for the three thematic panels', () => {
    expect(getTalksForSession('panel-1-ai-methods')).toHaveLength(3);
    expect(getTalksForSession('panel-2-networks-nlp')).toHaveLength(5);
    expect(getTalksForSession('panel-3-legal-ethics')).toHaveLength(4);
  });

  it('retrieves talks by slug for detail routes', () => {
    expect(getTalkBySlug('keynote-guido-germano')?.sessionSlug).toBe('keynote-1');
    expect(getTalkBySlug('missing-talk')).toBeUndefined();
  });

  it('keeps the seeded content aligned with the current workshop document', () => {
    expect(sessions).toHaveLength(12);
    expect(speakers).toHaveLength(16);
    expect(talks).toHaveLength(16);

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
      'social-dinner',
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
      'benedetta-tessa',
    ]));
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
          expect(speaker?.roleLabel.en.toLowerCase()).toContain('track');
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

  it('keeps the floating scroll nav unfocusable while hidden', () => {
    expect(scrollNavSource).toContain(':inert="!isVisible"');
    expect(scrollNavSource).toContain(":tabindex=\"isVisible ? null : -1\"");
  });
});

import {
  chromeLabels,
  defaultLocale,
  locales as supportedLocales,
  navLabels,
  pageMetadata,
  siteConfig,
  siteIdentity,
  type SitePageKey,
} from '../data/site';
import { sessions } from '../data/sessions';
import { speakers } from '../data/speakers';
import { talks } from '../data/talks';
import type { Locale } from '../data/types';

export const locales = supportedLocales;

type HomepageHeroContent = {
  eyebrow: string;
  title: string;
  copy: string;
  supportingNote: string;
  panelLabel: string;
  panelItems: string[];
};

type HomepageWhyCompassContent = {
  eyebrow: string;
  title: string;
  intro: string;
  pillars: Array<{
    title: string;
    body: string;
  }>;
  asideTitle: string;
  asideBody: string;
  asidePoints: string[];
};

type HomepageHighlight = {
  value: string;
  label: string;
};

type HomepageProgrammeContent = {
  eyebrow: string;
  title: string;
  intro: string;
  note: string;
  sessionLabel: string;
  talkLabel: string;
};

type HomepageSpeakersContent = {
  eyebrow: string;
  title: string;
  intro: string;
  note: string;
  emptyTalkLabel: string;
};

type HomepageVenueContent = {
  eyebrow: string;
  title: string;
  intro: string;
  facts: string[];
  travelTitle: string;
  travelBody: string;
};

type HomepageRegistrationContent = {
  eyebrow: string;
  title: string;
  intro: string;
  deadlineLabel: string;
  deadlineValue: string;
  checklist: string[];
  secondaryCta: string;
};

type HomepageScrollSection = {
  id: string;
  label: string;
};

type HomepageProgrammeSelection = {
  sessionSlug: string;
};

type HomepageFeaturedSpeakerSelection = {
  speakerSlug: string;
  roleLabel: Record<Locale, string>;
};

type HomepageContent = {
  hero: HomepageHeroContent;
  whyCompass: HomepageWhyCompassContent;
  highlights: HomepageHighlight[];
  programme: HomepageProgrammeContent;
  speakers: HomepageSpeakersContent;
  venue: HomepageVenueContent;
  registration: HomepageRegistrationContent;
  scrollSections: HomepageScrollSection[];
};

const homepageContent = {
  en: {
    hero: {
      eyebrow: 'COMPASS 2026',
      title: 'Complexity, markets, policy, and AI in one academic workshop.',
      copy:
        'An interdisciplinary workshop bringing economists, computational social scientists, complexity researchers, and AI scholars into one shared conversation.',
      supportingNote: 'A one-day bilingual format with keynotes, panels, invited discussants, and a closing dinner in Pisa.',
      panelLabel: 'Workshop Snapshot',
      panelItems: [
        siteConfig.eventDate,
        siteConfig.venue,
        'Three keynote moments, thematic panels, and an interdisciplinary closing session.',
      ],
    },
    whyCompass: {
      eyebrow: 'Why COMPASS',
      title: 'Built for rigorous exchange instead of conference noise.',
      intro:
        'COMPASS is framed as a working academic environment: compact, cross-disciplinary, and oriented toward methods, evidence, and policy relevance.',
      pillars: [
        {
          title: 'Interdisciplinary by design',
          body: 'Economics, complexity science, AI, and policy analysis share one programme rather than parallel tracks.',
        },
        {
          title: 'Focused scientific agenda',
          body: 'Each block is designed to move from keynote framing to panel discussion and concrete methodological debate.',
        },
        {
          title: 'Small enough to work',
          body: 'The format keeps room for genuine discussion, speaker access, and follow-up collaboration.',
        },
      ],
      asideTitle: 'What the day is optimized for',
      asideBody:
        'The homepage sets expectations for the workshop tone before detail pages take over the full programme and speaker materials.',
      asidePoints: [
        'Shared vocabulary across disciplines',
        'Methods and policy implications in the same room',
        'Discussion-first pacing with a clear start-to-finish arc',
      ],
    },
    highlights: [
      { value: '3', label: 'International keynotes' },
      { value: '3', label: 'Thematic panels' },
      { value: '1', label: 'Interdisciplinary day' },
      { value: '1', label: 'Closing social dinner' },
    ],
    programme: {
      eyebrow: 'Programme Preview',
      title: 'A single-day arc with room for depth.',
      intro:
        'The workshop keeps the original template’s rhythm, but the content is now organized around opening framing, AI methods discussion, and a closing social moment.',
      note: 'The full schedule, abstracts, and session detail will continue to expand on the dedicated programme page as workshop materials are finalized.',
      sessionLabel: 'Session',
      talkLabel: 'Featured talk',
    },
    speakers: {
      eyebrow: 'Featured Speakers',
      title: 'Researchers and chairs shaping the first COMPASS edition.',
      intro:
        'The landing page highlights invited voices and session leadership without expanding yet into full speaker biographies or detail pages.',
      note: 'Speaker profiles and contribution details will continue to grow as invited participation is confirmed.',
      emptyTalkLabel: 'Workshop contribution to be announced',
    },
    venue: {
      eyebrow: 'Venue Preview',
      title: 'Hosted at Scuola Superiore Sant’Anna in Pisa.',
      intro:
        'The workshop setting is academic and compact, keeping attendees close to the sessions, informal discussion, and the final social dinner.',
      facts: [
        'Historic campus setting in central Pisa',
        'Easy walk between plenary space, coffee breaks, and discussion areas',
        'Travel guidance and detailed logistics live on the dedicated venue page',
      ],
      travelTitle: 'Travel note',
      travelBody: 'Pisa Centrale and Galileo Galilei Airport provide the simplest arrival routes for most attendees.',
    },
    registration: {
      eyebrow: 'Registration',
      title: 'Apply early and plan around the workshop schedule.',
      intro:
        'Registration remains a lightweight handoff to the dedicated page and external form, while the homepage explains what prospective attendees should expect.',
      deadlineLabel: 'Indicative deadline',
      deadlineValue: 'Before 1 May 2026',
      checklist: [
        'Review the workshop framing and programme preview',
        'Confirm travel feasibility for Pisa',
        'Complete the registration form through the dedicated page',
      ],
      secondaryCta: 'Open external registration form',
    },
    scrollSections: [
      { id: 'why-compass', label: 'About' },
      { id: 'programme-preview', label: 'Programme' },
      { id: 'featured-speakers', label: 'Speakers' },
      { id: 'venue-preview', label: 'Venue' },
      { id: 'registration-cta', label: 'Register' },
    ],
  },
  it: {
    hero: {
      eyebrow: 'COMPASS 2026',
      title: 'Complessità, mercati, policy e AI in un unico workshop accademico.',
      copy:
        'Un workshop interdisciplinare che riunisce economisti, studiosi di social science computazionale, ricercatori della complessità e studiosi di AI in una conversazione comune.',
      supportingNote:
        'Un formato bilingue di una giornata con keynote, panel, discussant invitati e cena sociale finale a Pisa.',
      panelLabel: 'Sintesi Del Workshop',
      panelItems: [
        siteConfig.eventDate,
        siteConfig.venue,
        'Tre momenti keynote, panel tematici e una chiusura interdisciplinare della giornata.',
      ],
    },
    whyCompass: {
      eyebrow: 'Perché COMPASS',
      title: 'Progettato per il confronto rigoroso, non per il rumore da conferenza.',
      intro:
        'COMPASS è pensato come ambiente accademico di lavoro: compatto, interdisciplinare e orientato a metodi, evidenza empirica e rilevanza per le policy.',
      pillars: [
        {
          title: 'Interdisciplinare per costruzione',
          body: 'Economia, scienza della complessità, AI e policy analysis condividono un unico programma invece di tracce parallele.',
        },
        {
          title: 'Agenda scientifica focalizzata',
          body: 'Ogni blocco accompagna dalla keynote introduttiva alla discussione di panel e al confronto metodologico concreto.',
        },
        {
          title: 'Dimensione che favorisce il dialogo',
          body: 'Il formato lascia spazio a discussione reale, accesso ai relatori e collaborazioni successive.',
        },
      ],
      asideTitle: 'Obiettivi della giornata',
      asideBody:
        'La homepage definisce il tono del workshop prima che le pagine di dettaglio assumano il compito di mostrare programma e materiali dei relatori.',
      asidePoints: [
        'Vocabolario condiviso tra discipline',
        'Metodi e implicazioni di policy nello stesso spazio di confronto',
        'Ritmo discussion-first con un arco narrativo chiaro dall’inizio alla fine',
      ],
    },
    highlights: [
      { value: '3', label: 'Keynote internazionali' },
      { value: '3', label: 'Panel tematici' },
      { value: '1', label: 'Giornata interdisciplinare' },
      { value: '1', label: 'Cena sociale finale' },
    ],
    programme: {
      eyebrow: 'Anteprima Del Programma',
      title: 'Una giornata unica con spazio per andare in profondità.',
      intro:
        'Il workshop mantiene il ritmo del template originale, ma il contenuto ora è organizzato attorno ad apertura, discussione sui metodi AI e chiusura sociale.',
      note: 'Il programma completo, con abstract e dettagli delle sessioni, continuerà ad arricchirsi nella pagina dedicata man mano che i materiali saranno confermati.',
      sessionLabel: 'Sessione',
      talkLabel: 'Intervento in evidenza',
    },
    speakers: {
      eyebrow: 'Relatori In Evidenza',
      title: 'Ricercatori e coordinatori di sessione che definiscono la prima edizione di COMPASS.',
      intro:
        'La landing page mette in primo piano voci invitate e guida delle sessioni senza espandersi ancora in schede complete o pagine di dettaglio.',
      note: 'Profili dei relatori e dettagli sui contributi continueranno a crescere con la conferma delle partecipazioni invitate.',
      emptyTalkLabel: 'Contributo al workshop in aggiornamento',
    },
    venue: {
      eyebrow: 'Anteprima Della Sede',
      title: 'Ospitato alla Scuola Superiore Sant’Anna di Pisa.',
      intro:
        'L’ambiente del workshop è accademico e raccolto, così partecipanti, sessioni, discussione informale e cena finale restano parte dello stesso flusso.',
      facts: [
        'Contesto storico nel centro di Pisa',
        'Spostamenti brevi tra plenaria, coffee break e spazi di discussione',
        'Indicazioni di viaggio e logistica dettagliata nella pagina dedicata alla sede',
      ],
      travelTitle: 'Nota sul viaggio',
      travelBody: 'Pisa Centrale e l’aeroporto Galileo Galilei sono i punti di arrivo più semplici per la maggior parte dei partecipanti.',
    },
    registration: {
      eyebrow: 'Registrazione',
      title: 'Candidati in anticipo e pianifica la giornata del workshop.',
      intro:
        'La registrazione resta un passaggio leggero verso la pagina dedicata e il form esterno, mentre la homepage chiarisce cosa aspettarsi prima dell’iscrizione.',
      deadlineLabel: 'Scadenza indicativa',
      deadlineValue: 'Entro il 1 maggio 2026',
      checklist: [
        'Rivedi il framing del workshop e l’anteprima del programma',
        'Verifica la fattibilità del viaggio verso Pisa',
        'Completa il form di registrazione dalla pagina dedicata',
      ],
      secondaryCta: 'Apri il form esterno di registrazione',
    },
    scrollSections: [
      { id: 'why-compass', label: 'Visione' },
      { id: 'programme-preview', label: 'Programma' },
      { id: 'featured-speakers', label: 'Relatori' },
      { id: 'venue-preview', label: 'Sede' },
      { id: 'registration-cta', label: 'Registrati' },
    ],
  },
} as const satisfies Record<Locale, HomepageContent>;

const homepageCuration = {
  programmePreview: [
    { sessionSlug: 'welcome-opening' },
    { sessionSlug: 'panel-ai-methods' },
    { sessionSlug: 'social-dinner' },
  ],
  featuredSpeakers: [
    {
      speakerSlug: 'guido-germano',
      roleLabel: {
        en: 'Keynote speaker',
        it: 'Relatore keynote',
      },
    },
    {
      speakerSlug: 'prabhani-don',
      roleLabel: {
        en: 'Keynote speaker',
        it: 'Relatrice keynote',
      },
    },
    {
      speakerSlug: 'stefano-blando',
      roleLabel: {
        en: 'Session chair',
        it: 'Coordinatore di sessione',
      },
    },
    {
      speakerSlug: 'biancamaria-bombino',
      roleLabel: {
        en: 'Session chair',
        it: 'Coordinatrice di sessione',
      },
    },
  ],
} as const satisfies {
  programmePreview: HomepageProgrammeSelection[];
  featuredSpeakers: HomepageFeaturedSpeakerSelection[];
};

export function buildLocalizedPath(locale: Locale, pathname = '') {
  const cleanPath = pathname.replace(/\/+/g, '/').replace(/^\/|\/$/g, '');
  return cleanPath ? `/${locale}/${cleanPath}/` : `/${locale}/`;
}

export function getLabels(locale: Locale) {
  return navLabels[locale] ?? navLabels[defaultLocale];
}

export function getChromeLabels(locale: Locale) {
  return chromeLabels[locale] ?? chromeLabels[defaultLocale];
}

export function getPageMetadata(locale: Locale, page: SitePageKey) {
  return pageMetadata[locale]?.[page] ?? pageMetadata[defaultLocale][page];
}

export function getSiteIdentity(locale: Locale) {
  return siteIdentity[locale] ?? siteIdentity[defaultLocale];
}

export function getHomepageContent(locale: Locale) {
  return homepageContent[locale] ?? homepageContent[defaultLocale];
}

export function getRootRedirect() {
  const target = `./${defaultLocale}/`;
  return {
    target,
    metaRefresh: `0;url=${target}`,
  };
}

export function getSpeakerBySlug(slug: string) {
  return speakers.find((speaker) => speaker.slug === slug);
}

export function getTalkBySlug(slug: string) {
  return talks.find((talk) => talk.slug === slug);
}

export function getTalksBySpeaker(slug: string) {
  return talks.filter((talk) => talk.speakerSlugs.includes(slug));
}

export function getHomepageHighlights(locale: Locale) {
  return [...getHomepageContent(locale).highlights];
}

export function getHomepageProgrammePreview(locale: Locale) {
  return homepageCuration.programmePreview.flatMap(({ sessionSlug }) => {
    const session = sessions.find((candidate) => candidate.slug === sessionSlug);
    if (!session) {
      return [];
    }

    const chairNames = session.chairSlugs
      .map((chairSlug) => getSpeakerBySlug(chairSlug)?.name)
      .filter((chairName): chairName is string => Boolean(chairName));
    const featuredTalk = getTalksForSession(session.slug)[0];

    return [{
      slug: session.slug,
      title: session.title[locale],
      description: session.description[locale],
      startsAt: session.startsAt,
      endsAt: session.endsAt,
      chairNames,
      chairLabel:
        locale === 'it'
          ? 'Coordinamento'
          : chairNames.length > 1
            ? 'Session chairs'
            : 'Session chair',
      featuredTalkTitle: featuredTalk?.title[locale] ?? null,
    }];
  });
}

export function getHomepageFeaturedSpeakers(locale: Locale) {
  return homepageCuration.featuredSpeakers.flatMap((selection) => {
    const speaker = getSpeakerBySlug(selection.speakerSlug);
    if (!speaker) {
      return [];
    }

    const relatedTalk = getTalksBySpeaker(speaker.slug)[0];
    return [{
      slug: speaker.slug,
      name: speaker.name,
      affiliation: speaker.affiliation,
      role: selection.roleLabel[locale],
      bio: speaker.bio[locale],
      talkTitle: relatedTalk?.title[locale] ?? null,
    }];
  });
}

export function getHomepageScrollSections(locale: Locale) {
  return [...getHomepageContent(locale).scrollSections];
}

export function getProgrammeSessions() {
  return [...sessions].sort((a, b) => a.startsAt.localeCompare(b.startsAt));
}

export function getTalksForSession(sessionSlug: string) {
  return talks
    .filter((talk) => talk.sessionSlug === sessionSlug)
    .sort((a, b) => (a.startsAt ?? '').localeCompare(b.startsAt ?? '') || a.slug.localeCompare(b.slug));
}

export { defaultLocale, siteConfig };

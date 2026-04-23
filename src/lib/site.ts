import {
  chromeLabels,
  defaultLocale,
  homepageMediaShowcaseContent,
  locales as supportedLocales,
  navLabels,
  pageMetadata,
  programmePageContent,
  richPageContent,
  siteConfig,
  siteIdentity,
  type SitePageKey,
  type HomepageMediaShowcaseContent,
  type ProgrammePageContent,
  type RichPageContent,
} from '../data/site';
import { sessions } from '../data/sessions';
import { speakers } from '../data/speakers';
import { talks } from '../data/talks';
import type { Locale } from '../data/types';

export const locales = supportedLocales;

type HomepageHeroContent = {
  eyebrow: string;
  dateLine: string;
  displayTitle: string;
  subtitle: string;
  title: string;
  copy: string;
  supportingNote: string;
  attendanceNote: string;
  trustLabel: string;
  trustItems: string[];
  marqueeItems: Array<{
    label: string;
    eyebrow: string;
  }>;
  panelLabel: string;
  panelItems: string[];
};

type HomepageDarkStageContent = {
  eyebrow: string;
  title: string;
  intro: string;
  videoLabel: string;
  videoTitle: string;
  videoCopy: string;
  featuredLabel: string;
  featuredItems: string[];
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
  navCards: Array<{
    route: 'programme' | 'speakers' | 'venue';
    eyebrow: string;
    title: string;
    body: string;
    meta: string;
    mediaLabel: string;
  }>;
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
  darkStage: HomepageDarkStageContent;
  whyCompass: HomepageWhyCompassContent;
  highlights: HomepageHighlight[];
  mediaShowcase: HomepageMediaShowcaseContent;
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
      dateLine: `${siteConfig.eventDate} · ${siteConfig.venue}`,
      displayTitle: 'COMPASS',
      subtitle: 'COmplexity, Markets, Policy, and AI in Social Systems',
      title: 'A focused workshop on socio-economic complexity, AI methods, and policy.',
      copy:
        'Organized by PhD-AI.it Society doctoral researchers, COMPASS connects complexity science, markets, networks, law, and AI in a single one-day academic setting.',
      supportingNote:
        'Applications are open now for a compact academic workshop format in Pisa.',
      attendanceNote: 'One day, one room, and a shared interdisciplinary audience across methods, networks, law, and policy.',
      trustLabel: 'Built with contributions across',
      trustItems: ['Complexity Science', 'AI Methods', 'Networks & NLP', 'Law & Ethics', 'Policy Research', 'Market Design'],
      marqueeItems: [
        { label: 'Keynote placeholder', eyebrow: 'Morning session' },
        { label: 'Audience placeholder', eyebrow: 'Main room' },
        { label: 'Panel discussion placeholder', eyebrow: 'Track dialogue' },
        { label: 'Campus moment placeholder', eyebrow: 'Sant’Anna' },
        { label: 'Roundtable placeholder', eyebrow: 'Workshop exchange' },
        { label: 'Speaker portrait placeholder', eyebrow: 'Invited guest' },
      ],
        panelLabel: 'Workshop Snapshot',
      panelItems: [
        siteConfig.eventDate,
        siteConfig.venue,
        'Free participation · expected audience 30-40 · Aula 3 confirmed.',
      ],
    },
    darkStage: {
      eyebrow: 'Beyond One Discipline',
      title: 'Research, law, policy, and AI in one compact workshop day.',
      intro:
        'COMPASS is staged as a full-day sequence of keynote framing, doctoral-led panels, and roundtable discussion. The second fold of the homepage should read like the dark stage of the original template, but carry workshop themes instead of summit marketing.',
      videoLabel: 'Workshop teaser placeholder',
      videoTitle: 'COMPASS workshop day',
      videoCopy: 'Use a video or still teaser here later. For now the section preserves the original template’s central media focus.',
      featuredLabel: 'Themes in focus',
      featuredItems: ['AI Methods & Applications', 'Networks & NLP', 'Legal & Ethics', 'Roundtables and open discussion'],
    },
    whyCompass: {
      eyebrow: 'Workshop Vision',
      title: 'A focused environment for interdisciplinary dialogue.',
      intro:
        'COMPASS is designed as a single-room workshop where keynote framing and doctoral-led panels move through predictive methods, networks, and legal-ethical debate without splitting the audience into parallel tracks.',
      pillars: [
        {
          title: 'Unified Scientific Arc',
          body: 'The programme flows from AI methods to networks and NLP, ending with normative and ethical reflections, ensuring a shared context for all participants.',
        },
        {
          title: 'Doctoral Leadership',
          body: 'Chaired by PhD candidates with invited international experts, the workshop fosters a peer-to-peer exchange between established scholars and emerging researchers.',
        },
        {
          title: 'Designed for Comparison',
          body: 'Every session includes dedicated discussion time and roundtables, prioritizing the exchange of ideas over formal presentations.',
        },
      ],
      asideTitle: 'Track Topics',
      asideBody: 'A deep dive into specific research areas.',
      asidePoints: [
        'Machine Learning & Complexity',
        'Predictive Algorithms',
        'Network Science & Graph Neural Networks',
        'Natural Language Processing',
        'AI Act & Legal Frameworks',
        'Ethics of Algorithms',
      ],
    },
    highlights: [
      { value: 'Interdisciplinary', label: 'Bridge between AI, Economics & Law' },
      { value: '3', label: 'International Keynote Lectures' },
      { value: '6', label: 'Doctoral Organizers and Chairs' },
      { value: 'Pisa Hub', label: 'SSSA, UniPi & CNR Network' },
    ],
    mediaShowcase: homepageMediaShowcaseContent.en,
    programme: {
      eyebrow: 'Explore The Day',
      title: 'Navigate the workshop program',
      intro:
        'A single room for a shared scientific dialogue, from predictive methods to legal and ethical frameworks.',
      note: 'The dedicated programme page carries the full agenda with confirmed keynotes and thematic panels.',
      sessionLabel: 'Programme block',
      talkLabel: 'Contribution',
      navCards: [
        {
          route: 'programme',
          eyebrow: 'Programme',
          title: 'Full Day Schedule',
          body: 'Opening remarks, keynote slots, three panels, and closing remarks in one vertical flow.',
          meta: '18 May 2026 · Aula 3',
          mediaLabel: 'Schedule overview',
        },
        {
          route: 'speakers',
          eyebrow: 'Speakers',
          title: 'Relators & Chairs',
          body: 'International keynotes, doctoral chairs, and named panelists driving the discussion.',
          meta: 'SSSA · UniPi · CNR · UCL · Penn State',
          mediaLabel: 'Speaker showcase',
        },
        {
          route: 'venue',
          eyebrow: 'Venue',
          title: 'Location & Access',
          body: 'Historic center of Pisa at Scuola Superiore Sant’Anna.',
          meta: 'Aula 3 · Main Campus',
          mediaLabel: 'Venue details',
        },
      ],
    },
    speakers: {
      eyebrow: 'Speakers',
      title: 'Keynote Speakers',
      intro: '',
      note: '',
      emptyTalkLabel: 'Contribution details in preparation',
    },
    venue: {
      eyebrow: 'Venue Preview',
      title: 'Hosted at Scuola Superiore Sant’Anna in Pisa.',
      intro:
        'The event is confirmed for Aula 3 at Scuola Superiore Sant’Anna in Pisa, keeping the workshop in a compact academic setting.',
      facts: [
        'Historic campus setting in central Pisa',
        'Working venue options already identified inside Sant’Anna',
        'Short movement between plenary room, breaks, and discussion areas',
      ],
      travelTitle: 'Travel note',
      travelBody: 'Pisa Centrale and Galileo Galilei Airport provide the simplest arrival routes for most attendees.',
    },
    registration: {
      eyebrow: 'Registration',
      title: 'Register early for a compact, free workshop format.',
      intro:
        'Participation remains free, but the event is designed for a focused in-person audience. The registration handoff stays simple while the homepage now explains the structure attendees are registering for.',
      deadlineLabel: 'Indicative deadline',
      deadlineValue: 'Before 1 May 2026',
      checklist: [
        'Review the full twelve-block workshop structure',
        'Confirm travel feasibility for Pisa and the selected date',
        'Use the registration form to complete signup',
      ],
      secondaryCta: 'View details',
    },
    scrollSections: [
      { id: 'dark-stage', label: 'Themes' },
      { id: 'programme-preview', label: 'Programme' },
      { id: 'featured-speakers', label: 'Speakers' },
      { id: 'why-compass', label: 'About' },
      { id: 'venue-preview', label: 'Venue' },
      { id: 'registration-cta', label: 'Register' },
    ],
  },
  it: {
    hero: {
      eyebrow: 'COMPASS 2026',
      dateLine: `${siteConfig.eventDate} · ${siteConfig.venue}`,
      displayTitle: 'COMPASS',
      subtitle: 'COmplexity, Mercati, Policy e AI nei sistemi sociali',
      title: 'Un workshop focalizzato su complessita socio-economica, metodi AI e policy.',
      copy:
        'Organizzato da dottorandi di PhD-AI.it Society, COMPASS mette in relazione scienza della complessita, mercati, reti, diritto e AI in un’unica giornata accademica.',
      supportingNote:
        'Le candidature sono aperte per un workshop accademico compatto a Pisa.',
      attendanceNote: 'Una giornata, una sola sala, e un pubblico interdisciplinare condiviso tra metodi, reti, diritto e policy.',
      trustLabel: 'Costruito attorno a',
      trustItems: ['Scienza della complessita', 'Metodi AI', 'Networks & NLP', 'Diritto ed etica', 'Ricerca su policy', 'Mercati e societa'],
      marqueeItems: [
        { label: 'Placeholder keynote', eyebrow: 'Sessione mattutina' },
        { label: 'Placeholder pubblico', eyebrow: 'Sala principale' },
        { label: 'Placeholder panel', eyebrow: 'Dialogo di track' },
        { label: 'Placeholder campus', eyebrow: 'Sant’Anna' },
        { label: 'Placeholder roundtable', eyebrow: 'Scambio workshop' },
        { label: 'Placeholder ritratto speaker', eyebrow: 'Ospite invitato' },
      ],
      panelLabel: 'Sintesi Del Workshop',
      panelItems: [
        siteConfig.eventDate,
        siteConfig.venue,
        'Partecipazione gratuita · pubblico atteso 30-40 persone · Aula 3 confermata.',
      ],
    },
    darkStage: {
      eyebrow: 'Oltre Una Singola Disciplina',
      title: 'Ricerca, diritto, policy e AI in una giornata compatta di workshop.',
      intro:
        'COMPASS è costruito come sequenza di keynote, panel guidati dai dottorandi e roundtable finali. Questa seconda fascia della homepage deve leggere il dark stage del template originale, ma con temi di workshop e non con tono summit commerciale.',
      videoLabel: 'Placeholder teaser workshop',
      videoTitle: 'Giornata workshop COMPASS',
      videoCopy: 'Qui potra entrare piu avanti un teaser video o uno still. Per ora la sezione conserva il focus mediale centrale del template originale.',
      featuredLabel: 'Temi in evidenza',
      featuredItems: ['AI Methods & Applications', 'Networks & NLP', 'Legal & Ethics', 'Roundtable e discussione aperta'],
    },
    whyCompass: {
      eyebrow: 'Visione del Workshop',
      title: 'Un ambiente focalizzato per il dialogo interdisciplinare.',
      intro:
        'COMPASS è disegnato come un workshop in aula unica in cui keynote e panel guidati dai dottorandi attraversano metodi predittivi, networks e dibattito giuridico-etico senza dividere il pubblico in tracce parallele.',
      pillars: [
        {
          title: 'Arco Scientifico Unificato',
          body: 'Il programma fluisce dai metodi AI ai network e NLP, terminando con riflessioni normative ed etiche, garantendo un contesto condiviso per tutti i partecipanti.',
        },
        {
          title: 'Leadership Dottorale',
          body: 'Coordinato da dottorandi con esperti internazionali invitati, il workshop favorisce uno scambio peer-to-peer tra studiosi affermati e ricercatori emergenti.',
        },
        {
          title: 'Pensato per il Confronto',
          body: 'Ogni sessione include tempo dedicato alla discussione e roundtable, dando priorità allo scambio di idee rispetto alle presentazioni formali.',
        },
      ],
      asideTitle: 'Temi delle Track',
      asideBody: 'Un approfondimento sulle aree di ricerca del workshop.',
      asidePoints: [
        'Machine Learning e Complessità',
        'Algoritmi Predittivi',
        'Scienza delle Reti e Graph Neural Networks',
        'Elaborazione del Linguaggio Naturale (NLP)',
        'AI Act e Quadri Normativi',
        'Etica degli Algoritmi',
      ],
    },
    highlights: [
      { value: 'Interdisciplinare', label: 'IA, Economia e Diritto' },
      { value: '3', label: 'Keynote Lecture Internazionali' },
      { value: '6', label: 'Dottorandi Organizzatori e Chair' },
      { value: 'Pisa Hub', label: 'Rete SSSA, UniPi e CNR' },
    ],
    mediaShowcase: homepageMediaShowcaseContent.it,
    programme: {
      eyebrow: 'Esplora La Giornata',
      title: 'Naviga il programma del workshop',
      intro:
        'Un’unica sala per un dialogo scientifico condiviso, dai metodi predittivi ai quadri normativi ed etici.',
      note: 'La pagina programma raccoglie l’agenda completa con keynote confermate e panel tematici.',
      sessionLabel: 'Blocco di programma',
      talkLabel: 'Contributo',
      navCards: [
        {
          route: 'programme',
          eyebrow: 'Programma',
          title: 'Scaletta Completa',
          body: 'Saluti iniziali, keynote, tre panel e closing remarks in un unico flusso verticale.',
          meta: '18 Maggio 2026 · Aula 3',
          mediaLabel: 'Panoramica agenda',
        },
        {
          route: 'speakers',
          eyebrow: 'Relatori',
          title: 'Speaker e Chair',
          body: 'Keynote internazionali, chair dottorali e panelist che guidano la discussione.',
          meta: 'SSSA · UniPi · CNR · UCL · Penn State',
          mediaLabel: 'Rassegna relatori',
        },
        {
          route: 'venue',
          eyebrow: 'Sede',
          title: 'Luogo e Accesso',
          body: 'Centro storico di Pisa presso la Scuola Superiore Sant’Anna.',
          meta: 'Aula 3 · Campus Principale',
          mediaLabel: 'Dettagli sede',
        },
      ],
    },
    speakers: {
      eyebrow: 'Relatori',
      title: 'Keynote Speakers',
      intro: '',
      note: '',
      emptyTalkLabel: 'Dettagli del contributo in preparazione',
    },
    venue: {
      eyebrow: 'Anteprima Della Sede',
      title: 'Ospitato alla Scuola Superiore Sant’Anna di Pisa.',
      intro:
        'L’evento è confermato in Aula 3 alla Scuola Superiore Sant’Anna di Pisa, in un contesto accademico raccolto.',
      facts: [
        'Contesto storico nel centro di Pisa',
        'Opzioni di sede gia individuate all’interno di Sant’Anna',
        'Spostamenti brevi tra plenaria, pause e spazi di discussione',
      ],
      travelTitle: 'Nota sul viaggio',
      travelBody: 'Pisa Centrale e l’aeroporto Galileo Galilei sono i punti di arrivo più semplici per la maggior parte dei partecipanti.',
    },
    registration: {
      eyebrow: 'Registrazione',
      title: 'Registrati presto per un workshop gratuito e raccolto.',
      intro:
        'La partecipazione resta gratuita, ma l’evento è pensato per un pubblico in presenza contenuto. Il passaggio di registrazione resta semplice mentre la homepage spiega meglio la struttura per cui ci si iscrive.',
      deadlineLabel: 'Scadenza indicativa',
      deadlineValue: 'Entro il 1 maggio 2026',
      checklist: [
        'Rivedi la struttura completa del workshop in dodici blocchi',
        'Verifica la fattibilita del viaggio verso Pisa e della data scelta',
        'Usa il modulo di registrazione per completare l’iscrizione',
      ],
      secondaryCta: 'Vedi i dettagli',
    },
    scrollSections: [
      { id: 'dark-stage', label: 'Temi' },
      { id: 'programme-preview', label: 'Programma' },
      { id: 'featured-speakers', label: 'Relatori' },
      { id: 'why-compass', label: 'Visione' },
      { id: 'venue-preview', label: 'Sede' },
      { id: 'registration-cta', label: 'Registrati' },
    ],
  },
} as const satisfies Record<Locale, HomepageContent>;

function cloneHomepageContent(content: HomepageContent): HomepageContent {
  return {
    hero: {
      ...content.hero,
      trustItems: [...content.hero.trustItems],
      marqueeItems: content.hero.marqueeItems.map((item) => ({ ...item })),
      panelItems: [...content.hero.panelItems],
    },
    darkStage: {
      ...content.darkStage,
      featuredItems: [...content.darkStage.featuredItems],
    },
    whyCompass: {
      ...content.whyCompass,
      pillars: content.whyCompass.pillars.map((pillar) => ({ ...pillar })),
      asidePoints: [...content.whyCompass.asidePoints],
    },
    highlights: content.highlights.map((highlight) => ({ ...highlight })),
    mediaShowcase: {
      ...content.mediaShowcase,
      items: content.mediaShowcase.items.map((item) => ({ ...item })),
    },
    programme: {
      ...content.programme,
      navCards: content.programme.navCards.map((card) => ({ ...card })),
    },
    speakers: { ...content.speakers },
    venue: {
      ...content.venue,
      facts: [...content.venue.facts],
    },
    registration: {
      ...content.registration,
      checklist: [...content.registration.checklist],
    },
    scrollSections: content.scrollSections.map((section) => ({ ...section })),
  };
}

const homepageCuration = {
  programmePreview: [
    { sessionSlug: 'opening-remarks' },
    { sessionSlug: 'keynote-1' },
    { sessionSlug: 'panel-1-ai-methods' },
    { sessionSlug: 'keynote-2' },
    { sessionSlug: 'panel-2-networks-nlp' },
    { sessionSlug: 'keynote-3-tbc' },
    { sessionSlug: 'panel-3-legal-ethics' },
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
      speakerSlug: 'senior-expert-ai-regulation-tbc',
      roleLabel: {
        en: 'Keynote speaker',
        it: 'Relatore keynote',
      },
    },
    {
      speakerSlug: 'institutional-keynote-tbc',
      roleLabel: {
        en: 'Keynote speaker',
        it: 'Relatore keynote',
      },
    },
  ],
} as const satisfies {
  programmePreview: HomepageProgrammeSelection[];
  featuredSpeakers: HomepageFeaturedSpeakerSelection[];
};

export function buildLocalizedPath(locale: Locale, pathname = '') {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const cleanPath = pathname.replace(/\/+/g, '/').replace(/^\/|\/$/g, '');
  const localized = cleanPath ? `/${locale}/${cleanPath}/` : `/${locale}/`;
  return `${base}${localized}`.replace(/\/+/g, '/');
}

export function resolvePublicPath(path: string) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`.replace(/\/+/g, '/');
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
  return cloneHomepageContent(homepageContent[locale] ?? homepageContent[defaultLocale]);
}

export function getProgrammePageContent(locale: Locale): ProgrammePageContent {
  const content = programmePageContent[locale] ?? programmePageContent[defaultLocale];
  return {
    ...content,
    cards: [...content.cards],
  };
}

export function getRichPageContent(locale: Locale, page: Exclude<SitePageKey, 'home' | 'programme'>): RichPageContent {
  const content = richPageContent[locale]?.[page] ?? richPageContent[defaultLocale][page];
  return {
    hero: { ...content.hero },
    sections: content.sections.map((section) => ({
      ...section,
      ...(section.bullets ? { bullets: [...section.bullets] } : {}),
    })),
    ...((content as RichPageContent).ctaLabel ? { ctaLabel: (content as RichPageContent).ctaLabel } : {}),
  };
}

export function getRootRedirect() {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const target = `${base}/${defaultLocale}/`.replace(/\/+/g, '/');
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
      type: session.type,
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

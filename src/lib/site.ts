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
      eyebrow: 'Why COMPASS',
      title: 'Structured for an interdisciplinary day that still feels academically tight.',
      intro:
        'COMPASS is designed as a compact workshop where keynote framing and doctoral-led panels move through predictive methods, networks, and legal-ethical debate without splitting the room into parallel tracks.',
      pillars: [
        {
          title: 'One room, three tracks',
          body: 'The programme advances from AI methods to networks and NLP, then to legal and ethical questions, so the same audience shares the whole scientific arc.',
        },
        {
          title: 'Doctoral leadership with invited depth',
          body: 'Six doctoral organizers chair the tracks while confirmed keynote guests and named discussants widen the methodological and institutional perspective.',
        },
        {
          title: 'Designed for discussion',
          body: 'Coffee breaks, lunch, and the social dinner are part of the workshop architecture, giving the day space for Q&A, comparison, and follow-up collaboration.',
        },
      ],
      asideTitle: 'What the structure is meant to do',
      asideBody:
        'The homepage now mirrors the actual workshop draft while still keeping uncertain items explicit where invitations or affiliations are not finalized.',
      asidePoints: [
        'Bridge complexity science, AI, policy, and law',
        'Keep keynote framing adjacent to doctoral-led discussion',
        'Leave TBC items visible instead of implying false certainty',
      ],
    },
    highlights: [
      { value: '12', label: 'Scheduled programme blocks' },
      { value: '3', label: 'Keynote lecture slots' },
      { value: '6', label: 'Doctoral organizers and chairs' },
      { value: '15', label: 'Named contributors in the current draft' },
    ],
    mediaShowcase: homepageMediaShowcaseContent.en,
    programme: {
      eyebrow: 'Explore The Day',
      title: 'Use the homepage cards to move through the workshop.',
      intro:
        'This slot replaces the original template’s event cards. It now acts as the main navigation band for programme, speakers, and venue.',
      note: 'The dedicated programme page carries the full public agenda with the current draft timings and placeholder speakers kept explicit where needed.',
      sessionLabel: 'Programme block',
      talkLabel: 'Linked contribution',
      navCards: [
        {
          route: 'programme',
          eyebrow: 'Programme',
          title: 'Read the full day schedule',
          body: 'Opening remarks, keynote slots, three panels, breaks, lunch, and closing remarks in one vertical flow.',
          meta: 'Current working agenda for 18 May 2026',
          mediaLabel: 'Schedule overview',
        },
        {
          route: 'speakers',
          eyebrow: 'Speakers',
          title: 'See confirmed and placeholder speakers',
          body: 'Keynote guests, doctoral chairs, named panelists, and the remaining open speaker slots stay visible.',
          meta: 'Speaker list with placeholders where invitations are still open',
          mediaLabel: 'Speaker showcase',
        },
        {
          route: 'venue',
          eyebrow: 'Venue',
          title: 'Check Aula 3 and Sant’Anna details',
          body: 'Use the venue page for location context, travel planning, and the workshop setting in Pisa.',
          meta: 'Aula 3, Scuola Superiore Sant’Anna, Pisa',
          mediaLabel: 'Venue details',
        },
      ],
    },
    speakers: {
      eyebrow: 'Featured Speakers',
      title: 'Confirmed keynote guests, reserved keynote slot, and the track chairs.',
      intro:
        'The homepage foregrounds the invited keynote voices and the doctoral organizers leading the three thematic tracks, while the data layer already includes the named panel contributors listed in the workshop status document.',
      note: 'Where titles, affiliations, or participation details are still being finalized, the cards stay explicit about that uncertainty instead of filling gaps with invented detail.',
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
        'Use the registration page or external form to complete signup',
      ],
      secondaryCta: 'Open external registration form',
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
      eyebrow: 'Perché COMPASS',
      title: 'Progettato per una giornata interdisciplinare che resti scientificamente compatta.',
      intro:
        'COMPASS è disegnato come workshop compatto in cui keynote e panel guidati dai dottorandi attraversano metodi predittivi, networks e dibattito giuridico-etico senza dividere il pubblico in tracce parallele.',
      pillars: [
        {
          title: 'Un’unica sala, tre track',
          body: 'Il programma avanza dai metodi AI a networks e NLP, fino a diritto ed etica, cosi lo stesso pubblico condivide l’intero arco scientifico.',
        },
        {
          title: 'Leadership dottorale con ospiti invitati',
          body: 'Sei dottorandi organizzatori coordinano le track mentre keynote confermate e discussant nominati ampliano la prospettiva metodologica e istituzionale.',
        },
        {
          title: 'Pensato per la discussione',
          body: 'Coffee break, lunch e cena sociale fanno parte dell’architettura del workshop e aprono spazio a Q&A, confronto e collaborazioni successive.',
        },
      ],
      asideTitle: 'A cosa serve questa struttura',
      asideBody:
        'La homepage riflette ora la bozza reale del workshop, mantenendo comunque espliciti gli elementi ancora incerti quando inviti o affiliazioni non sono finalizzati.',
      asidePoints: [
        'Costruire un ponte tra complessita, AI, policy e diritto',
        'Tenere affiancati framing keynote e discussione guidata dai dottorandi',
        'Lasciare visibili i TBC senza simulare una certezza non ancora acquisita',
      ],
    },
    highlights: [
      { value: '12', label: 'Blocchi in programma' },
      { value: '3', label: 'Slot keynote' },
      { value: '6', label: 'Dottorandi organizzatori e chair' },
      { value: '15', label: 'Contributori nominati nella bozza attuale' },
    ],
    mediaShowcase: homepageMediaShowcaseContent.it,
    programme: {
      eyebrow: 'Esplora La Giornata',
      title: 'Usa le card della homepage per muoverti nel workshop.',
      intro:
        'Questo slot sostituisce le event cards del template originale. Ora funziona come banda di navigazione principale verso programma, relatori e sede.',
      note: 'La pagina programma raccoglie l agenda pubblica completa con gli orari attuali e i placeholder resi espliciti dove servono.',
      sessionLabel: 'Blocco di programma',
      talkLabel: 'Contributo collegato',
      navCards: [
        {
          route: 'programme',
          eyebrow: 'Programma',
          title: 'Leggi la scaletta completa della giornata',
          body: 'Saluti iniziali, keynote, tre panel, pause, lunch e closing remarks in un unico flusso verticale.',
          meta: 'Agenda di lavoro aggiornata al 18 maggio 2026',
          mediaLabel: 'Panoramica agenda',
        },
        {
          route: 'speakers',
          eyebrow: 'Relatori',
          title: 'Vedi speaker confermati e placeholder',
          body: 'Keynote, chair dottorali, panelist nominati e slot ancora aperti restano tutti visibili.',
          meta: 'Elenco speaker con placeholder dove gli inviti sono ancora aperti',
          mediaLabel: 'Rassegna relatori',
        },
        {
          route: 'venue',
          eyebrow: 'Sede',
          title: 'Controlla Aula 3 e i dettagli Sant’Anna',
          body: 'Usa la pagina sede per il contesto del luogo, il viaggio e l ambientazione del workshop a Pisa.',
          meta: 'Aula 3, Scuola Superiore Sant’Anna, Pisa',
          mediaLabel: 'Dettagli sede',
        },
      ],
    },
    speakers: {
      eyebrow: 'Relatori In Evidenza',
      title: 'Keynote confermate, slot keynote riservato e chair delle track.',
      intro:
        'La homepage mette in primo piano le voci keynote e i dottorandi che guidano le tre track tematiche, mentre il data layer include gia i contributori di panel nominati nel documento di stato del workshop.',
      note: 'Dove titoli, affiliazioni o dettagli di partecipazione sono ancora in definizione, le card rendono esplicita l’incertezza invece di colmare i vuoti con dettagli inventati.',
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
        'Usa la pagina di registrazione o il form esterno per completare l’iscrizione',
      ],
      secondaryCta: 'Apri il form esterno di registrazione',
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
        en: 'Confirmed keynote speaker',
        it: 'Relatrice keynote confermata',
      },
    },
    {
      speakerSlug: 'senior-expert-ai-regulation-tbc',
      roleLabel: {
        en: 'Keynote slot in confirmation',
        it: 'Slot keynote in conferma',
      },
    },
    {
      speakerSlug: 'stefano-blando',
      roleLabel: {
        en: 'Track 1 co-chair',
        it: 'Relatore e co-chair della Track 1',
      },
    },
    {
      speakerSlug: 'biancamaria-bombino',
      roleLabel: {
        en: 'Track 1 co-chair',
        it: 'Relatrice e co-chair della Track 1',
      },
    },
    {
      speakerSlug: 'lorenzo-emer',
      roleLabel: {
        en: 'Track 2 co-chair',
        it: 'Relatore e co-chair della Track 2',
      },
    },
    {
      speakerSlug: 'alice-musso',
      roleLabel: {
        en: 'Track 2 co-chair',
        it: 'Relatrice e co-chair della Track 2',
      },
    },
    {
      speakerSlug: 'roberta-romano',
      roleLabel: {
        en: 'Track 3 co-chair',
        it: 'Relatrice e co-chair della Track 3',
      },
    },
    {
      speakerSlug: 'roberta-savella',
      roleLabel: {
        en: 'Track 3 co-chair',
        it: 'Relatrice e co-chair della Track 3',
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
    ...(content.ctaLabel ? { ctaLabel: content.ctaLabel } : {}),
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

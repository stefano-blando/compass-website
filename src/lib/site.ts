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
      title: 'A focused workshop on socio-economic complexity, AI methods, and policy.',
      copy:
        'Organized by PhD-AI.it Society doctoral researchers, COMPASS connects complexity science, markets, networks, law, and AI in a single one-day academic setting.',
      supportingNote:
        'Current draft: opening remarks, three keynote slots, three chaired panels, two coffee breaks, a networking lunch, closing remarks, and a social dinner in Pisa.',
      panelLabel: 'Workshop Snapshot',
      panelItems: [
        siteConfig.eventDate,
        siteConfig.venue,
        'Free participation · expected audience 30-40 · alternate date 18 May 2026.',
      ],
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
        'The homepage now mirrors the actual workshop draft rather than a seed shell, while still keeping uncertain items explicit where invitations or affiliations are not finalized.',
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
    programme: {
      eyebrow: 'Programme Preview',
      title: 'The homepage now follows the actual day structure.',
      intro:
        'This preview tracks the current workshop draft from welcome remarks through keynote-panel progression, ending with the evening social dinner while leaving the third keynote slot explicitly marked TBC.',
      note: 'The dedicated programme page carries the full twelve-block structure, including both coffee breaks, the networking lunch, and the closing remarks.',
      sessionLabel: 'Programme block',
      talkLabel: 'Linked contribution',
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
        'The event is planned for the Scuola Superiore Sant’Anna in Pisa, with the Aula Magna Storica or Aula 3 identified as the working venue options for a compact academic setting.',
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
      title: 'Un workshop focalizzato su complessita socio-economica, metodi AI e policy.',
      copy:
        'Organizzato da dottorandi di PhD-AI.it Society, COMPASS mette in relazione scienza della complessita, mercati, reti, diritto e AI in un’unica giornata accademica.',
      supportingNote:
        'Bozza attuale: saluti iniziali, tre slot keynote, tre panel con chair, due coffee break, networking lunch, closing remarks e cena sociale a Pisa.',
      panelLabel: 'Sintesi Del Workshop',
      panelItems: [
        siteConfig.eventDate,
        siteConfig.venue,
        'Partecipazione gratuita · pubblico atteso 30-40 persone · data alternativa 18 maggio 2026.',
      ],
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
        'La homepage riflette ora la bozza reale del workshop invece di una shell seed, mantenendo comunque espliciti gli elementi ancora incerti quando inviti o affiliazioni non sono finalizzati.',
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
    programme: {
      eyebrow: 'Anteprima Del Programma',
      title: 'La homepage segue ora la struttura reale della giornata.',
      intro:
        'Questa anteprima segue la bozza attuale del workshop dall’apertura alla sequenza keynote-panel, fino alla cena sociale serale, mantenendo lo slot della terza keynote esplicitamente marcato come TBC.',
      note: 'La pagina programma raccoglie l’intera struttura in dodici blocchi, comprese entrambe le pause caffe, il networking lunch e le closing remarks.',
      sessionLabel: 'Blocco di programma',
      talkLabel: 'Contributo collegato',
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
        'L’evento è previsto alla Scuola Superiore Sant’Anna di Pisa, con Aula Magna Storica o Aula 3 indicate come opzioni di lavoro per un contesto accademico raccolto.',
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

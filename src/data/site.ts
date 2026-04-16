import type { Locale } from './types';

export const locales: Locale[] = ['en', 'it'];
export const defaultLocale: Locale = 'en';
export const sitePageKeys = ['home', 'programme', 'speakers', 'venue', 'registration', 'about', 'organizers', 'faq'] as const;
export type SitePageKey = (typeof sitePageKeys)[number];

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
    home: 'Inizio',
    programme: 'Programma',
    speakers: 'Relatori',
    venue: 'Sede',
    registration: 'Registrazione',
    about: 'Chi siamo',
    organizers: 'Organizzatori',
    faq: 'FAQ',
    register: 'Registrati',
    viewProgramme: 'Vedi il programma',
  },
} as const;

export const siteIdentity = {
  en: {
    fullTitle: siteConfig.fullTitle,
  },
  it: {
    fullTitle: 'COmplexity, Mercati, Policy e AI nei sistemi sociali',
  },
} as const satisfies Record<Locale, { fullTitle: string }>;

export const chromeLabels = {
  en: {
    mainNavigation: 'Main navigation',
    languageSwitcher: 'Language switcher',
    switchLocale: {
      en: 'Switch to English',
      it: 'Switch to Italian',
    },
  },
  it: {
    mainNavigation: 'Navigazione principale',
    languageSwitcher: 'Selettore della lingua',
    switchLocale: {
      en: 'Passa alla versione inglese',
      it: 'Passa alla versione italiana',
    },
  },
} as const satisfies Record<
  Locale,
  {
    mainNavigation: string;
    languageSwitcher: string;
    switchLocale: Record<Locale, string>;
  }
>;

export const pageMetadata = {
  en: {
    home: {
      title: `COMPASS | ${siteIdentity.en.fullTitle}`,
      description: 'COMPASS is a one-day academic workshop in Pisa with keynotes, panels, and interdisciplinary discussion on complexity, markets, policy, and AI.',
    },
    programme: {
      title: 'Programme | COMPASS',
      description: 'Current COMPASS programme with opening, keynote lectures, panel sessions, breaks, and the closing social dinner.',
    },
    speakers: {
      title: 'Speakers | COMPASS',
      description: 'Current speaker list for COMPASS, including keynote guests, organizers, chairs, and named panel contributors.',
    },
    venue: {
      title: 'Venue | COMPASS',
      description: 'Venue shell for travel information and attendee logistics.',
    },
    registration: {
      title: 'Registration | COMPASS',
      description: 'Registration shell with the external form handoff for attendees.',
    },
    about: {
      title: 'About | COMPASS',
      description: 'COMPASS workshop mission and interdisciplinary positioning.',
    },
    organizers: {
      title: 'Organizers | COMPASS',
      description: 'Organizing committee shell and institutional context for COMPASS.',
    },
    faq: {
      title: 'FAQ | COMPASS',
      description: 'Practical workshop questions, logistics, and quick answers.',
    },
  },
  it: {
    home: {
      title: `COMPASS | ${siteIdentity.it.fullTitle}`,
      description: 'COMPASS e un workshop accademico di una giornata a Pisa con keynote, panel e confronto interdisciplinare su complessita, mercati, policy e AI.',
    },
    programme: {
      title: 'Programma | COMPASS',
      description: 'Programma attuale di COMPASS con apertura, keynote, panel, pause, pranzo e cena sociale conclusiva.',
    },
    speakers: {
      title: 'Relatori | COMPASS',
      description: 'Elenco attuale dei relatori di COMPASS, con keynote, organizzatori, chair e contributori di panel nominati.',
    },
    venue: {
      title: 'Sede | COMPASS',
      description: 'Shell della sede con informazioni di viaggio e logistica per i partecipanti.',
    },
    registration: {
      title: 'Registrazione | COMPASS',
      description: 'Shell di registrazione con accesso al modulo esterno per i partecipanti.',
    },
    about: {
      title: 'Chi siamo | COMPASS',
      description: 'Missione del workshop COMPASS e posizionamento interdisciplinare.',
    },
    organizers: {
      title: 'Organizzatori | COMPASS',
      description: 'Shell del comitato organizzatore e del contesto istituzionale di COMPASS.',
    },
    faq: {
      title: 'FAQ | COMPASS',
      description: 'Domande pratiche sul workshop, logistica e risposte rapide.',
    },
  },
} as const satisfies Record<Locale, Record<SitePageKey, { title: string; description: string }>>;

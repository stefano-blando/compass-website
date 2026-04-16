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

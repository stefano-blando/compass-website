import type { Session } from './types';

export const sessions: Session[] = [
  {
    slug: 'opening-remarks',
    title: {
      en: 'Intro & Welcome',
      it: 'Intro & Welcome',
    },
    description: {
      en: 'Opening remarks by Andrea Vandin and framing of the COMPASS scientific agenda.',
      it: 'Saluti introduttivi di Andrea Vandin e inquadramento dell’agenda scientifica di COMPASS.',
    },
    type: 'opening',
    startsAt: '2026-05-11T09:00:00+02:00',
    endsAt: '2026-05-11T09:15:00+02:00',
    chairSlugs: [],
  },
  {
    slug: 'keynote-1',
    title: {
      en: 'Keynote 1',
      it: 'Keynote 1',
    },
    description: {
      en: 'Confirmed keynote lecture by Guido Germano (UCL, visiting at Scuola Superiore Sant’Anna).',
      it: 'Keynote confermata di Guido Germano (UCL, visiting presso la Scuola Superiore Sant’Anna).',
    },
    type: 'keynote',
    startsAt: '2026-05-11T09:15:00+02:00',
    endsAt: '2026-05-11T10:00:00+02:00',
    chairSlugs: [],
  },
  {
    slug: 'coffee-break-1',
    title: {
      en: 'Coffee Break 1',
      it: 'Coffee Break 1',
    },
    description: {
      en: 'Morning pause for informal discussion before the first thematic panel.',
      it: 'Pausa del mattino per confronto informale prima del primo panel tematico.',
    },
    type: 'break',
    startsAt: '2026-05-11T10:00:00+02:00',
    endsAt: '2026-05-11T10:30:00+02:00',
    chairSlugs: [],
  },
  {
    slug: 'panel-1-ai-methods',
    title: {
      en: 'Panel 1: AI Methods & Applications',
      it: 'Panel 1: Metodi e applicazioni dell’AI',
    },
    description: {
      en: 'Track 1 on predictive methods, simulation, and applied AI in complex systems.',
      it: 'Track 1 su metodi predittivi, simulazione e AI applicata ai sistemi complessi.',
    },
    type: 'panel',
    startsAt: '2026-05-11T10:30:00+02:00',
    endsAt: '2026-05-11T12:15:00+02:00',
    chairSlugs: ['stefano-blando', 'biancamaria-bombino'],
  },
  {
    slug: 'networking-lunch',
    title: {
      en: 'Networking Light Lunch',
      it: 'Networking Light Lunch',
    },
    description: {
      en: 'Shared lunch break for speakers, panelists, and attendees.',
      it: 'Pausa pranzo condivisa per relatori, panelist e partecipanti.',
    },
    type: 'lunch',
    startsAt: '2026-05-11T12:15:00+02:00',
    endsAt: '2026-05-11T13:15:00+02:00',
    chairSlugs: [],
  },
  {
    slug: 'keynote-2',
    title: {
      en: 'Keynote 2',
      it: 'Keynote 2',
    },
    description: {
      en: 'Confirmed keynote lecture by Prabhani Kuruppumullage Don (Pennsylvania State University).',
      it: 'Keynote confermata di Prabhani Kuruppumullage Don (Pennsylvania State University).',
    },
    type: 'keynote',
    startsAt: '2026-05-11T13:15:00+02:00',
    endsAt: '2026-05-11T14:00:00+02:00',
    chairSlugs: [],
  },
  {
    slug: 'panel-2-networks-nlp',
    title: {
      en: 'Panel 2: Networks & NLP',
      it: 'Panel 2: Networks e NLP',
    },
    description: {
      en: 'Track 2 on networks, innovation dynamics, natural language processing, and emergent phenomena.',
      it: 'Track 2 su reti, dinamiche dell’innovazione, elaborazione del linguaggio naturale e fenomeni emergenti.',
    },
    type: 'panel',
    startsAt: '2026-05-11T14:00:00+02:00',
    endsAt: '2026-05-11T15:45:00+02:00',
    chairSlugs: ['lorenzo-emer', 'alice-musso'],
  },
  {
    slug: 'coffee-break-2',
    title: {
      en: 'Coffee Break 2',
      it: 'Coffee Break 2',
    },
    description: {
      en: 'Afternoon pause before the final keynote and legal-ethics panel.',
      it: 'Pausa pomeridiana prima della keynote finale e del panel su diritto ed etica.',
    },
    type: 'break',
    startsAt: '2026-05-11T15:45:00+02:00',
    endsAt: '2026-05-11T16:15:00+02:00',
    chairSlugs: [],
  },
  {
    slug: 'keynote-3-tbc',
    title: {
      en: 'Keynote 3',
      it: 'Keynote 3',
    },
    description: {
      en: 'Reserved keynote slot for a senior expert on AI regulation and ethics, currently to be confirmed.',
      it: 'Slot keynote riservato a un profilo senior su regolazione ed etica dell’AI, attualmente da confermare.',
    },
    type: 'keynote',
    startsAt: '2026-05-11T16:15:00+02:00',
    endsAt: '2026-05-11T17:00:00+02:00',
    chairSlugs: [],
  },
  {
    slug: 'panel-3-legal-ethics',
    title: {
      en: 'Panel 3: Legal & Ethics',
      it: 'Panel 3: Diritto ed Etica',
    },
    description: {
      en: 'Track 3 on AI for legal work, regulation, and the ethical conditions of responsible research.',
      it: 'Track 3 su AI per il settore legale, regolazione e condizioni etiche per una ricerca responsabile.',
    },
    type: 'panel',
    startsAt: '2026-05-11T17:00:00+02:00',
    endsAt: '2026-05-11T18:45:00+02:00',
    chairSlugs: ['roberta-romano', 'roberta-savella'],
  },
  {
    slug: 'closing-remarks',
    title: {
      en: 'Closing Remarks',
      it: 'Closing Remarks',
    },
    description: {
      en: 'Final wrap-up of the workshop day before the evening dinner.',
      it: 'Chiusura finale della giornata prima della cena serale.',
    },
    type: 'closing',
    startsAt: '2026-05-11T18:45:00+02:00',
    endsAt: '2026-05-11T19:00:00+02:00',
    chairSlugs: [],
  },
  {
    slug: 'social-dinner',
    title: {
      en: 'Social Dinner',
      it: 'Cena sociale',
    },
    description: {
      en: 'Evening social dinner for speakers, panelists, and organizers.',
      it: 'Cena sociale serale per speaker, panelist e organizzatori.',
    },
    type: 'social',
    startsAt: '2026-05-11T20:00:00+02:00',
    endsAt: '2026-05-11T22:00:00+02:00',
    chairSlugs: [],
  },
];

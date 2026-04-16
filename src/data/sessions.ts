import type { Session } from './types';

export const sessions: Session[] = [
  {
    slug: 'welcome-opening',
    title: {
      en: 'Opening Remarks',
      it: 'Apertura dei lavori',
    },
    description: {
      en: 'Welcome to COMPASS and overview of the scientific agenda.',
      it: 'Benvenuto a COMPASS e introduzione all’agenda scientifica della giornata.',
    },
    type: 'opening',
    startsAt: '2026-05-11T09:00:00+02:00',
    endsAt: '2026-05-11T09:45:00+02:00',
    chairSlugs: [],
  },
  {
    slug: 'panel-ai-methods',
    title: {
      en: 'Panel 1: AI Methods & Applications',
      it: 'Panel 1: Metodi e applicazioni dell’AI',
    },
    description: {
      en: 'Talks on predictive methods, simulation, and applied AI in complex systems.',
      it: 'Interventi su metodi predittivi, simulazione e AI applicata ai sistemi complessi.',
    },
    type: 'panel',
    startsAt: '2026-05-11T10:30:00+02:00',
    endsAt: '2026-05-11T12:15:00+02:00',
    chairSlugs: ['stefano-blando', 'biancamaria-bombino'],
  },
  {
    slug: 'social-dinner',
    title: {
      en: 'Social Dinner',
      it: 'Cena sociale',
    },
    description: {
      en: 'Closing dinner for invited speakers and organizers.',
      it: 'Cena conclusiva per speaker invitati e organizzatori.',
    },
    type: 'social',
    startsAt: '2026-05-11T20:00:00+02:00',
    endsAt: '2026-05-11T22:00:00+02:00',
    chairSlugs: [],
  },
];

import type { Session } from './types';

export const sessions: Session[] = [
  {
    slug: 'opening-remarks',
    title: {
      en: 'Opening Remarks',
      it: 'Saluti introduttivi',
    },
    description: {
      en: 'Andrea Vandin and Francesca Chiaromonte open the workshop day and frame the agenda.',
      it: 'Andrea Vandin e Francesca Chiaromonte aprono la giornata e inquadrano l’agenda del workshop.',
    },
    type: 'opening',
    startsAt: '2026-05-18T09:30:00+02:00',
    endsAt: '2026-05-18T09:45:00+02:00',
    chairSlugs: [],
  },
  {
    slug: 'keynote-1',
    title: {
      en: 'Keynote 1',
      it: 'Keynote 1',
    },
    description: {
      en: 'Keynote lecture by Guido Germano (University College London).',
      it: 'Lezione keynote di Guido Germano (University College London).',
    },
    type: 'keynote',
    startsAt: '2026-05-18T09:45:00+02:00',
    endsAt: '2026-05-18T10:30:00+02:00',
    chairSlugs: [],
  },
  {
    slug: 'coffee-break-1',
    title: {
      en: 'Coffee Break 1',
      it: 'Coffee Break 1',
    },
    description: {
      en: 'Morning pause before the first panel.',
      it: 'Pausa del mattino prima del primo panel.',
    },
    type: 'break',
    startsAt: '2026-05-18T10:30:00+02:00',
    endsAt: '2026-05-18T11:00:00+02:00',
    chairSlugs: [],
  },
  {
    slug: 'panel-1-ai-methods',
    title: {
      en: 'Panel 1: AI for Modeling and Forecasting',
      it: 'Panel 1: AI per la modellazione e la previsione',
    },
    description: {
      en: 'Understanding the foundations and applications of AI in the predictive field. This session bridges algorithmic innovation and socio-economic impact.',
      it: 'Comprendere i fondamenti e le applicazioni dell’AI in ambito predittivo. Questa sessione unisce innovazione algoritmica e impatto socio-economico.',
    },
    type: 'panel',
    startsAt: '2026-05-18T11:00:00+02:00',
    endsAt: '2026-05-18T12:00:00+02:00',
    chairSlugs: ['stefano-blando', 'biancamaria-bombino'],
  },
  {
    slug: 'networking-lunch',
    title: {
      en: 'Light Lunch',
      it: 'Light Lunch',
    },
    description: {
      en: 'Shared lunch break for speakers and participants.',
      it: 'Pausa pranzo condivisa per relatori e partecipanti.',
    },
    type: 'lunch',
    startsAt: '2026-05-18T12:45:00+02:00',
    endsAt: '2026-05-18T13:45:00+02:00',
    chairSlugs: [],
  },
  {
    slug: 'keynote-2',
    title: {
      en: 'Keynote 2',
      it: 'Keynote 2',
    },
    description: {
      en: 'Keynote lecture by Prabhani Kuruppumullage Don (Pennsylvania State University).',
      it: 'Lezione keynote di Prabhani Kuruppumullage Don (Pennsylvania State University).',
    },
    type: 'keynote',
    startsAt: '2026-05-18T13:45:00+02:00',
    endsAt: '2026-05-18T14:30:00+02:00',
    chairSlugs: [],
  },
  {
    slug: 'panel-3-legal-ethics',
    title: {
      en: 'Panel 3: AI for Legal & Legal for AI Ethics',
      it: 'Panel 3: AI for Legal e Legal for AI Ethics',
    },
    description: {
      en: 'Exploring the relationship between AI and the legal sector: predictive justice and normative frameworks.',
      it: 'Esplorazione del rapporto tra AI e settore legale: giustizia predittiva e quadri normativi.',
    },
    type: 'panel',
    startsAt: '2026-05-18T14:30:00+02:00',
    endsAt: '2026-05-18T15:30:00+02:00',
    chairSlugs: ['roberta-romano', 'roberta-savella'],
  },
  {
    slug: 'coffee-break-2',
    title: {
      en: 'Coffee Break 2',
      it: 'Coffee Break 2',
    },
    description: {
      en: 'Afternoon pause before the final panel.',
      it: 'Pausa pomeridiana prima dell’ultimo panel.',
    },
    type: 'break',
    startsAt: '2026-05-18T15:30:00+02:00',
    endsAt: '2026-05-18T16:00:00+02:00',
    chairSlugs: [],
  },
  {
    slug: 'panel-2-networks-nlp',
    title: {
      en: 'Panel 2: Complexity, Innovation, and the Digital World',
      it: 'Panel 2: Complessità, innovazione e mondo digitale',
    },
    description: {
      en: 'Analyzing social and innovation networks combined with NLP to extract value from complex systems.',
      it: 'Analisi delle reti sociali e dell’innovazione unita alla NLP per estrarre valore da sistemi complessi.',
    },
    type: 'panel',
    startsAt: '2026-05-18T16:00:00+02:00',
    endsAt: '2026-05-18T17:30:00+02:00',
    chairSlugs: ['lorenzo-emer', 'alice-musso'],
  },
  {
    slug: 'rector-remarks',
    title: {
      en: 'Rector’s Remarks',
      it: 'Saluti del Rettore',
    },
    description: {
      en: 'Institutional closing address by the Rector of Scuola Superiore Sant’Anna.',
      it: 'Saluti istituzionali conclusivi del Rettore della Scuola Superiore Sant’Anna.',
    },
    type: 'opening',
    startsAt: '2026-05-18T17:30:00+02:00',
    endsAt: '2026-05-18T17:45:00+02:00',
    chairSlugs: [],
  },
  {
    slug: 'pagopa-session',
    title: {
      en: 'Institutional Keynote (TBC)',
      it: 'Keynote istituzionale (TBC)',
    },
    description: {
      en: 'Special session featuring institutional perspectives on AI and digital public services.',
      it: 'Sessione speciale con prospettive istituzionali su AI e servizi pubblici digitali.',
    },
    type: 'keynote',
    startsAt: '2026-05-18T17:45:00+02:00',
    endsAt: '2026-05-18T18:15:00+02:00',
    chairSlugs: [],
  },
  {
    slug: 'closing-remarks',
    title: {
      en: 'Closing Remarks',
      it: 'Conclusioni',
    },
    description: {
      en: 'Final workshop takeaways and future perspectives.',
      it: 'Riflessioni conclusive del workshop e prospettive future.',
    },
    type: 'closing',
    startsAt: '2026-05-18T18:15:00+02:00',
    endsAt: '2026-05-18T18:30:00+02:00',
    chairSlugs: [],
  },
  {
    slug: 'social-dinner',
    title: {
      en: 'Social Dinner',
      it: 'Cena Sociale',
    },
    description: {
      en: 'Closing dinner for speakers and invited guests.',
      it: 'Cena conclusiva per relatori e ospiti invitati.',
    },
    type: 'social',
    startsAt: '2026-05-18T20:00:00+02:00',
    endsAt: '2026-05-18T22:30:00+02:00',
    chairSlugs: [],
  },
];

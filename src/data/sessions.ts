import type { Session } from './types';

export const sessions: Session[] = [
  {
    slug: 'opening-remarks',
    title: {
      en: 'Opening Remarks',
      it: 'Saluti introduttivi',
    },
    description: {
      en: 'Salvatore Ruggieri and Francesca Chiaromonte open the workshop day and frame the agenda.',
      it: 'Salvatore Ruggieri e Francesca Chiaromonte aprono la giornata e inquadrano l’agenda del workshop.',
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
      en: 'Keynote lecture by Prabhani Kuruppumullage Don (Pennsylvania State University).',
      it: 'Lezione keynote di Prabhani Kuruppumullage Don (Pennsylvania State University).',
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
      en: 'Foundations and applications of AI in predictive modeling, spanning from statistical methods to socio-economic forecasting.',
      it: 'Fondamenti e applicazioni dell’AI nella modellazione predittiva, dai metodi statistici alle previsioni socio-economiche.',
    },
    type: 'panel',
    startsAt: '2026-05-18T11:00:00+02:00',
    endsAt: '2026-05-18T12:00:00+02:00',
    chairSlugs: ['alice-musso', 'biancamaria-bombino'],
  },
  {
    slug: 'keynote-2',
    title: {
      en: 'Keynote 2',
      it: 'Keynote 2',
    },
    description: {
      en: 'Keynote lecture by Guido Germano on machine learning applications in finance.',
      it: 'Lezione keynote di Guido Germano sulle applicazioni del machine learning nella finanza.',
    },
    type: 'keynote',
    startsAt: '2026-05-18T12:00:00+02:00',
    endsAt: '2026-05-18T12:45:00+02:00',
    chairSlugs: [],
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
    slug: 'keynote-legal',
    title: {
      en: 'Keynote 3',
      it: 'Keynote 3',
    },
    description: {
      en: 'Keynote lecture by Federica Casarosa on disinformation, democracy, and the role of courts.',
      it: 'Lezione keynote di Federica Casarosa su disinformazione, democrazia e il ruolo delle corti.',
    },
    type: 'keynote',
    startsAt: '2026-05-18T13:45:00+02:00',
    endsAt: '2026-05-18T14:30:00+02:00',
    chairSlugs: [],
  },
  {
    slug: 'panel-2-legal-ethics',
    title: {
      en: 'Panel 2: AI for Legal & Legal for AI Ethics',
      it: 'Panel 2: AI for Legal e Legal for AI Ethics',
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
    slug: 'panel-3-complexity',
    title: {
      en: 'Panel 3: AI for Complexity and Economic Systems',
      it: 'Panel 3: AI per la complessità e i sistemi economici',
    },
    description: {
      en: 'Analyzing social and innovation networks combined with AI to extract value from complex systems.',
      it: 'Analisi delle reti sociali e dell’innovazione unita all’AI per estrarre valore da sistemi complessi.',
    },
    type: 'panel',
    startsAt: '2026-05-18T16:00:00+02:00',
    endsAt: '2026-05-18T17:15:00+02:00',
    chairSlugs: ['lorenzo-emer', 'stefano-blando'],
  },
  {
    slug: 'closing-remarks',
    title: {
      en: 'Closing Remarks',
      it: 'Conclusioni',
    },
    description: {
      en: 'Final workshop takeaways by Andrea Vandin.',
      it: 'Riflessioni conclusive del workshop a cura di Andrea Vandin.',
    },
    type: 'closing',
    startsAt: '2026-05-18T17:15:00+02:00',
    endsAt: '2026-05-18T17:45:00+02:00',
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

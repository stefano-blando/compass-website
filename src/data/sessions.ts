import type { Session } from './types';

export const sessions: Session[] = [
  {
    slug: 'opening-remarks',
    title: {
      en: 'Opening Remarks',
      it: 'Saluti introduttivi',
    },
    description: {
      en: 'Andrea Vandin and the Rector of Scuola Superiore Sant’Anna open the workshop day and frame the agenda in Aula 3.',
      it: 'Andrea Vandin e il Rettore della Scuola Superiore Sant’Anna aprono la giornata e inquadrano l agenda del workshop in Aula 3.',
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
      en: 'Confirmed keynote slot with Guido Germano.',
      it: 'Slot keynote confermato con Guido Germano.',
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
      en: 'Understanding the foundations and applications of AI in the predictive field is essential for evaluating socio-economic impacts. This session bridges the gap between algorithmic innovation and the real-world impact of predictive systems.',
      it: 'Comprendere i fondamenti e le applicazioni dell’AI in ambito predittivo è essenziale per valutare le ricadute socio-economiche. Questa sessione colma il divario tra l’innovazione algoritmica e l’impatto reale dei sistemi predittivi.',
    },
    type: 'panel',
    startsAt: '2026-05-18T11:00:00+02:00',
    endsAt: '2026-05-18T12:00:00+02:00',
    chairSlugs: ['stefano-blando', 'biancamaria-bombino'],
  },
  {
    slug: 'keynote-institutional-tbc',
    title: {
      en: 'Institutional Keynote (TBC)',
      it: 'Keynote istituzionale (TBC)',
    },
    description: {
      en: 'Institutional speech on digital transformation and technologies.',
      it: 'Intervento istituzionale su digital transformation e tecnologie.',
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
      en: 'Shared lunch break for speakers, participants, and informal discussion.',
      it: 'Pausa pranzo condivisa per relatori, partecipanti e confronto informale.',
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
      en: 'Confirmed keynote slot with Prabhani Kuruppumullage Don.',
      it: 'Slot keynote confermato con Prabhani Kuruppumullage Don.',
    },
    type: 'keynote',
    startsAt: '2026-05-18T13:45:00+02:00',
    endsAt: '2026-05-18T14:30:00+02:00',
    chairSlugs: [],
  },
  {
    slug: 'panel-2-networks-nlp',
    title: {
      en: 'Panel 2: Complexity, Innovation, and the Digital World',
      it: 'Panel 2: Complessità, innovazione e mondo digitale',
    },
    description: {
      en: 'Social, financial, and innovation networks are the fabric of society. Network analysis combined with NLP allows for deducing emergent phenomena and extracting value from complex and disaggregated data.',
      it: 'Le reti — sociali, finanziarie, dell’innovazione — sono il tessuto della società. L’analisi dei network unita alla NLP permette di dedurre fenomeni emergenti e dunque estrarre valore da dati complessi e disaggregati.',
    },
    type: 'panel',
    startsAt: '2026-05-18T14:30:00+02:00',
    endsAt: '2026-05-18T15:45:00+02:00',
    chairSlugs: ['lorenzo-emer', 'alice-musso'],
  },
  {
    slug: 'coffee-break-2',
    title: {
      en: 'Coffee Break 2',
      it: 'Coffee Break 2',
    },
    description: {
      en: 'Afternoon pause before the final keynote and closing panel.',
      it: 'Pausa pomeridiana prima della keynote finale e del panel conclusivo.',
    },
    type: 'break',
    startsAt: '2026-05-18T15:45:00+02:00',
    endsAt: '2026-05-18T16:15:00+02:00',
    chairSlugs: [],
  },
  {
    slug: 'keynote-3-tbc',
    title: {
      en: 'Keynote 3',
      it: 'Keynote 3',
    },
    description: {
      en: 'Reserved keynote slot for a senior expert on AI regulation and ethics, still to be identified.',
      it: 'Slot keynote riservato a un profilo senior su regolazione ed etica dell AI, ancora da individuare.',
    },
    type: 'keynote',
    startsAt: '2026-05-18T16:15:00+02:00',
    endsAt: '2026-05-18T17:00:00+02:00',
    chairSlugs: [],
  },
  {
    slug: 'panel-3-legal-ethics',
    title: {
      en: 'Panel 3: AI for Legal & Legal for AI Ethics',
      it: 'Panel 3: AI for Legal e Legal for AI Ethics',
    },
    description: {
      en: 'This session explores the relationship between AI and the legal sector from two complementary perspectives: the use of AI for legal purposes (e.g., predictive justice) and how regulations favor research and innovation in AI.',
      it: 'Questa sessione esplora il rapporto tra AI e settore legale sotto due prospettive complementari: l’uso dell’AI per finalità legate al settore legale (ad es. giustizia predittiva) e come le normative favoriscono la ricerca e l’innovazione sull’AI.',
    },
    type: 'panel',
    startsAt: '2026-05-18T17:00:00+02:00',
    endsAt: '2026-05-18T18:00:00+02:00',
    chairSlugs: ['roberta-romano', 'roberta-savella'],
  },
  {
    slug: 'closing-remarks',
    title: {
      en: 'Closing Remarks',
      it: 'Chiusura',
    },
    description: {
      en: 'Current working agenda closes with Francesca Chiaromonte, pending final confirmation.',
      it: 'L agenda di lavoro attuale si chiude con Francesca Chiaromonte, in attesa di conferma finale.',
    },
    type: 'closing',
    startsAt: '2026-05-18T18:00:00+02:00',
    endsAt: '2026-05-18T18:15:00+02:00',
    chairSlugs: [],
  },
  {
    slug: 'social-dinner',
    title: {
      en: 'Social Dinner',
      it: 'Cena Sociale',
    },
    description: {
      en: 'Closing dinner for speakers and invited guests. Location and details will be shared during the workshop.',
      it: 'Cena conclusiva per relatori e ospiti invitati. Luogo e dettagli saranno condivisi durante il workshop.',
    },
    type: 'social',
    startsAt: '2026-05-18T20:00:00+02:00',
    endsAt: '2026-05-18T22:30:00+02:00',
    chairSlugs: [],
  },
];

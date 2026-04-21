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
      en: 'Panel 1: AI Methods & Applications',
      it: 'Panel 1: Metodi e applicazioni dell AI',
    },
    description: {
      en: 'Working panel title from the workshop PDF. Four panel talks followed by a roundtable close.',
      it: 'Titolo provvisorio tratto dal PDF del workshop. Quattro interventi di panel seguiti da una roundtable finale.',
    },
    type: 'panel',
    startsAt: '2026-05-18T11:00:00+02:00',
    endsAt: '2026-05-18T12:00:00+02:00',
    chairSlugs: ['stefano-blando', 'biancamaria-bombino'],
  },
  {
    slug: 'keynote-pagopa',
    title: {
      en: 'Institutional Keynote — PagoPA',
      it: 'Keynote istituzionale — PagoPA',
    },
    description: {
      en: 'Institutional speech by the CEO of PagoPA on digital transformation and technologies.',
      it: 'Intervento istituzionale dell Amministratore Delegato di PagoPA su digital transformation e tecnologie.',
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
      en: 'Panel 2: Networks & NLP',
      it: 'Panel 2: Networks e NLP',
    },
    description: {
      en: 'Working panel title from the workshop PDF. Five panel talks followed by a roundtable close.',
      it: 'Titolo provvisorio tratto dal PDF del workshop. Cinque interventi di panel seguiti da una roundtable finale.',
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
      en: 'Panel 3: Legal & Ethics',
      it: 'Panel 3: Diritto ed etica',
    },
    description: {
      en: 'Working panel title from the workshop PDF. Four panel talks followed by a roundtable close.',
      it: 'Titolo provvisorio tratto dal PDF del workshop. Quattro interventi di panel seguiti da una roundtable finale.',
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
];

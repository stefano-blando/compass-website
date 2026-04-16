import type { Speaker } from './types';

export const speakers: Speaker[] = [
  {
    slug: 'guido-germano',
    name: 'Guido Germano',
    affiliation: 'University College London',
    roleLabel: {
      en: 'Keynote speaker',
      it: 'Relatore keynote',
    },
    bio: {
      en: 'Professor of Computational Science working on complex systems, economics, and computational methods.',
      it: 'Professore di Computational Science con attività su sistemi complessi, economia e metodi computazionali.',
    },
    type: ['keynote'],
  },
  {
    slug: 'prabhani-don',
    name: 'Prabhani Kuruppumullage Don',
    affiliation: 'Pennsylvania State University',
    roleLabel: {
      en: 'Panel speaker',
      it: 'Relatrice del panel',
    },
    bio: {
      en: 'Associate Professor of Statistics focused on high-dimensional data, model validation, and machine learning.',
      it: 'Associate Professor of Statistics specializzata in dati ad alta dimensionalità, validazione dei modelli e machine learning.',
    },
    type: ['panelist'],
  },
  {
    slug: 'stefano-blando',
    name: 'Stefano Blando',
    affiliation: 'Scuola Superiore Sant’Anna',
    roleLabel: {
      en: 'Panel speaker and session chair',
      it: 'Relatore del panel e coordinatore di sessione',
    },
    bio: {
      en: 'Researcher working on complex systems, empirical methods, and event coordination.',
      it: 'Ricercatore che si occupa di sistemi complessi, metodi empirici e coordinamento eventi.',
    },
    type: ['panelist', 'chair', 'organizer'],
  },
  {
    slug: 'biancamaria-bombino',
    name: 'Biancamaria Bombino',
    affiliation: 'Scuola Superiore Sant’Anna',
    roleLabel: {
      en: 'Panel speaker and session chair',
      it: 'Relatrice del panel e coordinatrice di sessione',
    },
    bio: {
      en: 'Researcher focused on policy analysis, computational social science, and workshop organization.',
      it: 'Ricercatrice focalizzata su policy analysis, social science computazionale e organizzazione di workshop.',
    },
    type: ['panelist', 'chair', 'organizer'],
  },
];

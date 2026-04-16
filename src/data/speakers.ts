import type { Speaker } from './types';

export const speakers: Speaker[] = [
  {
    slug: 'guido-germano',
    name: 'Guido Germano',
    affiliation: 'University College London',
    roleLabel: {
      en: 'Keynote Speaker',
      it: 'Keynote Speaker',
    },
    bio: {
      en: 'Professor of Computational Science working on complex systems, economics, and computational methods.',
      it: 'Professore di Computational Science con attività su sistemi complessi, economia e metodi computazionali.',
    },
    image: '/images/speakers/guido-germano.jpg',
    type: ['keynote'],
  },
  {
    slug: 'prabhani-don',
    name: 'Prabhani Kuruppumullage Don',
    affiliation: 'Pennsylvania State University',
    roleLabel: {
      en: 'Keynote Speaker',
      it: 'Keynote Speaker',
    },
    bio: {
      en: 'Associate Professor of Statistics focused on high-dimensional data, model validation, and machine learning.',
      it: 'Associate Professor of Statistics specializzata in dati ad alta dimensionalità, validazione dei modelli e machine learning.',
    },
    image: '/images/speakers/prabhani-don.jpg',
    type: ['keynote'],
  },
];

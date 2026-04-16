import type { Talk } from './types';

export const talks: Talk[] = [
  {
    slug: 'complexity-keynote',
    title: {
      en: 'Modelling Complexity Across Markets and Policy',
      it: 'Modellare la complessità tra mercati e policy',
    },
    abstract: {
      en: 'A keynote on computational models for socio-economic complexity, institutional adaptation, and policy design.',
      it: 'Una keynote sui modelli computazionali per la complessità socio-economica, l’adattamento istituzionale e il design delle policy.',
    },
    speakerSlugs: ['guido-germano'],
    sessionSlug: 'welcome-opening',
    startsAt: '2026-05-11T09:15:00+02:00',
  },
  {
    slug: 'predictive-ai-for-complex-systems',
    title: {
      en: 'Predictive AI for Complex Systems',
      it: 'AI predittiva per sistemi complessi',
    },
    abstract: {
      en: 'An applied overview of predictive pipelines, simulation loops, and uncertainty management for socio-economic systems.',
      it: 'Una panoramica applicata su pipeline predittive, cicli di simulazione e gestione dell’incertezza per sistemi socio-economici.',
    },
    speakerSlugs: ['stefano-blando'],
    sessionSlug: 'panel-ai-methods',
    startsAt: '2026-05-11T10:40:00+02:00',
  },
  {
    slug: 'robust-validation-for-policy-models',
    title: {
      en: 'Robust Validation for Policy Models',
      it: 'Validazione robusta per modelli di policy',
    },
    abstract: {
      en: 'A discussion of evaluation strategies for high-dimensional models, stressing model checking, calibration, and public-sector accountability.',
      it: 'Una discussione sulle strategie di valutazione per modelli ad alta dimensionalità, con attenzione a model checking, calibrazione e accountability nel settore pubblico.',
    },
    speakerSlugs: ['prabhani-don'],
    sessionSlug: 'panel-ai-methods',
    startsAt: '2026-05-11T11:10:00+02:00',
  },
  {
    slug: 'evidence-interfaces-for-adaptive-governance',
    title: {
      en: 'Evidence Interfaces for Adaptive Governance',
      it: 'Interfacce di evidenza per governance adattiva',
    },
    abstract: {
      en: 'How workflow design, data interpretation, and methodological transparency shape the use of AI evidence in public decision-making.',
      it: 'Come design dei workflow, interpretazione dei dati e trasparenza metodologica orientano l’uso di evidenze AI nei processi decisionali pubblici.',
    },
    speakerSlugs: ['biancamaria-bombino'],
    sessionSlug: 'panel-ai-methods',
    startsAt: '2026-05-11T11:40:00+02:00',
  },
];

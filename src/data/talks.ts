import type { Talk } from './types';

export const talks: Talk[] = [
  {
    slug: 'opening-remarks-vandin-chiaromonte',
    title: {
      en: 'Opening Remarks',
      it: 'Saluti introduttivi',
    },
    abstract: {
      en: 'Workshop welcome and institutional framing by Andrea Vandin and Francesca Chiaromonte.',
      it: 'Benvenuto al workshop e saluti istituzionali a cura di Andrea Vandin e Francesca Chiaromonte.',
    },
    speakerSlugs: ['andrea-vandin', 'francesca-chiaromonte'],
    sessionSlug: 'opening-remarks',
    startsAt: '2026-05-18T09:30:00+02:00',
  },
  {
    slug: 'keynote-guido-germano',
    title: {
      en: 'Guido Germano',
      it: 'Guido Germano',
    },
    abstract: {
      en: 'Confirmed keynote contribution by Guido Germano (University College London).',
      it: 'Contributo keynote confermato di Guido Germano (University College London).',
    },
    speakerSlugs: ['guido-germano'],
    sessionSlug: 'keynote-1',
    startsAt: '2026-05-18T09:45:00+02:00',
  },
  {
    slug: 'panel-1-alice-musso',
    title: {
      en: 'Alice Musso',
      it: 'Alice Musso',
    },
    abstract: {
      en: 'Current panel contribution on AI modeling foundations.',
      it: 'Contributo di panel sui fondamenti della modellazione AI.',
    },
    speakerSlugs: ['alice-musso'],
    sessionSlug: 'panel-1-ai-methods',
    startsAt: '2026-05-18T11:00:00+02:00',
  },
  {
    slug: 'panel-1-biancamaria-bombino',
    title: {
      en: 'Biancamaria Bombino',
      it: 'Biancamaria Bombino',
    },
    abstract: {
      en: 'Current panel contribution on predictive modeling applications.',
      it: 'Contributo di panel sulle applicazioni della modellazione predittiva.',
    },
    speakerSlugs: ['biancamaria-bombino'],
    sessionSlug: 'panel-1-ai-methods',
    startsAt: '2026-05-18T11:15:00+02:00',
  },
  {
    slug: 'panel-1-riccardo-porcedda',
    title: {
      en: 'Riccardo Porcedda',
      it: 'Riccardo Porcedda',
    },
    abstract: {
      en: 'Current panel contribution on forecasting methods.',
      it: 'Contributo di panel sui metodi di previsione.',
    },
    speakerSlugs: ['riccardo-porcedda'],
    sessionSlug: 'panel-1-ai-methods',
    startsAt: '2026-05-18T11:30:00+02:00',
  },
  {
    slug: 'panel-1-corentin-lobet',
    title: {
      en: 'Corentin Lobet',
      it: 'Corentin Lobet',
    },
    abstract: {
      en: 'Current panel contribution on socio-economic impact modeling.',
      it: 'Contributo di panel sulla modellazione dell’impatto socio-economico.',
    },
    speakerSlugs: ['corentin-lobet'],
    sessionSlug: 'panel-1-ai-methods',
    startsAt: '2026-05-18T11:45:00+02:00',
  },
  {
    slug: 'panel-1-roundtable',
    title: {
      en: 'Roundtable',
      it: 'Roundtable',
    },
    abstract: {
      en: 'Panel roundtable discussion with the session participants.',
      it: 'Discussione roundtable con i partecipanti del panel.',
    },
    speakerSlugs: [],
    sessionSlug: 'panel-1-ai-methods',
    startsAt: '2026-05-18T11:55:00+02:00',
  },
  {
    slug: 'keynote-prabhani-don',
    title: {
      en: 'Prabhani Kuruppumullage Don',
      it: 'Prabhani Kuruppumullage Don',
    },
    abstract: {
      en: 'Keynote lecture by Prabhani Kuruppumullage Don (Pennsylvania State University).',
      it: 'Lezione keynote di Prabhani Kuruppumullage Don (Pennsylvania State University).',
    },
    speakerSlugs: ['prabhani-don'],
    sessionSlug: 'keynote-2',
    startsAt: '2026-05-18T12:00:00+02:00',
  },
  {
    slug: 'keynote-federica-casarosa',
    title: {
      en: 'Federica Casarosa',
      it: 'Federica Casarosa',
    },
    abstract: {
      en: 'Confirmed keynote contribution by Federica Casarosa on law and emerging technologies.',
      it: 'Contributo keynote confermato di Federica Casarosa su diritto e tecnologie emergenti.',
    },
    speakerSlugs: ['federica-casarosa'],
    sessionSlug: 'keynote-legal',
    startsAt: '2026-05-18T13:45:00+02:00',
  },
  {
    slug: 'panel-2-roberta-romano',
    title: {
      en: 'From Risk to Protection: Vulnerability as a Benchmark for European AI Governance',
      it: 'Dal rischio alla protezione: la vulnerabilità come benchmark per la governance europea dell’IA',
    },
    abstract: {
      en: 'The advent of AI, particularly generative AI, raises numerous concerns regarding the protection of individuals most exposed to the risks arising from the pervasive use of new technologies.',
      it: 'L’avvento dell’IA, in particolare dell’IA generativa, solleva numerose preoccupazioni riguardo alla protezione degli individui più esposti ai rischi derivanti dall’uso pervasivo delle nuove tecnologie.',
    },
    speakerSlugs: ['roberta-romano'],
    sessionSlug: 'panel-2-legal-ethics',
    startsAt: '2026-05-18T14:30:00+02:00',
  },
  {
    slug: 'panel-2-roberta-savella',
    title: {
      en: 'Regulation vs Innovation? Unpacking the dichotomy to foster responsible research',
      it: 'Regolamentazione vs Innovazione? Analisi della dicotomia per favorire una ricerca responsabile',
    },
    abstract: {
      en: 'This talk will challenge the assumption that regulation stifles innovation and discuss responsible research practices.',
      it: 'Questo intervento metterà in discussione il presupposto che la regolamentazione soffochi l’innovazione e discuterà pratiche di ricerca responsabile.',
    },
    speakerSlugs: ['roberta-savella'],
    sessionSlug: 'panel-2-legal-ethics',
    startsAt: '2026-05-18T14:45:00+02:00',
  },
  {
    slug: 'panel-2-vittoria-caponecchia',
    title: {
      en: 'Significant Harm in EU Law: When Voice-Based Virtual Assistants Are Prohibited',
      it: 'Il danno significativo nel diritto dell’UE: quando gli assistenti virtuali vocali sono proibiti',
    },
    abstract: {
      en: 'Analysis of AI systems using manipulative, deceptive, or subliminal techniques that cause significant harm.',
      it: 'Analisi dei sistemi di IA che utilizzano tecniche manipolatorie, ingannevoli o subliminali che causano danni significativi.',
    },
    speakerSlugs: ['vittoria-caponecchia'],
    sessionSlug: 'panel-2-legal-ethics',
    startsAt: '2026-05-18T15:00:00+02:00',
  },
  {
    slug: 'panel-2-elio-grande',
    title: {
      en: 'Acting without action: Ethics and responsibility in AI systems (online)',
      it: 'Agire senza azione: etica e responsabilità nei sistemi di IA (online)',
    },
    abstract: {
      en: 'Building upon the recognition of the vulnerabilities of the agents involved, exploring dynamically negotiated responsibility.',
      it: 'Partendo dal riconoscimento delle vulnerabilità degli agenti coinvolti, esplorando la responsabilità negoziata dinamicamente.',
    },
    speakerSlugs: ['elio-grande'],
    sessionSlug: 'panel-2-legal-ethics',
    startsAt: '2026-05-18T15:15:00+02:00',
  },
  {
    slug: 'panel-2-roundtable',
    title: {
      en: 'Roundtable',
      it: 'Roundtable',
    },
    abstract: {
      en: 'Panel roundtable discussion with the session participants.',
      it: 'Discussione roundtable con i partecipanti del panel.',
    },
    speakerSlugs: [],
    sessionSlug: 'panel-2-legal-ethics',
    startsAt: '2026-05-18T15:25:00+02:00',
  },
  {
    slug: 'panel-3-lorenzo-emer',
    title: {
      en: 'The hidden structure of innovation networks',
      it: 'La struttura nascosta delle reti dell’innovazione',
    },
    abstract: {
      en: 'Innovation emerges from complex collaboration patterns. This study analyzes inventor and organization networks using patent data.',
      it: 'L’innovazione emerge da modelli di collaborazione complessi. Questo studio analizza le reti degli inventori e delle organizzazioni tramite i brevetti.',
    },
    speakerSlugs: ['lorenzo-emer'],
    sessionSlug: 'panel-3-complexity',
    startsAt: '2026-05-18T16:00:00+02:00',
  },
  {
    slug: 'panel-3-stefano-blando',
    title: {
      en: 'Stefano Blando',
      it: 'Stefano Blando',
    },
    abstract: {
      en: 'Current panel contribution on complex economic systems.',
      it: 'Contributo di panel sui sistemi economici complessi.',
    },
    speakerSlugs: ['stefano-blando'],
    sessionSlug: 'panel-3-complexity',
    startsAt: '2026-05-18T16:15:00+02:00',
  },
  {
    slug: 'panel-3-giuseppe-f-squillace',
    title: {
      en: 'Giuseppe Squillace (online)',
      it: 'Giuseppe Squillace (online)',
    },
    abstract: {
      en: 'Current panel contribution on digital world analysis. Participating remotely.',
      it: 'Contributo di panel sull’analisi del mondo digitale. Partecipazione da remoto.',
    },
    speakerSlugs: ['giuseppe-f-squillace'],
    sessionSlug: 'panel-3-complexity',
    startsAt: '2026-05-18T16:30:00+02:00',
  },
  {
    slug: 'panel-3-anna-gallo',
    title: {
      en: 'Anna Gallo',
      it: 'Anna Gallo',
    },
    abstract: {
      en: 'Current panel contribution on complexity and economic networks.',
      it: 'Contributo di panel sulla complessità e le reti economiche.',
    },
    speakerSlugs: ['anna-gallo'],
    sessionSlug: 'panel-3-complexity',
    startsAt: '2026-05-18T16:45:00+02:00',
  },
  {
    slug: 'panel-3-roundtable',
    title: {
      en: 'Roundtable',
      it: 'Roundtable',
    },
    abstract: {
      en: 'Panel roundtable discussion with the session participants.',
      it: 'Discussione roundtable con i partecipanti del panel.',
    },
    speakerSlugs: [],
    sessionSlug: 'panel-3-complexity',
    startsAt: '2026-05-18T17:00:00+02:00',
  },
  {
    slug: 'rector-remarks-talk',
    title: {
      en: 'Rector’s Remarks',
      it: 'Saluti del Rettore',
    },
    abstract: {
      en: 'Closing institutional address by Nicola Vitiello, Rector of Scuola Superiore Sant’Anna.',
      it: 'Saluti istituzionali conclusivi di Nicola Vitiello, Rettore della Scuola Superiore Sant’Anna.',
    },
    speakerSlugs: ['rettore-sssa'],
    sessionSlug: 'rector-remarks',
    startsAt: '2026-05-18T17:30:00+02:00',
  },
  {
    slug: 'pagopa-contribution',
    title: {
      en: 'Institutional Speaker on Digitalization and AI (TBC)',
      it: 'Relatore Istituzionale su Digitalizzazione e AI (TBC)',
    },
    abstract: {
      en: 'Expert institutional perspective on the impact of digitalization and artificial intelligence (TBC).',
      it: 'Prospettiva istituzionale esperta sull’impatto della digitalizzazione e dell’intelligenza artificiale (TBC).',
    },
    speakerSlugs: ['pagopa-speaker'],
    sessionSlug: 'pagopa-session',
    startsAt: '2026-05-18T17:45:00+02:00',
  },
  {
    slug: 'closing-remarks-talk',
    title: {
      en: 'Closing Remarks',
      it: 'Conclusioni',
    },
    abstract: {
      en: 'Final takeaway and workshop wrap-up.',
      it: 'Sintesi finale e chiusura del workshop.',
    },
    speakerSlugs: ['francesca-chiaromonte'],
    sessionSlug: 'closing-remarks',
    startsAt: '2026-05-18T18:15:00+02:00',
  },
];

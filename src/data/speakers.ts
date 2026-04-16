import type { Speaker } from './types';

export const speakers: Speaker[] = [
  {
    slug: 'andrea-vandin',
    name: 'Andrea Vandin',
    affiliation: 'Scuola Superiore Sant’Anna',
    roleLabel: {
      en: 'Opening remarks',
      it: 'Saluti introduttivi',
    },
    bio: {
      en: 'Professor at Scuola Superiore Sant’Anna delivering the opening remarks for the workshop day.',
      it: 'Professore della Scuola Superiore Sant’Anna incaricato dei saluti introduttivi della giornata.',
    },
    type: [],
  },
  {
    slug: 'guido-germano',
    name: 'Guido Germano',
    affiliation: 'University College London · Visiting professor at Scuola Superiore Sant’Anna',
    roleLabel: {
      en: 'Keynote speaker',
      it: 'Relatore keynote',
    },
    bio: {
      en: 'Professor of Computational Science with internationally recognized work on complex systems, computational methods, and economics.',
      it: 'Professore di Computational Science con attivita di rilievo internazionale su sistemi complessi, metodi computazionali ed economia.',
    },
    type: ['keynote'],
  },
  {
    slug: 'prabhani-don',
    name: 'Prabhani Kuruppumullage Don',
    affiliation: 'Pennsylvania State University',
    roleLabel: {
      en: 'Confirmed keynote speaker',
      it: 'Relatrice keynote confermata',
    },
    bio: {
      en: 'Associate Professor of Statistics specializing in advanced statistical models, high-dimensional data, and machine learning.',
      it: 'Associate Professor of Statistics specializzata in modelli statistici avanzati, dati ad alta dimensionalita e machine learning.',
    },
    type: ['keynote'],
  },
  {
    slug: 'senior-expert-ai-regulation-tbc',
    name: 'Senior Expert on AI Regulation & Ethics (TBC)',
    affiliation: 'Profile under identification',
    roleLabel: {
      en: 'Keynote slot in confirmation',
      it: 'Slot keynote in conferma',
    },
    bio: {
      en: 'Reserved keynote slot for a senior international expert on AI regulation, the AI Act, and algorithmic ethics.',
      it: 'Slot riservato a un profilo senior internazionale su regolazione dell’AI, AI Act ed etica degli algoritmi.',
    },
    type: ['keynote'],
  },
  {
    slug: 'stefano-blando',
    name: 'Stefano Blando',
    affiliation: 'Scuola Superiore Sant’Anna · PhD-AI.it, Pillar Society',
    roleLabel: {
      en: 'Track 1 co-chair and speaker',
      it: 'Relatore e co-chair della Track 1',
    },
    bio: {
      en: 'Doctoral researcher working on agent-based modeling, complex networks, and robust statistics; organizer and Track 1 co-chair.',
      it: 'Dottorando che lavora su agent-based modeling, complex networks e robust statistics; organizzatore e co-chair della Track 1.',
    },
    type: ['panelist', 'chair', 'organizer'],
  },
  {
    slug: 'biancamaria-bombino',
    name: 'Biancamaria Bombino',
    affiliation: 'CNR/IIT · PhD-AI.it, Pillar Society',
    roleLabel: {
      en: 'Track 1 co-chair and speaker',
      it: 'Relatrice e co-chair della Track 1',
    },
    bio: {
      en: 'Doctoral researcher focused on generative AI, AI methods, and signed networks; organizer and Track 1 co-chair.',
      it: 'Dottoranda focalizzata su generative AI, AI methods e signed networks; organizzatrice e co-chair della Track 1.',
    },
    type: ['panelist', 'chair', 'organizer'],
  },
  {
    slug: 'lorenzo-emer',
    name: 'Lorenzo Emer',
    affiliation: 'Scuola Superiore Sant’Anna · PhD-AI.it, Pillar Society',
    roleLabel: {
      en: 'Track 2 co-chair and speaker',
      it: 'Relatore e co-chair della Track 2',
    },
    bio: {
      en: 'Doctoral researcher on innovation networks and patents; organizer and Track 2 co-chair.',
      it: 'Dottorando che si occupa di innovation networks e patents; organizzatore e co-chair della Track 2.',
    },
    type: ['panelist', 'chair', 'organizer'],
  },
  {
    slug: 'alice-musso',
    name: 'Alice Musso',
    affiliation: 'CNR/ISTI · PhD-AI.it, Pillar Society',
    roleLabel: {
      en: 'Track 2 co-chair and speaker',
      it: 'Relatrice e co-chair della Track 2',
    },
    bio: {
      en: 'Doctoral researcher working across networks and NLP; organizer and Track 2 co-chair.',
      it: 'Dottoranda che lavora tra networks e NLP; organizzatrice e co-chair della Track 2.',
    },
    type: ['panelist', 'chair', 'organizer'],
  },
  {
    slug: 'roberta-romano',
    name: 'Roberta Romano',
    affiliation: 'Scuola Superiore Sant’Anna · PhD-AI.it, Pillar Society',
    roleLabel: {
      en: 'Track 3 co-chair and speaker',
      it: 'Relatrice e co-chair della Track 3',
    },
    bio: {
      en: 'Doctoral researcher working on AI for legal contexts; organizer and Track 3 co-chair.',
      it: 'Dottoranda che si occupa di AI for Legal; organizzatrice e co-chair della Track 3.',
    },
    type: ['panelist', 'chair', 'organizer'],
  },
  {
    slug: 'roberta-savella',
    name: 'Roberta Savella',
    affiliation: 'CNR/ISTI · PhD-AI.it, Pillar Society',
    roleLabel: {
      en: 'Track 3 co-chair and speaker',
      it: 'Relatrice e co-chair della Track 3',
    },
    bio: {
      en: 'Doctoral researcher focused on the legal and ethical aspects of AI; organizer and Track 3 co-chair.',
      it: 'Dottoranda focalizzata sugli aspetti giuridici ed etici dell’AI; organizzatrice e co-chair della Track 3.',
    },
    type: ['panelist', 'chair', 'organizer'],
  },
  {
    slug: 'simone-tonini',
    name: 'Simone Tonini',
    affiliation: 'Postdoc / Researcher',
    roleLabel: {
      en: 'Track 1 panel contributor',
      it: 'Contributo panel della Track 1',
    },
    bio: {
      en: 'Named external contributor for Track 1 on AI methods and applications; final title details are still being consolidated.',
      it: 'Contributore esterno indicato per la Track 1 su metodi e applicazioni dell’AI; i dettagli finali del titolo sono ancora in consolidamento.',
    },
    type: ['panelist'],
  },
  {
    slug: 'riccardo-porcedda',
    name: 'Riccardo Porcedda',
    affiliation: 'Guest researcher',
    roleLabel: {
      en: 'Track 2 panel contributor',
      it: 'Contributo panel della Track 2',
    },
    bio: {
      en: 'Named guest contributor for Track 2, bringing an external perspective to the networks and NLP discussion.',
      it: 'Contributore ospite indicato per la Track 2, con una prospettiva esterna sulla discussione tra networks e NLP.',
    },
    type: ['panelist'],
  },
  {
    slug: 'giuseppe-f-squillace',
    name: 'Giuseppe F. Squillace',
    affiliation: 'Guest researcher',
    roleLabel: {
      en: 'Track 2 panel contributor',
      it: 'Contributo panel della Track 2',
    },
    bio: {
      en: 'Named guest contributor for Track 2 within the workshop block on networks, innovation, and language data.',
      it: 'Contributore ospite indicato per la Track 2 nel blocco dedicato a reti, innovazione e dati linguistici.',
    },
    type: ['panelist'],
  },
  {
    slug: 'anna-gallo',
    name: 'Anna Gallo',
    affiliation: 'Guest researcher',
    roleLabel: {
      en: 'Track 2 panel contributor',
      it: 'Contributo panel della Track 2',
    },
    bio: {
      en: 'Named guest contributor for Track 2, included in the current panel draft on emergent phenomena, networks, and NLP.',
      it: 'Contributrice ospite indicata per la Track 2, inclusa nella bozza attuale del panel su fenomeni emergenti, reti e NLP.',
    },
    type: ['panelist'],
  },
  {
    slug: 'vittoria-caponecchia',
    name: 'Vittoria Caponecchia',
    affiliation: 'Legal and socio-technical research',
    roleLabel: {
      en: 'Track 3 panel contributor',
      it: 'Contributo panel della Track 3',
    },
    bio: {
      en: 'Named contributor for Track 3, adding specialist input on the legal and ethical dimensions of AI.',
      it: 'Contributrice indicata per la Track 3, con un apporto specialistico sulle dimensioni legali ed etiche dell’AI.',
    },
    type: ['panelist'],
  },
  {
    slug: 'benedetta-tessa',
    name: 'Benedetta Tessa',
    affiliation: 'Legal and socio-technical research · TBC',
    roleLabel: {
      en: 'Track 3 panel contributor (TBC)',
      it: 'Contributo panel della Track 3 (TBC)',
    },
    bio: {
      en: 'Named contributor for Track 3 and currently marked TBC in the working programme draft.',
      it: 'Contributrice indicata per la Track 3 e attualmente segnata come TBC nella bozza di programma.',
    },
    type: ['panelist'],
  },
];

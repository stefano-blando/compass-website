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
      en: 'Workshop opening speaker for the current COMPASS agenda.',
      it: 'Relatore di apertura per l agenda attuale di COMPASS.',
    },
    type: [],
  },
  {
    slug: 'rettore-sssa',
    name: 'Rettore, Scuola Superiore Sant’Anna',
    affiliation: 'Scuola Superiore Sant’Anna',
    roleLabel: {
      en: 'Opening remarks',
      it: 'Saluti introduttivi',
    },
    bio: {
      en: 'Institutional opening remarks on behalf of Scuola Superiore Sant’Anna.',
      it: 'Saluti istituzionali per conto della Scuola Superiore Sant’Anna.',
    },
    type: [],
  },
  {
    slug: 'guido-germano',
    name: 'Guido Germano',
    affiliation: 'University College London · Visiting Professor at Scuola Superiore Sant’Anna',
    roleLabel: {
      en: 'Keynote speaker',
      it: 'Relatore keynote',
    },
    image: '/images/keynote/guido_germano.png',
    bio: {
      en: 'Guido Germano is Professor of Computational Science at University College London (UCL) and Director of the MSc in Computational Finance. With a background in theoretical physical chemistry from the University of Pisa and a PhD in molecular simulation, his research focuses on financial mathematics, numerical methods for pricing derivatives, and the application of statistical physics and stochastic processes to systemic risk and complex financial systems.',
      it: 'Guido Germano è Professor of Computational Science presso lo University College London (UCL) e Direttore del Master in Computational Finance. Con una formazione in chimica fisica teorica presso l\'Università di Pisa e un dottorato in simulazione molecolare, la sua ricerca si concentra sulla matematica finanziaria, i metodi numerici per il pricing dei derivati e l\'applicazione della fisica statistica e dei processi stocastici al rischio sistemico e ai sistemi finanziari complessi.',
    },
    type: ['keynote'],
  },
  {
    slug: 'prabhani-don',
    name: 'Prabhani Kuruppumullage Don',
    affiliation: 'Pennsylvania State University',
    roleLabel: {
      en: 'Keynote speaker',
      it: 'Relatrice keynote',
    },
    image: '/images/keynote/prabhani_don.png',
    bio: {

      en: 'Prabhani Kuruppumullage Don is an Associate Research Professor and Director of Online Programs in the Department of Statistics at Pennsylvania State University. Her research focuses on computational statistics and statistical methodology for complex biological data, including bioinformatics, statistical genetics, and biostatistics. She previously held positions at the University of Rhode Island and the Harvard/Dana-Farber Cancer Institute.',
      it: 'Prabhani Kuruppumullage Don è Associate Research Professor e Direttrice dei Programmi Online presso il Dipartimento di Statistica della Pennsylvania State University. La sua ricerca si concentra sulla statistica computazionale e sulla metodologia statistica per dati biologici complessi, includendo bioinformatica, genetica statistica e biostatistica. In precedenza ha ricoperto incarichi presso la University of Rhode Island e l\'Harvard/Dana-Farber Cancer Institute.',
    },
    type: ['keynote'],
  },
  {
    slug: 'senior-expert-ai-regulation-tbc',
    name: 'Senior Expert on AI Regulation & Ethics',
    affiliation: 'To be confirmed',
    roleLabel: {
      en: 'Keynote speaker',
      it: 'Relatore keynote',
    },
    bio: {
      en: 'Reserved keynote slot (TBC) for a senior expert on AI regulation and ethics, still under identification.',
      it: 'Slot keynote riservato (TBC) a un profilo senior su regolazione ed etica dell AI, ancora in fase di individuazione.',
    },
    type: ['keynote'],
  },
  {
    slug: 'stefano-blando',
    name: 'Stefano Blando',
    affiliation: 'Scuola Superiore Sant’Anna · PhD-AI.it, Pillar Society',
    roleLabel: {
      en: 'Panel 1 chair and speaker',
      it: 'Chair e relatore del Panel 1',
    },
    image: '/images/speakers/stefano_blando.jpg',
    bio: {
      en: 'Stefano Blando is a PhD student in the National PhD Program in Artificial Intelligence at Scuola Superiore Sant’Anna and the University of Pisa. His research lies at the intersection of AI, agent-based modeling, and economics, with a focus on adaptive multi-agent systems, statistical verification of economic simulations, and robust quantitative methods for financial and socio-economic data.',
      it: 'Stefano Blando è un dottorando del Dottorato Nazionale in Intelligenza Artificiale presso la Scuola Superiore Sant’Anna e l’Università di Pisa. La sua ricerca si colloca all’intersezione tra IA, modellazione ad agenti ed economia, con un focus su sistemi multi-agente adattivi, verifica statistica di simulazioni economiche e metodi quantitativi robusti per dati finanziari e socio-economici.',
    },
    type: ['panelist', 'chair', 'organizer'],
  },
  {
    slug: 'biancamaria-bombino',
    name: 'Biancamaria Bombino',
    affiliation: 'IIT-CNR · PhD-AI.it, Pillar Society',
    roleLabel: {
      en: 'Panel 1 chair and speaker',
      it: 'Chair e relatrice del Panel 1',
    },
    bio: {
      en: 'Biancamaria Bombino is a PhD candidate at IIT-CNR. She earned her BSc in Computer Science and MSc in Data Science and Business Informatics from the University of Pisa. Her research investigates LLM-based analysis of signed networks and semantic modeling of social interactions, focusing on leveraging Large Language Models to improve the inference and modeling of positive and negative ties in online social networks.',
      it: 'Biancamaria Bombino è una dottoranda presso l\'IIT-CNR. Ha conseguito la Laurea Triennale in Informatica e la Laurea Magistrale in Data Science and Business Informatics presso l\'Università di Pisa. La sua ricerca si occupa dell\'analisi di reti segnate tramite LLM e della modellazione semantica delle interazioni sociali, con l\'obiettivo di utilizzare i Large Language Models per migliorare l\'inferenza e la modellazione dei legami positivi e negativi nelle reti sociali online.',
    },
    type: ['panelist', 'chair', 'organizer'],
  },
  {
    slug: 'lorenzo-emer',
    name: 'Lorenzo Emer',
    affiliation: 'Scuola Superiore Sant’Anna · PhD-AI.it, Pillar Society',
    roleLabel: {
      en: 'Panel 2 chair and speaker',
      it: 'Chair e relatore del Panel 2',
    },
    bio: {
      en: 'Organizer and current chair-speaker for the second panel.',
      it: 'Organizzatore e attuale chair-relatore del secondo panel.',
    },
    type: ['panelist', 'chair', 'organizer'],
  },
  {
    slug: 'alice-musso',
    name: 'Alice Musso',
    affiliation: 'ISTI-CNR · PhD-AI.it, Pillar Society',
    roleLabel: {
      en: 'Panel 2 chair and speaker',
      it: 'Chair e relatrice del Panel 2',
    },
    image: '/images/speakers/alice_musso.png',
    bio: {
      en: 'Alice Musso is a PhD student at ISTI-CNR. She holds a BSc in Foreign Languages from the University of Florence and an MSc in Linguistics from the University of Pisa. Her research focuses on applying Machine Learning and NLP techniques to Cultural Heritage, specifically for authorship analysis of ancient texts through stylistic markers such as word frequencies and punctuation usage.',
      it: 'Alice Musso è una dottoranda presso l\'ISTI-CNR. Ha conseguito la Laurea Triennale in Lingue Straniere presso l\'Università di Firenze e la Laurea Magistrale in Linguistica presso l\'Università di Pisa. La sua ricerca si concentra sull\'applicazione di tecniche di Machine Learning e NLP ai Beni Culturali, in particolare per l\'analisi della paternità dei testi antichi attraverso marcatori stilistici come la frequenza delle parole e l\'uso della punteggiatura.',
    },
    type: ['panelist', 'chair', 'organizer'],
  },
  {
    slug: 'roberta-romano',
    name: 'Roberta Romano',
    affiliation: 'Scuola Superiore Sant’Anna · PhD-AI.it, Pillar Society',
    roleLabel: {
      en: 'Panel 3 chair and speaker',
      it: 'Chair e relatrice del Panel 3',
    },
    bio: {
      en: 'Organizer and current chair-speaker for the third panel.',
      it: 'Organizzatrice e attuale chair-relatrice del terzo panel.',
    },
    type: ['panelist', 'chair', 'organizer'],
  },
  {
    slug: 'roberta-savella',
    name: 'Roberta Savella',
    affiliation: 'CNR/ISTI · PhD-AI.it, Pillar Society',
    roleLabel: {
      en: 'Panel 3 chair and speaker',
      it: 'Chair e relatrice del Panel 3',
    },
    bio: {
      en: 'Organizer and current chair-speaker for the third panel.',
      it: 'Organizzatrice e attuale chair-relatrice del terzo panel.',
    },
    type: ['panelist', 'chair', 'organizer'],
  },
  {
    slug: 'simone-tonini',
    name: 'Simone Tonini',
    affiliation: 'Affiliation to be confirmed',
    roleLabel: {
      en: 'Panel 1 speaker',
      it: 'Relatore del Panel 1',
    },
    bio: {
      en: 'Current named speaker in the first panel lineup.',
      it: 'Relatore attualmente indicato nella scaletta del primo panel.',
    },
    type: ['panelist'],
  },
  {
    slug: 'corentin-lobet',
    name: 'Corentin Lobet',
    affiliation: 'Scuola Superiore Sant’Anna',
    roleLabel: {
      en: 'Panel 1 speaker',
      it: 'Relatore del Panel 1',
    },
    image: '/images/speakers/corentin-lobet.png',
    bio: {
      en: 'Corentin Lobet is a Ph.D. Student in Economics at the Scuola Superiore Sant’Anna. His research spans from statistical modelling and explainable AI to the role of model errors in shaping inequalities and instability in society.',
      it: 'Corentin Lobet è un dottorando in Economia presso la Scuola Superiore Sant’Anna. La sua ricerca spazia dalla modellazione statistica e l’IA spiegabile al ruolo degli errori dei modelli nel plasmare le disuguaglianze e l’instabilità nella società.',
    },
    type: ['panelist'],
  },
  {
    slug: 'pagopa-ad',
    name: 'Alessandro Moricca',
    affiliation: 'CEO, PagoPA S.p.A.',
    roleLabel: {
      en: 'Keynote speaker',
      it: 'Relatore keynote',
    },
    bio: {
      en: 'Keynote on digital transformation and technologies from the CEO of PagoPA.',
      it: 'Keynote su digital transformation e tecnologie a cura dell Amministratore Delegato di PagoPA.',
    },
    type: ['keynote'],
  },
  {
    slug: 'riccardo-porcedda',
    name: 'Riccardo Porcedda',
    affiliation: 'Affiliation to be confirmed',
    roleLabel: {
      en: 'Panel 2 speaker',
      it: 'Relatore del Panel 2',
    },
    bio: {
      en: 'Current named speaker in the second panel lineup.',
      it: 'Relatore attualmente indicato nella scaletta del secondo panel.',
    },
    type: ['panelist'],
  },
  {
    slug: 'giuseppe-f-squillace',
    name: 'Giuseppe Squillace',
    affiliation: 'Affiliation to be confirmed',
    roleLabel: {
      en: 'Panel 2 speaker',
      it: 'Relatore del Panel 2',
    },
    bio: {
      en: 'Current named speaker in the second panel lineup.',
      it: 'Relatore attualmente indicato nella scaletta del secondo panel.',
    },
    type: ['panelist'],
  },
  {
    slug: 'anna-gallo',
    name: 'Anna Gallo',
    affiliation: 'Enrico Fermi Research Center (CREF)',
    roleLabel: {
      en: 'Panel 2 speaker',
      it: 'Relatrice del Panel 2',
    },
    image: '/images/speakers/anna_gallo.jpeg',
    bio: {
      en: 'Anna Gallo is a postdoctoral researcher at the Enrico Fermi Research Center (CREF) in Rome. She holds a Ph.D. in Systems Science from IMT Lucca (2025) and a degree in Mathematics from the University of Florence (2021). Her research lies at the intersection of statistical mechanics and network science, focusing on random graph models and the structural properties of complex real-world systems.',
      it: 'Anna Gallo è una ricercatrice post-doc presso il Centro Ricerche Enrico Fermi (CREF) di Roma. Ha conseguito il dottorato in Systems Science presso la IMT Lucca (2025) e la laurea in Matematica presso l’Università di Firenze (2021). La sua ricerca si colloca all’intersezione tra meccanica statistica e scienza delle reti, concentrandosi su modelli di grafi casuali e sulle proprietà strutturali dei sistemi complessi del mondo reale.',
    },
    type: ['panelist'],
  },
  {
    slug: 'vittoria-caponecchia',
    name: 'Vittoria Caponecchia',
    affiliation: 'Affiliation to be confirmed',
    roleLabel: {
      en: 'Panel 3 speaker',
      it: 'Relatrice del Panel 3',
    },
    bio: {
      en: 'Current named speaker in the third panel lineup.',
      it: 'Relatrice attualmente indicata nella scaletta del terzo panel.',
    },
    type: ['panelist'],
  },
  {
    slug: 'elio-grande',
    name: 'Elio Grande',
    affiliation: 'Affiliation to be confirmed',
    roleLabel: {
      en: 'Panel 3 speaker',
      it: 'Relatore del Panel 3',
    },
    bio: {
      en: 'Current named speaker in the third panel lineup.',
      it: 'Relatore attualmente indicato nella scaletta del terzo panel.',
    },
    type: ['panelist'],
  },
  {
    slug: 'francesca-chiaromonte',
    name: 'Francesca Chiaromonte',
    affiliation: 'Affiliation to be confirmed',
    roleLabel: {
      en: 'Closing remarks speaker (provisional)',
      it: 'Relatrice della chiusura (provvisorio)',
    },
    bio: {
      en: 'Current working agenda lists Francesca Chiaromonte for the closing remarks, pending final confirmation.',
      it: 'L agenda di lavoro attuale indica Francesca Chiaromonte per i saluti finali, in attesa di conferma finale.',
    },
    type: [],
  },
];

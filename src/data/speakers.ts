import type { Speaker } from './types';

export const speakers: Speaker[] = [
  {
    slug: 'andrea-vandin',
    name: 'Andrea Vandin',
    affiliation: {
      en: 'Sant’Anna School of Advanced Studies',
      it: 'Scuola Superiore Sant’Anna',
    },
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
    affiliation: {
      en: 'Sant’Anna School of Advanced Studies',
      it: 'Scuola Superiore Sant’Anna',
    },
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
    affiliation: {
      en: 'University College London',
      it: 'University College London',
    },
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
    affiliation: {
      en: 'Pennsylvania State University',
      it: 'Pennsylvania State University',
    },
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
    affiliation: {
      en: 'To be confirmed',
      it: 'In fase di conferma',
    },
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
    affiliation: {
      en: 'Sant’Anna School of Advanced Studies and University of Pisa',
      it: 'Scuola Superiore Sant’Anna e Università di Pisa',
    },
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
    affiliation: {
      en: 'University of Pisa and IIT-CNR',
      it: 'Università di Pisa e IIT-CNR',
    },
    roleLabel: {
      en: 'Panel 1 chair and speaker',
      it: 'Chair e relatrice del Panel 1',
    },
    image: '/images/speakers/biancamaria-bombino.jpg',
    bio: {
      en: 'Biancamaria Bombino is a PhD candidate at IIT-CNR. She earned her BSc in Computer Science and MSc in Data Science and Business Informatics from the University of Pisa. Her research investigates LLM-based analysis of signed networks and semantic modeling of social interactions, focusing on leveraging Large Language Models to improve the inference and modeling of positive and negative ties in online social networks.',
      it: 'Biancamaria Bombino è una dottoranda presso l\'IIT-CNR. Ha conseguito la Laurea Triennale in Informatica e la Laurea Magistrale in Data Science and Business Informatics presso l\'Università di Pisa. La sua ricerca si occupa dell\'analisi di reti segnate tramite LLM e della modellazione semantica delle interazioni sociali, con l\'obiettivo di utilizzare i Large Language Models per migliorare l\'inferenza e la modellazione dei legami positivi e negativi nelle reti sociali online.',
    },
    type: ['panelist', 'chair', 'organizer'],
  },
  {
    slug: 'lorenzo-emer',
    name: 'Lorenzo Emer',
    affiliation: {
      en: 'Sant’Anna School of Advanced Studies and University of Pisa',
      it: 'Scuola Superiore Sant’Anna e Università di Pisa',
    },
    roleLabel: {
      en: 'Panel 2 chair and speaker',
      it: 'Chair e relatore del Panel 2',
    },
    image: '/images/speakers/lorenzo_emer.png',
    bio: {
      en: 'Lorenzo Emer is a PhD student in Artificial Intelligence for Society at the Sant’Anna School of Advanced Studies. His academic background lies in economics and innovation management, with degrees from the University of Trento, Sant’Anna School of Advanced Studies, and the Technical University of Dresden (Germany). His research focuses on the computational analysis of science, technology, and innovation (STI), drawing on methods from network science, natural language processing, and econometrics.',
      it: 'Lorenzo Emer è un dottorando in Artificial Intelligence for Society presso la Scuola Superiore Sant’Anna. Il suo percorso accademico si concentra sull’economia e la gestione dell’innovazione, con titoli conseguiti presso l’Università di Trento, la Scuola Superiore Sant’Anna e la Technical University di Dresda (Germania). La sua ricerca si focalizza sull’analisi computazionale della scienza, della tecnologia e dell’innovazione (STI), utilizzando metodi provenienti dalla scienza delle reti, dall’elaborazione del linguaggio naturale e dall’econometria.',
    },
    type: ['panelist', 'chair', 'organizer'],
  },
  {
    slug: 'alice-musso',
    name: 'Alice Musso',
    affiliation: {
      en: 'University of Pisa and ISTI-CNR',
      it: 'Università di Pisa e ISTI-CNR',
    },
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
    affiliation: {
      en: 'University of Pisa and Sant’Anna School of Advanced Studies',
      it: 'Università di Pisa e Scuola Superiore Sant’Anna',
    },
    roleLabel: {
      en: 'Panel 3 chair and speaker',
      it: 'Chair e relatrice del Panel 3',
    },
    image: '/images/speakers/roberta_romano.png',
    bio: {
      en: 'Roberta Romano is a PhD student in Artificial Intelligence for Society at the Sant’Anna School of Advanced Studies in Pisa. She earned her Law degree from the University of Trento and has been admitted to the Bar at the Court of Appeal of Milan. She has worked for one year as a research fellow at Sant’Anna School, contributing to the PRIN project "CURA" (Children as Vulnerable Users of IoT and AI-based Technologies). Her doctoral research focuses on the protection of minors, specifically exploring the digital identity of children and adolescents through AI-based age assurance systems.',
      it: 'Roberta Romano è una dottoranda in Artificial Intelligence for Society presso la Scuola Superiore Sant’Anna di Pisa. Ha conseguito la laurea in Giurisprudenza presso l’Università di Trento ed è abilitata all’esercizio della professione forense presso la Corte d’Appello di Milano. Ha lavorato per un anno come assegnista di ricerca presso la Scuola Sant’Anna, contribuendo al progetto PRIN "CURA" (Children as Vulnerable Users of IoT and AI-based Technologies). La sua ricerca dottorale si concentra sulla protezione dei minori, esplorando specificamente l’identità digitale di bambini e adolescenti attraverso sistemi di age assurance basati sull’IA.',
    },
    type: ['panelist', 'chair', 'organizer'],
  },
  {
    slug: 'roberta-savella',
    name: 'Roberta Savella',
    affiliation: {
      en: 'University of Pisa and CNR-ISTI',
      it: 'Università di Pisa e CNR-ISTI',
    },
    roleLabel: {
      en: 'Panel 3 chair and speaker',
      it: 'Chair e relatrice del Panel 3',
    },
    image: '/images/speakers/roberta_savella.png',
    bio: {
      en: 'Roberta Savella is a PhD Student at the Italian National PhD on AI for Society. She graduated in law at University of Pisa, completed her legal traineeship at a law firm in Lucca, and has worked for two years as a research fellow at the Italian National Research Council (CNR-ISTI). Her research topics are the legal and ethical aspects of Artificial Intelligence and Big Data analysis. She is particularly interested in the interplay between regulation and innovation in the European Union and how the new digital laws can foster responsible research to create ethical technologies and protect fundamental rights.',
      it: 'Roberta Savella è una dottoranda del Dottorato Nazionale in IA per la Società. Si è laureata in giurisprudenza presso l’Università di Pisa, ha completato il tirocinio forense a Lucca e ha lavorato per due anni come assegnista di ricerca presso il CNR-ISTI. I suoi temi di ricerca riguardano gli aspetti legali ed etici dell’Intelligenza Artificiale e l’analisi dei Big Data. Si interessa in particolare dell’interazione tra regolamentazione e innovazione nell’Unione Europea e di come le nuove leggi digitali possano favorire una ricerca responsabile per creare tecnologie etiche e proteggere i diritti fondamentali.',
    },
    type: ['panelist', 'chair', 'organizer'],
  },

  {
    slug: 'panelist-tbc',
    name: 'Panelist (TBC)',
    affiliation: {
      en: 'To be confirmed',
      it: 'In fase di conferma',
    },
    roleLabel: {
      en: 'Panel speaker',
      it: 'Relatore di panel',
    },
    bio: {
      en: 'Reserved slot for a panel contributor, currently being finalized.',
      it: 'Slot riservato per un contributore del panel, in fase di definizione.',
    },
    type: ['panelist'],
  },
  {
    slug: 'simone-tonini',
    name: 'Simone Tonini',
    affiliation: {
      en: 'Sant’Anna School of Advanced Studies',
      it: 'Scuola Superiore Sant’Anna',
    },
    roleLabel: {
      en: 'PhD Student',
      it: 'Dottorando',
    },
    image: '/images/speakers/simone_tonini.png',
    bio: {
      en: 'Simone Tonini is a PhD student at Scuola Superiore Sant’Anna.',
      it: 'Simone Tonini è un dottorando presso la Scuola Superiore Sant’Anna.',
    },
    type: [],
  },
  {
    slug: 'corentin-lobet',
    name: 'Corentin Lobet',
    affiliation: {
      en: 'Sant’Anna School of Advanced Studies',
      it: 'Scuola Superiore Sant’Anna',
    },
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
    slug: 'institutional-keynote-tbc',
    name: 'Institutional Keynote',
    affiliation: {
      en: 'To be confirmed',
      it: 'In fase di conferma',
    },
    roleLabel: {
      en: 'Keynote speaker',
      it: 'Relatore keynote',
    },
    bio: {
      en: 'Institutional keynote (TBC) on digital transformation and emerging technologies.',
      it: 'Keynote istituzionale (TBC) su digital transformation e tecnologie emergenti.',
    },
    type: ['keynote'],
  },
  {
    slug: 'riccardo-porcedda',
    name: 'Riccardo Porcedda',
    affiliation: {
      en: 'Sant’Anna School of Advanced Studies and University of Pisa',
      it: 'Scuola Superiore Sant’Anna e Università di Pisa',
    },
    roleLabel: {
      en: 'Panel 2 speaker',
      it: 'Relatore del Panel 2',
    },
    image: '/images/speakers/riccardo_porcedda.png',
    bio: {
      en: 'Current named speaker in the second panel lineup.',
      it: 'Relatore attualmente indicato nella scaletta del secondo panel.',
    },
    type: ['panelist'],
  },
  {
    slug: 'giuseppe-f-squillace',
    name: 'Giuseppe Squillace',
    affiliation: {
      en: 'Sant’Anna School of Advanced Studies and Université Paris-Saclay',
      it: 'Scuola Superiore Sant’Anna e Université Paris-Saclay',
    },
    roleLabel: {
      en: 'Panel 2 speaker',
      it: 'Relatore del Panel 2',
    },
    image: '/images/speakers/giuseppe_squillace.png',
    bio: {
      en: 'Current named speaker in the second panel lineup.',
      it: 'Relatore attualmente indicato nella scaletta del secondo panel.',
    },
    type: ['panelist'],
  },
  {
    slug: 'anna-gallo',
    name: 'Anna Gallo',
    affiliation: {
      en: 'Enrico Fermi Research Center (CREF)',
      it: 'Centro Ricerche Enrico Fermi (CREF)',
    },
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
    affiliation: {
      en: 'Sant’Anna School of Advanced Studies',
      it: 'Scuola Superiore Sant’Anna',
    },
    roleLabel: {
      en: 'Panel 3 speaker',
      it: 'Relatrice del Panel 3',
    },
    image: '/images/speakers/vittoria_caponecchia.jpeg',
    bio: {
      en: 'Vittoria Caponecchia is a PhD candidate in Artificial Intelligence for Society at the Sant’Anna School of Advanced Studies in Pisa. She holds a Law degree from the University of Florence and completed her legal traineeship at a law firm in Pistoia. Her doctoral research focuses on the classification of AI systems based on the concept of significant harm, with particular attention to consumer protection.',
      it: 'Vittoria Caponecchia è una dottoranda in Artificial Intelligence for Society presso la Scuola Superiore Sant’Anna di Pisa. Ha conseguito la laurea in Giurisprudenza presso l’Università di Firenze e ha completato il tirocinio forense presso uno studio legale di Pistoia. La sua ricerca dottorale si concentra sulla classificazione dei sistemi di IA basata sul concetto di danno significativo, con particolare attenzione alla tutela dei consumatori.',
    },
    type: ['panelist'],
  },
  {
    slug: 'elio-grande',
    name: 'Elio Grande',
    affiliation: {
      en: 'University of Pisa',
      it: 'Università di Pisa',
    },
    roleLabel: {
      en: 'Panel 3 speaker',
      it: 'Relatore del Panel 3',
    },
    image: '/images/speakers/elio_grande.png',
    bio: {
      en: 'Elio Grande is an AI ethicist, now PhD Candidate in artificial intelligence at the University of Pisa. He obtained a master’s degree in moral philosophy, focused on ethics in cybernetics, and a postgraduate master in digital philosophy. His latest project concerns a double-mirror design of artificial intelligence systems, called the Endless Tuning, which allows adopting models of any depth without replacing the user and being able to trace back responsibilities in the context of decision-making. His endeavours are aimed at spreading the ethics of artificial intelligence as a policy advisor, in order to help to build fair digital ecosystems.',
      it: 'Elio Grande è un eticista dell’IA, attualmente dottorando in Intelligenza Artificiale presso l’Università di Pisa. Ha conseguito una laurea magistrale in filosofia morale, con focus sull’etica nella cibernetica, e un master di secondo livello in filosofia digitale. Il suo ultimo progetto riguarda un design a "doppio specchio" dei sistemi di intelligenza artificiale, chiamato Endless Tuning, che permette di adottare modelli di qualsiasi profondità senza sostituire l’utente e potendo risalire alle responsabilità nel contesto decisionale. Il suo impegno è volto a diffondere l’etica dell’intelligenza artificiale come consulente politico, al fine di aiutare a costruire ecosistemi digitali equi.',
    },
    type: ['panelist'],
  },
  {
    slug: 'francesca-chiaromonte',
    name: 'Francesca Chiaromonte',
    affiliation: {
      en: 'Sant’Anna School of Advanced Studies',
      it: 'Scuola Superiore Sant’Anna',
    },
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

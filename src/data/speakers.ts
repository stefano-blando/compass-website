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
      en: 'Professor of Computer Science',
      it: 'Professore di Informatica',
    },
    image: '/images/institutional/andrea-vandin.png',
    bio: {
      en: 'Andrea Vandin is a Professor of Computer Science at the Sant’Anna School of Advanced Studies. His research focuses on formal methods and software engineering for complex systems.',
      it: 'Andrea Vandin è Professore di Informatica presso la Scuola Superiore Sant’Anna. La sua ricerca si concentra sui metodi formali e l’ingegneria del software per sistemi complessi.',
    },
    type: ['institutional'],
  },
  {
    slug: 'rettore-sssa',
    name: 'Nicola Vitiello',
    affiliation: {
      en: 'Rector, Scuola Superiore Sant’Anna',
      it: 'Rettore, Scuola Superiore Sant’Anna',
    },
    roleLabel: {
      en: 'Rector',
      it: 'Rettore',
    },
    image: '/images/institutional/nicola-vitiello.png',
    bio: {
      en: 'Nicola Vitiello is the Rector of the Scuola Superiore Sant’Anna and a Professor of Bioengineering.',
      it: 'Nicola Vitiello è il Rettore della Scuola Superiore Sant’Anna e Professore di Bioingegneria.',
    },
    type: ['institutional'],
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
      en: 'Guido Germano is Professor of Computational Science at University College London (UCL).',
      it: 'Guido Germano è Professor of Computational Science presso lo University College London (UCL).',
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
      en: 'Prabhani Kuruppumullage Don is an Associate Research Professor at Pennsylvania State University.',
      it: 'Prabhani Kuruppumullage Don è Associate Research Professor presso la Pennsylvania State University.',
    },
    type: ['keynote'],
  },
  {
    slug: 'federica-casarosa',
    name: 'Federica Casarosa',
    affiliation: {
      en: 'Sant’Anna School of Advanced Studies',
      it: 'Scuola Superiore Sant’Anna',
    },
    roleLabel: {
      en: 'Keynote speaker',
      it: 'Relatrice keynote',
    },
    bio: {
      en: 'Federica Casarosa is a Research affiliate at the Sant\'Anna School of Advanced Studies. Since graduating in Private Law (University of Pisa, 2001) and subsequently obtaining a PhD in Law (European University Institute, 2008), she has focused on the intersection between law and technology, analysing the role of information in consumer contracts, protection of personal data of consumers and Internet users in general, and the impact of cybersecurity regulation on private law. She has experience training legal professionals in her role as scientific coordinator on various training projects led by the Centre for Judicial Cooperation (EUI).',
      it: 'Federica Casarosa è ricercatrice affiliata presso la Scuola Superiore Sant’Anna. Dopo la laurea in Diritto Privato (Università di Pisa, 2001) e il dottorato in Giurisprudenza (Istituto Universitario Europeo, 2008), si è concentrata sull’intersezione tra diritto e tecnologia, analizzando il ruolo dell’informazione nei contratti dei consumatori, la protezione dei dati personali e l’impatto della regolamentazione della cybersicurezza sul diritto privato. Ha maturato esperienza nella formazione di professionisti legali come coordinatrice scientifica di vari progetti guidati dal Centre for Judicial Cooperation (EUI).',
    },
    links: {
      website: 'https://www.santannapisa.it/it/federica-casarosa',
    },
    image: '/images/keynote/federica-casarosa.png',
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
      en: 'Panel 3 chair and speaker',
      it: 'Chair e relatore del Panel 3',
    },
    image: '/images/speakers/stefano_blando.jpg',
    bio: {
      en: 'Stefano Blando is a PhD student in the National PhD Program in Artificial Intelligence at Scuola Superiore Sant’Anna and the University of Pisa. His research lies at the intersection of AI, agent-based modeling, and economics. He studies adaptive multi-agent systems, statistical verification of economic simulations, and robust quantitative methods for financial and socio-economic data.',
      it: 'Stefano Blando è un dottorando del Dottorato Nazionale in Intelligenza Artificiale presso la Scuola Superiore Sant’Anna e l’Università di Pisa. La sua ricerca si colloca all’intersezione tra IA, modellazione ad agenti ed economia. Studia sistemi multi-agente adattivi, verifica statistica di simulazioni economiche e metodi quantitativi robusti per dati finanziari e socio-economici.',
    },
    links: {
      website: 'https://stefano-blando.github.io/en/',
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
      en: 'Biancamaria Bombino is a PhD candidate at IIT-CNR.',
      it: 'Biancamaria Bombino è una dottoranda presso l\'IIT-CNR.',
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
      en: 'Panel 3 chair and speaker',
      it: 'Chair e relatore del Panel 3',
    },
    image: '/images/speakers/lorenzo_emer.png',
    bio: {
      en: 'Lorenzo Emer is a PhD student in Artificial Intelligence for Society.',
      it: 'Lorenzo Emer è un dottorando in Artificial Intelligence for Society.',
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
      en: 'Panel 1 chair and speaker',
      it: 'Chair e relatrice del Panel 1',
    },
    image: '/images/speakers/alice_musso.png',
    bio: {
      en: 'Alice Musso is a PhD student at ISTI-CNR.',
      it: 'Alice Musso è una dottoranda presso l\'ISTI-CNR.',
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
      en: 'Panel 2 chair and speaker',
      it: 'Chair e relatrice del Panel 2',
    },
    image: '/images/speakers/roberta_romano.png',
    bio: {
      en: 'Roberta Romano is a PhD student in Artificial Intelligence for Society.',
      it: 'Roberta Romano è una dottoranda in Artificial Intelligence for Society.',
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
      en: 'Panel 2 chair and speaker',
      it: 'Chair e relatrice del Panel 2',
    },
    image: '/images/speakers/roberta_savella.png',
    bio: {
      en: 'Roberta Savella is a PhD Student at the Italian National PhD on AI for Society.',
      it: 'Roberta Savella è una dottoranda del Dottorato Nazionale in IA per la Società.',
    },
    type: ['panelist', 'chair', 'organizer'],
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
      en: 'Corentin Lobet is a Ph.D. Student at the Scuola Superiore Sant’Anna.',
      it: 'Corentin Lobet è un dottorando presso la Scuola Superiore Sant’Anna.',
    },
    type: ['panelist'],
  },
  {
    slug: 'riccardo-porcedda',
    name: 'Riccardo Porcedda',
    affiliation: {
      en: 'Sant’Anna School of Advanced Studies and University of Pisa',
      it: 'Scuola Superiore Sant’Anna e Università di Pisa',
    },
    roleLabel: {
      en: 'Panel 1 speaker',
      it: 'Relatore del Panel 1',
    },
    image: '/images/speakers/riccardo_porcedda.png',
    bio: {
      en: 'Riccardo Porcedda is a PhD student in Artificial Intelligence at the University of Pisa and Scuola Superiore Sant’Anna. His research focuses mostly on graph neural networks and synthetic network generation, with a recent focus on role discovery. He holds a background in Physics and Data Science and has been a visiting researcher at the Complexity Science Hub in Vienna and RWTH Aachen University. He also had experiences in startups working in the field of xAI, and liquidity optimization in financial networks (entering also the Fintech Milano Hub of Banca d\'Italia for the project "B2Bridge" while being Chief Data Officer of Liqex Srl). In December 2025 he founded Little-g.AI, a startup focused on the development of efficient foundational models alternatives to LLMs, focusing on applications on the academic publishing processes.',
      it: 'Riccardo Porcedda è un dottorando in Intelligenza Artificiale presso l’Università di Pisa e la Scuola Superiore Sant’Anna. La sua ricerca si concentra principalmente sulle reti neurali a grafo e sulla generazione di reti sintetiche, con un recente focus sulla scoperta dei ruoli. Ha un background in Fisica e Data Science ed è stato ricercatore ospite presso il Complexity Science Hub di Vienna e la RWTH Aachen University. Ha inoltre maturato esperienze in startup che operano nel campo della xAI e nell’ottimizzazione della liquidità nelle reti finanziarie (entrando anche nel Fintech Milano Hub di Banca d’Italia per il progetto "B2Bridge" come Chief Data Officer di Liqex Srl). Nel dicembre 2025 ha fondato Little-g.AI, una startup focalizzata sullo sviluppo di modelli fondazionali efficienti alternativi agli LLM, con particolare attenzione alle applicazioni nei processi di pubblicazione accademica.',
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
      en: 'Panel 3 speaker',
      it: 'Relatore del Panel 3',
    },
    image: '/images/speakers/giuseppe_squillace.png',
    bio: {
      en: 'Giuseppe Squillace is a speaker in the third panel.',
      it: 'Giuseppe Squillace è un relatore nel terzo panel.',
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
      en: 'Panel 3 speaker',
      it: 'Relatrice del Panel 3',
    },
    image: '/images/speakers/anna_gallo.jpeg',
    bio: {
      en: 'Anna Gallo is a postdoctoral researcher at CREF.',
      it: 'Anna Gallo è una ricercatrice post-doc presso il CREF.',
    },
    type: ['panelist'],
  },
  {
    slug: 'vittoria-caponecchia',
    name: 'Vittoria Caponecchia',
    affiliation: {
      en: 'Sant’Anna School of Advanced Studies and University of Pisa',
      it: 'Scuola Superiore Sant’Anna e Università di Pisa',
    },
    roleLabel: {
      en: 'Panel 2 speaker',
      it: 'Relatrice del Panel 2',
    },
    image: '/images/speakers/vittoria_caponecchia.jpeg',
    bio: {
      en: 'Vittoria Caponecchia is a PhD candidate in Artificial Intelligence for Society.',
      it: 'Vittoria Caponecchia è una dottoranda in Artificial Intelligence for Society.',
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
      en: 'Panel 2 speaker',
      it: 'Relatore del Panel 2',
    },
    image: '/images/speakers/elio_grande.png',
    bio: {
      en: 'Elio Grande is an AI ethicist and PhD Candidate.',
      it: 'Elio Grande è un eticista dell’IA e dottorando.',
    },
    type: ['panelist'],
  },
  {
    slug: 'pagopa-speaker',
    name: 'Institutional AI Expert (TBC)',
    affiliation: {
      en: 'Institutional Partner',
      it: 'Partner Istituzionale',
    },
    roleLabel: {
      en: 'Keynote speaker',
      it: 'Relatore keynote',
    },
    bio: {
      en: 'Expert institutional contribution (TBC) on digitalization and artificial intelligence.',
      it: 'Contributo istituzionale esperto (TBC) su digitalizzazione e intelligenza artificiale.',
    },
    type: ['keynote'],
  },
  {
    slug: 'francesca-chiaromonte',
    name: 'Francesca Chiaromonte',
    affiliation: {
      en: 'Sant’Anna School of Advanced Studies',
      it: 'Scuola Superiore Sant’Anna',
    },
    roleLabel: {
      en: 'Professor of Statistics',
      it: 'Professoressa di Statistica',
    },
    image: '/images/institutional/francesca-chiaromonte.png',
    bio: {
      en: 'Francesca Chiaromonte is a Professor of Statistics at the Sant’Anna School of Advanced Studies.',
      it: 'Francesca Chiaromonte è professoressa di Statistica presso la Scuola Superiore Sant’Anna.',
    },
    type: ['institutional'],
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
      en: 'Reserved slot for a panel contributor.',
      it: 'Slot riservato per un contributore del panel.',
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
];

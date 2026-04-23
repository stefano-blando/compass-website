import type { Locale } from './types';

export const locales: Locale[] = ['en', 'it'];
export const defaultLocale: Locale = 'en';
export const sitePageKeys = ['home', 'programme', 'speakers', 'venue', 'registration', 'about', 'organizers', 'faq'] as const;

export type SitePageKey = (typeof sitePageKeys)[number];

export const siteConfig = {
  name: 'COMPASS',
  fullTitle: 'COmplexity, Markets, Policy, and AI in Social Systems',
  subtitle: 'Navigating the Complexity of Socio-Economic Systems',
  eventDate: '18 May 2026',
  alternateDate: '',
  venue: 'Aula 3, Scuola Superiore Sant’Anna, Pisa',
  registrationUrl: '/registration',
} as const;

export const navLabels = {
  en: {
    home: 'Home',
    programme: 'Programme',
    speakers: 'Speakers',
    venue: 'Venue',
    registration: 'Registration',
    about: 'About',
    organizers: 'Organizers',
    faq: 'FAQ',
    register: 'Register',
    viewProgramme: 'View Programme',
  },
  it: {
    home: 'Inizio',
    programme: 'Programma',
    speakers: 'Relatori',
    venue: 'Sede',
    registration: 'Registrazione',
    about: 'Chi siamo',
    organizers: 'Organizzatori',
    faq: 'FAQ',
    register: 'Registrati',
    viewProgramme: 'Vedi il programma',
  },
} as const;

export const siteIdentity = {
  en: {
    fullTitle: siteConfig.fullTitle,
  },
  it: {
    fullTitle: 'COmplexity, Mercati, Policy e AI nei sistemi sociali',
  },
} as const satisfies Record<Locale, { fullTitle: string }>;

export const chromeLabels = {
  en: {
    mainNavigation: 'Main navigation',
    languageSwitcher: 'Language switcher',
    switchLocale: {
      en: 'Switch to English',
      it: 'Switch to Italian',
    },
  },
  it: {
    mainNavigation: 'Navigazione principale',
    languageSwitcher: 'Selettore della lingua',
    switchLocale: {
      en: 'Passa alla versione inglese',
      it: 'Passa alla versione italiana',
    },
  },
} as const satisfies Record<
  Locale,
  {
    mainNavigation: string;
    languageSwitcher: string;
    switchLocale: Record<Locale, string>;
  }
>;

export const pageMetadata = {
  en: {
    home: {
      title: `COMPASS | ${siteIdentity.en.fullTitle}`,
      description: 'COMPASS is a one-day academic workshop in Pisa with keynotes, panels, and interdisciplinary discussion on complexity, markets, policy, and AI.',
    },
    programme: {
      title: 'Programme | COMPASS',
      description: 'Current COMPASS programme with opening, keynote lectures, panel sessions, breaks, and the closing social dinner.',
    },
    speakers: {
      title: 'Speakers | COMPASS',
      description: 'Current speaker list for COMPASS, including keynote guests, organizers, chairs, and named panel contributors.',
    },
    venue: {
      title: 'Venue | COMPASS',
      description: 'Travel notes, access details, and venue guidance for COMPASS attendees.',
    },
    registration: {
      title: 'Registration | COMPASS',
      description: 'Participation guidance and registration form for the COMPASS workshop.',
    },
    about: {
      title: 'About | COMPASS',
      description: 'COMPASS workshop mission and interdisciplinary positioning.',
    },
    organizers: {
      title: 'Organizers | COMPASS',
      description: 'Organizing committee overview and institutional context for COMPASS.',
    },
    faq: {
      title: 'FAQ | COMPASS',
      description: 'Practical workshop questions, logistics, and quick answers.',
    },
  },
  it: {
    home: {
      title: `COMPASS | ${siteIdentity.it.fullTitle}`,
      description: 'COMPASS e un workshop accademico di una giornata a Pisa con keynote, panel e confronto interdisciplinare su complessita, mercati, policy e AI.',
    },
    programme: {
      title: 'Programma | COMPASS',
      description: 'Programma attuale di COMPASS con apertura, keynote, panel, pause, pranzo e cena sociale conclusiva.',
    },
    speakers: {
      title: 'Relatori | COMPASS',
      description: 'Elenco attuale dei relatori di COMPASS, con keynote, organizzatori, chair e contributori di panel nominati.',
    },
    venue: {
      title: 'Sede | COMPASS',
      description: 'Indicazioni di viaggio, accesso e logistica per i partecipanti a COMPASS.',
    },
    registration: {
      title: 'Registrazione | COMPASS',
      description: 'Modalità di partecipazione e modulo di registrazione per il workshop COMPASS.',
    },
    about: {
      title: 'Chi siamo | COMPASS',
      description: 'Missione del workshop COMPASS e posizionamento interdisciplinare.',
    },
    organizers: {
      title: 'Organizzatori | COMPASS',
      description: 'Panoramica del comitato organizzatore e del contesto istituzionale di COMPASS.',
    },
    faq: {
      title: 'FAQ | COMPASS',
      description: 'Domande pratiche sul workshop, logistica e risposte rapide.',
    },
  },
} as const satisfies Record<Locale, Record<SitePageKey, { title: string; description: string }>>;

export type HomepageMediaShowcaseContent = {
  eyebrow: string;
  title: string;
  intro: string;
  videoLabel: string;
  items: Array<{
    title: string;
    body: string;
    mediaLabel: string;
    image?: string;
  }>;
};

export const homepageMediaShowcaseContent = {
  en: {
    eyebrow: 'Media showcase',
    title: 'A visual snapshot of the workshop day',
    intro: 'A gathering at Scuola Superiore Sant’Anna, pairing the historic venue with the interdisciplinary conversations that define COMPASS.',
    videoLabel: 'Workshop overview',
    items: [
      { title: 'The venue', body: 'Aula 3 and the academic setting of Sant’Anna, Pisa.', mediaLabel: 'Aula 3 Campus', image: '/images/venue/aula3_a.jpg' },
      { title: 'The programme', body: 'A shared scientific arc across methods, networks, and policy.', mediaLabel: 'Workshop Sessions', image: '/images/venue/SSSA_vista_alto.png' },
      { title: 'The team', body: 'Doctoral organizers and invited speakers working together.', mediaLabel: 'Organizing Committee', image: '/images/venue/SSSA_chiostro_interno.png' },
    ],
  },
  it: {
    eyebrow: 'Rassegna media',
    title: 'Uno sguardo sulla giornata del workshop',
    intro: 'Un incontro alla Scuola Superiore Sant’Anna, dove la sede storica incontra le conversazioni interdisciplinari di COMPASS.',
    videoLabel: 'Panoramica del workshop',
    items: [
      { title: 'La sede', body: 'L’Aula 3 e il contesto accademico della Sant’Anna a Pisa.', mediaLabel: 'Aula 3 Campus', image: '/images/venue/aula3_a.jpg' },
      { title: 'Il programma', body: 'Un arco scientifico condiviso tra metodi, reti e policy.', mediaLabel: 'Sessioni Workshop', image: '/images/venue/SSSA_vista_alto.png' },
      { title: 'Il team', body: 'Dottorandi organizzatori e relatori che lavorano insieme.', mediaLabel: 'Comitato Organizzatore', image: '/images/venue/SSSA_chiostro_interno.png' },
    ],
  },
} as const satisfies Record<Locale, HomepageMediaShowcaseContent>;

export type ProgrammePageContent = {
  title: string;
  intro: string;
  sectionLabel: string;
  compactTalkLabel: string;
  detailNote: string;
  cards: string[];
};

export const programmePageContent = {
  en: {
    title: 'The programme at a glance',
    intro: 'The timeline below keeps the schedule intact while the supporting copy explains the structure around it.',
    sectionLabel: 'Details outside the timeline',
    compactTalkLabel: 'Compact talk notes',
    detailNote: 'Use these notes for the workshop framing, not for the individual session cards.',
    cards: [
      'Opening remarks, keynotes, and chair-led panels stay easy to scan.',
      'Breaks and lunch remain visible as part of the day structure.',
      'Closing remarks and the social dinner stay grouped with the supporting copy.',
    ],
  },
  it: {
    title: 'Il programma in sintesi',
    intro: 'La timeline sottostante mantiene intatta l agenda mentre il copy di supporto spiega la struttura attorno ad essa.',
    sectionLabel: 'Dettagli fuori dalla timeline',
    compactTalkLabel: 'Note compatte sui talk',
    detailNote: 'Queste note servono per il framing del workshop, non per le singole sessioni.',
    cards: [
      'Saluti iniziali, keynote e panel guidati dai chair restano facili da leggere.',
      'Pause e lunch restano visibili come parte della struttura della giornata.',
      'Closing remarks e cena sociale restano nel copy di supporto.',
    ],
  },
} as const satisfies Record<Locale, ProgrammePageContent>;

export type RichPageSection = {
  eyebrow: string;
  title: string;
  body: string;
  mediaLabel: string;
  mediaType: 'portrait-grid' | 'landscape' | 'video' | 'info-panel';
  image?: string;
  images?: string[];
  bullets?: string[];
};

export type RichPageContent = {
  hero: {
    eyebrow: string;
    title: string;
    intro: string;
    mediaLabel: string;
    mediaType: 'portrait-grid' | 'landscape' | 'video' | 'speaker-network';
    image?: string;
  };
  sections: RichPageSection[];
  ctaLabel?: string;
};

type RichPageKey = Exclude<SitePageKey, 'home' | 'programme'>;

export const richPageContent = {
  en: {
    about: {
      hero: {
        eyebrow: 'About COMPASS',
        title: 'Defining a new interdisciplinary boundary',
        intro: 'COMPASS brings together complexity science, AI, economics, law, philosophy, and statistics to investigate how emerging technologies are reshaping social and market structures.',
        mediaLabel: 'About COMPASS mission',
        mediaType: 'landscape',
        image: '/images/venue/SSSA_chiostro_interno.png',
      },
      sections: [
        {
          eyebrow: 'Mission',
          title: 'Why this workshop exists',
          body: 'The workshop provides a shared stage for complexity science, AI, markets, policy, and law, ensuring that academic discussion remains truly interdisciplinary from the outset.',
          mediaLabel: 'Mission and Vision',
          mediaType: 'info-panel',
          bullets: [
            'Rigorous academic focus on emerging technologies.',
            'Bridging the gap between quantitative methods and institutional frameworks.',
          ],
        },
        {
          eyebrow: 'Format',
          title: 'How the day is organised',
          body: 'A compact, single-day structure featuring keynote lectures, plenary sessions, and dedicated discussion space in a shared room to foster a unified scientific dialogue.',
          mediaLabel: 'Workshop format',
          mediaType: 'landscape',
          bullets: [
            'Single room for a shared scientific arc.',
            'Breaks and meals as deliberate discussion time.',
          ],
        },
        {
          eyebrow: 'Audience',
          title: 'Who should attend',
          body: 'The workshop is designed for doctoral researchers, faculty members, and practitioners working at the intersection of AI, policy, and social complexity.',
          mediaLabel: 'Target audience',
          mediaType: 'info-panel',
          bullets: [
            'Doctoral candidates from across the National PhD Program.',
            'Scholars interested in the impact of AI on socio-economic systems.',
          ],
        },
      ],
      ctaLabel: 'Read the programme',
    },
    speakers: {
      hero: {
        eyebrow: 'Speakers',
        title: 'Leading voices at the intersection of AI and Society',
        intro: 'A gathering of international keynote guests, academic organizers, and doctoral researchers driving the interdisciplinary dialogue.',
        mediaLabel: 'Speakers network',
        mediaType: 'speaker-network',
      },
      sections: [],
    },
    venue: {
      hero: {
        eyebrow: 'Venue',
        title: 'Academic excellence in the heart of Pisa',
        intro: 'Scuola Superiore Sant’Anna provides the historic and intellectual backdrop for COMPASS sessions and networking.',
        mediaLabel: 'Sant’Anna campus',
        mediaType: 'landscape',
        image: '/images/venue/SSSA_vista_alto.png',
      },
      sections: [
        {
          eyebrow: 'Location',
          title: 'Scuola Superiore Sant’Anna',
          body: 'The workshop is held at the historic campus of Sant’Anna, an institution dedicated to high-level research and education in the heart of Pisa.',
          mediaLabel: 'Sant’Anna location',
          mediaType: 'landscape',
          image: '/images/venue/aula3_a.jpg',
          bullets: ['Central Pisa location.', 'Aula 3 and nearby networking areas.'],
        },
        {
          eyebrow: 'Travel',
          title: 'Reaching the Campus',
          body: 'The campus is easily accessible from Pisa Centrale station and Galileo Galilei airport, making it convenient for international attendees.',
          mediaLabel: 'Travel and directions',
          mediaType: 'landscape',
          image: '/images/venue/SSSA_entrata_arco.png',
          bullets: ['Rail: Pisa Centrale Station.', 'Air: Galileo Galilei International Airport.'],
        },
        {
          eyebrow: 'Logistics',
          title: 'Workshop Attendance',
          body: 'On-site registration and session access will be managed at the main entrance, with short walking distances between all workshop areas.',
          mediaLabel: 'On-site logistics',
          mediaType: 'landscape',
          image: '/images/venue/SSSA_parco.png',
          bullets: ['Checked-in attendee access.', 'Walking campus layout.'],
        },
      ],
      ctaLabel: 'View the programme',
    },
    registration: {
      hero: {
        eyebrow: 'Registration',
        title: 'Secure your place at COMPASS',
        intro: 'Participation is free but registration is mandatory. Join us for a day of interdisciplinary exchange at Scuola Superiore Sant’Anna.',
        mediaLabel: 'Registration portal',
        mediaType: 'landscape',
        image: '/images/venue/aula3_b.jpg',
      },
      sections: [
        {
          eyebrow: 'Attendance',
          title: 'Join the Workshop',
          body: 'Registration is required for all attendees to ensure proper room capacity and logistics management.',
          mediaLabel: 'Registration form',
          mediaType: 'info-panel',
          bullets: ['Mandatory for all participants.', 'Complete the form below to secure your place.'],
        },
        {
          eyebrow: 'Checklist',
          title: 'Before you Register',
          body: 'Ensure your travel plans align with the workshop date. Once registered, you will receive confirmation and arrival details.',
          mediaLabel: 'Registration checklist',
          mediaType: 'portrait-grid',
          bullets: ['Confirm availability for 18 May 2026.', 'Prepare your affiliation details.'],
        },
      ],
      ctaLabel: 'Open the registration form',
    },
    organizers: {
      hero: {
        eyebrow: 'Organizers',
        title: 'Academic and operational coordination',
        intro: 'COMPASS is organized by the six panel chairs, all doctoral researchers from the National PhD Program in AI, with the support of our partner institutions.',
        mediaLabel: 'Organizing committee',
        mediaType: 'landscape',
        image: '/images/venue/SSSA_parco_vista_colonne.png',
      },
      sections: [
        {
          eyebrow: 'Committee',
          title: 'The Organizing Team',
          body: 'The scientific program and logistics are coordinated by the six thematic panel chairs, representing the interdisciplinary breadth of the National PhD Program in Artificial Intelligence.',
          mediaLabel: 'Committee overview',
          mediaType: 'portrait-grid',
          bullets: ['Six Doctoral Panel Chairs.', 'National PhD Program in AI (PhD-AI.it).'],
        },
        {
          eyebrow: 'Acknowledgements',
          title: 'Supporting Institutions',
          body: 'This event is made possible by a scientific initiative grant from the University of Pisa, the hosting and support of Scuola Superiore Sant’Anna, and the coordination of the National PhD Program in AI.',
          mediaLabel: 'Supporting institutions',
          mediaType: 'landscape',
          bullets: ['University of Pisa (Scientific Grant).', 'Scuola Superiore Sant’Anna (Venue & Support).', 'National PhD Program in AI (Coordination).'],
        },
        {
          eyebrow: 'Contact',
          title: 'Get in Touch',
          body: 'For general inquiries or operational clarifications, please reach out to the organizing committee directly via email.',
          mediaLabel: 'Contact information',
          mediaType: 'info-panel',
          bullets: ['General workshop inquiries.', 'Operational follow-up.'],
        },
      ],
    },
    faq: {
      hero: {
        eyebrow: 'FAQ',
        title: 'Essential information for participants',
        intro: 'Quick answers to common questions about logistics, participation, and workshop materials.',
        mediaLabel: 'FAQ overview',
        mediaType: 'landscape',
        image: '/images/venue/SSSA_vista_alto.png',
      },
      sections: [
        {
          eyebrow: 'Participation',
          title: 'General Questions',
          body: 'Participation is free of charge and the event is designed for in-person attendance to maximize discussion and networking.',
          mediaLabel: 'Participation FAQ',
          mediaType: 'info-panel',
          bullets: ['Registration is mandatory.', 'Attendance is free of charge.'],
        },
        {
          eyebrow: 'Logistics',
          title: 'Venue and Travel',
          body: 'The workshop takes place at the main Sant’Anna campus in central Pisa. Detailed arrival notes will be sent to registered participants.',
          mediaLabel: 'Logistics FAQ',
          mediaType: 'landscape',
          bullets: ['Historic campus location.', 'Travel guidance provided upon registration.'],
        },
        {
          eyebrow: 'Materials',
          title: 'Slides and Documentation',
          body: 'Presentations and session materials will be made available to participants after the event, subject to speaker consent.',
          mediaLabel: 'Materials FAQ',
          mediaType: 'info-panel',
          bullets: ['Post-event material sharing.', 'Language: English.'],
        },
      ],
      ctaLabel: 'Email the organizers',
    },
  },
  it: {
    about: {
      hero: {
        eyebrow: 'Chi siamo',
        title: 'Definire un nuovo confine interdisciplinare',
        intro: 'COMPASS unisce scienza della complessità, AI, economia, diritto, filosofia e statistica per indagare come le tecnologie emergenti stiano rimodellando le strutture sociali e di mercato.',
        mediaLabel: 'Missione di COMPASS',
        mediaType: 'landscape',
        image: '/images/venue/SSSA_chiostro_interno.png',
      },
      sections: [
        {
          eyebrow: 'Missione',
          title: 'Perché esiste questo workshop',
          body: 'Il workshop offre un palcoscenico condiviso per la scienza della complessità, l’AI, i mercati, le policy e il diritto, garantendo che il confronto accademico resti autenticamente interdisciplinare fin dall’inizio.',
          mediaLabel: 'Visione e Missione',
          mediaType: 'info-panel',
          bullets: [
            'Focus accademico rigoroso sulle tecnologie emergenti.',
            'Un ponte tra metodi quantitativi e quadri istituzionali.',
          ],
        },
        {
          eyebrow: 'Formato',
          title: 'Come è organizzata la giornata',
          body: 'Una struttura compatta di una sola giornata con keynote lecture, sessioni plenarie e spazi dedicati alla discussione in un’unica sala per favorire un dialogo scientifico unitario.',
          mediaLabel: 'Formato del workshop',
          mediaType: 'landscape',
          bullets: [
            'Un’unica sala per un percorso scientifico condiviso.',
            'Pause e pasti come tempo deliberato per il networking accademico.',
          ],
        },
        {
          eyebrow: 'Pubblico',
          title: 'A chi si rivolge',
          body: 'Il workshop è pensato per dottorandi, docenti e professionisti che operano all’intersezione tra AI, policy e complessità sociale.',
          mediaLabel: 'Pubblico target',
          mediaType: 'info-panel',
          bullets: [
            'Candidati dottorali provenienti da diverse aree del Dottorato Nazionale.',
            'Studiosi interessati all’impatto dell’AI sui sistemi socio-economici.',
          ],
        },
      ],
      ctaLabel: 'Leggi il programma',
    },
    speakers: {
      hero: {
        eyebrow: 'Relatori',
        title: 'Voci di rilievo all’intersezione tra AI e Società',
        intro: 'Un incontro di ospiti keynote internazionali, organizzatori accademici e ricercatori dottorali che guidano il dialogo interdisciplinare.',
        mediaLabel: 'Rete dei relatori',
        mediaType: 'speaker-network',
      },
      sections: [],
    },
    venue: {
      hero: {
        eyebrow: 'Sede',
        title: 'Eccellenza accademica nel cuore di Pisa',
        intro: 'La Scuola Superiore Sant’Anna offre la cornice storica e intellettuale per le sessioni e il networking di COMPASS.',
        mediaLabel: 'Campus Sant’Anna',
        mediaType: 'landscape',
        image: '/images/venue/SSSA_vista_alto.png',
      },
      sections: [
        {
          eyebrow: 'Posizione',
          title: 'Scuola Superiore Sant’Anna',
          body: 'Il workshop si tiene presso lo storico campus della Sant’Anna, un’istituzione dedicata alla ricerca e alla formazione di alto livello nel centro di Pisa.',
          mediaLabel: 'Sede Sant’Anna',
          mediaType: 'landscape',
          image: '/images/venue/aula3_a.jpg',
          bullets: ['Posizione nel centro di Pisa.', 'Aula 3 e aree di networking limitrofe.'],
        },
        {
          eyebrow: 'Viaggio',
          title: 'Come raggiungere il Campus',
          body: 'Il campus è facilmente raggiungibile dalla stazione di Pisa Centrale e dall’aeroporto Galileo Galilei, rendendo agevole la partecipazione anche per gli ospiti internazionali.',
          mediaLabel: 'Viaggio e direzioni',
          mediaType: 'landscape',
          image: '/images/venue/SSSA_entrata_arco.png',
          bullets: ['Treno: Stazione Pisa Centrale.', 'Aereo: Aeroporto Internazionale Galileo Galilei.'],
        },
        {
          eyebrow: 'Logistica',
          title: 'Partecipazione al Workshop',
          body: 'La registrazione in loco e l’accesso alle sessioni saranno gestiti presso l’ingresso principale, con brevi distanze a piedi tra tutte le aree del workshop.',
          mediaLabel: 'Logistica in loco',
          mediaType: 'landscape',
          image: '/images/venue/SSSA_parco.png',
          bullets: ['Accesso per partecipanti registrati.', 'Layout del campus compatto.'],
        },
      ],
      ctaLabel: 'Vedi il programma',
    },
    registration: {
      hero: {
        eyebrow: 'Registrazione',
        title: 'Assicura il tuo posto a COMPASS',
        intro: 'La partecipazione è gratuita ma la registrazione è obbligatoria. Unisciti a noi per una giornata di scambio interdisciplinare alla Scuola Superiore Sant’Anna.',
        mediaLabel: 'Portale di registrazione',
        mediaType: 'landscape',
        image: '/images/venue/aula3_b.jpg',
      },
      sections: [
        {
          eyebrow: 'Partecipazione',
          title: 'Iscriviti al Workshop',
          body: 'La registrazione è necessaria per tutti i partecipanti per garantire la corretta gestione della capienza della sala e della logistica.',
          mediaLabel: 'Modulo di registrazione',
          mediaType: 'info-panel',
          bullets: ['Obbligatorio per tutti i partecipanti.', 'Compila il modulo sottostante per assicurarti il posto.'],
        },
        {
          eyebrow: 'Checklist',
          title: 'Prima di registrarti',
          body: 'Assicurati che i tuoi piani di viaggio coincidano con la data del workshop. Una volta registrato, riceverai una conferma e i dettagli per l’arrivo.',
          mediaLabel: 'Checklist di registrazione',
          mediaType: 'portrait-grid',
          bullets: ['Conferma la disponibilità per il 18 Maggio 2026.', 'Prepara i dettagli della tua affiliazione.'],
        },
      ],
      ctaLabel: 'Apri il modulo di registrazione',
    },
    organizers: {
      hero: {
        eyebrow: 'Organizzatori',
        title: 'Coordinamento accademico e operativo',
        intro: 'COMPASS è organizzato dai sei panel chair, tutti ricercatori dottorali del Dottorato Nazionale in AI, con il supporto delle nostre istituzioni partner.',
        mediaLabel: 'Comitato organizzatore',
        mediaType: 'landscape',
        image: '/images/venue/SSSA_parco_vista_colonne.png',
      },
      sections: [
        {
          eyebrow: 'Comitato',
          title: 'Il Team Organizzativo',
          body: 'Il programma scientifico e la logistica sono coordinati dai sei chair tematici dei panel, che rappresentano l’ampiezza interdisciplinare del Dottorato Nazionale in Intelligenza Artificiale.',
          mediaLabel: 'Panoramica del comitato',
          mediaType: 'portrait-grid',
          bullets: ['Sei Doctoral Panel Chair.', 'Dottorato Nazionale in AI (PhD-AI.it).'],
        },
        {
          eyebrow: 'Ringraziamenti',
          title: 'Istituzioni Partner',
          body: 'L’evento è reso possibile da un bando per iniziative scientifiche dell’Università di Pisa, dall’ospitalità e dal supporto della Scuola Superiore Sant’Anna e dal coordinamento del Dottorato Nazionale in AI.',
          mediaLabel: 'Istituzioni di supporto',
          mediaType: 'landscape',
          bullets: ['Università di Pisa (Bando scientifico).', 'Scuola Superiore Sant’Anna (Sede e Supporto).', 'Dottorato Nazionale in AI (Coordinamento).'],
        },
        {
          eyebrow: 'Contatti',
          title: 'Contattaci',
          body: 'Per domande generali o chiarimenti operativi, si prega di rivolgersi direttamente al comitato organizzatore via email.',
          mediaLabel: 'Informazioni di contatto',
          mediaType: 'info-panel',
          bullets: ['Richieste generali sul workshop.', 'Follow-up operativo.'],
        },
      ],
    },
    faq: {
      hero: {
        eyebrow: 'FAQ',
        title: 'Informazioni essenziali per i partecipanti',
        intro: 'Risposte rapide alle domande comuni su logistica, partecipazione e materiali del workshop.',
        mediaLabel: 'Panoramica FAQ',
        mediaType: 'landscape',
        image: '/images/venue/SSSA_vista_alto.png',
      },
      sections: [
        {
          eyebrow: 'Partecipazione',
          title: 'Domande Generali',
          body: 'La partecipazione è gratuita e l’evento è progettato per la presenza fisica per massimizzare la discussione e il networking.',
          mediaLabel: 'FAQ partecipazione',
          mediaType: 'info-panel',
          bullets: ['Registrazione obbligatoria.', 'Partecipazione gratuita.'],
        },
        {
          eyebrow: 'Logistica',
          title: 'Sede e Viaggio',
          body: 'Il workshop si svolge nel campus principale della Sant’Anna nel centro di Pisa. Note dettagliate per l’arrivo saranno inviate ai registrati.',
          mediaLabel: 'FAQ logistica',
          mediaType: 'landscape',
          bullets: ['Sede storica nel centro città.', 'Guida al viaggio fornita dopo la registrazione.'],
        },
        {
          eyebrow: 'Materiali',
          title: 'Slide e Documentazione',
          body: 'Le presentazioni e i materiali delle sessioni saranno messi a disposizione dei partecipanti dopo l’evento, previo consenso dei relatori.',
          mediaLabel: 'FAQ materiali',
          mediaType: 'info-panel',
          bullets: ['Condivisione materiali post-evento.', 'Lingua: Inglese.'],
        },
      ],
      ctaLabel: 'Invia una email agli organizzatori',
    },
  },
} as const satisfies Record<Locale, Record<RichPageKey, RichPageContent>>;

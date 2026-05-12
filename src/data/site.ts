import type { Locale } from './types';

export const locales: Locale[] = ['en', 'it'];
export const defaultLocale: Locale = 'en';
export const sitePageKeys = [
  'home',
  'programme',
  'speakers',
  'abstracts',
  'venue',
  'registration',
  'about',
  'organizers',
  'faq',
] as const;

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
    abstracts: 'Abstracts',
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
    abstracts: 'Abstract',
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
    abstracts: {
      title: 'Abstracts | COMPASS',
      description: 'Book of abstracts for the COMPASS workshop contributions.',
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
    abstracts: {
      title: 'Abstract | COMPASS',
      description: 'Libro degli abstract per i contributi del workshop COMPASS.',
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
  mediaType: 'portrait-grid' | 'landscape' | 'video' | 'info-panel' | 'logo-grid';
  image?: string;
  images?: string[];
  bullets?: string[];
  cta?: {
    label: string;
    href: string;
    external?: boolean;
  };
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
          body: 'The workshop provides a shared stage for complexity science, AI methods, innovation, and legal-ethical frameworks, ensuring that academic discussion remains truly interdisciplinary from the outset.',
          mediaLabel: 'Mission and Vision',
          mediaType: 'info-panel',
          bullets: [
            'Rigorous academic focus on complexity and innovation.',
            'Bridging quantitative methods and institutional frameworks.',
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
        title: 'Aula 3, Scuola Superiore Sant’Anna',
        intro: 'The workshop is held in the historic heart of Pisa, at the main campus of Scuola Superiore Sant’Anna. The venue is on the ground floor and is fully accessible with no architectural barriers.',
        mediaLabel: 'Aula 3 video',
        mediaType: 'video',
        image: '/images/venue/aula3_video.mp4',
      },
      sections: [
        {
          eyebrow: 'Location',
          title: 'How to Reach Us',
          body: 'Aula 3 is located in the main building of Scuola Superiore Sant’Anna (Piazza Martiri della Libertà, 33). Once inside the main entrance, walk straight until you reach the red sign, then turn left. Pass the bar, and you will find Aula 3 on your left.',
          mediaLabel: 'Google Maps link',
          mediaType: 'landscape',
          image: '/images/venue/SSSA_entrata_arco.png',
          bullets: [
            'Address: Piazza Martiri della Libertà, 33, Pisa.',
          ],
          cta: {
            label: 'Open in Google Maps',
            href: 'https://share.google/z3rT0X1zxYOYhAbXr',
            external: true,
          },
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
          body: 'On-site registration and session access will be managed at the main entrance, with short walking distances between all workshop areas. The entire event area is step-free.',
          mediaLabel: 'On-site logistics',
          mediaType: 'landscape',
          image: '/images/venue/SSSA_parco.png',
          bullets: ['Checked-in attendee access.', 'Walking campus layout.', 'Ground floor, no architectural barriers.'],
        },
      ],
      ctaLabel: 'View the programme',
    },
    registration: {
      hero: {
        eyebrow: 'Registration',
        title: 'Secure your place at COMPASS',
        intro: 'Participation is free but registration is mandatory. Join us for a day of interdisciplinary exchange at Scuola Superiore Sant’Anna or follow the event online.',
        mediaLabel: 'Registration portal',
        mediaType: 'landscape',
        image: '/images/venue/aula3_b.jpg',
      },
      sections: [
        {
          eyebrow: 'Attendance',
          title: 'Join the Workshop',
          body: 'Registration is required for all attendees to ensure proper room capacity and logistics management. You can choose to attend in person in Aula 3 or remotely via Microsoft Teams. The link for online attendance will be provided upon registration.',
          mediaLabel: 'Registration form',
          mediaType: 'info-panel',
          bullets: ['Mandatory for all participants.', 'Attend in person or online.', 'Teams link provided after registration.', 'Coffee breaks and lunch included for on-site attendees.'],
        },
        {
          eyebrow: 'Checklist',
          title: 'Before you Register',
          body: 'Ensure your travel plans align with the workshop date if attending in person. Once registered, you will receive confirmation and arrival details (or the online link) via email.',
          mediaLabel: 'Registration checklist',
          mediaType: 'portrait-grid',
          images: [
            '/images/venue/aula3_a.jpg',
            '/images/venue/SSSA_chiostro_interno.png',
            '/images/venue/SSSA_parco_2.png',
          ],
          bullets: ['Confirm availability for 18 May 2026.', 'Choose your attendance mode (in-person/online).', 'Prepare your affiliation details.'],
        },
      ],
      ctaLabel: 'Go to the registration form',
    },
    organizers: {
      hero: {
        eyebrow: 'Organizers',
        title: 'Academic and operational coordination',
        intro: 'COMPASS is organized by the six doctoral panel chairs from the National PhD Program in AI, with the support of our partner institutions and faculty supervisors.',
        mediaLabel: 'Organizing committee',
        mediaType: 'landscape',
        image: '/images/venue/SSSA_parco_vista_colonne.png',
      },
      sections: [
        {
          eyebrow: 'Partners',
          title: 'Supporting Institutions',
          body: 'This event is made possible by a scientific initiative grant from the University of Pisa, the hosting and support of Scuola Superiore Sant’Anna, and the coordination of the National PhD Program in AI.',
          mediaLabel: 'Supporting institutions',
          mediaType: 'logo-grid',
          images: [
            '/images/logos/logo-Sant\'anna-cerchio-INGLESE.png',
            '/images/logos/unipi-color.png',
            '/images/logos/ai_society_logo.png',
          ],
          bullets: [
            'University of Pisa (Scientific Grant).',
            'Scuola Superiore Sant’Anna (Venue & Support).',
            'National PhD Program in AI (Coordination).',
          ],
        },
      ],
      ctaLabel: 'Register for the workshop',
    },
    faq: {
      hero: {
        eyebrow: 'FAQ',
        title: 'Essential information for participants',
        intro: 'Practical details on registration, logistics, and workshop attendance to help you plan your visit to Pisa or follow us online.',
        mediaLabel: 'FAQ overview',
        mediaType: 'landscape',
        image: '/images/venue/SSSA_vista_alto.png',
      },
      sections: [
        {
          eyebrow: 'Registration',
          title: 'Participation & Access',
          body: 'Participation is free of charge, but registration is mandatory to ensure proper venue management and catering logistics.',
          mediaLabel: 'Participation FAQ',
          mediaType: 'info-panel',
          bullets: [
            'Registration is mandatory for all attendees.',
            'Registration Deadline: 10 May 2026.',
            'Workshop Hours: 09:30 to 18:30.',
            'Format: In-person and online (Teams link provided upon registration).',
          ],
        },
        {
          eyebrow: 'Logistics',
          title: 'Venue & Accessibility',
          body: 'The workshop is held in central Pisa. The venue is fully accessible on the ground floor.',
          mediaLabel: 'Logistics FAQ',
          mediaType: 'landscape',
          bullets: [
            'Venue: Aula 3, Scuola Superiore Sant’Anna (Main Campus).',
            'Accessibility: Ground floor, no architectural barriers.',
            'Travel: 15-minute walk from Pisa Centrale station.',
          ],
        },
        {
          eyebrow: 'Materials',
          title: 'Slides, Papers & Certificates',
          body: 'We aim to provide a shared repository of workshop materials following the event, including selected slides and doctoral contributions.',
          mediaLabel: 'Materials FAQ',
          mediaType: 'info-panel',
          bullets: [
            'Certificates: Attendance certificates available upon request.',
            'Materials: Slides shared post-event (speaker permitting).',
            'Catering: Coffee breaks and lunch are included for registered participants.',
          ],
        },
      ],
      ctaLabel: 'Register for the workshop',
    },
    abstracts: {
      hero: {
        eyebrow: 'Abstracts',
        title: 'Workshop Contributions',
        intro: 'Detailed abstracts and research summaries for all talks and panel contributions presented during the COMPASS workshop.',
        mediaLabel: 'Abstracts collection',
        mediaType: 'landscape',
        image: '/images/venue/aula3_a.jpg',
      },
      sections: [],
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
          body: 'Il workshop offre un palcoscenico condiviso per la scienza della complessità, i metodi AI, l’innovazione e i quadri giuridico-etici, garantendo che il confronto resti autenticamente interdisciplinare fin dall’inizio.',
          mediaLabel: 'Visione e Missione',
          mediaType: 'info-panel',
          bullets: [
            'Focus accademico su complessità e innovazione.',
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
        title: 'Aula 3, Scuola Superiore Sant’Anna',
        intro: 'Il workshop si terrà nel cuore storico di Pisa, presso il campus principale della Scuola Superiore Sant’Anna. La sede si trova al piano terra ed è completamente accessibile, senza barriere architettoniche.',
        mediaLabel: 'Video dell’Aula 3',
        mediaType: 'video',
        image: '/images/venue/aula3_video.mp4',
      },
      sections: [
        {
          eyebrow: 'Posizione',
          title: 'Come raggiungerci',
          body: 'L’Aula 3 si trova nell’edificio principale della Scuola Superiore Sant’Anna (Piazza Martiri della Libertà, 33). Una volta entrati dall’ingresso principale, proseguire dritti fino al cartello rosso, quindi svoltare a sinistra. Superare il bar e troverete l’Aula 3 sulla vostra sinistra.',
          mediaLabel: 'Link Google Maps',
          mediaType: 'landscape',
          image: '/images/venue/SSSA_entrata_arco.png',
          bullets: [
            'Indirizzo: Piazza Martiri della Libertà, 33, Pisa.',
          ],
          cta: {
            label: 'Apri in Google Maps',
            href: 'https://share.google/z3rT0X1zxYOYhAbXr',
            external: true,
          },
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
          body: 'La registrazione in loco e l’accesso alle sessioni saranno gestiti presso l’ingresso principale, con brevi distanze a piedi tra tutte le aree del workshop. L’intera area dell’evento è priva di gradini.',
          mediaLabel: 'Logistica in loco',
          mediaType: 'landscape',
          image: '/images/venue/SSSA_parco.png',
          bullets: ['Accesso per partecipanti registrati.', 'Layout del campus compatto.', 'Piano terra, assenza di barriere architettoniche.'],
        },
      ],
      ctaLabel: 'Vedi il programma',
    },
    registration: {
      hero: {
        eyebrow: 'Registrazione',
        title: 'Assicura il tuo posto a COMPASS',
        intro: 'La partecipazione è gratuita ma la registrazione è obbligatoria. Unisciti a noi per una giornata di scambio interdisciplinare alla Scuola Superiore Sant’Anna o segui l’evento online.',
        mediaLabel: 'Portale di registrazione',
        mediaType: 'landscape',
        image: '/images/venue/aula3_b.jpg',
      },
      sections: [
        {
          eyebrow: 'Partecipazione',
          title: 'Iscriviti al Workshop',
          body: 'La registrazione è necessaria per tutti i partecipanti per garantire la corretta gestione della capienza della sala e della logistica. È possibile scegliere di partecipare in presenza in Aula 3 o da remoto tramite Microsoft Teams. Il link per la partecipazione online verrà fornito al momento della registrazione.',
          mediaLabel: 'Modulo di registrazione',
          mediaType: 'info-panel',
          bullets: ['Obbligatorio per tutti i partecipanti.', 'Partecipa in presenza o online.', 'Link Teams fornito dopo la registrazione.', 'Coffee break e pranzo inclusi per i partecipanti in presenza.'],
        },
        {
          eyebrow: 'Checklist',
          title: 'Prima di registrarti',
          body: 'Assicurati che i tuoi piani di viaggio coincidano con la data del workshop se partecipi in presenza. Una volta registrato, riceverai una conferma e i dettagli per l’arrivo (o il link online) via email.',
          mediaLabel: 'Checklist di registrazione',
          mediaType: 'portrait-grid',
          images: [
            '/images/venue/aula3_a.jpg',
            '/images/venue/SSSA_chiostro_interno.png',
            '/images/venue/SSSA_parco_2.png',
          ],
          bullets: ['Conferma la disponibilità per il 18 Maggio 2026.', 'Scegli la modalità di partecipazione (presenza/online).', 'Prepara i dettagli della tua affiliazione.'],
        },
      ],
      ctaLabel: 'Vai al modulo di registrazione',
    },
    organizers: {
      hero: {
        eyebrow: 'Organizzatori',
        title: 'Coordinamento accademico e operativo',
        intro: 'COMPASS è organizzato dai sei doctoral panel chair del Dottorato Nazionale in AI, con il supporto delle istituzioni partner e dei supervisori accademici.',
        mediaLabel: 'Comitato organizzatore',
        mediaType: 'landscape',
        image: '/images/venue/SSSA_parco_vista_colonne.png',
      },
      sections: [
        {
          eyebrow: 'Partner',
          title: 'Istituzioni di Supporto',
          body: 'L’evento è reso possibile da un bando per iniziative scientifiche dell’Università di Pisa, dall’ospitalità e dal supporto della Scuola Superiore Sant’Anna e dal coordinamento del Dottorato Nazionale in AI.',
          mediaLabel: 'Istituzioni di supporto',
          mediaType: 'logo-grid',
          images: [
            '/images/logos/logo-Sant\'anna-cerchio-INGLESE.png',
            '/images/logos/unipi-color.png',
            '/images/logos/ai_society_logo.png',
          ],
          bullets: [
            'Università di Pisa (Bando scientifico).',
            'Scuola Superiore Sant’Anna (Sede e Supporto).',
            'Dottorato Nazionale in AI (Coordinamento).',
          ],
        },
      ],
      ctaLabel: 'Iscriviti al workshop',
    },
    faq: {
      hero: {
        eyebrow: 'FAQ',
        title: 'Informazioni essenziali per i partecipanti',
        intro: 'Dettagli pratici su registrazione, logistica e partecipazione al workshop per aiutarti a pianificare la tua visita a Pisa o a seguirci online.',
        mediaLabel: 'Panoramica FAQ',
        mediaType: 'landscape',
        image: '/images/venue/SSSA_vista_alto.png',
      },
      sections: [
        {
          eyebrow: 'Registrazione',
          title: 'Partecipazione e Accesso',
          body: 'La partecipazione è gratuita, ma la registrazione è obbligatoria per garantire la corretta gestione degli spazi e della logistica del catering.',
          mediaLabel: 'FAQ partecipazione',
          mediaType: 'info-panel',
          bullets: [
            'Registrazione obbligatoria per tutti i partecipanti.',
            'Scadenza registrazioni: 10 Maggio 2026.',
            'Orario Workshop: dalle 09:30 alle 18:30.',
            'Formato: In presenza e online (link Teams fornito alla registrazione).',
          ],
        },
        {
          eyebrow: 'Logistica',
          title: 'Sede e Accessibilità',
          body: 'Il workshop si svolge nel centro di Pisa. La sede è completamente accessibile al piano terra.',
          mediaLabel: 'FAQ logistica',
          mediaType: 'landscape',
          bullets: [
            'Sede: Aula 3, Scuola Superiore Sant’Anna (Campus principale).',
            'Accessibilità: Piano terra, assenza di barriere architettoniche.',
            'Viaggio: 15 minuti a piedi dalla stazione di Pisa Centrale.',
          ],
        },
        {
          eyebrow: 'Materiali',
          title: 'Slide, Paper e Attestati',
          body: 'L’obiettivo è fornire un repository condiviso dei materiali del workshop dopo l’evento, incluse le slide selezionate e i contributi dottorali.',
          mediaLabel: 'FAQ materiali',
          mediaType: 'info-panel',
          bullets: [
            'Attestati: Certificati di partecipazione disponibili su richiesta.',
            'Materiali: Slide condivise post-evento (previo consenso dei relatori).',
            'Catering: Coffee break e pranzo sono inclusi per i partecipanti registrati.',
          ],
        },
      ],
      ctaLabel: 'Iscriviti al workshop',
    },
    abstracts: {
      hero: {
        eyebrow: 'Abstract',
        title: 'Contributi del Workshop',
        intro: 'Abstract dettagliati e sintesi delle ricerche per tutti gli interventi e i contributi dei panel presentati durante il workshop COMPASS.',
        mediaLabel: 'Raccolta abstract',
        mediaType: 'landscape',
        image: '/images/venue/aula3_a.jpg',
      },
      sections: [],
    },
  },
} as const satisfies Record<Locale, Record<RichPageKey, RichPageContent>>;

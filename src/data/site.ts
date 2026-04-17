import type { Locale } from './types';

export const locales: Locale[] = ['en', 'it'];
export const defaultLocale: Locale = 'en';
export const sitePageKeys = ['home', 'programme', 'speakers', 'venue', 'registration', 'about', 'organizers', 'faq'] as const;
export type SitePageKey = (typeof sitePageKeys)[number];

export const siteConfig = {
  name: 'COMPASS',
  fullTitle: 'COmplexity, Markets, Policy, and AI in Social Systems',
  eventDate: '11 May 2026',
  alternateDate: '18 May 2026',
  venue: 'Scuola Superiore Sant’Anna, Pisa',
  registrationUrl: 'https://tally.so/r/compass-registration',
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
      description: 'Venue shell for travel information and attendee logistics.',
    },
    registration: {
      title: 'Registration | COMPASS',
      description: 'Registration shell with the external form handoff for attendees.',
    },
    about: {
      title: 'About | COMPASS',
      description: 'COMPASS workshop mission and interdisciplinary positioning.',
    },
    organizers: {
      title: 'Organizers | COMPASS',
      description: 'Organizing committee shell and institutional context for COMPASS.',
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
      description: 'Shell della sede con informazioni di viaggio e logistica per i partecipanti.',
    },
    registration: {
      title: 'Registrazione | COMPASS',
      description: 'Shell di registrazione con accesso al modulo esterno per i partecipanti.',
    },
    about: {
      title: 'Chi siamo | COMPASS',
      description: 'Missione del workshop COMPASS e posizionamento interdisciplinare.',
    },
    organizers: {
      title: 'Organizzatori | COMPASS',
      description: 'Shell del comitato organizzatore e del contesto istituzionale di COMPASS.',
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
  }>;
};

export const homepageMediaShowcaseContent = {
  en: {
    eyebrow: 'Media showcase',
    title: 'A visual snapshot of the workshop day',
    intro: 'A compact gallery panel for the redesign, pairing the venue, the people, and the conversations that define COMPASS.',
    videoLabel: 'Workshop highlight video',
    items: [
      { title: 'The venue', body: 'Sant’Anna, Pisa, and the academic setting around the main room.', mediaLabel: 'Venue still' },
      { title: 'The programme in motion', body: 'Keynotes, panels, and discussion moments through the day.', mediaLabel: 'Programme still' },
      { title: 'The people behind it', body: 'Invited guests, organizers, and chair teams working together.', mediaLabel: 'People still' },
    ],
  },
  it: {
    eyebrow: 'Rassegna media',
    title: 'Uno sguardo visivo sulla giornata del workshop',
    intro: 'Un pannello gallery compatto per il redesign, che unisce sede, persone e conversazioni che definiscono COMPASS.',
    videoLabel: 'Video highlight del workshop',
    items: [
      { title: 'La sede', body: 'Sant’Anna a Pisa e il contesto accademico attorno alla sala principale.', mediaLabel: 'Immagine della sede' },
      { title: 'Il programma in movimento', body: 'Keynote, panel e momenti di discussione durante la giornata.', mediaLabel: 'Immagine del programma' },
      { title: 'Le persone dietro il workshop', body: 'Ospiti invitati, organizzatori e chair che lavorano insieme.', mediaLabel: 'Immagine delle persone' },
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
  mediaType: string;
  bullets?: string[];
};

export type RichPageContent = {
  hero: {
    eyebrow: string;
    title: string;
    intro: string;
    mediaLabel: string;
    mediaType: string;
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
        title: 'What the workshop is trying to make possible',
        intro: 'A compact home for the workshop mission, scope, and expected interdisciplinary outcome.',
        mediaLabel: 'About page hero placeholder',
        mediaType: 'placeholder',
      },
      sections: [
        {
          eyebrow: 'Mission',
          title: 'Why this workshop exists',
          body: 'The workshop gives a shared stage to complexity science, AI, markets, policy, and law so the discussion can stay interdisciplinary from the start.',
          mediaLabel: 'Mission placeholder',
          mediaType: 'placeholder',
          bullets: [
            'Keep the scope academic and focused.',
            'Make the connections between methods and institutions explicit.',
          ],
        },
        {
          eyebrow: 'Format',
          title: 'How the day is organised',
          body: 'The page will eventually explain the day structure in more detail, but the current content already signals the compact, single-day format.',
          mediaLabel: 'Format placeholder',
          mediaType: 'placeholder',
          bullets: [
            'One room for the shared scientific arc.',
            'Breaks and meals as deliberate discussion time.',
          ],
        },
        {
          eyebrow: 'Audience',
          title: 'Who should read this page',
          body: 'This section is reserved for the public-facing explanation of who the workshop is for and what participants should expect.',
          mediaLabel: 'Audience placeholder',
          mediaType: 'placeholder',
          bullets: [
            'Doctoral researchers and invited speakers.',
            'Attendees interested in AI, policy, and socio-economic systems.',
          ],
        },
      ],
      ctaLabel: 'Read the programme',
    },
    speakers: {
      hero: {
        eyebrow: 'Speakers',
        title: 'Who is contributing to COMPASS',
        intro: 'A working page for keynote guests, organizers, and the panel network around them.',
        mediaLabel: 'Speakers page hero placeholder',
        mediaType: 'placeholder',
      },
      sections: [
        {
          eyebrow: 'Keynotes',
          title: 'Invited voices and reserved slots',
          body: 'The page will present the keynote line-up together with the remaining confirmation status when needed.',
          mediaLabel: 'Keynote placeholder',
          mediaType: 'placeholder',
          bullets: ['Confirmed keynote guests.', 'The open slot currently marked TBC.'],
        },
        {
          eyebrow: 'Tracks',
          title: 'Who chairs the three thematic tracks',
          body: 'This section can grow into a structured overview of the doctoral chairs and their track responsibilities.',
          mediaLabel: 'Tracks placeholder',
          mediaType: 'placeholder',
          bullets: ['Track 1 on AI methods.', 'Track 2 on networks and NLP.', 'Track 3 on law and ethics.'],
        },
        {
          eyebrow: 'Contributors',
          title: 'Panel and discussant roles',
          body: 'The redesign keeps room for the people appearing in panels and discussant slots without forcing a long list into the hero.',
          mediaLabel: 'Contributor placeholder',
          mediaType: 'placeholder',
          bullets: ['Named panel contributors.', 'Session discussants and closing voices.'],
        },
      ],
    },
    venue: {
      hero: {
        eyebrow: 'Venue',
        title: 'Where the workshop takes place',
        intro: 'A page for the physical setting, arrival notes, and the practical details that help attendees plan the day.',
        mediaLabel: 'Venue page hero placeholder',
        mediaType: 'placeholder',
      },
      sections: [
        {
          eyebrow: 'Location',
          title: 'The Sant Anna campus in Pisa',
          body: 'The venue section will eventually explain the room setup and the working location within the campus.',
          mediaLabel: 'Location placeholder',
          mediaType: 'placeholder',
          bullets: ['Historic campus setting in central Pisa.', 'Short walking distances between rooms and break areas.'],
        },
        {
          eyebrow: 'Travel',
          title: 'How to get there',
          body: 'Arrival guidance can stay short while still giving attendees the practical routes they need.',
          mediaLabel: 'Travel placeholder',
          mediaType: 'placeholder',
          bullets: ['Pisa Centrale for rail arrivals.', 'Galileo Galilei Airport for air travel.'],
        },
        {
          eyebrow: 'Access',
          title: 'What participants should know on the day',
          body: 'This section is reserved for the arrival and access notes that are helpful only once the event is nearly ready.',
          mediaLabel: 'Access placeholder',
          mediaType: 'placeholder',
          bullets: ['Check-in timing and room access.', 'Local movement between sessions and breaks.'],
        },
      ],
      ctaLabel: 'Check travel notes',
    },
    registration: {
      hero: {
        eyebrow: 'Registration',
        title: 'How to join the workshop',
        intro: 'This page will bridge the external form with the practical notes people need before they register.',
        mediaLabel: 'Registration page hero placeholder',
        mediaType: 'placeholder',
      },
      sections: [
        {
          eyebrow: 'Form',
          title: 'Where registration happens',
          body: 'The final page will direct people to the form without cluttering the route with unnecessary detail.',
          mediaLabel: 'Form placeholder',
          mediaType: 'placeholder',
          bullets: ['External registration handoff.', 'Straightforward participation flow.'],
        },
        {
          eyebrow: 'Timing',
          title: 'When to register and what to check',
          body: 'The page should make the timing and planning constraints visible without overloading the route.',
          mediaLabel: 'Timing placeholder',
          mediaType: 'placeholder',
          bullets: ['Review the event date and travel feasibility.', 'Confirm the attendance window before submitting.'],
        },
        {
          eyebrow: 'Checklist',
          title: 'What to prepare before submitting',
          body: 'A short list helps attendees move through the form with the right expectations.',
          mediaLabel: 'Checklist placeholder',
          mediaType: 'placeholder',
          bullets: ['Name and affiliation details.', 'A quick check of travel plans and availability.'],
        },
      ],
      ctaLabel: 'Open the registration form',
    },
    organizers: {
      hero: {
        eyebrow: 'Organizers',
        title: 'Who is making the workshop happen',
        intro: 'This page will hold the committee overview and the institutional context around the event.',
        mediaLabel: 'Organizers page hero placeholder',
        mediaType: 'placeholder',
      },
      sections: [
        {
          eyebrow: 'Committee',
          title: 'The people coordinating COMPASS',
          body: 'The organizer listing can stay short at first while the detailed bios are handled elsewhere.',
          mediaLabel: 'Committee placeholder',
          mediaType: 'placeholder',
          bullets: ['Doctoral organizers and chairs.', 'Academic and operational coordination.'],
        },
        {
          eyebrow: 'Hosting',
          title: 'Where the event is anchored',
          body: 'This section gives room for the host institution and acknowledgement copy without duplicating the venue page.',
          mediaLabel: 'Hosting placeholder',
          mediaType: 'placeholder',
          bullets: ['Hosting institution context.', 'Local support and logistics ownership.'],
        },
        {
          eyebrow: 'Contacts',
          title: 'Who to reach out to',
          body: 'The final page can provide a simple operational contact route once the public-facing text is settled.',
          mediaLabel: 'Contacts placeholder',
          mediaType: 'placeholder',
          bullets: ['General workshop contact.', 'Operational follow-up for attendees.'],
        },
      ],
    },
    faq: {
      hero: {
        eyebrow: 'FAQ',
        title: 'Answers to the practical questions',
        intro: 'A concise space for logistics, format, and participation questions that should stay out of the main narrative.',
        mediaLabel: 'FAQ page hero placeholder',
        mediaType: 'placeholder',
      },
      sections: [
        {
          eyebrow: 'Participation',
          title: 'What attendees need to know first',
          body: 'The first FAQ block can answer the basic participation and registration questions without forcing people into the details pages.',
          mediaLabel: 'Participation placeholder',
          mediaType: 'placeholder',
          bullets: ['Attendance is free.', 'The workshop is designed for a focused in-person audience.'],
        },
        {
          eyebrow: 'Logistics',
          title: 'What remains to be confirmed for attendees',
          body: 'This block is reserved for the items that are practical, useful, and still subject to final confirmation.',
          mediaLabel: 'Logistics placeholder',
          mediaType: 'placeholder',
          bullets: ['Access to the room and venue circulation.', 'Travel and local movement around Pisa.'],
        },
        {
          eyebrow: 'Materials',
          title: 'What to expect from the workshop materials',
          body: 'A brief FAQ block can handle language, slide sharing, and any follow-up notes after the event.',
          mediaLabel: 'Materials placeholder',
          mediaType: 'placeholder',
          bullets: ['Session materials and talk links.', 'Post-workshop communication.'],
        },
      ],
      ctaLabel: 'Contact the organizers',
    },
  },
  it: {
    about: {
      hero: {
        eyebrow: 'Chi siamo',
        title: 'Cosa il workshop vuole rendere possibile',
        intro: 'Una casa compatta per missione, perimetro e risultato interdisciplinare atteso del workshop.',
        mediaLabel: 'Segnaposto hero pagina chi siamo',
        mediaType: 'placeholder',
      },
      sections: [
        {
          eyebrow: 'Missione',
          title: 'Perche esiste questo workshop',
          body: 'Il workshop mette su una stessa scena scienza della complessita, AI, mercati, policy e diritto per tenere il confronto interdisciplinare fin dall inizio.',
          mediaLabel: 'Segnaposto missione',
          mediaType: 'placeholder',
          bullets: [
            'Mantenere il perimetro accademico e focalizzato.',
            'Rendere espliciti i collegamenti tra metodi e istituzioni.',
          ],
        },
        {
          eyebrow: 'Formato',
          title: 'Come e organizzata la giornata',
          body: 'La pagina potra spiegare meglio il programma della giornata, ma il contenuto attuale segnala gia il formato compatto di una sola giornata.',
          mediaLabel: 'Segnaposto formato',
          mediaType: 'placeholder',
          bullets: [
            'Una sala per l arco scientifico condiviso.',
            'Pause e pasti come tempo deliberato di discussione.',
          ],
        },
        {
          eyebrow: 'Pubblico',
          title: 'Chi dovrebbe leggere questa pagina',
          body: 'Questa sezione e riservata alla spiegazione pubblica di a chi si rivolge il workshop e di cosa aspettarsi.',
          mediaLabel: 'Segnaposto pubblico',
          mediaType: 'placeholder',
          bullets: [
            'Dottorandi e speaker invitati.',
            'Partecipanti interessati a AI, policy e sistemi socio-economici.',
          ],
        },
      ],
      ctaLabel: 'Leggi il programma',
    },
    speakers: {
      hero: {
        eyebrow: 'Relatori',
        title: 'Chi contribuisce a COMPASS',
        intro: 'Una pagina di lavoro per ospiti keynote, organizzatori e la rete di panel attorno a loro.',
        mediaLabel: 'Segnaposto hero relatori',
        mediaType: 'placeholder',
      },
      sections: [
        {
          eyebrow: 'Keynote',
          title: 'Voci invitate e slot riservati',
          body: 'La pagina presentera la line-up delle keynote insieme allo stato di conferma restante quando serve.',
          mediaLabel: 'Segnaposto keynote',
          mediaType: 'placeholder',
          bullets: ['Ospiti keynote confermati.', 'Lo slot aperto attualmente marcato TBC.'],
        },
        {
          eyebrow: 'Track',
          title: 'Chi coordina le tre track tematiche',
          body: 'Questa sezione puo diventare una panoramica strutturata dei chair dottorali e delle rispettive responsabilita.',
          mediaLabel: 'Segnaposto track',
          mediaType: 'placeholder',
          bullets: ['Track 1 sui metodi AI.', 'Track 2 su networks e NLP.', 'Track 3 su diritto ed etica.'],
        },
        {
          eyebrow: 'Contributori',
          title: 'Ruoli di panel e discussant',
          body: 'Il redesign lascia spazio alle persone presenti nei panel e nei ruoli di discussant senza forzare un elenco lungo nell hero.',
          mediaLabel: 'Segnaposto contributori',
          mediaType: 'placeholder',
          bullets: ['Contributori di panel nominati.', 'Discussant di sessione e voci conclusive.'],
        },
      ],
    },
    venue: {
      hero: {
        eyebrow: 'Sede',
        title: 'Dove si svolge il workshop',
        intro: 'Una pagina per il contesto fisico, le note di arrivo e i dettagli pratici che aiutano i partecipanti a pianificare la giornata.',
        mediaLabel: 'Segnaposto hero sede',
        mediaType: 'placeholder',
      },
      sections: [
        {
          eyebrow: 'Posizione',
          title: 'Il campus Sant Anna a Pisa',
          body: 'La sezione sede spieghera meglio la configurazione delle sale e il luogo di lavoro dentro il campus.',
          mediaLabel: 'Segnaposto posizione',
          mediaType: 'placeholder',
          bullets: ['Contesto storico nel centro di Pisa.', 'Percorsi brevi tra sale e aree break.'],
        },
        {
          eyebrow: 'Viaggio',
          title: 'Come arrivarci',
          body: 'Le indicazioni di arrivo possono restare brevi pur dando ai partecipanti i percorsi pratici di cui hanno bisogno.',
          mediaLabel: 'Segnaposto viaggio',
          mediaType: 'placeholder',
          bullets: ['Pisa Centrale per chi arriva in treno.', 'Aeroporto Galileo Galilei per chi arriva in aereo.'],
        },
        {
          eyebrow: 'Accesso',
          title: 'Cosa sapere il giorno dell evento',
          body: 'Questa sezione e riservata alle note di arrivo e di accesso utili quando l evento e quasi pronto.',
          mediaLabel: 'Segnaposto accesso',
          mediaType: 'placeholder',
          bullets: ['Orari di check-in e accesso alla sala.', 'Spostamenti locali tra sessioni e pause.'],
        },
      ],
      ctaLabel: 'Controlla le note di viaggio',
    },
    registration: {
      hero: {
        eyebrow: 'Registrazione',
        title: 'Come partecipare al workshop',
        intro: 'Questa pagina fara da ponte tra il form esterno e le note pratiche che servono prima della registrazione.',
        mediaLabel: 'Segnaposto hero registrazione',
        mediaType: 'placeholder',
      },
      sections: [
        {
          eyebrow: 'Modulo',
          title: 'Dove avviene la registrazione',
          body: 'La pagina finale portera al form senza appesantire la route con dettagli inutili.',
          mediaLabel: 'Segnaposto modulo',
          mediaType: 'placeholder',
          bullets: ['Passaggio a un modulo esterno.', 'Flusso di partecipazione semplice.'],
        },
        {
          eyebrow: 'Tempistiche',
          title: 'Quando registrarsi e cosa verificare',
          body: 'La pagina deve rendere visibili le tempistiche e i vincoli di pianificazione senza sovraccaricare la route.',
          mediaLabel: 'Segnaposto tempistiche',
          mediaType: 'placeholder',
          bullets: ['Rivedi la data dell evento e la fattibilita del viaggio.', 'Conferma la finestra di partecipazione prima di inviare.'],
        },
        {
          eyebrow: 'Checklist',
          title: 'Cosa preparare prima di inviare',
          body: 'Una lista breve aiuta i partecipanti a compilare il form con le giuste aspettative.',
          mediaLabel: 'Segnaposto checklist',
          mediaType: 'placeholder',
          bullets: ['Nome e affiliazione.', 'Un controllo rapido su viaggio e disponibilita.'],
        },
      ],
      ctaLabel: 'Apri il modulo di registrazione',
    },
    organizers: {
      hero: {
        eyebrow: 'Organizzatori',
        title: 'Chi sta rendendo possibile il workshop',
        intro: 'Questa pagina ospitera la panoramica del comitato e il contesto istituzionale dell evento.',
        mediaLabel: 'Segnaposto hero organizzatori',
        mediaType: 'placeholder',
      },
      sections: [
        {
          eyebrow: 'Comitato',
          title: 'Le persone che coordinano COMPASS',
          body: 'L elenco degli organizzatori puo restare breve inizialmente mentre le biografie dettagliate vengono gestite altrove.',
          mediaLabel: 'Segnaposto comitato',
          mediaType: 'placeholder',
          bullets: ['Dottorandi organizzatori e chair.', 'Coordinamento accademico e operativo.'],
        },
        {
          eyebrow: 'Hosting',
          title: 'Dove si ancora l evento',
          body: 'Questa sezione lascia spazio al contesto dell istituzione ospitante e al copy di acknowledgement senza duplicare la pagina sede.',
          mediaLabel: 'Segnaposto hosting',
          mediaType: 'placeholder',
          bullets: ['Contesto dell istituzione ospitante.', 'Supporto locale e ownership della logistica.'],
        },
        {
          eyebrow: 'Contatti',
          title: 'Chi contattare',
          body: 'La pagina finale potra offrire un percorso di contatto operativo semplice quando il testo pubblico sara stabilito.',
          mediaLabel: 'Segnaposto contatti',
          mediaType: 'placeholder',
          bullets: ['Contatto generale del workshop.', 'Follow-up operativo per i partecipanti.'],
        },
      ],
    },
    faq: {
      hero: {
        eyebrow: 'FAQ',
        title: 'Risposte alle domande pratiche',
        intro: 'Uno spazio conciso per logistica, formato e partecipazione da tenere fuori dalla narrazione principale.',
        mediaLabel: 'Segnaposto hero FAQ',
        mediaType: 'placeholder',
      },
      sections: [
        {
          eyebrow: 'Partecipazione',
          title: 'Cosa devono sapere prima di tutto i partecipanti',
          body: 'Il primo blocco FAQ puo rispondere alle domande base su partecipazione e registrazione senza forzare gli utenti nelle pagine di dettaglio.',
          mediaLabel: 'Segnaposto partecipazione',
          mediaType: 'placeholder',
          bullets: ['La partecipazione e gratuita.', 'Il workshop e pensato per un pubblico in presenza e focalizzato.'],
        },
        {
          eyebrow: 'Logistica',
          title: 'Cosa resta da confermare per i partecipanti',
          body: 'Questo blocco e riservato agli elementi pratici, utili e ancora soggetti a conferma finale.',
          mediaLabel: 'Segnaposto logistica',
          mediaType: 'placeholder',
          bullets: ['Accesso alla sala e circolazione nella sede.', 'Viaggio e spostamenti locali a Pisa.'],
        },
        {
          eyebrow: 'Materiali',
          title: 'Cosa aspettarsi dai materiali del workshop',
          body: 'Un breve blocco FAQ puo gestire lingua, condivisione delle slide e eventuali note successive all evento.',
          mediaLabel: 'Segnaposto materiali',
          mediaType: 'placeholder',
          bullets: ['Materiali di sessione e link ai talk.', 'Comunicazioni successive al workshop.'],
        },
      ],
      ctaLabel: 'Contatta gli organizzatori',
    },
  },
} as const satisfies Record<Locale, Record<RichPageKey, RichPageContent>>;

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
  items: Array<{
    title: string;
    body: string;
  }>;
  note: string;
};

export const homepageMediaShowcaseContent = {
  en: {
    eyebrow: 'Media showcase',
    title: 'A visual snapshot of the workshop day',
    intro:
      'A compact gallery panel for the redesign, pairing the venue, the people, and the conversations that define COMPASS.',
    items: [
      { title: 'The venue', body: 'Sant’Anna, Pisa, and the academic setting around the main room.' },
      { title: 'The programme in motion', body: 'Keynotes, panels, and discussion moments through the day.' },
      { title: 'The people behind it', body: 'Invited guests, organizers, and chair teams working together.' },
    ],
    note: 'Placeholder media slots are kept explicit until the final image selection is ready.',
  },
  it: {
    eyebrow: 'Rassegna media',
    title: 'Uno sguardo visivo sulla giornata del workshop',
    intro:
      'Un pannello gallery compatto per il redesign, che unisce sede, persone e conversazioni che definiscono COMPASS.',
    items: [
      { title: 'La sede', body: 'Sant’Anna a Pisa e il contesto accademico attorno alla sala principale.' },
      { title: 'Il programma in movimento', body: 'Keynote, panel e momenti di discussione durante la giornata.' },
      { title: 'Le persone dietro il workshop', body: 'Ospiti invitati, organizzatori e chair che lavorano insieme.' },
    ],
    note: 'Gli slot media restano espliciti finché non e pronta la selezione finale delle immagini.',
  },
} as const satisfies Record<Locale, HomepageMediaShowcaseContent>;

export type ProgrammePageContent = {
  eyebrow: string;
  title: string;
  intro: string;
  detailsTitle: string;
  details: string[];
};

export const programmePageContent = {
  en: {
    eyebrow: 'Programme overview',
    title: 'The full workshop flow, kept compact for quick scanning.',
    intro: 'This page keeps the schedule in the timeline below while the supporting copy explains how the day is structured.',
    detailsTitle: 'What sits outside the timeline',
    details: [
      'Context for the opening, breaks, and closing moments.',
      'A concise note on the invited voices and session chairs.',
      'Practical guidance that does not belong inside the schedule cards.',
    ],
  },
  it: {
    eyebrow: 'Panoramica del programma',
    title: "L'intero flusso del workshop, reso compatto per una lettura rapida.",
    intro: 'Questa pagina lascia l agenda nella timeline sottostante mentre il copy di supporto spiega come e strutturata la giornata.',
    detailsTitle: 'Cosa resta fuori dalla timeline',
    details: [
      'Contesto per apertura, pause e momenti conclusivi.',
      'Una nota sintetica sulle voci invitate e sui chair di sessione.',
      'Indicazioni pratiche che non appartengono alle card del programma.',
    ],
  },
} as const satisfies Record<Locale, ProgrammePageContent>;

export type RichPageSection = {
  eyebrow: string;
  title: string;
  body: string;
  items: string[];
  placeholder: string;
};

export type RichPageContent = {
  eyebrow: string;
  title: string;
  intro: string;
  sections: RichPageSection[];
};

type RichPageKey = Exclude<SitePageKey, 'home' | 'programme'>;

export const richPageContent = {
  en: {
    about: {
      eyebrow: 'About COMPASS',
      title: 'What the workshop is trying to make possible',
      intro: 'A compact home for the workshop mission, scope, and expected interdisciplinary outcome.',
      sections: [
        {
          eyebrow: 'About COMPASS',
          title: 'What the workshop is trying to make possible',
          body: 'The workshop gives a shared stage to complexity science, AI, markets, policy, and law so the discussion can stay interdisciplinary from the start.',
          items: [
            'Keep the scope academic and focused.',
            'Make the connections between methods and institutions explicit.',
          ],
          placeholder: 'Mission wording will be tightened once the final positioning copy is approved.',
        },
        {
          eyebrow: 'Format',
          title: 'How the day is organised',
          body: 'The page will eventually explain the day structure in more detail, but the current content already signals the compact, single-day format.',
          items: [
            'One room for the shared scientific arc.',
            'Breaks and meals as deliberate discussion time.',
          ],
          placeholder: 'Format copy remains provisional until the timetable is locked.',
        },
        {
          eyebrow: 'Audience',
          title: 'Who should read this page',
          body: 'This section is reserved for the public-facing explanation of who the workshop is for and what participants should expect.',
          items: [
            'Doctoral researchers and invited speakers.',
            'Attendees interested in AI, policy, and socio-economic systems.',
          ],
          placeholder: 'Audience language will be aligned with the registration flow later.',
        },
      ],
    },
    speakers: {
      eyebrow: 'Speakers',
      title: 'Who is contributing to COMPASS',
      intro: 'A working page for keynote guests, organizers, and the panel network around them.',
      sections: [
        {
          eyebrow: 'Keynotes',
          title: 'Invited voices and reserved slots',
          body: 'The page will present the keynote line-up together with the remaining confirmation status when needed.',
          items: ['Confirmed keynote guests.', 'The open slot currently marked TBC.'],
          placeholder: 'Keynote biographies remain lightweight until all invitations are final.',
        },
        {
          eyebrow: 'Tracks',
          title: 'Who chairs the three thematic tracks',
          body: 'This section can grow into a structured overview of the doctoral chairs and their track responsibilities.',
          items: ['Track 1 on AI methods.', 'Track 2 on networks and NLP.', 'Track 3 on law and ethics.'],
          placeholder: 'Chair profiles will expand when the session cards are rewritten.',
        },
        {
          eyebrow: 'Contributors',
          title: 'Panel and discussant roles',
          body: 'The redesign keeps room for the people appearing in panels and discussant slots without forcing a long list into the hero.',
          items: ['Named panel contributors.', 'Session discussants and closing voices.'],
          placeholder: 'Contributor detail stays in placeholder mode for this redesign pass.',
        },
      ],
    },
    venue: {
      eyebrow: 'Venue',
      title: 'Where the workshop takes place',
      intro: 'A page for the physical setting, arrival notes, and the practical details that help attendees plan the day.',
      sections: [
        {
          eyebrow: 'Location',
          title: 'The Sant Anna campus in Pisa',
          body: 'The venue section will eventually explain the room setup and the working location within the campus.',
          items: ['Historic campus setting in central Pisa.', 'Short walking distances between rooms and break areas.'],
          placeholder: 'Final room naming stays provisional until access is confirmed.',
        },
        {
          eyebrow: 'Travel',
          title: 'How to get there',
          body: 'Arrival guidance can stay short while still giving attendees the practical routes they need.',
          items: ['Pisa Centrale for rail arrivals.', 'Galileo Galilei Airport for air travel.'],
          placeholder: 'Travel copy will be expanded once local logistics are final.',
        },
        {
          eyebrow: 'Access',
          title: 'What participants should know on the day',
          body: 'This section is reserved for the arrival and access notes that are helpful only once the event is nearly ready.',
          items: ['Check-in timing and room access.', 'Local movement between sessions and breaks.'],
          placeholder: 'Access details remain placeholder-backed until the venue page is redesigned.',
        },
      ],
    },
    registration: {
      eyebrow: 'Registration',
      title: 'How to join the workshop',
      intro: 'This page will bridge the external form with the practical notes people need before they register.',
      sections: [
        {
          eyebrow: 'Form',
          title: 'Where registration happens',
          body: 'The final page will direct people to the form without cluttering the route with unnecessary detail.',
          items: ['External registration handoff.', 'Straightforward participation flow.'],
          placeholder: 'Form guidance stays provisional until the final capture flow is live.',
        },
        {
          eyebrow: 'Timing',
          title: 'When to register and what to check',
          body: 'The page should make the timing and planning constraints visible without overloading the route.',
          items: ['Review the event date and travel feasibility.', 'Confirm the attendance window before submitting.'],
          placeholder: 'Timing copy will be synced with the final deadline wording later.',
        },
        {
          eyebrow: 'Checklist',
          title: 'What to prepare before submitting',
          body: 'A short list helps attendees move through the form with the right expectations.',
          items: ['Name and affiliation details.', 'A quick check of travel plans and availability.'],
          placeholder: 'Checklist wording remains intentionally lightweight for now.',
        },
      ],
    },
    organizers: {
      eyebrow: 'Organizers',
      title: 'Who is making the workshop happen',
      intro: 'This page will hold the committee overview and the institutional context around the event.',
      sections: [
        {
          eyebrow: 'Committee',
          title: 'The people coordinating COMPASS',
          body: 'The organizer listing can stay short at first while the detailed bios are handled elsewhere.',
          items: ['Doctoral organizers and chairs.', 'Academic and operational coordination.'],
          placeholder: 'Committee bios will be linked in once the final role table is ready.',
        },
        {
          eyebrow: 'Hosting',
          title: 'Where the event is anchored',
          body: 'This section gives room for the host institution and acknowledgement copy without duplicating the venue page.',
          items: ['Hosting institution context.', 'Local support and logistics ownership.'],
          placeholder: 'Hosting acknowledgements remain placeholder-backed for the redesign phase.',
        },
        {
          eyebrow: 'Contacts',
          title: 'Who to reach out to',
          body: 'The final page can provide a simple operational contact route once the public-facing text is settled.',
          items: ['General workshop contact.', 'Operational follow-up for attendees.'],
          placeholder: 'Contact copy stays generic until the final ownership line is approved.',
        },
      ],
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Answers to the practical questions',
      intro: 'A concise space for logistics, format, and participation questions that should stay out of the main narrative.',
      sections: [
        {
          eyebrow: 'Participation',
          title: 'What attendees need to know first',
          body: 'The first FAQ block can answer the basic participation and registration questions without forcing people into the details pages.',
          items: ['Attendance is free.', 'The workshop is designed for a focused in-person audience.'],
          placeholder: 'Attendance wording will be finalised with the registration page.',
        },
        {
          eyebrow: 'Logistics',
          title: 'What remains to be confirmed for attendees',
          body: 'This block is reserved for the items that are practical, useful, and still subject to final confirmation.',
          items: ['Access to the room and venue circulation.', 'Travel and local movement around Pisa.'],
          placeholder: 'Logistics copy remains provisional until the venue notes are complete.',
        },
        {
          eyebrow: 'Materials',
          title: 'What to expect from the workshop materials',
          body: 'A brief FAQ block can handle language, slide sharing, and any follow-up notes after the event.',
          items: ['Session materials and talk links.', 'Post-workshop communication.'],
          placeholder: 'Materials guidance stays lightweight until the content pack is ready.',
        },
      ],
    },
  },
  it: {
    about: {
      eyebrow: 'Chi siamo',
      title: 'Cosa il workshop vuole rendere possibile',
      intro: 'Una casa compatta per missione, perimetro e risultato interdisciplinare atteso del workshop.',
      sections: [
        {
          eyebrow: 'Missione',
          title: 'Perche esiste questo workshop',
          body: 'Il workshop mette su una stessa scena scienza della complessita, AI, mercati, policy e diritto per tenere il confronto interdisciplinare fin dall inizio.',
          items: [
            'Mantenere il perimetro accademico e focalizzato.',
            'Rendere espliciti i collegamenti tra metodi e istituzioni.',
          ],
          placeholder: 'Il testo di missione sara rifinito quando il copy finale di posizionamento sara approvato.',
        },
        {
          eyebrow: 'Formato',
          title: 'Come e organizzata la giornata',
          body: 'La pagina potra spiegare meglio il programma della giornata, ma il contenuto attuale segnala gia il formato compatto di una sola giornata.',
          items: [
            'Una sala per l arco scientifico condiviso.',
            'Pause e pasti come tempo deliberato di discussione.',
          ],
          placeholder: 'Il copy sul formato resta provvisorio finche l agenda non e bloccata.',
        },
        {
          eyebrow: 'Pubblico',
          title: 'Chi dovrebbe leggere questa pagina',
          body: 'Questa sezione e riservata alla spiegazione pubblica di a chi si rivolge il workshop e di cosa aspettarsi.',
          items: [
            'Dottorandi e speaker invitati.',
            'Partecipanti interessati a AI, policy e sistemi socio-economici.',
          ],
          placeholder: 'Il linguaggio sul pubblico sara allineato alla pagina di registrazione in un secondo momento.',
        },
      ],
    },
    speakers: {
      eyebrow: 'Relatori',
      title: 'Chi contribuisce a COMPASS',
      intro: 'Una pagina di lavoro per ospiti keynote, organizzatori e la rete di panel attorno a loro.',
      sections: [
        {
          eyebrow: 'Keynote',
          title: 'Voci invitate e slot riservati',
          body: 'La pagina presentera la line-up delle keynote insieme allo stato di conferma restante quando serve.',
          items: ['Ospiti keynote confermati.', 'Lo slot aperto attualmente marcato TBC.'],
          placeholder: 'Le biografie keynote restano leggere finche tutti gli inviti non sono finali.',
        },
        {
          eyebrow: 'Track',
          title: 'Chi coordina le tre track tematiche',
          body: 'Questa sezione puo diventare una panoramica strutturata dei chair dottorali e delle rispettive responsabilita.',
          items: ['Track 1 sui metodi AI.', 'Track 2 su networks e NLP.', 'Track 3 su diritto ed etica.'],
          placeholder: 'I profili dei chair si espanderanno quando le card di sessione saranno riscritte.',
        },
        {
          eyebrow: 'Contributori',
          title: 'Ruoli di panel e discussant',
          body: 'Il redesign lascia spazio alle persone presenti nei panel e nei ruoli di discussant senza forzare un elenco lungo nell hero.',
          items: ['Contributori di panel nominati.', 'Discussant di sessione e voci conclusive.'],
          placeholder: 'Il dettaglio dei contributori resta in modalita placeholder per questo passaggio di redesign.',
        },
      ],
    },
    venue: {
      eyebrow: 'Sede',
      title: 'Dove si svolge il workshop',
      intro: 'Una pagina per il contesto fisico, le note di arrivo e i dettagli pratici che aiutano i partecipanti a pianificare la giornata.',
      sections: [
        {
          eyebrow: 'Posizione',
          title: 'Il campus Sant Anna a Pisa',
          body: 'La sezione sede spieghera meglio la configurazione delle sale e il luogo di lavoro dentro il campus.',
          items: ['Contesto storico nel centro di Pisa.', 'Percorsi brevi tra sale e aree break.'],
          placeholder: 'La denominazione finale della sala resta provvisoria finche l accesso non e confermato.',
        },
        {
          eyebrow: 'Viaggio',
          title: 'Come arrivarci',
          body: 'Le indicazioni di arrivo possono restare brevi pur dando ai partecipanti i percorsi pratici di cui hanno bisogno.',
          items: ['Pisa Centrale per chi arriva in treno.', 'Aeroporto Galileo Galilei per chi arriva in aereo.'],
          placeholder: 'Il copy sul viaggio sara ampliato quando la logistica locale sara finale.',
        },
        {
          eyebrow: 'Accesso',
          title: 'Cosa sapere il giorno dell evento',
          body: 'Questa sezione e riservata alle note di arrivo e di accesso utili quando l evento e quasi pronto.',
          items: ['Orari di check-in e accesso alla sala.', 'Spostamenti locali tra sessioni e pause.'],
          placeholder: 'I dettagli di accesso restano placeholder-backed finche la pagina sede non viene ridisegnata.',
        },
      ],
    },
    registration: {
      eyebrow: 'Registrazione',
      title: 'Come partecipare al workshop',
      intro: 'Questa pagina fara da ponte tra il form esterno e le note pratiche che servono prima della registrazione.',
      sections: [
        {
          eyebrow: 'Modulo',
          title: 'Dove avviene la registrazione',
          body: 'La pagina finale portera al form senza appesantire la route con dettagli inutili.',
          items: ['Passaggio a un modulo esterno.', 'Flusso di partecipazione semplice.'],
          placeholder: 'Le indicazioni sul form restano provvisorie finche il flusso di raccolta non e attivo.',
        },
        {
          eyebrow: 'Tempistiche',
          title: 'Quando registrarsi e cosa verificare',
          body: 'La pagina deve rendere visibili le tempistiche e i vincoli di pianificazione senza sovraccaricare la route.',
          items: ['Rivedi la data dell evento e la fattibilita del viaggio.', 'Conferma la finestra di partecipazione prima di inviare.'],
          placeholder: 'Il copy sulle tempistiche sara sincronizzato con il testo finale della scadenza.',
        },
        {
          eyebrow: 'Checklist',
          title: 'Cosa preparare prima di inviare',
          body: 'Una lista breve aiuta i partecipanti a compilare il form con le giuste aspettative.',
          items: ['Nome e affiliazione.', 'Un controllo rapido su viaggio e disponibilita.'],
          placeholder: 'Il linguaggio della checklist resta volutamente leggero per ora.',
        },
      ],
    },
    organizers: {
      eyebrow: 'Organizzatori',
      title: 'Chi sta rendendo possibile il workshop',
      intro: 'Questa pagina ospitera la panoramica del comitato e il contesto istituzionale dell evento.',
      sections: [
        {
          eyebrow: 'Comitato',
          title: 'Le persone che coordinano COMPASS',
          body: 'L elenco degli organizzatori puo restare breve inizialmente mentre le biografie dettagliate vengono gestite altrove.',
          items: ['Dottorandi organizzatori e chair.', 'Coordinamento accademico e operativo.'],
          placeholder: 'Le biografie del comitato saranno collegate quando la tabella dei ruoli finale sara pronta.',
        },
        {
          eyebrow: 'Hosting',
          title: 'Dove si ancora l evento',
          body: 'Questa sezione lascia spazio al contesto dell istituzione ospitante e al copy di acknowledgement senza duplicare la pagina sede.',
          items: ['Contesto dell istituzione ospitante.', 'Supporto locale e ownership della logistica.'],
          placeholder: 'Gli acknowledgement di hosting restano placeholder-backed per la fase di redesign.',
        },
        {
          eyebrow: 'Contatti',
          title: 'Chi contattare',
          body: 'La pagina finale potra offrire un percorso di contatto operativo semplice quando il testo pubblico sara stabilito.',
          items: ['Contatto generale del workshop.', 'Follow-up operativo per i partecipanti.'],
          placeholder: 'Il copy dei contatti resta generico finche la linea finale di ownership non e approvata.',
        },
      ],
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Risposte alle domande pratiche',
      intro: 'Uno spazio conciso per logistica, formato e partecipazione da tenere fuori dalla narrazione principale.',
      sections: [
        {
          eyebrow: 'Partecipazione',
          title: 'Cosa devono sapere prima di tutto i partecipanti',
          body: 'Il primo blocco FAQ puo rispondere alle domande base su partecipazione e registrazione senza forzare gli utenti nelle pagine di dettaglio.',
          items: ['La partecipazione e gratuita.', 'Il workshop e pensato per un pubblico in presenza e focalizzato.'],
          placeholder: 'Il testo sulla partecipazione sara finalizzato con la pagina registrazione.',
        },
        {
          eyebrow: 'Logistica',
          title: 'Cosa resta da confermare per i partecipanti',
          body: 'Questo blocco e riservato agli elementi pratici, utili e ancora soggetti a conferma finale.',
          items: ['Accesso alla sala e circolazione nella sede.', 'Viaggio e spostamenti locali a Pisa.'],
          placeholder: 'Il copy logistico resta provvisorio finche le note della sede non sono complete.',
        },
        {
          eyebrow: 'Materiali',
          title: 'Cosa aspettarsi dai materiali del workshop',
          body: 'Un breve blocco FAQ puo gestire lingua, condivisione delle slide e eventuali note successive all evento.',
          items: ['Materiali di sessione e link ai talk.', 'Comunicazioni successive al workshop.'],
          placeholder: 'Le indicazioni sui materiali restano leggere finche il pacchetto contenuti non e pronto.',
        },
      ],
    },
  },
} as const satisfies Record<Locale, Record<RichPageKey, RichPageContent>>;

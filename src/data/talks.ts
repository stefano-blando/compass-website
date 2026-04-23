import type { Talk } from './types';

export const talks: Talk[] = [
  {
    slug: 'opening-remarks-vandin-rettore',
    title: {
      en: 'Opening Remarks',
      it: 'Saluti introduttivi',
    },
    abstract: {
      en: 'Workshop welcome and institutional framing by Andrea Vandin and the Rector of Scuola Superiore Sant’Anna.',
      it: 'Benvenuto al workshop e saluti istituzionali a cura di Andrea Vandin e del Rettore della Scuola Superiore Sant’Anna.',
    },
    speakerSlugs: ['andrea-vandin', 'rettore-sssa'],
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
      en: 'Confirmed keynote contribution in the opening morning slot.',
      it: 'Contributo keynote confermato nello slot di apertura del mattino.',
    },
    speakerSlugs: ['guido-germano'],
    sessionSlug: 'keynote-1',
    startsAt: '2026-05-18T09:45:00+02:00',
  },
  {
    slug: 'panel-1-stefano-blando',
    title: {
      en: 'Stefano Blando',
      it: 'Stefano Blando',
    },
    abstract: {
      en: 'Current panel contribution listed in the latest workshop agenda.',
      it: 'Contributo di panel riportato nell agenda di workshop piu recente.',
    },
    speakerSlugs: ['stefano-blando'],
    sessionSlug: 'panel-1-ai-methods',
    startsAt: '2026-05-18T11:00:00+02:00',
  },
  {
    slug: 'panel-1-biancamaria-bombino',
    title: {
      en: 'Bianca Bombino',
      it: 'Bianca Bombino',
    },
    abstract: {
      en: 'Current panel contribution listed in the latest workshop agenda.',
      it: 'Contributo di panel riportato nell agenda di workshop piu recente.',
    },
    speakerSlugs: ['biancamaria-bombino'],
    sessionSlug: 'panel-1-ai-methods',
    startsAt: '2026-05-18T11:15:00+02:00',
  },
  {
    slug: 'panel-1-simone-tonini',
    title: {
      en: 'Simone Tonini',
      it: 'Simone Tonini',
    },
    abstract: {
      en: 'Current panel contribution listed in the latest workshop agenda.',
      it: 'Contributo di panel riportato nell agenda di workshop piu recente.',
    },
    speakerSlugs: ['simone-tonini'],
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
      en: 'Current panel contribution listed in the latest workshop agenda.',
      it: 'Contributo di panel riportato nell agenda di workshop piu recente.',
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
    slug: 'keynote-pagopa-ad',
    title: {
      en: 'Digital Transformation & Technologies — CEO, PagoPA',
      it: 'Digital Transformation e Tecnologie — AD, PagoPA',
    },
    abstract: {
      en: 'Institutional keynote by the CEO of PagoPA on digital transformation and technologies.',
      it: 'Keynote istituzionale dell Amministratore Delegato di PagoPA su digital transformation e tecnologie.',
    },
    speakerSlugs: ['pagopa-ad'],
    sessionSlug: 'keynote-pagopa',
    startsAt: '2026-05-18T12:00:00+02:00',
  },
  {
    slug: 'keynote-prabhani-don',
    title: {
      en: 'Prabhani Kuruppumullage Don',
      it: 'Prabhani Kuruppumullage Don',
    },
    abstract: {
      en: 'Confirmed keynote contribution in the early afternoon slot.',
      it: 'Contributo keynote confermato nello slot di primo pomeriggio.',
    },
    speakerSlugs: ['prabhani-don'],
    sessionSlug: 'keynote-2',
    startsAt: '2026-05-18T13:45:00+02:00',
  },
  {
    slug: 'panel-2-lorenzo-emer',
    title: {
      en: 'The hidden structure of innovation networks',
      it: 'La struttura nascosta delle reti dell’innovazione',
    },
    abstract: {
      en: 'Innovation emerges from complex collaboration patterns - among inventors, firms, or institutions. However, not much is known about the overall mesoscopic structure around which inventive activity self-organizes. Here, we tackle this problem by employing patent data to analyze both individual (co-inventorship) and organization (co-ownership) networks in three strategic domains (artificial intelligence, biotechnology and semiconductors). We characterize the mesoscale structure (in terms of clusters) of each domain by comparing two alternative methods: a standard baseline - modularity maximization - and one based on the minimization of the Bayesian Information Criterion, within the Stochastic Block Model and its degree-corrected variant. We find that, across sectors, inventor networks are denser and more clustered than organization ones - consistent with the presence of small recurrent teams embedded into broader institutional hierarchies - whereas organization networks have neater hierarchical role-based structures, with few bridging firms coordinating the most peripheral ones. We also find that the discovered meso-structures are connected to innovation output. In particular, Lorenz curves of forward citations show a pervasive inequality in technological influence: across sectors and methods, both inventor (especially) and organization networks consistently show high levels of concentration of citations in a few of the discovered clusters. Our results demonstrate that the baseline modularity-based method may not be capable of fully capturing the way collaborations drive the spreading of inventive impact across technological domains. This is due to the presence of local hierarchies that call for more refined tools based on Bayesian inference.',
      it: 'L’innovazione emerge da modelli di collaborazione complessi tra inventori, imprese o istituzioni. Tuttavia, non si sa molto sulla struttura mesoscopica complessiva attorno alla quale l’attività inventiva si auto-organizza. In questo lavoro affrontiamo il problema utilizzando i dati sui brevetti per analizzare le reti sia individuali (co-inventore) che organizzative (co-proprietà) in tre domini strategici (intelligenza artificiale, biotecnologie e semiconduttori). Caratterizziamo la struttura a mesoscala (in termini di cluster) di ciascun dominio confrontando due metodi alternativi: una baseline standard — la massimizzazione della modularità — e un metodo basato sulla minimizzazione del Bayesian Information Criterion, all’interno dello Stochastic Block Model e della sua variante corretta per il grado. Troviamo che, in tutti i settori, le reti degli inventori sono più dense e più raggruppate di quelle delle organizzazioni — coerentemente con la presenza di piccoli team ricorrenti inseriti in gerarchie istituzionali più ampie — mentre le reti delle organizzazioni hanno strutture gerarchiche basate sui ruoli più definite, con poche imprese “ponte” che coordinano quelle più periferiche. Troviamo inoltre che le meso-strutture scoperte sono collegate all’output dell’innovazione. In particolare, le curve di Lorenz delle citazioni future mostrano una pervasiva disuguaglianza nell’influenza tecnologica: in tutti i settori e metodi, sia le reti degli inventori (specialmente) che quelle delle organizzazioni mostrano costantemente alti livelli di concentrazione di citazioni in pochi dei cluster identificati. I nostri risultati dimostrano che il metodo standard basato sulla modularità potrebbe non essere in grado di catturare appieno il modo in cui le collaborazioni guidano la diffusione dell’impatto inventivo tra i domini tecnologici. Ciò è dovuto alla presenza di gerarchie locali che richiedono strumenti più raffinati basati sull’inferenza bayesiana.',
    },
    speakerSlugs: ['lorenzo-emer'],
    sessionSlug: 'panel-2-networks-nlp',
    startsAt: '2026-05-18T14:30:00+02:00',
  },
  {
    slug: 'panel-2-alice-musso',
    title: {
      en: 'Alice Musso',
      it: 'Alice Musso',
    },
    abstract: {
      en: 'Current panel contribution listed in the latest workshop agenda.',
      it: 'Contributo di panel riportato nell agenda di workshop piu recente.',
    },
    speakerSlugs: ['alice-musso'],
    sessionSlug: 'panel-2-networks-nlp',
    startsAt: '2026-05-18T14:42:00+02:00',
  },
  {
    slug: 'panel-2-giuseppe-f-squillace',
    title: {
      en: 'Giuseppe Squillace (online)',
      it: 'Giuseppe Squillace (online)',
    },
    abstract: {
      en: 'Current panel contribution listed in the latest workshop agenda. Participating remotely.',
      it: 'Contributo di panel riportato nell agenda di workshop piu recente. Partecipazione da remoto.',
    },
    speakerSlugs: ['giuseppe-f-squillace'],
    sessionSlug: 'panel-2-networks-nlp',
    startsAt: '2026-05-18T14:54:00+02:00',
  },
  {
    slug: 'panel-2-riccardo-porcedda',
    title: {
      en: 'Riccardo Porcedda',
      it: 'Riccardo Porcedda',
    },
    abstract: {
      en: 'Current panel contribution listed in the latest workshop agenda.',
      it: 'Contributo di panel riportato nell agenda di workshop piu recente.',
    },
    speakerSlugs: ['riccardo-porcedda'],
    sessionSlug: 'panel-2-networks-nlp',
    startsAt: '2026-05-18T15:06:00+02:00',
  },
  {
    slug: 'panel-2-anna-gallo',
    title: {
      en: 'Anna Gallo',
      it: 'Anna Gallo',
    },
    abstract: {
      en: 'Current panel contribution listed in the latest workshop agenda.',
      it: 'Contributo di panel riportato nell agenda di workshop piu recente.',
    },
    speakerSlugs: ['anna-gallo'],
    sessionSlug: 'panel-2-networks-nlp',
    startsAt: '2026-05-18T15:18:00+02:00',
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
    sessionSlug: 'panel-2-networks-nlp',
    startsAt: '2026-05-18T15:30:00+02:00',
  },
  {
    slug: 'keynote-ai-regulation-tbc',
    title: {
      en: 'Senior Expert on AI Regulation & Ethics (TBC)',
      it: 'Senior Expert on AI Regulation & Ethics (TBC)',
    },
    abstract: {
      en: 'Provisional keynote slot title from the workshop PDF while the speaker is still being identified.',
      it: 'Titolo provvisorio dello slot keynote tratto dal PDF del workshop, mentre il relatore e ancora in individuazione.',
    },
    speakerSlugs: ['senior-expert-ai-regulation-tbc'],
    sessionSlug: 'keynote-3-tbc',
    startsAt: '2026-05-18T16:15:00+02:00',
  },
  {
    slug: 'panel-3-roberta-romano',
    title: {
      en: 'From Risk to Protection: Vulnerability as a Benchmark for European AI Governance',
      it: 'Dal rischio alla protezione: la vulnerabilità come benchmark per la governance europea dell’IA',
    },
    abstract: {
      en: 'The advent of AI, particularly generative AI, raises numerous concerns regarding the protection of individuals most exposed to the risks arising from the pervasive use of new technologies. The EU legislator has mandated respect for the category of so-called "vulnerable" subjects. This discussion aims to address the concept of vulnerability in light of the AI Act, envisaging a governance model in which the protection of fragility becomes the fundamental benchmark for the legitimacy of technological innovation.',
      it: 'L’avvento dell’IA, in particolare dell’IA generativa, solleva numerose preoccupazioni riguardo alla protezione degli individui più esposti ai rischi derivanti dall’uso pervasivo delle nuove tecnologie. Il legislatore UE ha imposto il rispetto della categoria dei cosiddetti soggetti "vulnerabili". Questa discussione mira ad affrontare il concetto di vulnerabilità alla luce dell’AI Act, prefigurando un modello di governance in cui la protezione della fragilità diventi il benchmark fondamentale per la legittimità stessa dell’innovazione tecnologica.',
    },
    speakerSlugs: ['roberta-romano'],
    sessionSlug: 'panel-3-legal-ethics',
    startsAt: '2026-05-18T17:00:00+02:00',
  },
  {
    slug: 'panel-3-roberta-savella',
    title: {
      en: 'Regulation vs Innovation? Unpacking the dichotomy to foster responsible research',
      it: 'Regolamentazione vs Innovazione? Analisi della dicotomia per favorire una ricerca responsabile',
    },
    abstract: {
      en: 'The regulatory landscape in the European Union has seen two different trends in the past few years: after a wave of regulations which left us with the AI Act, the Digital Services Act, the Data Governance Act, the Data Act and other landmark pieces of legislation, the new direction is going towards simplification, following the narrative that “regulation stifles innovation”. This talk will challenge this assumption and discuss responsible research practices to foster ethical innovation in the field of new technologies.',
      it: 'Il panorama normativo dell’Unione Europea ha visto due tendenze diverse negli ultimi anni: dopo un’ondata di regolamenti che ci ha lasciato l’AI Act, il Digital Services Act, il Data Governance Act, il Data Act e altri atti legislativi storici, la nuova direzione va verso la semplificazione, seguendo la narrativa secondo cui “la regolamentazione soffoca l’innovazione”. Questo intervento metterà in discussione questo presupposto e discuterà pratiche di ricerca responsabile per favorire l’innovazione etica nel campo delle nuove tecnologie.',
    },
    speakerSlugs: ['roberta-savella'],
    sessionSlug: 'panel-3-legal-ethics',
    startsAt: '2026-05-18T17:15:00+02:00',
  },
  {
    slug: 'panel-3-vittoria-caponecchia',
    title: {
      en: 'Significant Harm in EU Law: When Voice-Based Virtual Assistants Are Prohibited',
      it: 'Il danno significativo nel diritto dell’UE: quando gli assistenti virtuali vocali sono proibiti',
    },
    abstract: {
      en: 'In a world pervaded by artificial intelligence, the law must maintain a predominant role in safeguarding human rights, interests, and legal certainty. A key issue concerns the interpretation of the AI Act, particularly Article 5(1)(a), which prohibits AI systems using manipulative, deceptive, or subliminal techniques that cause significant harm. This analysis aims to identify when such behaviors amount to manipulation, deception, or subliminal influence, providing guidance both ex ante for developers and ex post for affected users.',
      it: 'In un mondo pervaso dall’intelligenza artificiale, il diritto deve mantenere un ruolo predominante nella salvaguardia dei diritti umani, degli interessi e della certezza del diritto. Una questione chiave riguarda l’interpretazione dell’AI Act, in particolare l’articolo 5(1)(a), che vieta i sistemi di IA che utilizzano tecniche manipolatorie, ingannevoli o subliminali che causano danni significativi. Questa analisi mira a identificare quando tali comportamenti costituiscano manipolazione, inganno o influenza subliminale, fornendo una guida sia ex ante per gli sviluppatori che ex post per gli utenti interessati.',
    },
    speakerSlugs: ['vittoria-caponecchia'],
    sessionSlug: 'panel-3-legal-ethics',
    startsAt: '2026-05-18T17:30:00+02:00',
  },
  {
    slug: 'panel-3-elio-grande',
    title: {
      en: 'Acting without action: Ethics and responsibility in AI systems',
      it: 'Agire senza azione: etica e responsabilità nei sistemi di IA',
    },
    abstract: {
      en: 'What kind of acting and responsibility arises with AI? AI systems appear capable of an “acting without action” which calls for a regime of moral responsibility different from that of fault tout court. Building upon the recognition of the vulnerabilities of the agents involved, a kind of dynamically negotiated responsibility arises, aligning with legal trends toward objective liability. This approach could do justice to solutions like the logging of interactions provided for in the EU Artificial Intelligence Act.',
      it: 'Che tipo di azione e responsabilità sorge con l’IA? I sistemi di IA appaiono capaci di un "agire senza azione" che richiede un regime di responsabilità morale diverso dalla colpa tout court. Partendo dal riconoscimento delle vulnerabilità degli agenti coinvolti, emerge una sorta di responsabilità negoziata dinamicamente, allineandosi alle tendenze giuridiche verso la responsabilità oggettiva. Tale approccio potrebbe valorizzare soluzioni come la registrazione delle interazioni prevista dall’AI Act dell’UE.',
    },
    speakerSlugs: ['elio-grande'],
    sessionSlug: 'panel-3-legal-ethics',
    startsAt: '2026-05-18T17:45:00+02:00',
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
    sessionSlug: 'panel-3-legal-ethics',
    startsAt: '2026-05-18T17:55:00+02:00',
  },
  {
    slug: 'closing-remarks-francesca-chiaromonte',
    title: {
      en: 'Closing Remarks',
      it: 'Chiusura',
    },
    abstract: {
      en: 'Current working agenda lists Francesca Chiaromonte for the workshop closing, pending final confirmation.',
      it: 'L agenda di lavoro attuale indica Francesca Chiaromonte per la chiusura del workshop, in attesa di conferma finale.',
    },
    speakerSlugs: ['francesca-chiaromonte'],
    sessionSlug: 'closing-remarks',
    startsAt: '2026-05-18T18:00:00+02:00',
  },
];

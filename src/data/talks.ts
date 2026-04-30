import type { Talk } from './types';

export const talks: Talk[] = [
  {
    slug: 'opening-remarks-ruggieri-chiaromonte',
    title: {
      en: 'Opening Remarks',
      it: 'Saluti introduttivi',
    },
    abstract: {
      en: 'Workshop welcome and institutional framing by Salvatore Ruggieri and Francesca Chiaromonte.',
      it: 'Benvenuto al workshop e saluti istituzionali a cura di Salvatore Ruggieri e Francesca Chiaromonte.',
    },
    speakerSlugs: ['salvatore-ruggieri', 'francesca-chiaromonte'],
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
    sessionSlug: 'keynote-2',
    startsAt: '2026-05-18T12:00:00+02:00',
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
      en: 'RAwR: Role-Aware Rewiring via Approximate Equitable Partition',
      it: 'RAwR: Role-Aware Rewiring via Approximate Equitable Partition',
    },
    abstract: {
      en: 'Graph neural networks (GNNs) are effective for node classification when labels can leverage information from local neighborhoods. However, they can struggle when prediction depends on long-range interactions, due to well-known problems such as oversquashing. To address this issue, prior work has proposed rewiring the graph topology to improve signal propagation. In this work, we introduce RAwR, a novel and efficient rewiring method that creates a quotient graph from an equitable partition and connects it to the input graph. This enables faster communication between nodes with the same structural role -- i.e., the same Weisfeiler-Leman graph coloring -- and reduces the total effective resistance. Furthermore, an approximate definition of the equitable partition allows for controllable shrinking of the quotient graph until it collapses to a single node, thereby recovering the well-known Master Node rewiring technique. Across a broad evaluation benchmark, including standard homophilic and heterophilic datasets as well as synthetic graphs specifically designed for long-range interactions, RAwR achieves state-of-the-art results. We also analytically investigate the improvements that RAwR can achieve in an idealized teacher-student model of linear GNNs, explaining when and why role-based rewiring helps. This theoretical insight leads to the definition of Spectral Role Lift (SRL), a measure useful for identifying the approximate equitable partition that leads to the best performance.',
      it: 'Le reti neurali a grafo (GNN) sono efficaci per la classificazione dei nodi quando le etichette possono sfruttare le informazioni dei vicini locali. Tuttavia, possono incontrare difficoltà quando la previsione dipende da interazioni a lungo raggio, a causa di problemi noti come l\'oversquashing. Per affrontare questo problema, lavori precedenti hanno proposto il rewiring della topologia del grafo per migliorare la propagazione del segnale. In questo lavoro, introduciamo RAwR, un metodo di rewiring innovativo ed efficiente che crea un grafo quoziente da una partizione equa e lo connette al grafo di input. Ciò consente una comunicazione più rapida tra nodi con lo stesso ruolo strutturale (ovvero, la stessa colorazione del grafo di Weisfeiler-Leman) e riduce la resistenza effettiva totale. Inoltre, una definizione approssimata della partizione equa consente un restringimento controllabile del grafo quoziente fino a quando non collassa in un singolo nodo, recuperando così la nota tecnica di rewiring Master Node. Attraverso un ampio benchmark di valutazione, che include dataset omofili ed eterofili standard e grafi sintetici progettati specificamente per interazioni a lungo raggio, RAwR ottiene risultati all\'avanguardia. Indaghiamo inoltre analiticamente i miglioramenti che RAwR può ottenere in un modello idealizzato teacher-student di GNN lineari, spiegando quando e perché il rewiring basato sul ruolo è d\'aiuto. Questa intuizione teorica porta alla definizione dello Spectral Role Lift (SRL), una misura utile per identificare la partizione equa approssimata che porta alle migliori prestazioni.',
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
    sessionSlug: 'keynote-1',
    startsAt: '2026-05-18T09:45:00+02:00',
  },
  {
    slug: 'keynote-federica-casarosa',
    title: {
      en: 'Disinformation and Democracy: the role of courts at the boundary between the rule of law and freedom of expression in the digital society',
      it: 'Disinformazione e democrazia: il ruolo delle corti al confine tra stato di diritto e libertà di espressione nella società digitale',
    },
    abstract: {
      en: 'The presentation will argue that the rise of AI‑driven disinformation strategies fundamentally alters the relationship between freedom of expression and the rule of law by amplifying, accelerating, and obscuring manipulative political communication at an unprecedented scale. This development challenges the judiciary’s classical role as a guardian of free expression, raising the risk that interventions justified by opaque AI systems could be misused in contexts of democratic backsliding. Within this transformed landscape, EU instruments such as the Digital Services Act and the AI Act reconfigure the rule of law by imposing transparency, accountability, and risk‑mitigation duties on private actors whose AI technologies increasingly shape democratic discourse.',
      it: 'La presentazione sosterrà che l\'ascesa delle strategie di disinformazione guidate dall\'IA altera fondamentalmente il rapporto tra libertà di espressione e stato di diritto ampliando, accelerando e oscurando la comunicazione politica manipolatoria su una scala senza precedenti. Questo sviluppo sfida il ruolo classico della magistratura come garante della libera espressione, aumentando il rischio che interventi giustificati da sistemi di IA opachi possano essere usati in modo improprio in contesti di regressione democratica. In questo panorama trasformato, strumenti UE come il Digital Services Act e l\'AI Act riconfigurano lo stato di diritto imponendo obblighi di trasparenza, responsabilità e mitigazione del rischio ad attori privati le cui tecnologie di IA modellano sempre più il discorso democratico.',
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
    slug: 'closing-remarks-talk',
    title: {
      en: 'Closing Remarks',
      it: 'Conclusioni',
    },
    abstract: {
      en: 'Final takeaway and workshop wrap-up by Andrea Vandin.',
      it: 'Sintesi finale e chiusura del workshop a cura di Andrea Vandin.',
    },
    speakerSlugs: ['andrea-vandin'],
    sessionSlug: 'closing-remarks',
    startsAt: '2026-05-18T17:15:00+02:00',
  },
];

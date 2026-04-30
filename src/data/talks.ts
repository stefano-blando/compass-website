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
      en: 'Model Readability and Explanatory Alignment',
      it: 'Leggibilità del Modello e Allineamento Esplicativo',
    },
    abstract: {
      en: 'Feature attribution is the dominant paradigm for explaining the predictions of complex machine learning models like neural networks. However, most existing methods offer little guarantee of reflecting the model\'s prediction-making process. We define the notion of explanatory alignment and argue that it is central to trustworthy predictive modeling: in short, it requires that explanations directly underlie predictions rather than serve as rationalizations. We present model readability as a design principle enabling alignment, and Pointwise-interpretable Networks (PiNets) as a modeling framework to pursue it in a deep learning context. PiNets combine statistical intelligence with a pseudo-linear structure that yields instance-wise linear predictions in an arbitrary feature space. We illustrate their use on image classification and segmentation tasks, demonstrating that PiNets produce explanations that are not only aligned by design but also faithful across other dimensions: meaningfulness, robustness, and sufficiency.',
      it: 'L\'attribuzione delle caratteristiche è il paradigma dominante per spiegare le previsioni di modelli complessi di machine learning come le reti neurali. Tuttavia, la maggior parte dei metodi esistenti offre scarse garanzie di riflettere il processo decisionale del modello. Definiamo la nozione di allineamento esplicativo e sosteniamo che sia centrale per una modellazione predittiva affidabile: in breve, richiede che le spiegazioni sottendano direttamente le previsioni anziché servire come razionalizzazioni. Presentiamo la leggibilità del modello come principio di progettazione che consente l\'allineamento e le Pointwise-interpretable Networks (PiNets) come framework di modellazione per perseguirlo in un contesto di deep learning. Le PiNets combinano l\'intelligenza statistica con una struttura pseudo-lineare che produce previsioni lineari per singola istanza in uno spazio di caratteristiche arbitrario. Illustriamo il loro utilizzo in compiti di classificazione e segmentazione delle immagini, dimostrando che le PiNets producono spiegazioni che non sono solo allineate per progettazione, ma anche fedeli attraverso altre dimensioni: significatività, robustezza e sufficienza.',
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
      en: 'The advent of AI, particularly generative AI, raises numerous concerns regarding the protection of individuals most exposed to the risks arising from the pervasive use of new technologies across various aspects of daily life. The EU legislator has acknowledged these challenges, consequently mandating respect for the category of so-called "vulnerable" subjects. The discussion aims to address the concept of vulnerability in light of the AI Act, envisaging a governance model in which the protection of fragility becomes the fundamental benchmark for the very legitimacy of technological innovation.',
      it: 'L’avvento dell’IA, in particolare dell’IA generativa, solleva numerose preoccupazioni riguardo alla protezione degli individui più esposti ai rischi derivanti dall’uso pervasivo delle nuove tecnologie in vari aspetti della vita quotidiana. Il legislatore dell’UE ha riconosciuto queste sfide, imponendo di conseguenza il rispetto della categoria dei cosiddetti soggetti "vulnerabili". La discussione mira ad affrontare il concetto di vulnerabilità alla luce dell’AI Act, prospettando un modello di governance in cui la protezione della fragilità diventi il parametro fondamentale per la legittimità stessa dell’innovazione tecnologica.',
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
      en: 'The regulatory landscape in the European Union has seen two different trends in the past few years: after a wave of regulations which left us with the AI Act, the Digital Services Act, the Data Governance Act, the Data Act (just to name a few) and other landmark pieces of legislation, the new direction is going towards simplification, following the narrative that “regulation stifles innovation”. This talk will challenge this assumption and discuss responsible research practices to foster ethical innovation in the field of new technologies.',
      it: 'Il panorama normativo dell’Unione Europea ha visto due tendenze diverse negli ultimi anni: dopo un’ondata di regolamenti che ci hanno lasciato l’AI Act, il Digital Services Act, il Data Governance Act, il Data Act (solo per citarne alcuni) e altri atti legislativi storici, la nuova direzione va verso la semplificazione, seguendo la narrazione che "la regolamentazione soffoca l’innovazione". Questo talk metterà in discussione questo assunto e discuterà pratiche di ricerca responsabile per favorire l’innovazione etica nel campo delle nuove tecnologie.',
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
      en: 'In a world pervaded by artificial intelligence, the law must maintain a predominant role in safeguarding human rights, interests, and legal certainty. However, it is increasingly difficult for regulation to keep pace with rapidly evolving technologies. A key issue concerns the interpretation of the AI Act, particularly Article 5(1)(a), which prohibits AI systems using manipulative, deceptive, or subliminal techniques that cause significant harm. Yet, the notion of “significant harm” is not defined, leaving interpreters to determine its meaning and increasing discretion and legal uncertainty. In a highly technological context, it is therefore crucial to identify the threshold beyond which harm becomes significant, in order to prevent prejudicial situations and ambiguities in enforcement. This requires analyzing European legislation on harm, its subcategories, and related concepts such as severity and legal violation. An interesting case study is that of voice-based virtual assistants, which use NLP and API techniques to provide timely responses to users. How might these systems manipulate or deceive users and lead to unconscious choices? And under what conditions could such conduct cause significant harm? This analysis aims to identify when such behaviors amount to manipulation, deception, or subliminal influence, providing guidance both ex ante for developers and ex post for affected users.',
      it: 'In un mondo pervaso dall\'intelligenza artificiale, la legge deve mantenere un ruolo predominante nella salvaguardia dei diritti umani, degli interessi e della certezza del diritto. Tuttavia, è sempre più difficile per la regolamentazione tenere il passo con tecnologie in rapida evoluzione. Una questione chiave riguarda l\'interpretazione dell\'AI Act, in particolare l\'articolo 5(1)(a), che vieta i sistemi di IA che utilizzano tecniche manipolatorie, ingannevoli o subliminali che causano danni significativi. Tuttavia, la nozione di "danno significativo" non è definita, lasciando agli interpreti il compito di determinarne il significato e aumentando la discrezionalità e l\'incertezza del diritto. In un contesto altamente tecnologico, è quindi cruciale identificare la soglia oltre la quale il danno diventa significativo, al fine di prevenire situazioni pregiudizievoli e ambiguità nell\'applicazione. Ciò richiede l\'analisi della legislazione europea sul danno, le sue sottocategorie e concetti correlati come la gravità e la violazione legale. Un caso di studio interessante è quello degli assistenti virtuali basati sulla voce, che utilizzano tecniche NLP e API per fornire risposte tempestive agli utenti. In che modo questi sistemi potrebbero manipolare o ingannare gli utenti e portare a scelte inconsapevoli? E a quali condizioni tale condotta potrebbe causare un danno significativo? Questa analisi mira a identificare quando tali comportamenti equivalgono a manipolazione, inganno o influenza subliminale, fornendo orientamenti sia ex ante per gli sviluppatori che ex post per gli utenti interessati.',
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
      en: 'What kind of acting and, consequently, of responsibility arises in the context of artificial intelligence systems? On the one hand, an artificial intelligence system appears capable of an “acting without action” – that is, without a subject – which emerges in our very relationship with the system itself. This would call for a regime of moral responsibility different from that of fault tout court. Rather, by building upon the recognition of the vulnerabilities of the agents involved, a kind of dynamically negotiated responsibility would seem to arise. On the other hand, this appears to align well with the more general legal orientation, which tends toward liability without fault, or objective liability. Setting aside doctrinal nuances, there may be a correspondence between the two domains, namely the ethical and the legal one. Such an approach, which will be described during the speech, could do justice to already proposed solutions, such as the logging of interactions provided for in the EU Artificial Intelligence Act.',
      it: 'Che tipo di agire e, di conseguenza, di responsabilità sorge nel contesto dei sistemi di intelligenza artificiale? Da un lato, un sistema di intelligenza artificiale appare capace di un "agire senza azione" – cioè senza un soggetto – che emerge proprio nel nostro rapporto con il sistema stesso. Ciò richiederebbe un regime di responsabilità morale diverso da quello della colpa tout court. Piuttosto, partendo dal riconoscimento delle vulnerabilità degli agenti coinvolti, sembrerebbe sorgere una sorta di responsabilità dinamicamente negoziata. D’altro canto, ciò appare in linea con l’orientamento giuridico più generale, che tende verso la responsabilità senza colpa, o responsabilità oggettiva. Mettendo da parte le sfumature dottrinali, potrebbe esserci una corrispondenza tra i due domini, quello etico e quello legale. Un tale approccio, che verrà descritto durante l’intervento, potrebbe rendere giustizia alle soluzioni già proposte, come la registrazione delle interazioni prevista dall’AI Act dell’UE.',
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
      en: 'Innovation emerges from complex collaboration patterns - among inventors, firms, or institutions. However, not much is known about the overall mesoscopic structure around which inventive activity self-organizes. Here, we tackle this problem by employing patent data to analyze both individual (co-inventorship) and organization (co-ownership) networks in three strategic domains (artificial intelligence, biotechnology and semiconductors). We characterize the mesoscale structure (in terms of clusters) of each domain by comparing two alternative methods: a standard baseline - modularity maximization - and one based on the minimization of the Bayesian Information Criterion, within the Stochastic Block Model and its degree-corrected variant. We find that, across sectors, inventor networks are denser and more clustered than organization ones - consistent with the presence of small recurrent teams embedded into broader institutional hierarchies - whereas organization networks have neater hierarchical role-based structures, with few bridging firms coordinating the most peripheral ones. We also find that the discovered meso-structures are connected to innovation output. In particular, Lorenz curves of forward citations show a pervasive inequality in technological influence: across sectors and methods, both inventor (especially) and organization networks consistently show high levels of concentration of citations in a few of the discovered clusters. Our results demonstrate that the baseline modularity-based method may not be capable of fully capturing the way collaborations drive the spreading of inventive impact across technological domains. This is due to the presence of local hierarchies that call for more refined tools based on Bayesian inference.',
      it: 'L’innovazione emerge da modelli di collaborazione complessi - tra inventori, aziende o istituzioni. Tuttavia, non si sa molto sulla struttura mesoscopica complessiva attorno alla quale si auto-organizza l’attività inventiva. In questo studio, affrontiamo il problema utilizzando i dati sui brevetti per analizzare sia le reti individuali (co-inventorship) che quelle organizzative (co-ownership) in tre domini strategici (intelligenza artificiale, biotecnologia e semiconduttori). Caratterizziamo la struttura a mesoscala (in termini di cluster) di ogni dominio confrontando due metodi alternativi: una baseline standard - la massimizzazione della modularità - e uno basato sulla minimizzazione del Bayesian Information Criterion, all’interno dello Stochastic Block Model e della sua variante corretta per il grado. Troviamo che, in tutti i settori, le reti degli inventori sono più dense e più raggruppate di quelle delle organizzazioni - coerentemente con la presenza di piccoli team ricorrenti inseriti in gerarchie istituzionali più ampie - mentre le reti delle organizzazioni hanno strutture basate sui ruoli gerarchici più nitide, con poche aziende di collegamento che coordinano quelle più periferiche. Troviamo inoltre che le meso-strutture scoperte sono collegate all’output dell’innovazione. In particolare, le curve di Lorenz delle citazioni future mostrano una disuguaglianza pervasiva nell’influenza tecnologica: in tutti i settori e metodi, sia le reti degli inventori (specialmente) che quelle delle organizzazioni mostrano costantemente alti livelli di concentrazione di citazioni in alcuni dei cluster scoperti. I nostri risultati dimostrano che il metodo basato sulla modularità di base potrebbe non essere in grado di catturare appieno il modo in cui le collaborazioni guidano la diffusione dell’impatto inventivo attraverso i domini tecnologici. Ciò è dovuto alla presenza di gerarchie locali che richiedono strumenti più raffinati basati sull’inferenza bayesiana.',
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
      en: 'Unveiling Signed Complexity: A Statistically Validated Bipartite Projection',
      it: 'Svelare la Signed Complexity: una proiezione bipartita statisticamente validata',
    },
    abstract: {
      en: 'Bipartite networks provide a fundamental insight into the organisation of complex real-world systems. A key challenge in modeling these systems is devising a monopartite projection that preserves the intricate information encoded within the original bipartite structure. We propose an unsupervised algorithm to obtain statistically validated projections of bipartite signed networks, according to which any two nodes sharing a statistically significant number of concordant (discordant) motifs are connected by a positive (negative) edge. By assessing statistical significance through four distinct Exponential Random Graph Models (ERGMs), we generate link-specific p-values filtered via multiple testing correction. After validating the method on synthetic configurations from a fully controllable generative model, we apply it to three real-world social networks. In all cases, the algorithm detects non-trivial mesoscopic structures that cannot be explained by the constraints of the null models, thus unveiling the authentic signed complexity of the underlying system. Finally, we show how the inherent flexibility of our framework allows for easy extensions to more sophisticated null models and different complex systems.',
      it: 'Le reti bipartite forniscono una visione fondamentale dell’organizzazione dei sistemi complessi del mondo reale. Una sfida chiave nella modellazione di questi sistemi è l’ideazione di una proiezione monopartitica che preservi le intricate informazioni codificate all’interno della struttura bipartita originale. Proponiamo un algoritmo non supervisionato per ottenere proiezioni statisticamente validate di reti bipartite signed, secondo cui due nodi che condividono un numero statisticamente significativo di motivi concordanti (discordanti) sono collegati da un arco positivo (negativo). Valutando la significatività statistica attraverso quattro distinti Exponential Random Graph Models (ERGM), generiamo p-value specifici per i collegamenti filtrati tramite correzione per test multipli. Dopo aver convalidato il metodo su configurazioni sintetiche da un modello generativo completamente controllabile, lo applichiamo a tre reti sociali del mondo reale. In tutti i casi, l’algoritmo rileva strutture mesoscopiche non banali che non possono essere spiegate dai vincoli dei modelli nulli, svelando così l’autentica complessità signed del sistema sottostante. Infine, mostriamo come la flessibilità intrinseca del nostro framework consenta facili estensioni a modelli nulli più sofisticati e a diversi sistemi complessi.',
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

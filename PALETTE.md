# Palette del sito

La palette canonica del sito e' definita nei CSS custom properties in `src/styles/global.css`.
I componenti usano anche alcuni colori hardcoded per sezioni immersive, hero, programma e visual network.

## Token principali

| Ruolo | Token | Valore | Descrizione | Uso principale |
|---|---|---:|---|---|
| Fondo pagina | `--page-bg` | `#f6f2ec` | Avorio caldo / sabbia chiara | Background globale del sito |
| Superficie | `--surface` | `rgba(255, 253, 249, 0.9)` | Bianco caldo semi-trasparente | Card, pannelli e contenitori chiari |
| Superficie forte | `--surface-strong` | `#fffdf9` | Bianco caldo pieno | Superfici chiare piu' nette |
| Superficie muted | `--surface-muted` | `#ece3d7` | Beige/grigio caldo | Fondi secondari e placeholder |
| Superficie elevata | `--surface-elevated` | `rgba(255, 255, 255, 0.78)` | Bianco semi-trasparente | Layer elevati e pannelli glass |
| Testo principale | `--ink` | `#142033` | Blu-notte | Testo primario, heading, elementi scuri |
| Testo secondario | `--ink-soft` | `#495368` | Grigio-blu | Testi descrittivi e metadati |
| Accento primario | `--accent` | `#7e2434` | Bordeaux istituzionale | CTA, eyebrow, link attivi, highlight |
| Accento forte | `--accent-strong` | `#5f1624` | Bordeaux scuro | Hover dei pulsanti primari |
| Accento soft | `--accent-soft` | `rgba(126, 36, 52, 0.1)` | Bordeaux trasparente | Badge, chip e stati soft |
| Accento freddo | `--accent-cool` | `#375f8a` | Blu medio | Dettagli freddi, gradienti e accenti secondari |
| Linee | `--line` | `rgba(20, 32, 51, 0.12)` | Navy trasparente | Bordi e separatori |
| Ombra | `--shadow` | `0 20px 52px rgba(20, 32, 51, 0.08)` | Ombra soft navy | Card e header |
| Ombra forte | `--shadow-strong` | `0 24px 64px rgba(20, 32, 51, 0.12)` | Ombra navy piu' marcata | Elementi in hover o in evidenza |

## Colori ambientali globali

| Valore | Descrizione | Uso |
|---:|---|---|
| `rgba(55, 95, 138, 0.16)` | Blu medio trasparente | Radial gradient sul fondo pagina |
| `rgba(126, 36, 52, 0.14)` | Bordeaux trasparente | Radial gradient sul fondo pagina |
| `rgba(255, 255, 255, 0.55)` | Bianco trasparente | Velatura luminosa del background |
| `rgba(126, 36, 52, 0.18)` | Bordeaux soft | Atmosfera laterale del body |
| `rgba(55, 95, 138, 0.16)` | Blu soft | Atmosfera laterale del body |

## Palette sezioni speciali

| Area | Valori | Descrizione | File |
|---|---|---|---|
| Network background | `#1a3245`, `#355f8a`, `#ff6228`, `#9ab7cf` | Navy, blu, arancio acceso, azzurro chiaro per particelle e connessioni | `src/components/home/HomeNetworkBackground.astro` |
| Programme preview dark | `#14232f`, `#182833`, `#1f3444`, `#f2f4f7`, `#f3f6f8` | Sezione scura blu-notte con testo chiaro | `src/components/home/ProgrammePreviewSection.astro` |
| Card illustrative blu | `#3c5168`, `#223445`, `#172636` | Gradienti blu profondi per card media | `src/components/home/HeroSection.astro`, `src/components/home/ProgrammePreviewSection.astro` |
| Card illustrative calde | `#765057`, `#b78d7e`, `#7d5e51` | Variante calda rosa-bruno per card media | `src/components/home/HeroSection.astro` |
| Card programma calde | `#7b5a58`, `#aa8165`, `#6b4a47` | Variante terracotta/bruno per card del programma | `src/components/home/ProgrammePreviewSection.astro` |
| Card illustrative blu alternativa | `#243140`, `#172636`, `#475f73` | Variante navy con blu desaturato | `src/components/home/HeroSection.astro` |
| Micro-accento arancio | `#ff6228`, `rgba(255, 98, 40, ...)`, `rgba(255, 122, 60, ...)` | Accento caldo usato in particelle, bordi decorativi e glow | Componenti home |
| Azzurro soft | `#9ab7cf`, `rgba(141, 185, 216, ...)` | Accento freddo chiaro per network e dettagli | Componenti home |

## Sintesi cromatica

| Famiglia | Colori chiave | Ruolo |
|---|---|---|
| Caldi chiari | `#f6f2ec`, `#fffdf9`, `#ece3d7` | Base editoriale, fondi e superfici |
| Navy / inchiostro | `#142033`, `#14232f`, `#182833`, `#1f3444` | Tipografia, sezioni scure, profondita' |
| Bordeaux | `#7e2434`, `#5f1624` | Identita', CTA, stati attivi |
| Blu | `#375f8a`, `#355f8a`, `#9ab7cf` | Accento freddo, connessioni, visual network |
| Arancio | `#ff6228` | Accento puntuale ad alta energia |

## Nota d'uso

Per coerenza visiva, nuovi componenti dovrebbero preferire i token in `:root` rispetto a nuovi colori hardcoded.
I colori hardcoded esistenti hanno senso soprattutto nelle sezioni decorative o immersive dove servono gradienti specifici.

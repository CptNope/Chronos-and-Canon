import { SupportedLanguage } from '../types';

export interface UiTranslations {
  // Navigation & General
  categories: Record<string, string>;

  // AI Assistant
  assistant: {
    headerTag: string;
    headerTitle: string;
    headerSubtitle: string;
    modeLabel: string;
    curatedQueries: string;
    sampleQueries: string[];
    userRole: string;
    assistantRole: string;
    analyzing: string;
    inputPlaceholder: (mode: string) => string;
    sendBtn: string;
    initialGreeting: (mode: string) => string;
    fallbackGenesis6Enoch: string;
    fallbackRephaimUgarit: string;
    fallbackJudeEnoch: string;
    fallbackFlood: string;
    fallbackDefault: (query: string, mode: string) => string;
  };

  // Ancient Term Modal
  termModal: {
    literalDefinition: string;
    etymology: string;
    scholarlyNotes: string;
    occurrences: string;
    relatedTerms: string;
    close: string;
  };

  // Offline & PWA
  pwa: {
    offlineBanner: string;
    installApp: string;
    installAppTitle: string;
    installIos: string;
    installIosTitle: string;
    step1: string;
    step2: string;
    step3: string;
    gotIt: string;
  };

  // Explore Texts
  explore: {
    headerTag: string;
    headerTitle: string;
    headerSubtitle: string;
    readingModes: {
      sideBySide: string;
      translationOnly: string;
      originalOnly: string;
    };
    cataloguedWorks: (count: number) => string;
    allTraditions: string;
    lostBookTag: string;
    lostBookNotice: string;
    chronologyTitle: string;
    settingLabel: string;
    compositionLabel: string;
    earliestMsLabel: string;
    witnessTradition: string;
    keyWitnesses: string;
    digitalEditionsTitle: (count: number) => string;
    viewAllDigitalLibrary: string;
    openArchive: string;
    passagesTitle: (count: number) => string;
    noPassages: string;
    compareInViewer: string;
    clickableTerms: string;
    originalScriptLabel: (lang: string) => string;
    translationLabel: (langName: string) => string;
    translator: string;
    textCriticalNote: string;
  };

  // Compare View
  compare: {
    flagshipPresets: string;
    presets: {
      gen6Enoch: string;
      judeEnoch: string;
      ogRapiu: string;
      flood: string;
      chaoskampf: string;
    };
    addPassageLabel: string;
    selectPassagePlaceholder: string;
    columnHeader: (colNum: number, ref: string) => string;
    removeColumnTitle: string;
    chronologicalWitness: string;
    setting: string;
    composition: string;
    earliestMs: string;
    keyTerms: string;
    originalText: (lang: string) => string;
    bookmark: string;
    bookmarked: string;
    source: string;
  };

  // Digital Library
  library: {
    badge: string;
    tabEditions: (count: number) => string;
    tabRepositories: (count: number) => string;
    integrityNote: string;
    institutionsNote: string;
    searchPlaceholder: string;
    allTraditions: (count: number) => string;
    allFormatTypes: string;
    editionTypes: Record<string, string>;
    allInstitutions: string;
    showingEditions: (showing: number, total: number) => string;
    resetFilters: string;
    openRepository: string;
    highlights: string;
    repositoryName: string;
    viewCanonicalText: string;
    linkedCorpus: string;
    editionFeatures: string;
    compareInApp: string;
    openPublicArchive: string;
    noEditionsMatch: string;
    tryClearingSearch: string;
    resetSearch: string;
    repositoriesTitle: string;
    repositoriesSubtitle: string;
    primaryHost: string;
    archivalFocus: string;
    freeAccess: string;
    visitRepository: string;
    noteCopyrightTitle: string;
    noteCopyrightBody: string;
  };

  // Ancient Map
  map: {
    headerTag: string;
    tabMap: string;
    tabDirectory: (count: number) => string;
    regionFocus: string;
    regionNames: Record<string, string>;
    viewingRegion: (name: string) => string;
    searchPlaceholder: string;
    traditionLabel: string;
    typeLabel: string;
    allExcavationTypes: string;
    excavationTypes: Record<string, string>;
    sitesCountBadge: (count: number) => string;
    zoomIn: string;
    zoomOut: string;
    resetZoom: string;
    legendHebrew: string;
    legendDeadSea: string;
    legendMesopotamian: string;
    legendUgaritic: string;
    legendGrecoRoman: string;
    legendHint: string;
    excavationFinds: string;
    corpusWorks: string;
    noWorksNotice: string;
    showingSites: (count: number) => string;
    sortedBySignificance: string;
    viewOnMap: string;
  };

  // Graph View
  graph: {
    searchPlaceholder: string;
    activeMode: string;
    filterRigor: string;
    activeNodesLabel: (count: number) => string;
    activeLinksLabel: (count: number) => string;
    inspectHint: string;
    relationshipDetails: string;
    citationsHeading: string;
    compareSideBySide: string;
    resetLayout: string;
    headerTag: string;
    headerTitle: string;
    headerSubtitle: string;
    modeLabel: string;
    legendHebrew: string;
    legendSecondTemple: string;
    legendNewTestament: string;
    legendMesopotamian: string;
    legendUgaritic: string;
    zoomIn: string;
    zoomOut: string;
    resetView: string;
    dragToPan: string;
    backToNode: string;
    documentedConnections: (count: number) => string;
    noThresholdMatch: (mode: string) => string;
    selectNodeHint: string;
  };
}

export const uiTranslations: Record<SupportedLanguage, UiTranslations> = {
  en: {
    categories: {
      'ALL': 'All Categories',
      'HEBREW BIBLE': 'Hebrew Bible',
      'NEW TESTAMENT': 'New Testament',
      'SECOND TEMPLE': 'Second Temple',
      'DEAD SEA SCROLLS': 'Dead Sea Scrolls',
      'LOST BOOKS REFERENCED': 'Lost Books Referenced',
      'MESOPOTAMIAN': 'Mesopotamian',
      'CANAANITE / UGARITIC': 'Canaanite / Ugaritic',
      'GRECO-ROMAN': 'Greco-Roman',
      'NORSE': 'Norse',
      'VEDIC': 'Vedic',
      'PERSIAN': 'Persian',
      'MESOAMERICAN': 'Mesoamerican'
    },
    assistant: {
      headerTag: 'AI Epigraphical & Textual Research Assistant',
      headerTitle: 'Scholarly Textual Inquiry',
      headerSubtitle: 'Ask complex comparative questions across biblical, pseudepigraphic, Mesopotamian, Ugaritic, and classical sources.',
      modeLabel: 'Mode:',
      curatedQueries: 'Curated Research Queries:',
      sampleQueries: [
        'Compare Genesis 6 with 1 Enoch.',
        'What evidence connects the biblical Rephaim with Ugaritic rpum?',
        'What does Jude quote from 1 Enoch?',
        'Show every ancient text involving divine beings and human women.',
        'What texts connect giants with the Flood?',
        'Show ancient serpent-versus-deity stories (Chaoskampf).',
        'Which traditions describe a divine council?',
        'Show Flood traditions written before the first century AD.'
      ],
      userRole: 'Researcher',
      assistantRole: 'Scholarly Assistant',
      analyzing: 'Analyzing primary corpus, manuscript dates, and evidence levels...',
      inputPlaceholder: (mode: string) => `Ask a question (Evaluated in ${mode} mode)...`,
      sendBtn: 'Send',
      initialGreeting: (mode: string) => `Greetings, researcher. I am your specialized research assistant for ancient comparative literature, apocrypha, and biblical texts.

I am strictly instructed to ground all analyses in primary textual witnesses, explicitly distinguishing:
• DOCUMENTED relationships (direct quotation, manuscript dependence)
• STRONG relationships (broad scholarly consensus)
• COMPARATIVE parallels (shared mythic archetypes without direct diffusion)
• POSSIBLE & SPECULATIVE hypotheses (clearly labeled as such)

Current Filter: **${mode} MODE**. How may I assist your inquiry into the ancient corpus?`,
      fallbackGenesis6Enoch: `### Comparative Analysis: Genesis 6:1–4 and 1 Enoch 6–16

**Evidence Level: DOCUMENTED (Expanded Tradition & Reception)**

1. **Textual Relationship**:
   Genesis 6:1–4 is a cryptic, four-verse vignette recounting that the "sons of God" (bene ha-elohim) married "daughters of men," resulting in the "Nephilim" and "gibborim of renown." 1 Enoch (specifically the Book of the Watchers, chapters 6–16, attested in Aramaic at Qumran in 4Q201 ca. 200 BCE) takes this exact vignette and expands it dramatically.

2. **Key Expansions in 1 Enoch**:
   • Names the 200 descending angels (Watchers) and their chiefs: Shemihazah and Asael.
   • Sets their descent upon the summit of Mount Hermon, consecrated by a mutual oath (ḥerem).
   • Explains the birth of ravenous giants who devour human harvests and consume humanity.
   • Introduces illicit heavenly knowledge: Asael teaches metallurgy, weapons of war, and cosmetics; other Watchers teach astronomy, astrology, and root-cutting sorcery.

3. **Scholarly Consensus**:
   Mainstream scholars agree that 1 Enoch represents an early Second Temple midrashic expansion of the archaic Genesis vignette, directly responding to the cultural crisis of Hellenistic military subjugation and foreign illicit wisdom.`,
      fallbackRephaimUgarit: `### Historical & Linguistic Connection: Biblical Rephaim and Ugaritic rpum

**Evidence Level: DOCUMENTED (Historical Connection & Linguistic Cognate)**

1. **Textual Evidence**:
   • **Biblical Witnesses**: Deuteronomy 1:4 and Joshua 12:4 state that Og king of Bashan was the last remnant of the Rephaim, and that he reigned from **Ashtaroth and Edrei**.
   • **Ugaritic Inscription (KTU 1.108)**: Discovered at Ras Shamra (13th c. BCE), tablet RS 24.252 explicitly invokes the divine king **Rapiu** (rpu mlk ʿlm), praising him as the god "who sits enthroned at **Ashtaroth** (b-ʿṯtrt), the god who rules in **Edrei** (b-ʾidrʿy)."

2. **Significance**:
   The verbatim match of the twin cities Ashtaroth and Edrei between biblical Og the Rephaite and Ugaritic Rapiu confirms that the biblical writers preserved authentic Late Bronze Age Northwest Semitic memories of chthonic ancestral warrior-kings.

3. **Distinction**:
   In Ugarit, the rpum were divinized royal ancestors invoked at memorial banquets (marzeah). In the biblical text, they were demoted into legendary pre-Israelite giant inhabitants and shadowy spirits in Sheol.`,
      fallbackJudeEnoch: `### Textual Dependence: Jude 14–15 and 1 Enoch 1:9

**Evidence Level: DOCUMENTED (Direct Quotation)**

1. **Direct Quotation**:
   Jude 14–15 explicitly introduces its prophecy with: *"Enoch, the seventh from Adam, prophesied about them, saying..."*
   It then reproduces almost word-for-word the text of **1 Enoch 1:9**:
   *"Behold, the Lord came with ten thousands of his holy ones, to execute judgment upon all, and to convict all the ungodly of all their ungodly deeds..."*

2. **Manuscript Witness**:
   This quotation is preserved in 1 Enoch's Greek text (Codex Panopolitanus / Akhmim fragment) and confirmed in the Dead Sea Scrolls Aramaic fragment **4Q204** (4QEn^c ar Col. I).

3. **Additional Enochic Allusion in Jude 6**:
   Jude 6 directly invokes the 1 Enoch tradition of the angels who left their proper abode and were bound in everlasting chains under darkness until the day of judgment (1 Enoch 10:4–12).`,
      fallbackFlood: `### Ancient Near Eastern Flood Traditions Prior to the 1st Century CE

**Evidence Levels: DOCUMENTED & STRONG (Near Eastern) | COMPARATIVE (Global)**

1. **Epic of Ziusudra / Eridu Genesis (Sumerian, ca. 1600 BCE)**:
   The earliest documented written flood narrative. King Ziusudra builds a giant vessel and is granted immortality by An and Enlil.

2. **Epic of Atrahasis (Old Babylonian Akkadian, ca. 1700–1640 BCE)**:
   Atrahasis is warned by the god Enki through a reed wall to dismantle his house, build a boat, and pitch it with bitumen. Enlil had sent the deluge to silence human overpopulation.

3. **Epic of Gilgamesh, Tablet XI (Standard Babylonian, ca. 1200–1000 BCE)**:
   Utnapishtim recounts the deluge to Gilgamesh: ship grounded on Mount Nimush, releasing dove, swallow, and raven; post-flood sweet aroma sacrifice.

4. **Biblical Genesis 6–9 (ca. 6th–5th c. BCE)**:
   Shares pitch caulking, cubit ratios, mountain landing (Ararat), bird testing, and altar sacrifice, reframed within monotheistic covenantal theology.`,
      fallbackDefault: (query: string, mode: string) => `### Scholarly Analysis on "${query}"

**Research Mode: ${mode}**

1. **Primary Corpus Investigation**:
   When evaluating this motif across our curated database of ancient Hebrew, Second Temple, Mesopotamian, Canaanite, and Classical texts, we separate direct textual transmission from structural cross-cultural parallels.

2. **Evidentiary Distinction**:
   • Direct textual quotations or manuscript links require identifiable linguistic or sequential dependency (e.g., Jude 14 quoting 1 Enoch 1:9, or Genesis 6 adapting Mesopotamian flood sequences).
   • Wider thematic parallels are classified as **COMPARATIVE** and must not be conflated with historical continuity.

3. **Recommended Passages for Investigation**:
   • Genesis 6:1–4 & 1 Enoch 6–16 (Watchers & Giants)
   • Numbers 13:33 & Deuteronomy 2–3 (Anakim & Rephaim)
   • Epic of Gilgamesh XI & Epic of Atrahasis III (Near Eastern Deluge)
   • Ugaritic KTU 1.5 & Isaiah 27:1 (Chaoskampf against Lotan/Leviathan)

Explore these texts in the **Compare View** or view their interconnections in the **Relationship Graph**.`
    },
    termModal: {
      literalDefinition: 'Literal Definition',
      etymology: 'Linguistic Etymology & Morphology',
      scholarlyNotes: 'Scholarly Exegesis & Ancient Translations',
      occurrences: 'Key Textual Occurrences',
      relatedTerms: 'Related Ancient Terms',
      close: 'Close Dictionary'
    },
    pwa: {
      offlineBanner: 'Offline Mode — Reading from cached local storage and Service Worker cache.',
      installApp: 'Install App',
      installAppTitle: 'Install app to your home screen or desktop for offline access',
      installIos: 'Install on iOS',
      installIosTitle: 'Install on iPhone / iPad',
      step1: "Tap the Share button in Safari's bottom navigation bar.",
      step2: 'Scroll down and select Add to Home Screen.',
      step3: 'Launch Chronos & Canon directly from your home screen as a native offline app.',
      gotIt: 'Got it'
    },
    explore: {
      headerTag: 'Primary Source Reader & Textual Archive',
      headerTitle: 'Explore Ancient Texts & Canons',
      headerSubtitle: 'Browse primary ancient literature across Hebrew, Second Temple, Christian, Mesopotamian, Ugaritic, Classical, and Global traditions with tripartite chronological distinction.',
      readingModes: {
        sideBySide: 'Side-by-Side',
        translationOnly: 'Translation Only',
        originalOnly: 'Original Script'
      },
      cataloguedWorks: (count: number) => `Catalogued Works (${count})`,
      allTraditions: 'All Traditions',
      lostBookTag: 'Ancient Lost Reference (Not later homonym)',
      lostBookNotice: 'Textual & Historical Integrity Notice',
      chronologyTitle: 'Three-Tier Chronological Framework',
      settingLabel: '1. Claimed Setting',
      compositionLabel: '2. Estimated Composition',
      earliestMsLabel: '3. Earliest Surviving MS',
      witnessTradition: 'Manuscript Witness Tradition:',
      keyWitnesses: 'Key Physical Witnesses:',
      digitalEditionsTitle: (count: number) => `Publicly Available Digital Editions & Facsimiles (${count})`,
      viewAllDigitalLibrary: 'View All in Digital Library',
      openArchive: 'Open Archive',
      passagesTitle: (count: number) => `Selected Key Passages & Interlinears (${count})`,
      noPassages: 'No individual sample passages recorded for this text entry yet. You can examine its relationship network in the Graph View or ask the AI Research Assistant.',
      compareInViewer: 'Compare in Viewer',
      clickableTerms: 'Clickable Linguistic Terms:',
      originalScriptLabel: (lang: string) => `Original Text (${lang})`,
      translationLabel: (langName: string) => `Translation (${langName})`,
      translator: 'Translator:',
      textCriticalNote: 'Text-Critical Note:'
    },
    compare: {
      flagshipPresets: 'Flagship Presets:',
      presets: {
        gen6Enoch: 'Genesis 6 ↔ 1 Enoch 6',
        judeEnoch: 'Jude 14–15 ↔ 1 Enoch 1:9',
        ogRapiu: 'Og of Bashan ↔ Ugaritic Rapiu',
        flood: 'Gilgamesh ↔ Atrahasis ↔ Manu Flood',
        chaoskampf: 'Isaiah 27 ↔ Psalm 74 ↔ Baal vs Lotan'
      },
      addPassageLabel: 'Add passage to compare (up to 4):',
      selectPassagePlaceholder: 'Select a passage to add...',
      columnHeader: (colNum: number, ref: string) => `Column ${colNum}: ${ref}`,
      removeColumnTitle: 'Remove column',
      chronologicalWitness: 'Chronological Witness:',
      setting: 'Setting:',
      composition: 'Composition:',
      earliestMs: 'Earliest MS:',
      keyTerms: 'Key Terms:',
      originalText: (lang: string) => `Original Text (${lang})`,
      bookmark: 'Bookmark',
      bookmarked: 'Bookmarked',
      source: 'Source:'
    },
    library: {
      badge: 'Open-Access Primary Sources & Digital Repositories',
      tabEditions: (count: number) => `Catalogued Editions (${count})`,
      tabRepositories: (count: number) => `Partner Repositories (${count})`,
      integrityNote: 'All links point to permanent, trusted academic institutions and public domain digital archives.',
      institutionsNote: 'Includes IAA, Sefaria, British Museum, Oxford ETCSL, Tufts Perseus, and Newberry Library.',
      searchPlaceholder: 'Search by text title, repository, artifact code, or keyword...',
      allTraditions: (count: number) => `All Traditions (${count})`,
      allFormatTypes: 'All Format Types',
      editionTypes: {
        'High-Res Manuscript Facsimile': 'High-Res Manuscript Facsimiles',
        'Original Script & Interlinear': 'Original Script & Interlinear',
        'Critical Scholarly Edition': 'Critical Scholarly Editions',
        'Open-Access Translation': 'Open-Access Complete Translations',
        'Museum Specimen & 3D Scan': 'Museum Specimens & 3D Scans'
      },
      allInstitutions: 'All Institutions',
      showingEditions: (showing: number, total: number) => `Showing ${showing} of ${total} publicly available editions`,
      resetFilters: 'Reset All Filters',
      openRepository: 'Open Archive',
      highlights: 'Curated Highlights',
      repositoryName: 'Repository:',
      viewCanonicalText: 'View Canonical Text',
      linkedCorpus: 'Linked Corpus:',
      editionFeatures: 'Edition Features:',
      compareInApp: 'Compare in App',
      openPublicArchive: 'Open Public Archive',
      noEditionsMatch: 'No public editions match your active filters.',
      tryClearingSearch: 'Try clearing your search query or selecting "All Traditions" above.',
      resetSearch: 'Reset Search Filters',
      repositoriesTitle: 'Primary Open-Access Institutional Repositories',
      repositoriesSubtitle: 'These digital archives and university humanities initiatives host high-resolution photographic facsimiles, cuneiform transliterations, and open-access editions of the primary literature referenced throughout the Chronos & Canon database.',
      primaryHost: 'Primary Institutional Host',
      archivalFocus: 'Archival Focus:',
      freeAccess: 'Free / Open Access',
      visitRepository: 'Visit Repository',
      noteCopyrightTitle: 'Note on Public Domain vs. Copyrighted Modern Critical Editions',
      noteCopyrightBody: 'The links in this directory connect directly to primary photographic facsimiles (e.g., Israel Antiquities Authority multispectral plates, British Museum 3D scans) and peer-reviewed open-access scholarly databases (Sefaria, Perseus Digital Library, Oxford ETCSL, GRETIL). Where full English translations are hosted online, they utilize historic public-domain critical milestones (such as R.H. Charles for 1 Enoch and Jubilees, George Smith/Thompson for Gilgamesh, or Ralph Griffith for the Rigveda). For 21st-century copyrighted academic translations and commentaries, readers are encouraged to consult university libraries or academic publishing platforms.'
    },
    map: {
      headerTag: 'Archaeological Cartography & Excavation Provenance',
      tabMap: 'Interactive Map',
      tabDirectory: (count: number) => `Site Directory (${count})`,
      regionFocus: 'Region Focus:',
      regionNames: {
        GLOBAL: 'Global Ancient Horizons',
        FERTILE_CRESCENT: 'Fertile Crescent & Levant',
        MEDITERRANEAN: 'Mediterranean & Greece',
        ASIA_PERSIA: 'Persia & Indus-Sarasvati',
        MESOAMERICA: 'Mesoamerica',
        NORTH_EUROPE: 'Northern Europe'
      },
      viewingRegion: (name: string) => `Viewing: ${name}`,
      searchPlaceholder: 'Search site name, modern country, or discovery...',
      traditionLabel: 'Tradition:',
      typeLabel: 'Type:',
      allExcavationTypes: 'All Excavation Types',
      excavationTypes: {
        'Primary Excavation': 'Primary Excavation',
        'Archival Discovery': 'Archival Discovery',
        'Ancient Capital': 'Ancient Capital',
        'Mythological Axis': 'Mythological Axis'
      },
      sitesCountBadge: (count: number) => `(${count} sites in dataset)`,
      zoomIn: 'Zoom In',
      zoomOut: 'Zoom Out',
      resetZoom: 'Reset Zoom',
      legendHebrew: 'Hebrew / Israelite',
      legendDeadSea: 'Dead Sea Scrolls',
      legendMesopotamian: 'Mesopotamian',
      legendUgaritic: 'Ugaritic',
      legendGrecoRoman: 'Greco-Roman',
      legendHint: 'Click marker or select below to examine excavation findings',
      excavationFinds: 'Excavation Finds & Primary Manuscripts',
      corpusWorks: 'Corpus Works Linked to this Site',
      noWorksNotice: 'Historical context preserved through epigraphic and archaeological inscriptions.',
      showingSites: (count: number) => `Showing ${count} catalogued excavation sites`,
      sortedBySignificance: 'Sorted by archaeological significance',
      viewOnMap: 'View on Map'
    },
    graph: {
      searchPlaceholder: 'Search nodes by title, language, or motif...',
      activeMode: 'Active Mode:',
      filterRigor: 'Filter by Evidence Rigor:',
      activeNodesLabel: (count: number) => `Active Texts: ${count}`,
      activeLinksLabel: (count: number) => `Mapped Connections: ${count}`,
      inspectHint: 'Click any node to reveal its literary connections and compare passages.',
      relationshipDetails: 'Relationship Details',
      citationsHeading: 'Citations & Scholarly Literature',
      compareSideBySide: 'Compare in Side-by-Side Viewer',
      resetLayout: 'Reset Graph View',
      headerTag: 'Interactive Evidence Graph & Dynamic Network',
      headerTitle: 'Cross-Cultural Relationship Matrix',
      headerSubtitle: 'Investigate evidence connections between texts, passages, and motifs. Adjust research modes to filter evidentiary rigor.',
      modeLabel: 'Research Mode:',
      legendHebrew: 'Hebrew Bible',
      legendSecondTemple: 'Second Temple',
      legendNewTestament: 'New Testament',
      legendMesopotamian: 'Mesopotamian',
      legendUgaritic: 'Ugaritic',
      zoomIn: 'Zoom In',
      zoomOut: 'Zoom Out',
      resetView: 'Reset View',
      dragToPan: 'Drag canvas to pan',
      backToNode: 'Back to Node',
      documentedConnections: (count: number) => `Documented Connections (${count})`,
      noThresholdMatch: (mode: string) => `No connections meet the threshold for ${mode} mode. Try switching to Comparative or Exploratory mode.`,
      selectNodeHint: 'Select any node in the network to inspect its ancient textual links and scholarly evidence level.'
    }
  },

  es: {
    categories: {
      'ALL': 'Todas las Categorías',
      'HEBREW BIBLE': 'Biblia Hebrea (Tanaj)',
      'NEW TESTAMENT': 'Nuevo Testamento',
      'SECOND TEMPLE': 'Segundo Templo y Apócrifos',
      'DEAD SEA SCROLLS': 'Rollos del Mar Muerto (Qumrán)',
      'LOST BOOKS REFERENCED': 'Libros Perdidos Citados',
      'MESOPOTAMIAN': 'Mesopotamia (Sumer y Babilonia)',
      'CANAANITE / UGARITIC': 'Cananea / Ugarítica',
      'GRECO-ROMAN': 'Grecorromana y Clásica',
      'NORSE': 'Nórdica e Islandesa',
      'VEDIC': 'Védica e Hindú',
      'PERSIAN': 'Persa y Zoroástrica',
      'MESOAMERICAN': 'Mesoamericana (Maya y Náhuatl)'
    },
    assistant: {
      headerTag: 'Asistente IA de Investigación Epigráfica y Textual',
      headerTitle: 'Indagación Textual Académica',
      headerSubtitle: 'Formule preguntas comparativas complejas sobre fuentes bíblicas, seudoepigráficas, mesopotámicas, ugaríticas y clásicas.',
      modeLabel: 'Modo:',
      curatedQueries: 'Consultas de Investigación Curadas:',
      sampleQueries: [
        'Compara Génesis 6 con 1 Enoc.',
        '¿Qué evidencia conecta a los Refaítas bíblicos con los rpum ugaríticos?',
        '¿Qué cita la epístola de Judas de 1 Enoc?',
        'Muestra todos los textos antiguos que tratan de seres divinos y mujeres humanas.',
        '¿Qué textos vinculan a gigantes con el Diluvio?',
        'Muestra narrativas del conflicto de la deidad contra el dragón (Chaoskampf).',
        '¿Qué tradiciones describen un consejo divino?',
        'Muestra tradiciones del Diluvio anteriores al siglo I d.C.'
      ],
      userRole: 'Investigador',
      assistantRole: 'Asistente Académico',
      analyzing: 'Analizando corpus primario, datación de manuscritos y niveles de evidencia...',
      inputPlaceholder: (mode: string) => `Plantee una consulta (Evaluada en modo ${mode})...`,
      sendBtn: 'Enviar',
      initialGreeting: (mode: string) => `Saludos, investigador. Soy su asistente de investigación especializado en literatura comparada antigua, apócrifos y textos bíblicos.

Tengo instrucciones rigurosas de fundamentar todo análisis en testimonios textuales primarios, distinguiendo taxativamente:
• Relaciones DOCUMENTADAS (cita directa, dependencia textual directa)
• Relaciones SÓLIDAS (amplio consenso académico)
• Paralelos COMPARATIVOS (arquetipos míticos compartidos sin difusión directa demostrada)
• Hipótesis POSIBLES Y ESPECULATIVAS (claramente rotuladas como tales)

Filtro activo: **MODO ${mode}**. ¿En qué puedo orientar su estudio del corpus antiguo?`,
      fallbackGenesis6Enoch: `### Análisis Comparativo: Génesis 6:1–4 y 1 Enoc 6–16

**Nivel de Evidencia: DOCUMENTADO (Tradición Ampliada y Recepción Textual)**

1. **Relación Textual**:
   Génesis 6:1–4 es un fragmento enigmático de cuatro versículos que narra que los "hijos de Dios" (bene ha-elohim) tomaron como esposas a las "hijas de los hombres", produciendo a los "Nefilim" y los "gibborim de renombre". 1 Enoc (específicamente el Libro de los Vigilantes, caps. 6–16, atestiguado en arameo en Qumrán en 4Q201 ca. 200 a.C.) toma exactamente este relato y lo expande de manera monumental.

2. **Ampliaciones Clave en 1 Enoc**:
   • Detalla los nombres de los 200 ángeles que descendieron (Vigilantes) y sus caudillos: Semihaza y Asael.
   • Sitúa el descenso en la cumbre del Monte Hermón, sellado mediante un juramento e imprecación mutua (ḥerem).
   • Narra el nacimiento de gigantes que devoraron los recursos y la propia carne humana.
   • Introduce la revelación de conocimientos celestiales ilícitos: Asael enseña metalurgia, armas y cosméticos; otros enseñan astronomía y encantamientos.

3. **Consenso Académico**:
   Los eruditos coinciden en que 1 Enoc constituye una expansión midrásica del Segundo Templo temprano, respondiendo a la crisis cultural y militar helenística.`,
      fallbackRephaimUgarit: `### Conexión Histórica y Lingüística: Refaítas Bíblicos y rpum Ugaríticos

**Nivel de Evidencia: DOCUMENTADO (Conexión Histórica y Cognado Lingüístico)**

1. **Evidencia Textual**:
   • **Testigos Bíblicos**: Deuteronomio 1:4 y Josué 12:4 declaran que Og rey de Basán era el remanente de los Refaítas, y que reinaba en **Astarot y Edrei**.
   • **Inscripción Ugarítica (KTU 1.108)**: Descubierta en Ras Shamra (siglo XIII a.C.), la tablilla RS 24.252 invoca explícitamente al rey divino **Rapiu** (rpu mlk ʿlm), proclamándolo como el dios "que se sienta entronizado en **Astarot** (b-ʿṯtrt), el dios que gobierna en **Edrei** (b-ʾidrʿy)."

2. **Significado Crítico**:
   La coincidencia literal y exacta de las dos ciudades reales Astarot y Edrei entre Og el Refaíta bíblico y el dios ugarítico Rapiu confirma que la memoria bíblica conservó tradiciones auténticas del Bronce Tardío sobre reyes-guerreros ancestrales del Levante.

3. **Diferenciación Teológica**:
   En Ugarit, los rpum eran ancestros reales divinizados invocados en banquetes memoriales (marzeah). En el texto bíblico fueron desmitologizados como gigantes aborígenes y sombras en el Seol.`,
      fallbackJudeEnoch: `### Dependencia Textual: Judas 14–15 y 1 Enoc 1:9

**Nivel de Evidencia: DOCUMENTADO (Cita Textual Directa)**

1. **Cita Directa**:
   Judas 14–15 introduce explícitamente su vaticinio: *"De éstos también profetizó Enoc, séptimo desde Adán, diciendo..."*
   Y reproduce casi al pie de la letra el texto de **1 Enoc 1:9**:
   *"He aquí, vino el Señor con sus santas decenas de millares, para hacer juicio contra todos, y dejar convictos a todos los impíos..."*

2. **Testigo Manuscrito**:
   Esta cita se preserva en griego en el Códice Panopolitano (Akhmim) y se confirmó en arameo en los Rollos del Mar Muerto (**4Q204**).

3. **Alusión a los Vigilantes en Judas 6**:
   Judas 6 apela directamente a la tradición enóquica de los ángeles aprisionados en cadenas eternas bajo oscuridad hasta el día del juicio (1 Enoc 10:4–12).`,
      fallbackFlood: `### Tradiciones del Diluvio en el Próximo Oriente Antiguo (Previas al siglo I d.C.)

**Nivel de Evidencia: DOCUMENTADO Y SÓLIDO (Próximo Oriente) | COMPARATIVO (Mundial)**

1. **Génesis de Eridu / Poema de Ziusudra (Sumerio, ca. 1600 a.C.)**:
   El relato de diluvio más antiguo por escrito. El rey Ziusudra construye un navío inmenso y recibe inmortalidad.

2. **Epopeya de Atrahasis (Acadio paleobabilónico, ca. 1700–1640 a.C.)**:
   Atrahasis es advertido por el dios Enki a través de un muro de cañas para desarmar su casa, construir una barca y calafatearla con betún.

3. **Epopeya de Gilgamesh, Tablilla XI (Babilónico estándar, ca. 1200–1000 a.C.)**:
   Utnapishtim describe el encallamiento en el Monte Nimush, el envío de la paloma, golondrina y cuervo, y el sacrificio posdiluviano de aroma grato.

4. **Génesis 6–9 bíblico (ca. siglos VI–V a.C.)**:
   Comparte el calafateo de brea, dimensiones en codos, encallamiento en montaña (Ararat), prueba de aves y altar de sacrificio, enmarcado en teología de alianza monoteísta.`,
      fallbackDefault: (query: string, mode: string) => `### Análisis Académico sobre "${query}"

**Modo de Investigación: ${mode}**

1. **Indagación en el Corpus Primario**:
   Al evaluar este motivo en nuestra base de datos de textos hebreos, del Segundo Templo, mesopotámicos, cananeos y clásicos, separamos rigurosamente la transmisión textual directa de los paralelos estructurales interculturales.

2. **Distinción Probatoria**:
   • Citas directas o conexiones manuscritas exigen correspondencia lingüística o secuencial demostrable.
   • Paralelos temáticos más amplios se catalogan como **COMPARATIVOS** y no deben confundirse con difusión histórica directa.

3. **Pasajes Recomendados para Comparar**:
   • Génesis 6:1–4 y 1 Enoc 6–16 (Vigilantes y Gigantes)
   • Números 13:33 y Deuteronomio 2–3 (Anaquim y Refaítas)
   • Gilgamesh XI y Atrahasis III (Diluvio del Próximo Oriente)
   • KTU 1.5 e Isaías 27:1 (Chaoskampf contra Lotán/Leviatán)

Explore estos textos en la **Vista de Comparación** o en el **Grafo de Relaciones**.`
    },
    termModal: {
      literalDefinition: 'Definición Literal',
      etymology: 'Etimología Lingüística y Morfología',
      scholarlyNotes: 'Exégesis Académica y Traducciones Antiguas',
      occurrences: 'Ocurrencias Textuales Clave',
      relatedTerms: 'Términos Antiguos Relacionados',
      close: 'Cerrar Diccionario'
    },
    pwa: {
      offlineBanner: 'Modo sin conexión: leyendo desde almacenamiento local y caché de Service Worker.',
      installApp: 'Instalar Aplicación',
      installAppTitle: 'Instale la aplicación en su pantalla de inicio para acceso sin conexión',
      installIos: 'Instalar en iOS',
      installIosTitle: 'Instalar en iPhone / iPad',
      step1: 'Toque el botón Compartir en la barra inferior de navegación de Safari.',
      step2: 'Desplácese hacia abajo y seleccione Agregar a pantalla de inicio.',
      step3: 'Abra Chronos y Canon directamente desde su pantalla de inicio como una aplicación nativa sin conexión.',
      gotIt: 'Entendido'
    },
    explore: {
      headerTag: 'Lector de Fuentes Primarias y Archivo Textual',
      headerTitle: 'Explorar Textos y Cánones Antiguos',
      headerSubtitle: 'Examine literatura antigua primaria hebrea, del Segundo Templo, cristiana, mesopotámica, ugarítica, clásica y global con estricta distinción cronológica tripartita.',
      readingModes: {
        sideBySide: 'Lado a Lado',
        translationOnly: 'Solo Traducción',
        originalOnly: 'Texto Original'
      },
      cataloguedWorks: (count: number) => `Obras Catalogadas (${count})`,
      allTraditions: 'Todas las Tradiciones',
      lostBookTag: 'Referencia a Libro Perdido Antiguo (No homónimo tardío)',
      lostBookNotice: 'Aviso de Integridad Textual e Histórica',
      chronologyTitle: 'Marco Cronológico Tripartito',
      settingLabel: '1. Escenario del Relato',
      compositionLabel: '2. Composición Estimada',
      earliestMsLabel: '3. Manuscrito Más Antiguo',
      witnessTradition: 'Tradición de Testigos Manuscritos:',
      keyWitnesses: 'Testigos Físicos Clave:',
      digitalEditionsTitle: (count: number) => `Ediciones Digitales y Facsímiles de Acceso Abierto (${count})`,
      viewAllDigitalLibrary: 'Ver Todo en Biblioteca Digital',
      openArchive: 'Abrir Archivo',
      passagesTitle: (count: number) => `Pasajes Clave Seleccionados e Interlineales (${count})`,
      noPassages: 'No hay muestras individuales registradas aún para este texto. Puede consultar su red de relaciones en el Grafo o consultar al Asistente IA.',
      compareInViewer: 'Comparar en Visor',
      clickableTerms: 'Términos Lingüísticos Interactivos:',
      originalScriptLabel: (lang: string) => `Texto Original (${lang})`,
      translationLabel: (langName: string) => `Traducción (${langName})`,
      translator: 'Traductor:',
      textCriticalNote: 'Nota Crítico-Textual:'
    },
    compare: {
      flagshipPresets: 'Preajustes Insignia:',
      presets: {
        gen6Enoch: 'Génesis 6 ↔ 1 Enoc 6',
        judeEnoch: 'Judas 14–15 ↔ 1 Enoc 1:9',
        ogRapiu: 'Og de Basán ↔ Rapiu Ugarítico',
        flood: 'Gilgamesh ↔ Atrahasis ↔ Diluvio de Manu',
        chaoskampf: 'Isaías 27 ↔ Salmo 74 ↔ Baal contra Lotán'
      },
      addPassageLabel: 'Añadir pasaje a comparar (hasta 4):',
      selectPassagePlaceholder: 'Seleccione un pasaje para añadir...',
      columnHeader: (colNum: number, ref: string) => `Columna ${colNum}: ${ref}`,
      removeColumnTitle: 'Eliminar columna',
      chronologicalWitness: 'Testigo Cronológico:',
      setting: 'Escenario:',
      composition: 'Composición:',
      earliestMs: 'Manuscrito más antiguo:',
      keyTerms: 'Términos Clave:',
      originalText: (lang: string) => `Texto Original (${lang})`,
      bookmark: 'Marcador',
      bookmarked: 'Guardado',
      source: 'Fuente:'
    },
    library: {
      badge: 'Fuentes Primarias de Acceso Abierto y Repositorios Oficiales',
      tabEditions: (count: number) => `Ediciones Catalogadas (${count})`,
      tabRepositories: (count: number) => `Repositorios Oficiales (${count})`,
      integrityNote: 'Todos los enlaces apuntan a instituciones académicas permanentes y archivos de dominio público.',
      institutionsNote: 'Incluye IAA, Sefaria, British Museum, Oxford ETCSL, Tufts Perseus y Newberry Library.',
      searchPlaceholder: 'Buscar por título de texto, repositorio, código o palabra clave...',
      allTraditions: (count: number) => `Todas las Tradiciones (${count})`,
      allFormatTypes: 'Todos los Tipos de Formato',
      editionTypes: {
        'High-Res Manuscript Facsimile': 'Facsímiles de Manuscritos en Alta Resolución',
        'Original Script & Interlinear': 'Texto Original e Interlineal',
        'Critical Scholarly Edition': 'Ediciones Críticas Académicas',
        'Open-Access Translation': 'Traducciones Completas de Acceso Abierto',
        'Museum Specimen & 3D Scan': 'Especímenes de Museo y Escaneos 3D'
      },
      allInstitutions: 'Todas las Instituciones',
      showingEditions: (showing: number, total: number) => `Mostrando ${showing} de ${total} ediciones de acceso público`,
      resetFilters: 'Restablecer Filtros',
      openRepository: 'Abrir Repositorio',
      highlights: 'Aspectos Destacados',
      repositoryName: 'Repositorio:',
      viewCanonicalText: 'Ver Texto Canónico',
      linkedCorpus: 'Corpus Vinculado:',
      editionFeatures: 'Características de la Edición:',
      compareInApp: 'Comparar en la Aplicación',
      openPublicArchive: 'Abrir Archivo Público',
      noEditionsMatch: 'Ninguna edición pública coincide con los filtros activos.',
      tryClearingSearch: 'Intente borrar su búsqueda o seleccionar "Todas las Tradiciones" arriba.',
      resetSearch: 'Restablecer Filtros de Búsqueda',
      repositoriesTitle: 'Principales Repositorios Institucionales de Acceso Abierto',
      repositoriesSubtitle: 'Estos archivos digitales e iniciativas de humanidades universitarias albergan facsímiles fotográficos de alta resolución, transliteraciones cuneiformes y ediciones de acceso abierto de la literatura primaria referenciada en toda la base de datos Chronos & Canon.',
      primaryHost: 'Sede Institucional Principal',
      archivalFocus: 'Enfoque de Archivo:',
      freeAccess: 'Gratuito / Acceso Abierto',
      visitRepository: 'Visitar Repositorio',
      noteCopyrightTitle: 'Nota sobre Dominio Público vs. Ediciones Críticas Modernas con Derechos de Autor',
      noteCopyrightBody: 'Los enlaces en este directorio conectan directamente con facsímiles fotográficos primarios (p. ej., placas multiespectrales de la Autoridad de Antigüedades de Israel, escaneos 3D del Museo Británico) y bases de datos académicas de acceso abierto revisadas por pares (Sefaria, Biblioteca Digital Perseus, Oxford ETCSL, GRETIL). Donde se alojan traducciones completas en línea, utilizan hitos históricos de dominio público (como R.H. Charles para 1 Enoc y Jubileos, George Smith para Gilgamesh o Ralph Griffith para el Rigveda). Para traducciones y comentarios académicos protegidos del siglo XXI, se recomienda consultar bibliotecas universitarias o plataformas académicas.'
    },
    map: {
      headerTag: 'Cartografía Arqueológica y Procedencia de Excavaciones',
      tabMap: 'Mapa Interactivo',
      tabDirectory: (count: number) => `Directorio de Sitios (${count})`,
      regionFocus: 'Enfoque Regional:',
      regionNames: {
        GLOBAL: 'Horizontes Antiguos Globales',
        FERTILE_CRESCENT: 'Creciente Fértil y Levante',
        MEDITERRANEAN: 'Mediterráneo y Grecia',
        ASIA_PERSIA: 'Persia e Indo-Sárasvati',
        MESOAMERICA: 'Mesoamérica',
        NORTH_EUROPE: 'Norte de Europa'
      },
      viewingRegion: (name: string) => `Visualizando: ${name}`,
      searchPlaceholder: 'Buscar nombre de sitio, país moderno o hallazgo...',
      traditionLabel: 'Tradición:',
      typeLabel: 'Tipo:',
      allExcavationTypes: 'Todos los Tipos de Excavación',
      excavationTypes: {
        'Primary Excavation': 'Excavación Primaria',
        'Archival Discovery': 'Descubrimiento de Archivo',
        'Ancient Capital': 'Capital Antigua',
        'Mythological Axis': 'Eje Mitológico'
      },
      sitesCountBadge: (count: number) => `(${count} sitios en el conjunto de datos)`,
      zoomIn: 'Acercar',
      zoomOut: 'Alejar',
      resetZoom: 'Restablecer Zoom',
      legendHebrew: 'Hebrea / Israelita',
      legendDeadSea: 'Rollos del Mar Muerto',
      legendMesopotamian: 'Mesopotámica',
      legendUgaritic: 'Ugarítica',
      legendGrecoRoman: 'Grecorromana',
      legendHint: 'Haga clic en un marcador o seleccione abajo para examinar hallazgos',
      excavationFinds: 'Hallazgos de Excavación y Manuscritos Primarios',
      corpusWorks: 'Obras del Corpus Vinculadas a este Sitio',
      noWorksNotice: 'Contexto histórico preservado a través de inscripciones epigráficas y arqueológicas.',
      showingSites: (count: number) => `Mostrando ${count} sitios de excavación catalogados`,
      sortedBySignificance: 'Ordenados por relevancia arqueológica',
      viewOnMap: 'Ver en Mapa'
    },
    graph: {
      searchPlaceholder: 'Buscar nodos por título, idioma o motivo...',
      activeMode: 'Modo Activo:',
      filterRigor: 'Filtrar por Rigor Probatorio:',
      activeNodesLabel: (count: number) => `Textos Activos: ${count}`,
      activeLinksLabel: (count: number) => `Conexiones Mapeadas: ${count}`,
      inspectHint: 'Haga clic en cualquier nodo para revelar conexiones y comparar pasajes.',
      relationshipDetails: 'Detalles de la Relación',
      citationsHeading: 'Citas y Literatura Académica',
      compareSideBySide: 'Comparar en Visor Lado a Lado',
      resetLayout: 'Restablecer Vista del Grafo',
      headerTag: 'Grafo Interactivo de Evidencia y Red Dinámica',
      headerTitle: 'Matriz de Relaciones Transculturales',
      headerSubtitle: 'Investigue conexiones probatorias entre textos, pasajes y motivos. Ajuste los modos de investigación para filtrar el rigor probatorio.',
      modeLabel: 'Modo de Investigación:',
      legendHebrew: 'Biblia Hebrea',
      legendSecondTemple: 'Segundo Templo',
      legendNewTestament: 'Nuevo Testamento',
      legendMesopotamian: 'Mesopotámica',
      legendUgaritic: 'Ugarítica',
      zoomIn: 'Acercar',
      zoomOut: 'Alejar',
      resetView: 'Restablecer Vista',
      dragToPan: 'Arrastre el lienzo para desplazarse',
      backToNode: 'Volver al Nodo',
      documentedConnections: (count: number) => `Conexiones Documentadas (${count})`,
      noThresholdMatch: (mode: string) => `Ninguna conexión cumple con el umbral para el modo ${mode}. Intente cambiar a modo Comparativo o Exploratorio.`,
      selectNodeHint: 'Seleccione cualquier nodo en la red para inspeccionar sus vínculos textuales antiguos y nivel de evidencia académica.'
    }
  },

  pt: {
    categories: {
      'ALL': 'Todas as Categorias',
      'HEBREW BIBLE': 'Bíblia Hebraica (Tanakh)',
      'NEW TESTAMENT': 'Novo Testamento',
      'SECOND TEMPLE': 'Segundo Templo e Apócrifos',
      'DEAD SEA SCROLLS': 'Manuscritos do Mar Morto (Qumran)',
      'LOST BOOKS REFERENCED': 'Livros Perdidos Citados',
      'MESOPOTAMIAN': 'Mesopotâmica (Suméria e Babilônia)',
      'CANAANITE / UGARITIC': 'Cananeia / Ugarítica',
      'GRECO-ROMAN': 'Greco-Romana e Clássica',
      'NORSE': 'Nórdica e Islandesa',
      'VEDIC': 'Védica e Hindu',
      'PERSIAN': 'Persa e Zoroástrica',
      'MESOAMERICAN': 'Mesoamericana (Maia e Náuatle)'
    },
    assistant: {
      headerTag: 'Assistente IA de Pesquisa Epigráfica e Textual',
      headerTitle: 'Investigação Textual Acadêmica',
      headerSubtitle: 'Faça perguntas comparativas complexas sobre fontes bíblicas, pseudoepígrafas, mesopotâmicas, ugaríticas e clássicas.',
      modeLabel: 'Modo:',
      curatedQueries: 'Consultas de Pesquisa Selecionadas:',
      sampleQueries: [
        'Compare Gênesis 6 com 1 Enoque.',
        'Que evidências conectam os Refains bíblicos com os rpum ugaríticos?',
        'O que a epístola de Judas cita de 1 Enoque?',
        'Mostre todos os textos antigos que tratam de seres divinos e mulheres humanas.',
        'Quais textos conectam gigantes com o Dilúvio?',
        'Mostre histórias do combate entre divindade e serpente (Chaoskampf).',
        'Quais tradições descrevem um conselho divino?',
        'Mostre tradições do Dilúvio escritas antes do primeiro século d.C.'
      ],
      userRole: 'Pesquisador',
      assistantRole: 'Assistente Acadêmico',
      analyzing: 'Analisando corpus primário, datas de manuscritos e níveis de evidência...',
      inputPlaceholder: (mode: string) => `Faça uma consulta (Avaliada no modo ${mode})...`,
      sendBtn: 'Enviar',
      initialGreeting: (mode: string) => `Saudações, pesquisador. Sou seu assistente de pesquisa especializado em literatura comparada antiga, apócrifos e textos bíblicos.

Fui estritamente instruído a fundamentar todas as análises em testemunhos textuais primários, distinguindo claramente:
• Relações DOCUMENTADAS (citação direta, dependência manuscrita)
• Relações FORTES (amplo consenso acadêmico)
• Paralelos COMPARATIVOS (arquétipos míticos compartilhados sem difusão direta demonstrada)
• Hipóteses POSSÍVEIS E ESPECULATIVAS (claramente rotuladas como tais)

Filtro atual: **MODO ${mode}**. Como posso auxiliá-lo em sua pesquisa no corpus antigo?`,
      fallbackGenesis6Enoch: `### Análise Comparativa: Gênesis 6:1–4 e 1 Enoque 6–16

**Nível de Evidência: DOCUMENTADO (Tradição Ampliada e Recepção Textual)**

1. **Relação Textual**:
   Gênesis 6:1–4 é um relato críptico de quatro versículos que descreve que os "filhos de Deus" (bene ha-elohim) tomaram as "filhas dos homens", gerando os "Nefilins" e os "gibborim de renome". 1 Enoque (especificamente o Livro dos Vigilantes, cap. 6–16, atestado em aramaico em Qumran em 4Q201 ca. 200 a.C.) toma exatamente este fragmento e o desenvolve extensivamente.

2. **Principais Expansões em 1 Enoque**:
   • Nomeia os 200 anjos que desceram (Vigilantes) e seus chefes: Samyaza e Asael.
   • Situa a descida no cume do Monte Hermom, selada por um juramento e maldição mútua (ḥerem).
   • Narra o nascimento de gigantes descomunais que consumiram as colheitas e devoraram os homens.
   • Introduz a revelação de conhecimentos celestiais proibidos: metalurgia, armas e feitiçaria.

3. **Consenso Acadêmico**:
   Especialistas concordam que 1 Enoque representa uma expansão midráshica do Segundo Templo inicial, reagindo à crise cultural e militar helenística.`,
      fallbackRephaimUgarit: `### Conexão Histórica e Linguística: Refains Bíblicos e rpum Ugaríticos

**Nível de Evidência: DOCUMENTADO (Conexão Histórica e Cognato Linguístico)**

1. **Evidência Textual**:
   • **Testemunhos Bíblicos**: Deuteronômio 1:4 e Josué 12:4 afirmam que Ogue, rei de Basã, era o remanescente dos Refains e que reinava em **Astarote e Edrei**.
   • **Inscrição Ugarítica (KTU 1.108)**: Descoberta em Ras Shamra (século XIII a.C.), a tábua RS 24.252 invoca explicitamente o rei divino **Rapiu** (rpu mlk ʿlm), aclamando-o como o deus "entronizado em **Astarote** (b-ʿṯtrt), que governa em **Edrei** (b-ʾidrʿy)."

2. **Relevância Histórica**:
   A correspondência exata das duas capitais reais Astarote e Edrei entre o Ogue bíblico e a divindade cananeia Rapiu prova que os autores bíblicos preservaram memórias autênticas da Idade do Bronze Recente.`,
      fallbackJudeEnoch: `### Dependência Textual: Judas 14–15 e 1 Enoque 1:9

**Nivel de Evidência: DOCUMENTADO (Citação Direta)**

1. **Citação Direta**:
   Judas 14–15 introduz explicitamente: *"Destes profetizou também Enoque, o sétimo depois de Adão, dizendo..."*
   E reproduz textualmente **1 Enoque 1:9**:
   *"Eis que é vindo o Senhor com milhares de seus santos, para fazer juízo contra todos e condenar todos os ímpios..."*

2. **Testemunho Manuscrito**:
   Preservado no texto grego de Akhmim e confirmado no fragmento aramaico de Qumran **4Q204**.`,
      fallbackFlood: `### Tradições do Dilúvio no Antigo Oriente Próximo Antes do Século I d.C.

**Níveis de Evidência: DOCUMENTADO E FORTE (Oriente Próximo) | COMPARATIVO (Mundial)**

1. **Epopeia de Ziusudra / Gênese de Eridu (Sumério, ca. 1600 a.C.)**:
   Primeiro registro escrito do dilúvio com o rei Ziusudra recebendo vida eterna.

2. **Epopeia de Atrahasis (Acadiano babilônico antigo, ca. 1700–1640 a.C.)**:
   Enki avisa Atrahasis através de parede de juncos para desmanchar a casa e construir um barco com betume.

3. **Epopeia de Gilgamesh, Tábua XI (Babilônico padrão, ca. 1200–1000 a.C.)**:
   Utnapishtim relata o pouso no Monte Nimush e o soltar da pomba, andorinha e corvo.

4. **Gênesis 6–9 bíblico (ca. séculos VI–V a.C.)**:
   Partilha métodos de calafetação, medidas em côvados, teste de aves e sacrifício aromático pós-dilúvio.`,
      fallbackDefault: (query: string, mode: string) => `### Análise Acadêmica sobre "${query}"

**Modo de Pesquisa: ${mode}**

1. **Investigação do Corpus Primário**:
   Ao avaliar este motivo nos textos hebraicos, do Segundo Templo, mesopotâmicos, cananeus e clássicos, separamos com rigor transmissões diretas de paralelos estruturais transculturais.

2. **Distinção Probatória**:
   • Citações diretas exigem dependência linguística ou sequencial demonstrável.
   • Paralelos mais amplos são catalogados como **COMPARATIVOS**.

3. **Passagens Recomendadas para Investigação**:
   • Gênesis 6:1–4 e 1 Enoque 6–16 (Vigilantes e Gigantes)
   • Números 13:33 e Deuteronômio 2–3 (Anaquins e Refains)
   • Gilgamesh XI e Atrahasis III (Dilúvio)
   • KTU 1.5 e Isaías 27:1 (Chaoskampf contra Lotan/Leviatã)

Examine estes textos no **Visor de Comparação** ou no **Grafo de Relações**.`
    },
    termModal: {
      literalDefinition: 'Definição Literal',
      etymology: 'Etimologia Linguística e Morfologia',
      scholarlyNotes: 'Exegese Acadêmica e Traduções Antigas',
      occurrences: 'Principais Ocorrências Textuais',
      relatedTerms: 'Termos Antigos Relacionados',
      close: 'Fechar Dicionário'
    },
    pwa: {
      offlineBanner: 'Modo offline: lendo do armazenamento local em cache e cache do Service Worker.',
      installApp: 'Instalar Aplicativo',
      installAppTitle: 'Instale o aplicativo na tela inicial para acesso offline',
      installIos: 'Instalar no iOS',
      installIosTitle: 'Instalar no iPhone / iPad',
      step1: 'Toque no botão Compartilhar na barra inferior do Safari.',
      step2: 'Role para baixo e selecione Adicionar à Tela de Início.',
      step3: 'Inicie Chronos & Canon diretamente da sua tela inicial como um app nativo offline.',
      gotIt: 'Entendido'
    },
    explore: {
      headerTag: 'Leitor de Fontes Primárias e Arquivo Textual',
      headerTitle: 'Explorar Textos e Cânones Antigos',
      headerSubtitle: 'Examine literatura antiga primária hebraica, do Segundo Templo, cristã, mesopotâmica, ugarítica, clássica e global com distinção cronológica tripartida rigorosa.',
      readingModes: {
        sideBySide: 'Lado a Lado',
        translationOnly: 'Apenas Tradução',
        originalOnly: 'Texto Original'
      },
      cataloguedWorks: (count: number) => `Obras Catalogadas (${count})`,
      allTraditions: 'Todas as Tradições',
      lostBookTag: 'Referência a Livro Perdido Antigo (Não homônimo posterior)',
      lostBookNotice: 'Aviso de Integridade Textual e Histórica',
      chronologyTitle: 'Quadro Cronológico Tripartido',
      settingLabel: '1. Cenário do Relato',
      compositionLabel: '2. Composição Estimada',
      earliestMsLabel: '3. Manuscrito Mais Antigo',
      witnessTradition: 'Tradição de Testemunhos Manuscritos:',
      keyWitnesses: 'Principais Testemunhos Físicos:',
      digitalEditionsTitle: (count: number) => `Edições Digitais e Fac-símiles de Acesso Aberto (${count})`,
      viewAllDigitalLibrary: 'Ver Tudo na Biblioteca Digital',
      openArchive: 'Abrir Arquivo',
      passagesTitle: (count: number) => `Principais Passagens Selecionadas e Interlineares (${count})`,
      noPassages: 'Nenhuma passagem de amostra registrada ainda para este texto. Pode examinar a rede de relações no Grafo ou consultar o Assistente IA.',
      compareInViewer: 'Comparar no Visor',
      clickableTerms: 'Termos Linguísticos Interativos:',
      originalScriptLabel: (lang: string) => `Texto Original (${lang})`,
      translationLabel: (langName: string) => `Tradução (${langName})`,
      translator: 'Tradutor:',
      textCriticalNote: 'Nota Crítico-Textual:'
    },
    compare: {
      flagshipPresets: 'Predefinições Principais:',
      presets: {
        gen6Enoch: 'Gênesis 6 ↔ 1 Enoque 6',
        judeEnoch: 'Judas 14–15 ↔ 1 Enoque 1:9',
        ogRapiu: 'Ogue de Basã ↔ Rapiu Ugarítico',
        flood: 'Gilgamesh ↔ Atrahasis ↔ Dilúvio de Manu',
        chaoskampf: 'Isaías 27 ↔ Salmo 74 ↔ Baal contra Lotan'
      },
      addPassageLabel: 'Adicionar passagem para comparar (até 4):',
      selectPassagePlaceholder: 'Selecione uma passagem para adicionar...',
      columnHeader: (colNum: number, ref: string) => `Coluna ${colNum}: ${ref}`,
      removeColumnTitle: 'Remover coluna',
      chronologicalWitness: 'Testemunho Cronológico:',
      setting: 'Cenário:',
      composition: 'Composição:',
      earliestMs: 'Manuscrito mais antigo:',
      keyTerms: 'Termos Principais:',
      originalText: (lang: string) => `Texto Original (${lang})`,
      bookmark: 'Marcador',
      bookmarked: 'Salvo',
      source: 'Fonte:'
    },
    library: {
      badge: 'Fontes Primárias de Acesso Aberto e Repositórios Oficiais',
      tabEditions: (count: number) => `Edições Catalogadas (${count})`,
      tabRepositories: (count: number) => `Repositórios Oficiais (${count})`,
      integrityNote: 'Todos os links apontam para instituições acadêmicas permanentes e arquivos de domínio público.',
      institutionsNote: 'Inclui IAA, Sefaria, British Museum, Oxford ETCSL, Tufts Perseus e Newberry Library.',
      searchPlaceholder: 'Buscar por título de texto, repositório, código ou palavra-chave...',
      allTraditions: (count: number) => `Todas as Tradições (${count})`,
      allFormatTypes: 'Todos os Tipos de Formato',
      editionTypes: {
        'High-Res Manuscript Facsimile': 'Fac-símiles de Manuscritos em Alta Resolução',
        'Original Script & Interlinear': 'Texto Original e Interlinear',
        'Critical Scholarly Edition': 'Edições Críticas Acadêmicas',
        'Open-Access Translation': 'Traduções Completas de Acesso Aberto',
        'Museum Specimen & 3D Scan': 'Espécimes de Museu e Varreduras 3D'
      },
      allInstitutions: 'Todas as Instituições',
      showingEditions: (showing: number, total: number) => `Exibindo ${showing} de ${total} edições públicas disponíveis`,
      resetFilters: 'Redefinir Filtros',
      openRepository: 'Abrir Repositório',
      highlights: 'Destaques Selecionados',
      repositoryName: 'Repositório:',
      viewCanonicalText: 'Ver Texto Canônico',
      linkedCorpus: 'Corpus Vinculado:',
      editionFeatures: 'Recursos da Edição:',
      compareInApp: 'Comparar no Aplicativo',
      openPublicArchive: 'Abrir Arquivo Público',
      noEditionsMatch: 'Nenhuma edição pública corresponde aos seus filtros ativos.',
      tryClearingSearch: 'Tente limpar sua pesquisa ou selecionar "Todas as Tradições" acima.',
      resetSearch: 'Redefinir Filtros de Pesquisa',
      repositoriesTitle: 'Principais Repositórios Institucionais de Acesso Aberto',
      repositoriesSubtitle: 'Esses arquivos digitais e iniciativas universitárias de humanidades hospedam fac-símiles fotográficos de alta resolução, transliterações cuneiformes e edições de acesso aberto da literatura primária referenciada em todo o banco de dados Chronos & Canon.',
      primaryHost: 'Hospedeiro Institucional Principal',
      archivalFocus: 'Foco do Arquivo:',
      freeAccess: 'Gratuito / Acesso Aberto',
      visitRepository: 'Visitar Repositório',
      noteCopyrightTitle: 'Nota sobre Domínio Público vs. Edições Críticas Modernas Protegidas por Direitos Autorais',
      noteCopyrightBody: 'Os links neste diretório conectam diretamente a fac-símiles fotográficos primários (por exemplo, placas multiespectrais da Autoridade de Antiguidades de Israel, varreduras 3D do Museu Britânico) e bancos de dados acadêmicos de acesso aberto revisados por pares (Sefaria, Biblioteca Digital Perseus, Oxford ETCSL, GRETIL). Onde traduções completas estão disponíveis online, utilizam marcos históricos de domínio público (como R.H. Charles para 1 Enoque e Jubileus, George Smith para Gilgamesh ou Ralph Griffith para o Rigveda). Para traduções e comentários acadêmicos protegidos do século XXI, recomenda-se consultar bibliotecas universitárias ou plataformas acadêmicas.'
    },
    map: {
      headerTag: 'Cartografia Arqueológica e Proveniência de Escavações',
      tabMap: 'Mapa Interativo',
      tabDirectory: (count: number) => `Diretório de Sítios (${count})`,
      regionFocus: 'Foco Regional:',
      regionNames: {
        GLOBAL: 'Horizontes Antigos Globais',
        FERTILE_CRESCENT: 'Crescente Fértil e Levante',
        MEDITERRANEAN: 'Mediterrâneo e Grécia',
        ASIA_PERSIA: 'Pérsia e Indo-Sarasvati',
        MESOAMERICA: 'Mesoamérica',
        NORTH_EUROPE: 'Norte da Europa'
      },
      viewingRegion: (name: string) => `Visualizando: ${name}`,
      searchPlaceholder: 'Buscar nome de sítio, país moderno ou descoberta...',
      traditionLabel: 'Tradição:',
      typeLabel: 'Tipo:',
      allExcavationTypes: 'Todos os Tipos de Escavação',
      excavationTypes: {
        'Primary Excavation': 'Escavação Primária',
        'Archival Discovery': 'Descoberta de Arquivo',
        'Ancient Capital': 'Capital Antiga',
        'Mythological Axis': 'Eixo Mitológico'
      },
      sitesCountBadge: (count: number) => `(${count} sítios no conjunto de dados)`,
      zoomIn: 'Aproximar',
      zoomOut: 'Afastar',
      resetZoom: 'Redefinir Zoom',
      legendHebrew: 'Hebraica / Israelita',
      legendDeadSea: 'Manuscritos do Mar Morto',
      legendMesopotamian: 'Mesopotâmica',
      legendUgaritic: 'Ugarítica',
      legendGrecoRoman: 'Greco-Romana',
      legendHint: 'Clique em um marcador ou selecione abaixo para examinar os achados',
      excavationFinds: 'Descobertas de Escavação e Manuscritos Primários',
      corpusWorks: 'Obras do Corpus Ligadas a este Sítio',
      noWorksNotice: 'Contexto histórico preservado por meio de inscrições epigráficas e arqueológicas.',
      showingSites: (count: number) => `Exibindo ${count} sítios arqueológicos catalogados`,
      sortedBySignificance: 'Ordenados por relevância arqueológica',
      viewOnMap: 'Ver no Mapa'
    },
    graph: {
      searchPlaceholder: 'Buscar nós por título, idioma ou motivo...',
      activeMode: 'Modo Ativo:',
      filterRigor: 'Filtrar por Rigor Probatório:',
      activeNodesLabel: (count: number) => `Textos Ativos: ${count}`,
      activeLinksLabel: (count: number) => `Conexões Mapeadas: ${count}`,
      inspectHint: 'Clique em qualquer nó para revelar conexões e comparar passagens.',
      relationshipDetails: 'Detalhes da Relação',
      citationsHeading: 'Citações e Literatura Acadêmica',
      compareSideBySide: 'Comparar no Visor Lado a Lado',
      resetLayout: 'Redefinir Visão do Grafo',
      headerTag: 'Grafo Interativo de Evidências e Rede Dinâmica',
      headerTitle: 'Matriz de Relações Transculturais',
      headerSubtitle: 'Investigue conexões comprobatórias entre textos, passagens e motivos. Ajuste os modos de pesquisa para filtrar o rigor probatório.',
      modeLabel: 'Modo de Pesquisa:',
      legendHebrew: 'Bíblia Hebraica',
      legendSecondTemple: 'Segundo Templo',
      legendNewTestament: 'Novo Testamento',
      legendMesopotamian: 'Mesopotâmica',
      legendUgaritic: 'Ugarítica',
      zoomIn: 'Aproximar',
      zoomOut: 'Afastar',
      resetView: 'Redefinir Visão',
      dragToPan: 'Arraste a tela para mover',
      backToNode: 'Voltar ao Nó',
      documentedConnections: (count: number) => `Conexões Documentadas (${count})`,
      noThresholdMatch: (mode: string) => `Nenhuma conexão atinge o limiar para o modo ${mode}. Tente mudar para o modo Comparativo ou Exploratório.`,
      selectNodeHint: 'Selecione qualquer nó na rede para inspecionar seus vínculos textuais antigos e nível de evidência acadêmica.'
    }
  }
};

export function getUiTranslations(lang: SupportedLanguage): UiTranslations {
  return uiTranslations[lang] || uiTranslations.en;
}

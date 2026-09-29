import { SupportedLanguage } from '../types';

export interface Translations {
  appName: string;
  appSubtitle: string;
  archiveBadge: string;
  
  // Navigation
  nav: {
    dashboard: string;
    exploreTexts: string;
    digitalLibrary: string;
    compare: string;
    graph: string;
    timeline: string;
    worldMap: string;
    motifs: string;
    seventyBooks: string;
    genesis6: string;
    floodStudy: string;
    manuscripts: string;
    assistant: string;
    moreStudies: string;
    selectModule: string;
    modeLabel: string;
  };

  // Research Modes
  modes: {
    scholarly: string;
    scholarlyDesc: string;
    comparative: string;
    comparativeDesc: string;
    exploratory: string;
    exploratoryDesc: string;
    speculative: string;
    speculativeDesc: string;
  };

  // Evidence Levels
  evidence: {
    documented: string;
    strong: string;
    comparative: string;
    possible: string;
    speculative: string;
  };

  evidenceDescriptions: {
    DOCUMENTED: string;
    STRONG: string;
    COMPARATIVE: string;
    POSSIBLE: string;
    SPECULATIVE: string;
  };

  relationshipTypes: {
    'DIRECT QUOTATION': string;
    'TEXTUAL DEPENDENCE': string;
    'EXPANDED TRADITION': string;
    'LATER INTERPRETATION': string;
    'SHARED TRADITION': string;
    'LINGUISTIC RELATIONSHIP': string;
    'HISTORICAL CONNECTION': string;
    'PARALLEL NARRATIVE': string;
    'SHARED MOTIF': string;
    'POSSIBLE CONNECTION': string;
    'SPECULATIVE COMPARISON': string;
  };

  // Home Dashboard
  dashboard: {
    heroTitle: string;
    heroSubtitle: string;
    statTraditions: string;
    statPassages: string;
    statRelationships: string;
    statSites: string;
    statLibrary: string;
    quickStartTitle: string;
    quickStartSubtitle: string;
    exploreArchiveBtn: string;
    comparePassagesBtn: string;
    graphNetworkBtn: string;
    rigorHeading: string;
    rigorSubtitle: string;
    featuredHeading: string;
    featuredSubheading: string;
    modulesHeading: string;
    modulesSubheading: string;
    compareAction: string;
  };

  // Featured Comparative Discoveries Cards
  featured: {
    gen6Title: string;
    gen6Subtitle: string;
    gen6Desc: string;
    judeTitle: string;
    judeSubtitle: string;
    judeDesc: string;
    floodTitle: string;
    floodSubtitle: string;
    floodDesc: string;
    rephaimTitle: string;
    rephaimSubtitle: string;
    rephaimDesc: string;
  };

  // Core Research Modules
  modules: {
    explore: { title: string; desc: string; tag: string };
    library: { title: string; desc: string; tag: string };
    compare: { title: string; desc: string; tag: string };
    graph: { title: string; desc: string; tag: string };
    timeline: { title: string; desc: string; tag: string };
    map: { title: string; desc: string; tag: string };
    motifs: { title: string; desc: string; tag: string };
    seventyBooks: { title: string; desc: string; tag: string };
    genesis6: { title: string; desc: string; tag: string };
    flood: { title: string; desc: string; tag: string };
    manuscripts: { title: string; desc: string; tag: string };
    assistant: { title: string; desc: string; tag: string };
  };

  // Explore Texts
  explore: {
    searchPlaceholder: string;
    filterCulture: string;
    filterCategory: string;
    allCultures: string;
    allCategories: string;
    noResults: string;
    resetFilters: string;
    witnesses: string;
    viewInCompare: string;
    openDigitalLibrary: string;
    primaryPassages: string;
    manuscriptsTitle: string;
    compositionDate: string;
    earliestManuscript: string;
    detailsBtn: string;
  };

  // Compare View
  compare: {
    title: string;
    subtitle: string;
    selectPassagesLabel: string;
    addPassage: string;
    searchToCompare: string;
    originalScript: string;
    transliteration: string;
    translation: string;
    criticalNotes: string;
    motifsDetected: string;
    noPassagesSelected: string;
    sourceWork: string;
    license: string;
    syncScroll: string;
    languageToggle: string;
  };

  // Graph View
  graph: {
    title: string;
    subtitle: string;
    legendEvidence: string;
    resetView: string;
    filterMode: string;
    activeNodes: string;
    activeConnections: string;
    clickNodeHint: string;
    connectionDetails: string;
    evidenceLevel: string;
    citations: string;
  };

  // Timeline View
  timeline: {
    title: string;
    subtitle: string;
    layerPrimary: string;
    layerSecondary: string;
    layerTertiary: string;
    bce: string;
    ce: string;
    filterEra: string;
  };

  // Map View
  map: {
    title: string;
    subtitle: string;
    allRegions: string;
    nearEast: string;
    mediterranean: string;
    asiaPersia: string;
    americas: string;
    excavationDossier: string;
    associatedTexts: string;
    keyDiscoveries: string;
    archaeologicalSite: string;
  };

  // Motifs View
  motifs: {
    title: string;
    subtitle: string;
    allCategories: string;
    biblicalParallels: string;
    crossCulturalParallels: string;
    scholarlyDebate: string;
    passagesInCorpus: string;
  };

  // Digital Library
  library: {
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    openAccessFilter: string;
    allInstitutions: string;
    openExternal: string;
    editionType: string;
    keyHighlights: string;
  };

  // AI Assistant
  assistant: {
    title: string;
    subtitle: string;
    promptSuggestions: string;
    inputPlaceholder: string;
    sendBtn: string;
    thinking: string;
    modeBadge: string;
    offlineNotice: string;
  };

  // Genesis 6 Study
  genesis6Study: {
    badge: string;
    heroTitle: string;
    heroSubtitle: string;
    tab1: string;
    tab2: string;
    tab3: string;
    tab4: string;
    crucesTitle: string;
    crucesSubtitle: string;
    sonsOfGodDesc: string;
    nephilimDesc: string;
    gibborimDesc: string;
    ansheiHashemDesc: string;
    step2Btn: string;
    step2Title: string;
    step2Subtitle: string;
    enochDesc: string;
    giantsBookDesc: string;
    judeDesc: string;
    peterDesc: string;
    step3Btn: string;
    step3Title: string;
    step3Para1: string;
    step3Para2: string;
    step3Quote: string;
    step3Para3: string;
    step4Btn: string;
    step4Title: string;
    warningTitle: string;
    warningText: string;
    greekTitansTitle: string;
    greekTitansDesc: string;
    norseJotnarTitle: string;
    norseJotnarDesc: string;
    apkalluTitle: string;
    apkalluDesc: string;
    compareBtn: string;
    backBtn: string;
    clickTerm: string;
  };

  // Flood Traditions Study
  floodStudy: {
    badge: string;
    heroTitle: string;
    heroSubtitle: string;
    tableWork: string;
    tableHero: string;
    tableVessel: string;
    tableMountain: string;
    tableBirds: string;
    tableMotive: string;
    tableEvidence: string;
    compareAction: string;
    sharedFeaturesTitle: string;
    sharedFeaturesDesc: string;
    featureBitumen: string;
    featureBitumenDesc: string;
    featureCubits: string;
    featureCubitsDesc: string;
    featureBirds: string;
    featureBirdsDesc: string;
    featureSacrifice: string;
    featureSacrificeDesc: string;
  };

  // Common UI
  common: {
    close: string;
    cancel: string;
    share: string;
    copyLink: string;
    copied: string;
    readMore: string;
    source: string;
    culture: string;
    era: string;
    category: string;
    installApp: string;
    offlineReady: string;
    language: string;
  };
}

export const translations: Record<SupportedLanguage, Translations> = {
  en: {
    appName: 'CHRONOS & CANON',
    appSubtitle: 'Ancient Comparative Archive',
    archiveBadge: 'Scholarly Open Archive',
    nav: {
      dashboard: 'Dashboard',
      exploreTexts: 'Explore Texts',
      digitalLibrary: 'Public Texts',
      compare: 'Compare',
      graph: 'Graph',
      timeline: 'Timeline',
      worldMap: 'World Map',
      motifs: 'Motifs',
      seventyBooks: '70 Books',
      genesis6: 'Genesis 6',
      floodStudy: 'Flood Study',
      manuscripts: 'Manuscripts',
      assistant: 'AI Assistant',
      moreStudies: 'More Studies',
      selectModule: 'Select Research Module',
      modeLabel: 'Mode:'
    },
    modes: {
      scholarly: 'Scholarly Mode',
      scholarlyDesc: 'Direct quotations, primary manuscript witnesses, and shared Northwest Semitic vocabulary.',
      comparative: 'Comparative Mode',
      comparativeDesc: 'Universal archetypes, cross-cultural parallels, and broad Near Eastern literary tropes.',
      exploratory: 'Exploratory Mode',
      exploratoryDesc: 'Plausible historical hypotheses, lost source traditions, and apocryphal links.',
      speculative: 'Speculative Mode',
      speculativeDesc: 'Controversial theories, fringe hypotheses, and exploratory syncretisms.'
    },
    evidence: {
      documented: 'DOCUMENTED',
      strong: 'STRONG',
      comparative: 'COMPARATIVE',
      possible: 'POSSIBLE',
      speculative: 'SPECULATIVE'
    },
    evidenceDescriptions: {
      DOCUMENTED: 'Direct quotation, manuscript witness, or demonstrable textual dependence.',
      STRONG: 'Widely recognized relationship in relevant peer-reviewed scholarship.',
      COMPARATIVE: 'Meaningful structural, mythic, or thematic parallel without proof of direct transmission.',
      POSSIBLE: 'Plausible historical or literary hypothesis, subject to scholarly debate.',
      SPECULATIVE: 'Hypothesis for which firm historical or manuscript evidence is currently lacking.'
    },
    relationshipTypes: {
      'DIRECT QUOTATION': 'DIRECT QUOTATION',
      'TEXTUAL DEPENDENCE': 'TEXTUAL DEPENDENCE',
      'EXPANDED TRADITION': 'EXPANDED TRADITION',
      'LATER INTERPRETATION': 'LATER INTERPRETATION',
      'SHARED TRADITION': 'SHARED TRADITION',
      'LINGUISTIC RELATIONSHIP': 'LINGUISTIC RELATIONSHIP',
      'HISTORICAL CONNECTION': 'HISTORICAL CONNECTION',
      'PARALLEL NARRATIVE': 'PARALLEL NARRATIVE',
      'SHARED MOTIF': 'SHARED MOTIF',
      'POSSIBLE CONNECTION': 'POSSIBLE CONNECTION',
      'SPECULATIVE COMPARISON': 'SPECULATIVE COMPARISON'
    },
    dashboard: {
      heroTitle: 'Investigate Ancient Textual Relationships for Yourself',
      heroSubtitle: 'Discover direct literary dependence, shared Northwest Semitic roots, and cross-cultural archetypes across Hebrew Bible, Second Temple, Dead Sea Scrolls, Mesopotamian, Ugaritic, Classical, and Global traditions—with honest evidentiary classifications.',
      statTraditions: 'Ancient Traditions',
      statPassages: 'Primary Passages',
      statRelationships: 'Mapped Connections',
      statSites: 'Archaeological Sites',
      statLibrary: 'Public Text Portals',
      quickStartTitle: 'Curated Research Pathways',
      quickStartSubtitle: 'Jump directly into focused comparative case studies with side-by-side textual analysis.',
      exploreArchiveBtn: 'Explore Genesis 6 Flagship Study',
      comparePassagesBtn: 'Compare Passages',
      graphNetworkBtn: 'Interactive Relationship Graph',
      rigorHeading: 'Four-Tier Scholarly Rigor Architecture',
      rigorSubtitle: 'Filter relationships by evidence strength to distinguish proven historical borrowing from universal mythological archetypes.',
      featuredHeading: 'Featured Comparative Discoveries',
      featuredSubheading: 'High-impact textual connections demonstrating primary evidence levels',
      modulesHeading: 'Research & Exploration Modules',
      modulesSubheading: 'Navigate directly to any section of the ancient textual database',
      compareAction: 'Compare'
    },
    featured: {
      gen6Title: 'GENESIS 6 ↔ 1 ENOCH',
      gen6Subtitle: 'From the "sons of God" to the Watcher tradition on Mount Hermon',
      gen6Desc: 'The cryptic four-verse vignette of Genesis 6:1–4 is expanded in 1 Enoch into a full apocalyptic narrative detailing 200 fallen angels, illicit metallurgical and astronomical arts, and the devastating birth of giant offspring.',
      judeTitle: 'JUDE ↔ 1 ENOCH',
      judeSubtitle: 'A New Testament author explicitly cites Enochic apocalyptic prophecy',
      judeDesc: 'Jude 14–15 directly attributes a prophecy to "Enoch, the seventh from Adam" and quotes 1 Enoch 1:9 verbatim, alongside invoking the angels bound in everlasting chains under darkness (v. 6).',
      floodTitle: 'NOAH ↔ GILGAMESH ↔ ATRAHASIS',
      floodSubtitle: 'Compare ancient Near Eastern Flood traditions & structural dependencies',
      floodDesc: 'Genesis 6–9, Gilgamesh Tablet XI, and Atrahasis Tablet III share bitumen pitch caulking, exact cubit dimensional ratios, mountain grounding (Ararat / Nimush), bird release tests, and post-flood sacrifices.',
      rephaimTitle: 'NEPHILIM ↔ ANAKIM ↔ REPHAIM ↔ RPUM',
      rephaimSubtitle: 'Trace biblical giant clans to Late Bronze Age Ugaritic royal ancestor cults',
      rephaimDesc: 'Og king of Bashan, "the remnant of the Rephaim" ruling at Ashtaroth and Edrei, directly mirrors Ugaritic tablet KTU 1.108 where the divine Rapiu (rpu mlk) sits enthroned at Ashtaroth and Edrei.'
    },
    modules: {
      explore: {
        title: 'Explore Ancient Texts',
        desc: 'Browse Hebrew Bible, Second Temple, Mesopotamian, Ugaritic, Classical, and Global works with tripartite chronological distinction.',
        tag: 'Text Corpus'
      },
      library: {
        title: 'Public Texts & Digital Archives',
        desc: 'Direct links to free, open-access editions: multispectral Dead Sea Scrolls, British Museum cuneiform 3D scans, Sefaria, and Perseus.',
        tag: 'Open Access'
      },
      compare: {
        title: 'Compare Passages',
        desc: 'Side-by-side parallel reader for 2 to 4 ancient texts with original languages, transliterations, and clickable linguistic terms.',
        tag: 'Multi-Reader'
      },
      graph: {
        title: 'Relationship Graph',
        desc: 'Dynamic interactive network mapping citations, expansions, and cross-cultural motifs with selectable evidentiary rigor.',
        tag: 'Evidence Map'
      },
      timeline: {
        title: 'Chronological Stratigraphy',
        desc: 'Strict separation of Story Setting vs Estimated Date of Composition vs Earliest Physical Manuscript Witness.',
        tag: 'Chronology'
      },
      map: {
        title: 'Ancient World Atlas',
        desc: 'Explore archaeological discovery sites, tablet finds, and ancient geographical centers from Qumran to Nineveh and Mesoamerica.',
        tag: 'Geography'
      },
      motifs: {
        title: 'Cross-Cultural Motifs',
        desc: 'Discover 25+ universal motifs: Chaoskampf, Sacred Mountains, Divine Councils, Cosmic Trees, and Heroic Ages.',
        tag: 'Archetypes'
      },
      seventyBooks: {
        title: 'The 70 Books for the Wise',
        desc: 'Exploratory reconstruction of the 70 esoteric Second Temple apocalyptic works described in 2 Esdras 14.',
        tag: 'Special Collection'
      },
      genesis6: {
        title: 'Genesis 6 / Watchers Study',
        desc: 'Flagship deep-dive connecting Sons of God, Nephilim, Anakim, Rephaim, Og of Bashan, Ugaritic rpum, Jude, and Hesiod.',
        tag: 'Flagship Study'
      },
      flood: {
        title: 'Great Flood Traditions',
        desc: 'Systematic comparative analysis of Genesis, Gilgamesh, Atrahasis, Vedic Manu, and Maya Popol Vuh deluge accounts.',
        tag: 'Deluge Matrix'
      },
      manuscripts: {
        title: 'Surviving Manuscripts',
        desc: 'Physical witnesses, paleography, dates, provenance, and copyright distinctions for Dead Sea Scrolls and ancient codices.',
        tag: 'Paleography'
      },
      assistant: {
        title: 'AI Research Assistant',
        desc: 'Ask complex comparative questions grounded strictly in primary sources and peer-reviewed relationship evidence levels.',
        tag: 'AI Epigraphy'
      }
    },
    explore: {
      searchPlaceholder: 'Search texts, terms, biblical passages, cuneiform tablets...',
      filterCulture: 'All Cultures',
      filterCategory: 'All Categories',
      allCultures: 'All Cultures',
      allCategories: 'All Categories',
      noResults: 'No ancient texts found matching your filter criteria.',
      resetFilters: 'Reset All Filters',
      witnesses: 'Primary Manuscript Witnesses',
      viewInCompare: 'Compare Passages',
      openDigitalLibrary: 'Open in Digital Library',
      primaryPassages: 'Key Extracted Passages',
      manuscriptsTitle: 'Manuscript Witnesses & Provenance',
      compositionDate: 'Estimated Composition',
      earliestManuscript: 'Earliest Surviving Manuscript',
      detailsBtn: 'Examine Text'
    },
    compare: {
      title: 'Comparative Text Alignment',
      subtitle: 'Side-by-side textual examination of ancient witnesses with original scripts, transliteration, English, Spanish, and Portuguese translations.',
      selectPassagesLabel: 'Select passages to compare:',
      addPassage: '+ Add Passage to Comparison',
      searchToCompare: 'Search passages to add...',
      originalScript: 'Original Script',
      transliteration: 'Transliteration',
      translation: 'Translation',
      criticalNotes: 'Critical Apparatus & Philological Notes',
      motifsDetected: 'Thematic Motifs Detected',
      noPassagesSelected: 'Select two or more passages above to view their alignment.',
      sourceWork: 'Source Work',
      license: 'License',
      syncScroll: 'Synchronize Scroll',
      languageToggle: 'Translation Language'
    },
    graph: {
      title: 'Interactive Textual Relationship Graph',
      subtitle: 'Visualizing direct quotations, textual dependence, shared motifs, and cross-cultural diffusion across the ancient world.',
      legendEvidence: 'Evidence Rigor Level',
      resetView: 'Reset Graph View',
      filterMode: 'Active Rigor Mode:',
      activeNodes: 'Active Texts',
      activeConnections: 'Mapped Connections',
      clickNodeHint: 'Click any node to reveal its literary connections and compare passages.',
      connectionDetails: 'Relationship Dossier',
      evidenceLevel: 'Evidence Rigor',
      citations: 'Scholarly Citations'
    },
    timeline: {
      title: 'Tripartite Chronological Stratum',
      subtitle: 'Distinguishing primary contemporaneous witnesses from secondary literary transmission and tertiary modern reconstructions.',
      layerPrimary: '1. Primary Witnesses (Contemporaneous)',
      layerSecondary: '2. Secondary Transmission (Medieval / Classical)',
      layerTertiary: '3. Tertiary Reconstructions',
      bce: 'BCE',
      ce: 'CE',
      filterEra: 'Filter by Era'
    },
    map: {
      title: 'Archaeological Provenance & Cartography',
      subtitle: 'Geographic distribution of ancient library discoveries, cuneiform archives, papyrus caches, and sacred mountains.',
      allRegions: 'All World Regions',
      nearEast: 'Near East & Levant',
      mediterranean: 'Greco-Roman & Mediterranean',
      asiaPersia: 'Persia & Asia',
      americas: 'Mesoamerica',
      excavationDossier: 'Excavation Dossier & Provenance',
      associatedTexts: 'Associated Ancient Texts',
      keyDiscoveries: 'Key Archaeological Discoveries',
      archaeologicalSite: 'Archaeological Site'
    },
    motifs: {
      title: 'Cross-Cultural Motif Hub',
      subtitle: 'Tracking universal archetypes, theological polemics, and shared mythological motifs across civilizations.',
      allCategories: 'All Categories',
      biblicalParallels: 'Biblical Parallels',
      crossCulturalParallels: 'Cross-Cultural Parallels',
      scholarlyDebate: 'Scholarly Consensus & Academic Debate',
      passagesInCorpus: 'Corpus Passages with this Motif'
    },
    library: {
      title: 'Institutional Open-Access Library',
      subtitle: 'Direct gateways to official museum collections, manuscript portals, and peer-reviewed academic corpora.',
      searchPlaceholder: 'Search public texts, museums, and digital collections...',
      openAccessFilter: 'Open Access Verified',
      allInstitutions: 'All Institutions',
      openExternal: 'Open Official Repository',
      editionType: 'Edition Type',
      keyHighlights: 'Curated Highlights'
    },
    assistant: {
      title: 'Scholarly Research Assistant',
      subtitle: 'Query the ancient comparative corpus for textual parallels, linguistic cognates, and manuscript provenance.',
      promptSuggestions: 'Sample Research Inquiries',
      inputPlaceholder: 'Ask a comparative question (e.g., "What connects the biblical Rephaim with Ugarit?")...',
      sendBtn: 'Send Inquiry',
      thinking: 'Consulting ancient manuscripts and scholarly apparatus...',
      modeBadge: 'Filter: ',
      offlineNotice: 'Running in offline archive mode with corpus-grounded responses.'
    },
    genesis6Study: {
      badge: 'Flagship Interactive Case Study',
      heroTitle: 'Genesis 6:1–4, The Watchers & The Giant Traditions',
      heroSubtitle: 'Explore the genesis of the "Sons of God" (bene ha-elohim), Nephilim, and "gibborim of renown", tracing their direct textual transmission into 1 Enoch, the Dead Sea Scrolls, and the New Testament, along with authentic West Semitic Rephaim archaeology and disciplined cross-cultural comparative paradigms.',
      tab1: '1. Genesis 6 Core Anatomy',
      tab2: '2. Enochic Expansion & NT Reception',
      tab3: '3. Rephaim, Anakim & Ugaritic rpum',
      tab4: '4. Cross-Cultural Comparative Rigor',
      crucesTitle: 'The Four Cruces of Genesis 6:1–4',
      crucesSubtitle: 'Genesis 6:1–4 is one of the most enigmatic fragments in biblical literature. Every phrase carries profound theological and linguistic baggage:',
      sonsOfGodDesc: 'Literally "sons of the divine powers". Throughout the Hebrew Bible (Job 1:6, 2:1, 38:7, Ps 82:6, Deut 32:8) and Ugaritic poetry (bn ʾil), this denotes celestial council members, not human aristocrats.',
      nephilimDesc: 'Present on earth "in those days—and also afterward". Translated by the ancient Septuagint as gigantes. Associated with ancient fallen warriors or terrifying superhuman beings.',
      gibborimDesc: '"The mighty men who were of old." Echoes the Mesopotamian heroic epithet for warrior champions of primeval antiquity like Gilgamesh and the Greek heroic age warriors.',
      ansheiHashemDesc: '"Men of name / renown." Indicates beings celebrated in antiquity for their fame and monumental deeds, whose memories were preserved in oral legend and epic poetry.',
      step2Btn: 'Step 2: Trace Enochic Transmission',
      step2Title: 'From Genesis 6 to 1 Enoch, Jubilees, Jude & 2 Peter',
      step2Subtitle: 'How did the brief Genesis 6 vignette become the dominant cosmic paradigm of Second Temple Judaism and early Christianity?',
      enochDesc: 'Unpacks Genesis 6 into 200 angels descending on Mount Hermon led by Shemihazah and Asael. The giants consume human labor and devour humanity.',
      giantsBookDesc: 'Presents the giants\' inner terror. Fascinatingly names one of the giant sons Gilgamesh, directly incorporating the Mesopotamian epic king into Jewish lore!',
      judeDesc: 'Explicitly quotes 1 Enoch 1:9 ("Behold, the Lord comes with ten thousands of his holy ones...") and alludes to the Watchers imprisoned in chains of darkness.',
      peterDesc: 'Applies the rare verb tartaroō (cast into Tartarus) to the sinning angels who were cast down before the flood of Noah.',
      step3Btn: 'Step 3: Rephaim & Ugaritic Archaeology',
      step3Title: 'Archaeological Confirmation: The Rephaim of Og & Ugaritic rpum',
      step3Para1: 'In the Hebrew Bible, the post-flood giants are called Anakim (Numbers 13:33) and Rephaim (Deuteronomy 2–3). Og of Bashan is called "the remnant of the Rephaim", reigning from Ashtaroth and Edrei.',
      step3Para2: 'In 1961, French excavators at Ras Shamra (Ugarit) unearthed tablet KTU 1.108. The tablet invokes the divine ruler:',
      step3Quote: '"May Rapiu, the King of Eternity, drink... the god who sits enthroned at Ashtaroth, the god who rules in Edrei!"',
      step3Para3: 'The exact two royal capitals of the Rephaite Og in Deuteronomy 1:4 and Joshua 12:4! This proves that the biblical traditions of the Rephaim in Bashan preserved memories of Late Bronze Age Northwest Semitic ancestral warrior kings.',
      step4Btn: 'Step 4: Cross-Cultural Discipline',
      step4Title: 'Cross-Cultural Parallels: Anti-Conflation Discipline',
      warningTitle: 'Mandatory Scholarly Rule: Do NOT Present Foreign Figures as "Nephilim"',
      warningText: 'Popular literature often claims that Greek Titans, Heracles, Gilgamesh, or Norse Jötnar "were Nephilim." The archive strictly rejects this conflation. Unless direct historical or textual transmission is demonstrated, these represent distinct, independent cultural manifestations of a shared human archetype: bygone heroic ages, divine-mortal unions, and colossal primeval inhabitants.',
      greekTitansTitle: 'Greek Demigods & Titans',
      greekTitansDesc: 'Hesiod\'s Theogony recounts Titans cast into Tartarus and demigods (hemitheoi) born of gods and mortal women. Unlike Hebrew polemics where these unions bring moral ruin, Greek myth celebrates them as civic founders.',
      norseJotnarTitle: 'Norse Jötnar (Giants)',
      norseJotnarDesc: 'In Völuspá, the Jötnar descend from the primordial giant Ymir. They represent raw, elemental forces of nature and cosmic opposition rather than angelic-human transgressive sexual hybridity.',
      apkalluTitle: 'Mesopotamian Apkallu',
      apkalluDesc: 'The pre-flood fish-sages (Apkallu) brought arts of civilization from Enki. 1 Enoch polemically inverts this tradition by transforming the sages into fallen Watchers whose illicit arts corrupted mankind.',
      compareBtn: 'Launch 4-Way Genesis 6 Parallel Comparison',
      backBtn: '← Back',
      clickTerm: 'Click Term'
    },
    floodStudy: {
      badge: 'Comparative Deluge Matrix',
      heroTitle: 'Great Flood Traditions of the Ancient World',
      heroSubtitle: 'Side-by-side comparative analysis of Mesopotamian, Hebrew, Vedic, and Mesoamerican flood narratives, demonstrating structural textual dependencies and independent universal archetypes.',
      tableWork: 'Work / Tradition',
      tableHero: 'Flood Hero',
      tableVessel: 'Ark / Vessel Specs',
      tableMountain: 'Mountain Landing',
      tableBirds: 'Bird Reconnaissance',
      tableMotive: 'Divine Motive for Deluge',
      tableEvidence: 'Relationship to Genesis',
      compareAction: 'Compare in Viewer',
      sharedFeaturesTitle: 'Structural Dependencies: Genesis vs Gilgamesh XI vs Atrahasis III',
      sharedFeaturesDesc: 'Scholarly consensus recognizes direct historical connection between Mesopotamian cuneiform tablets and the Genesis flood account:',
      featureBitumen: 'Bitumen Pitch Caulking',
      featureBitumenDesc: 'Both Genesis 6:14 (kopher / bitumen) and Gilgamesh XI (kupru) specify exact waterproof sealing methods with asphalt pitch inside and out.',
      featureCubits: 'Exact Cubit Dimensions & Multideck Design',
      featureCubitsDesc: 'Both accounts specify dimensional ratios in cubits with internal multi-deck compartments, roof hatches, and a single side door sealed by divinity.',
      featureBirds: 'Tripartite Bird Release Test',
      featureBirdsDesc: 'Releasing birds (dove, swallow, raven) to test whether land had emerged from receding waters is a distinctive literary sequence shared across the Levant.',
      featureSacrifice: 'Post-Deluge Sweet-Savor Sacrifice',
      featureSacrificeDesc: 'Upon disembarking, both Noah (Gen 8:20) and Utnapishtim offer sacrifices where the divine powers smell the "soothing aroma" and promise not to destroy humanity again.'
    },
    common: {
      close: 'Close',
      cancel: 'Cancel',
      share: 'Share Link',
      copyLink: 'Copy Comparison Link',
      copied: 'Copied to Clipboard!',
      readMore: 'Read More',
      source: 'Source',
      culture: 'Culture',
      era: 'Era',
      category: 'Category',
      installApp: 'Install App',
      offlineReady: 'Offline Archive Ready',
      language: 'Language'
    }
  },

  es: {
    appName: 'CHRONOS Y CANON',
    appSubtitle: 'Archivo Comparativo de Textos Antiguos',
    archiveBadge: 'Archivo Académico Abierto',
    nav: {
      dashboard: 'Panel Principal',
      exploreTexts: 'Explorar Textos',
      digitalLibrary: 'Textos Públicos',
      compare: 'Comparar',
      graph: 'Grafo de Relaciones',
      timeline: 'Cronología',
      worldMap: 'Mapa Mundial',
      motifs: 'Motivos Temáticos',
      seventyBooks: 'Los 70 Libros',
      genesis6: 'Génesis 6',
      floodStudy: 'Estudio del Diluvio',
      manuscripts: 'Manuscritos',
      assistant: 'Asistente IA',
      moreStudies: 'Más Estudios',
      selectModule: 'Seleccionar Módulo de Estudio',
      modeLabel: 'Modo:'
    },
    modes: {
      scholarly: 'Modo Académico',
      scholarlyDesc: 'Citas directas, manuscritos primarios y vocabulario semítico noroccidental compartido.',
      comparative: 'Modo Comparativo',
      comparativeDesc: 'Arquetipos universales, paralelos interculturales y tropos literarios del Próximo Oriente.',
      exploratory: 'Modo Exploratorio',
      exploratoryDesc: 'Hipótesis históricas plausibles, tradiciones de fuentes perdidas y vínculos apócrifos.',
      speculative: 'Modo Especulativo',
      speculativeDesc: 'Teorías controvertidas, hipótesis alternativas y sincretismos exploratorios.'
    },
    evidence: {
      documented: 'DOCUMENTADO',
      strong: 'SÓLIDO',
      comparative: 'COMPARATIVO',
      possible: 'POSIBLE',
      speculative: 'ESPECULATIVO'
    },
    evidenceDescriptions: {
      DOCUMENTED: 'Cita directa, testimonio manuscrito o dependencia textual demostrable.',
      STRONG: 'Relación ampliamente reconocida en publicaciones académicas arbitradas.',
      COMPARATIVE: 'Paralelo estructural, mítico o temático significativo sin prueba de transmisión directa.',
      POSSIBLE: 'Hipótesis histórica o literaria plausible, sujeta a debate académico.',
      SPECULATIVE: 'Hipótesis que actualmente carece de evidencia histórica o manuscrita firme.'
    },
    relationshipTypes: {
      'DIRECT QUOTATION': 'CITA DIRECTA',
      'TEXTUAL DEPENDENCE': 'DEPENDENCIA TEXTUAL',
      'EXPANDED TRADITION': 'TRADICIÓN AMPLIADA',
      'LATER INTERPRETATION': 'INTERPRETACIÓN POSTERIOR',
      'SHARED TRADITION': 'TRADICIÓN COMPARTIDA',
      'LINGUISTIC RELATIONSHIP': 'RELACIÓN LINGÜÍSTICA',
      'HISTORICAL CONNECTION': 'CONEXIÓN HISTÓRICA',
      'PARALLEL NARRATIVE': 'NARRATIVA PARALELA',
      'SHARED MOTIF': 'MOTIVO COMPARTIDO',
      'POSSIBLE CONNECTION': 'CONEXIÓN POSIBLE',
      'SPECULATIVE COMPARISON': 'COMPARACIÓN ESPECULATIVA'
    },
    dashboard: {
      heroTitle: 'Investigue Relaciones Textuales Antiguas por Sí Mismo',
      heroSubtitle: 'Descubra la dependencia literaria directa, las raíces semíticas noroccidentales compartidas y los arquetipos interculturales entre la Biblia Hebrea, el Segundo Templo, los Manuscritos del Mar Muerto, Mesopotamia, Ugarit, el mundo clásico y las tradiciones globales—con rigurosa clasificación probatoria.',
      statTraditions: 'Tradiciones Antiguas',
      statPassages: 'Pasajes Primarios',
      statRelationships: 'Conexiones Mapeadas',
      statSites: 'Sitios Arqueológicos',
      statLibrary: 'Portales de Textos Abiertos',
      quickStartTitle: 'Rutas de Investigación Curadas',
      quickStartSubtitle: 'Inicie estudios de casos comparativos enfocados con análisis textual línea por línea.',
      exploreArchiveBtn: 'Explorar Estudio de Génesis 6',
      comparePassagesBtn: 'Comparar Pasajes',
      graphNetworkBtn: 'Grafo Interactivo de Relaciones',
      rigorHeading: 'Arquitectura de Rigor Académico en Cuatro Niveles',
      rigorSubtitle: 'Filtre las relaciones según la fuerza de la evidencia para distinguir préstamos históricos verificados de arquetipos mitológicos universales.',
      featuredHeading: 'Descubrimientos Comparativos Destacados',
      featuredSubheading: 'Conexiones textuales de alto impacto que demuestran los niveles de evidencia primarios',
      modulesHeading: 'Módulos de Investigación y Exploración',
      modulesSubheading: 'Navegue directamente a cualquier sección de la base de datos de textos antiguos',
      compareAction: 'Comparar'
    },
    featured: {
      gen6Title: 'GÉNESIS 6 ↔ 1 ENOC',
      gen6Subtitle: 'De los "hijos de Dios" a la tradición de los Vigilantes en el Monte Hermón',
      gen6Desc: 'La enigmática viñeta de cuatro versículos de Génesis 6:1–4 se amplía en 1 Enoc en una narrativa apocalíptica completa que detalla 200 ángeles caídos, artes metalúrgicas y astronómicas ilícitas, y el devastador nacimiento de gigantes.',
      judeTitle: 'JUDAS ↔ 1 ENOC',
      judeSubtitle: 'Un autor del Nuevo Testamento cita explícitamente la profecía apocalíptica de Enoc',
      judeDesc: 'Judas 14–15 atribuye directamente una profecía a "Enoc, séptimo desde Adán" y cita 1 Enoc 1:9 textualmente, además de invocar a los ángeles atados en cadenas eternas bajo tinieblas (v. 6).',
      floodTitle: 'NOÉ ↔ GILGAMESH ↔ ATRAHASIS',
      floodSubtitle: 'Compare las tradiciones del Diluvio del Próximo Oriente antiguo y sus dependencias estructurales',
      floodDesc: 'Génesis 6–9, la Tablilla XI de Gilgamesh y la Tablilla III de Atrahasis comparten el calafateo con brea, proporciones dimensionales exactas en codos, reposo en montañas (Ararat / Nimush), pruebas de liberación de aves y sacrificios posteriores al diluvio.',
      rephaimTitle: 'NEFILIM ↔ ANAQUIM ↔ REFAÍTAS ↔ RPUM',
      rephaimSubtitle: 'Rastree los clanes bíblicos de gigantes hasta los cultos a los ancestros reales ugaríticos del Bronce Tardío',
      rephaimDesc: 'Og rey de Basán, "el resto de los Refaítas" que gobernaba en Astarot y Edrei, refleja directamente la tablilla ugarítica KTU 1.108 donde el divino Rapiu (rpu mlk) está entronizado en Astarot y Edrei.'
    },
    modules: {
      explore: {
        title: 'Explorar Textos Antiguos',
        desc: 'Examine la Biblia Hebrea, el Segundo Templo, Mesopotamia, Ugarit, el mundo clásico y tradiciones globales con distinción cronológica tripartita.',
        tag: 'Corpus Textual'
      },
      library: {
        title: 'Textos Públicos y Archivos Digitales',
        desc: 'Enlaces directos a ediciones gratuitas de acceso abierto: Manuscritos del Mar Muerto multiespectrales, escaneos 3D del Museo Británico, Sefaria y Perseus.',
        tag: 'Acceso Abierto'
      },
      compare: {
        title: 'Comparar Pasajes',
        desc: 'Lector paralelo en columnas para 2 a 4 textos antiguos con lenguas originales, transliteraciones y términos lingüísticos interactivos.',
        tag: 'Multi-Lector'
      },
      graph: {
        title: 'Grafo de Relaciones',
        desc: 'Red interactiva dinámica que cartografía citas, expansiones y motivos interculturales con rigor probatorio configurable.',
        tag: 'Mapa de Evidencias'
      },
      timeline: {
        title: 'Estratigrafía Cronológica',
        desc: 'Separación estricta entre Escenario del Relato vs Fecha Estimada de Composición vs Manuscrito Físico Más Antiguo.',
        tag: 'Cronología'
      },
      map: {
        title: 'Atlas del Mundo Antiguo',
        desc: 'Explore sitios de descubrimiento arqueológico, hallazgos de tablillas y centros geográficos antiguos desde Qumrán hasta Nínive y Mesoamérica.',
        tag: 'Geografía'
      },
      motifs: {
        title: 'Motivos Interculturales',
        desc: 'Descubra más de 25 motivos universales: Chaoskampf, Montañas Sagradas, Consejos Divinos, Árboles Cósmicos y Edades Heroicas.',
        tag: 'Arquetipos'
      },
      seventyBooks: {
        title: 'Los 70 Libros para los Sabios',
        desc: 'Reconstrucción exploratoria de las 70 obras apocalípticas esotéricas del Segundo Templo descritas en 2 Esdras 14.',
        tag: 'Colección Especial'
      },
      genesis6: {
        title: 'Estudio de Génesis 6 y los Vigilantes',
        desc: 'Estudio insignia que conecta Hijos de Dios, Nefilim, Anaquim, Refaítas, Og de Basán, los rpum ugaríticos, Judas y Hesíodo.',
        tag: 'Estudio Insignia'
      },
      flood: {
        title: 'Tradiciones del Gran Diluvio',
        desc: 'Análisis comparativo sistemático de los relatos del diluvio de Génesis, Gilgamesh, Atrahasis, Manu védico y el Popol Vuh maya.',
        tag: 'Matriz del Diluvio'
      },
      manuscripts: {
        title: 'Manuscritos Conservados',
        desc: 'Testigos físicos, paleografía, datación, procedencia y distinciones de derechos para los Rollos del Mar Muerto y grandes códices.',
        tag: 'Paleografía'
      },
      assistant: {
        title: 'Asistente de Investigación IA',
        desc: 'Formule preguntas comparativas complejas fundamentadas estrictamente en fuentes primarias y niveles probatorios de relaciones.',
        tag: 'Epigrafía IA'
      }
    },
    explore: {
      searchPlaceholder: 'Buscar textos, términos, pasajes bíblicos, tablillas cuneiformes...',
      filterCulture: 'Todas las Culturas',
      filterCategory: 'Todas las Categorías',
      allCultures: 'Todas las Culturas',
      allCategories: 'Todas las Categorías',
      noResults: 'No se encontraron textos antiguos con los criterios de búsqueda.',
      resetFilters: 'Restablecer Filtros',
      witnesses: 'Testigos Manuscritos Primarios',
      viewInCompare: 'Comparar Pasajes',
      openDigitalLibrary: 'Abrir en Biblioteca Digital',
      primaryPassages: 'Pasajes Clave Extraídos',
      manuscriptsTitle: 'Testigos Manuscritos y Procedencia',
      compositionDate: 'Composición Estimada',
      earliestManuscript: 'Manuscrito Más Antiguo Conservado',
      detailsBtn: 'Examinar Texto'
    },
    compare: {
      title: 'Alineación Textual Comparada',
      subtitle: 'Examen paralelo de testigos antiguos con escrituras originales, transliteración y traducciones al español, portugués e inglés.',
      selectPassagesLabel: 'Seleccione pasajes para comparar:',
      addPassage: '+ Añadir Pasaje a la Comparación',
      searchToCompare: 'Buscar pasajes para añadir...',
      originalScript: 'Texto Original',
      transliteration: 'Transliteración',
      translation: 'Traducción',
      criticalNotes: 'Aparato Crítico y Notas Filológicas',
      motifsDetected: 'Motivos Temáticos Detectados',
      noPassagesSelected: 'Seleccione dos o más pasajes arriba para ver su alineación.',
      sourceWork: 'Obra Fuente',
      license: 'Licencia',
      syncScroll: 'Sincronizar Desplazamiento',
      languageToggle: 'Idioma de Traducción'
    },
    graph: {
      title: 'Grafo Interactivo de Relaciones Textuales',
      subtitle: 'Visualización de citas directas, dependencia textual, motivos compartidos y difusión intercultural en el mundo antiguo.',
      legendEvidence: 'Nivel de Rigor de la Evidencia',
      resetView: 'Restablecer Vista',
      filterMode: 'Modo de Rigor Activo:',
      activeNodes: 'Textos Activos',
      activeConnections: 'Conexiones Mapeadas',
      clickNodeHint: 'Haga clic en cualquier nodo para ver sus conexiones literarias y comparar pasajes.',
      connectionDetails: 'Expediente de la Relación',
      evidenceLevel: 'Rigor de la Evidencia',
      citations: 'Citas Académicas'
    },
    timeline: {
      title: 'Estrato Cronológico Tripartito',
      subtitle: 'Distinción entre testigos contemporáneos primarios, transmisión literaria secundaria y reconstrucciones terciarias modernas.',
      layerPrimary: '1. Testigos Primarios (Contemporáneos)',
      layerSecondary: '2. Transmisión Secundaria (Medieval / Clásica)',
      layerTertiary: '3. Reconstrucciones Terciarias',
      bce: 'a.C.',
      ce: 'd.C.',
      filterEra: 'Filtrar por Época'
    },
    map: {
      title: 'Procedencia Arqueológica y Cartografía',
      subtitle: 'Distribución geográfica de descubrimientos de bibliotecas antiguas, archivos cuneiformes, papiros y montañas sagradas.',
      allRegions: 'Todas las Regiones',
      nearEast: 'Próximo Oriente y Levante',
      mediterranean: 'Grecorromano y Mediterráneo',
      asiaPersia: 'Persia y Asia',
      americas: 'Mesoamérica',
      excavationDossier: 'Dossier de Excavación y Procedencia',
      associatedTexts: 'Textos Antiguos Asociados',
      keyDiscoveries: 'Descubrimientos Arqueológicos Clave',
      archaeologicalSite: 'Sitio Arqueológico'
    },
    motifs: {
      title: 'Centro de Motivos Interculturales',
      subtitle: 'Rastreo de arquetipos universales, polémicas teológicas y motivos mitológicos compartidos entre civilizaciones.',
      allCategories: 'Todas las Categorías',
      biblicalParallels: 'Paralelos Bíblicos',
      crossCulturalParallels: 'Paralelos Interculturales',
      scholarlyDebate: 'Consenso Académico y Debate',
      passagesInCorpus: 'Pasajes del Corpus con este Motivo'
    },
    library: {
      title: 'Biblioteca Institucional de Acceso Abierto',
      subtitle: 'Pasarelas directas a colecciones oficiales de museos, portales de manuscritos y corpora académicos revisados por pares.',
      searchPlaceholder: 'Buscar textos públicos, museos y colecciones digitales...',
      openAccessFilter: 'Acceso Abierto Verificado',
      allInstitutions: 'Todas las Instituciones',
      openExternal: 'Abrir Repositorio Oficial',
      editionType: 'Tipo de Edición',
      keyHighlights: 'Puntos Destacados'
    },
    assistant: {
      title: 'Asistente de Investigación Académica',
      subtitle: 'Consulte el corpus comparativo antiguo sobre paralelos textuales, cognados lingüísticos y procedencia de manuscritos.',
      promptSuggestions: 'Consultas de Investigación Sugeridas',
      inputPlaceholder: 'Haga una pregunta comparativa (p. ej., "¿Qué conecta a los Refaítas bíblicos con Ugarit?")...',
      sendBtn: 'Enviar Consulta',
      thinking: 'Consultando manuscritos antiguos y aparato crítico...',
      modeBadge: 'Filtro: ',
      offlineNotice: 'Funcionando en modo de archivo fuera de línea fundamentado en el corpus.'
    },
    genesis6Study: {
      badge: 'Estudio de Caso Insignia Interactivo',
      heroTitle: 'Génesis 6:1–4, Los Vigilantes y las Tradiciones de Gigantes',
      heroSubtitle: 'Explore el origen de los "Hijos de Dios" (bene ha-elohim), Nefilim y los "gibborim de renombre", rastreando su transmisión textual directa a 1 Enoc, los Rollos del Mar Muerto y el Nuevo Testamento, junto con la arqueología semítica occidental de los Refaítas y rigurosos paradigmas comparativos.',
      tab1: '1. Anatomía Central de Génesis 6',
      tab2: '2. Expansión Enóquica y Recepción en el NT',
      tab3: '3. Refaítas, Anaquim y rpum Ugaríticos',
      tab4: '4. Rigor Comparativo Intercultural',
      crucesTitle: 'Los Cuatro Pasajes Críticos de Génesis 6:1–4',
      crucesSubtitle: 'Génesis 6:1–4 es uno de los fragmentos más enigmáticos de la literatura bíblica. Cada frase conlleva un profundo bagaje teológico y lingüístico:',
      sonsOfGodDesc: 'Literalmente "hijos de los poderes divinos". En toda la Biblia Hebrea (Job 1:6, 2:1, 38:7, Sal 82:6, Dt 32:8) y en la poesía ugarítica (bn ʾil), denota a miembros del consejo celestial, no a aristócratas humanos.',
      nephilimDesc: 'Presentes en la tierra "en aquellos días, y también después". Traducido por la Septuaginta griega como gigantes. Asociados con antiguos guerreros caídos o seres sobrehumanos aterradores.',
      gibborimDesc: '"Los valientes que desde la antigüedad fueron varones de renombre." Hace eco del epíteto heroico mesopotámico para campeones guerreros de la remota antigüedad como Gilgamesh y los héroes griegos.',
      ansheiHashemDesc: '"Varones de renombre / fama." Indica seres celebrados en la antigüedad por su fama y hazañas monumentales, cuya memoria se preservó en la leyenda oral y la épica.',
      step2Btn: 'Paso 2: Rastrear la Transmisión Enóquica',
      step2Title: 'De Génesis 6 a 1 Enoc, Jubileos, Judas y 2 Pedro',
      step2Subtitle: '¿Cómo se convirtió la breve viñeta de Génesis 6 en el paradigma cósmico dominante del judaísmo del Segundo Templo y del cristianismo primitivo?',
      enochDesc: 'Despliega Génesis 6 en 200 ángeles que descienden en el Monte Hermón guiados por Semihaza y Asael. Los gigantes devoran el fruto del trabajo humano y a la propia humanidad.',
      giantsBookDesc: 'Presenta el terror interno de los gigantes. De forma fascinante nombra a uno de los hijos gigantes Gilgamesh, incorporando directamente al rey épico mesopotámico en la tradición judía.',
      judeDesc: 'Cita explícitamente 1 Enoc 1:9 ("He aquí, vino el Señor con sus santas miríadas...") y alude a los Vigilantes aprisionados en cadenas de oscuridad.',
      peterDesc: 'Aplica el infrecuente verbo tartaroō (arrojar al Tártaro) a los ángeles pecadores precipitados antes del diluvio de Noé.',
      step3Btn: 'Paso 3: Refaítas y Arqueología Ugarítica',
      step3Title: 'Confirmación Arqueológica: Los Refaítas de Og y los rpum Ugaríticos',
      step3Para1: 'En la Biblia Hebrea, los gigantes posdiluvianos se denominan Anaquim (Números 13:33) y Refaítas (Deuteronomio 2–3). Og de Basán es llamado "el remanente de los Refaítas", reinando en Astarot y Edrei.',
      step3Para2: 'En 1961, arqueólogos franceses en Ras Shamra (Ugarit) desenterraron la tablilla KTU 1.108. La tablilla invoca al divino gobernante:',
      step3Quote: '"¡Que Rapiu, el Rey Eterno, beba... el dios que mora en Astarot, el dios que reina en Edrei!"',
      step3Para3: '¡Las dos capitales exactas del rey gigante Og en Deuteronomio 1:4 y Josué 12:4! Esto demuestra que las tradiciones bíblicas sobre los Refaítas de Basán conservaban la memoria de reyes ancestros guerreros cananeos del Bronce Tardío.',
      step4Btn: 'Paso 4: Disciplina Intercultural',
      step4Title: 'Paralelos Interculturales: Disciplina Anti-Fusión',
      warningTitle: 'Regla Académica Obligatoria: NO Presentar Figuras Extranjeras como "Nefilim"',
      warningText: 'La literatura popular frecuentemente afirma que los Titanes griegos, Heracles, Gilgamesh o los Jötnar nórdicos "eran Nefilim". El archivo rechaza estrictamente esta confusión. A menos que se demuestre transmisión textual directa, representan manifestaciones culturales independientes de un arquetipo humano compartido: edades heroicas pasadas, uniones divino-mortales y habitantes colosales primigenios.',
      greekTitansTitle: 'Semidioses y Titanes Griegos',
      greekTitansDesc: 'La Teogonía de Hesíodo relata a los Titanes arrojados al Tártaro y a los semidioses (hemitheoi) nacidos de dioses y mujeres mortales. A diferencia de las polémicas hebreas donde estas uniones traen ruina moral, el mito griego las celebra como fundadoras de ciudades.',
      norseJotnarTitle: 'Jötnar Nórdicos (Gigantes)',
      norseJotnarDesc: 'En la Völuspá, los Jötnar descienden del gigante primordial Ymir. Representan fuerzas elementales de la naturaleza y oposición cósmica, no una hibridación sexual transgresora angelical-humana.',
      apkalluTitle: 'Apkallu Mesopotámicos',
      apkalluDesc: 'Los sabios-pez antediluvianos (Apkallu) trajeron las artes de la civilización de parte de Enki. 1 Enoc invierte polémicamente esta veneración al transformar a los sabios en Vigilantes caídos cuyas artes ilícitas corrompieron al hombre.',
      compareBtn: 'Iniciar Comparación Paralela Cuádruple de Génesis 6',
      backBtn: '← Volver',
      clickTerm: 'Ver Término'
    },
    floodStudy: {
      badge: 'Matriz Comparativa del Diluvio',
      heroTitle: 'Tradiciones del Gran Diluvio en el Mundo Antiguo',
      heroSubtitle: 'Análisis comparativo paralelo de los relatos del diluvio mesopotámicos, hebreos, védicos y mesoamericanos, demostrando dependencias textuales estructurales y arquetipos universales independientes.',
      tableWork: 'Obra / Tradición',
      tableHero: 'Héroe del Diluvio',
      tableVessel: 'Especificaciones del Arca / Embarcación',
      tableMountain: 'Reposo en la Montaña',
      tableBirds: 'Reconocimiento con Aves',
      tableMotive: 'Motivo Divino del Diluvio',
      tableEvidence: 'Relación con Génesis',
      compareAction: 'Comparar en el Lector',
      sharedFeaturesTitle: 'Dependencias Estructurales: Génesis vs Gilgamesh XI vs Atrahasis III',
      sharedFeaturesDesc: 'El consenso académico reconoce una conexión histórica directa entre las tablillas cuneiformes mesopotámicas y el relato del diluvio de Génesis:',
      featureBitumen: 'Calafateo con Brea y Betún',
      featureBitumenDesc: 'Tanto Génesis 6:14 (kopher / betún) como Gilgamesh XI (kupru) especifican el sellado impermeable con brea de asfalto por dentro y por fuera.',
      featureCubits: 'Dimensiones Exactas en Codos y Diseño de Múltiples Cubiertas',
      featureCubitsDesc: 'Ambos relatos especifican proporciones en codos con compartimentos internos de varios niveles, escotillas en el techo y una sola puerta lateral sellada por la divinidad.',
      featureBirds: 'Prueba Tripartita de Liberación de Aves',
      featureBirdsDesc: 'La liberación de aves (paloma, golondrina, cuervo) para comprobar si la tierra emergía de las aguas menguadas es una secuencia literaria distintiva compartida en el Levante.',
      featureSacrifice: 'Sacrificio Posdiluviano de Olor Agradable',
      featureSacrificeDesc: 'Al desembarcar, tanto Noé (Gén 8:20) como Utnapishtim ofrecen sacrificios donde los poderes divinos huelen el "aroma grato" y prometen no volver a exterminar a la humanidad.'
    },
    common: {
      close: 'Cerrar',
      cancel: 'Cancelar',
      share: 'Compartir',
      copyLink: 'Copiar Enlace de Comparación',
      copied: '¡Copiado al Portapapeles!',
      readMore: 'Leer Más',
      source: 'Fuente',
      culture: 'Cultura',
      era: 'Época',
      category: 'Categoría',
      installApp: 'Instalar Aplicación',
      offlineReady: 'Archivo Disponible Fuera de Línea',
      language: 'Idioma'
    }
  },

  pt: {
    appName: 'CHRONOS E CÂNONE',
    appSubtitle: 'Arquivo Comparativo de Textos Antigos',
    archiveBadge: 'Arquivo Acadêmico Aberto',
    nav: {
      dashboard: 'Painel Principal',
      exploreTexts: 'Explorar Textos',
      digitalLibrary: 'Textos Públicos',
      compare: 'Comparar',
      graph: 'Grafo de Relações',
      timeline: 'Linha do Tempo',
      worldMap: 'Mapa Mundial',
      motifs: 'Motivos Temáticos',
      seventyBooks: 'Os 70 Livros',
      genesis6: 'Gênesis 6',
      floodStudy: 'Estudo do Dilúvio',
      manuscripts: 'Manuscritos',
      assistant: 'Assistente IA',
      moreStudies: 'Mais Estudos',
      selectModule: 'Selecionar Módulo de Estudo',
      modeLabel: 'Modo:'
    },
    modes: {
      scholarly: 'Modo Acadêmico',
      scholarlyDesc: 'Citações diretas, testemunhos manuscritos primários e vocabulário semítico norte-ocidental compartilhado.',
      comparative: 'Modo Comparativo',
      comparativeDesc: 'Arquétipos universais, paralelos transculturais e tropos literários do Oriente Próximo.',
      exploratory: 'Modo Exploratório',
      exploratoryDesc: 'Hipóteses históricas plausíveis, tradições de fontes perdidas e conexões apócrifas.',
      speculative: 'Modo Especulativo',
      speculativeDesc: 'Teorias controversas, hipóteses alternativas e sincretismos exploratórios.'
    },
    evidence: {
      documented: 'DOCUMENTADO',
      strong: 'FORTE',
      comparative: 'COMPARATIVO',
      possible: 'POSSÍVEL',
      speculative: 'ESPECULATIVO'
    },
    evidenceDescriptions: {
      DOCUMENTED: 'Citação direta, testemunho manuscrito ou dependência textual demonstrável.',
      STRONG: 'Relação amplamente reconhecida em publicações acadêmicas revisadas por pares.',
      COMPARATIVE: 'Paralelo estrutural, mítico ou temático significativo sem prova de transmissão direta.',
      POSSIBLE: 'Hipótese histórica ou literária plausível, sujeita a debate acadêmico.',
      SPECULATIVE: 'Hipótese que atualmente carece de evidência histórica ou manuscrita sólida.'
    },
    relationshipTypes: {
      'DIRECT QUOTATION': 'CITAÇÃO DIRETA',
      'TEXTUAL DEPENDENCE': 'DEPENDÊNCIA TEXTUAL',
      'EXPANDED TRADITION': 'TRADIÇÃO AMPLIADA',
      'LATER INTERPRETATION': 'INTERPRETAÇÃO POSTERIOR',
      'SHARED TRADITION': 'TRADIÇÃO COMPARTILHADA',
      'LINGUISTIC RELATIONSHIP': 'RELAÇÃO LINGUÍSTICA',
      'HISTORICAL CONNECTION': 'CONEXÃO HISTÓRICA',
      'PARALLEL NARRATIVE': 'NARRATIVA PARALELA',
      'SHARED MOTIF': 'MOTIVO COMPARTILHADO',
      'POSSIBLE CONNECTION': 'CONEXÃO POSSÍVEL',
      'SPECULATIVE COMPARISON': 'COMPARAÇÃO ESPECULATIVA'
    },
    dashboard: {
      heroTitle: 'Investigue Relações Textuais Antigas por Conta Própria',
      heroSubtitle: 'Descubra a dependência literária direta, as raízes semíticas norte-ocidentais compartilhadas e os arquétipos transculturais entre a Bíblia Hebraica, o Segundo Templo, os Manuscritos do Mar Morto, a Mesopotâmia, Ugarit, o mundo clássico e tradições globais—com honesta classificação probatória.',
      statTraditions: 'Tradições Antigas',
      statPassages: 'Passagens Primárias',
      statRelationships: 'Conexões Mapeadas',
      statSites: 'Sítios Arqueológicos',
      statLibrary: 'Portais de Textos Públicos',
      quickStartTitle: 'Rotas de Pesquisa Selecionadas',
      quickStartSubtitle: 'Acesse estudos de caso comparativos com análise textual lado a lado.',
      exploreArchiveBtn: 'Explorar Estudo de Gênesis 6',
      comparePassagesBtn: 'Comparar Passagens',
      graphNetworkBtn: 'Grafo Interativo de Relações',
      rigorHeading: 'Arquitetura de Rigor Acadêmico em Quatro Níveis',
      rigorSubtitle: 'Filtre as relações pelo grau de evidência para distinguir empréstimos históricos comprovados de arquétipos mitológicos universais.',
      featuredHeading: 'Descobertas Comparativas em Destaque',
      featuredSubheading: 'Conexões textuais de alto impacto demonstrando os níveis primários de evidência',
      modulesHeading: 'Módulos de Pesquisa e Exploração',
      modulesSubheading: 'Navegue diretamente para qualquer seção do banco de dados de textos antigos',
      compareAction: 'Comparar'
    },
    featured: {
      gen6Title: 'GÊNESIS 6 ↔ 1 ENOQUE',
      gen6Subtitle: 'Dos "filhos de Deus" à tradição dos Vigilantes no Monte Hermom',
      gen6Desc: 'A enigmática narrativa de quatro versículos de Gênesis 6:1–4 é expandida em 1 Enoque em uma narrativa apocalíptica completa que detalha 200 anjos caídos, artes metalúrgicas e astronômicas ilícitas, e o devastador nascimento de gigantes.',
      judeTitle: 'JUDAS ↔ 1 ENOQUE',
      judeSubtitle: 'Um autor do Novo Testamento cita explicitamente a profecia apocalíptica de Enoque',
      judeDesc: 'Judas 14–15 atribui diretamente uma profecia a "Enoque, o sétimo depois de Adão" e cita 1 Enoque 1:9 textualmente, além de invocar os anjos presos em cadeias eternas sob trevas (v. 6).',
      floodTitle: 'NOÉ ↔ GILGAMESH ↔ ATRAHASIS',
      floodSubtitle: 'Compare as tradições do Dilúvio do antigo Oriente Próximo e suas dependências estruturais',
      floodDesc: 'Gênesis 6–9, a Tábua XI de Gilgamesh e a Tábua III de Atrahasis compartilham a calafetação com betume, proporções dimensionais exatas em côvados, repouso em montanhas (Ararat / Nimush), provas de soltura de aves e sacrifícios pós-diluvianos.',
      rephaimTitle: 'NEFILINS ↔ ANAQUINS ↔ REFAINS ↔ RPUM',
      rephaimSubtitle: 'Rastreie os clãs bíblicos de gigantes até os cultos aos ancestrais reais ugaríticos da Idade do Bronze Recente',
      rephaimDesc: 'Ogue rei de Basã, "o restante dos Refains" que reinava em Astarote e Edrei, reflete diretamente a tábua ugarítica KTU 1.108 onde o divino Rapiu (rpu mlk) está entronizado em Astarote e Edrei.'
    },
    modules: {
      explore: {
        title: 'Explorar Textos Antigos',
        desc: 'Examine a Bíblia Hebraica, o Segundo Templo, a Mesopotâmia, Ugarit, o mundo clássico e obras globais com distinção cronológica tripartida.',
        tag: 'Corpus Textual'
      },
      library: {
        title: 'Textos Públicos e Arquivos Digitais',
        desc: 'Acesso direto a edições gratuitas em acesso aberto: Manuscritos do Mar Morto multiespectrais, digitalizações 3D do Museu Britânico, Sefaria e Perseus.',
        tag: 'Acesso Aberto'
      },
      compare: {
        title: 'Comparar Passagens',
        desc: 'Leitor paralelo para 2 a 4 textos antigos lado a lado com línguas originais, transliterações e termos linguísticos clicáveis.',
        tag: 'Multi-Leitor'
      },
      graph: {
        title: 'Grafo de Relações',
        desc: 'Rede interativa dinâmica mapeando citações, ampliações e motivos transculturais com rigor probatório selecionável.',
        tag: 'Mapa de Evidências'
      },
      timeline: {
        title: 'Estratigrafia Cronológica',
        desc: 'Separação rigorosa entre Cenário do Relato vs Data Estimada de Composição vs Testemunho Manuscrito Físico Mais Antigo.',
        tag: 'Cronologia'
      },
      map: {
        title: 'Atlas do Mundo Antigo',
        desc: 'Explore sítios arqueológicos, descobertas de tábuas e antigos centros geográficos de Qumran a Nínive e à Mesoamérica.',
        tag: 'Geografia'
      },
      motifs: {
        title: 'Motivos Transculturais',
        desc: 'Descubra mais de 25 motivos universais: Chaoskampf, Montanhas Sagradas, Conselhos Divinos, Árvores Cósmicas e Idades Heroicas.',
        tag: 'Arquétipos'
      },
      seventyBooks: {
        title: 'Os 70 Livros para os Sábios',
        desc: 'Reconstrução exploratória das 70 obras apocalípticas esotéricas do Segundo Templo descritas em 2 Esdras 14.',
        tag: 'Coleção Especial'
      },
      genesis6: {
        title: 'Estudo de Gênesis 6 e os Vigilantes',
        desc: 'Estudo fundamental conectando Filhos de Deus, Nefilins, Anaquins, Refains, Ogue de Basã, os rpum ugaríticos, Judas e Hesíodo.',
        tag: 'Estudo Fundamental'
      },
      flood: {
        title: 'Tradições do Grande Dilúvio',
        desc: 'Análise comparativa sistemática dos relatos do dilúvio de Gênesis, Gilgamesh, Atrahasis, Manu védico e Popol Vuh maia.',
        tag: 'Matriz do Dilúvio'
      },
      manuscripts: {
        title: 'Manuscritos Sobreviventes',
        desc: 'Testemunhos físicos, paleografia, datas, proveniência e direitos autorais para Manuscritos do Mar Morto e grandes códices.',
        tag: 'Paleografia'
      },
      assistant: {
        title: 'Assistente de Pesquisa IA',
        desc: 'Faça perguntas comparativas complexas fundamentadas estritamente em fontes primárias e níveis de evidência de relações.',
        tag: 'Epigrafia IA'
      }
    },
    explore: {
      searchPlaceholder: 'Pesquisar textos, termos, passagens bíblicas, tábuas cuneiformes...',
      filterCulture: 'Todas as Culturas',
      filterCategory: 'Todas as Categorías',
      allCultures: 'Todas as Culturas',
      allCategories: 'Todas as Categorias',
      noResults: 'Nenhum texto antigo encontrado com os critérios de filtro.',
      resetFilters: 'Redefinir Filtros',
      witnesses: 'Testemunhos Manuscritos Primários',
      viewInCompare: 'Comparar Passagens',
      openDigitalLibrary: 'Abrir na Biblioteca Digital',
      primaryPassages: 'Principais Passagens Extraídas',
      manuscriptsTitle: 'Testemunhos Manuscritos e Proveniência',
      compositionDate: 'Composição Estimada',
      earliestManuscript: 'Manuscrito Mais Antigo Sobrevivente',
      detailsBtn: 'Examinar Texto'
    },
    compare: {
      title: 'Alinhamento Textual Comparativo',
      subtitle: 'Exame paralelo de testemunhos antigos com escritas originais, transliteração e traduções para português, espanhol e inglês.',
      selectPassagesLabel: 'Selecione passagens para comparar:',
      addPassage: '+ Adicionar Passagem à Comparação',
      searchToCompare: 'Pesquisar passagens para adicionar...',
      originalScript: 'Texto Original',
      transliteration: 'Transliteração',
      translation: 'Tradução',
      criticalNotes: 'Aparato Crítico e Notas Filológicas',
      motifsDetected: 'Motivos Temáticos Detectados',
      noPassagesSelected: 'Selecione duas ou mais passagens acima para visualizar seu alinhamento.',
      sourceWork: 'Obra Fonte',
      license: 'Licença',
      syncScroll: 'Sincronizar Rolagem',
      languageToggle: 'Idioma da Tradução'
    },
    graph: {
      title: 'Grafo Interativo de Relações Textuais',
      subtitle: 'Visualização de citações diretas, dependência textual, motivos compartilhados e difusão transcultural no mundo antigo.',
      legendEvidence: 'Nível de Rigor da Evidência',
      resetView: 'Redefinir Visão',
      filterMode: 'Modo de Rigor Ativo:',
      activeNodes: 'Textos Ativos',
      activeConnections: 'Conexões Mapeadas',
      clickNodeHint: 'Clique em qualquer nó para revelar suas conexões literárias e comparar passagens.',
      connectionDetails: 'Dossiê da Relação',
      evidenceLevel: 'Rigor da Evidência',
      citations: 'Citações Acadêmicas'
    },
    timeline: {
      title: 'Estrato Cronológico Tripartido',
      subtitle: 'Distinção entre testemunhos contemporâneos primários, transmissão literária secundária e reconstruções terciárias modernas.',
      layerPrimary: '1. Testemunhos Primários (Contemporâneos)',
      layerSecondary: '2. Transmissão Secundária (Medieval / Clássica)',
      layerTertiary: '3. Reconstruções Terciárias',
      bce: 'a.C.',
      ce: 'd.C.',
      filterEra: 'Filtrar por Época'
    },
    map: {
      title: 'Proveniência Arqueológica e Cartografia',
      subtitle: 'Distribuição geográfica de descobertas de bibliotecas antigas, arquivos cuneiformes, papiros e montanhas sagradas.',
      allRegions: 'Todas as Regiões',
      nearEast: 'Oriente Próximo e Levante',
      mediterranean: 'Greco-Romano e Mediterrâneo',
      asiaPersia: 'Pérsia e Ásia',
      americas: 'Mesoamérica',
      excavationDossier: 'Dossiê de Escavação e Proveniência',
      associatedTexts: 'Textos Antigos Associados',
      keyDiscoveries: 'Principais Descobertas Arqueológicas',
      archaeologicalSite: 'Sítio Arqueológico'
    },
    motifs: {
      title: 'Centro de Motivos Transculturais',
      subtitle: 'Acompanhamento de arquétipos universais, polêmicas teológicas e motivos mitológicos compartilhados entre civilizações.',
      allCategories: 'Todas as Categorias',
      biblicalParallels: 'Paralelos Bíblicos',
      crossCulturalParallels: 'Paralelos Transculturais',
      scholarlyDebate: 'Consenso Acadêmico e Debate',
      passagesInCorpus: 'Passagens do Corpus com este Motivo'
    },
    library: {
      title: 'Biblioteca Institucional de Acesso Aberto',
      subtitle: 'Acesso direto a coleções oficiais de museus, portais de manuscritos e corpora acadêmicos revisados por pares.',
      searchPlaceholder: 'Pesquisar textos públicos, museos e coleções digitais...',
      openAccessFilter: 'Acesso Aberto Verificado',
      allInstitutions: 'Todas as Instituições',
      openExternal: 'Abrir Repositório Oficial',
      editionType: 'Tipo de Edição',
      keyHighlights: 'Destaques'
    },
    assistant: {
      title: 'Assistente de Pesquisa Acadêmica',
      subtitle: 'Consulte o corpus comparativo antigo sobre paralelos textuais, cognatos linguísticos e proveniência de manuscritos.',
      promptSuggestions: 'Consultas de Pesquisa Sugeridas',
      inputPlaceholder: 'Faça uma pergunta comparativa (ex.: "O que conecta os Refains bíblicos a Ugarit?")...',
      sendBtn: 'Enviar Pergunta',
      thinking: 'Consultando manuscritos antigos e aparato crítico...',
      modeBadge: 'Filtro: ',
      offlineNotice: 'Operando no modo de arquivo off-line fundamentado no corpus.'
    },
    genesis6Study: {
      badge: 'Estudo de Caso Fundamental Interativo',
      heroTitle: 'Gênesis 6:1–4, Os Vigilantes e as Tradições de Gigantes',
      heroSubtitle: 'Explore a origem dos "Filhos de Deus" (bene ha-elohim), Nefilins e os "gibborim de renome", rastreando sua transmissão textual direta para 1 Enoque, os Manuscritos do Mar Morto e o Novo Testamento, junto com a arqueologia semítica ocidental dos Refains e rigorosos paradigmas comparativos.',
      tab1: '1. Anatomia Central de Gênesis 6',
      tab2: '2. Expansão Enoquiana e Recepção no NT',
      tab3: '3. Refains, Anaquins e rpum Ugaríticos',
      tab4: '4. Rigor Comparativo Transcultural',
      crucesTitle: 'Os Quatro Textos Críticos de Gênesis 6:1–4',
      crucesSubtitle: 'Gênesis 6:1–4 é um dos fragmentos mais enigmáticos da literatura bíblica. Cada frase traz uma profunda carga teológica e linguística:',
      sonsOfGodDesc: 'Literalmente "filhos dos poderes divinos". Em toda a Bíblia Hebraica (Jó 1:6, 2:1, 38:7, Sl 82:6, Dt 32:8) e na poesia ugarítica (bn ʾil), designa membros do conselho celestial, não aristocratas humanos.',
      nephilimDesc: 'Presentes na terra "naqueles dias, e também depois". Traduzido pela Septuaginta grega como gigantes. Associados a antigos guerreiros caídos ou seres sobre-humanos aterrorizantes.',
      gibborimDesc: '"Os valentes que houve na antiguidade, os varões de renome." Ecoa o epíteto heroico mesopotâmico para campeões guerreiros da remota antiguidade como Gilgamesh e os guerreiros gregos.',
      ansheiHashemDesc: '"Varões de renome / fama." Indica seres celebrados na antiguidade pela sua fama e feitos monumentais, cuja memória foi preservada na lenda oral e na epopeia.',
      step2Btn: 'Passo 2: Rastrear a Transmissão Enoquiana',
      step2Title: 'De Gênesis 6 a 1 Enoque, Jubileus, Judas e 2 Pedro',
      step2Subtitle: 'Como a breve narrativa de Gênesis 6 se tornou o paradigma cósmico dominante do judaísmo do Segundo Templo e do cristianismo primitivo?',
      enochDesc: 'Desdobra Gênesis 6 em 200 anjos que descem no Monte Hermom liderados por Samyaza e Asael. Os gigantes consomem o fruto do trabalho humano e devoram a humanidade.',
      giantsBookDesc: 'Apresenta o terror interior dos gigantes. De modo fascinante nomeia um dos filhos gigantes Gilgamesh, incorporando diretamente o rei épico mesopotâmico à tradição judaica.',
      judeDesc: 'Cita explicitamente 1 Enoque 1:9 ("Eis que é vindo o Senhor com milhares de seus santos...") e alude aos Vigilantes aprisionados em cadeias de trevas.',
      peterDesc: 'Aplica o verbo grego raro tartaroō (lançar no Tártaro) aos anjos pecadores que foram precipitados antes do dilúvio de Noé.',
      step3Btn: 'Passo 3: Refains e Arqueologia Ugarítica',
      step3Title: 'Confirmação Arqueológica: Os Refains de Ogue e os rpum Ugaríticos',
      step3Para1: 'Na Bíblia Hebraica, os gigantes pós-diluvianos são chamados Anaquins (Números 13:33) e Refains (Deuteronômio 2–3). Ogue de Basã é chamado "o remanescente dos Refains", reinando em Astarote e Edrei.',
      step3Para2: 'Em 1961, arqueólogos franceses em Ras Shamra (Ugarit) desenterraram a tábua KTU 1.108. A tábua invoca o divino soberano:',
      step3Quote: '"Que Rapiu, o Rei da Eternidade, beba... o deus que habita em Astarote, o deus que reina em Edrei!"',
      step3Para3: 'As duas capitais exatas do rei gigante Ogue em Deuteronômio 1:4 e Josué 12:4! Isto comprova que as tradições bíblicas sobre os Refains de Basã preservavam memórias de reis ancestrais guerreiros cananeus da Idade do Bronze Recente.',
      step4Btn: 'Passo 4: Disciplina Transcultural',
      step4Title: 'Paralelos Transculturais: Disciplina Anti-Fusão',
      warningTitle: 'Regra Acadêmica Obrigatória: NÃO Apresentar Figuras Estrangeiras como "Nefilins"',
      warningText: 'A literatura popular frequentemente afirma que os Titãs gregos, Héracles, Gilgamesh ou os Jötnar nórdicos "eram Nefilins". O arquivo rejeita rigorosamente essa fusão. A menos que haja transmissão textual direta comprovada, representam manifestações culturais independentes de um arquétipo compartilhado: eras heroicas passadas, uniões divino-mortais e habitantes colossais primordiais.',
      greekTitansTitle: 'Semideuses e Titãs Gregos',
      greekTitansDesc: 'A Teogonia de Hesíodo relata Titãs lançados no Tártaro e semideuses (hemitheoi) nascidos de deuses e mulheres mortais. Diferentemente das polêmicas hebraicas onde essas uniões trazem ruína moral, o mito grego celebra-os como fundadores de cidades.',
      norseJotnarTitle: 'Jötnar Nórdicos (Gigantes)',
      norseJotnarDesc: 'Na Völuspá, os Jötnar descendem do gigante primordial Ymir. Representam forças elementares da natureza e oposição cósmica, não uma hibridização sexual transgressora angelical-humana.',
      apkalluTitle: 'Apkallu Mesopotâmicos',
      apkalluDesc: 'Os sábios-peixe antediluvianos (Apkallu) trouxeram as artes da civilização de parte de Enki. 1 Enoque inverte polemicamente essa veneração, transformando os sábios em Vigilantes caídos cujas artes ilícitas corromperam a humanidade.',
      compareBtn: 'Iniciar Comparação Paralela Quádrupla de Gênesis 6',
      backBtn: '← Voltar',
      clickTerm: 'Ver Termo'
    },
    floodStudy: {
      badge: 'Matriz Comparativa do Dilúvio',
      heroTitle: 'Tradições do Grande Dilúvio no Mundo Antigo',
      heroSubtitle: 'Análise comparativa lado a lado dos relatos do dilúvio mesopotâmicos, hebreus, védicos e mesoamericanos, demonstrando dependências textuais estruturais e arquétipos universais independentes.',
      tableWork: 'Obra / Tradição',
      tableHero: 'Herói do Dilúvio',
      tableVessel: 'Especificações da Arca / Embarcação',
      tableMountain: 'Pouso na Montanha',
      tableBirds: 'Reconhecimento com Aves',
      tableMotive: 'Motivo Divino do Dilúvio',
      tableEvidence: 'Relação com Gênesis',
      compareAction: 'Comparar no Leitor',
      sharedFeaturesTitle: 'Dependências Estruturais: Gênesis vs Gilgamesh XI vs Atrahasis III',
      sharedFeaturesDesc: 'O consenso acadêmico reconhece uma conexão histórica direta entre as tábuas cuneiformes mesopotâmicas e o relato do dilúvio de Gênesis:',
      featureBitumen: 'Calafetação com Betume e Piche',
      featureBitumenDesc: 'Tanto Gênesis 6:14 (kopher / betume) como Gilgamesh XI (kupru) especificam a vedação impermeável com piche de asfalto por dentro e por fora.',
      featureCubits: 'Dimensões Exatas em Côvados e Projeto com Múltiplos Conveses',
      featureCubitsDesc: 'Ambos os relatos especificam proporções em côvados com compartimentos internos em vários níveis, escotilhas no teto e uma única porta lateral selada pela divindade.',
      featureBirds: 'Teste Tripartite de Soltura de Aves',
      featureBirdsDesc: 'A soltura de aves (pomba, andorinha, corvo) para verificar se a terra havia emergido das águas é uma sequência literária distintiva compartilhada no Levante.',
      featureSacrifice: 'Sacrifício Pós-Dilúvio de Aroma Agradável',
      featureSacrificeDesc: 'Ao desembarcar, tanto Noé (Gên 8:20) como Utnapishtim oferecem sacrifícios onde as divindades sentem o "aroma suave" e prometem nunca mais destruir a humanidade.'
    },
    common: {
      close: 'Fechar',
      cancel: 'Cancelar',
      share: 'Compartilhar',
      copyLink: 'Copiar Link de Comparação',
      copied: 'Copiado para a Área de Transferência!',
      readMore: 'Ler Mais',
      source: 'Fonte',
      culture: 'Cultura',
      era: 'Época',
      category: 'Categoria',
      installApp: 'Instalar Aplicativo',
      offlineReady: 'Arquivo Pronto Off-line',
      language: 'Idioma'
    }
  }
};

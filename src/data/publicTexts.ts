import { PublicTextEdition } from '../types';

export const publicTextEditions: PublicTextEdition[] = [
  // ==========================================
  // DEAD SEA SCROLLS & SECOND TEMPLE APOCRYPHA
  // ==========================================
  {
    id: 'pub_dss_leon_levy_library',
    textId: '1_enoch',
    textTitle: '1 Enoch (Ethiopic Enoch)',
    cultureId: 'dead_sea_scrolls',
    category: 'DEAD SEA SCROLLS',
    title: '4Q201–206 Aramaic Enoch Scroll Fragments (Caves 4 & 7)',
    repositoryName: 'The Leon Levy Dead Sea Scrolls Digital Library',
    url: 'https://www.deadseascrolls.org.il/explore-the-archive/search#q=4Q201',
    editionType: 'High-Res Manuscript Facsimile',
    language: 'Aramaic (Jewish Literary Aramaic)',
    institution: 'Israel Antiquities Authority (IAA)',
    isPublicDomainOrOpenAccess: true,
    description: 'High-resolution multispectral and infrared 4K digital captures of the original Qumran Cave 4 Aramaic fragments of the Book of Enoch, allowing scholars and public researchers to examine the paleography and script of the antediluvian Watcher tradition directly.',
    highlightFeatures: [
      'Multispectral infrared photographic imaging',
      'Exact IAA inventory and fragment cataloguing',
      'Fragment plate zoom down to parchment grain level',
      'Transcription concordance with Milik edition'
    ]
  },
  {
    id: 'pub_enoch_sacred_texts',
    textId: '1_enoch',
    textTitle: '1 Enoch (Ethiopic Enoch)',
    cultureId: 'second_temple_jewish',
    category: 'PSEUDEPIGRAPHA',
    title: 'The Book of Enoch (Complete English Translation by R.H. Charles, 1917)',
    repositoryName: 'Internet Sacred Text Archive',
    url: 'https://sacred-texts.com/bib/boe/index.htm',
    editionType: 'Open-Access Translation',
    language: 'English (from Ge\'ez & Greek)',
    institution: 'Society for Promoting Christian Knowledge (SPCK) / Sacred-Texts',
    isPublicDomainOrOpenAccess: true,
    description: 'The complete, unabridged public-domain critical translation of 1 Enoch by Oxford scholar R.H. Charles (1917). Contains all five sections: Book of the Watchers (ch. 1–36), Parables of Enoch (ch. 37–71), Astronomical Book (ch. 72–82), Book of Dream Visions (ch. 83–90), and Epistle of Enoch (ch. 91–108).',
    highlightFeatures: [
      'Complete chapter-by-chapter hypertext navigation',
      'Detailed introduction on Ge\'ez and Greek manuscript witnesses',
      'Critical footnotes explaining textual variants with the Septuagint and Syncellus',
      'Freely copyable and citation-friendly public domain text'
    ]
  },
  {
    id: 'pub_enoch_early_jewish_writings',
    textId: '1_enoch',
    textTitle: '1 Enoch (Ethiopic Enoch)',
    cultureId: 'second_temple_jewish',
    category: 'PSEUDEPIGRAPHA',
    title: '1 Enoch: Critical Introductions, Parallel Translations & Scholarly Resources',
    repositoryName: 'Early Jewish Writings',
    url: 'http://www.earlyjewishwritings.com/1enoch.html',
    editionType: 'Critical Scholarly Edition',
    language: 'English / Ancient Sources',
    institution: 'Early Jewish Writings (Peter Kirby Academic Directory)',
    isPublicDomainOrOpenAccess: true,
    description: 'Comprehensive academic compendium hosting comparative translations (R.H. Charles and George H. Schodde), patristic citations (Justin Martyr, Irenaeus, Tertullian, Clement of Alexandria), and modern bibliography on Enochic Judaism.',
    highlightFeatures: [
      'Dual translation cross-referencing (Charles vs. Schodde)',
      'Quotations in patristic literature and early Christian canons',
      'Links to Qumran Aramaic discoveries and Enochic scholarship'
    ]
  },
  {
    id: 'pub_giants_dss_4q530',
    textId: 'book_of_giants',
    textTitle: 'Book of Giants',
    cultureId: 'dead_sea_scrolls',
    category: 'DEAD SEA SCROLLS',
    title: '4Q530 (4QEnGiants^b ar) & 4Q531 Manuscript Fragments',
    repositoryName: 'The Leon Levy Dead Sea Scrolls Digital Library',
    url: 'https://www.deadseascrolls.org.il/explore-the-archive/search#q=4Q530',
    editionType: 'High-Res Manuscript Facsimile',
    language: 'Aramaic',
    institution: 'Israel Antiquities Authority (IAA)',
    isPublicDomainOrOpenAccess: true,
    description: 'High-definition multispectral plates of the rare Aramaic Book of Giants fragments from Qumran Cave 4, preserving the dream-visions of \'Ohyah, Hahyah, and Mahway explicitly consulting Gilgamesh and Hobabish.',
    highlightFeatures: [
      'Direct primary evidence of Mesopotamian names in Jewish Dead Sea Scrolls',
      'Infrared clarity deciphering faded Aramaic letters',
      'Curator notes and museum inventory metadata'
    ]
  },
  {
    id: 'pub_isaiah_scroll_israel_museum',
    textId: 'isaiah',
    textTitle: 'Isaiah (Yeshayahu)',
    cultureId: 'hebrew_israelite',
    category: 'HEBREW BIBLE',
    title: 'The Great Isaiah Scroll (1QIsa^a) Interactive High-Res Reader',
    repositoryName: 'The Israel Museum, Jerusalem',
    url: 'http://dss.collections.imj.org.il/isaiah',
    editionType: 'High-Res Manuscript Facsimile',
    language: 'Biblical Hebrew',
    institution: 'The Israel Museum & The Shrine of the Book (Google Cultural Institute)',
    isPublicDomainOrOpenAccess: true,
    description: 'Ultra-high-resolution, 7-meter-long zoomable digital facsimile of the complete Great Isaiah Scroll dating to ca. 125 BCE. Users can scroll through all 54 columns, click any verse to see an English translation, and examine scribal corrections made over 2,100 years ago.',
    highlightFeatures: [
      'Gigapixel-resolution continuous scroll navigation',
      'Interactive verse-by-verse Hebrew transcription & English overlay',
      'Shows archaic orthography and marginal scribal annotations',
      'Predates the medieval Masoretic text by over 1,000 years'
    ]
  },
  {
    id: 'pub_jubilees_sacred_texts',
    textId: 'jubilees',
    textTitle: 'Book of Jubilees',
    cultureId: 'second_temple_jewish',
    category: 'PSEUDEPIGRAPHA',
    title: 'The Book of Jubilees (Little Genesis) - Translation & Critical Notes',
    repositoryName: 'Internet Sacred Text Archive',
    url: 'https://sacred-texts.com/bib/jub/index.htm',
    editionType: 'Open-Access Translation',
    language: 'English (from Ge\'ez & Hebrew)',
    institution: 'R.H. Charles / SPCK (1902)',
    isPublicDomainOrOpenAccess: true,
    description: 'Complete digital edition of the Book of Jubilees translated by R.H. Charles. Details the Angel of the Presence recounting history to Moses on Mount Sinai, the origin of the 364-day solar calendar, and the fallen angels.',
    highlightFeatures: [
      'Full 50-chapter text with chronological table of jubilees',
      'Extensive footnotes cross-referencing Genesis and Exodus verses',
      'Analysis of Hebrew original confirmed by Qumran 4Q216 discoveries'
    ]
  },
  {
    id: 'pub_genesis_apocryphon_imj',
    textId: 'genesis_apocryphon',
    textTitle: 'Genesis Apocryphon (1Q20)',
    cultureId: 'dead_sea_scrolls',
    category: 'DEAD SEA SCROLLS',
    title: 'The Genesis Apocryphon (1Q20) High-Resolution Facsimile',
    repositoryName: 'The Israel Museum, Jerusalem',
    url: 'http://dss.collections.imj.org.il/apocryphon',
    editionType: 'High-Res Manuscript Facsimile',
    language: 'Jewish Literary Aramaic',
    institution: 'The Israel Museum (Shrine of the Book)',
    isPublicDomainOrOpenAccess: true,
    description: 'Digital display of Column 22 and related columns of the Genesis Apocryphon scroll discovered in Cave 1, recounting Lamech\'s anxiety regarding the miraculous birth of Noah and the primeval patriarchs.',
    highlightFeatures: [
      'High-resolution photography of original unrolled leather scroll',
      'Verse translation and historical curation dossier',
      'Detailed documentation of 1956 decipherment'
    ]
  },
  {
    id: 'pub_2_esdras_sacred_texts',
    textId: '2_esdras_4_ezra',
    textTitle: '2 Esdras / 4 Ezra',
    cultureId: 'second_temple_jewish',
    category: 'APOCRYPHA',
    title: '2 Esdras (4 Ezra) with the Missing Fragment (Ch. 7:36–105)',
    repositoryName: 'Internet Sacred Text Archive',
    url: 'https://sacred-texts.com/bib/apo/es2000.htm',
    editionType: 'Open-Access Translation',
    language: 'English (from Latin Vulgate & Syriac)',
    institution: 'Oxford University Press / Sacred-Texts',
    isPublicDomainOrOpenAccess: true,
    description: 'Full text of the Apocalypse of Ezra, including the famous chapter 14 where Ezra miraculous dictates the 24 canonical books for the public and the 70 secret books reserved for the wise.',
    highlightFeatures: [
      'Includes the "Missing Fragment" omitted from early printed Vulgates',
      'Full account of the 94 dictated books in 2 Esdras 14',
      'Dialogue with archangel Uriel on cosmic justice and world ages'
    ]
  },
  {
    id: 'pub_testament_moses_early_jewish',
    textId: 'testament_of_moses',
    textTitle: 'Testament of Moses (Assumption of Moses)',
    cultureId: 'second_temple_jewish',
    category: 'PSEUDEPIGRAPHA',
    title: 'The Assumption / Testament of Moses (R.H. Charles Edition, 1897)',
    repositoryName: 'Early Jewish Writings',
    url: 'http://www.earlyjewishwritings.com/testmoses.html',
    editionType: 'Critical Scholarly Edition',
    language: 'English (from Milan Latin Palimpsest)',
    institution: 'Early Jewish Writings',
    isPublicDomainOrOpenAccess: true,
    description: 'The ancient pseudepigraphon behind Jude 9 (Michael contending with the devil over the body of Moses), based on the 6th-century Latin palimpsest manuscript discovered in Milan.',
    highlightFeatures: [
      'Complete English translation with historical commentary',
      'Patristic cross-references (Origen, Clement, Jude)',
      'Account of Moses ordering Joshua to store sacred books in earthen jars'
    ]
  },

  // ==========================================
  // HEBREW BIBLE & INTERLINEAR REPOSITORIES
  // ==========================================
  {
    id: 'pub_sefaria_tanakh_genesis',
    textId: 'genesis',
    textTitle: 'Genesis (Bereshit)',
    cultureId: 'hebrew_israelite',
    category: 'HEBREW BIBLE',
    title: 'Genesis on Sefaria: Hebrew Masoretic Text, Vocalization & Interlinear Commentaries',
    repositoryName: 'Sefaria: A Living Library of Jewish Texts',
    url: 'https://www.sefaria.org/Genesis.1?lang=bi',
    editionType: 'Original Script & Interlinear',
    language: 'Biblical Hebrew & English',
    institution: 'Sefaria Non-Profit Digital Library',
    isPublicDomainOrOpenAccess: true,
    description: 'Comprehensive open-access digital reader for the Book of Genesis. Displays fully vocalized Hebrew with cantillation marks alongside English translations (JPS, Robert Alter, Everett Fox), linked word-by-word with Targum Onkelos, Rashi, Ibn Ezra, and Talmudic citations.',
    highlightFeatures: [
      'Fully vocalized Hebrew with niqqud and te\'amim',
      'Side-by-side bilingual interface with instant commentary sidebar',
      'Ancient Aramaic Targum translations (Onkelos, Pseudo-Jonathan)',
      'Open API and public domain digital data'
    ]
  },
  {
    id: 'pub_step_bible_interlinear',
    textId: 'genesis',
    textTitle: 'Genesis (Bereshit)',
    cultureId: 'hebrew_israelite',
    category: 'HEBREW BIBLE',
    title: 'STEP Bible: Morphological Hebrew Interlinear & Ancient Witness Apparatus',
    repositoryName: 'STEP Bible (Tyndale House, Cambridge)',
    url: 'https://www.stepbible.org/?q=version=THOT|reference=Gen.6',
    editionType: 'Critical Scholarly Edition',
    language: 'Biblical Hebrew, Greek (LXX) & English',
    institution: 'Tyndale House, Cambridge University',
    isPublicDomainOrOpenAccess: true,
    description: 'Scholarly interlinear providing full morphological and grammatical parsing for every single Hebrew lemma in Genesis 6 and across the Old Testament, with instant lexical definitions from Brown-Driver-Briggs (BDB) and comparisons with the Greek Septuagint.',
    highlightFeatures: [
      'Word-by-word grammatical and root parsing',
      'Cross-examination with Dead Sea Scrolls and Septuagint readings',
      'Strong\'s Concordance numbering and semantic occurrences',
      'Academic tool built by Cambridge biblical researchers'
    ]
  },
  {
    id: 'pub_sefaria_deuteronomy',
    textId: 'deuteronomy',
    textTitle: 'Deuteronomy (Devarim)',
    cultureId: 'hebrew_israelite',
    category: 'HEBREW BIBLE',
    title: 'Deuteronomy on Sefaria (Sons of God / Song of Moses ch. 32)',
    repositoryName: 'Sefaria',
    url: 'https://www.sefaria.org/Deuteronomy.32.8?lang=bi',
    editionType: 'Original Script & Interlinear',
    language: 'Biblical Hebrew & English',
    institution: 'Sefaria',
    isPublicDomainOrOpenAccess: true,
    description: 'Explore Deuteronomy 32:8–9 and the territorial allocations according to the sons of God/Israel, with comprehensive medieval commentary traditions and linguistic tools.',
    highlightFeatures: [
      'Bilingual parallel column layout',
      'Morphology and classical rabbinic commentators on the "sons of God"',
      'Downloadable text files and print-ready formats'
    ]
  },

  // ==========================================
  // NEW TESTAMENT & ANCIENT GREEK CODICES
  // ==========================================
  {
    id: 'pub_codex_sinaiticus_project',
    textId: 'jude',
    textTitle: 'Epistle of Jude',
    cultureId: 'early_christian',
    category: 'NEW TESTAMENT',
    title: 'Codex Sinaiticus Online: The Oldest Substantially Complete Greek Bible',
    repositoryName: 'Codex Sinaiticus Project',
    url: 'https://www.codexsinaiticus.org/en/manuscript.aspx?book=56&chapter=1',
    editionType: 'High-Res Manuscript Facsimile',
    language: 'Ancient Greek (Uncial Script)',
    institution: 'British Library, Leipzig University Library, Saint Catherine\'s Monastery, Russian National Library',
    isPublicDomainOrOpenAccess: true,
    description: 'The monumental 4th-century uncial codex (ca. 330–360 CE) containing the earliest surviving complete copy of the New Testament, including Jude, 2 Peter, Revelation, and the Epistle of Barnabas and Shepherd of Hermas.',
    highlightFeatures: [
      'Side-by-side zoomable parchment folio photographs and transcription',
      'Toggle between Greek uncial text, Greek minuscule, and modern English translation',
      'Color-coded markers highlighting historical scribal corrections',
      'Free scholarly collaboration between four international institutions'
    ]
  },
  {
    id: 'pub_perseus_greek_nt_2peter',
    textId: '2_peter',
    textTitle: 'Second Epistle of Peter',
    cultureId: 'early_christian',
    category: 'NEW TESTAMENT',
    title: '2 Peter 2:4 on Perseus Digital Library (Greek Text with Morphological Tools)',
    repositoryName: 'Perseus Digital Library',
    url: 'https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A1999.01.0155%3Abook%3D2%20Pet.%3Achapter%3D2',
    editionType: 'Critical Scholarly Edition',
    language: 'Koine Greek (Polytonic)',
    institution: 'Tufts University Department of Classical Studies',
    isPublicDomainOrOpenAccess: true,
    description: 'Examine the rare Greek mythological verb ταρταρόω (tartaroō, "cast down to Tartarus") in 2 Peter 2:4 with Perseus\' automated morphological analyzer, Liddell-Scott-Jones (LSJ) Greek lexicon lookup, and parallel Westcott-Hort text.',
    highlightFeatures: [
      'Click any Greek word to view dictionary form and grammatical declension',
      'Full LSJ Greek-English Lexicon entry for mythological terms',
      'Word frequency and syntactic apparatus'
    ]
  },

  // ==========================================
  // MESOPOTAMIAN LITERATURE (CUNEIFORM)
  // ==========================================
  {
    id: 'pub_british_museum_gilgamesh_flood_tablet',
    textId: 'gilgamesh',
    textTitle: 'Epic of Gilgamesh',
    cultureId: 'mesopotamian',
    category: 'MESOPOTAMIAN',
    title: 'The Flood Tablet (Tablet XI, K.3375) - High-Res 3D Viewer & Curator Notes',
    repositoryName: 'The British Museum Online Collection',
    url: 'https://www.britishmuseum.org/collection/object/W_K-3375',
    editionType: 'Museum Specimen & 3D Scan',
    language: 'Akkadian Cuneiform (Standard Babylonian)',
    institution: 'The British Museum, London (Department of the Middle East)',
    isPublicDomainOrOpenAccess: true,
    description: 'The world-famous clay cuneiform tablet excavated from the Royal Library of Ashurbanipal at Nineveh in 1853, deciphered by George Smith in 1872. Contains the eyewitness story of the deluge told by Utnapishtim, the ark, the dove, swallow, and raven.',
    highlightFeatures: [
      'Interactive 3D model with rotatable lighting to examine cuneiform wedges',
      'Full physical dimensions, findspot, and excavation registration history',
      'Detailed curator commentary comparing the tablet to Genesis 6–9',
      'High-resolution downloadable photographs under Creative Commons'
    ]
  },
  {
    id: 'pub_etcsl_oxford_sumerian_literature',
    textId: 'sumerian_king_list',
    textTitle: 'Sumerian King List (W-B 444 Weld-Blundell Prism)',
    cultureId: 'mesopotamian',
    category: 'MESOPOTAMIAN',
    title: 'The Electronic Text Corpus of Sumerian Literature (ETCSL): The Sumerian King List',
    repositoryName: 'ETCSL (University of Oxford)',
    url: 'https://etcsl.orinst.ox.ac.uk/section2/tr211.htm',
    editionType: 'Critical Scholarly Edition',
    language: 'Sumerian Cuneiform & English Translation',
    institution: 'Faculty of Oriental Studies, University of Oxford',
    isPublicDomainOrOpenAccess: true,
    description: 'Oxford University\'s standard academic electronic corpus of Sumerian literature. Provides parallel cuneiform transliteration and English translation of the Weld-Blundell Prism (W-B 444) recording the antediluvian kings of Sumer and the arrival of the Deluge.',
    highlightFeatures: [
      'Interlinear Sumerian transliteration and English translation',
      'Morphological glossing and line-by-line numbering',
      'Composite text synthesizing over 16 ancient manuscript tablets',
      'Free scholarly resource for Assyriologists and comparative mythologists'
    ]
  },
  {
    id: 'pub_cdli_enuma_elish',
    textId: 'enuma_elish',
    textTitle: 'Enuma Elish (The Babylonian Epic of Creation)',
    cultureId: 'mesopotamian',
    category: 'MESOPOTAMIAN',
    title: 'Cuneiform Digital Library Initiative (CDLI): Enuma Elish Tablets',
    repositoryName: 'Cuneiform Digital Library Initiative',
    url: 'https://cdli.mpiwg-berlin.mpg.de/search?query=Enuma+Elish',
    editionType: 'Museum Specimen & 3D Scan',
    language: 'Babylonian Akkadian Cuneiform',
    institution: 'Max Planck Institute, UCLA, University of Oxford',
    isPublicDomainOrOpenAccess: true,
    description: 'CDLI global database indexing hundreds of cuneiform tablet witnesses of the Enuma Elish from the British Museum, Louvre, and Vorderasiatisches Museum Berlin, with line-art drawings and photos.',
    highlightFeatures: [
      'Photos and cuneiform hand-copies of tablets from Tablet I to VII',
      'Full line-by-line transliteration standards',
      'Museum artifact cross-reference and provenance metadata'
    ]
  },
  {
    id: 'pub_sacred_texts_gilgamesh',
    textId: 'gilgamesh',
    textTitle: 'Epic of Gilgamesh',
    cultureId: 'mesopotamian',
    category: 'MESOPOTAMIAN',
    title: 'The Epic of Gilgamesh (Complete 12 Tablets in English Translation)',
    repositoryName: 'Internet Sacred Text Archive',
    url: 'https://sacred-texts.com/ane/eog/index.htm',
    editionType: 'Open-Access Translation',
    language: 'English (R. Campbell Thompson Edition)',
    institution: 'Oxford Clarendon Press / Sacred-Texts',
    isPublicDomainOrOpenAccess: true,
    description: 'The complete twelve tablets of the Standard Babylonian Epic of Gilgamesh, detailing the hero\'s royal journey, combat with the Bull of Heaven, and the quest for immortality.',
    highlightFeatures: [
      'Full text of Tablet XI (The Great Deluge)',
      'Clean hypertext table of contents by tablet',
      'Public domain and fully citeable'
    ]
  },

  // ==========================================
  // CANAANITE / UGARITIC (RAS SHAMRA)
  // ==========================================
  {
    id: 'pub_louvre_ras_shamra_ugarit',
    textId: 'baal_cycle',
    textTitle: 'The Baal Cycle (KTU 1.1–1.6)',
    cultureId: 'canaanite_ugaritic',
    category: 'CANAANITE / UGARITIC',
    title: 'Ras Shamra Cuneiform Tablets & Stele of the Storm God Baal',
    repositoryName: 'Musée du Louvre Digital Collections',
    url: 'https://collections.louvre.fr/en/recherche?q=Ras+Shamra+Baal',
    editionType: 'Museum Specimen & 3D Scan',
    language: 'Ugaritic (Alphabetic Cuneiform)',
    institution: 'Musée du Louvre, Paris (Département des Antiquités orientales)',
    isPublicDomainOrOpenAccess: true,
    description: 'High-resolution photography, 3D measurements, and curation history of the original Late Bronze Age clay tablets of the Baal Cycle and the famous "Baal with Thunderbolt" relief stele unearthed by Claude Schaeffer at Ras Shamra.',
    highlightFeatures: [
      'High-resolution multi-angle museum photography',
      'Official excavation registration records (RS inventory numbers)',
      'Comparative iconography for Canaanite storm gods and biblical Yahwism'
    ]
  },
  {
    id: 'pub_inscriptifact_ugarit',
    textId: 'ugaritic_rephaim',
    textTitle: 'Ugaritic Rephaim Texts (KTU 1.20–1.22 & KTU 1.108)',
    cultureId: 'canaanite_ugaritic',
    category: 'CANAANITE / UGARITIC',
    title: 'InscriptiFact Digital Image Library: West Semitic Epigraphic Archives',
    repositoryName: 'InscriptiFact (USC West Semitic Research Project)',
    url: 'https://www.inscriptifact.com/',
    editionType: 'High-Res Manuscript Facsimile',
    language: 'Ugaritic & Northwest Semitic',
    institution: 'University of Southern California / West Semitic Research Project',
    isPublicDomainOrOpenAccess: true,
    description: 'World-renowned high-resolution digital photographic library specializing in ancient Northwest Semitic inscriptions, Dead Sea Scrolls, and Ugaritic tablets, capturing epigraphic details under raking light.',
    highlightFeatures: [
      'High-precision raking light photography revealing worn cuneiform signs',
      'Peer-reviewed epigraphic metadata for Semitic philology',
      'Free scholarly access for educational study'
    ]
  },

  // ==========================================
  // GRECO-ROMAN CLASSICS
  // ==========================================
  {
    id: 'pub_perseus_hesiod_theogony',
    textId: 'hesiod_theogony',
    textTitle: 'Theogony (Hesiod)',
    cultureId: 'greco_roman',
    category: 'GRECO-ROMAN',
    title: 'Hesiod\'s Theogony: Greek Text & Evelyn-White English Translation with Polytonic Tools',
    repositoryName: 'Perseus Digital Library (Tufts University)',
    url: 'https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A1999.01.0130',
    editionType: 'Critical Scholarly Edition',
    language: 'Ancient Greek & English',
    institution: 'Tufts University Department of Classical Studies',
    isPublicDomainOrOpenAccess: true,
    description: 'The standard digital critical edition of Hesiod\'s Theogony. Users can toggle between the original Epic Greek text and the Hugh G. Evelyn-White Loeb Classical Library English translation, with full vocabulary lookup for the Titanomachy and Tartarus.',
    highlightFeatures: [
      'Side-by-side Greek polytonic text and English translation',
      'Interactive Greek lexicon lookup for terms like Τιτῆνες (Titans) and Τάρταρος (Tartarus)',
      'Full line-by-line citation standards'
    ]
  },
  {
    id: 'pub_perseus_hesiod_works_and_days',
    textId: 'hesiod_works_and_days',
    textTitle: 'Works and Days (Hesiod)',
    cultureId: 'greco_roman',
    category: 'GRECO-ROMAN',
    title: 'Hesiod\'s Works and Days: The Five Ages of Humankind on Perseus',
    repositoryName: 'Perseus Digital Library',
    url: 'https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A1999.01.0132%3Aline%3D109',
    editionType: 'Critical Scholarly Edition',
    language: 'Ancient Greek & English',
    institution: 'Tufts University',
    isPublicDomainOrOpenAccess: true,
    description: 'Lines 109–201 detailing the Five Ages of Humankind (Golden, Silver, Bronze, Heroic demigods, and Iron) parallel to the biblical pre-flood and post-flood generations.',
    highlightFeatures: [
      'Full English and Greek parallel reader',
      'Syntactic parsing tools and grammatical notes',
      'Cross-references with Homer and Ovid'
    ]
  },

  // ==========================================
  // EGYPTIAN SACRED TEXTS
  // ==========================================
  {
    id: 'pub_british_museum_papyrus_of_ani',
    textId: 'book_of_the_dead',
    textTitle: 'Book of the Dead (Spells 17 & 125)',
    cultureId: 'egyptian',
    category: 'EGYPTIAN',
    title: 'The Papyrus of Ani (EA 10470) - Complete 78-Foot High-Res Scroll Viewer',
    repositoryName: 'The British Museum Online Collection',
    url: 'https://www.britishmuseum.org/collection/object/Y_EA10470-1',
    editionType: 'High-Res Manuscript Facsimile',
    language: 'Ancient Egyptian (Cursive Hieroglyphic)',
    institution: 'The British Museum, London',
    isPublicDomainOrOpenAccess: true,
    description: 'The masterwork of ancient Egyptian funerary art: the 19th Dynasty illuminated papyrus scroll of the royal scribe Ani (ca. 1250 BCE). View the Weighing of the Heart in the Hall of Ma\'at (Spell 125) and the creation from Nun (Spell 17) in vivid color.',
    highlightFeatures: [
      'Complete 24-meter scroll digitized in ultra-high resolution across 37 sheets',
      'Exquisite full-color painted vignettes of Osiris, Thoth, and Ammit',
      'Downloadable research photographs and curator dossiers'
    ]
  },

  // ==========================================
  // OLD NORSE, VEDIC & MAYA CORPUSES
  // ==========================================
  {
    id: 'pub_heimskringla_voluspa',
    textId: 'voluspa_poetic_edda',
    textTitle: 'Völuspá (Prophecy of the Seeress - Poetic Edda)',
    cultureId: 'norse_germanic',
    category: 'NORSE',
    title: 'Völuspá: Old Norse Original Text & Parallel English Translations',
    repositoryName: 'Heimskringla: A Project for Old Norse Literature',
    url: 'https://heimskringla.no/wiki/V%C3%B6lusp%C3%A1',
    editionType: 'Original Script & Interlinear',
    language: 'Old Norse & English / Scandinavian',
    institution: 'Heimskringla Open Nordic Literature Consortium',
    isPublicDomainOrOpenAccess: true,
    description: 'Comprehensive open-access repository hosting the diplomatic Old Norse text of Völuspá from the Codex Regius and Hauksbók, alongside poetic English translations by Bellows, Thorpe, and modern scholars.',
    highlightFeatures: [
      'Authentic Old Norse poetic stanza layout with stanza-by-stanza translations',
      'Covers the creation from Ymir\'s flesh and the doom of Ragnarök',
      'Manuscript variant apparatus comparing Codex Regius with Hauksbók'
    ]
  },
  {
    id: 'pub_handrit_codex_regius',
    textId: 'voluspa_poetic_edda',
    textTitle: 'Völuspá (Prophecy of the Seeress - Poetic Edda)',
    cultureId: 'norse_germanic',
    category: 'NORSE',
    title: 'Codex Regius (GKS 2365 4to) Digitized Vellum Codex Viewer',
    repositoryName: 'Handrit.is (National and University Library of Iceland)',
    url: 'https://handrit.is/manuscript/view/da/GKS04-2365',
    editionType: 'High-Res Manuscript Facsimile',
    language: 'Old Norse (Icelandic Vellum)',
    institution: 'The Árni Magnússon Institute for Icelandic Studies, Reykjavík',
    isPublicDomainOrOpenAccess: true,
    description: 'Direct high-resolution digital facsimile of the most famous medieval manuscript in Scandinavian history: the 13th-century Codex Regius containing the complete Poetic Edda.',
    highlightFeatures: [
      'High-resolution page-by-page vellum viewer',
      'Preserves original medieval insular script and rubricated capitals',
      'Free cultural heritage portal maintained by the Icelandic national archives'
    ]
  },
  {
    id: 'pub_gretil_rigveda',
    textId: 'rigveda',
    textTitle: 'Rigveda (Hymns 10.129 Nasadiya Sukta & 1.32 Indra vs Vritra)',
    cultureId: 'vedic_hindu',
    category: 'VEDIC',
    title: 'GRETIL Göttingen Electronic Rigveda Corpus (IAST & Devanagari Encoding)',
    repositoryName: 'GRETIL (Göttingen State and University Library)',
    url: 'http://gretil.sub.uni-goettingen.de/gretil/1_sanskr/1_veda/1_sam/rv_sam_u.htm',
    editionType: 'Critical Scholarly Edition',
    language: 'Vedic Sanskrit (Devanagari & Roman Transliteration)',
    institution: 'Göttingen State and University Library (SUB Göttingen, Germany)',
    isPublicDomainOrOpenAccess: true,
    description: 'The gold-standard electronic corpus of Indological texts maintained by Göttingen University. Full searchable, accented text of the 1,028 hymns of the Rigveda Samhita.',
    highlightFeatures: [
      'Accented Vedic Sanskrit text according to Shakha oral recitation',
      'Searchable Pada-patha (word-separated) and Samhita-patha forms',
      'Public domain and academic research open access'
    ]
  },
  {
    id: 'pub_sacred_texts_rigveda',
    textId: 'rigveda',
    textTitle: 'Rigveda (Hymns 10.129 Nasadiya Sukta & 1.32 Indra vs Vritra)',
    cultureId: 'vedic_hindu',
    category: 'VEDIC',
    title: 'The Rig Veda: Complete English Metrical Translation by Ralph T.H. Griffith',
    repositoryName: 'Internet Sacred Text Archive',
    url: 'https://sacred-texts.com/hin/rigveda/index.htm',
    editionType: 'Open-Access Translation',
    language: 'English (from Vedic Sanskrit)',
    institution: 'Ralph T.H. Griffith / Sacred-Texts',
    isPublicDomainOrOpenAccess: true,
    description: 'Complete 10-Mandala English translation of the Rigveda, including the Nasadiya Sukta (10.129, creation out of dark waters) and the Indra-Vritra dragon battle (1.32).',
    highlightFeatures: [
      'Complete searchable index of all 10 Mandalas and hymns',
      'Scholarly comparative notes with Greek and Avestan mythology',
      'Fully public domain and free to download'
    ]
  },
  {
    id: 'pub_popol_vuh_newberry_library',
    textId: 'popol_vuh',
    textTitle: 'Popol Vuh (Book of the Council)',
    cultureId: 'maya',
    category: 'MESOAMERICAN',
    title: 'Popol Vuh Manuscript (Ayer MS 1515) - Complete Digital Facsimile',
    repositoryName: 'The Newberry Library Digital Collections',
    url: 'https://collections.carli.illinois.edu/digital/collection/nby_amind/id/8315',
    editionType: 'High-Res Manuscript Facsimile',
    language: 'K\'iche\' Maya & Spanish (Bilingual Manuscript)',
    institution: 'The Newberry Library, Chicago (Edward E. Ayer Collection)',
    isPublicDomainOrOpenAccess: true,
    description: 'The sole surviving historical manuscript of the Popol Vuh (Ayer MS 1515), transcribed and translated in parallel columns by Dominican friar Francisco Ximénez in Santo Tomás Chichicastenango between 1701 and 1703. Digitized in full color.',
    highlightFeatures: [
      'High-resolution photographic page-by-page facsimile of all 112 pages',
      'Parallel column layout: K\'iche\' phonetic text in Latin alphabet alongside Spanish translation',
      'Foundational primary witness to the Maya creation and deluge traditions',
      'Free public digital access provided by the Newberry Library'
    ]
  },

  // ==========================================
  // LOST BOOKS REFERENCED IN CANONICAL SCRIPTURE
  // ==========================================
  {
    id: 'pub_lost_books_bible_gateway',
    textId: 'lost_book_jasher',
    textTitle: 'Book of Jasher (Ancient Lost Text referenced in Joshua & 2 Samuel)',
    cultureId: 'hebrew_israelite',
    category: 'LOST BOOKS REFERENCED',
    title: 'The Biblical Citations of the Ancient Lost Book of Jasher (Joshua 10 & 2 Samuel 1)',
    repositoryName: 'Bible Gateway & Scholarly Commentaries',
    url: 'https://www.biblegateway.com/passage/?search=Joshua+10%3A12-14%2C+2+Samuel+1%3A18-27&version=NRSVA',
    editionType: 'Open-Access Translation',
    language: 'Hebrew & English',
    institution: 'Society of Biblical Literature / National Council of Churches',
    isPublicDomainOrOpenAccess: true,
    description: 'Direct scripture comparison of the two authentic ancient biblical citations of the lost Book of Jasher (Joshua 10:12–14 and the Lament of the Bow in 2 Samuel 1:18–27), with scholarly notes cautioning against confusing this lost work with later medieval or modern forgeries.',
    highlightFeatures: [
      'Parallel text comparison across ancient translations',
      'Scholarly distinction between lost biblical Jasher and the 1625 Venice text',
      'Literary analysis of ancient Hebrew martial poetry'
    ]
  },
  {
    id: 'pub_lost_wars_lord_sefaria',
    textId: 'lost_book_wars_of_lord',
    textTitle: 'Book of the Wars of the LORD',
    cultureId: 'hebrew_israelite',
    category: 'LOST BOOKS REFERENCED',
    title: 'Numbers 21:14 Citation of "The Book of the Wars of the LORD" with Commentary',
    repositoryName: 'Sefaria',
    url: 'https://www.sefaria.org/Numbers.21.14?lang=bi',
    editionType: 'Original Script & Interlinear',
    language: 'Biblical Hebrew & English',
    institution: 'Sefaria',
    isPublicDomainOrOpenAccess: true,
    description: 'Hebrew text and multi-translation interface for Numbers 21:14 citing the lost "Sefer Milchamot Yahweh", including classical rabbinic conjectures by Rashi, Ibn Ezra, and Ramban debating the nature of this lost pre-monarchic battle anthology.',
    highlightFeatures: [
      'Original Hebrew vocalized citation formula',
      'Classical commentators discussing lost scriptural sources',
      'Word-by-word grammatical interlinear'
    ]
  },
  {
    id: 'pub_hammurabi_avalon_yale',
    textId: 'code_of_hammurabi',
    textTitle: 'The Code of Hammurabi',
    cultureId: 'mesopotamian',
    category: 'MESOPOTAMIAN',
    title: 'The Code of Hammurabi: Translation by L.W. King',
    repositoryName: 'The Avalon Project (Yale Law School)',
    url: 'https://avalon.law.yale.edu/ancient/hamframe.asp',
    editionType: 'Open-Access Translation',
    language: 'English (from Old Babylonian Akkadian)',
    institution: 'Yale Law School Lillian Goldman Law Library',
    isPublicDomainOrOpenAccess: true,
    description: 'Complete digital text of the 282 laws of the Code of Hammurabi with prologue and epilogue, hosted by Yale Law School\'s legal history archive.',
    highlightFeatures: [
      'Full legal corpus divided by subject: family, property, commerce, lex talionis',
      'Cross-referenced with biblical Hebrew legal codes (Exodus 21)',
      'Free scholarly and educational open access'
    ]
  },
  {
    id: 'pub_louvre_hammurabi_stele',
    textId: 'code_of_hammurabi',
    textTitle: 'The Code of Hammurabi',
    cultureId: 'mesopotamian',
    category: 'MESOPOTAMIAN',
    title: 'Stele of the Code of Hammurabi (Louvre Museum Sb 8)',
    repositoryName: 'Musée du Louvre Collections Online',
    url: 'https://collections.louvre.fr/en/ark:/53355/cl010174436',
    editionType: 'Museum Specimen & 3D Scan',
    language: 'Old Babylonian Cuneiform on Black Diorite',
    institution: 'Musée du Louvre, Paris (Department of Near Eastern Antiquities)',
    isPublicDomainOrOpenAccess: true,
    description: 'High-resolution photography, archaeological provenance, and epigraphic notes for the original 2.25-meter black diorite stele discovered at Susa in 1901.',
    highlightFeatures: [
      'Ultra-high-definition zoomable imagery of the cuneiform inscription',
      'Detailed iconography of King Hammurabi receiving laws from the sun god Shamash',
      'Full curatorial and archaeological cataloging dossier'
    ]
  },
  {
    id: 'pub_perseus_hesiod_works_days',
    textId: 'hesiod_works_days',
    textTitle: 'Works and Days (The Five Ages of Humanity)',
    cultureId: 'greco_roman',
    category: 'CLASSICAL',
    title: 'Hesiod, Works and Days: Greek Text & English Translation',
    repositoryName: 'Perseus Digital Library',
    url: 'https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A1999.01.0132',
    editionType: 'Critical Scholarly Edition',
    language: 'Ancient Greek & English (with Morphological Analysis)',
    institution: 'Tufts University Department of Classical Studies',
    isPublicDomainOrOpenAccess: true,
    description: 'Interactive critical edition of Hesiod\'s Works and Days. Every Greek word is clickable, linking to Liddell-Scott-Jones (LSJ) lexicon definitions, grammatical parsing, and frequency stats.',
    highlightFeatures: [
      'Interactive Greek text linked to LSJ Greek-English Lexicon',
      'Parallel English translation by Hugh G. Evelyn-White',
      'Includes the Five Ages of Humanity (lines 109–201)'
    ]
  },
  {
    id: 'pub_british_museum_papyrus_ani',
    textId: 'egyptian_book_of_dead',
    textTitle: 'The Book of the Dead (Papyrus of Ani, Spell 125)',
    cultureId: 'egyptian',
    category: 'EGYPTIAN',
    title: 'The Papyrus of Ani (EA 10470) - Complete High-Res Scroll',
    repositoryName: 'The British Museum Digital Collections',
    url: 'https://www.britishmuseum.org/collection/object/Y_EA10470-3',
    editionType: 'High-Res Manuscript Facsimile',
    language: 'Middle Egyptian Cursive Hieroglyphs',
    institution: 'The British Museum, London (Department of Egypt and Sudan)',
    isPublicDomainOrOpenAccess: true,
    description: 'Complete high-resolution digital scans of Sheet 3 of the Papyrus of Ani, showing the famous Psychostasia vignette where Ani\'s heart is weighed against the feather of Ma\'at before Osiris.',
    highlightFeatures: [
      'Gigapixel-resolution photography of the original 19th Dynasty papyrus',
      'The definitive visual depiction of ancient Near Eastern post-mortem judgment',
      'Transcription of Spell 125 (Declaration of Innocence)'
    ]
  },
  {
    id: 'pub_dss_1qs_community_rule',
    textId: 'community_rule_1qs',
    textTitle: 'The Community Rule (1QS - Serekh ha-Yahad)',
    cultureId: 'dead_sea_scrolls',
    category: 'DEAD_SEA_SCROLLS',
    title: 'The Community Rule Scroll (1QS) - Digital Dead Sea Scrolls',
    repositoryName: 'The Leon Levy Dead Sea Scrolls Digital Library',
    url: 'https://www.deadseascrolls.org.il/explore-the-archive/search#q=1QS',
    editionType: 'High-Res Manuscript Facsimile',
    language: 'Biblical Hebrew (Qumran Scribal Script)',
    institution: 'Israel Antiquities Authority & The Israel Museum, Jerusalem',
    isPublicDomainOrOpenAccess: true,
    description: 'Multispectral infrared photographic scans of the complete 11-column Community Rule scroll found in Cave 1. Includes Columns III and IV preserving the Treatise on the Two Spirits.',
    highlightFeatures: [
      'Infrared and full-spectrum color images at 1200 DPI',
      'Interactive transcription with English translation overlay',
      'Direct witness to Jewish sectarian dualism (Prince of Lights vs Angel of Darkness)'
    ]
  },
  {
    id: 'pub_sefaria_psalm_82',
    textId: 'psalm_82',
    textTitle: 'Psalm 82 (God Presiding in the Divine Assembly)',
    cultureId: 'hebrew_israelite',
    category: 'HEBREW_BIBLE',
    title: 'Psalms 82: Masoretic Hebrew Text with Interlinear & Medieval Commentaries',
    repositoryName: 'Sefaria',
    url: 'https://www.sefaria.org/Psalms.82?lang=bi',
    editionType: 'Original Script & Interlinear',
    language: 'Biblical Hebrew & English (Vocalized with Cantillation)',
    institution: 'Sefaria Open Source Library',
    isPublicDomainOrOpenAccess: true,
    description: 'Complete vocalized Hebrew text of Psalm 82 with cantillation marks, accompanied by word-by-word grammatical breakdowns and classical commentaries (Rashi, Ibn Ezra, Radak).',
    highlightFeatures: [
      'Full vocalized Hebrew text: אֱלֹהִים נִצָּב בַּעֲדַת־אֵל',
      'Medieval and modern scholarly commentaries on the "gods" in the assembly',
      'Free open-access digital reader'
    ]
  },
  {
    id: 'pub_sefaria_deuteronomy_32',
    textId: 'deuteronomy_32',
    textTitle: 'The Song of Moses (Deuteronomy 32:8–9)',
    cultureId: 'hebrew_israelite',
    category: 'HEBREW_BIBLE',
    title: 'Deuteronomy 32: Ha\'azinu (Song of Moses)',
    repositoryName: 'Sefaria',
    url: 'https://www.sefaria.org/Deuteronomy.32.8?lang=bi',
    editionType: 'Original Script & Interlinear',
    language: 'Biblical Hebrew & English',
    institution: 'Sefaria',
    isPublicDomainOrOpenAccess: true,
    description: 'Hebrew poetic text of Deuteronomy 32:8–9 with Masoretic cantillation, cross-references, and commentary notes detailing the textual divergence with Qumran 4QDeut^j ("sons of God").',
    highlightFeatures: [
      'Archaic Hebrew poetic structure displayed in traditional Torah layout',
      'Direct textual links to Septuagint and Dead Sea Scroll variants',
      'Morphological word-by-word grammar'
    ]
  },
  {
    id: 'pub_gnostic_apocryphon_of_john',
    textId: 'apocryphon_of_john',
    textTitle: 'The Apocryphon of John (Secret Revelation of John)',
    cultureId: 'second_temple_jewish',
    category: 'SECOND_TEMPLE',
    title: 'The Apocryphon of John (Nag Hammadi Codex II, 1): English Translation',
    repositoryName: 'The Gnostic Society Library',
    url: 'http://www.gnosis.org/naghamm/apocjn.html',
    editionType: 'Open-Access Translation',
    language: 'English (from Sahidic Coptic)',
    institution: 'The Gnostic Society / James M. Robinson Archive',
    isPublicDomainOrOpenAccess: true,
    description: 'Authoritative English translation of the Long Version of the Apocryphon of John from Nag Hammadi Codex II, translated by Frederik Wisse. Includes the Gnostic retelling of the Watchers and Nephilim.',
    highlightFeatures: [
      'Full text of the flagship Sethian Gnostic revelatory treatise',
      'Details Yaldabaoth and the archons creating the counterfeit spirit and mating with human women',
      'Free scholarly and open-access public edition'
    ]
  }
];

export const publicRepositoriesInfo = [
  {
    id: 'repo_dss',
    name: 'The Leon Levy Dead Sea Scrolls Digital Library',
    institution: 'Israel Antiquities Authority',
    website: 'https://www.deadseascrolls.org.il',
    description: 'Over 25,000 fragments from ~900 scrolls photographed using NASA-developed multispectral infrared cameras.',
    focusArea: 'Dead Sea Scrolls, 1 Enoch, Book of Giants, Hebrew Bible'
  },
  {
    id: 'repo_sefaria',
    name: 'Sefaria: A Living Library of Jewish Texts',
    institution: 'Sefaria Non-Profit',
    website: 'https://www.sefaria.org',
    description: 'Open-source digital repository of the entire Hebrew Bible, Targums, Talmud, Midrash, and historical commentaries with vocalized texts.',
    focusArea: 'Hebrew Bible, Aramaic Targums, Classical Commentaries'
  },
  {
    id: 'repo_british_museum',
    name: 'The British Museum Digital Collections',
    institution: 'The British Museum (London)',
    website: 'https://www.britishmuseum.org/collection',
    description: 'Over 4.5 million catalogued objects, including the Royal Library of Ashurbanipal, Gilgamesh Flood Tablet, Papyrus of Ani, and Cyrus Cylinder with 3D photogrammetry.',
    focusArea: 'Mesopotamian Cuneiform, Egyptian Papyri, Biblical Archaeology'
  },
  {
    id: 'repo_perseus',
    name: 'Perseus Digital Library',
    institution: 'Tufts University',
    website: 'https://www.perseus.tufts.edu',
    description: 'Flagship open digital humanities library providing Greek and Latin texts linked to real-time morphological analyzers and academic lexicons.',
    focusArea: 'Classical Greek, Latin, Hesiod, Homer, Ovid, New Testament'
  },
  {
    id: 'repo_etcsl',
    name: 'Electronic Text Corpus of Sumerian Literature (ETCSL)',
    institution: 'University of Oxford',
    website: 'https://etcsl.orinst.ox.ac.uk',
    description: 'Over 400 Sumerian literary texts in standardized cuneiform transliteration with English translations and morphological glosses.',
    focusArea: 'Sumerian Literature, Sumerian King List, Creation & Flood'
  },
  {
    id: 'repo_sacred_texts',
    name: 'Internet Sacred Text Archive',
    institution: 'Sacred-Texts Consortium',
    website: 'https://sacred-texts.com',
    description: 'The largest freely accessible online archive of public domain books on comparative religion, mythology, folklore, and ancient scripture.',
    focusArea: 'Apocrypha, Pseudepigrapha, Rigveda, Poetic Edda, Gilgamesh'
  },
  {
    id: 'repo_codex_sinaiticus',
    name: 'Codex Sinaiticus Project',
    institution: 'British Library, Leipzig, St. Catherine\'s, Russian National Library',
    website: 'https://www.codexsinaiticus.org',
    description: 'The entire 4th-century Greek Bible digitized in high resolution with interactive transcription and verse-level cross-examination.',
    focusArea: 'Early Christian Manuscripts, Greek New Testament, Septuagint'
  },
  {
    id: 'repo_newberry',
    name: 'The Newberry Library Edward E. Ayer Collection',
    institution: 'The Newberry Library (Chicago)',
    website: 'https://www.newberry.org',
    description: 'Houses Ayer MS 1515, the historic bilingual K\'iche\' and Spanish manuscript of the Popol Vuh transcribed ca. 1701 by Father Francisco Ximénez.',
    focusArea: 'Mesoamerican Manuscripts, Maya Popol Vuh'
  }
];

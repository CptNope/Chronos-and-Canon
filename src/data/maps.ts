export interface MapLocation {
  id: string;
  name: string;
  ancientRegion: string;
  modernCountry: string;
  coordinates: { lat: number; lng: number };
  cultureId: string;
  importance: 'Primary Excavation' | 'Mythological Axis' | 'Ancient Capital' | 'Archival Discovery';
  description: string;
  associatedTexts: string[];
  keyDiscoveries: string[];
  regionGroup: 'NEAR_EAST' | 'MEDITERRANEAN' | 'MESOAMERICA' | 'ASIA_PERSIA' | 'NORTH_EUROPE';
}

export const mapLocations: MapLocation[] = [
  // --- LEVANT & SECOND TEMPLE JUDAISM ---
  {
    id: 'qumran_caves',
    name: 'Khirbet Qumran & Caves 1–11',
    ancientRegion: 'Judean Desert / Dead Sea Shore',
    modernCountry: 'West Bank / Dead Sea',
    coordinates: { lat: 31.7414, lng: 35.4597 },
    cultureId: 'dead_sea_scrolls',
    regionGroup: 'NEAR_EAST',
    importance: 'Primary Excavation',
    description: 'Site of the greatest manuscript discovery of the 20th century: over 25,000 fragments from ~900 scrolls preserved in sealed pottery jars in limestone cliff caves, dating from ca. 250 BCE to 68 CE. Unveiled the ancient sectarian community, Aramaic Vorlage of 1 Enoch, Book of Giants, and the earliest Hebrew biblical manuscripts.',
    associatedTexts: ['1_enoch', 'book_of_giants', 'jubilees', 'genesis_apocryphon', 'melchizedek_11q13', 'isaiah', 'deuteronomy', 'temple_scroll'],
    keyDiscoveries: ['Great Isaiah Scroll (1QIsa^a)', 'Aramaic 1 Enoch fragments (4Q201–206)', 'Genesis Apocryphon (1Q20)', 'Book of Giants (4Q530–532)', 'Community Rule (1QS)']
  },
  {
    id: 'jerusalem_temple_mount',
    name: 'Jerusalem (Mount Zion, Ophel & City of David)',
    ancientRegion: 'Judea / Yehud',
    modernCountry: 'Israel / Palestinian Territories',
    coordinates: { lat: 31.7781, lng: 35.2360 },
    cultureId: 'hebrew_israelite',
    regionGroup: 'NEAR_EAST',
    importance: 'Ancient Capital',
    description: 'The political and theological capital of ancient Judah, Solomon\'s Temple, and the Second Temple. The locus of canonical compilation, prophetic oracles, and the scriptural synthesis described in 2 Esdras 14 where Ezra dictates the 94 books.',
    associatedTexts: ['genesis', 'psalms', 'isaiah', 'ezekiel', '2_esdras_4_ezra'],
    keyDiscoveries: ['Ketef Hinnom silver amulets containing Num 6:24–26 priestly blessing (late 7th c. BCE)', 'City of David bullae and seals of royal scribes', 'Broad Wall of Hezekiah', 'Siloam Tunnel Inscription']
  },
  {
    id: 'mount_hermon',
    name: 'Mount Hermon (Jebel esh-Sheikh)',
    ancientRegion: 'Anti-Lebanon Range / Bashan Border',
    modernCountry: 'Lebanon / Syria / Israel border',
    coordinates: { lat: 33.4167, lng: 35.8500 },
    cultureId: 'second_temple_jewish',
    regionGroup: 'NEAR_EAST',
    importance: 'Mythological Axis',
    description: 'The highest mountain in the Levant (2,814 m). In 1 Enoch 6:6, it is the mythic summit upon which the 200 Watchers descended to earth and bound themselves with mutual oaths (ḥerem), giving the mountain its name.',
    associatedTexts: ['1_enoch', 'psalms'],
    keyDiscoveries: ['Roman temple of Qasr Antar on the highest summit', 'Sacred boundary inscriptions in Greek warning uninitiated', 'Archaic high-place sanctuaries']
  },
  {
    id: 'bashan_ashtaroth',
    name: 'Ashtaroth & Edrei (Land of Og)',
    ancientRegion: 'Bashan / Yarmuk Basin',
    modernCountry: 'Southern Syria / Northern Jordan',
    coordinates: { lat: 32.7447, lng: 36.0353 },
    cultureId: 'hebrew_israelite',
    regionGroup: 'NEAR_EAST',
    importance: 'Ancient Capital',
    description: 'Twin royal capitals attributed to Og, the colossal king of Bashan and remnant of the Rephaim in Joshua 12:4 and Deut 3:11. Corroborated in Ugaritic text KTU 1.108 as the throne seats of Rapiu the divine ancestral king.',
    associatedTexts: ['deuteronomy', 'joshua', 'ugaritic_rephaim'],
    keyDiscoveries: ['Tell Ashtara Bronze Age fortified mound', 'Extensive megalithic basalt dolmen fields of the Golan and Bashan', 'Rujm el-Hiri concentric stone circle']
  },
  {
    id: 'mount_sinai',
    name: 'Mount Sinai / Horeb & Serabit el-Khadim',
    ancientRegion: 'Sinai Peninsula',
    modernCountry: 'South Sinai, Egypt',
    coordinates: { lat: 28.5394, lng: 33.9753 },
    cultureId: 'hebrew_israelite',
    regionGroup: 'NEAR_EAST',
    importance: 'Mythological Axis',
    description: 'The sacred mountain of the covenant theophany where Moses received the Torah, and the revelatory frame for the Book of Jubilees dictated by the Angel of the Presence.',
    associatedTexts: ['genesis', 'exodus', 'jubilees'],
    keyDiscoveries: ['Saint Catherine\'s Monastery (discoveries of Codex Sinaiticus and early palimpsests)', 'Proto-Sinaitic early alphabetic turquoise-mine inscriptions at Serabit el-Khadim (ca. 18th c. BCE)']
  },

  // --- CANAANITE / UGARITIC & PHOENICIAN ---
  {
    id: 'ras_shamra_ugarit',
    name: 'Ras Shamra (Ancient Ugarit)',
    ancientRegion: 'Northern Canaanite Coast',
    modernCountry: 'Latakia, Syria',
    coordinates: { lat: 35.6022, lng: 35.7853 },
    cultureId: 'canaanite_ugaritic',
    regionGroup: 'NEAR_EAST',
    importance: 'Primary Excavation',
    description: 'Late Bronze Age commercial and scribal capital excavated by Claude Schaeffer from 1929, revealing a 30-letter cuneiform alphabet and mythological epics that revolutionized understanding of the Hebrew Bible and Canaanite religion.',
    associatedTexts: ['baal_cycle', 'ugaritic_rephaim'],
    keyDiscoveries: ['Baal Cycle tablets KTU 1.1–1.6', 'Rephaim banquet texts KTU 1.20–22', 'Rapiu tablet KTU 1.108', 'Royal palace archives and scribal school']
  },
  {
    id: 'byblos_gebal',
    name: 'Byblos (Gebal / Gubla)',
    ancientRegion: 'Phoenician Coast',
    modernCountry: 'Jbeil, Lebanon',
    coordinates: { lat: 34.1200, lng: 35.6480 },
    cultureId: 'canaanite_ugaritic',
    regionGroup: 'NEAR_EAST',
    importance: 'Archival Discovery',
    description: 'One of the oldest continuously inhabited cities in the world. Principal exporter of cedar and Egyptian papyrus (giving Greek the word biblos/bible). Center of the archaic Adonis (Tammuz) mystery cult and Ahiram sarcophagus.',
    associatedTexts: ['baal_cycle', 'ezekiel'],
    keyDiscoveries: ['Ahiram sarcophagus with the earliest fully developed Phoenician alphabet inscription (ca. 1000 BCE)', 'Temple of the Obelisks', 'Byblos syllabary bronze tablets']
  },

  // --- MESOPOTAMIA (SUMER, BABYLON, ASSYRIA) ---
  {
    id: 'nineveh_ashurbanipal',
    name: 'Nineveh (Kouyunjik) & Royal Library',
    ancientRegion: 'Upper Mesopotamia (Assyria)',
    modernCountry: 'Mosul, Iraq',
    coordinates: { lat: 36.3589, lng: 43.1528 },
    cultureId: 'mesopotamian',
    regionGroup: 'NEAR_EAST',
    importance: 'Primary Excavation',
    description: 'Capital of the Neo-Assyrian Empire where King Ashurbanipal (668–627 BCE) amassed tens of thousands of clay cuneiform tablets containing the literature, science, and religious epics of ancient Sumer and Babylonia.',
    associatedTexts: ['gilgamesh', 'enuma_elish', 'atrahasis'],
    keyDiscoveries: ['Flood Tablet XI of Epic of Gilgamesh deciphered by George Smith in 1872', 'Creation epic Enuma Elish', 'Myth of Adapa', 'Vassal treaties of Esarhaddon']
  },
  {
    id: 'sippar_babylon',
    name: 'Babylon (Esagila) & Sippar',
    ancientRegion: 'Babylonia (Lower Mesopotamia)',
    modernCountry: 'Babil Governorate, Iraq',
    coordinates: { lat: 32.5363, lng: 44.4208 },
    cultureId: 'mesopotamian',
    regionGroup: 'NEAR_EAST',
    importance: 'Archival Discovery',
    description: 'Heart of Babylonian civilization, the temple of Marduk (Esagila), and the ziggurat Etemenanki (inspiration for the Tower of Babel). Sippar was the traditional cult center of the sun god Shamash where Ziusudra buried pre-flood tablets.',
    associatedTexts: ['atrahasis', 'gilgamesh', 'enuma_elish', 'genesis'],
    keyDiscoveries: ['Atrahasis Old Babylonian tablets from Sippar', 'Enuma Elish ritual recitations', 'Babylonian Map of the World (Imago Mundi, BM 92687)', 'Ishtar Gate reliefs']
  },
  {
    id: 'ur_chaldees',
    name: 'Ur (Tell el-Mukayyar)',
    ancientRegion: 'Sumer (Southern Mesopotamia)',
    modernCountry: 'Dhi Qar Governorate, Iraq',
    coordinates: { lat: 30.9622, lng: 46.1031 },
    cultureId: 'mesopotamian',
    regionGroup: 'NEAR_EAST',
    importance: 'Primary Excavation',
    description: 'Ancient Sumerian city-state on the Euphrates and biblical home of Abraham (Gen 11:28). Excavated by Sir Leonard Woolley, uncovering the Great Ziggurat of Ur and the Royal Tombs yielding primeval Sumerian art and flood strata.',
    associatedTexts: ['genesis', 'gilgamesh'],
    keyDiscoveries: ['Royal Cemetery of Ur (Standard of Ur, Queen Puabi\'s headdress)', 'Great Ziggurat of Ur-Nammu dedicated to moon god Nanna', 'Early Dynastic cuneiform flood deposits']
  },
  {
    id: 'uruk_warka',
    name: 'Uruk (Erech / Warka)',
    ancientRegion: 'Sumer (Lower Euphrates)',
    modernCountry: 'Muthanna Governorate, Iraq',
    coordinates: { lat: 31.3222, lng: 45.2819 },
    cultureId: 'mesopotamian',
    regionGroup: 'NEAR_EAST',
    importance: 'Primary Excavation',
    description: 'The legendary kingdom of Gilgamesh and the birthplace of writing around 3400 BCE. The Eanna precinct of goddess Inanna/Ishtar preserved the transition from pictographs to proto-cuneiform administration.',
    associatedTexts: ['gilgamesh', 'genesis'],
    keyDiscoveries: ['Proto-cuneiform clay tablets dating to Uruk IV/III period', 'Warka Vase depicting cosmic hierarchy of offerings', 'Monumental limestone and cone-mosaic temples']
  },

  // --- EGYPT ---
  {
    id: 'thebes_egypt',
    name: 'Thebes (Karnak, Luxor & Valley of the Kings)',
    ancientRegion: 'Upper Egypt',
    modernCountry: 'Luxor, Egypt',
    coordinates: { lat: 25.7188, lng: 32.6573 },
    cultureId: 'egyptian',
    regionGroup: 'NEAR_EAST',
    importance: 'Primary Excavation',
    description: 'Center of New Kingdom religious life and the cult of Amun-Ra. Preserved monumental tombs inscribed with the Book of the Dead, Book of the Heavenly Cow (Destruction of Mankind), and Amduat.',
    associatedTexts: ['genesis', 'exodus'],
    keyDiscoveries: ['Tomb of Tutankhamun with Book of the Heavenly Cow shrine', 'Papyrus of Ani (Book of the Dead Spell 125)', 'Merneptah Stele (first historical mention of "Israel", ca. 1208 BCE)']
  },
  {
    id: 'memphis_saqqara',
    name: 'Memphis & Saqqara Necropolis',
    ancientRegion: 'Lower Egypt (Nile Apex)',
    modernCountry: 'Giza Governorate, Egypt',
    coordinates: { lat: 29.8713, lng: 31.2165 },
    cultureId: 'egyptian',
    regionGroup: 'NEAR_EAST',
    importance: 'Ancient Capital',
    description: 'Archaic capital of unified Egypt and sanctuary of Ptah, creator god of the Memphite Theology (creation by divine thought and speech, parallel to Gen 1 and the Logos). Saqqara preserves the earliest religious corpus: the Old Kingdom Pyramid Texts of Unas.',
    associatedTexts: ['genesis'],
    keyDiscoveries: ['Pyramid Texts of Pharaoh Unas (ca. 2350 BCE)', 'Shabaka Stone preserving the Memphite Theology', 'Step Pyramid of Djoser by Imhotep']
  },

  // --- GRECO-ROMAN & MEDITERRANEAN ---
  {
    id: 'mount_parnassus',
    name: 'Mount Parnassus & Sanctuary of Delphi',
    ancientRegion: 'Phocis, Central Greece',
    modernCountry: 'Greece',
    coordinates: { lat: 38.5322, lng: 22.6178 },
    cultureId: 'greco_roman',
    regionGroup: 'MEDITERRANEAN',
    importance: 'Mythological Axis',
    description: 'The sacred mountain above the Delphic Oracle (omphalos / navel of the world). In Greek deluge mythology, it is the peak where the chest of Deucalion and Pyrrha landed after Zeus\' nine-day deluge destroyed the corrupt Bronze Age generation.',
    associatedTexts: ['hesiod_theogony', 'hesiod_works_and_days'],
    keyDiscoveries: ['Sanctuary and Temple of Apollo at Delphi', 'Castalian Spring of purification', 'Inscribed victory hymns and omphalos stone']
  },
  {
    id: 'athens_eleusis',
    name: 'Athens (Acropolis) & Eleusis',
    ancientRegion: 'Attica, Greece',
    modernCountry: 'Attica, Greece',
    coordinates: { lat: 37.9715, lng: 23.7257 },
    cultureId: 'greco_roman',
    regionGroup: 'MEDITERRANEAN',
    importance: 'Ancient Capital',
    description: 'Intellectual heart of classical Greece, home of the Academy, the Lyceum, and the Telesterion at Eleusis where the initiates experienced secret vision-rites of Persephone and Demeter promising victory over death.',
    associatedTexts: ['hesiod_theogony'],
    keyDiscoveries: ['The Parthenon and Erechtheion on the Acropolis', 'Telesterion hall of the Eleusinian Mysteries', 'Aristotle\'s Lyceum excavated in 1996']
  },
  {
    id: 'rome_capitolium',
    name: 'Rome (Palatine, Capitoline & Catacombs)',
    ancientRegion: 'Latium, Italian Peninsula',
    modernCountry: 'Rome, Italy',
    coordinates: { lat: 41.8902, lng: 12.4922 },
    cultureId: 'greco_roman',
    regionGroup: 'MEDITERRANEAN',
    importance: 'Ancient Capital',
    description: 'Imperial capital where classical mythology was codified in Latin literature (Ovid\'s Metamorphoses, Virgil\'s Aeneid) and where early Christian apostolic letters (2 Peter, Romans) were written and received.',
    associatedTexts: ['2_peter', 'jude', 'revelation'],
    keyDiscoveries: ['Augustan libraries on the Palatine', 'Early Christian catacomb frescoes and Greek funerary inscriptions', 'Arch of Titus depicting looted Jerusalem Temple Menorah']
  },
  {
    id: 'knossos_crete',
    name: 'Knossos Palace (Labyrinth of Minos)',
    ancientRegion: 'Crete, Aegean Sea',
    modernCountry: 'Crete, Greece',
    coordinates: { lat: 35.2980, lng: 25.1631 },
    cultureId: 'greco_roman',
    regionGroup: 'MEDITERRANEAN',
    importance: 'Primary Excavation',
    description: 'Epicenter of Bronze Age Minoan civilization excavated by Sir Arthur Evans. Center of the primeval bull-leaping cult and the myth of the labyrinth, Minotaur, and Daedalus, bridging Egyptian and Aegean religious motifs.',
    associatedTexts: ['hesiod_theogony'],
    keyDiscoveries: ['Linear B clay tablets deciphered by Michael Ventris in 1952 revealing archaic Mycenaean Greek', 'Toreador Fresco', 'Throne Room of Minos']
  },

  // --- PERSIA / IRANIAN PLATEAU ---
  {
    id: 'persepolis_iran',
    name: 'Persepolis & Pasargadae',
    ancientRegion: 'Parsa, Iranian Plateau',
    modernCountry: 'Fars Province, Iran',
    coordinates: { lat: 29.9357, lng: 52.8914 },
    cultureId: 'persian_zoroastrian',
    regionGroup: 'ASIA_PERSIA',
    importance: 'Ancient Capital',
    description: 'Ceremonial capital of the Achaemenid Persian Empire under Darius the Great and Xerxes. Preserves Old Persian cuneiform inscriptions and the religious cosmos of Ahura Mazda, Amesha Spentas, and Yima\'s golden age.',
    associatedTexts: ['vendidad_avesta'],
    keyDiscoveries: ['Persepolis Fortification Archive tablets (thousands of Elamite administrative records)', 'Tomb of Cyrus the Great at Pasargadae', 'Tomb of Darius I at Naqsh-e Rustam with trilingual royal reliefs']
  },
  {
    id: 'susa_shushan',
    name: 'Susa (Shushan the Citadel)',
    ancientRegion: 'Elam / Susiana Plain',
    modernCountry: 'Khuzestan Province, Iran',
    coordinates: { lat: 32.1892, lng: 48.2436 },
    cultureId: 'persian_zoroastrian',
    regionGroup: 'ASIA_PERSIA',
    importance: 'Primary Excavation',
    description: 'One of the oldest cities in the Near East and setting for the biblical books of Daniel, Esther, and Nehemiah. French excavations uncovered the magnificent diorite Stele of the Code of Hammurabi, carried off as war booty from Babylon.',
    associatedTexts: ['daniel', 'vendidad_avesta'],
    keyDiscoveries: ['Stele of the Code of Hammurabi (now in the Louvre)', 'Apodana palace reliefs of the Persian Immortals in glazed brick', 'Archaic proto-Elamite tablets']
  },

  // --- VEDIC / INDIA ---
  {
    id: 'haridwar_sarasvati',
    name: 'Upper Gangetic & Sarasvati Basin',
    ancientRegion: 'Aryavarta / Indus-Sarasvati Plains',
    modernCountry: 'Uttarakhand / Haryana, India',
    coordinates: { lat: 29.9457, lng: 78.1642 },
    cultureId: 'vedic_hindu',
    regionGroup: 'ASIA_PERSIA',
    importance: 'Mythological Axis',
    description: 'Sacred geography of the Vedic rishis (seers) who composed the Rigveda hymns (Nasadiya Sukta creation hymn, Indra vs Vritra dragon conflict) and the Shatapatha Brahmana account of King Manu and the horned fish Matsya.',
    associatedTexts: ['shatapatha_brahmana'],
    keyDiscoveries: ['Painted Grey Ware (PGW) Vedic archaeological horizon', 'Harappan hydrological settlements along the paleochannel of the Ghaggar-Hakra (Sarasvati)', 'Traditional Vedic oral gurukula schools']
  },
  {
    id: 'kurukshetra_plain',
    name: 'Kurukshetra (Dharmakshetra)',
    ancientRegion: 'Kuru Kingdom, Northern India',
    modernCountry: 'Haryana, India',
    coordinates: { lat: 29.9695, lng: 76.8783 },
    cultureId: 'vedic_hindu',
    regionGroup: 'ASIA_PERSIA',
    importance: 'Mythological Axis',
    description: 'Sacred plain of the Great Bharata War narrated in the epic Mahabharata, where Krishna revealed the Bhagavad Gita to Arjuna. Symbol of the cosmic transition from Dvapara Yuga to the dark Kali Yuga.',
    associatedTexts: ['shatapatha_brahmana'],
    keyDiscoveries: ['Brahma Sarovar ancient sacred water reservoir', 'Excavations at Jyotisar and Harsh Ka Tila revealing Iron Age settlement continuity']
  },

  // --- NORSE / NORTHERN EUROPE ---
  {
    id: 'thingvellir_iceland',
    name: 'Thingvellir & Skálholt',
    ancientRegion: 'Southwestern Iceland',
    modernCountry: 'Iceland',
    coordinates: { lat: 64.2559, lng: -21.1297 },
    cultureId: 'norse_germanic',
    regionGroup: 'NORTH_EUROPE',
    importance: 'Archival Discovery',
    description: 'Site of the ancient Althing open-air parliament founded in 930 CE and historical episcopal see where the precious parchment codex containing the Poetic Edda (Codex Regius) was preserved from oblivion.',
    associatedTexts: ['voluspa_poetic_edda'],
    keyDiscoveries: ['Codex Regius (GKS 2365 4to) containing Völuspá and Hávamál', 'Lögberg (Law Rock) assembly mound', 'Hauksbók manuscript recensions']
  },
  {
    id: 'gamla_uppsala',
    name: 'Gamla Uppsala (Old Uppsala)',
    ancientRegion: 'Uppland, Sweden',
    modernCountry: 'Sweden',
    coordinates: { lat: 59.8986, lng: 17.6322 },
    cultureId: 'norse_germanic',
    regionGroup: 'NORTH_EUROPE',
    importance: 'Mythological Axis',
    description: 'Religious and political capital of pagan Sweden. Described by Adam of Bremen as housing a golden temple dedicated to Thor, Odin, and Freyr, with a sacred evergreen tree and sacrificial grove mirroring the cosmic tree Yggdrasil.',
    associatedTexts: ['voluspa_poetic_edda'],
    keyDiscoveries: ['Royal Mounds (Kungshögarna) of the semi-legendary Yngling dynasty', 'Viking Age posthole rows of large royal ceremonial longhalls', 'Pagan boat burials at nearby Valsgärde']
  },

  // --- MESOAMERICA ---
  {
    id: 'chichicastenango_quiche',
    name: 'Santo Tomás Chichicastenango',
    ancientRegion: 'Guatemala Western Highlands',
    modernCountry: 'Guatemala',
    coordinates: { lat: 14.9431, lng: -91.1111 },
    cultureId: 'maya',
    regionGroup: 'MESOAMERICA',
    importance: 'Archival Discovery',
    description: 'Highland Maya town where indigenous K\'iche\' nobility secretly guarded the sacred manuscript of the Popol Vuh (Book of the Council) until sharing it with Dominican friar Francisco Ximénez around 1701.',
    associatedTexts: ['popol_vuh'],
    keyDiscoveries: ['Father Ximénez Popol Vuh manuscript (Ayer MS 1515, Newberry Library)', 'Pre-Columbian K\'iche\' council traditions and ongoing Maya highland calendar-keeper rituals']
  },
  {
    id: 'palenque_chiapas',
    name: 'Palenque (Lakamha\')',
    ancientRegion: 'Lowland Maya Rain Forest',
    modernCountry: 'Chiapas, Mexico',
    coordinates: { lat: 17.4838, lng: -92.0464 },
    cultureId: 'maya',
    regionGroup: 'MESOAMERICA',
    importance: 'Primary Excavation',
    description: 'Classic Maya ceremonial center renowned for sophisticated architecture and hieroglyphic inscriptions. The Temple of the Inscriptions houses the crypt of K\'inich Janaab\' Pakal with cosmological reliefs depicting the World Tree (Ceiba) and cosmic death and rebirth.',
    associatedTexts: ['popol_vuh'],
    keyDiscoveries: ['Tomb of Pakal the Great with carved jade sarcophagus lid', 'Temple of the Cross Complex recording the primordial Maya creation date 13.0.0.0.0 (August 11, 3114 BCE)']
  },
  {
    id: 'tenochtitlan_aztec',
    name: 'Tenochtitlan (Templo Mayor)',
    ancientRegion: 'Valley of Mexico / Lake Texcoco',
    modernCountry: 'Mexico City, Mexico',
    coordinates: { lat: 19.4349, lng: -99.1313 },
    cultureId: 'aztec',
    regionGroup: 'MESOAMERICA',
    importance: 'Ancient Capital',
    description: 'Capital of the Aztec / Mexica Empire, housing the twin-pyramid Templo Mayor dedicated to Huitzilopochtli and Tlaloc. Preserved the cosmological doctrine of the Five Suns (Leyenda de los Soles), in which the fourth cosmic sun was terminated by a universal deluge (Nahui Atl).',
    associatedTexts: [],
    keyDiscoveries: ['Aztec Sun Stone (Piedra del Sol)', 'Monolith of Coyolxauhqui', 'Templo Mayor offerings and stratigraphic reconstruction phases']
  },
  {
    id: 'teotihuacan_city',
    name: 'Teotihuacan (City of the Gods)',
    ancientRegion: 'Valley of Teotihuacan',
    modernCountry: 'State of Mexico, Mexico',
    coordinates: { lat: 19.6925, lng: -98.8437 },
    cultureId: 'aztec',
    regionGroup: 'MESOAMERICA',
    importance: 'Mythological Axis',
    description: 'The colossal pre-Aztec metropolis along the Avenue of the Dead, centered on the Pyramid of the Sun, Pyramid of the Moon, and Temple of the Feathered Serpent (Quetzalcoatl). Revered by the later Aztecs as the primordial mythological locus where the gods gathered in cosmic darkness to birth the Fifth Sun through self-sacrifice.',
    associatedTexts: [],
    keyDiscoveries: ['Pyramid of the Sun and subterranean artificial caves', 'Temple of the Feathered Serpent burials', 'Polychrome frescoes of the Water Goddess and Tlalocan paradise']
  },

  // --- ANATOLIA, EGYPT & NEAR EAST EXPANSIONS ---
  {
    id: 'hattusa_bogazkale',
    name: 'Hattusa (Boğazkale / Boğazköy)',
    ancientRegion: 'Central Anatolia (Hittite Empire)',
    modernCountry: 'Çorum Province, Turkey',
    coordinates: { lat: 40.0197, lng: 34.6153 },
    cultureId: 'canaanite_ugaritic',
    regionGroup: 'NEAR_EAST',
    importance: 'Primary Excavation',
    description: 'Capital of the Late Bronze Age Hittite Empire. Excavations yielded over 30,000 cuneiform tablets including the Kumarbi Cycle (Kingship in Heaven) that provided the direct mythic prototype for Hesiod\'s Theogony (Ouranos-Kronos-Zeus), as well as international suzerainty treaties whose covenant structure mirrors Deuteronomy.',
    associatedTexts: ['deuteronomy', 'hesiod_works_days'],
    keyDiscoveries: ['Lion Gate and King\'s Gate fortifications', 'Yazılıkaya open-air rock sanctuary depicting 63 deities', 'Treaty of Kadesh (earliest parity peace treaty, ca. 1259 BCE)', 'Song of Kumarbi / Song of Ullikummi cuneiform tablets']
  },
  {
    id: 'elephantine_island',
    name: 'Elephantine Island (Yeb)',
    ancientRegion: 'First Cataract of the Nile (Upper Egypt)',
    modernCountry: 'Aswan, Egypt',
    coordinates: { lat: 24.0864, lng: 32.8872 },
    cultureId: 'hebrew_israelite',
    regionGroup: 'NEAR_EAST',
    importance: 'Archival Discovery',
    description: 'Ancient frontier fortress and trading settlement on the Nile housing a community of Jewish mercenary soldiers under Persian rule in the 5th century BCE. The community had its own functioning Temple of Yahu (Yahweh), offering animal sacrifices and corresponding with the high priest in Jerusalem and the governor of Samaria.',
    associatedTexts: ['deuteronomy', 'ezra'],
    keyDiscoveries: ['Elephantine Aramaic Papyri (including Passover letter and petition to rebuild temple)', 'Ahiqar wisdom proverbs in Aramaic', 'Temple of Yahu foundation remains adjacent to the Egyptian temple of Khnum']
  },
  {
    id: 'nag_hammadi_caves',
    name: 'Nag Hammadi (Jabal al-Tarif Cliffs)',
    ancientRegion: 'Upper Egypt / Thebaid',
    modernCountry: 'Qena Governorate, Egypt',
    coordinates: { lat: 26.0489, lng: 32.2414 },
    cultureId: 'second_temple_jewish',
    regionGroup: 'NEAR_EAST',
    importance: 'Archival Discovery',
    description: 'Site where a local farmer named Muhammad \'Ali al-Samman discovered a sealed red earthenware jar in December 1945 containing 13 leather-bound papyrus codices (52 tractates). These preserved the lost library of early Christian Gnostic literature, including the Apocryphon of John, Gospel of Thomas, and Hypostasis of the Archons.',
    associatedTexts: ['apocryphon_of_john', '1_enoch'],
    keyDiscoveries: ['13 Coptic leather-bound papyrus codices (now in Coptic Museum, Cairo)', 'Gospel of Thomas complete text', 'Apocryphon of John / Secret Revelation', 'Treatise on the Resurrection']
  },
  {
    id: 'mari_tell_hariri',
    name: 'Mari (Tell Hariri)',
    ancientRegion: 'Middle Euphrates Basin',
    modernCountry: 'Deir ez-Zor Governorate, Syria',
    coordinates: { lat: 34.5492, lng: 40.8906 },
    cultureId: 'mesopotamian',
    regionGroup: 'NEAR_EAST',
    importance: 'Primary Excavation',
    description: 'Major Bronze Age royal city excavated by André Parrot, featuring the colossal 300-room Royal Palace of Zimri-Lim and a royal archive of over 25,000 cuneiform tablets. The texts preserve Northwest Semitic linguistic forms, prophetic ecstasy reports matching biblical prophecy, and tribal customs closely illuminating the Genesis patriarchs.',
    associatedTexts: ['genesis', 'code_of_hammurabi'],
    keyDiscoveries: ['Royal Palace of Zimri-Lim with colorful investiture frescoes', 'Letters of prophetic dreams and oracles (apilu and muhhu prophets)', 'Banqueting and diplomatic treaty tablets between Mari, Babylon, and Yamhad']
  },
  {
    id: 'susa_shushan',
    name: 'Susa (Shushan the Citadel)',
    ancientRegion: 'Elam / Susiana Plain',
    modernCountry: 'Khuzestan Province, Iran',
    coordinates: { lat: 32.1892, lng: 48.2436 },
    cultureId: 'persian_zoroastrian',
    regionGroup: 'ASIA_PERSIA',
    importance: 'Ancient Capital',
    description: 'One of the oldest settlements in the world, capital of ancient Elam, and winter residence of the Persian Achaemenid emperors (Cyrus, Darius, Xerxes/Ahasuerus). Setting of the biblical books of Esther and Nehemiah, and locus of Daniel\'s vision along the Ulai canal. Where French archaeologists discovered the Stele of the Code of Hammurabi in 1901.',
    associatedTexts: ['code_of_hammurabi', 'daniel'],
    keyDiscoveries: ['Stele of the Code of Hammurabi (diorite stela brought as war trophy by Shutruk-Nahhunte, now in the Louvre)', 'Apadana Palace of Darius I with glazed brick Archers frieze', 'Victory Stele of Naram-Sin', 'Proto-Elamite and Linear Elamite tablets']
  },
  {
    id: 'saqqara_unas',
    name: 'Saqqara (Pyramid of Unas)',
    ancientRegion: 'Memphite Necropolis / Lower Egypt',
    modernCountry: 'Giza Governorate, Egypt',
    coordinates: { lat: 29.8683, lng: 31.2167 },
    cultureId: 'egyptian',
    regionGroup: 'NEAR_EAST',
    importance: 'Primary Excavation',
    description: 'The royal burial ground of the Old Kingdom capital of Memphis. In 1881, Gaston Maspero entered the pyramid of Pharaoh Unas (last king of the 5th Dynasty, ca. 2350 BCE) and discovered the subterranean walls incised with green-pigmented hieroglyphs: the Pyramid Texts. These comprise the oldest surviving religious literature on earth, including the "Cannibal Hymn" of divine ascent.',
    associatedTexts: ['pyramid_texts_unas', 'egyptian_book_of_the_dead'],
    keyDiscoveries: ['In situ Pyramid Texts of Unas (first pyramid inscribed with ritual liturgies)', 'Step Pyramid of Djoser and Imhotep complex', 'Serapeum subterranean bull catacombs', 'Tomb of Ti and Mereruka']
  },
  {
    id: 'eridu_tell_abu_shahrain',
    name: 'Eridu (Tell Abu Shahrain)',
    ancientRegion: 'Southern Sumer / Marshland Coast',
    modernCountry: 'Dhi Qar Governorate, Iraq',
    coordinates: { lat: 30.8158, lng: 45.9967 },
    cultureId: 'mesopotamian',
    regionGroup: 'NEAR_EAST',
    importance: 'Mythological Axis',
    description: 'According to the Sumerian King List, Eridu was the first city on earth where "kingship was lowered from heaven". Home to the temple of Enki (E-Abzu, "House of the Deep") and the legendary home of Adapa and the Seven Antediluvian Apkallu sages who brought arts and civilization before the Flood.',
    associatedTexts: ['atrahasis', 'gilgamesh', 'enuma_elish'],
    keyDiscoveries: ['18 superimposed temple strata spanning 5000 to 2000 BCE in Mound 1', 'Temple of Enki with sacred fish offerings', 'Sumerian King List cuneiform prisms', 'Archaic Ubaid period settlement']
  },
  {
    id: 'hattusa_bogazkoy',
    name: 'Hattusa (Boğazköy / Boğazkale)',
    ancientRegion: 'Anatolian Plateau / Hatti',
    modernCountry: 'Çorum Province, Turkey',
    coordinates: { lat: 40.0197, lng: 34.6153 },
    cultureId: 'canaanite_ugaritic',
    regionGroup: 'NEAR_EAST',
    importance: 'Primary Excavation',
    description: 'The monumental fortified capital of the Hittite Empire (Late Bronze Age). Excavations yielded over 30,000 cuneiform tablets, including Hittite translations of the Epic of Gilgamesh, the Song of Kumarbi (the Hurrian theogony that directly inspired Hesiod\'s castration of Uranus), and the Egyptian-Hittite peace treaty with Ramesses II.',
    associatedTexts: ['gilgamesh', 'hesiod_theogony'],
    keyDiscoveries: ['Yazılıkaya open-air rock sanctuary with reliefs of the Hurrian/Hittite pantheon', 'Hittite version of the Epic of Gilgamesh preserving unique lines', 'Song of Kumarbi / Ullikummi cycle', 'Lion Gate and Sphinx Gate']
  },
  {
    id: 'mount_helicon_ascra',
    name: 'Mount Helicon & Ascra',
    ancientRegion: 'Boeotia / Central Greece',
    modernCountry: 'Boeotia, Greece',
    coordinates: { lat: 38.3533, lng: 22.9772 },
    cultureId: 'greco_roman',
    regionGroup: 'MEDITERRANEAN',
    importance: 'Mythological Axis',
    description: 'The sacred mountain of the nine Muses in Greek mythology, featuring the sacred springs of Aganippe and Hippocrene. Homeland of the archaic epic poet Hesiod, who recounts in the opening of the Theogony that the Muses visited him as he pastured his sheep on the slopes of Helicon, breathing into him a divine voice to celebrate the Titans and the gods.',
    associatedTexts: ['hesiod_theogony'],
    keyDiscoveries: ['Sanctuary of the Muses (Valley of the Muses at Thespiae)', 'Inscriptions celebrating the Mouseia poetic festivals', 'Archaic defensive watchtowers of Ascra']
  }
];

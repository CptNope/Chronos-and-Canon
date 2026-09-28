import { Culture } from '../types';

export const cultures: Culture[] = [
  {
    id: 'hebrew_israelite',
    name: 'Hebrew & Ancient Israelite',
    region: 'Southern Levant (Canaan, Judah, Israel)',
    primaryLanguages: ['Biblical Hebrew', 'Biblical Aramaic'],
    era: 'ca. 1200 BCE – 100 BCE',
    description: 'The literary, covenantal, and historical traditions preserved primarily in the Tanakh / Hebrew Bible, rooted in ancient West Semitic culture.',
    mapCoords: { lat: 31.7683, lng: 35.2137 } // Jerusalem
  },
  {
    id: 'early_christian',
    name: 'Early Christian / New Testament',
    region: 'Eastern Mediterranean, Judea, Asia Minor, Rome',
    primaryLanguages: ['Koine Greek'],
    era: 'ca. 50 CE – 150 CE',
    description: 'The apostolic and sub-apostolic writings incorporating Jewish apocalyptic, Second Temple exegetical traditions, and Greco-Roman literary idiom.',
    mapCoords: { lat: 37.9838, lng: 23.7275 } // Athens / Corinth / Ephesus corridor
  },
  {
    id: 'second_temple_jewish',
    name: 'Second Temple Jewish Literature',
    region: 'Judea, Alexandria, Diaspora',
    primaryLanguages: ['Biblical/Late Hebrew', 'Jewish Literary Aramaic', 'Septuagint Greek'],
    era: 'ca. 538 BCE – 70 CE',
    description: 'A flourishing corpus of wisdom, apocalyptic, pseudepigraphic, and rewritten Bible works produced from Cyrus the Great to the destruction of the Temple.',
    mapCoords: { lat: 31.5, lng: 34.75 }
  },
  {
    id: 'dead_sea_scrolls',
    name: 'Qumran & Dead Sea Scrolls',
    region: 'Judean Desert / Dead Sea Northwest Shore',
    primaryLanguages: ['Qumran Hebrew', 'Aramaic', 'Greek'],
    era: 'ca. 250 BCE – 68 CE',
    description: 'Over 900 manuscripts discovered across eleven caves near Khirbet Qumran, revealing sectarian community rules, biblical variants, and lost apocalyptic books.',
    mapCoords: { lat: 31.7414, lng: 35.4597 } // Qumran Caves
  },
  {
    id: 'mesopotamian',
    name: 'Mesopotamian (Sumerian, Akkadian, Babylonian, Assyrian)',
    region: 'Tigris & Euphrates River Valley (Modern Iraq, Syria)',
    primaryLanguages: ['Sumerian', 'Akkadian (cuneiform)'],
    era: 'ca. 3200 BCE – 300 BCE',
    description: 'The oldest documented literary civilization, preserving flood epics (Atrahasis, Gilgamesh, Ziusudra), king lists, primeval cosmogonies, and Apkallu sage traditions.',
    mapCoords: { lat: 32.5363, lng: 44.4208 } // Babylon / Nineveh / Uruk
  },
  {
    id: 'canaanite_ugaritic',
    name: 'Canaanite / Ugaritic',
    region: 'Northern Levantine Coast (Ras Shamra, modern Syria)',
    primaryLanguages: ['Ugaritic (alphabetic cuneiform)'],
    era: 'ca. 1400 BCE – 1185 BCE',
    description: 'The archives of the Late Bronze Age kingdom of Ugarit, providing the closest linguistic, poetic, and mythological parallels to early biblical poetry (El, Baal, Mot, rpum).',
    mapCoords: { lat: 35.6022, lng: 35.7853 } // Ras Shamra
  },
  {
    id: 'greco_roman',
    name: 'Greco-Roman Mythology & Literature',
    region: 'Greece, Aegean Islands, Italian Peninsula, Hellenistic World',
    primaryLanguages: ['Ancient Greek', 'Classical Latin'],
    era: 'ca. 800 BCE – 400 CE',
    description: 'Epic poetry, theogonies, and mythographic summaries detailing the Titanomachy, Gigantomachy, Heroic Ages, Deucalion Flood, and cosmic ordering.',
    mapCoords: { lat: 38.2962, lng: 22.9511 } // Mount Helicon / Thebes
  },
  {
    id: 'egyptian',
    name: 'Ancient Egyptian Religious Literature',
    region: 'Nile Valley and Delta',
    primaryLanguages: ['Ancient Egyptian (Hieroglyphic, Hieratic, Demotic)'],
    era: 'ca. 2600 BCE – 300 CE',
    description: 'Funerary and temple corpora including Pyramid Texts, Coffin Texts, Book of the Dead, and royal mythological treatises (The Destruction of Mankind / Cow of Heaven).',
    mapCoords: { lat: 25.7402, lng: 32.6014 } // Thebes / Luxor / Heliopolis
  },
  {
    id: 'norse_germanic',
    name: 'Norse & Germanic Traditions',
    region: 'Scandinavia, Iceland',
    primaryLanguages: ['Old Norse'],
    era: 'ca. 800 CE – 1300 CE (preserving archaic oral traditions)',
    description: 'The Poetic and Prose Eddas detailing Ymir the primordial giant, the Jötnar, the cosmic ash tree Yggdrasil, Midgard Serpent Jörmungandr, and Ragnarök.',
    mapCoords: { lat: 64.1466, lng: -21.9426 } // Iceland / Thingvellir
  },
  {
    id: 'vedic_hindu',
    name: 'Vedic & Hindu Literature',
    region: 'Indus Valley and Northern Indian Subcontinent',
    primaryLanguages: ['Vedic Sanskrit', 'Classical Sanskrit'],
    era: 'ca. 1500 BCE – 500 BCE',
    description: 'Vedic hymns, Brahmanas, and early Puranas detailing cosmic creation from primordial waters (Nasadiya), Indra slaying the serpent Vritra, and Manu\'s deluge.',
    mapCoords: { lat: 29.9457, lng: 78.1642 } // Haridwar / Ganges
  },
  {
    id: 'persian_zoroastrian',
    name: 'Persian & Zoroastrian Literature',
    region: 'Iranian Plateau',
    primaryLanguages: ['Avestan', 'Middle Persian (Pahlavi)'],
    era: 'ca. 1200 BCE – 600 CE',
    description: 'The Zoroastrian Avesta (Vendidad, Yasna) describing the primeval king Yima constructing the subterranean enclosure (Vara) to preserve life from fatal winter/floods.',
    mapCoords: { lat: 29.9357, lng: 52.8914 } // Persepolis / Pasargadae
  },
  {
    id: 'maya',
    name: 'Maya Traditions',
    region: 'Mesoamerica (Guatemala Highlands, Yucatan Peninsula)',
    primaryLanguages: ['Classical Maya (Hieroglyphic)', 'K\'iche\' Maya'],
    era: 'ca. 300 BCE – 1550 CE',
    description: 'The Popol Vuh and Maya inscriptions detailing multiple creations of humanity, the destruction of the wooden men by a flood of resin, and the descent into Xibalba.',
    mapCoords: { lat: 14.9392, lng: -91.1561 } // Santa Cruz del Quiché / Guatemala
  },
  {
    id: 'aztec',
    name: 'Aztec / Nahua Traditions',
    region: 'Valley of Mexico',
    primaryLanguages: ['Classical Nahuatl (Pictographic codices & colonial transcripts)'],
    era: 'ca. 1200 CE – 1550 CE',
    description: 'Cosmological codices and historical annals recounting the Leyenda de los Soles, the four previous world ages destroyed by beasts, wind, fire, and the deluge (Nahui Atl).',
    mapCoords: { lat: 19.4326, lng: -99.1332 } // Tenochtitlan / Mexico City
  }
];

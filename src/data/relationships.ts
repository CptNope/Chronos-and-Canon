import { Relationship } from '../types';

export const relationships: Relationship[] = [
  // --- FLAGSHIP 1: JUDE & 1 ENOCH ---
  {
    id: 'rel_jude_enoch_quotation',
    sourcePassageId: 'jude_6_and_14_15',
    targetPassageId: '1_enoch_1_9',
    sourceTextId: 'jude',
    targetTextId: '1_enoch',
    relationshipType: 'DIRECT QUOTATION',
    evidenceLevel: 'DOCUMENTED',
    title: 'Jude 14–15 Quotes 1 Enoch 1:9 Verbatim',
    scholarlyExplanation: 'The New Testament author of Jude explicitly attributes the prophecy to "Enoch, the seventh from Adam" and reproduces the Greek text of 1 Enoch 1:9 (attested in the Greek Akhmim manuscript and Qumran Aramaic 4Q204). This is universally acknowledged by modern biblical scholarship as a direct quotation from a pseudepigraphic apocalyptic work.',
    motifs: ['watchers_rebellion', 'apocalypse'],
    citations: ['Bauckham, R. (1983) Jude, 2 Peter (Word Biblical Commentary)', 'Charles, R.H. (1912) The Book of Enoch', 'Nickelsburg, G.W.E. (2001) 1 Enoch 1 (Hermeneia)']
  },
  {
    id: 'rel_jude_enoch_watchers',
    sourcePassageId: 'jude_6_and_14_15',
    targetPassageId: '1_enoch_6_1_6',
    sourceTextId: 'jude',
    targetTextId: '1_enoch',
    relationshipType: 'TEXTUAL DEPENDENCE',
    evidenceLevel: 'DOCUMENTED',
    title: 'Jude 6 Invokes the Imprisoned Watchers',
    scholarlyExplanation: 'Jude 6 describes "the angels who did not keep their own domain, but abandoned their proper abode, kept in eternal bonds under darkness for the judgment of the great day." This narrative detail does not exist in Genesis 6:1–4, but is found verbatim in 1 Enoch 10:4–12 and 12–14 where Raphael and Michael bind the Watchers in the valleys of the earth.',
    motifs: ['watchers_rebellion'],
    citations: ['VanderKam, J.C. (1996) 1 Enoch and the New Testament']
  },

  // --- FLAGSHIP 2: GENESIS 6 & 1 ENOCH ---
  {
    id: 'rel_gen6_1enoch_expansion',
    sourcePassageId: 'gen_6_1_4',
    targetPassageId: '1_enoch_6_1_6',
    sourceTextId: 'genesis',
    targetTextId: '1_enoch',
    relationshipType: 'EXPANDED TRADITION',
    evidenceLevel: 'DOCUMENTED',
    title: '1 Enoch Expands Genesis 6:1–4 Primeval Fragment',
    scholarlyExplanation: 'The Book of the Watchers (1 Enoch 6–16) takes the cryptic, four-verse vignette of Genesis 6:1–4 (sons of God, daughters of men, Nephilim, gibborim) and unfolds it into an extensive epic of 200 named angels, an oath upon Mount Hermon, illicit revelation of arts, and the resulting violence that stained the earth and necessitated the Deluge.',
    motifs: ['watchers_rebellion', 'divine_human_offspring', 'giants'],
    citations: ['Collins, J.J. (1998) The Apocalyptic Imagination', 'Nickelsburg, G.W.E. (2001) 1 Enoch 1']
  },

  // --- FLAGSHIP 3: 2 PETER & GREEK TARTARUS / 1 ENOCH ---
  {
    id: 'rel_2peter_enoch_tartarus',
    sourcePassageId: '2_peter_2_4_5',
    targetPassageId: '1_enoch_6_1_6',
    sourceTextId: '2_peter',
    targetTextId: '1_enoch',
    relationshipType: 'TEXTUAL DEPENDENCE',
    evidenceLevel: 'STRONG',
    title: '2 Peter 2:4 Adopts Enochic Angelic Judgment with Greek Terminology',
    scholarlyExplanation: '2 Peter 2:4 adopts the Enochic Watcher judgment narrative while uniquely employing the Greek mythological verb ταρταρόω (tartaroō, "cast into Tartarus"). This blends Second Temple Jewish angelology with classical Greek Hesiodic mythology regarding the binding of the Titans in the subterranean pit of Tartarus.',
    motifs: ['watchers_rebellion'],
    citations: ['Kelly, J.N.D. (1969) A Commentary on the Epistles of Peter and of Jude', 'Wright, N.T. & Bird, M.F. (2019) The New Testament in Its World']
  },

  // --- FLAGSHIP 4: REPHAIM & UGARITIC RPUM ---
  {
    id: 'rel_rephaim_ugaritic_rpum',
    sourcePassageId: 'deut_2_and_3',
    targetPassageId: 'ugaritic_ktu_1_108',
    sourceTextId: 'deuteronomy',
    targetTextId: 'ugaritic_rephaim',
    relationshipType: 'HISTORICAL CONNECTION',
    evidenceLevel: 'DOCUMENTED',
    title: 'Biblical Rephaim of Og and Ugaritic rpum at Ashtaroth/Edrei',
    scholarlyExplanation: 'In Deuteronomy 1:4 and Joshua 12:4, Og king of Bashan is designated as the last of the Rephaim, reigning from Ashtaroth and Edrei. Ugaritic tablet KTU 1.108 directly invokes the divine Rapiu (rpu mlk ʿlm) reigning from the exact twin cities: Ashtaroth (ʿṯtrt) and Edrei (ʾidrʿy). This proves beyond doubt that the biblical tradition reflects authentic Late Bronze Age Northwest Semitic ancestral cult geography.',
    motifs: ['giants'],
    citations: ['Pardee, D. (2002) Ritual and Cult at Ugarit', 'Smith, Mark S. (2001) The Origins of Biblical Monotheism', 'Heiser, M.S. (2015) The Unseen Realm']
  },

  // --- FLAGSHIP 5: ISAIAH 27 / PSALMS & UGARITIC BAAL CYCLE ---
  {
    id: 'rel_isaiah27_baal_lotan',
    sourcePassageId: 'isaiah_27_1',
    targetPassageId: 'baal_cycle_lotan',
    sourceTextId: 'isaiah',
    targetTextId: 'baal_cycle',
    relationshipType: 'LINGUISTIC RELATIONSHIP',
    evidenceLevel: 'DOCUMENTED',
    title: 'Verbatim Formula: Leviathan / Lotan the Fleeing & Twisting Serpent',
    scholarlyExplanation: 'Isaiah 27:1 describes Leviathan as "the fleeing serpent" (nāḥāš bāriaḥ) and "the twisting serpent" (nāḥāš ʿăqallātōn). Ugaritic text KTU 1.5 I:1–3 describes Baal slaying Lotan as "the fleeing serpent" (ltn bṯn brḥ) and "the twisting serpent" (bṯn ʿqltn). The vocabulary and poetic formula are identical, representing direct Northwest Semitic poetic heritage.',
    motifs: ['chaoskampf'],
    citations: ['Day, John (1985) God\'s Conflict with the Dragon and the Sea', 'Cross, F.M. (1973) Canaanite Myth and Hebrew Epic']
  },

  // --- FLAGSHIP 6: GENESIS FLOOD & MESOPOTAMIAN GILGAMESH / ATRAHASIS ---
  {
    id: 'rel_genesis_gilgamesh_flood',
    sourcePassageId: 'gen_6_1_4',
    targetPassageId: 'gilgamesh_tablet_11_flood',
    sourceTextId: 'genesis',
    targetTextId: 'gilgamesh',
    relationshipType: 'TEXTUAL DEPENDENCE',
    evidenceLevel: 'STRONG',
    title: 'Genesis Flood Account and Gilgamesh Tablet XI',
    scholarlyExplanation: 'The biblical Flood narrative and the Mesopotamian flood account in Gilgamesh XI (and Atrahasis III) share striking structural, sequence, and thematic parallels: divine decree, warning to a righteous hero, ark construction with exact cubit ratios, pitch/bitumen caulking, the landing on a mountain, releasing birds (raven and doves) to test water recession, and a post-flood sacrifice that elicits a favorable divine response. Scholars agree Genesis adapts an ancient Near Eastern narrative framework into its monotheistic covenantal theology.',
    motifs: ['great_flood'],
    citations: ['George, A.R. (2003) The Babylonian Gilgamesh Epic', 'Lambert, W.G. & Millard, A.R. (1969) Atra-Hasis: The Babylonian Story of the Flood', 'Smith, George (1872) The Chaldean Account of the Deluge']
  },

  // --- GENESIS 6 & BOOK OF GIANTS ---
  {
    id: 'rel_gen6_book_of_giants',
    sourcePassageId: 'gen_6_1_4',
    sourceTextId: 'genesis',
    targetTextId: 'book_of_giants',
    relationshipType: 'EXPANDED TRADITION',
    evidenceLevel: 'STRONG',
    title: 'Book of Giants Integrates Gilgamesh into Enochic Lore',
    scholarlyExplanation: 'In the Dead Sea Scrolls Book of Giants (4Q530–531), one of the prominent giant sons of the fallen Watchers is named Gilgamesh (glgmyš), alongside Hobabish (Humbaba). This demonstrates direct literary crossover between ancient Mesopotamian epic hero traditions and Second Temple Jewish expansions of Genesis 6:4.',
    motifs: ['giants', 'divine_human_offspring'],
    citations: ['Milik, J.T. (1976) The Books of Enoch: Aramaic Fragments of Qumran Cave 4', 'Stuckenbruck, L.T. (1997) The Book of Giants from Qumran']
  },

  // --- NUMBERS 13 & GENESIS 6 ---
  {
    id: 'rel_numbers_gen6_nephilim',
    sourcePassageId: 'numbers_13_33',
    targetPassageId: 'gen_6_1_4',
    sourceTextId: 'numbers',
    targetTextId: 'genesis',
    relationshipType: 'LATER INTERPRETATION',
    evidenceLevel: 'DOCUMENTED',
    title: 'Numbers 13:33 Identifies Anakim as Nephilim',
    scholarlyExplanation: 'The Israelite spies explicitly identify the Anakim of Canaan as descendants of the Nephilim: "the sons of Anak who come from the Nephilim" (min-han-nəfilīm). This creates an intra-biblical continuity between the antediluvian beings of Genesis 6:4 and the pre-Israelite inhabitants of the Promised Land.',
    motifs: ['giants'],
    citations: ['Levine, Baruch A. (1993) Numbers 1–20 (Anchor Bible)']
  },

  // --- COMPARATIVE TRADITIONS (CAREFULLY CATEGORIZED) ---
  {
    id: 'rel_gen6_hesiod_titans',
    sourcePassageId: 'gen_6_1_4',
    sourceTextId: 'genesis',
    targetTextId: 'hesiod_theogony',
    relationshipType: 'PARALLEL NARRATIVE',
    evidenceLevel: 'COMPARATIVE',
    title: 'Hesiod\'s Titans & Giants Compared with Nephilim & Watchers',
    scholarlyExplanation: 'CRITICAL SCHOLARLY DISTINCTION: Hesiod\'s Titans and Giants are NOT the biblical Nephilim, nor is there evidence that Genesis borrowed directly from archaic Greece. However, both cultures preserve an analogous structural paradigm: a bygone primordial age where divine-human interactions occurred, rebellious immortal powers were imprisoned in a subterranean abyss, and giant offspring provoked cosmic catastrophe.',
    motifs: ['giants', 'watchers_rebellion', 'heroic_ages'],
    citations: ['West, M.L. (1997) The East Face of Helicon: West Asiatic Elements in Greek Poetry', 'Burkert, W. (1992) The Orientalizing Revolution']
  },
  {
    id: 'rel_flood_manu_comparative',
    sourcePassageId: 'gen_6_1_4',
    targetPassageId: 'shatapatha_brahmana_flood',
    sourceTextId: 'genesis',
    targetTextId: 'shatapatha_brahmana',
    relationshipType: 'SHARED MOTIF',
    evidenceLevel: 'COMPARATIVE',
    title: 'Vedic Manu & Near Eastern Flood Traditions',
    scholarlyExplanation: 'The story of King Manu and the horned fish (Matsya) in the Shatapatha Brahmana shares motif structures (divine warning, ship building, mountain landing, sole survivor repopulating humankind) without evidence of direct textual borrowing from Genesis. Rather, it represents an ancient Indo-Aryan riverine/deluge myth pattern shared across Eurasia.',
    motifs: ['great_flood'],
    citations: ['Dundes, Alan (1988) The Flood Myth', 'Witzel, Michael (2012) The Origins of the World\'s Mythologies']
  },
  {
    id: 'rel_flood_popol_vuh_comparative',
    sourcePassageId: 'gen_6_1_4',
    targetPassageId: 'popol_vuh_resin_flood',
    sourceTextId: 'genesis',
    targetTextId: 'popol_vuh',
    relationshipType: 'SHARED MOTIF',
    evidenceLevel: 'COMPARATIVE',
    title: 'Popol Vuh Black Resin Flood & Near Eastern Deluge',
    scholarlyExplanation: 'The K\'iche\' Maya flood of thick black resin sent by Heart of Sky to wipe out the failed wooden men is an independent Mesoamerican cosmic age cycle (the destruction of prior creations). While Christian missionary exposure occurred in the 16th century, the core Maya motif of successive failed human creations destroyed by torrential downpours is securely pre-Columbian.',
    motifs: ['great_flood', 'creation_primordial_waters'],
    citations: ['Tedlock, Dennis (1996) Popol Vuh: The Mayan Book of the Dawn of Life']
  },
  {
    id: 'rel_norse_jotnar_comparative',
    sourceTextId: 'genesis',
    targetTextId: 'voluspa_poetic_edda',
    relationshipType: 'SHARED MOTIF',
    evidenceLevel: 'COMPARATIVE',
    title: 'Norse Jötnar and Ancient Near Eastern Giant Lore',
    scholarlyExplanation: 'In the Poetic Edda (Völuspá), the Jötnar (frost and fire giants) are descendants of the primordial hermaphroditic entity Ymir, whom Odin and his brothers slew to construct Midgard. They are cosmic adversaries to the gods. They must not be equated with Semitic Nephilim, but represent an Indo-European mythic archetype explaining monumental geological formations and primordial chaos.',
    motifs: ['giants', 'heroic_ages'],
    citations: ['Simek, Rudolf (1993) Dictionary of Northern Mythology', 'Lindow, John (2001) Norse Mythology']
  },
  {
    id: 'rel_apkallu_watchers_polemic',
    sourceTextId: '1_enoch',
    targetTextId: 'gilgamesh',
    relationshipType: 'HISTORICAL CONNECTION',
    evidenceLevel: 'STRONG',
    title: 'Mesopotamian Apkallu Inverted as Fallen Watchers in 1 Enoch',
    scholarlyExplanation: 'Modern Assyriologists and biblical scholars (Amar Annus, Helge Kvanvig) have established that the Enochic depiction of the Watchers teaching forbidden sciences is an intentional Jewish polemical subversion of the Mesopotamian myth of the seven antediluvian sages (Apkallu). Whereas Babylonians praised the Apkallu for revealing civilization, Jewish authors reframed their arts as demonic corruption.',
    motifs: ['forbidden_knowledge', 'watchers_rebellion'],
    citations: ['Annus, Amar (2010) On the Origin of Watchers: A Mesopotamian Approach (JBL)', 'Kvanvig, H.S. (2011) Primeval History: Babylonian, Biblical, and Enochic']
  },
  {
    id: 'rel_lost_jasher_joshua',
    sourceTextId: 'joshua',
    targetTextId: 'lost_book_jasher',
    relationshipType: 'DIRECT QUOTATION',
    evidenceLevel: 'DOCUMENTED',
    title: 'Joshua 10:13 Explicitly Cites the Lost Book of Jasher',
    scholarlyExplanation: 'Joshua 10:13 states: "Is not this written in the Book of Jasher? The sun stopped in the middle of the sky and delayed going down about a full day." The biblical author cites an existing ancient national poetic scroll that is now lost to history. This must not be confused with later medieval pseudepigrapha of the same name.',
    motifs: ['heroic_ages'],
    citations: ['Boling, R.G. (1982) Joshua (Anchor Bible)', 'Pritchard, J.B. (1969) Ancient Near Eastern Texts']
  },
  {
    id: 'rel_speculative_megaliths',
    sourceTextId: 'numbers',
    targetTextId: 'deuteronomy',
    relationshipType: 'SPECULATIVE COMPARISON',
    evidenceLevel: 'SPECULATIVE',
    title: 'Golan / Bashan Megalithic Dolmens (Rujm el-Hiri) & Giant Folklore',
    scholarlyExplanation: 'SPECULATIVE HYPOTHESIS: Popular and speculative commentators frequently suggest that the colossal Bronze Age megalithic stone circles in the Golan Heights (such as Rujm el-Hiri / Wheel of the Giants) were constructed by the literal biblical Rephaim or giants. Mainstream archaeological consensus concludes that these are standard Early Bronze Age pastoralist communal mortuary and astronomical ceremonial complexes, whose sheer scale likely inspired later Iron Age folklore regarding ancient giant builders.',
    motifs: ['giants', 'ancient_astronomy'],
    citations: ['Mizrachi, Y. et al. (1996) The Geometry and Astronomy of Rujm el-Hiri', 'Finkelstein, I. (2013) The Forgotten Kingdom']
  },
  {
    id: 'rel_book_of_wars_numbers',
    sourceTextId: 'numbers',
    targetTextId: 'lost_book_wars_of_lord',
    sourcePassageId: 'book_of_the_wars_of_the_lord',
    relationshipType: 'DIRECT QUOTATION',
    evidenceLevel: 'DOCUMENTED',
    title: 'Numbers 21:14 Cites the Lost Book of the Wars of the LORD',
    scholarlyExplanation: 'Numbers 21:14 explicitly introduces a poetic quotation with the formal citation formula: "Wherefore it is said in the Book of the Wars of the LORD..." This provides incontrovertible manuscript evidence that early biblical scribes drew upon archaic Hebrew battle anthologies that did not survive the exilic period.',
    motifs: ['heroic_ages'],
    citations: ['Levine, Baruch (2000) Numbers 21–36 (Anchor Bible)', 'Cross, Frank Moore (1973) Canaanite Myth and Hebrew Epic']
  },
  {
    id: 'rel_testament_moses_jude',
    sourceTextId: 'jude',
    targetTextId: 'testament_of_moses',
    sourcePassageId: 'jude_6_and_14_15',
    targetPassageId: 'testament_of_moses_jude',
    relationshipType: 'TEXTUAL DEPENDENCE',
    evidenceLevel: 'STRONG',
    title: 'Jude 9 Citation of Michael and the Devil from Testament of Moses',
    scholarlyExplanation: 'Origen (De Principiis III.2.1), Clement of Alexandria, and modern critical commentators identify the dispute between Michael and the devil over Moses\' body in Jude 9 as deriving directly from the Jewish pseudepigraphon Assumptio Mosis / Testament of Moses.',
    motifs: ['divine_councils'],
    citations: ['Charles, R.H. (1897) The Assumption of Moses', 'Bauckham, Richard (1983) Jude, 2 Peter (Word Biblical Commentary)']
  },
  {
    id: 'rel_book_of_giants_gilgamesh',
    sourceTextId: 'book_of_giants',
    targetTextId: 'gilgamesh',
    sourcePassageId: 'book_of_giants_4q530',
    relationshipType: 'EXPANDED TRADITION',
    evidenceLevel: 'DOCUMENTED',
    title: 'Dead Sea Scrolls Book of Giants Explicitly Names Gilgamesh',
    scholarlyExplanation: 'In Aramaic scroll 4Q530 from Qumran Cave 4, the giant sons of the Watcher Shemihazah are terrified by dream-portents of the coming deluge and explicitly call upon "Gilgamesh and Hobabish" (Humbaba). This is definitive manuscript proof that Mesopotamian royal epic traditions were absorbed and polemically recast into Jewish antediluvian lore.',
    motifs: ['giants', 'watchers_rebellion', 'great_flood'],
    citations: ['Milik, J.T. (1976) The Books of Enoch: Aramaic Fragments of Qumran Cave 4', 'Stuckenbruck, Loren (1997) The Book of Giants from Qumran']
  },
  {
    id: 'rel_rigveda_creation_waters',
    sourceTextId: 'genesis',
    targetTextId: 'rigveda',
    sourcePassageId: 'gen_6_1_4',
    targetPassageId: 'rigveda_10_129',
    relationshipType: 'SHARED MOTIF',
    evidenceLevel: 'COMPARATIVE',
    title: 'Cosmic Primordial Waters: Rigveda 10.129 and Genesis 1:2',
    scholarlyExplanation: 'Both the Vedic Nasadiya Sukta ("Darkness was hidden by darkness in the beginning; with no distinguishing sign, all this was water") and Genesis 1:2 ("Darkness was over the surface of the deep [tehom], and the Spirit of God was hovering over the waters") conceptualize the uncreated cosmos as an undifferentiated, dark watery expanse before the emergence of light and division.',
    motifs: ['creation_primordial_waters'],
    citations: ['Doniger, Wendy (1981) The Rig Veda', 'Gunkel, Hermann (1895) Schöpfung und Chaos']
  },
  {
    id: 'rel_egyptian_heavenly_cow_deluge',
    sourceTextId: 'genesis',
    targetTextId: 'book_of_heavenly_cow',
    sourcePassageId: 'gen_6_1_4',
    targetPassageId: 'book_of_heavenly_cow',
    relationshipType: 'PARALLEL NARRATIVE',
    evidenceLevel: 'COMPARATIVE',
    title: 'The Egyptian Destruction of Mankind and Deluge Traditions',
    scholarlyExplanation: 'In the Book of the Heavenly Cow (inscribed in the tomb of Seti I and Tutankhamun\'s shrine), humanity rebels against the supreme god Ra, who sends his celestial Eye (Hathor-Sekhmet) to exterminate mankind. Seeing the slaughter, the deity repents and releases an inundation of red liquid to halt the destruction and save the human remnant, mirroring the moral judgment and divine sorrow motifs of Genesis 6:5–7.',
    motifs: ['great_flood', 'destruction_recreation_humanity'],
    citations: ['Lichtheim, Miriam (1976) Ancient Egyptian Literature, Vol. II', 'Hornung, Erik (1982) Der ägyptische Mythos von der Himmelskuh']
  }
];

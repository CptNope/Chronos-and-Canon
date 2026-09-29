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
  },

  // --- NEW EXPANDED SCHOLARLY RELATIONSHIPS ---
  {
    id: 'rel_deut32_divinecouncil_ugarit',
    sourceTextId: 'deuteronomy_32',
    targetTextId: 'baal_cycle',
    sourcePassageId: 'deut_32_8_9',
    relationshipType: 'SHARED TRADITION',
    evidenceLevel: 'DOCUMENTED',
    title: 'Deuteronomy 32:8–9 and the Ugaritic Assembly of El',
    scholarlyExplanation: 'The 4QDeut^j and Septuagint reading of Deuteronomy 32:8 ("when Elyon divided mankind, he set the boundaries of the peoples according to the number of the sons of God") reflects the exact administrative tier of the Northwest Semitic pantheon attested at Ugarit, where the 70 sons of El (bn ʾil) governed the distinct nations, with Yahweh receiving Israel as his portion.',
    motifs: ['divine_council'],
    citations: ['Smith, Mark S. (2001) The Origins of Biblical Monotheism', 'Heiser, Michael S. (2001) Deuteronomy 32:8 and the Sons of God']
  },
  {
    id: 'rel_psalm82_council_of_el',
    sourceTextId: 'psalm_82',
    targetTextId: 'deuteronomy_32',
    sourcePassageId: 'psalm_82_1_8',
    targetPassageId: 'deut_32_8_9',
    relationshipType: 'EXPANDED TRADITION',
    evidenceLevel: 'DOCUMENTED',
    title: 'Psalm 82 Passes Judgment on the Council Gods of Deuteronomy 32',
    scholarlyExplanation: 'Psalm 82 directly addresses the celestial beings appointed over the nations in Deuteronomy 32:8. Because they judged unjustly and oppressed the weak, Elohim strips them of their divine immortality ("I said, You are gods... nevertheless, like mortals you shall die") and reclaims universal sovereignty over all nations.',
    motifs: ['divine_council'],
    citations: ['Cross, Frank Moore (1973) Canaanite Myth and Hebrew Epic', 'Tsevat, Matitiahu (1969) God and the Gods in Assembly']
  },
  {
    id: 'rel_baal_mot_isaiah25_death',
    sourceTextId: 'baal_death_mot',
    targetTextId: 'isaiah',
    sourcePassageId: 'baal_vs_mot',
    relationshipType: 'SHARED MOTIF',
    evidenceLevel: 'STRONG',
    title: 'Yahweh Swallows Mot (Death): Isaiah 25:8 and the Baal Cycle',
    scholarlyExplanation: 'In Ugaritic myth, Mot (Death) boasts of his insatiable appetite: "My throat is the throat of a lion in the waste... Baal entered my innards." In Isaiah 25:8, the biblical author executes an intentional theological reversal using the exact same root: "Yahweh will swallow up Death [Mot] forever" (billa ha-mavet la-netzah), celebrated by Paul in 1 Corinthians 15:54.',
    motifs: ['chaoskampf', 'underworld_descent'],
    citations: ['Pardee, Dennis (2002) Ritual and Cult at Ugarit', 'Day, John (1985) God\'s Conflict with the Dragon and the Sea']
  },
  {
    id: 'rel_hammurabi_covenant_code',
    sourceTextId: 'code_of_hammurabi',
    targetTextId: 'exodus',
    sourcePassageId: 'code_of_hammurabi_lex',
    relationshipType: 'TEXTUAL DEPENDENCE',
    evidenceLevel: 'DOCUMENTED',
    title: 'The Code of Hammurabi and the Biblical Covenant Code (Exodus 21)',
    scholarlyExplanation: 'The Covenant Code of Exodus 21–22 shares specific legal formulations with the Code of Hammurabi (§§196–200), including identical casuistic conditional syntax ("if a man strikes..."), the lex talionis ("eye for eye, tooth for tooth"), laws regarding the goring ox (Exod 21:28 vs CH §250–251), and penalties for striking a pregnant woman.',
    motifs: ['lawgiver_on_mountain'],
    citations: ['Wright, David P. (2009) Inventing God\'s Law: How the Covenant Code Used the Code of Hammurabi', 'Finkelstein, J.J. (1981) The Ox That Gored']
  },
  {
    id: 'rel_hesiod_daniel2_metals',
    sourceTextId: 'hesiod_works_days',
    targetTextId: 'daniel',
    sourcePassageId: 'hesiod_five_ages',
    relationshipType: 'SHARED MOTIF',
    evidenceLevel: 'COMPARATIVE',
    title: 'Hesiod\'s Metal Ages and the Great Statue of Daniel 2',
    scholarlyExplanation: 'Both Hesiod\'s Works and Days (Gold, Silver, Bronze, Heroes, Iron) and Daniel 2:31–45 (Head of Gold, Chest of Silver, Thighs of Bronze, Legs of Iron, Feet of Iron and Clay) utilize the pan-ancient metallurgical schema to represent successive world empires in descending moral and qualitative dignity.',
    motifs: ['heroic_ages'],
    citations: ['Collins, John J. (1993) Daniel (Hermeneia)', 'West, M.L. (1978) Hesiod: Works and Days']
  },
  {
    id: 'rel_jubilees_demons_enoch',
    sourceTextId: 'jubilees_demons',
    targetTextId: '1_enoch',
    sourcePassageId: 'jubilees_10_demons',
    targetPassageId: '1_enoch_7_1_5',
    relationshipType: 'EXPANDED TRADITION',
    evidenceLevel: 'DOCUMENTED',
    title: 'Jubilees 10 Explains Demonology from the Souls of Drowned Nephilim',
    scholarlyExplanation: 'Jubilees 10 synthesizes 1 Enoch 15 (which reveals that evil spirits emerge from the slaughtered bodies of the giants) into a coherent post-flood demonology where Prince Mastema commands one-tenth of the roaming spirits to test human righteousness.',
    motifs: ['origin_of_demons', 'giants', 'watchers_rebellion'],
    citations: ['VanderKam, James C. (2001) The Book of Jubilees', 'Reed, Annette Yoshiko (2005) Fallen Angels and the History of Judaism and Christianity']
  },
  {
    id: 'rel_1qs_two_spirits_persian',
    sourceTextId: 'community_rule_1qs',
    targetTextId: 'vendidad_avesta',
    sourcePassageId: 'community_rule_two_spirits',
    relationshipType: 'HISTORICAL CONNECTION',
    evidenceLevel: 'STRONG',
    title: 'Dead Sea Scrolls Two Spirits (1QS) and Zoroastrian Dualism',
    scholarlyExplanation: 'The Treatise on the Two Spirits in 1QS III–IV (Prince of Lights vs Angel of Darkness) bears striking structural, psychological, and cosmological affinities with the Gathic Zoroastrian cosmic division between Spenta Mainyu (Holy Spirit) and Angra Mainyu (Destructive Spirit), developed during Jewish contact with the Persian Empire.',
    motifs: ['two_ways_two_spirits'],
    citations: ['Shaked, Shaul (1994) Dualism in Transformation: Varieties of Religion in Sasanian Iran', 'Collins, John J. (1997) Apocalypticism in the Dead Sea Scrolls']
  },
  {
    id: 'rel_book_of_dead_daniel5_scales',
    sourceTextId: 'egyptian_book_of_dead',
    targetTextId: 'daniel',
    sourcePassageId: 'egyptian_weighing_heart',
    relationshipType: 'SHARED MOTIF',
    evidenceLevel: 'COMPARATIVE',
    title: 'The Egyptian Psychostasia and the Weighing of Belshazzar (Daniel 5)',
    scholarlyExplanation: 'The enigmatic writing on the wall in Daniel 5:27—"Tekel: you have been weighed on the balances and found wanting"—employs the universal ancient metaphor of post-mortem moral weighing made world-famous by the Egyptian Book of the Dead (Spell 125).',
    motifs: ['cosmic_scales_judgment'],
    citations: ['Glanville, S.R.K. (1955) The Instructions of \'Onchsheshonqy', 'Newsom, Carol A. (2014) Daniel: A Commentary (OTL)']
  },
  {
    id: 'rel_ishtar_descent_sheol',
    sourceTextId: 'ishtar_descent',
    targetTextId: 'isaiah',
    sourcePassageId: 'ishtar_netherworld_descent',
    relationshipType: 'PARALLEL NARRATIVE',
    evidenceLevel: 'COMPARATIVE',
    title: 'The Land of No Return and Biblical Sheol (Isaiah 14 & Job 10)',
    scholarlyExplanation: 'The depiction of Irkalla / Kur in the Descent of Ishtar as a gloomy subterranean city of gates, dust, and inert departed royalty mirrors the description of Sheol in Isaiah 14:9–11 and Job 10:21–22, showing a common Semitic conception of the afterlife prior to the emergence of bodily resurrection theology.',
    motifs: ['underworld_descent'],
    citations: ['Horowitz, Wayne (1998) Mesopotamian Cosmic Geography', 'Johnston, Philip S. (2002) Shades of Sheol']
  },
  {
    id: 'rel_apocryphon_john_enoch_watchers',
    sourceTextId: 'apocryphon_of_john',
    targetTextId: '1_enoch',
    sourcePassageId: 'apocryphon_of_john_passage',
    targetPassageId: '1_enoch_6_1_6',
    relationshipType: 'LATER INTERPRETATION',
    evidenceLevel: 'DOCUMENTED',
    title: 'The Secret Revelation of John Adapts the Enochic Watcher Narrative',
    scholarlyExplanation: 'In the Apocryphon of John (NHC II, 1), the Sethian Gnostic author directly adapts the narrative of 1 Enoch 6–8 (angels mating with women, teaching metals, and siring giants), but reinterprets the celestial beings as archons sent by the blind demiurge Yaldabaoth to create the "counterfeit spirit" to trap the divine luminous spark.',
    motifs: ['watchers_rebellion', 'forbidden_knowledge', 'giants'],
    citations: ['Pearson, Birger A. (1990) Gnosticism, Judaism, and Egyptian Christianity', 'Williams, Michael A. (1996) Rethinking "Gnosticism"']
  }
];

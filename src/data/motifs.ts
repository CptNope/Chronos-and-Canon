import { Motif } from '../types';

export const motifs: Motif[] = [
  {
    id: 'great_flood',
    name: 'Great Flood Traditions',
    category: 'PRIMEVAL HISTORY',
    description: 'Catastrophic inundation sent by divine will to purge corruption or human noise, surviving heroes instructed to construct an ark/vessel with animal pairs, mountain resting place, and post-flood sacrifice.',
    biblicalParallels: ['Genesis 6:5–9:17', '1 Enoch 10:1–3', 'Jubilees 5:20–32', 'Sirach 44:17', 'Matthew 24:37–39', '1 Peter 3:20', '2 Peter 2:5', '2 Peter 3:6'],
    crossCulturalParallels: [
      'Mesopotamian: Epic of Atrahasis (Enlil disturbed by human noise, Enki warns Atrahasis)',
      'Mesopotamian: Epic of Gilgamesh XI (Utnapishtim narrative, seven-day storm, raven and dove release)',
      'Sumerian: Eridu Genesis (King Ziusudra on divine boat)',
      'Greco-Roman: Deucalion & Pyrrha (Zeus sends deluge to wipe out Bronze Age wicked humanity; ark lands on Mt Parnassus)',
      'Hindu: Shatapatha Brahmana (King Manu rescued by fish avatar Matsya, boat tied to Himalayan horn)',
      'Persian: Vendidad II (Yima told by Ahura Mazda to build the Vara subterranean refuge against fatal winter)',
      'Maya: Popol Vuh (Heart of Sky sends black resin flood to destroy imperfect wooden people)',
      'Aztec: Leyenda de los Soles (Fourth Sun destroyed by 4-Water Nahui Atl; humans turned into fish, Tata and Nene survive in hollowed log)'
    ],
    scholarlyDebate: 'Scholars universally recognize direct literary dependence between the Genesis flood narrative and Mesopotamian precursors (Gilgamesh XI, Atrahasis), sharing structural narrative sequence and vocabulary (e.g. pitch/kpr, mountain landing, bird release). Global flood myths elsewhere reflect comparative psychological, environmental, or riverine catastrophe patterns rather than direct diffusion.'
  },
  {
    id: 'giants',
    name: 'Giants & Superhuman Beings',
    category: 'PRIMEVAL HISTORY',
    description: 'Races of enormous physical stature, monstrous strength, or predatory appetite inhabiting the primeval earth prior to or following cosmic disruption.',
    biblicalParallels: ['Genesis 6:4 (Nephilim)', 'Numbers 13:33 (Anakim)', 'Deuteronomy 2:10–11 (Emim/Rephaim)', 'Deuteronomy 3:11 (Og of Bashan, bed of 9 cubits)', '1 Samuel 17 (Goliath of Gath)', '1 Enoch 7:2–5', 'Book of Giants (Mahway, Ohya, Hahya)'],
    crossCulturalParallels: [
      'Mesopotamian: Gilgamesh (eleven cubits tall in Hittite fragments; two-thirds god)',
      'Greek: Gigantes (born of Gaia fertilized by blood of Uranus; Gigantomachy against Olympians)',
      'Greek: Titans (primordial giants bound in Tartarus)',
      'Norse: Jötnar (primordial frost giants descended from Ymir; rivals to the Æsir gods)',
      'Ugaritic: rpum (mighty chthonic warrior-heroes and departed royalty)'
    ],
    scholarlyDebate: 'Scholarly consensus cautions against equating Greek Gigantes or Norse Jötnar directly with the biblical Nephilim. Rather, they represent analogous cultural solutions to the presence of monumental megalithic architecture, fossil discoveries, and the mythic memory of a bygone "Heroic Age" of superhuman founders.'
  },
  {
    id: 'divine_human_offspring',
    name: 'Divine-Human Interbreeding & Offspring',
    category: 'DIVINE BEINGS',
    description: 'Transgression of ontological boundaries between celestial or immortal deities and mortal humans, producing hybrid heroes, demigods, or monstrous tyrants.',
    biblicalParallels: ['Genesis 6:1–4', '1 Enoch 6–16', 'Jubilees 5:1–10', 'Testament of Reuben 5:6', 'Jude 6–7', '2 Peter 2:4'],
    crossCulturalParallels: [
      'Mesopotamian: Gilgamesh (son of goddess Ninsun and mortal Lugalbanda; 2/3 divine, 1/3 human)',
      'Greek: Hemitheoi / Demigods (Heracles from Zeus and Alcmene; Achilles from Thetis and Peleus; Perseus from Zeus and Danae)',
      'Roman: Romulus & Remus (Mars and Rhea Silvia)',
      'Egyptian: Divine Pharaonic conception (Amun-Ra fathering the reigning Pharaoh through the queen mother)'
    ],
    scholarlyDebate: 'Genesis 6:1–4 represents an ancient West Semitic polemic or condensation of divine-mortal unions. Unlike Greek mythology which celebrates demigods as civic heroes and founders, biblical and Enochic tradition views this ontological breach as an illicit violation that brought moral pollution and violence upon the earth.'
  },
  {
    id: 'watchers_rebellion',
    name: 'Watchers & Rebellious Heavenly Beings',
    category: 'DIVINE BEINGS',
    description: 'Angelic guardians or celestial beings who abandon their ordained heavenly station, descend to earth, and rebel against cosmic governance.',
    biblicalParallels: ['Daniel 4:13, 17', '1 Enoch 6–16 (Shemihazah & Asael)', 'Book of Giants', 'Jubilees 4:15, 5:1', 'Jude 6', '2 Peter 2:4'],
    crossCulturalParallels: [
      'Mesopotamian: The seven Apkallu who incurred divine displeasure; the Igigi rebellion in Atrahasis',
      'Greek: Prometheus stealing fire; the Titans revolting against Uranus/Zeus and imprisoned in Tartarus',
      'Persian: Daevas under Angra Mainyu opposing the Amesha Spentas'
    ],
    scholarlyDebate: 'The Epistle of Jude (v. 6, 14–15) and 2 Peter (2:4) quote directly and invoke the 1 Enoch tradition of angels bound in gloom under the earth until judgment. Peter specifically uses the Greek verb tartaroō ("cast into Tartarus"), merging Greek mythological punishment terminology with Enochic angelology.'
  },
  {
    id: 'forbidden_knowledge',
    name: 'Forbidden Knowledge & Illicit Technologies',
    category: 'RITUAL & WISDOM',
    description: 'Celestial or demonic figures imparting secret cosmic, metallurgical, martial, pharmaceutical, or astronomical arts to humanity, sparking moral corruption.',
    biblicalParallels: ['Genesis 3:5–7 (Tree of Knowledge)', '1 Enoch 7:1, 8:1–3 (Asael teaching swords, armor, cosmetics, sorcery)', 'Jubilees 8:3 (Kainan finding inscription with astrological secrets)'],
    crossCulturalParallels: [
      'Greek: Prometheus chained for bestowing fire, metallurgy, medicine, and mathematics on mortals',
      'Mesopotamian: Myth of Adapa (breaking the South Wind\'s wing, receiving wisdom from Ea but denied immortality); Apkallu imparting craft sciences',
      'Egyptian: Thoth as inventor of writing and magical spells (heka)'
    ],
    scholarlyDebate: 'A major divergence exists between cultures that view the culture-bringer as a benefactor (Prometheus, Enki/Ea, Thoth) versus early Judaism (Genesis 3, 1 Enoch), which views illicit wisdom as usurping divine prerogative and precipitating moral catastrophe.'
  },
  {
    id: 'chaoskampf',
    name: 'Chaoskampf: Storm God vs. Cosmic Dragon/Sea',
    category: 'COSMOLOGY',
    description: 'Cosmic combat wherein the young divine storm/warrior deity defeats the primeval, multi-headed serpent or sea monster to establish order and divine kingship.',
    biblicalParallels: ['Psalm 74:13–14 (crushing heads of Leviathan)', 'Psalm 89:9–10 (slaying Rahab)', 'Job 26:12–13', 'Job 41', 'Isaiah 27:1 (Leviathan the twisting serpent)', 'Revelation 12:7–9, 20:2'],
    crossCulturalParallels: [
      'Ugaritic: Baal Cycle (Baal victorious over Yam/Nahar "Sea/River" and the twisting serpent Lotan / ltn)',
      'Mesopotamian: Enuma Elish (Marduk slaying multi-headed dragon-mother Tiamat and forming cosmos from her corpse)',
      'Greek: Zeus slaying serpentine monster Typhon; Apollo slaying the Python at Delphi; Heracles vs Hydra',
      'Vedic: Indra slaying the withholding serpent-dragon Vritra with the vajra thunderbolt, releasing cosmic waters',
      'Norse: Thor battling the Midgard Serpent Jörmungandr in the cosmic sea and at Ragnarök',
      'Egyptian: Ra and Set battling the chaos-serpent Apep / Apophis nightly'
    ],
    scholarlyDebate: 'One of the most documented and widely accepted comparative motifs in ancient Near Eastern studies. Isaiah 27:1 and Psalm 74:14 replicate verbatim the Ugaritic epithets of Lotan (ltn btn brh / ltn btn ʿqltn) as "the fleeing serpent... the twisting serpent".'
  },
  {
    id: 'divine_council',
    name: 'Divine Council & Sons of God',
    category: 'DIVINE BEINGS',
    description: 'An assembly or pantheon of celestial beings gathered around the supreme high sovereign to deliberate, pass judgment, or assign cosmic boundaries.',
    biblicalParallels: ['1 Kings 22:19–22', 'Psalm 82:1, 6', 'Psalm 89:5–7', 'Job 1:6, 2:1', 'Job 38:7', 'Isaiah 6:1–8', 'Deuteronomy 32:8–9 (4QDeut^j / LXX)'],
    crossCulturalParallels: [
      'Canaanite / Ugaritic: The Assembly of El (ʿdt ʾilm / phr mʿd) at the source of the two rivers',
      'Mesopotamian: Council of the Great Gods (Anunnaki/Igigi) conferring kingship in Enuma Elish',
      'Greco-Roman: The Olympian Council on Mount Olympus',
      'Norse: The Thing of the Gods at the Well of Urðr under Yggdrasil'
    ],
    scholarlyDebate: 'Psalm 82 ("God presides in the divine assembly; he renders judgment among the gods") preserves clear structural continuity with the Northwest Semitic assembly of El, while executing a theological judgment stripping the other gods of their immortality.'
  },
  {
    id: 'cosmic_tree_life',
    name: 'Cosmic Tree & Tree of Life',
    category: 'COSMOLOGY',
    description: 'A central world axis (axis mundi) linking heaven, earth, and the underworld, bearing life-giving fruit, guarded by supernatural guardians.',
    biblicalParallels: ['Genesis 2:9, 3:22–24', 'Ezekiel 31:3–9 (cosmic cedar in Eden)', 'Daniel 4:10–12', 'Proverbs 3:18', 'Revelation 22:2'],
    crossCulturalParallels: [
      'Norse: Yggdrasil (the cosmic ash tree linking the nine worlds, gnawed by Níðhöggr)',
      'Mesopotamian: Kiskanu tree of Eridu; the jewel-laden trees in the Garden of the Gods (Gilgamesh IX)',
      'Mesoamerican: The Sacred Ceiba / Wakah Chan (tree connecting the underworld Xibalba to the heavens)'
    ],
    scholarlyDebate: 'Represents a universal spatial archetype (axis mundi) present in iconography from Old Kingdom Egypt and Sumer to pre-Columbian Mesoamerica.'
  },
  {
    id: 'creation_primordial_waters',
    name: 'Creation from Primordial Waters',
    category: 'COSMOLOGY',
    description: 'The universe emerging out of an undifferentiated, dark, boundless watery abyss upon which the divine breath or spirit acts.',
    biblicalParallels: ['Genesis 1:1–2 (darkness over tehom, ruach elohim hovering)', 'Psalm 104:6–9', '2 Peter 3:5'],
    crossCulturalParallels: [
      'Mesopotamian: Enuma Elish (commingling of primeval waters Apsu and Tiamat)',
      'Egyptian: Nu / Nun (the primordial inert watery darkness from which the primeval mound Benben emerged)',
      'Vedic: Rigveda 10.129 (Nasadiya Sukta: "Darkness was hidden by darkness in the beginning; with no distinguishing sign, all this was water")',
      'Maya: Popol Vuh ("There was only the calm water, the placid sea, alone and tranquil; no earth had yet appeared")'
    ],
    scholarlyDebate: 'Common across river-valley and maritime cultures. Genesis 1:2 shares the Semitic cosmogonic premise that existence commences not ex nihilo (which became prominent later in Hellenistic 2 Maccabees 7:28), but through ordering and dividing primeval chaotic waters.'
  },
  {
    id: 'heroic_ages',
    name: 'Heroic Ages & Declining World Epochs',
    category: 'PRIMEVAL HISTORY',
    description: 'Schemes of world history divided into distinct successive ages (often metal-coded), moving from primeval perfection to increasing moral corruption and mortality.',
    biblicalParallels: ['Daniel 2:31–45 (Statue of Gold, Silver, Bronze, Iron, Clay)', '1 Enoch 91:12–17, 93:1–10 (Apocalypse of Weeks)', 'Genesis 5 & 11 (diminishing lifespans)'],
    crossCulturalParallels: [
      'Greek: Hesiod\'s Works and Days (Ages of Gold, Silver, Bronze, Heroes, and Iron)',
      'Hindu: The Four Yugas (Satya, Treta, Dvapara, and Kali Yuga of progressive moral decay)',
      'Aztec: Leyenda de los Soles (Five Suns / cosmic creations and destructions)',
      'Persian: Zoroastrian world millennia of Bundahishn'
    ],
    scholarlyDebate: 'Daniel 2 reflects the widespread Hellenistic-Persian four-metal historiographical scheme (also attested in Hesiod and the Avestan Bahman Yasht), repurposed to assert the ultimate victory of God\'s indestructible kingdom.'
  },
  {
    id: 'underworld_descent',
    name: 'Underworld Journeys & Harrowing',
    category: 'ESCHATOLOGY',
    description: 'A divine, heroic, or prophetic figure journeying down into the subterranean realm of the dead, confronting rulers of death, and returning or rescuing captives.',
    biblicalParallels: ['Jonah 2:2–6', 'Psalm 16:10', '1 Peter 3:19 (preaching to spirits in prison)', 'Ephesians 4:8–10', 'Revelation 1:18 (keys of Death and Hades)'],
    crossCulturalParallels: [
      'Mesopotamian: Inanna / Ishtar\'s Descent to the Netherworld; Gilgamesh visiting Enkidu\'s shade in the Netherworld',
      'Canaanite / Ugaritic: Baal\'s descent into the throat of Mot (Death) and seasonal resurgence',
      'Greek: Katabasis (Orpheus retrieving Eurydice; Heracles capturing Cerberus; Odysseus in Odyssey XI)',
      'Egyptian: Book of Caverns; Ra navigating the Amduat through the twelve hours of night'
    ],
    scholarlyDebate: 'Early Christian traditions of the Descensus Christi ad Inferos ("Harrowing of Hell") drew heavily upon both Jewish apocalyptic schemas of Sheol/prison of the Watchers (1 Enoch) and Mediterranean motifs of victorious underworld descent.'
  },
  {
    id: 'sacred_mountains',
    name: 'Sacred Mountains & Cosmic Peaks',
    category: 'SACRED SPACE',
    description: 'Mountains serving as the intersection of heaven and earth, dwelling place of the supreme deity, site of divine council meetings, law-giving, or cosmic landings.',
    biblicalParallels: ['Mount Sinai / Horeb (Exodus 19)', 'Mount Zion (Psalm 48:2 "heights of Zaphon")', 'Mount Hermon (1 Enoch 6:6; Psalm 133:3)', 'Mount Ararat (Genesis 8:4)'],
    crossCulturalParallels: [
      'Canaanite / Ugaritic: Mount Zaphon / Jebel Aqra (palace of Baal)',
      'Greek: Mount Olympus (home of the Twelve Olympians); Mount Parnassus (landing of Deucalion)',
      'Mesopotamian: Mount Nimush / Nisir (landing of Utnapishtim\'s ark); the ziggurat as an artificial mountain connecting heaven and earth',
      'Hindu: Mount Meru (sacred cosmic mountain at the center of the universe)'
    ],
    scholarlyDebate: 'Psalm 48:2 explicitly proclaims Mount Zion to be "the peaks of Zaphon (yarkəte tzaphon)" — intentionally applying the exact Ugaritic mythological title of Baal\'s storm-mountain to Jerusalem.'
  },
  {
    id: 'cosmic_scales_judgment',
    name: 'Cosmic Scales & The Weighing of the Heart',
    category: 'ESCHATOLOGY',
    description: 'Post-mortem or apocalyptic judgment depicted through balances where the deceased\'s deeds, soul, or heart are weighed against cosmic truth, moral order, or light.',
    biblicalParallels: ['Job 31:6 ("Let me be weighed in just balances")', 'Psalm 62:9 ("In the balances they go up")', 'Proverbs 16:2', 'Daniel 5:27 ("Tekel: you have been weighed in the balances and found wanting")'],
    crossCulturalParallels: [
      'Egyptian: Book of the Dead Spell 125 (Weighing of the Heart / psychostasia against the feather of Ma\'at before Osiris and 42 assessor gods)',
      'Greek: Psychostasia in the Iliad (Zeus lifting golden scales to determine the fate of Achilles and Hector)',
      'Persian: Zoroastrian judgment at the Chinvat Bridge (Rashnu holding golden scales to weigh righteous vs wicked deeds)'
    ],
    scholarlyDebate: 'Daniel 5:27 adapts the long-standing international motif of the judicial balance, well-known from Egyptian psychostasia and West Semitic royal ideology, to declare divine judgment upon the Neo-Babylonian empire.'
  },
  {
    id: 'two_ways_two_spirits',
    name: 'The Two Spirits & Cosmic Dualism',
    category: 'DIVINE BEINGS',
    description: 'The cosmos and human soul divided between two contending forces: the Spirit of Light/Truth and the Spirit of Darkness/Deceit, governed by archangelic and demonic leaders.',
    biblicalParallels: ['Deuteronomy 30:15–20 (Life and Death, Blessing and Curse)', 'Matthew 7:13–14 (Wide and Narrow Gates)', 'John 1:5, 8:12', 'Ephesians 6:12', '1 John 4:6 (Spirit of Truth and spirit of falsehood)'],
    crossCulturalParallels: [
      'Dead Sea Scrolls: 1QS III.13–IV.26 (Treatise on the Two Spirits: Prince of Lights vs Angel of Darkness)',
      'Persian: Zoroastrian Gathas (Ahura Mazda / Spenta Mainyu vs Angra Mainyu / Ahriman)',
      'Early Christian Didache 1–6 (The Doctrine of the Two Ways: The Way of Life and the Way of Death)'
    ],
    scholarlyDebate: 'Dead Sea Scrolls scholarship (e.g., Dupont-Sommer, Collins) strongly supports Iranian/Zoroastrian influence during the Achaemenid Persian period on the development of Qumran dualism in the Community Rule (1QS).'
  },
  {
    id: 'origin_of_demons',
    name: 'Origin of Demons from the Giants',
    category: 'DIVINE BEINGS',
    description: 'The theological explanation that malevolent demons and evil spirits are the disembodied souls of the perished hybrid giants (Nephilim) that roam the earth tormenting humans.',
    biblicalParallels: ['Matthew 8:28–34 (Legion asking "Have you come here to torment us before the time?")'],
    crossCulturalParallels: [
      '1 Enoch 15:8–12 ("And now the giants, who were born from the spirit and flesh, shall be called evil spirits upon the earth... evil spirits have come out from their bodies")',
      'Jubilees 10:1–11 (Noah praying against the demons corrupting his sons; Prince Mastema retaining one-tenth to execute judgment)',
      'Justin Martyr (2 Apology 5), Athenagoras (Embassy 24–25), and Tertullian affirming this Second Temple angelology'
    ],
    scholarlyDebate: 'This Second Temple doctrine solved the biblical problem of where demons originated (since Genesis 1 contains no demonic creation). It explains why the Gerasene demons in the Gospels plead not to be cast into the abyss before the appointed time.'
  },
  {
    id: 'lawgiver_on_mountain',
    name: 'The Lawgiver & Divine Juridical Revelation',
    category: 'RITUAL & WISDOM',
    description: 'The sovereign or prophet ascending the sacred mountain or entering the presence of the solar/storm deity to receive divine codes inscribed on stone or stelae.',
    biblicalParallels: ['Exodus 19–24 (Moses at Mount Sinai receiving the Decalogue and Covenant Code)', 'Exodus 34:1–4'],
    crossCulturalParallels: [
      'Mesopotamian: Code of Hammurabi stela (Hammurabi standing reverently before Shamash, sun god and lord of justice, who hands him the measuring rod and ring of kingship)',
      'Greek: Minos ascending Mount Ida every nine years to converse with Zeus and receive laws for Crete',
      'Roman: King Numa Pompilius receiving divine legislation in the sacred grove from the nymph Egeria'
    ],
    scholarlyDebate: 'The structural and legal parallels between the Code of Hammurabi and the Covenant Code (Exodus 21–23) demonstrate that ancient Israel formulated its covenant laws utilizing shared Northwest and East Semitic legal forms, adapted to a monotheistic theological framework.'
  }
];

import { TextItem } from '../types';

export const texts: TextItem[] = [
  // --- HEBREW BIBLE ---
  {
    id: 'genesis',
    title: 'Genesis (Bereshit)',
    cultureId: 'hebrew_israelite',
    category: 'HEBREW BIBLE',
    chronology: {
      dateOfStorySetting: 'Creation to Patriarchal era (Traditional: Primeval to ca. 1700 BCE)',
      estimatedDateOfComposition: 'ca. 10th–5th century BCE (composite documentary layers; final redactor Persian period)',
      dateOfEarliestSurvivingManuscript: '4QGen^b, 4QGen^d (Dead Sea Scrolls, ca. 2nd c. BCE); Nash Papyrus (2nd c. BCE); Aleppo / Leningrad Codices',
      numericCompositionBCE: -550
    },
    originalLanguage: 'Biblical Hebrew',
    summary: 'The foundational book of primeval history (Creation, Eden, Cain and Abel, Sons of God / Nephilim, the Deluge, Tower of Babel) and patriarchal ancestral traditions (Abraham, Isaac, Jacob, Joseph).',
    manuscriptHistory: 'Attested in multiple manuscript fragments from Qumran Caves 1, 2, 4, 6, 8, the Samaritan Pentateuch, and the 3rd c. BCE Septuagint Greek translation.',
    primaryManuscriptWitnesses: ['4Q2 / 4QGen^b', '4Q8 / 4QGen^h', 'Aleppo Codex', 'Leningrad Codex']
  },
  {
    id: 'exodus',
    title: 'Exodus (Shemot)',
    cultureId: 'hebrew_israelite',
    category: 'HEBREW BIBLE',
    chronology: {
      dateOfStorySetting: 'Egyptian Bondage & Sinai Theophany (Traditional: ca. 1440 or 1250 BCE)',
      estimatedDateOfComposition: 'ca. 7th–5th century BCE (preserving archaic poetry in Exodus 15 ca. 11th c. BCE)',
      dateOfEarliestSurvivingManuscript: '4QExod^b, 4QpaleoExod^m (ca. 150–100 BCE); Aleppo Codex',
      numericCompositionBCE: -600
    },
    originalLanguage: 'Biblical Hebrew',
    summary: 'Deliverance of Israel from Egypt, the splitting of the Sea of Reeds (Yam Suph), the archaic victory song celebrating Yahweh as divine warrior over the sea (ch. 15), the covenant at Mount Sinai, and the construction of the Tabernacle.',
    manuscriptHistory: '4QpaleoExod^m in ancient paleo-Hebrew script preserves expanded text affinities with the Samaritan Pentateuch.',
    primaryManuscriptWitnesses: ['4Q22 / 4QpaleoExod^m', '4Q11 / 4QExod^a', 'Aleppo Codex']
  },
  {
    id: 'leviticus',
    title: 'Leviticus (Vayikra)',
    cultureId: 'hebrew_israelite',
    category: 'HEBREW BIBLE',
    chronology: {
      dateOfStorySetting: 'Sinai Tabernacle encampment',
      estimatedDateOfComposition: 'ca. 6th–5th century BCE (Priestly Code)',
      dateOfEarliestSurvivingManuscript: '4QpaleoLev^a (ca. 150–100 BCE); En-Gedi burnt scroll (ca. 3rd c. CE)',
      numericCompositionBCE: -500
    },
    originalLanguage: 'Biblical Hebrew',
    summary: 'The priestly rituals of ancient Israel, containing the pivotal Day of Atonement liturgy (ch. 16) where Aaron casts lots for the two goats: one for Yahweh and one for Azazel (עֲזָאזֵל), sent into the desert wilderness—the foundation for the Enochic Watcher demon Asael.',
    manuscriptHistory: 'The En-Gedi scroll was deciphered in 2016 using micro-computed tomography 3D virtual unwrapping, matching the Masoretic text of Leviticus 1–2.',
    primaryManuscriptWitnesses: ['4Q26 / 4QLev^b', '11Q1 / 11QpaleoLev', 'En-Gedi Scroll']
  },
  {
    id: 'numbers',
    title: 'Numbers (Bemidbar)',
    cultureId: 'hebrew_israelite',
    category: 'HEBREW BIBLE',
    chronology: {
      dateOfStorySetting: 'Wilderness Wanderings (Traditional: ca. 1440 or 1250 BCE)',
      estimatedDateOfComposition: 'ca. 7th–5th century BCE',
      dateOfEarliestSurvivingManuscript: '4QNum^b (ca. 150 BCE); Ketef Hinnom silver amulets (late 7th c. BCE with Num 6:24–26)',
      numericCompositionBCE: -500
    },
    originalLanguage: 'Biblical Hebrew',
    summary: 'The wilderness wanderings of the tribes of Israel, including the reconnaissance mission into Canaan (ch. 13) where the spies report encountering the colossal Anakim "descended from the Nephilim", and the explicit citation of the lost "Book of the Wars of the LORD" (21:14).',
    manuscriptHistory: 'Well-represented at Qumran (4QNum^b preserves extensive text with distinctive Samaritan-type expansions).',
    primaryManuscriptWitnesses: ['4Q27 / 4QNum^b', 'Ketef Hinnom Amulets']
  },
  {
    id: 'deuteronomy',
    title: 'Deuteronomy (Devarim)',
    cultureId: 'hebrew_israelite',
    category: 'HEBREW BIBLE',
    chronology: {
      dateOfStorySetting: 'Plains of Moab prior to entering Canaan (Traditional: 15th/13th c. BCE)',
      estimatedDateOfComposition: 'ca. 7th century BCE (Josianic reform era) with Exilic expansions',
      dateOfEarliestSurvivingManuscript: '4QDeut^q, 4QDeut^j (ca. 175–125 BCE preserving "sons of God" in 32:8)',
      numericCompositionBCE: -620
    },
    originalLanguage: 'Biblical Hebrew',
    summary: 'Moses\' farewell orations detailing the covenant, ancient territorial dispossessions of giant races (Emim, Zamzummim, Rephaim), Og of Bashan\'s iron bedstead (ch. 2–3), and the Divine Council allocation of nations in ch. 32.',
    manuscriptHistory: 'Over 30 manuscripts discovered at Qumran. 4QDeut^j confirms the Septuagint reading "according to the number of the sons of God / angels of God" in 32:8.',
    primaryManuscriptWitnesses: ['4Q44 / 4QDeut^q', '4Q37 / 4QDeut^j', 'Papyrus Nash']
  },
  {
    id: 'joshua',
    title: 'Joshua (Yehoshua)',
    cultureId: 'hebrew_israelite',
    category: 'HEBREW BIBLE',
    chronology: {
      dateOfStorySetting: 'Conquest and settlement of Canaan (Traditional: ca. 1400 / 1200 BCE)',
      estimatedDateOfComposition: 'ca. 7th–6th century BCE (Deuteronomistic History)',
      dateOfEarliestSurvivingManuscript: '4QJosh^a, 4QJosh^b (Dead Sea Scrolls, ca. 150–100 BCE)',
      numericCompositionBCE: -580
    },
    originalLanguage: 'Biblical Hebrew',
    summary: 'Narrates the military campaigns under Joshua, the defeat of the remaining Anakim in Gaza, Gath, and Ashdod (ch. 11), the defeat of Og king of Bashan the remnant of the Rephaim (12:4), and explicitly cites the "Book of Jasher" for the miracle of the sun standing still at Gibeon (10:13).',
    manuscriptHistory: '4QJosh^a differs from the Masoretic text in the sequence of the altar construction on Mount Ebal, aligning closer to early Greek witnesses.',
    primaryManuscriptWitnesses: ['4Q47 / 4QJosh^a', 'Aleppo Codex']
  },
  {
    id: 'job',
    title: 'Job (Iyov)',
    cultureId: 'hebrew_israelite',
    category: 'HEBREW BIBLE',
    chronology: {
      dateOfStorySetting: 'Patriarchal antiquity in the land of Uz',
      estimatedDateOfComposition: 'ca. 7th–4th century BCE (archaic poetic idiom reflecting West Semitic vocabulary)',
      dateOfEarliestSurvivingManuscript: '4Q101 (paleo-Hebrew Job, ca. 150 BCE); 11Q10 (Targum of Job, 2nd c. BCE)',
      numericCompositionBCE: -500
    },
    originalLanguage: 'Biblical Hebrew (with prominent Aramaic and Northwest Semitic features)',
    summary: 'Wisdom dialogue exploring the suffering of the righteous, featuring celestial council gatherings where the sons of God and the Satan assemble (ch. 1–2), depictions of the Rephaim trembling in the underworld (26:5), and God\'s sovereign dominion over Behemoth and Leviathan (ch. 40–41).',
    manuscriptHistory: '11Q10 Targum of Job from Cave 11 represents the earliest surviving written Aramaic translation of any biblical book.',
    primaryManuscriptWitnesses: ['11Q10 (11QtgJob)', '4Q99 / 4QJob^a', '4Q101']
  },
  {
    id: 'psalms',
    title: 'Psalms (Tehillim)',
    cultureId: 'hebrew_israelite',
    category: 'HEBREW BIBLE',
    chronology: {
      dateOfStorySetting: 'Davidic monarchy down to post-exilic worship (ca. 1000–400 BCE)',
      estimatedDateOfComposition: 'ca. 10th–3rd century BCE (diverse collection of individual poems)',
      dateOfEarliestSurvivingManuscript: '11Q5 (Great Psalms Scroll, ca. 30–50 CE containing canonical and non-canonical psalms); 4QPsa–u',
      numericCompositionBCE: -450
    },
    originalLanguage: 'Biblical Hebrew',
    summary: 'The liturgical poetry of ancient Israel, containing primeval Chaoskampf battles against Leviathan and Rahab (Ps 74, 89), divine council deliberations judging corrupt deities (Ps 82), and echoes of Canaanite Mount Zaphon applied to Zion (Ps 48).',
    manuscriptHistory: 'The most popular text at Qumran with nearly 40 preserved manuscript copies. 11Q5 preserves 41 canonical psalms along with 7 non-canonical hymns.',
    primaryManuscriptWitnesses: ['11Q5 / 11QPsa', '4Q83 / 4QPsa', 'En-Gedi Scroll']
  },
  {
    id: 'isaiah',
    title: 'Isaiah (Yeshayahu)',
    cultureId: 'hebrew_israelite',
    category: 'HEBREW BIBLE',
    chronology: {
      dateOfStorySetting: '8th century BCE Assyrian crisis through 6th c. BCE Babylonian Exile',
      estimatedDateOfComposition: 'ca. 740–500 BCE (First Isaiah 1–39; Deutero-Isaiah 40–55; Trito-Isaiah 56–66)',
      dateOfEarliestSurvivingManuscript: '1QIsa^a (Great Isaiah Scroll, complete text, ca. 125 BCE)',
      numericCompositionBCE: -520
    },
    originalLanguage: 'Biblical Hebrew',
    summary: 'Prophetic declarations including the mocking dirge against the King of Babylon cast down to Sheol (ch. 14, source of "Helel ben Shahar / Lucifer" and the Rephaim rising from their thrones), and the eschatological defeat of Leviathan the twisting serpent (27:1).',
    manuscriptHistory: '1QIsa^a from Qumran Cave 1 is the most complete and famous surviving biblical manuscript from antiquity, predating medieval codices by over a thousand years.',
    primaryManuscriptWitnesses: ['1QIsa^a (Great Isaiah Scroll)', '1QIsa^b']
  },
  {
    id: 'ezekiel',
    title: 'Ezekiel (Yechezkel)',
    cultureId: 'hebrew_israelite',
    category: 'HEBREW BIBLE',
    chronology: {
      dateOfStorySetting: 'Babylonian exile by the River Chebar (593–571 BCE)',
      estimatedDateOfComposition: 'ca. 580–550 BCE',
      dateOfEarliestSurvivingManuscript: '4QEzek^a, 4QEzek^b (ca. 100 BCE); Papyrus 967 (Greek, ca. 200 CE)',
      numericCompositionBCE: -570
    },
    originalLanguage: 'Biblical Hebrew',
    summary: 'Visionary prophecies including the heavenly throne-chariot (Merkavah, ch. 1, 10), the fall of the King of Tyre from the holy mountain of God and Eden (ch. 28), the cosmic cedar of Lebanon (ch. 31), and the eschatological Gog of Magog invasion (ch. 38–39).',
    manuscriptHistory: 'Preserved at Qumran and in early Greek papyri. Papyrus 967 preserves a different chapter ordering placing ch. 38–39 before ch. 37.',
    primaryManuscriptWitnesses: ['4Q73 / 4QEzek^a', 'Papyrus 967']
  },
  {
    id: 'daniel',
    title: 'Daniel',
    cultureId: 'hebrew_israelite',
    category: 'HEBREW BIBLE',
    chronology: {
      dateOfStorySetting: 'Babylonian and Persian royal courts (6th c. BCE, ca. 605–536 BCE)',
      estimatedDateOfComposition: 'ca. 167–164 BCE (Maccabean crisis) incorporating earlier Aramaic court tales (ca. 4th–3rd c. BCE)',
      dateOfEarliestSurvivingManuscript: '4QDan^a, 4QDan^c (ca. 125–100 BCE)',
      numericCompositionBCE: -165
    },
    originalLanguage: 'Bilingual: Hebrew (1:1–2:4a; 8:1–12:13) and Biblical Aramaic (2:4b–7:28)',
    summary: 'Court narratives and apocalyptic visions: four-metal world empire sequence (ch. 2), the "Watcher, a holy one" descending from heaven (4:13), the celestial throne judgment of the Ancient of Days and the "Son of Man" (ch. 7), and archangelic patronage over nations (Michael in ch. 10, 12).',
    manuscriptHistory: 'Eight manuscripts discovered across Qumran caves, demonstrating rapid acceptance into authoritative collections within decades of final compilation.',
    primaryManuscriptWitnesses: ['4Q112 / 4QDan^a', '4Q114 / 4QDan^c']
  },

  // --- NEW TESTAMENT ---
  {
    id: 'jude',
    title: 'Epistle of Jude',
    cultureId: 'early_christian',
    category: 'NEW TESTAMENT',
    chronology: {
      dateOfStorySetting: 'Mid-to-late 1st century CE early church community',
      estimatedDateOfComposition: 'ca. 55–80 CE',
      dateOfEarliestSurvivingManuscript: 'Papyrus 72 (P72, ca. 300 CE); Codex Sinaiticus (ca. 330–360 CE)',
      numericCompositionBCE: 65
    },
    originalLanguage: 'Koine Greek',
    summary: 'A short epistle confronting antinomian teachers, directly citing 1 Enoch 1:9 in verses 14–15 ("Behold, the Lord came with ten thousands of his holy ones...") and alluding to the Watchers who left their proper domain bound in chains under darkness (v. 6), as well as Michael disputing with the devil over Moses\' body (v. 9).',
    manuscriptHistory: 'P72 (Bodmer VII-VIII) preserves the earliest complete Greek text of Jude, bound together with 1 and 2 Peter.',
    primaryManuscriptWitnesses: ['Papyrus 72', 'Codex Sinaiticus', 'Codex Vaticanus']
  },
  {
    id: '2_peter',
    title: 'Second Epistle of Peter',
    cultureId: 'early_christian',
    category: 'NEW TESTAMENT',
    chronology: {
      dateOfStorySetting: 'Late apostolic era before Peter\'s martyrdom (Traditional: ca. 64–68 CE)',
      estimatedDateOfComposition: 'ca. 65–110 CE',
      dateOfEarliestSurvivingManuscript: 'Papyrus 72 (P72, ca. 300 CE); Codex Vaticanus (ca. 325–350 CE)',
      numericCompositionBCE: 80
    },
    originalLanguage: 'Koine Greek',
    summary: 'Exhortation warning against false teachers. Famously employs the rare mythological verb ταρταρόω (tartaroō, "cast into Tartarus") in 2:4 to describe God casting the sinning angels into dark pits until judgment, alongside Noah\'s flood.',
    manuscriptHistory: 'Accepted into the canonical New Testament after intense debate among 3rd–4th century patristic writers (categorized among antilegomena).',
    primaryManuscriptWitnesses: ['Papyrus 72', 'Codex Sinaiticus']
  },
  {
    id: 'revelation',
    title: 'Revelation / Apocalypse of John',
    cultureId: 'early_christian',
    category: 'NEW TESTAMENT',
    chronology: {
      dateOfStorySetting: 'Island of Patmos during Roman imperial persecution (Domitian era, ca. 95 CE)',
      estimatedDateOfComposition: 'ca. 90–96 CE',
      dateOfEarliestSurvivingManuscript: 'Papyrus 47 (P47, Chester Beatty III, ca. 250 CE); Papyrus 115 (ca. 300 CE)',
      numericCompositionBCE: 95
    },
    originalLanguage: 'Koine Greek (heavily Semitized idiom)',
    summary: 'Apocalyptic visions saturated with Hebrew Bible and Second Temple imagery: cosmic battle of Michael against the great dragon / ancient serpent (ch. 12), the beast rising from the sea (Chaoskampf, ch. 13), the binding of the dragon in the abyss for 1000 years (ch. 20), and the descent of the New Jerusalem (ch. 21–22).',
    manuscriptHistory: 'P115 preserves the infamous variant 616 for the number of the Beast instead of 666.',
    primaryManuscriptWitnesses: ['Papyrus 47', 'Papyrus 115', 'Codex Alexandrinus']
  },

  // --- SECOND TEMPLE, APOCRYPHA & PSEUDEPIGRAPHA ---
  {
    id: '1_enoch',
    title: '1 Enoch (Ethiopic Enoch)',
    cultureId: 'second_temple_jewish',
    category: 'PSEUDEPIGRAPHA',
    chronology: {
      dateOfStorySetting: 'Antediluvian era of Jared and Enoch (Traditional: 7th from Adam)',
      estimatedDateOfComposition: 'ca. 3rd century BCE – 1st century BCE (composite)',
      dateOfEarliestSurvivingManuscript: '4Q201 (4QEn^a ar, ca. 200–150 BCE); Greek in Codex Panopolitanus; complete Ge\'ez MSS',
      numericCompositionBCE: -250
    },
    originalLanguage: 'Aramaic (with surviving Greek and Ge\'ez recensions)',
    summary: 'The central ancient apocalyptic work expanding Genesis 6. It recounts 200 Watchers swearing an oath on Mount Hermon, marrying women, siring ravenous giants, imparting forbidden arts, and being bound in underground darkness until the final cosmic judgment.',
    manuscriptHistory: 'Eleven Aramaic manuscripts discovered across Qumran Cave 4 confirmed the ancient Semitic antiquity of 1 Enoch. Canonical in the Ethiopian Orthodox Tewahedo Church.',
    primaryManuscriptWitnesses: ['4Q201 (4QEn^a ar)', '4Q204 (4QEn^c ar)', 'Codex Panopolitanus']
  },
  {
    id: '2_enoch',
    title: '2 Enoch (Slavonic Apocalypse of Enoch / Book of the Secrets of Enoch)',
    cultureId: 'second_temple_jewish',
    category: 'PSEUDEPIGRAPHA',
    chronology: {
      dateOfStorySetting: 'Ascent of Enoch through the celestial spheres before the Deluge',
      estimatedDateOfComposition: 'ca. late 1st century BCE – 1st century CE (pre-70 CE Second Temple Jewish origin)',
      dateOfEarliestSurvivingManuscript: 'Old Church Slavonic manuscripts (14th–16th century CE, e.g. South Russian Uvarov MS)',
      numericCompositionBCE: -20
    },
    originalLanguage: 'Semito-Greek original (preserved exclusively in Old Church Slavonic)',
    summary: 'Enoch is guided by two radiant angels through the Seven Heavens, viewing the celestial prison of the fallen Grigori (Watchers) weeping in the second and fifth heavens, witnessing God\'s cosmic creation, and receiving revelations on human destiny and calendar calculations.',
    manuscriptHistory: 'Discovered in the late 19th century in Russian and Serbian libraries; recognized as an authentic Second Temple Jewish apocalyptic work.',
    primaryManuscriptWitnesses: ['Uvarov MS 580', 'Barsov MS 1503']
  },
  {
    id: 'jubilees',
    title: 'Book of Jubilees',
    cultureId: 'second_temple_jewish',
    category: 'PSEUDEPIGRAPHA',
    chronology: {
      dateOfStorySetting: 'Sinai revelatory setting looking back over Genesis and Exodus',
      estimatedDateOfComposition: 'ca. 160–140 BCE (Maccabean era)',
      dateOfEarliestSurvivingManuscript: '4Q216 (4QJub^a, Hebrew scroll, ca. 125–100 BCE); 15+ Qumran manuscripts',
      numericCompositionBCE: -150
    },
    originalLanguage: 'Hebrew',
    summary: 'A rewritten narrative of Genesis and Exodus revealed by an angel of the presence to Moses. Features a 364-day solar calendar, explains the original mission of the Watchers was righteous instruction before they fell, and introduces Mastema, the prince of demonic spirits.',
    manuscriptHistory: 'One of the most frequently found Hebrew texts at Qumran, indicating authoritative or near-canonical status among the Dead Sea sectarians.',
    primaryManuscriptWitnesses: ['4Q216 (4QJub^a)', '4Q218', '4Q221']
  },
  {
    id: 'book_of_giants',
    title: 'Book of Giants',
    cultureId: 'dead_sea_scrolls',
    category: 'DEAD SEA SCROLLS',
    chronology: {
      dateOfStorySetting: 'Antediluvian era prior to the Great Deluge',
      estimatedDateOfComposition: 'ca. 200–100 BCE',
      dateOfEarliestSurvivingManuscript: '4Q530, 4Q531, 1Q23 (ca. 100–50 BCE); later Manichaean fragments from Turfan',
      numericCompositionBCE: -150
    },
    originalLanguage: 'Aramaic',
    summary: 'An Enochic narrative chronicling the giants\' perspective. The sons of the Watchers (bearing names including Gilgamesh, Hobabish, Mahway, Ohya, and Hahya) experience terrifying prophetic nightmares of immersion and world destruction, and send Mahway flying across the desert to petition Enoch.',
    manuscriptHistory: 'Known only through fragments in the Dead Sea Scrolls and Manichaean texts along the Silk Road until modern decipherment by J.T. Milik in 1971.',
    primaryManuscriptWitnesses: ['4Q530 (4QEnGiants^b ar)', '4Q531', '1Q23']
  },
  {
    id: '2_esdras_4_ezra',
    title: '2 Esdras / 4 Ezra',
    cultureId: 'second_temple_jewish',
    category: 'APOCRYPHA',
    chronology: {
      dateOfStorySetting: 'Babylon, thirty years after the destruction of Solomon\'s Temple (ca. 556 BCE)',
      estimatedDateOfComposition: 'ca. 90–100 CE (reflecting the trauma of the Roman destruction of the Temple in 70 CE)',
      dateOfEarliestSurvivingManuscript: 'Latin codices (Codex Sangermanensis, 822 CE); Syriac, Ethiopic, and Armenian versions',
      numericCompositionBCE: 95
    },
    originalLanguage: 'Hebrew or Aramaic (lost original; translated into Greek, then Latin and Oriental languages)',
    summary: 'Ezra weeps over Zion in seven visions, debating with the archangel Uriel concerning divine justice. Chapter 14 describes the miraculous dictation of 94 books in 40 days: 24 for the public canon and 70 kept secret for the wise.',
    manuscriptHistory: 'Included in the Appendix of the Latin Vulgate and the Slavonic Bible canon.',
    primaryManuscriptWitnesses: ['Codex Sangermanensis (MS BN Lat. 11504)', 'Syriac MS Milan B.21']
  },
  {
    id: '2_baruch',
    title: '2 Baruch (Syriac Apocalypse of Baruch)',
    cultureId: 'second_temple_jewish',
    category: 'PSEUDEPIGRAPHA',
    chronology: {
      dateOfStorySetting: 'Ruins of Jerusalem following the First Temple destruction (586 BCE)',
      estimatedDateOfComposition: 'ca. 95–115 CE (contemporary with 4 Ezra after 70 CE destruction)',
      dateOfEarliestSurvivingManuscript: '6th-century Syriac manuscript (Milan Ambrosian MS B.21 inf); P.Oxy. 403 Greek fragment',
      numericCompositionBCE: 100
    },
    originalLanguage: 'Semito-Greek original (preserved complete in Classical Syriac)',
    summary: 'Baruch weeps over the ashes of Jerusalem. God consoles him with eschatological revelations: angels hide the holy Temple vessels in the earth until the end times; the primeval sea monsters Behemoth and Leviathan will emerge from the deep to serve as food for the righteous at the Messianic banquet (ch. 29).',
    manuscriptHistory: 'Preserved in the Peshitta Old Testament manuscript tradition in Milan.',
    primaryManuscriptWitnesses: ['Milan Ambrosian MS B.21 inf', 'P.Oxy. 403']
  },
  {
    id: 'testament_of_moses',
    title: 'Testament of Moses (Assumption of Moses)',
    cultureId: 'second_temple_jewish',
    category: 'PSEUDEPIGRAPHA',
    chronology: {
      dateOfStorySetting: 'Mount Nebo before Moses\' death and burial',
      estimatedDateOfComposition: 'ca. early 1st century CE (updating Antiochus IV Maccabean crisis traditions)',
      dateOfEarliestSurvivingManuscript: '6th-century Latin palimpsest discovered in the Ambrosian Library in Milan',
      numericCompositionBCE: 10
    },
    originalLanguage: 'Hebrew / Aramaic (preserved in fragmentary Latin palimpsest)',
    summary: 'Moses entrusts his sacred writings to Joshua, commanding him to preserve them in earthen vessels until the end of days. Origen and early church fathers state that Jude 9 (the archangel Michael disputing with the devil over the body of Moses) directly derived from this work.',
    manuscriptHistory: 'Discovered in 1861 by Antonio Maria Ceriani in a palimpsest manuscript in Milan.',
    primaryManuscriptWitnesses: ['Ambrosian MS C. 73 inf']
  },
  {
    id: 'genesis_apocryphon',
    title: 'Genesis Apocryphon (1Q20)',
    cultureId: 'dead_sea_scrolls',
    category: 'DEAD SEA SCROLLS',
    chronology: {
      dateOfStorySetting: 'Primeval and Patriarchal era (Lamech, Noah, Abraham)',
      estimatedDateOfComposition: 'ca. 1st century BCE',
      dateOfEarliestSurvivingManuscript: '1Q20 (original scroll from Qumran Cave 1, ca. 50 BCE – 50 CE)',
      numericCompositionBCE: -50
    },
    originalLanguage: 'Jewish Literary Aramaic',
    summary: 'A dramatic retelling of Genesis where Lamech suspects his newborn son Noah was fathered by the Watchers due to his dazzling radiant appearance, interrogating his wife Bitenosh before consulting his father Methuselah and grandfather Enoch.',
    manuscriptHistory: 'One of the first seven Dead Sea Scrolls found in 1947, heavily decayed and unrolled with great technical difficulty in 1956.',
    primaryManuscriptWitnesses: ['1Q20 (The Genesis Apocryphon Scroll)']
  },
  {
    id: 'melchizedek_11q13',
    title: 'Melchizedek (11Q13 / 11QMelch)',
    cultureId: 'dead_sea_scrolls',
    category: 'DEAD SEA SCROLLS',
    chronology: {
      dateOfStorySetting: 'Eschatological Jubilee of the end times',
      estimatedDateOfComposition: 'ca. 120–80 BCE',
      dateOfEarliestSurvivingManuscript: '11Q13 (Cave 11 Hebrew manuscript, ca. 50 BCE)',
      numericCompositionBCE: -100
    },
    originalLanguage: 'Hebrew',
    summary: 'An eschatological midrash portraying Melchizedek as a celestial, divine judge executing the vengeance of God\'s judgments upon Belial and the spirits of his lot, fulfilling Psalm 82:1 and Isaiah 61:1–2.',
    manuscriptHistory: 'Crucial for understanding Hebrews 7 in the New Testament and Second Temple exalted angelology.',
    primaryManuscriptWitnesses: ['11Q13']
  },

  // --- BIBLICAL REFERENCES TO LOST BOOKS ---
  {
    id: 'lost_book_jasher',
    title: 'Book of Jasher (Ancient Lost Text referenced in Joshua & 2 Samuel)',
    alternateTitles: ['Sefer HaYashar (Ancient)'],
    cultureId: 'hebrew_israelite',
    category: 'LOST BOOKS REFERENCED',
    isLostBookReference: true,
    lostBookAnalysis: 'CRITICAL SCHOLARLY DISTINCTION: The ancient biblical "Book of Jasher" (literally "Book of the Upright") is an ancient, now-lost poetic anthology explicitly cited in Joshua 10:13 (the sun standing still) and 2 Samuel 1:18 (David\'s Lament of the Bow over Saul and Jonathan). IT HAS NOT SURVIVED. Later medieval works bearing the identical Hebrew title "Sefer HaYashar" — such as the 13th/16th-century anonymous narrative or Jacob Tam\'s 12th-century halakhic treatise — are late compositions that must NOT be confused with the lost biblical book.',
    chronology: {
      dateOfStorySetting: 'Conquest to early United Monarchy (ca. 1200–1000 BCE)',
      estimatedDateOfComposition: 'ca. 10th century BCE (ancient national heroic poetry collection)',
      dateOfEarliestSurvivingManuscript: 'LOST. No ancient manuscript survives. Attested only via biblical quotations in Joshua 10 and 2 Samuel 1.',
      numericCompositionBCE: -950
    },
    originalLanguage: 'Archaic Biblical Hebrew',
    summary: 'An ancient Hebrew songbook and poetic register of heroic deeds, warriors, and divine interventions on behalf of Israel\'s righteous leaders.',
    manuscriptHistory: 'Completely lost in antiquity. Rabbinic tradition (Talmud Avodah Zarah 25a) debated its identity, suggesting it was Genesis or Deuteronomy.',
    primaryManuscriptWitnesses: ['None surviving; attested only via OT citations']
  },
  {
    id: 'lost_book_wars_of_lord',
    title: 'Book of the Wars of the LORD',
    alternateTitles: ['Sefer Milchamot Yahweh'],
    cultureId: 'hebrew_israelite',
    category: 'LOST BOOKS REFERENCED',
    isLostBookReference: true,
    lostBookAnalysis: 'Explicitly cited in Numbers 21:14–15 ("Wherefore it is said in the Book of the Wars of the LORD: \'Waheb in Suphah, and the ravines of the Arnon...\'"). It was an ancient Hebrew poetic collection celebrating Yahweh\'s military victories during the Exodus and wilderness conquest. No surviving manuscripts exist.',
    chronology: {
      dateOfStorySetting: 'Wilderness Conquest and Transjordan military engagements (ca. 13th/12th c. BCE)',
      estimatedDateOfComposition: 'ca. 11th–10th century BCE',
      dateOfEarliestSurvivingManuscript: 'LOST. Known solely through Numbers 21:14.',
      numericCompositionBCE: -1000
    },
    originalLanguage: 'Archaic Biblical Hebrew',
    summary: 'An ancient poetic compendium recording geographical marches and military victories fought under the banner of Yahweh.',
    manuscriptHistory: 'Lost prior to the standardization of the biblical canon.',
    primaryManuscriptWitnesses: ['None surviving; attested in Numbers 21:14']
  },
  {
    id: 'lost_chronicles_kings_israel_judah',
    title: 'Chronicles of the Kings of Israel / Judah (Ancient Lost Court Annals)',
    alternateTitles: ['Divrei ha-Yamim le-Malkhei Yisrael / Yehudah'],
    cultureId: 'hebrew_israelite',
    category: 'LOST BOOKS REFERENCED',
    isLostBookReference: true,
    lostBookAnalysis: 'Cited over thirty times in 1 and 2 Kings as the primary historical source for royal reigns, political conspiracies, building projects, and state treaties. Not to be confused with the canonical biblical Book of Chronicles (Divrei ha-Yamim), which was written centuries later in the post-exilic Persian era.',
    chronology: {
      dateOfStorySetting: 'Divided Monarchy (ca. 930–586 BCE)',
      estimatedDateOfComposition: 'ca. 9th–6th century BCE official royal archives',
      dateOfEarliestSurvivingManuscript: 'LOST. Preserved only in cited excerpts within canonical 1–2 Kings.',
      numericCompositionBCE: -700
    },
    originalLanguage: 'Biblical Hebrew',
    summary: 'Official state archives and court annals maintained by royal scribes in Samaria and Jerusalem detailing the reigns of kings.',
    manuscriptHistory: 'Lost during the destruction of Samaria (722 BCE) and Jerusalem (586 BCE).',
    primaryManuscriptWitnesses: ['None surviving']
  },
  {
    id: 'lost_acts_of_solomon',
    title: 'Book of the Acts of Solomon',
    alternateTitles: ['Sefer Divrei Shelomoh'],
    cultureId: 'hebrew_israelite',
    category: 'LOST BOOKS REFERENCED',
    isLostBookReference: true,
    lostBookAnalysis: 'Explicitly cited in 1 Kings 11:41 ("As for the other events of Solomon\'s reign—all he did and the wisdom he displayed—are they not written in the book of the acts of Solomon?"). An official court biographical chronicle compiling Solomon\'s administrative records, diplomatic treaties, commercial voyages, and renowned wisdom proverbs. Has not survived.',
    chronology: {
      dateOfStorySetting: 'Reign of King Solomon (ca. 970–931 BCE)',
      estimatedDateOfComposition: 'ca. 10th century BCE royal court archive',
      dateOfEarliestSurvivingManuscript: 'LOST. Attested solely in 1 Kings 11:41.',
      numericCompositionBCE: -930
    },
    originalLanguage: 'Biblical Hebrew',
    summary: 'Official royal chronicle recording the wisdom, architectural feats, and diplomatic alliances of King Solomon.',
    manuscriptHistory: 'Lost in antiquity; portions digested by the compiler of 1 Kings.',
    primaryManuscriptWitnesses: ['None surviving; cited in 1 Kings 11:41']
  },
  {
    id: 'lost_nathan_gad_prophets',
    title: 'Books of Nathan the Prophet & Gad the Seer',
    alternateTitles: ['Divrei Natan ha-Navi / Divrei Gad ha-Chozeh'],
    cultureId: 'hebrew_israelite',
    category: 'LOST BOOKS REFERENCED',
    isLostBookReference: true,
    lostBookAnalysis: 'Cited in 1 Chronicles 29:29 ("Now the acts of King David, from first to last, are written in the chronicles of Samuel the seer, in the chronicles of Nathan the prophet, and in the chronicles of Gad the seer"). These represented early prophetic court records of David\'s reign, distinct from canonical Samuel.',
    chronology: {
      dateOfStorySetting: 'United Monarchy under King David (ca. 1010–970 BCE)',
      estimatedDateOfComposition: 'ca. 10th century BCE prophetic annals',
      dateOfEarliestSurvivingManuscript: 'LOST. Attested in 1 Chronicles 29:29.',
      numericCompositionBCE: -960
    },
    originalLanguage: 'Biblical Hebrew',
    summary: 'Court prophetic annals recording David\'s rise, battles, the Nathanic dynasty covenant, and the Davidic census.',
    manuscriptHistory: 'Lost in antiquity.',
    primaryManuscriptWitnesses: ['None surviving; cited in 1 Chron 29:29']
  },

  // --- MESOPOTAMIAN LITERATURE ---
  {
    id: 'gilgamesh',
    title: 'Epic of Gilgamesh',
    cultureId: 'mesopotamian',
    category: 'MESOPOTAMIAN',
    chronology: {
      dateOfStorySetting: 'Reign of King Gilgamesh of Uruk (Early Dynastic II, ca. 2700 BCE)',
      estimatedDateOfComposition: 'Standard Babylonian version compiled by Sin-leqi-unninni ca. 1200–1000 BCE; Old Babylonian versions ca. 1800–1600 BCE',
      dateOfEarliestSurvivingManuscript: 'Old Babylonian tablets (ca. 1750 BCE); Standard Babylonian tablets from Library of Ashurbanipal (7th c. BCE)',
      numericCompositionBCE: -1200
    },
    originalLanguage: 'Akkadian cuneiform & Sumerian precursors',
    summary: 'The great epic of the King of Uruk—two-thirds divine, one-third human, of colossal stature. Following the death of his companion Enkidu, Gilgamesh journeys across the Waters of Death to consult Utnapishtim the Faraway, who recounts the Great Deluge.',
    manuscriptHistory: 'Discovered in 1853 at Nineveh by Hormuzd Rassam; George Smith translated Tablet XI\'s flood account in 1872.',
    primaryManuscriptWitnesses: ['Library of Ashurbanipal tablets (British Museum K.3375)', 'Meissner Old Babylonian fragment']
  },
  {
    id: 'atrahasis',
    title: 'Epic of Atrahasis',
    cultureId: 'mesopotamian',
    category: 'MESOPOTAMIAN',
    chronology: {
      dateOfStorySetting: 'Primeval era of creation to the Great Deluge',
      estimatedDateOfComposition: 'ca. 1700 BCE (reign of Ammi-saduqa of Babylon, scribed by Kasap-aya)',
      dateOfEarliestSurvivingManuscript: 'Sippar cuneiform tablets dated to year 12 of King Ammi-saduqa (ca. 1646 BCE)',
      numericCompositionBCE: -1700
    },
    originalLanguage: 'Old Babylonian Akkadian',
    summary: 'Narrates the rebellion of the junior Igigi gods forced to dig canals, the creation of humanity from clay mixed with the blood of a slain god (We-ilu), the overpopulation and noise disturbing Enlil, and the flood sent to silence humanity, where Enki whispers through the reed wall to save Atrahasis.',
    manuscriptHistory: 'Found in three-tablet Babylonian recensions; provides the most coherent structural precursor to the Genesis 1–9 primeval cycle.',
    primaryManuscriptWitnesses: ['British Museum tablets BM 78941–78943']
  },
  {
    id: 'enuma_elish',
    title: 'Enuma Elish (The Babylonian Epic of Creation)',
    cultureId: 'mesopotamian',
    category: 'MESOPOTAMIAN',
    chronology: {
      dateOfStorySetting: 'Primordial eternity before heaven and earth were named',
      estimatedDateOfComposition: 'ca. 12th–11th century BCE (reign of Nebuchadnezzar I of Babylon)',
      dateOfEarliestSurvivingManuscript: '7th century BCE cuneiform tablets from Ashur and Nineveh',
      numericCompositionBCE: -1100
    },
    originalLanguage: 'Standard Babylonian Akkadian cuneiform',
    summary: 'The primeval generation of gods from the commingling of Apsu (sweet water) and Tiamat (salt water chaos). When younger gods disturb Tiamat, she spawns dragons and monsters; the champion Marduk defeats her, splitting her corpse in half to form the sky and the earth (Chaoskampf prototype).',
    manuscriptHistory: 'Recited annually during the Akitu (New Year) festival in Babylon at the temple of Esagila.',
    primaryManuscriptWitnesses: ['Kouyunjik tablets (Library of Ashurbanipal)', 'Sultantepe tablets']
  },
  {
    id: 'sumerian_king_list',
    title: 'Sumerian King List (W-B 444 Weld-Blundell Prism)',
    cultureId: 'mesopotamian',
    category: 'MESOPOTAMIAN',
    chronology: {
      dateOfStorySetting: 'Antediluvian cities (Eridu, Bad-tibira, Shuruppak) through post-diluvian Isin dynasty',
      estimatedDateOfComposition: 'ca. 2100–1800 BCE (Ur III / Isin period)',
      dateOfEarliestSurvivingManuscript: 'Weld-Blundell Prism W-B 444, Ashmolean Museum, Oxford (ca. 1827 BCE)',
      numericCompositionBCE: -1900
    },
    originalLanguage: 'Sumerian cuneiform',
    summary: 'Records antediluvian kings of Sumer who reigned for tens of thousands of years ("When kingship was lowered from heaven, the kingship was in Eridu... eight kings reigned for 241,200 years. Then the Flood swept over"). Followed by the sudden dramatic reduction in human lifespans after the Deluge, directly mirroring Genesis 5 and 11.',
    manuscriptHistory: 'Attested in multiple clay prisms and tablets; W-B 444 is the most famous complete four-sided prism.',
    primaryManuscriptWitnesses: ['Weld-Blundell Prism W-B 444 (Oxford)', 'Scheil tablet']
  },

  // --- CANAANITE / UGARITIC ---
  {
    id: 'baal_cycle',
    title: 'The Baal Cycle (KTU 1.1–1.6)',
    cultureId: 'canaanite_ugaritic',
    category: 'CANAANITE / UGARITIC',
    chronology: {
      dateOfStorySetting: 'Mythic cosmic time on Mount Zaphon',
      estimatedDateOfComposition: 'ca. 1350–1200 BCE (scribed by Ilimilku under King Niqmaddu II)',
      dateOfEarliestSurvivingManuscript: 'Clay cuneiform tablets unearthed at Ras Shamra (ancient Ugarit), 14th–13th c. BCE',
      numericCompositionBCE: -1300
    },
    originalLanguage: 'Ugaritic (alphabetic cuneiform)',
    summary: 'The epic conflict of Baal Hadad (the storm and fertility god) against Yam (god of the sea and rivers) and his twisting serpent Lotan, followed by Baal\'s descent into the underworld of Mot (Death) and triumphant resurrection.',
    manuscriptHistory: 'Discovered between 1929 and 1933 by French archaeologist Claude Schaeffer in the library of the High Priest at Ugarit.',
    primaryManuscriptWitnesses: ['KTU 1.1 through KTU 1.6 (Louvre / Damascus National Museum)']
  },
  {
    id: 'ugaritic_rephaim',
    title: 'Ugaritic Rephaim Texts (KTU 1.20–1.22 & KTU 1.108)',
    cultureId: 'canaanite_ugaritic',
    category: 'CANAANITE / UGARITIC',
    chronology: {
      dateOfStorySetting: 'Heroic royal ancestral banquet traditions',
      estimatedDateOfComposition: 'ca. 1300–1200 BCE (Ilimilku circle)',
      dateOfEarliestSurvivingManuscript: 'Tablets KTU 1.20–22 and KTU 1.108 from Ras Shamra, ca. 1250 BCE',
      numericCompositionBCE: -1250
    },
    originalLanguage: 'Ugaritic (alphabetic cuneiform)',
    summary: 'Poetic tablets detailing the invocation of the rpum (divinized royal ancestral shades and ancient warrior-charioteers) summoned by King Niqmaddu to a royal feast, and praising Rapiu reigning from Ashtaroth and Edrei.',
    manuscriptHistory: 'Decisive evidence confirming the connection between the biblical Rephaim of Bashan and ancient Northwest Semitic royal ancestor veneration.',
    primaryManuscriptWitnesses: ['RS 3.324', 'RS 24.252 (KTU 1.108)']
  },

  // --- GRECO-ROMAN ---
  {
    id: 'hesiod_theogony',
    title: 'Theogony (Hesiod)',
    cultureId: 'greco_roman',
    category: 'GRECO-ROMAN',
    chronology: {
      dateOfStorySetting: 'Primordial Chaos down to the Olympian establishment',
      estimatedDateOfComposition: 'ca. 730–700 BCE',
      dateOfEarliestSurvivingManuscript: 'Hellenistic and Roman papyri (e.g., P.Oxy.); medieval Byzantine manuscripts (10th–14th c. CE)',
      numericCompositionBCE: -720
    },
    originalLanguage: 'Ancient Greek (Epic-Ionic dialect)',
    summary: 'The genealogy of the Greek gods: emergence of Chaos, Gaia, and Uranus; the castration of Uranus by Cronus; the Titanomachy (ten-year war between Titans and Olympians); the casting of the Titans into Tartarus; and Zeus defeating the serpentine monster Typhon.',
    manuscriptHistory: 'Alongside Homer, the foundational religious and mythographic text of classical Greece.',
    primaryManuscriptWitnesses: ['Codex Laurentianus 32.16', 'Oxyrhynchus Papyri']
  },
  {
    id: 'hesiod_works_and_days',
    title: 'Works and Days (Hesiod)',
    cultureId: 'greco_roman',
    category: 'GRECO-ROMAN',
    chronology: {
      dateOfStorySetting: 'Archaic Boeotia and the Five Ages of Humankind',
      estimatedDateOfComposition: 'ca. 700 BCE',
      dateOfEarliestSurvivingManuscript: 'Papyri fragments from Egypt (3rd c. BCE onward); medieval manuscripts',
      numericCompositionBCE: -700
    },
    originalLanguage: 'Ancient Greek',
    summary: 'Didactic poem outlining agricultural wisdom, containing the myth of Prometheus and Pandora, and the Five Ages of Humankind (Golden, Silver, Bronze, Heroic age of demigods, and the wretched Iron age).',
    manuscriptHistory: 'Widely preserved in the classical pedagogical curriculum across the Greco-Roman world.',
    primaryManuscriptWitnesses: ['Byzantine recensions', 'P.Oxy. 1089']
  },

  // --- EGYPTIAN ---
  {
    id: 'book_of_the_dead',
    title: 'Book of the Dead (Spells 17 & 125)',
    cultureId: 'egyptian',
    category: 'EGYPTIAN',
    chronology: {
      dateOfStorySetting: 'Primeval emergence from Nun to the Hall of Ma\'at judgment',
      estimatedDateOfComposition: 'New Kingdom compilation ca. 1550 BCE (drawing on Middle Kingdom Coffin Texts ca. 2000 BCE)',
      dateOfEarliestSurvivingManuscript: 'Papyrus of Ani (British Museum EA 10470, ca. 1250 BCE)',
      numericCompositionBCE: -1550
    },
    originalLanguage: 'Ancient Egyptian (Hieroglyphic & Cursive Hieratic)',
    summary: 'Ancient funerary spells intended to assist the deceased\'s ba navigating the Duat (underworld). Spell 17 details the primeval emergence of the creator god from the dark boundless waters of Nun; Spell 125 details the weighing of the heart before Osiris and the 42 assessing deities.',
    manuscriptHistory: 'Inscribed on papyrus scrolls placed in tombs of New Kingdom nobles and royals.',
    primaryManuscriptWitnesses: ['Papyrus of Ani (British Museum)', 'Papyrus of Hunefer']
  },
  {
    id: 'book_of_heavenly_cow',
    title: 'The Book of the Heavenly Cow (The Destruction of Mankind)',
    cultureId: 'egyptian',
    category: 'EGYPTIAN',
    chronology: {
      dateOfStorySetting: 'Mythic reign of the sun god Ra on earth when humanity rebelled',
      estimatedDateOfComposition: 'ca. 1350–1300 BCE (Amarna / Post-Amarna period)',
      dateOfEarliestSurvivingManuscript: 'Gilded shrine of Tutankhamun (KV62) and tomb of Seti I (KV17), ca. 1320–1279 BCE',
      numericCompositionBCE: -1320
    },
    originalLanguage: 'Middle Egyptian (hieroglyphic)',
    summary: 'When humans conspire against the aging sun-god Ra, he dispatches his Eye (Hathor-Sekhmet) to slaughter humankind. Seeing the catastrophic massacre, Ra repents and floods the fields with red beer to intoxicate Sekhmet and save the human remnant, before retreating to heaven upon the back of Nut, the heavenly cow.',
    manuscriptHistory: 'Inscribed on the interior walls of royal tombs in the Valley of the Kings.',
    primaryManuscriptWitnesses: ['Tomb of Seti I (KV17)', 'Shrine of Tutankhamun']
  },

  // --- NORSE / VEDIC / PERSIAN / MESOAMERICAN ---
  {
    id: 'voluspa_poetic_edda',
    title: 'Völuspá (Prophecy of the Seeress - Poetic Edda)',
    cultureId: 'norse_germanic',
    category: 'NORSE',
    chronology: {
      dateOfStorySetting: 'Cosmic creation out of Ginnungagap to the renewal after Ragnarök',
      estimatedDateOfComposition: 'ca. 950–1000 CE (preserving archaic pagan oral tradition prior to Christianization)',
      dateOfEarliestSurvivingManuscript: 'Codex Regius (GKS 2365 4to, ca. 1270 CE); Hauksbók (ca. 1300 CE)',
      numericCompositionBCE: 980
    },
    originalLanguage: 'Old Norse',
    summary: 'A völva (seeress) recites to Odin the primordial history: the slaying of the giant Ymir, the creation of the world from his body, the cosmic ash tree Yggdrasil, the fate of the Jötnar (giants), and the doom of Ragnarök.',
    manuscriptHistory: 'Preserved in the 13th-century Icelandic manuscript Codex Regius, kept at the Árni Magnússon Institute in Reykjavík.',
    primaryManuscriptWitnesses: ['Codex Regius', 'Hauksbók']
  },
  {
    id: 'rigveda',
    title: 'Rigveda (Hymns 10.129 Nasadiya Sukta & 1.32 Indra vs Vritra)',
    cultureId: 'vedic_hindu',
    category: 'VEDIC',
    chronology: {
      dateOfStorySetting: 'Primordial cosmic ordering before existence and non-existence',
      estimatedDateOfComposition: 'ca. 1500–1200 BCE (oldest Indo-European religious literature)',
      dateOfEarliestSurvivingManuscript: 'Preserved via meticulous phonetic oral tradition (Shakha recitation); birch bark MSS',
      numericCompositionBCE: -1400
    },
    originalLanguage: 'Vedic Sanskrit',
    summary: 'The foundational collection of Vedic hymns. Hymn 10.129 (Nasadiya Sukta) ponders creation out of primordial undifferentiated water. Hymn 1.32 recounts the classic Indo-European dragon battle: Indra slaying the withholding serpent-dragon Vritra with the thunderbolt (vajra) to release the cosmic waters.',
    manuscriptHistory: 'UNESCO Memory of the World collection; preserved through rigorously memorized recitations.',
    primaryManuscriptWitnesses: ['Rigveda Samhita recensions (Bhandarkar Oriental Research Institute)']
  },
  {
    id: 'shatapatha_brahmana',
    title: 'Shatapatha Brahmana (Story of Manu and the Fish)',
    cultureId: 'vedic_hindu',
    category: 'VEDIC',
    chronology: {
      dateOfStorySetting: 'Primeval deluge of the current Manvantara',
      estimatedDateOfComposition: 'ca. 8th–6th century BCE',
      dateOfEarliestSurvivingManuscript: 'Vedic oral transmission; birch bark and palm leaf manuscripts (15th–17th c. CE)',
      numericCompositionBCE: -700
    },
    originalLanguage: 'Vedic Sanskrit',
    summary: 'Manu, the progenitor of humanity, washes his hands and catches a tiny fish that asks for protection, promising to save Manu from a coming deluge that will sweep away all creatures. Manu raises the fish (Matsya), builds a ship, and ties it to the horned fish which guides it to the northern mountain.',
    manuscriptHistory: 'Integral to the Shukla (White) Yajurveda tradition, strictly transmitted through mnemonic oral recitation.',
    primaryManuscriptWitnesses: ['Kanva and Madhyandina recensions']
  },
  {
    id: 'vendidad_avesta',
    title: 'Vendidad (Fargard 2 - Story of Yima\'s Vara)',
    cultureId: 'persian_zoroastrian',
    category: 'PERSIAN',
    chronology: {
      dateOfStorySetting: 'Golden Age of King Yima (Jamshid) before the fatal winter',
      estimatedDateOfComposition: 'ca. 6th–4th century BCE',
      dateOfEarliestSurvivingManuscript: 'Avestan manuscripts from Yasna and Vendidad codices (13th–14th c. CE)',
      numericCompositionBCE: -500
    },
    originalLanguage: 'Young Avestan',
    summary: 'Ahura Mazda warns the radiant king Yima that fierce winters and melting waters are coming upon the physical world. Yima is commanded to construct a subterranean enclosure (a Vara) with chambers to shelter pairs of the finest humans, cattle, dogs, plants, and fires.',
    manuscriptHistory: 'Preserved by Zoroastrian priests in Iran and the Parsi community in India.',
    primaryManuscriptWitnesses: ['MS K1 (Copenhagen)', 'MS L4 (British Library)']
  },
  {
    id: 'popol_vuh',
    title: 'Popol Vuh (Book of the Council)',
    cultureId: 'maya',
    category: 'MESOAMERICAN',
    chronology: {
      dateOfStorySetting: 'Primeval darkness, four creations of humanity, and hero twins in Xibalba',
      estimatedDateOfComposition: 'Classic Maya origins ca. 300–900 CE; transcribed in K\'iche\' with Latin script ca. 1554–1558 CE by K\'iche\' nobles',
      dateOfEarliestSurvivingManuscript: 'Father Francisco Ximénez manuscript copy (ca. 1701–1703 CE, Newberry Library, Chicago)',
      numericCompositionBCE: 1554
    },
    originalLanguage: 'K\'iche\' Maya',
    summary: 'The sacred narrative of the K\'iche\' Maya: creation from the calm primordial waters by Sovereign Plumed Serpent and Heart of Sky; failed creations of mud people and wooden effigies destroyed by a deluge of black resin; and the eventual successful creation of human beings from yellow and white maize.',
    manuscriptHistory: 'Preserved secretly in Chichicastenango until transcribed by Dominican priest Ximénez; now at the Newberry Library.',
    primaryManuscriptWitnesses: ['Ayer MS 1515 (Newberry Library)']
  },
  {
    id: 'code_of_hammurabi',
    title: 'The Code of Hammurabi',
    cultureId: 'mesopotamian',
    category: 'MESOPOTAMIAN',
    chronology: {
      dateOfStorySetting: 'Old Babylonian Empire (Reign of Hammurabi of Babylon, ca. 1792–1750 BCE)',
      estimatedDateOfComposition: 'ca. 1754 BCE',
      dateOfEarliestSurvivingManuscript: 'Diorite Stele found at Susa (Louvre Sb 8, 18th c. BCE); clay tablet copies from Nineveh and Sippar',
      numericCompositionBCE: -1754
    },
    originalLanguage: 'Old Babylonian (Akkadian cuneiform)',
    summary: 'Monumental 2.25-meter black diorite stele containing 282 law provisions framed by a poetic prologue and epilogue. King Hammurabi is depicted standing before Shamash, god of justice, receiving the insignia of royal righteousness. Establishes lex talionis ("an eye for an eye"), negligence laws, and liability parallels that directly anticipate the biblical Covenant Code of Exodus 21–23.',
    manuscriptHistory: 'Erected in Sippar or Babylon, carried off as a trophy of war to Susa by the Elamite king Shutruk-Nahhunte in the 12th century BCE, where it was discovered by Jacques de Morgan in 1901.',
    primaryManuscriptWitnesses: ['Stele of Hammurabi (Louvre Museum Sb 8)', 'Neo-Assyrian tablet copies from Ashurbanipal\'s Library']
  },
  {
    id: 'ishtar_descent',
    title: 'The Descent of Ishtar to the Netherworld',
    cultureId: 'mesopotamian',
    category: 'MESOPOTAMIAN',
    chronology: {
      dateOfStorySetting: 'Primordial mythological era',
      estimatedDateOfComposition: 'ca. 1300–1100 BCE (Standard Babylonian recension based on Sumerian Inanna\'s Descent ca. 2000 BCE)',
      dateOfEarliestSurvivingManuscript: 'Nineveh (Ashurbanipal Library) and Ashur cuneiform tablets (7th c. BCE)',
      numericCompositionBCE: -1200
    },
    originalLanguage: 'Standard Babylonian Akkadian',
    summary: 'Ishtar, the Queen of Heaven and goddess of love and war, journeys down into the dark subterranean realm of the dead (Erset la tari, "Land of No Return"), ruled by her hostile sister Ereshkigal. At each of the seven gates, the gatekeeper Neti strips her of royal regalia and power until she arrives naked and powerless. Her death brings all earthly reproduction to a halt until Ea creates an emissary to revive her.',
    manuscriptHistory: 'Adapted from the earlier Sumerian poem of Inanna\'s Descent; preserved on tablets discovered at Nineveh and Ashur.',
    primaryManuscriptWitnesses: ['K. 162 + Sm. 983 (British Museum, Nineveh)', 'VAT 8901 (Vorderasiatisches Museum Berlin, Ashur)']
  },
  {
    id: 'egyptian_book_of_dead',
    title: 'The Book of the Dead (Papyrus of Ani, Spell 125)',
    cultureId: 'egyptian',
    category: 'EGYPTIAN',
    chronology: {
      dateOfStorySetting: 'Post-mortem journey through the Duat (Netherworld)',
      estimatedDateOfComposition: 'ca. 1550–1250 BCE (New Kingdom collection drawing on Coffin Texts)',
      dateOfEarliestSurvivingManuscript: 'Papyrus of Ani (British Museum EA 10470, 19th Dynasty, ca. 1250 BCE)',
      numericCompositionBCE: -1250
    },
    originalLanguage: 'Middle Egyptian (Hieroglyphic & Cursive Hieroglyphs)',
    summary: 'The master collection of funerary liturgies and spells designed to guide the deceased through the underworld. Spell 125 portrays the pivotal judgment scene in the Hall of the Two Truths: Ani recites the Negative Confession before 42 divine assessors, and his heart (jb) is weighed in the divine scales against the feather of Ma\'at (Truth/Justice) by Anubis and Horus while Thoth records the verdict.',
    manuscriptHistory: 'Acquired in Luxor in 1888 by E.A. Wallis Budge for the British Museum; 78-foot continuous illustrated papyrus scroll in exceptional preservation.',
    primaryManuscriptWitnesses: ['Papyrus of Ani (BM EA 10470)', 'Papyrus of Hunefer (BM EA 9901)']
  },
  {
    id: 'hesiod_works_days',
    title: 'Works and Days (The Five Ages of Humanity)',
    cultureId: 'greco_roman',
    category: 'GRECO-ROMAN',
    chronology: {
      dateOfStorySetting: 'Primeval origins through the decaying Iron Age',
      estimatedDateOfComposition: 'ca. 700 BCE',
      dateOfEarliestSurvivingManuscript: 'Oxyrhynchus and Flinders Petrie papyri (3rd c. BCE–2nd c. CE); medieval Byzantine manuscripts',
      numericCompositionBCE: -700
    },
    originalLanguage: 'Ancient Epic Greek (Dactylic Hexameter)',
    summary: 'Didactic epic by Hesiod outlining the history of humanity divided into five successive declining epochs: the Golden Age under Kronos (sorrowless, death like sleep), the Silver Age (infantile and impious), the Bronze Age (terrible giants of ash trees loving warfare), the Heroic Age of Demigods (Thebes and Troy), and the contemporary corrupt Iron Age of ceaseless toil and moral collapse. Shares the metal-sequence historiography with Daniel 2.',
    manuscriptHistory: 'Formed the curriculum of classical Greek education alongside Homer.',
    primaryManuscriptWitnesses: ['Papyrus Oxyrhynchus 2091', 'Codex Laurentianus 31.9 (Florence)']
  },
  {
    id: 'community_rule_1qs',
    title: 'The Community Rule (1QS - Serekh ha-Yahad)',
    cultureId: 'dead_sea_scrolls',
    category: 'DEAD SEA SCROLLS',
    chronology: {
      dateOfStorySetting: 'Sectarian wilderness retreat awaiting the eschatological confrontation',
      estimatedDateOfComposition: 'ca. 120–100 BCE',
      dateOfEarliestSurvivingManuscript: '1QS (Qumran Cave 1, ca. 100–75 BCE, Shrine of the Book, Jerusalem)',
      numericCompositionBCE: -100
    },
    originalLanguage: 'Late Biblical Hebrew',
    summary: 'The charter document and disciplinary code of the Qumran Yahad community. Columns III.13–IV.26 contain the famous "Treatise on the Two Spirits", detailing how God created humanity to walk according to two conflicting spiritual principles: the Spirit of Truth (under the Prince of Lights) and the Spirit of Injustice (under the Angel of Darkness). Directly illuminates New Testament Johannine and Pauline theology of light vs darkness.',
    manuscriptHistory: 'Discovered in Cave 1 at Qumran in 1947 by Bedouin shepherds, fully preserved wrapped in linen inside an intact ceramic jar.',
    primaryManuscriptWitnesses: ['1QS (Cave 1 complete scroll)', '4Q255–264 (Cave 4 fragmentary copies)']
  },
  {
    id: 'jubilees_demons',
    title: 'The Book of Jubilees (Chapter 10: Binding of the Demons)',
    cultureId: 'second_temple_jewish',
    category: 'SECOND TEMPLE',
    chronology: {
      dateOfStorySetting: 'Post-flood generations of Noah',
      estimatedDateOfComposition: 'ca. 160–150 BCE',
      dateOfEarliestSurvivingManuscript: 'Qumran Hebrew scrolls 4Q216–224 (ca. 125–50 BCE); complete Ge\'ez manuscripts in Ethiopia',
      numericCompositionBCE: -150
    },
    originalLanguage: 'Hebrew (surviving in complete Ge\'ez translation)',
    summary: 'Chapter 10 recounts that after the Deluge, unclean demons (the spirits of the drowned Nephilim) began to lead astray and torment Noah\'s grandchildren. Noah prayed for deliverance, and God dispatched angels to bind them in the place of condemnation. However, Prince Mastema intervened, requesting that one-tenth of the demons remain at his command to test human free will. Provides the direct theological foundation for New Testament demonology.',
    manuscriptHistory: 'Held canonical status at Qumran (at least 15 copies found) and remains canonical in the Ethiopian Orthodox Tewahedo Church.',
    primaryManuscriptWitnesses: ['4Q216 (4QJub^a ar/heb)', 'EMML 4437 (Addis Ababa)']
  },
  {
    id: 'psalm_82',
    title: 'Psalm 82 (God Presiding in the Divine Assembly)',
    cultureId: 'hebrew_israelite',
    category: 'HEBREW BIBLE',
    chronology: {
      dateOfStorySetting: 'Heavenly Divine Council deliberation',
      estimatedDateOfComposition: 'ca. 8th–6th century BCE',
      dateOfEarliestSurvivingManuscript: '4QPsalms scrolls from Qumran (1st c. BCE); Aleppo and Leningrad Codices (10th/11th c. CE)',
      numericCompositionBCE: -700
    },
    originalLanguage: 'Biblical Hebrew',
    summary: 'A dramatic divine trial scene: Elohim takes his stand in the divine council (adat-El) and renders judgment among the gods (elohim): "How long will you judge unjustly and show partiality to the wicked?" He pronounces their cosmic sentence: "You are gods, sons of the Most High, all of you; nevertheless, like mortals you shall die, and fall like any prince." Quoted by Jesus in John 10:34.',
    manuscriptHistory: 'Preserved in the Asaph collection of the Hebrew Psalter.',
    primaryManuscriptWitnesses: ['11QPs^a', 'Aleppo Codex', 'Codex Leningradensis']
  },
  {
    id: 'deuteronomy_32',
    title: 'The Song of Moses (Deuteronomy 32:8–9)',
    cultureId: 'hebrew_israelite',
    category: 'HEBREW BIBLE',
    chronology: {
      dateOfStorySetting: 'Plains of Moab at the threshold of Canaan',
      estimatedDateOfComposition: 'Archaic poetic stratum (ca. 9th–8th century BCE)',
      dateOfEarliestSurvivingManuscript: '4QDeut^j and 4QDeut^q from Qumran (ca. 100 BCE); Septuagint Greek papyri',
      numericCompositionBCE: -750
    },
    originalLanguage: 'Archaic Biblical Hebrew',
    summary: 'The archaic poem Deuteronomy 32 preserves the famous theological crux in verses 8–9: in the Dead Sea Scrolls (4QDeut^j) and Septuagint, the Most High (Elyon) fixes the boundaries of the nations according to the number of the "sons of God" (bene elohim / aggelōn theou), while allocating Israel to Yahweh. The medieval Masoretic Text altered this reading to "sons of Israel" (bene yisrael) to avoid polytheistic implications.',
    manuscriptHistory: 'The Qumran discovery of 4QDeut^j in Cave 4 settled a centuries-long debate, proving the Septuagint preserved an authentic archaic Hebrew textual Vorlage.',
    primaryManuscriptWitnesses: ['4Q44 (4QDeut^q)', '4Q37 (4QDeut^j)', 'Codex Vaticanus Greek B']
  },
  {
    id: 'apocryphon_of_john',
    title: 'The Apocryphon of John (Secret Revelation of John)',
    cultureId: 'second_temple_jewish',
    category: 'SECOND TEMPLE',
    chronology: {
      dateOfStorySetting: 'Post-resurrection revelation on the Mount of Olives',
      estimatedDateOfComposition: 'ca. 120–150 CE (attested by Irenaeus in Adversus Haereses I.29 ca. 180 CE)',
      dateOfEarliestSurvivingManuscript: 'Nag Hammadi Codices II, III, IV and Berlin Codex 8502 (4th c. CE)',
      numericCompositionBCE: 140
    },
    originalLanguage: 'Sahidic Coptic (translated from lost Greek original)',
    summary: 'The central text of Sethian Gnosticism. Re-narrates Genesis through an esoteric cosmological lens: the arrogant demiurge Yaldabaoth creates the archons and physical cosmos, claiming to be the sole God. In its commentary on Genesis 6, the archons send angels who take women of earth, produce giants, and create the "counterfeit spirit" (antimimon pneuma) to ensnare humanity in material forgetfulness.',
    manuscriptHistory: 'Four surviving copies found among the Nag Hammadi codices in 1945 and the Berlin Gnostic Papyrus.',
    primaryManuscriptWitnesses: ['NHC II, 1', 'NHC III, 1', 'NHC IV, 1', 'Berlin Papyrus BG 8502, 2']
  },
  {
    id: 'baal_death_mot',
    title: 'The Baal Cycle: Combat with Mot (Death) & Resurgence',
    cultureId: 'canaanite_ugaritic',
    category: 'CANAANITE / UGARITIC',
    chronology: {
      dateOfStorySetting: 'Mythic cycle of fertility, drought, and cosmic kingship',
      estimatedDateOfComposition: 'ca. 1350–1200 BCE',
      dateOfEarliestSurvivingManuscript: 'Ras Shamra cuneiform tablets KTU 1.5–1.6 (Louvre / National Museum of Damascus)',
      numericCompositionBCE: -1250
    },
    originalLanguage: 'Ugaritic cuneiform',
    summary: 'Tablets V and VI of the Baal Cycle depict the supreme struggle between Baal (Hadad, storm god of rain and life) and Mot (the personification of Death, drought, and the underworld). Mot swallows Baal into his cavernous throat, causing cosmic mourning. The warrior goddess Anat confronts Mot, slaughters him with a blade, winnows him with a sieve, burns him with fire, grinds him with millstones, and sows him in the soil, sparking Baal\'s resurrection and the return of rain. Directly prefigures Isaiah 25:8 ("He will swallow up death forever").',
    manuscriptHistory: 'Scribed by the high priest Ilimilku of Shubanu during the reign of King Niqmaddu II of Ugarit; discovered by Claude Schaeffer in 1930.',
    primaryManuscriptWitnesses: ['KTU 1.5 (RS 2.[022] + RS 3.340)', 'KTU 1.6 (RS 2.[009] + RS 5.180)']
  }
];

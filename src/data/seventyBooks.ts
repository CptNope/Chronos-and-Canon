export interface SeventyBookCandidate {
  id: string;
  title: string;
  hebrewOrAramaicName?: string;
  approximateDateBCE: string;
  manuscriptWitnesses: string;
  genre: 'Apocalyptic' | 'Priestly / Halakhic' | 'Angelology / Liturgy' | 'Patriarchal Testament' | 'Esoteric Wisdom' | 'Calendrical / Astronomical';
  rationaleForInclusion: string;
  coreThemes: string[];
}

export const seventyBooksCollection = {
  title: "THE 70 BOOKS FOR THE WISE",
  biblicalSource: "2 Esdras / 4 Ezra 14:44–48",
  passageExegesis: "In forty days they wrote ninety-four books. And when the forty days were fulfilled, the Most High spoke to me, saying, 'Make public the twenty-four books that you wrote first, and let the worthy and the unworthy read them; but keep the seventy that were written last, in order to give them to the wise among your people. For in them is the spring of understanding, the fountain of wisdom, and the river of knowledge.'",
  scholarlyDisclaimer: "HISTORICAL RECONSTRUCTION / EXPLORATORY HYPOTHESIS: There is no surviving ancient canonical or sectarian catalog identifying the seventy esoteric books envisioned by the author of 4 Ezra (composed ca. 90–100 CE). This research collection compiles authentic surviving Second Temple Jewish works, Dead Sea Scrolls, and pseudepigrapha that embody the exact type of esoteric, apocalyptic, calendrical, angelological, and patriarchal revelatory literature restricted to initiates.",
  publicCanonNote: "The 24 books made public correspond to the standard rabbinic counting of the Hebrew Bible (Tanakh). The 70 'hidden' or reserved books represent the vast corpus of sectarian, visionary, and mystical literature known to Second Temple communities like Qumran and the circles producing 1 Enoch and Ezra apocalypses.",
  candidates: [
    {
      id: '1_enoch_watchers',
      title: '1 Enoch: Book of the Watchers (ch. 1–36)',
      hebrewOrAramaicName: 'ספר העירים (Book of Watchers)',
      approximateDateBCE: 'ca. 300–200 BCE',
      manuscriptWitnesses: 'Aramaic fragments from Qumran (4Q201–206); Greek fragments; complete classical Ge\'ez (Ethiopic) manuscripts',
      genre: 'Apocalyptic',
      rationaleForInclusion: 'The premier example of heavenly revelatory knowledge kept secret from the uninitiated, detailing angelology, cosmological secrets, and the punishment of the Watchers.',
      coreThemes: ['Rebellion of Watchers', 'Descent on Mount Hermon', 'Cosmic tour of Sheol', 'Mount of God']
    },
    {
      id: '1_enoch_astronomy',
      title: '1 Enoch: Astronomical Book (ch. 72–82)',
      hebrewOrAramaicName: 'ספר מהלך מאורות השמים',
      approximateDateBCE: 'ca. 3rd c. BCE (earliest attested Enochic writing at Qumran)',
      manuscriptWitnesses: 'Aramaic 4Q208–211 (4QEnastr^a–d ar); Ge\'ez',
      genre: 'Calendrical / Astronomical',
      rationaleForInclusion: 'Reveals the 364-day solar calendar directly imparted to Enoch by the angel Uriel, fundamental to sectarian polemics against the lunar calendar used in the Jerusalem temple.',
      coreThemes: ['Solar vs Lunar cycles', 'Heavenly gates of the sun and stars', 'Uriel\'s instruction']
    },
    {
      id: '1_enoch_similitudes',
      title: '1 Enoch: Book of Similitudes / Parables (ch. 37–71)',
      hebrewOrAramaicName: 'משלי חנוך',
      approximateDateBCE: 'ca. 50 BCE – 50 CE',
      manuscriptWitnesses: 'Preserved exclusively in Ge\'ez (Ethiopic)',
      genre: 'Apocalyptic',
      rationaleForInclusion: 'Esoteric revelation of the heavenly "Son of Man" / "Righteous One" seated on the Throne of Glory executing eschatological judgment on kings and the mighty.',
      coreThemes: ['The Chosen One', 'Son of Man on the throne of glory', 'Cosmic reversal of the powerful']
    },
    {
      id: 'book_of_giants',
      title: 'Book of Giants (Dead Sea Scrolls)',
      hebrewOrAramaicName: 'ספר הענקים',
      approximateDateBCE: 'ca. 200–100 BCE',
      manuscriptWitnesses: '1Q23, 1Q24, 4Q203, 4Q530, 4Q531, 4Q532; later Manichaean versions',
      genre: 'Apocalyptic',
      rationaleForInclusion: 'An esoteric expansion of the Enochic myth recounting the dreams and distress of the giant offspring (Mahway, Ohya, Hahya) who invoke Gilgamesh and Hobabish.',
      coreThemes: ['Giant nightmares of cosmic destruction', 'Tablets immersed in water', 'Enoch as cosmic interpreter']
    },
    {
      id: 'jubilees',
      title: 'Book of Jubilees (Little Genesis)',
      hebrewOrAramaicName: 'ספר היובלים / ברית משה',
      approximateDateBCE: 'ca. 160–140 BCE',
      manuscriptWitnesses: 'At least 15 Hebrew manuscripts at Qumran (e.g., 4Q216–224); complete Ge\'ez; Latin palimpsests',
      genre: 'Priestly / Halakhic',
      rationaleForInclusion: 'Dictated to Moses by the "Angel of the Presence" on Mount Sinai, containing the secret division of world history into jubilees and weeks of years, hidden from the general populace.',
      coreThemes: ['364-day calendar', 'Angelic origin of patriarchal laws', 'Mastema and demonic spirits']
    },
    {
      id: 'genesis_apocryphon',
      title: 'Genesis Apocryphon (1Q20)',
      hebrewOrAramaicName: 'מגילת בראשית החיצונית',
      approximateDateBCE: 'ca. 1st c. BCE',
      manuscriptWitnesses: '1Q20 (Cave 1, one of original seven scrolls)',
      genre: 'Patriarchal Testament',
      rationaleForInclusion: 'First-person Aramaic memoirs of Lamech, Noah, and Abraham, presenting confidential patriarchal experiences, including Lamech suspecting his son was sired by a Watcher.',
      coreThemes: ['Birth of Noah', 'Sarah\'s exquisite beauty', 'Abraham\'s vision of the cedar and palm']
    },
    {
      id: 'aramaic_levi_document',
      title: 'Aramaic Levi Document (ALD)',
      hebrewOrAramaicName: 'דברי לוי בארמית',
      approximateDateBCE: 'ca. 3rd–2nd c. BCE',
      manuscriptWitnesses: '1Q21, 4Q213–214; Cairo Genizah fragments; Greek Mount Athos MS',
      genre: 'Priestly / Halakhic',
      rationaleForInclusion: 'Provides the secret priestly ordination of Levi by angels and secret sacrificial halakha transmitted from Isaac and Abraham.',
      coreThemes: ['Angelic investiture of Levi', 'Purity of the priesthood', 'Exhortation to wisdom']
    },
    {
      id: 'visions_of_amram',
      title: 'Visions of Amram (4Q543–548)',
      hebrewOrAramaicName: 'חזון עמרם',
      approximateDateBCE: 'ca. 2nd c. BCE',
      manuscriptWitnesses: '4Q543, 4Q544, 4Q545, 4Q546, 4Q547, 4Q548',
      genre: 'Patriarchal Testament',
      rationaleForInclusion: 'Records Moses\' father Amram seeing two supernatural angelic rulers contending over him: the Prince of Light (Michael/Melchizedek) and the Prince of Darkness (Melki-resha/Belial).',
      coreThemes: ['Dualism of light and darkness', 'Melkizedek vs Melki-resha', 'Angelic custody of souls']
    },
    {
      id: 'testament_of_qahat',
      title: 'Testament of Qahat (4Q542)',
      hebrewOrAramaicName: 'צוואת קהת',
      approximateDateBCE: 'ca. 2nd c. BCE',
      manuscriptWitnesses: '4Q542 (Aramaic scroll fragment)',
      genre: 'Patriarchal Testament',
      rationaleForInclusion: 'The testamentary transmission of sacred esoteric books from Levi to Qahat to Amram to Moses, establishing an unbroken lineage of secret wisdom.',
      coreThemes: ['Chain of secret books', 'Preservation of priestly heritage', 'Warnings against corrupt seed']
    },
    {
      id: 'pseudo_daniel',
      title: 'Pseudo-Daniel (4Q243–245)',
      hebrewOrAramaicName: 'חזיונות דניאל החיצוני',
      approximateDateBCE: 'ca. 100 BCE',
      manuscriptWitnesses: '4Q243, 4Q244, 4Q245 (Aramaic)',
      genre: 'Apocalyptic',
      rationaleForInclusion: 'Expands the canonical Book of Daniel with court revelations before the Babylonian king, surveying primeval history from Noah through the exile and the final deliverance.',
      coreThemes: ['Court legends of Daniel', 'Periodization of world history', 'Eschatological restoration']
    },
    {
      id: 'pseudo_ezekiel',
      title: 'Pseudo-Ezekiel (4Q385–388)',
      hebrewOrAramaicName: 'חזון יחזקאל החיצוני',
      approximateDateBCE: 'ca. 100 BCE',
      manuscriptWitnesses: '4Q385, 4Q386, 4Q387, 4Q388 (Hebrew)',
      genre: 'Apocalyptic',
      rationaleForInclusion: 'Prophetic revelations expanding Ezekiel\'s vision of the Valley of Dry Bones, promising bodily resurrection and cosmological signs to the righteous elect.',
      coreThemes: ['Resurrection of righteous Israel', 'Acceleration of time before the end', 'Merkavah chariot motifs']
    },
    {
      id: 'new_jerusalem',
      title: 'New Jerusalem Text',
      hebrewOrAramaicName: 'ירושלים החדשה',
      approximateDateBCE: 'ca. 2nd c. BCE',
      manuscriptWitnesses: '1Q32, 2Q24, 4Q554, 4Q555, 5Q15, 11Q18 (Aramaic)',
      genre: 'Apocalyptic',
      rationaleForInclusion: 'An angel guides the visionary through the eschatological city of Jerusalem with a measuring rod, detailing colossal gates, streets, and temple architecture.',
      coreThemes: ['Angelic architecture measurements', 'Eschatological twelve gates', 'Feasts in the renewed city']
    },
    {
      id: 'book_of_mysteries',
      title: 'Book of Mysteries (1Q27, 4Q299–301)',
      hebrewOrAramaicName: 'ספר הרזים / דברי המאורות',
      approximateDateBCE: 'ca. 100 BCE',
      manuscriptWitnesses: '1Q27, 4Q299, 4Q300, 4Q301 (Hebrew)',
      genre: 'Esoteric Wisdom',
      rationaleForInclusion: 'Focuses explicitly on the "mystery of existence / that which is to come" (Raz Nihyeh), explaining why foolish sages fail to perceive the divine plan while the elect perceive it.',
      coreThemes: ['Raz Nihyeh (Mystery of Becoming)', 'Failure of worldly sorcerers', 'Vanishing of injustice like smoke']
    },
    {
      id: 'songs_sabbath_sacrifice',
      title: 'Songs of the Sabbath Sacrifice (Angelic Liturgy)',
      hebrewOrAramaicName: 'שירות עולת השבת',
      approximateDateBCE: 'ca. 100 BCE',
      manuscriptWitnesses: '4Q400–407, 11Q17, Masada fragment (Mas1k)',
      genre: 'Angelology / Liturgy',
      rationaleForInclusion: 'Thirteen poetic liturgies for the first thirteen Sabbaths of the year, invoking the seven angelic priesthoods worshipping God in the heavenly celestial sanctuaries.',
      coreThemes: ['Seven chief princes among angels', 'Heavenly Merkabah chariot', 'Praise in angelic tongues']
    },
    {
      id: 'temple_scroll',
      title: 'The Temple Scroll (11Q19 / 11Q20)',
      hebrewOrAramaicName: 'מגילת המקדש',
      approximateDateBCE: 'ca. 150–120 BCE',
      manuscriptWitnesses: '11Q19, 11Q20, 4Q524 (longest surviving Dead Sea Scroll, over 8 meters)',
      genre: 'Priestly / Halakhic',
      rationaleForInclusion: 'Presents God speaking in the first person directly to Moses (rewriting Exodus, Leviticus, and Deuteronomy) detailing an ideal, gigantic concentric temple and sacred laws.',
      coreThemes: ['Concentric sacred architecture', 'Law of the King', 'Ultra-strict ritual purity']
    },
    {
      id: 'melchizedek_11q13',
      title: 'Melchizedek Document (11Q13 / 11QMelch)',
      hebrewOrAramaicName: 'מגילת מלכי־צדק',
      approximateDateBCE: 'ca. 120–80 BCE',
      manuscriptWitnesses: '11Q13 (Cave 11 Hebrew scroll)',
      genre: 'Apocalyptic',
      rationaleForInclusion: 'Identifies the enigmatic king-priest Melchizedek as an exalted archangelic champion who leads the holy angels to overthrow Belial and liberate the righteous on the tenth Jubilee.',
      coreThemes: ['Melchizedek as divine judge (Elohim of Ps 82)', 'Tenth Jubilee liberation', 'Defeat of Belial and spirits of his lot']
    },
    {
      id: 'testaments_twelve_patriarchs',
      title: 'Testaments of the Twelve Patriarchs',
      hebrewOrAramaicName: 'צוואות שנים עשר השבטים',
      approximateDateBCE: 'ca. 2nd c. BCE (Semitic base with later Christian glosses)',
      manuscriptWitnesses: 'Greek manuscripts; Hebrew/Aramaic precursors at Qumran (Testament of Levi, Judah, Joseph)',
      genre: 'Patriarchal Testament',
      rationaleForInclusion: 'The farewell discourses of Jacob\'s twelve sons instructing their offspring in moral virtues, revealing prophetic visions of their tribes\' future down to the end of days.',
      coreThemes: ['Two spirits in humankind (truth vs deceit)', 'Dual messiahship (Priestly Levi & Royal Judah)', 'Eschatological peace']
    },
    {
      id: 'testament_of_moses',
      title: 'Testament of Moses (Assumption of Moses)',
      hebrewOrAramaicName: 'צוואת משה',
      approximateDateBCE: 'ca. early 1st c. CE (drawing on Antiochus IV crisis)',
      manuscriptWitnesses: 'Latin 6th-century palimpsest discovered in Milan; referenced by Origen and Jude 9',
      genre: 'Apocalyptic',
      rationaleForInclusion: 'Moses reveals to Joshua the secret history of Israel and instructs him to preserve the sacred books in earthen vessels until the day of repentance and cosmic renewal.',
      coreThemes: ['Secret books preserved in jars', 'Taxo and righteous martyrdom', 'Archangel Michael avenging righteous Israel']
    },
    {
      id: '2_baruch',
      title: '2 Baruch (Syriac Apocalypse of Baruch)',
      hebrewOrAramaicName: 'חזון ברוך',
      approximateDateBCE: 'ca. 95–115 CE (contemporary with 4 Ezra)',
      manuscriptWitnesses: 'Complete in 6th-century Syriac manuscript (Milan); small Greek fragment (P.Oxy. 403)',
      genre: 'Apocalyptic',
      rationaleForInclusion: 'Jeremiah\'s scribe Baruch receives revelations on Mount Zion weeping over the destruction of the Temple, asking why God permits the wicked nations to prosper over Israel.',
      coreThemes: ['Hidden vessels of the first Temple', 'The Messianic banquet (Behemoth and Leviathan food)', 'Consolation of the elect through Torah']
    },
    {
      id: 'psalms_of_solomon',
      title: 'Psalms of Solomon',
      hebrewOrAramaicName: 'מזמורי שלמה',
      approximateDateBCE: 'ca. 63–40 BCE (following Roman general Pompey capturing Jerusalem)',
      manuscriptWitnesses: 'Preserved in Greek and Syriac manuscripts',
      genre: 'Esoteric Wisdom',
      rationaleForInclusion: 'Eighteen non-canonical poetic psalms reflecting on the Roman desecration of the sanctuary, culminating in Psalm 17\'s renowned prayer for the Davidic Messiah.',
      coreThemes: ['The Davidic King-Messiah', 'Chastisement of the ungodly', 'Purification of Jerusalem from foreign defilement']
    }
  ]
};

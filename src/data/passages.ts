import { Passage } from '../types';

export const passages: Passage[] = [
  // --- GENESIS 6 FLAGSHIP PASSAGES ---
  {
    id: 'gen_6_1_4',
    textId: 'genesis',
    reference: 'Genesis 6:1–4',
    title: 'The Sons of God, Nephilim, and Ancient Gibborim',
    cultureId: 'hebrew_israelite',
    chronology: {
      dateOfStorySetting: 'Antediluvian Era (immediately preceding the Deluge)',
      estimatedDateOfComposition: 'ca. 6th–5th century BCE (drawing on archaic West Semitic mythic fragments)',
      dateOfEarliestSurvivingManuscript: '4QGen^b (ca. 150 BCE); Septuagint Greek papyri (3rd c. BCE); Aleppo / Leningrad Codices (10th/11th c. CE)',
      numericCompositionBCE: -550
    },
    originalLanguage: 'Biblical Hebrew',
    originalText: `וַיְהִי כִּֽי־הֵחֵל הָֽאָדָם לָרֹב עַל־פְּנֵי הָֽאֲדָמָה וּבָנוֹת יֻלְּדוּ לָהֶֽם׃ וַיִּרְאוּ בְנֵי־הָֽאֱלֹהִים אֶת־בְּנוֹת הָֽאָדָם כִּי טֹבֹת הֵנָּה וַיִּקְחוּ לָהֶם נָשִׁים מִכֹּל אֲשֶׁר בָּחָֽרוּ׃ ... הַנְּפִלִים הָיוּ בָאָרֶץ בַּיָּמִים הָהֵם וְגַם אַֽחֲרֵי־כֵן אֲשֶׁר יָבֹאוּ בְּנֵי הָֽאֱלֹהִים אֶל־בְּנוֹת הָֽאָדָם וְיָלְדוּ לָהֶם הֵמָּה הַגִּבֹּרִים אֲשֶׁר מֵעוֹלָם אַנְשֵׁי הַשֵּֽׁם׃`,
    transliteration: `Wayəhī kī-hēḥēl hā-ʾādām lā-rōv ʿal-pənē hā-ʾădāmāh ū-vānōt yullədū lāhem: Wa-yīrʾū bənē hā-ʾĕlōhīm ʾet-bənōt hā-ʾādām kī ṭōvōt hēnnāh wa-yiqqəḥū lāhem nāšīm mik-kōl ʾăšer bāḥārū... Han-nəfīlīm hāyū vā-ʾāretz bay-yāmīm hā-hēm wə-gam ʾaḥărē-kēn ʾăšer yāvōʾū bənē hā-ʾĕlōhīm ʾel-bənōt hā-ʾādām wə-yālədū lāhem, hēmmāh hag-gibbōrīm ʾăšer mē-ʿōlām ʾanšē haš-šēm.`,
    englishTranslation: `When human beings began to increase in number on the earth and daughters were born to them, the sons of God saw that the daughters of humans were beautiful, and they married any of them they chose. ... The Nephilim were on the earth in those days—and also afterward—when the sons of God went to the daughters of humans and had children by them. They were the heroes of old, men of renown.`,
    translationAttribution: {
      translator: 'Scholarly Standard Translation (based on English Revised & Jewish Publication Society Tanakh)',
      sourceWork: 'The Holy Scriptures / Tanakh',
      year: '1917 / Public Domain edition',
      license: 'Public Domain',
      attributionNotice: 'Public Domain Biblical Hebrew textual edition conforming to the Masoretic Text (BHS).'
    },
    motifs: ['divine_human_offspring', 'giants', 'heroic_ages', 'watchers_rebellion'],
    clickableTerms: ['bene_haelohim', 'nephilim', 'gibborim'],
    criticalApparatusNotes: 'Septuagint (Codex Alexandrinus) translates bene ha-elohim as οἱ υἱοὶ τοῦ θεοῦ (the sons of God), while several significant LXX manuscripts read οἱ ἄγγελοι τοῦ θεοῦ (the angels of God). Nephilim is translated as οἱ γίγαντες (the giants).'
  },
  {
    id: '1_enoch_6_1_6',
    textId: '1_enoch',
    reference: '1 Enoch 6:1–6',
    title: 'The Pact of the Two Hundred Watchers on Mount Hermon',
    cultureId: 'second_temple_jewish',
    chronology: {
      dateOfStorySetting: 'Days of Jared (Generation prior to Enoch and Deluge)',
      estimatedDateOfComposition: 'ca. 250–200 BCE (Book of the Watchers)',
      dateOfEarliestSurvivingManuscript: '4Q201 (4QEn^a ar, Aramaic scroll from Qumran, ca. 200–150 BCE); Greek in Codex Panopolitanus; Ge\'ez MSS',
      numericCompositionBCE: -250
    },
    originalLanguage: 'Aramaic (with surviving Greek and Ge\'ez recensions)',
    originalText: `[Greek Akhmim / 4Q201]: Ὅτε ἐπληθύνθησαν οἱ υἱοὶ τῶν ἀνθρώπων, ἐγεννήθησαν αὐτοῖς θυγατέρες ὡραῖαι... καὶ ἐθεάσαντο αὐτὰς οἱ ἄγγελοι υἱοὶ οὐρανοῦ καὶ ἐπεθύμησαν αὐτάς... Καὶ ἦσαν οὗτοι διακόσιοι οἱ καταβάντες ἐν ταῖς ἡμέραις Ἰάρεδ εἰς τὴν κορυφὴν τοῦ Ἑרμονιεὶμ ὄρους.`,
    transliteration: `Hote eplēthynthēsan hoi huioi tōn anthrōpōn, egennēthēsan autois thygateres hōraiai... kai etheasanto autas hoi angeloi huioi ouranou kai epethymēsan autas... Kai ēsan houtoi diakosioi hoi katabantes en tais hēmerais Iared eis tēn koryphēn tou Hermonieim orous.`,
    englishTranslation: `And when the sons of men had multiplied, in those days beautiful and comely daughters were born to them. And the angels, the sons of heaven, saw them and lusted after them, and said to one another: 'Come, let us choose for ourselves wives from the daughters of men, and beget children for ourselves.' And Shemihazah, who was their leader, said to them: 'I fear you will not agree to do this deed, and I alone shall suffer the penalty of a great sin.' And they all answered him and said: 'Let us all swear an oath, and bind ourselves by mutual imprecations not to abandon this counsel, but to carry out this deed.' Then they all swore together and bound themselves by mutual imprecations upon it. And they were altogether two hundred, who descended in the days of Jared upon the summit of Mount Hermon; and they called the mountain Hermon, because they had sworn and bound themselves by mutual imprecations upon it.`,
    translationAttribution: {
      translator: 'R.H. Charles',
      sourceWork: 'The Apocrypha and Pseudepigrapha of the Old Testament, Vol. II',
      year: '1913',
      license: 'Public Domain',
      attributionNotice: 'Classic critical edition of 1 Enoch by Robert Henry Charles (Clarendon Press, Oxford).'
    },
    motifs: ['watchers_rebellion', 'divine_human_offspring', 'sacred_mountains'],
    clickableTerms: ['watchers', 'bene_haelohim'],
    criticalApparatusNotes: 'Mount Hermon (חֶרְמוֹן) is explicitly connected via popular folk etymology to the Semitic root ח-ר-ם (ḥ-r-m, "sacred ban, curse, mutual devotion under oath").'
  },
  {
    id: '1_enoch_7_1_5',
    textId: '1_enoch',
    reference: '1 Enoch 7:1–5',
    title: 'The Birth of the Giants and Devouring of the Earth',
    cultureId: 'second_temple_jewish',
    chronology: {
      dateOfStorySetting: 'Antediluvian Era',
      estimatedDateOfComposition: 'ca. 250–200 BCE',
      dateOfEarliestSurvivingManuscript: '4Q201 (4QEn^a ar) & 4Q204 (4QEn^c ar, Dead Sea Scrolls)',
      numericCompositionBCE: -250
    },
    originalLanguage: 'Aramaic / Classical Ge\'ez',
    originalText: `[Ethiopic]: ወፀንሳ፡ ወወለዳ፡ ዐበይተ፡ ረዓይተ፡ ዘቁመቶሙ፡ ሠለስተ፡ ምዕት፡ እመት... ወእምዝ፡ አክሀዱ፡ ሰብእ፡ እምአልህቆቶሙ፡ ገብሩ፡ ረዓይት፡ ኀበ፡ ሰብእ፡ ከመ፡ ይብልዑዎሙ።`,
    transliteration: `wa-ṣanśā wa-waladā ʿabayta raʿāyta za-qōmatōmū šalasta məʿt ʾəmat...`,
    englishTranslation: `And they took wives for themselves, each choosing one for himself, and they began to go in to them and defile themselves with them. And they taught them sorcery and incantations, and the cutting of roots, and made them acquainted with plants. And the women conceived and bore great giants, whose height was three thousand cubits [variant in Greek syncellus: three hundred cubits]. These devoured all the acquisitions of mankind until men could no longer sustain them. Then the giants turned against men in order to devour them. And they began to sin against birds, and beasts, and reptiles, and fish, and to devour one another's flesh, and drink the blood. Then the earth laid accusation against the lawless ones.`,
    translationAttribution: {
      translator: 'R.H. Charles',
      sourceWork: 'The Book of Enoch',
      year: '1912',
      license: 'Public Domain',
      attributionNotice: 'Public Domain translation from Ethiopic and Greek Syncellus recensions.'
    },
    motifs: ['giants', 'forbidden_knowledge', 'divine_human_offspring'],
    clickableTerms: ['watchers', 'nephilim', 'gibborim'],
    criticalApparatusNotes: 'The astronomical number "three thousand cubits" in some Ethiopic MSS is an ancient scribal corruption of 300 cubits or 30 cubits (approx. 45–450 feet), reflecting legendary hyperbole.'
  },
  {
    id: '1_enoch_10_4_8',
    textId: '1_enoch',
    reference: '1 Enoch 10:4–8',
    title: 'The Binding of Azazel in the Desert of Dudael',
    cultureId: 'second_temple_jewish',
    chronology: {
      dateOfStorySetting: 'Antediluvian judgment before the Deluge',
      estimatedDateOfComposition: 'ca. 250–200 BCE',
      dateOfEarliestSurvivingManuscript: '4Q202 (4QEn^b ar, Dead Sea Scrolls, ca. 200 BCE)',
      numericCompositionBCE: -250
    },
    originalLanguage: 'Aramaic',
    originalText: `[Greek Syncellus / 4Q202]: Καὶ τῷ Ῥαφαὴλ εἶπεν· Δῆσον τὸν Ἀζαὴλ ποσὶ καὶ χερσὶ καὶ βάλε αὐτὸν εἰς τὸ σκότος· καὶ ἄνοιξον τὴν ἔρημον τὴν οὖσαν ἐν τῷ Δουδαὴλ καὶ ἐκεῖ βάλε αὐτόν. Καὶ ὑπόθες αὐτῷ λίθους ὀξεῖς καὶ λίθους τραχεῖς, καὶ ἐπικάλυψον αὐτῷ τῷ σκότει... ὅπως ἐν τῇ ἡμέρᾳ τῆς κρίσεως ἀπαχθῇ εἰς τὸν ἐμπυρισμὸν τοῦ πυρός. Καὶ ἴασαι τὴν γῆν ἣν ἠφάνισαν οἱ ἄγγελοι... καὶ πᾶσαν τὴν ἁμαρτίαν ἐπίγραψον τῷ Ἀζαήλ.`,
    transliteration: `Kai tō Raphael eipen: Dēson ton Azaēl posi kai chersi kai bale auton eis to skotos... kai pasan tēn hamartian epigrapson tō Azaēl.`,
    englishTranslation: `And again the Lord said to Raphael: 'Bind Azazel hand and foot, and cast him into the darkness: and make an opening in the desert, which is in Dudael, and cast him therein. And place upon him rough and jagged rocks, and cover him with darkness, and let him abide there for ever, and cover his face that he may not see light. And on the day of the great judgment he shall be cast into the fire. And heal the earth which the angels have defiled... and to him ascribe all sin!'`,
    translationAttribution: {
      translator: 'R.H. Charles',
      sourceWork: 'The Book of Enoch',
      year: '1912',
      license: 'Public Domain',
      attributionNotice: 'Public Domain.'
    },
    motifs: ['watchers_rebellion', 'forbidden_knowledge'],
    clickableTerms: ['azazel', 'watchers'],
    criticalApparatusNotes: 'Direct apocalyptic midrash upon Leviticus 16:8–10 (the scapegoat for Azazel into the desert). The name Dudael derives from Hebrew Beth Hadudo / Har Hadudo (the jagged cliff in the Judean desert where the Yom Kippur scapegoat was pushed off according to Mishnah Yoma 6:4).'
  },
  {
    id: 'leviticus_16_8_10',
    textId: 'leviticus',
    reference: 'Leviticus 16:8–10, 21–22',
    title: 'The Scapegoat for Azazel in the Day of Atonement',
    cultureId: 'hebrew_israelite',
    chronology: {
      dateOfStorySetting: 'Sinai Tabernacle',
      estimatedDateOfComposition: 'ca. 6th–5th century BCE',
      dateOfEarliestSurvivingManuscript: '4QpaleoLev^a (ca. 150 BCE); Aleppo Codex',
      numericCompositionBCE: -500
    },
    originalLanguage: 'Biblical Hebrew',
    originalText: `וְנָתַן אַהֲרֹן עַל־שְׁנֵי הַשְּׂעִירִם גּוֹרָלוֹת גּוֹרָל אֶחָד לַיהוָה וְגוֹרָל אֶחָד לַעֲזָאזֵל׃ וְהִקְרִיב אַהֲרֹן אֶת־הַשָּׂעִיר אֲשֶׁר עָלָה עָלָיו הַגּוֹרָל לַיהוָה וְעָשָׂהוּ חַטָּאת׃ וְהַשָּׂעִיר אֲשֶׁר עָלָה עָלָיו הַגּוֹרָל לַעֲזָאזֵל יָעֳמַד־חַי לִפְנֵי יְהוָה לְכַפֵּר עָלָיו לְשַׁלַּח אֹתוֹ לַעֲזָאזֵל הַמִּדְבָּֽרָה׃`,
    transliteration: `Wə-nātan ʾAhărōn ʿal-šənē haś-śəʿīrim gōrālōt: gōrāl ʾeḥād la-Yahweh wə-gōrāl ʾeḥād la-ʿAzāʾzēl. Wə-hiqrīv ʾAhărōn ʾet-haś-śāʿīr ʾăšer ʿālāh ʿālāw hag-gōrāl la-Yahweh wə-ʿāśāhū ḥaṭṭāʾt. Wə-haś-śāʿīr ʾăšer ʿālāh ʿālāw hag-gōrāl la-ʿAzāʾzēl yoʿŏmad-ḥay lifnē Yahweh lə-kappēr ʿālāw, lə-šallaḥ ʾōtō la-ʿAzāʾzēl ham-midbārāh.`,
    englishTranslation: `Aaron shall cast lots over the two goats: one lot for the LORD and the other lot for Azazel [לַעֲזָאזֵל]. And Aaron shall present the goat on which the lot fell for the LORD and make it a sin offering. But the goat on which the lot fell for Azazel shall be presented alive before the LORD to make atonement over it, and sent away into the wilderness to Azazel. The goat shall bear all their iniquities upon itself into a solitary land.`,
    translationAttribution: {
      translator: 'JPS',
      sourceWork: 'The Holy Scriptures (Masoretic Text)',
      year: '1917',
      license: 'Public Domain',
      attributionNotice: 'Public Domain.'
    },
    motifs: ['watchers_rebellion'],
    clickableTerms: ['azazel'],
    criticalApparatusNotes: 'Parallel structure: "one lot for Yahweh (la-Yahweh), one lot for Azazel (la-Azazel)" indicates Azazel was understood as a personal supernatural entity opposing God, ruler of the demonic wasteland.'
  },
  {
    id: '1_enoch_1_9',
    textId: '1_enoch',
    reference: '1 Enoch 1:9',
    title: 'The Theophany of Cosmic Judgment (Source of Jude 14–15)',
    cultureId: 'second_temple_jewish',
    chronology: {
      dateOfStorySetting: 'End of Days eschatological theophany',
      estimatedDateOfComposition: 'ca. 250–200 BCE',
      dateOfEarliestSurvivingManuscript: '4Q204 Col. I (4QEn^c ar, ca. 100–50 BCE); Greek Akhmim fragment',
      numericCompositionBCE: -250
    },
    originalLanguage: 'Aramaic',
    originalText: `[4Q204 frg. 1 / Greek Akhmim]: Ὅτι ἔρχεται σὺν ταῖς μυριάσιν αὐτοῦ καὶ τοῖς ἁγίοις αὐτοῦ, ποιῆσαι κρίσιν κατὰ πάντων, καὶ ἀπολέσαι πάντας τοὺς ἀσεβεῖς, καὶ ἐλέγξαι πᾶσαν σάρκα περὶ πάντων τῶν ἔργων τῆς ἀσεβείας αὐτῶν ὧν ἠσέβησαν...`,
    transliteration: `Hoti erchetai syn tais myriasin autou kai tois hagiois autou, poiēsai krisin kata pantōn, kai apolesai pantas tous asebeis, kai elenxai pasan sarka...`,
    englishTranslation: `And behold! He cometh with ten thousands of His holy ones to execute judgment upon all, and to destroy all the ungodly: and to convict all flesh of all the works of their ungodliness which they have ungodly committed, and of all the hard things which ungodly sinners have spoken against Him.`,
    translationAttribution: {
      translator: 'R.H. Charles',
      sourceWork: 'The Book of Enoch',
      year: '1912',
      license: 'Public Domain',
      attributionNotice: 'Public Domain critical edition.'
    },
    motifs: ['apocalypse', 'divine_council'],
    clickableTerms: ['watchers'],
    criticalApparatusNotes: 'Directly cited in the New Testament by Jude 14–15, representing one of the most explicit cases of canonical dependence on non-canonical pseudepigrapha.'
  },
  {
    id: 'jude_6_and_14_15',
    textId: 'jude',
    reference: 'Jude 6, 14–15',
    title: 'Angels Bound in Darkness & Explicit Quotation of Enoch',
    cultureId: 'early_christian',
    chronology: {
      dateOfStorySetting: 'Apostolic era citing primeval events',
      estimatedDateOfComposition: 'ca. 60–80 CE',
      dateOfEarliestSurvivingManuscript: 'Papyrus 72 (ca. 300 CE); Codex Sinaiticus (ca. 350 CE)',
      numericCompositionBCE: 65
    },
    originalLanguage: 'Koine Greek',
    originalText: `[v. 6]: ἀγγέλους τε τοὺς μὴ τηρήσαντας τὴν ἑαυτῶν ἀρχὴν ἀλλὰ ἀπολιπόντας τὸ ἴδιον οἰκητήριον εἰς κρίσιν μεγάλης ἡμέρας δεσμοῖς ἀϊδίοις ὑπὸ ζόφον τετήρηκεν... [v. 14–15]: Προεφήτευσεν δὲ καὶ τούτοις ἕβδομος ἀπὸ Ἀδὰμ Ἑνὼχ λέγων· Ἰδοὺ ἦλθεν Κύριος ἐν ἁγίαις μυριάσιν αὐτοῦ, ποιῆσαι κρίσιν κατὰ πάντων καὶ ἐλέγξαι πάντας τοὺς ἀσεβεῖς περὶ πάντων τῶν ἔργων ἀσεβείας αὐτῶν ὧν ἠσέβησαν καὶ περὶ πάντων τῶν σκληρῶν ὧν ἐλάλησαν κατ' αὐτοῦ ἁμαρτωλοὶ ἀσεβεῖς.`,
    transliteration: `angelous te tous mē tērēsantas tēn heautōn archēn alla apolipontas to idion oikētērion eis krisin megalēs hēmeras desmois aïdiois hypo zophon tetērēken... Proephēteusen de kai toutois hebdomos apo Adam Henōch legōn: Idou ēlthen Kyrios en hagiais myriasin autou, poiēsai krisin kata pantōn...`,
    englishTranslation: `[v. 6]: And the angels who did not keep their positions of authority but abandoned their proper dwelling—these he has kept in darkness, bound with everlasting chains for judgment on the great Day. ... [v. 14–15]: Enoch, the seventh from Adam, prophesied about them: 'See, the Lord is coming with thousands upon thousands of his holy ones to judge everyone, and to convict all of them of all the ungodly acts they have committed in their ungodliness, and of all the defiant words ungodly sinners have spoken against him.'`,
    translationAttribution: {
      translator: 'Scholarly Public Domain NT Translation',
      sourceWork: 'New Testament in the Original Greek (Westcott & Hort base)',
      year: '1881 / Public Domain',
      license: 'Public Domain',
      attributionNotice: 'Public Domain textual rendering.'
    },
    motifs: ['watchers_rebellion', 'apocalypse', 'divine_council'],
    clickableTerms: ['watchers', 'bene_haelohim'],
    criticalApparatusNotes: 'Jude 14 explicitly identifies the author as "Enoch, the seventh from Adam" (ἑβδομος ἀπὸ Ἀδάμ), verbatim using the ancient formula found in 1 Enoch 60:8 and Jubilees 7:39.'
  },
  {
    id: '2_peter_2_4_5',
    textId: '2_peter',
    reference: '2 Peter 2:4–5',
    title: 'The Cast into Tartarus and the Ancient World Deluge',
    cultureId: 'early_christian',
    chronology: {
      dateOfStorySetting: 'Apostolic era invoking primeval judgment',
      estimatedDateOfComposition: 'ca. 65–100 CE',
      dateOfEarliestSurvivingManuscript: 'Papyrus 72 (ca. 300 CE); Codex Sinaiticus (ca. 350 CE)',
      numericCompositionBCE: 80
    },
    originalLanguage: 'Koine Greek',
    originalText: `Εἰ γὰρ ὁ θεὸς ἀγγέλων ἁμαρτησάντων οὐκ ἐφείσατο, ἀλλὰ σειραῖς ζόφου ταρταρώσας παρέδωκεν εἰς κρίσιν τηρουμένους, καὶ ἀρχαίου κόσμου οὐκ ἐφείσατο, ἀλλὰ ὄγδοον Νῶε δικαιοσύνης κήρυκα ἐφύλαξεν, κατακλυσμὸν κόσμῳ ἀσεβῶν ἐπάξας...`,
    transliteration: `Ei gar ho theos angelōn hamartēsantōn ouk epheisato, alla seirais zophou tartarōsas paredōken eis krisin tēroumenous, kai archaiou kosmou ouk epheisato, alla ogdoon Nōe dikaiosynēs kēryka ephylaxen, kataklysmon kosmō asebōn epaxas...`,
    englishTranslation: `For if God did not spare angels when they sinned, but cast them into Tartarus [ταρταρώσας], committing them to chains of gloomy darkness to be held for judgment; and if he did not spare the ancient world, but preserved Noah, a herald of righteousness, with seven others, when he brought a flood upon the world of the ungodly...`,
    translationAttribution: {
      translator: 'Scholarly Public Domain NT Translation',
      sourceWork: 'New Testament Greek Text & Translation',
      year: '1901',
      license: 'Public Domain',
      attributionNotice: 'Public Domain.'
    },
    motifs: ['watchers_rebellion', 'great_flood'],
    clickableTerms: ['watchers', 'tartarus'],
    criticalApparatusNotes: 'The hapax legomenon verb ταρταρόω (tartaroō) is uniquely used in the entire Greek Bible here, directly borrowing the classical Greek mythological abyss where the rebellious Titans were chained (Hesiod Theogony 718).'
  },
  {
    id: 'revelation_12_7_9',
    textId: 'revelation',
    reference: 'Revelation 12:7–9',
    title: 'War in Heaven: Michael Slaying the Dragon',
    cultureId: 'early_christian',
    chronology: {
      dateOfStorySetting: 'Cosmic war in heaven and eschatological expulsion',
      estimatedDateOfComposition: 'ca. 90–96 CE',
      dateOfEarliestSurvivingManuscript: 'Papyrus 47 (ca. 250 CE); Codex Sinaiticus (ca. 350 CE)',
      numericCompositionBCE: 95
    },
    originalLanguage: 'Koine Greek',
    originalText: `Καὶ ἐγένετο πόλεμος ἐν τῷ οὐρανῷ, ὁ Μιχαὴλ καὶ οἱ ἄγγελοι αὐτοῦ τοῦ πολεμῆσαι μετὰ τοῦ δράκοντος. Καὶ ὁ δράκων ἐπολέμησεν καὶ οἱ ἄγγελοι αὐτοῦ, καὶ οὐκ ἴσχυσεν, οὐδὲ τόπος εὑρέθη αὐτῶν ἔτι ἐν τῷ οὐρανῷ. Καὶ ἐβλήθη ὁ δράκων ὁ μέγας, ὁ ὄφις ὁ ἀρχαῖος, ὁ καλούμενος Διάβολος καὶ ὁ Σατανᾶς, ὁ πλανῶν τὴν οἰκουμένην ὅλην, ἐβλήθη εἰς τὴν γῆν, καὶ οἱ ἄγγελοι αὐτοῦ μετ' αὐτοῦ ἐβλήθησαν.`,
    transliteration: `Kai egeneto polemos en tō ouranō, ho Michaēl kai hoi angeloi autou tou polemēsai meta tou drakontos... Kai eblēthē ho drakōn ho megas, ho ophis ho archaios, ho kaloumenos Diabolos kai ho Satanas...`,
    englishTranslation: `Then war broke out in heaven. Michael and his angels fought against the dragon, and the dragon and his angels fought back. But he was not strong enough, and they lost their place in heaven. The great dragon was hurled down—that ancient serpent called the devil, or Satan, who leads the whole world astray. He was hurled to the earth, and his angels with him.`,
    translationAttribution: {
      translator: 'Westcott & Hort Greek NT / Revised Version',
      sourceWork: 'The New Testament in the Original Greek',
      year: '1881',
      license: 'Public Domain',
      attributionNotice: 'Public Domain.'
    },
    motifs: ['chaoskampf', 'watchers_rebellion', 'apocalypse'],
    clickableTerms: ['chaoskampf', 'leviathan'],
    criticalApparatusNotes: 'Identifies the dragon explicitly with "the ancient serpent" (ὁ ὄφις ὁ ἀρχαῖος), fusing the Genesis 3 Eden serpent with the West Semitic multi-headed sea monster Leviathan/Lotan.'
  },
  {
    id: 'daniel_7_13_14',
    textId: 'daniel',
    reference: 'Daniel 7:13–14',
    title: 'The Son of Man before the Ancient of Days',
    cultureId: 'hebrew_israelite',
    chronology: {
      dateOfStorySetting: 'Night visions of Daniel in the first year of Belshazzar king of Babylon',
      estimatedDateOfComposition: 'ca. 167–164 BCE (Maccabean crisis)',
      dateOfEarliestSurvivingManuscript: '4QDan^a, 4QDan^b (ca. 125–100 BCE)',
      numericCompositionBCE: -165
    },
    originalLanguage: 'Biblical Aramaic',
    originalText: `חָזֵה הֲוֵית בְּחֶזְוֵי לֵילְיָא וַאֲרוּ עִם־עֲנָנֵי שְׁמַיָּא כְּבַר אֱנָשׁ אָתֵה הֲוָה וְעַד־עַתִּיק יֽוֹמַיָּא מְטָה וּקְדָמוֹהִי הַקְרְבוּהִי׃ וְלֵהּ יְהִב שָׁלְטָן וִיקָר וּמַלְכוּ וְכֹל עַמְמַיָּא אֻמַּיָּא וְלִשָּׁנַיָּא לֵהּ יִפְלְחוּן שָׁלְטָנֵהּ שָׁלְטָן עָלַם דִּֽי־לָא יֶעְדֵּה וּמַלְכוּתֵהּ דִּי־לָא תִתְחַבַּֽל׃`,
    transliteration: `Ḥāzēh hăwēt bə-ḥezwē lēlyā, wa-ʾărū ʿim-ʿănānē šəmayyā kə-var ʾĕnāš ʾātēh hăwāh, wə-ʿad-ʿattīq yōmayyā məṭāh, ū-qədāmōhī haqrəvūhī. Wə-lēh yəhīv šolṭān w-īqār ū-malkū, wə-ḵōl ʿammamayyā ʾummayyā wə-liššānayyā lēh yifləḥūn; šolṭānēh šolṭān ʿālam dī-lā yeʿdēh, ū-malkūtēh dī-lā titḥabbal.`,
    englishTranslation: `In my vision at night I looked, and there before me was one like a son of man [kə-var ʾĕnāš], coming with the clouds of heaven! He approached the Ancient of Days and was led into his presence. He was given authority, glory, and sovereign power; all nations and peoples of every language worshiped him. His dominion is an everlasting dominion that will not pass away, and his kingdom is one that will never be destroyed.`,
    translationAttribution: {
      translator: 'JPS',
      sourceWork: 'The Holy Scriptures According to the Masoretic Text',
      year: '1917',
      license: 'Public Domain',
      attributionNotice: 'Public Domain.'
    },
    motifs: ['divine_council', 'apocalypse'],
    clickableTerms: ['son_of_man'],
    criticalApparatusNotes: 'Riding upon the clouds (rōkēv ba-ʿărāvōt) is the standard epithet of Baal in Ugaritic poetry (rkb ʿrpt). Daniel 7 polemically transfers this storm-deity attribute to the human-shaped eschatological figure who receives the kingdom from the supreme Ancient of Days (El).'
  },
  {
    id: 'numbers_13_33',
    textId: 'numbers',
    reference: 'Numbers 13:33',
    title: 'The Spies\' Report: Anakim of the Nephilim',
    cultureId: 'hebrew_israelite',
    chronology: {
      dateOfStorySetting: 'Wilderness Reconnaissance at Kadesh-barnea',
      estimatedDateOfComposition: 'ca. 6th–5th century BCE',
      dateOfEarliestSurvivingManuscript: '4QNum^b (Dead Sea Scrolls, ca. 150 BCE); Aleppo Codex',
      numericCompositionBCE: -500
    },
    originalLanguage: 'Biblical Hebrew',
    originalText: `וְשָׁם רָאִינוּ אֶת־הַנְּפִילִים בְּנֵי עֲנָק מִן־הַנְּפִלִים וַנְּהִי בְעֵינֵינוּ כַּֽחֲגָבִים וְכֵן הָיִינוּ בְּעֵינֵיהֶֽם׃`,
    transliteration: `Wə-šām rāʾīnū ʾet-han-nəfīlīm, bənē ʿAnāq min-han-nəfilīm; wan-nəhī və-ʿēnēnū ka-ḥăgāvīm, wə-kēn hāyīnū bə-ʿēnēhem.`,
    englishTranslation: `There we saw the Nephilim—the sons of Anak who come from the Nephilim; and we were in our own eyes like grasshoppers, and so we were in their eyes!`,
    translationAttribution: {
      translator: 'JPS',
      sourceWork: 'The Holy Scriptures According to the Masoretic Text',
      year: '1917',
      license: 'Public Domain',
      attributionNotice: 'Public Domain Masoretic Text translation.'
    },
    motifs: ['giants'],
    clickableTerms: ['nephilim', 'anakim', 'rephaim'],
    criticalApparatusNotes: 'Crucial biblical bridge connecting the antediluvian Nephilim of Genesis 6:4 with the post-diluvian Canaanite giant clans (Anakim, Rephaim, Emim).'
  },
  {
    id: 'deut_2_and_3',
    textId: 'deuteronomy',
    reference: 'Deuteronomy 2:10–11; 3:11',
    title: 'The Races of Giants & The Bed of Og of Bashan',
    cultureId: 'hebrew_israelite',
    chronology: {
      dateOfStorySetting: 'Plains of Moab prior to Jordan Crossing',
      estimatedDateOfComposition: 'ca. 7th century BCE',
      dateOfEarliestSurvivingManuscript: '4QDeut^b (ca. 150 BCE); Aleppo Codex',
      numericCompositionBCE: -620
    },
    originalLanguage: 'Biblical Hebrew',
    originalText: `[2:10–11]: הָאֵמִים לְפָנִים יָשְׁבוּ בָהּ עַם גָּדוֹל וְרַב וְרָם כָּעֲנָקִים׃ רְפָאִים יֵחָשְׁבוּ אַף־הֵם כָּעֲנָקִים וְהַמֹּאָבִים יִקְרְאוּ לָהֶם אֵמִֽים׃ ... [3:11]: כִּי רַק־עוֹג מֶלֶךְ הַבָּשָׁן נִשְׁאַר מִיֶּתֶר הָרְפָאִים הִנֵּה עַרְשׂוֹ עֶרֶשׂ בַּרְזֶל הֲלֹה הִוא בְּרַבַּת בְּנֵי עַמּוֹן תֵּשַׁע אַמּוֹת אָרְכָּהּ וְאַרְבַּע אַמּוֹת רָחְבָּהּ בְּאַמַּת־אִישׁ׃`,
    transliteration: `Hā-ʾēmīm lə-fānīm yāšəvū vāh, ʿam gādōl wə-rav wā-rām kā-ʿAnāqīm: Rəfāʾīm yēḥāšəvū ʾaf-hēm kā-ʿAnāqīm, wə-ham-Mōʾāvīm yiqrəʾū lāhem ʾĒmīm... Kī raq-ʿŌg melek hab-Bāšān nišʾar miy-yeter hā-Rəfāʾīm; hinnēh ʿarsō ʿereś barzel... tēšaʿ ʾammōt ʾorkāh wə-ʾarbaʿ ʾammōt roḥbāh bə-ʾammat-ʾīš.`,
    englishTranslation: `[2:10–11]: The Emim used to live there—a people strong and numerous, and tall as the Anakim. Like the Anakim, they too were considered Rephaim, but the Moabites call them Emim. ... [3:11]: For only Og king of Bashan was left of the remnant of the Rephaim. Behold, his bedstead was an iron bedstead! Is it not in Rabbah of the Ammonites? Nine cubits was its length [approx. 13.5 feet / 4.1 meters] and four cubits its width, according to the standard human cubit.`,
    translationAttribution: {
      translator: 'Scholarly Public Domain Translation',
      sourceWork: 'English Revised Version / BHS Masoretic Text',
      year: '1885',
      license: 'Public Domain',
      attributionNotice: 'Public Domain.'
    },
    motifs: ['giants'],
    clickableTerms: ['rephaim', 'anakim', 'nephilim'],
    criticalApparatusNotes: 'Og\'s "bed of iron" (ʿereś barzel) has been analyzed by archaeologists as either a basalt sarcophagus (black basalt stone being rich in iron) or a funerary couch associated with royal ancestor cults.'
  },
  {
    id: 'joshua_12_4',
    textId: 'joshua',
    reference: 'Joshua 12:4',
    title: 'Og of Bashan\'s Royal Seats: Ashtaroth and Edrei',
    cultureId: 'hebrew_israelite',
    chronology: {
      dateOfStorySetting: 'Conquest of Transjordan territory',
      estimatedDateOfComposition: 'ca. 7th–6th century BCE',
      dateOfEarliestSurvivingManuscript: '4QJosh^a (Dead Sea Scrolls, ca. 150 BCE)',
      numericCompositionBCE: -580
    },
    originalLanguage: 'Biblical Hebrew',
    originalText: `וּגְבוּל עוֹג מֶלֶךְ הַבָּשָׁן מִיֶּתֶר הָרְפָאִים הַיּוֹשֵׁב בְּעַשְׁתָּרוֹת וּבְאֶדְרֶֽעִי׃`,
    transliteration: `Ū-gəvūl ʿŌg melek hab-Bāšān, miy-yeter hā-Rəfāʾīm, hay-yōšēv bə-ʿAštārōt ū-və-ʾEdreʿī.`,
    englishTranslation: `And the territory of Og king of Bashan, one of the remnant of the Rephaim, who reigned at Ashtaroth and at Edrei...`,
    translationAttribution: {
      translator: 'JPS',
      sourceWork: 'The Holy Scriptures',
      year: '1917',
      license: 'Public Domain',
      attributionNotice: 'Public Domain.'
    },
    motifs: ['giants'],
    clickableTerms: ['rephaim', 'rpum'],
    criticalApparatusNotes: 'Directly mirrors Ugaritic tablet KTU 1.108, which describes the god Rapiu reigning from the exact same twin cities: Ashtaroth and Edrei.'
  },
  {
    id: 'ugaritic_ktu_1_108',
    textId: 'ugaritic_rephaim',
    reference: 'KTU 1.108 (RS 24.252) lines 1–3',
    title: 'Rapiu Enthroned at Ashtaroth and Edrei',
    cultureId: 'canaanite_ugaritic',
    chronology: {
      dateOfStorySetting: 'Canaanite mythological and royal ancestor liturgy',
      estimatedDateOfComposition: 'ca. 13th century BCE (Late Bronze Age Ugarit)',
      dateOfEarliestSurvivingManuscript: 'Clay tablet RS 24.252 excavated at Ras Shamra, ca. 1250 BCE (Louvre / Damascus)',
      numericCompositionBCE: -1250
    },
    originalLanguage: 'Ugaritic (alphabetic cuneiform)',
    originalText: `[KTU 1.108:1–3]: 𐎍𐎐 𐎊𐎌𐎁 𐎗𐎔𐎜 𐎎𐎍𐎋 𐎓𐎍𐎎 𐎆𐎊𐎌𐎁 𐎊𐎌𐎚 𐎛𐎍 𐎂𐎚𐎗 𐎆𐎊𐎐 𐎄𐎊𐎌𐎁 𐎁𐎓𐎌𐎚𐎗𐎚 𐎛𐎍 𐎄𐎊𐎘𐎔𐎉 𐎁𐎛𐎄𐎗𐎓𐎊`,
    transliteration: `ln yṯb rpu mlk ʿlm wyṯb yšt ʾil gtr wyn dyṯb b-ʿṯtrt ʾil dyṯpṭ b-ʾidrʿy...`,
    englishTranslation: `May Rapiu, the King of Eternity, drink; and may he drink, the god mighty and noble, the god who sits enthroned at Ashtaroth [b-ʿṯtrt], the god who rules in Edrei [b-ʾidrʿy]!`,
    translationAttribution: {
      translator: 'Scholarly Translation (adapted from Pardee & Smith)',
      sourceWork: 'Ritual and Cult at Ugarit / Ugaritic Narrative Poetry',
      year: '2002 / Scholarly Fair Use Quotation',
      license: 'Scholarly Fair Use Quotation',
      attributionNotice: 'Academic excerpt of KTU 1.108 for scholarly comparison.'
    },
    motifs: ['giants'],
    clickableTerms: ['rpum', 'rephaim'],
    criticalApparatusNotes: 'One of the most spectacular geographic correlations in ancient Near Eastern archaeology: the Ugaritic king of the rpum rules from Ashtaroth and Edrei, the identical pair of cities attributed to Og the Rephaite king in Joshua 12:4 and Deut 1:4.'
  },

  // --- FLOOD FLAGSHIP PASSAGES ---
  {
    id: 'gilgamesh_tablet_11_flood',
    textId: 'gilgamesh',
    reference: 'Epic of Gilgamesh, Tablet XI (lines 113–158)',
    title: 'Utnapishtim\'s Account of the Great Deluge',
    cultureId: 'mesopotamian',
    chronology: {
      dateOfStorySetting: 'Antediluvian Shuruppak at the close of the primeval age',
      estimatedDateOfComposition: 'Standard Babylonian recension ca. 1200–1000 BCE (Sin-leqi-unninni)',
      dateOfEarliestSurvivingManuscript: 'Library of Ashurbanipal cuneiform tablets, Nineveh, 7th c. BCE (K.3375)',
      numericCompositionBCE: -1100
    },
    originalLanguage: 'Standard Babylonian Akkadian cuneiform',
    originalText: `[Lines 140–154]: a-na KUR ni-ṣir i-te-mid GIŠ.MÁ... i-na si-ba-a u₄-me i-na ka-ša-a-di, ú-še-ṣi-ma TU.GUR₄.MUŠEN ú-maš-šir... i-tu-ram-ma... ú-še-ṣi-ma i-su-ra ú-maš-šir... ú-še-ṣi-ma a-ri-ba ú-maš-šir... il-lik a-ri-bi-ma qá-ad-su ša mê i-mur-ma, i-kàl i-ša-aḥ-hi-iṭ i-tar-ri ú-ul i-suh-ra.`,
    transliteration: `ana šadê Nimuš ittemid eleppu... ina sebî ūme ina kašādi, ušeṣī-ma summatu umaššir... itūram-ma... ušeṣī-ma sinnūndu umaššir... ušeṣī-ma āriba umaššir... illik āribu-ma... ul issuḫra.`,
    englishTranslation: `The boat ran aground on Mount Nimush [Nisir]... When the seventh day arrived, I brought out a dove and set it free. The dove went off, but returned; since no resting place was visible, she came back. Then I sent forth a swallow and set it free; the swallow went off, but returned; since no resting place was visible, she came back. Then I sent forth a raven and set it free. The raven went off, and saw that the waters had receded; she eats, flits about, caws, and does not return! Then I brought out everything to the four winds and offered a sacrifice... The gods smelled the sweet savor, the gods crowded like flies around the sacrificer!`,
    translationAttribution: {
      translator: 'R. Campbell Thompson',
      sourceWork: 'The Epic of Gilgamish: Text, Transliteration, and Notes',
      year: '1930',
      license: 'Public Domain',
      attributionNotice: 'Public Domain cuneiform translation (Oxford University Press).'
    },
    motifs: ['great_flood', 'sacred_mountains'],
    clickableTerms: ['apkallu'],
    criticalApparatusNotes: 'Parallel to Genesis 8:6–21: the sequence of bird release (dove, swallow, raven vs raven, dove, dove), grounding on a mountain peak, and the sacrificial aroma pleasing the divine recipient.'
  },
  {
    id: 'atrahasis_tablet_3_flood',
    textId: 'atrahasis',
    reference: 'Epic of Atrahasis, Tablet III (lines 11–45)',
    title: 'Enki Warns Atrahasis Through the Reed Wall',
    cultureId: 'mesopotamian',
    chronology: {
      dateOfStorySetting: 'Pre-flood Shuruppak during the divine assembly\'s decree',
      estimatedDateOfComposition: 'ca. 1700–1640 BCE (reign of Ammi-saduqa)',
      dateOfEarliestSurvivingManuscript: 'British Museum Old Babylonian tablets BM 78941–78943 (ca. 1650 BCE)',
      numericCompositionBCE: -1700
    },
    originalLanguage: 'Old Babylonian Akkadian cuneiform',
    originalText: `[Tablet III Col. i:18–25]: kī-ma kigalli kigalli, kigallu šimē-ma! igāru šitammâ, kikkīšu šuzzik!... ubbil bīta, bini eleppa! makkūra zēr-ma, napišta bulliṭ!`,
    transliteration: `kikkīšu šimē-ma! igāru šitammâ... ubbil bīta, bini eleppa! makkūra zēr-ma, napišta bulliṭ!`,
    englishTranslation: `Enki made his voice heard, and spoke to his servant: 'Reed wall, pay attention! Wall, listen to all my words! Dismantle your house, build a boat! Spurn possessions and save life! The boat that you build... roof it over like the Apsu, so that the sun cannot see inside. Let it be caulked with strong pitch! Pitch it with bitumen inside and out.'`,
    translationAttribution: {
      translator: 'Scholarly Public Domain Translation (adapted from King & Rogers)',
      sourceWork: 'Cuneiform Parallels to the Old Testament',
      year: '1912',
      license: 'Public Domain',
      attributionNotice: 'Public Domain translation of Old Babylonian cuneiform.'
    },
    motifs: ['great_flood'],
    clickableTerms: ['apkallu'],
    criticalApparatusNotes: 'Compare Genesis 6:14: "Make yourself an ark of gopher wood; make rooms in the ark, and cover it inside and outside with pitch (kōfer)".'
  },
  {
    id: 'enuma_elish_tablet_4',
    textId: 'enuma_elish',
    reference: 'Enuma Elish, Tablet IV (lines 129–146)',
    title: 'Marduk Splitting the Dragon Tiamat to Form the Cosmos',
    cultureId: 'mesopotamian',
    chronology: {
      dateOfStorySetting: 'Primordial eternity before cosmic creation',
      estimatedDateOfComposition: 'ca. 1100 BCE (Babylonian empire under Nebuchadnezzar I)',
      dateOfEarliestSurvivingManuscript: 'Library of Ashurbanipal tablets, 7th c. BCE',
      numericCompositionBCE: -1100
    },
    originalLanguage: 'Standard Babylonian Akkadian cuneiform',
    originalText: `[Tablet IV lines 135–140]: i-nu-uḫ-ma be-lum šalam-ta-aš i-bar-ri... ih-pi-ši-ma kī-ma nūn maš-ṭe-e a-na ši-ni-šu. miš-lu-ša iš-kun-ma ša-ma-ma uṣ-ṣal-lil, iš-dud bar-ka maṣ-ṣa-ra ú-ša-aṣ-bit... mê-ša la šu-ṣa-a šu-nu-ti um-ta-ʾ-ir.`,
    transliteration: `inūḫ-ma bēlum šalamtaš ibarri... iḫpī-ši-ma kīma nūn mašṭê ana šinīšu...`,
    englishTranslation: `The Lord rested, inspecting her carcass. He divided the flesh of the monster, devising a clever plan: he split her like a flat fish into two halves; one half of her he set up as a vault for heaven; he pulled across the barrier and posted guards, commanding them not to let her waters escape. He traversed the heavens, surveying the cosmic regions...`,
    translationAttribution: {
      translator: 'L.W. King',
      sourceWork: 'The Seven Tablets of Creation',
      year: '1902',
      license: 'Public Domain',
      attributionNotice: 'Public Domain cuneiform translation (Luzac and Co., London).'
    },
    motifs: ['chaoskampf', 'creation_primordial_waters'],
    clickableTerms: ['tiamat', 'tehom', 'chaoskampf'],
    criticalApparatusNotes: 'Foundational East Semitic Chaoskampf. Compare Genesis 1:6–7: "Let there be an expanse in the midst of the waters, and let it divide the waters from the waters... God separated the waters under the expanse from the waters above the expanse."'
  },
  {
    id: 'rigveda_10_129_nasadiya',
    textId: 'rigveda',
    reference: 'Rigveda 10.129 (Nasadiya Sukta, verses 1–3)',
    title: 'Hymn of Primordial Creation out of the Boundless Waters',
    cultureId: 'vedic_hindu',
    chronology: {
      dateOfStorySetting: 'Before cosmic time and being',
      estimatedDateOfComposition: 'ca. 1400–1200 BCE',
      dateOfEarliestSurvivingManuscript: 'Rigvedic oral recitational transmission; birch bark MSS',
      numericCompositionBCE: -1300
    },
    originalLanguage: 'Vedic Sanskrit',
    originalText: `नासदासीन्नो सदासीत्तदानीं नासीद्रजो नो व्योमा परो यत् ।
किमावरीवः कुह कस्य शर्मन्नम्भः किमासीद्गहनं गभीरम् ॥ १ ॥
न मृत्युरासीदमृतं न तर्हि न रात्र्या अह्न आसीत्प्रकेतः ।
आनीदवातं स्वधया तदेकं तस्माद्धान्यन्न परः किञ्चनास ॥ २ ॥
तम आसीत्तमसा गूळ्हमग्रेऽप्रकेतं सलिलं सर्वमा इदम् ।
तुच्छ्येनाभ्वपिहितं यदासीत्तपसस्तन्महिनाजायतैकम ॥ ३ ॥`,
    transliteration: `nāsad āsīn no sad āsīt tadānīṁ nāsīd rajo no vyomā paro yat |
kim āvarīvaḥ kuha kasya śarmann ambhaḥ kim āsīd gahanaṁ gabhīram || 1 ||
na mṛtyur āsīd amṛtaṁ na tarhi na rātryā ahna āsīt praketaḥ |
ānīd avātaṁ svadhayā tad ekaṁ tasmād dhānyan na paraḥ kiñcanāsa || 2 ||
tama āsīt tamasā gūḷham agre 'praketaṁ salilaṁ sarvam ā idam |
tucchyenābhvapihitaṁ yad āsīt tapasas tan mahinājāyataikam || 3 ||`,
    englishTranslation: `There was neither non-existence nor existence then; there was neither realm of space nor the sky beyond. What covered it, and where? And what gave it shelter? Was there water there, an unfathomable deep?
Death was not then, nor immortality; there was no sign of the night nor of the day. That One breathed, breathless, by its own impulse; other than that, there was nothing beyond.
Darkness was hidden by darkness in the beginning; with no distinguishing sign, all this was water. That which became, covered by void, arose through the power of heat!`,
    translationAttribution: {
      translator: 'Ralph T.H. Griffith',
      sourceWork: 'The Hymns of the Rigveda',
      year: '1896',
      license: 'Public Domain',
      attributionNotice: 'Public Domain Vedic translation (Benares).'
    },
    motifs: ['creation_primordial_waters'],
    clickableTerms: ['tehom'],
    criticalApparatusNotes: 'Stunning parallel to Genesis 1:2 ("the earth was without form and void, and darkness was over the face of the deep, and the Spirit of God was hovering over the waters") and Popol Vuh ("there was only the calm, tranquil water").'
  },
  {
    id: 'shatapatha_brahmana_flood',
    textId: 'shatapatha_brahmana',
    reference: 'Shatapatha Brahmana 1.8.1.1–6',
    title: 'Manu and the Horned Fish (Matsya) at the Northern Mountain',
    cultureId: 'vedic_hindu',
    chronology: {
      dateOfStorySetting: 'Primeval transition of world ages (Manvantara)',
      estimatedDateOfComposition: 'ca. 8th–6th century BCE',
      dateOfEarliestSurvivingManuscript: 'Preserved via rigorous oral transmission; medieval manuscripts',
      numericCompositionBCE: -700
    },
    originalLanguage: 'Vedic Sanskrit',
    originalText: `मनवे ह वै प्रातः... मत्स्यः पाणिमवेयाय... स हास्मै वाचमुवाच बिभृहि मा पारयिष्यामि त्वेति... औघ इमाः सर्वाः प्रजा निर्वोढा ततस्त्वा पारयितास्मीति...`,
    transliteration: `manave ha vai prātaḥ... matsyaḥ pāṇimaveyāya... sa hāsmai vācamuvāca bibhṛhi mā pārayiṣyāmi tveti... augha imāḥ sarvāḥ prajā nirvoḍhā tatastvā pārayitāsmīti...`,
    englishTranslation: `In the morning they brought water to Manu for washing. As he was washing, a fish came into his hands. It spoke to him: 'Keep me, and I will save you!' 'From what will you save me?' 'A deluge will sweep away all these creatures; from that I will deliver you.' ... Manu reared the fish. It said: 'In such and such a year that deluge will come. You must prepare a ship and attend to me; and when the water rises, enter into the ship, and I will deliver you.' ... When the deluge rose, he entered the ship. The fish swam up to him, and he tied the ship's rope to its horn. By this means the fish hastened across to the Northern Mountain...`,
    translationAttribution: {
      translator: 'Julius Eggeling',
      sourceWork: 'The Sacred Books of the East, Vol. 12',
      year: '1882',
      license: 'Public Domain',
      attributionNotice: 'Oxford University Press / Max Müller Sacred Books of the East edition.'
    },
    motifs: ['great_flood', 'sacred_mountains'],
    criticalApparatusNotes: 'Manu lands upon the "Northern Mountain" (the Himalayas) and performs a butter and milk sacrifice into the waters, out of which his daughter Ida is born to repopulate humanity.'
  },
  {
    id: 'popol_vuh_resin_flood',
    textId: 'popol_vuh',
    reference: 'Popol Vuh, Part 1 (The Destruction of the Wooden Men)',
    title: 'The Great Flood of Thick Resin Annihilating the Wooden Manikins',
    cultureId: 'maya',
    chronology: {
      dateOfStorySetting: 'Second creation of humanity before the sun shone',
      estimatedDateOfComposition: 'Classic Maya origins ca. 600 CE; transcribed in Latin characters ca. 1554–1558 CE',
      dateOfEarliestSurvivingManuscript: 'Father Ximénez copy, ca. 1701 CE (Newberry Library)',
      numericCompositionBCE: 1554
    },
    originalLanguage: 'K\'iche\' Maya',
    originalText: `[K\'iche\']: Are kut xpe jun nima butz\' xchalik chuwäch kaj, Tz\'aqol B\'itol... Xpe jun butz\' k\'äjk\'ik chikop xuriq kib\'... chupam ri butz\' tz\'aqinaq chik...`,
    transliteration: `Are kut xpe jun nima butz\' xchalik chuwäch kaj...`,
    englishTranslation: `Then the Heart of Sky brought a great flood upon them; a torrential rain of thick resin descended from the sky. The wooden manikins were annihilated and destroyed. A resin flood fell from heaven. The face of the earth was darkened, and a black rain began to fall, day and night. And the animals came into their houses—their dogs, their poultry, their grinding stones, their cooking pots—and rose up against them, saying: 'You made us suffer! You beat us! Now we shall tear you to pieces!' And thus were the wooden men destroyed.`,
    translationAttribution: {
      translator: 'Delia Goetz and Sylvanus Morley (from Adrián Recinos)',
      sourceWork: 'Popol Vuh: The Sacred Book of the Ancient Quiché Maya',
      year: '1950 / Scholarly Fair Use Quotation',
      license: 'Scholarly Fair Use Quotation',
      attributionNotice: 'University of Oklahoma Press scholarly translation excerpt.'
    },
    motifs: ['great_flood', 'creation_primordial_waters'],
    criticalApparatusNotes: 'Unlike the Near Eastern floods where a righteous family is saved in an ark, in the Maya tradition the entire second generation of humanity is annihilated because they had no hearts and forgot their Makers.'
  },
  {
    id: 'voluspa_ymir_creation',
    textId: 'voluspa_poetic_edda',
    reference: 'Völuspá (Poetic Edda, stanzas 3–4)',
    title: 'The Primordial Giant Ymir and Creation of Midgard',
    cultureId: 'norse_germanic',
    chronology: {
      dateOfStorySetting: 'Cosmic origin out of the void of Ginnungagap',
      estimatedDateOfComposition: 'ca. 950–1000 CE (archaic oral pagan tradition)',
      dateOfEarliestSurvivingManuscript: 'Codex Regius (GKS 2365 4to, ca. 1270 CE)',
      numericCompositionBCE: 980
    },
    originalLanguage: 'Old Norse',
    originalText: `Ár var alda, þar er Ýmir byggði,
vara sandr né sær né svalar unnir;
jörð fannsk æva né upphiminn,
gap var ginnunga, en gras hvergi,
áðr Burs synir bjóðum of yppðu,
þeir er Miðgarð mæran skópu;
sól skein sunnan á salar steina,
þá var grund gróin grænum lauki.`,
    transliteration: `Ár var alda, þar er Ýmir byggði, vara sandr né sær né svalar unnir...`,
    englishTranslation: `In the morning of time, when Ymir lived, there was neither sand nor sea nor cool waves; earth was not found, nor heaven above; there was a yawning chasm [Ginnungagap], but grass nowhere. Then Bur's sons [Odin, Vili, Vé] lifted up the lands, they who fashioned the noble Midgard; the sun shone from the south on the stones of the hall, then the ground was overgrown with green herbs.`,
    translationAttribution: {
      translator: 'Henry Adams Bellows',
      sourceWork: 'The Poetic Edda: Translated from the Icelandic',
      year: '1923',
      license: 'Public Domain',
      attributionNotice: 'The American-Scandinavian Foundation.'
    },
    motifs: ['creation_primordial_waters', 'giants'],
    criticalApparatusNotes: 'Ymir is the primeval frost giant whose slaughtered body forms the cosmos (flesh into earth, bones into rocks, skull into heaven, blood into the sea)—the classic Indo-European Purusha / Ymir cosmic sacrifice archetype.'
  },

  // --- CHAOSKAMPF & DRAGON CONFLICT PASSAGES ---
  {
    id: 'psalm_74_13_14',
    textId: 'psalms',
    reference: 'Psalm 74:13–14',
    title: 'Crushing the Heads of Leviathan and Sea Monsters',
    cultureId: 'hebrew_israelite',
    chronology: {
      dateOfStorySetting: 'Cosmic Primeval Victory recalled during Temple desolation',
      estimatedDateOfComposition: 'ca. 6th century BCE',
      dateOfEarliestSurvivingManuscript: '11Q5 (ca. 50 CE); Aleppo Codex',
      numericCompositionBCE: -550
    },
    originalLanguage: 'Biblical Hebrew',
    originalText: `אַתָּה פוֹרַרְתָּ בְעָזְּךָ יָם שִׁבַּרְתָּ רָאשֵׁי תַנִּינִים עַל־הַמָּיִם׃ אַתָּה רִצַּצְתָּ רָאשֵׁי לִוְיָתָן תִּתְּנֶנּוּ מַאֲכָל לְעָם לְצִיִּים׃`,
    transliteration: `ʾAttāh fōrartā və-ʿāzzəkā yām, šibbartā rāšē tannīnīm ʿal-ham-māyim: ʾAttāh ritztzatzətā rāšē liwyātān, tittənennū maʾăkāl lə-ʿām lə-ṣiyyīm.`,
    englishTranslation: `It was you who split open the sea by your power; you broke the heads of the monster in the waters. It was you who crushed the heads of Leviathan and gave him as food to the creatures of the desert!`,
    translationAttribution: {
      translator: 'JPS',
      sourceWork: 'The Holy Scriptures',
      year: '1917',
      license: 'Public Domain',
      attributionNotice: 'Public Domain.'
    },
    motifs: ['chaoskampf'],
    clickableTerms: ['chaoskampf', 'tehom', 'leviathan'],
    criticalApparatusNotes: 'Note the plural "heads of Leviathan" (rāšē liwyātān), confirming the multi-headed serpentine nature identical to the seven-headed Lotan of Ugarit.'
  },
  {
    id: 'isaiah_27_1',
    textId: 'isaiah',
    reference: 'Isaiah 27:1',
    title: 'Leviathan the Fleeing Serpent, Leviathan the Twisting Serpent',
    cultureId: 'hebrew_israelite',
    chronology: {
      dateOfStorySetting: 'Eschatological Day of the LORD',
      estimatedDateOfComposition: 'ca. 6th–5th century BCE (Isaiah Apocalypse 24–27)',
      dateOfEarliestSurvivingManuscript: '1QIsa^a (Great Isaiah Scroll, ca. 125 BCE)',
      numericCompositionBCE: -520
    },
    originalLanguage: 'Biblical Hebrew',
    originalText: `בַּיּוֹם הַהוּא יִפְקֹד יְהוָה בְּחַרְבּוֹ הַקָּשָׁה וְהַגְּדוֹלָה וְהַחֲזָקָה עַל לִוְיָתָן נָחָשׁ בָּרִחַ וְעַל לִוְיָתָן נָחָשׁ עֲקַלָּתוֹן וְהָרַג אֶת־הַתַּנִּין אֲשֶׁר בַּיָּם׃`,
    transliteration: `Bay-yōm ha-hū yifqōd Yahweh bə-ḥarbō ha-qāšāh wə-hag-gədōlāh wə-ha-ḥăzāqāh ʿal liwyātān nāḥāš bāriaḥ, wə-ʿal liwyātān nāḥāš ʿăqallātōn; wə-hārag ʾet-hat-tannīn ʾăšer bay-yām.`,
    englishTranslation: `In that day, the LORD with his harsh, great, and powerful sword will punish Leviathan the fleeing serpent [nāḥāš bāriaḥ], Leviathan the twisting serpent [nāḥāš ʿăqallātōn]; he will slay the monster that is in the sea.`,
    translationAttribution: {
      translator: 'Scholarly Public Domain Translation',
      sourceWork: 'English Revised Version',
      year: '1885',
      license: 'Public Domain',
      attributionNotice: 'Public Domain.'
    },
    motifs: ['chaoskampf'],
    clickableTerms: ['chaoskampf', 'tehom', 'leviathan'],
    criticalApparatusNotes: 'Verbatim linguistic twin to Ugaritic KTU 1.5 I:1–3 describing Baal slaying "ltn btn brḥ / ltn btn ʿqltn" (Lotan the fleeing serpent, Lotan the twisting serpent).'
  },
  {
    id: 'baal_cycle_lotan',
    textId: 'baal_cycle',
    reference: 'KTU 1.5 I:1–3 (Baal vs. Lotan)',
    title: 'Baal Smote Lotan the Twisting Serpent',
    cultureId: 'canaanite_ugaritic',
    chronology: {
      dateOfStorySetting: 'Canaanite mythological conflict on Mount Zaphon',
      estimatedDateOfComposition: 'ca. 1350–1200 BCE',
      dateOfEarliestSurvivingManuscript: 'Ras Shamra cuneiform tablet, ca. 1250 BCE (Louvre)',
      numericCompositionBCE: -1300
    },
    originalLanguage: 'Ugaritic (alphabetic cuneiform)',
    originalText: `[KTU 1.5 I:1–3]: 𐎋𐎚𐎎𐎈𐎕 𐎍𐎚𐎐 𐎁𐎘𐎐 𐎁𐎗𐎈 𐎚𐎋𐎍𐎊 𐎁𐎘𐎐 𐎓𐎖𐎍𐎚𐎐 𐎌𐎍𐎊𐎉 𐎄𐎌𐎁𐎓𐎚 𐎗𐎛𐎌𐎎`,
    transliteration: `k-tmḫṣ ltn bṯn brḥ, tkly bṯn ʿqltn, šlyṭ d-šbʿt rʾašm...`,
    englishTranslation: `When you smote Lotan the fleeing serpent [ltn bṯn brḥ], made an end of the twisting serpent [bṯn ʿqltn], the tyrant with seven heads...`,
    translationAttribution: {
      translator: 'H.L. Ginsberg',
      sourceWork: 'Ancient Near Eastern Texts (ANET)',
      year: '1955 / Scholarly Fair Use Quotation',
      license: 'Scholarly Fair Use Quotation',
      attributionNotice: 'Princeton University Press scholarly translation excerpt.'
    },
    motifs: ['chaoskampf'],
    clickableTerms: ['chaoskampf', 'leviathan'],
    criticalApparatusNotes: 'Matches Isaiah 27:1 in both vocabulary and exact poetic phraseology: bṯn brḥ = nāḥāš bāriaḥ; bṯn ʿqltn = nāḥāš ʿăqallātōn.'
  },

  // --- 2 ESDRAS 14 THE 70 BOOKS FOR THE WISE ---
  {
    id: '2_esdras_14_44_48',
    textId: '2_esdras_4_ezra',
    reference: '2 Esdras 14:44–48',
    title: 'The 24 Public Books and the 70 Hidden Books for the Wise',
    cultureId: 'second_temple_jewish',
    chronology: {
      dateOfStorySetting: 'Exilic Babylon forty days under inspiration',
      estimatedDateOfComposition: 'ca. 90–100 CE',
      dateOfEarliestSurvivingManuscript: 'Codex Sangermanensis (Latin, 822 CE); Syriac MSS',
      numericCompositionBCE: 95
    },
    originalLanguage: 'Latin (from lost Semitic/Greek original)',
    originalText: `[Latin 14:44–48]: Et factum est in quadraginta diebus, scripti sunt libri nonaginta quattuor. Et factum est cum conplessent quadraginta dies, locutus est Altissimus dicens: Priora quae scripsisti in palam pone, et legant digni et indigni: novissimos autem septuaginta conservabis, ut tradas eos sapientibus de populo tuo. In his enim est vena intellectus et sapientiae fons et scientiae flumen. Et feci sic.`,
    transliteration: `Et factum est in quadraginta diebus, scripti sunt libri nonaginta quattuor...`,
    englishTranslation: `And in forty days, ninety-four books were written. And when the forty days were fulfilled, the Most High spoke to me, saying: 'Make public the twenty-four books that you wrote first, and let the worthy and the unworthy read them; but keep the seventy that were written last, in order to give them to the wise among your people. For in them is the spring of understanding, the fountain of wisdom, and the river of knowledge.' And I did so.`,
    translationAttribution: {
      translator: 'Revised Standard Version Apocrypha',
      sourceWork: 'The Oxford Annotated Apocrypha',
      year: '1965 / Public Domain base',
      license: 'Public Domain',
      attributionNotice: 'Public Domain text of 4 Ezra.'
    },
    motifs: ['forbidden_knowledge'],
    criticalApparatusNotes: 'Establishes the two-tier library concept: 24 exoteric books (the canonical Hebrew Bible) and 70 esoteric books (apocalyptic, astronomical, and wisdom pseudepigrapha) reserved for the initiated.'
  },

  // --- RIGVEDA NASADIYA SUKTA ---
  {
    id: 'rigveda_10_129',
    textId: 'rigveda',
    reference: 'Rigveda 10.129:1–3',
    title: 'Nasadiya Sukta (Creation from Primordial Waters & Non-Existence)',
    cultureId: 'vedic_hindu',
    chronology: {
      dateOfStorySetting: 'Primordial cosmic void before existence and non-existence',
      estimatedDateOfComposition: 'ca. 1500–1200 BCE',
      dateOfEarliestSurvivingManuscript: 'Continuous rigorous oral transmission (Shakha); birch-bark and palm-leaf manuscripts',
      numericCompositionBCE: -1350
    },
    originalLanguage: 'Vedic Sanskrit',
    originalText: `नास॑दासी॒न्नो सदा॑सीत्त॒दानीं॒ नासी॒द्रजो॒ नो व्यो॑मा प॒रो यत् ।
किमाव॑रीव॒: कुह॒ कस्य॒ शर्म॒न्नम्भ॒: किमा॑सी॒द्गह॑नं गभी॒रम् ॥ १ ॥
न मृ॒त्युरा॑सीद॒मृतं॒ न तर्हि॒ न रात्र्या॒ अह्न॑ आसीत्प्रके॒त: ।
आनी॑दवा॒तं स्व॒धया॒ तदेकं॒ तस्मा॑द्धा॒न्यन्न प॒र: किं च॒नास॑ ॥ २ ॥
तम॑ आसी॒त्तम॑सा गू॒ळ्हमग्रे॑ऽप्रके॒तं स॑लि॒लं सर्व॑मा इ॒दम् ।
तु॒च्छ्येना॒भ्वपि॑हितं॒ यदासी॒त्तप॑स॒स्तन्म॑हि॒नाजा॑य॒तैक॑म् ॥ ३ ॥`,
    transliteration: `nā́sad āsīn nó sád āsīt tadā́nīṃ, nā́sīd rájo nó víomā paró yát:
kím ā́varīvaḥ kúha kásya śármann, ámbhaḥ kím āsīd gáhanaṃ gabhīrám.
ná mṛtyúr āsīd amṛ́taṃ ná tárhi, ná rā́triyā áhna āsīt praketáḥ:
ā́nīd avātáṃ svadháyā tád ékaṃ, tásmād dhānyán ná paráḥ kíṃ canā́sa.
táma āsīt támasā gūḷhám ágre, 'praketáṃ saliláṃ sárvam ā idám:
tucchyénābhv ápihitaṃ yád ā́sīt, tápasas tán mahinā́jāyataíkam.`,
    englishTranslation: `There was neither non-existence nor existence then; there was neither the realm of space, nor the sky which is beyond. What stirred? Where? In whose protection? Was there water, bottomlessly deep? There was neither death nor immortality then. There was no distinguishing sign of night nor of day. That One breathed, windless, by its own impulse. Other than that there was nothing beyond. Darkness was hidden by darkness in the beginning; with no distinguishing sign, all this was water. The life force that was shut up in the empty, that One arose by the greatness of heat and inner creative ardor.`,
    translationAttribution: {
      translator: 'Wendy Doniger O\'Flaherty',
      sourceWork: 'The Rig Veda: An Anthology',
      year: '1981 / Scholarly Fair Use Quotation',
      license: 'Scholarly Fair Use Quotation',
      attributionNotice: 'Penguin Classics scholarly translation.'
    },
    motifs: ['creation_primordial_waters'],
    clickableTerms: ['tehom', 'tiamat'],
    criticalApparatusNotes: 'Parallel to Genesis 1:2 (darkness over the surface of the deep) and Enuma Elish (undifferentiated primordial ocean), reflecting deep Indo-Aryan and Near Eastern shared primeval water motifs.'
  },

  // --- POPOL VUH: THE RESIN DELUGE ---
  {
    id: 'popol_vuh_deluge',
    textId: 'popol_vuh',
    reference: 'Popol Vuh, Part I',
    title: 'The Great Flood of Boiling Resin Destroying the Wooden Mannequins',
    cultureId: 'maya',
    chronology: {
      dateOfStorySetting: 'Pre-human mythological era of the four cosmological creations',
      estimatedDateOfComposition: 'Classic Maya traditions (ca. 300–900 CE) written down ca. 1554–1558 CE',
      dateOfEarliestSurvivingManuscript: 'Ayer MS 1515, Newberry Library, Chicago (Father Ximénez copy, ca. 1701 CE)',
      numericCompositionBCE: 1554
    },
    originalLanguage: 'K\'iche\' Maya',
    originalText: `X-e ch'akatik, x-e k'ojoxik; winaq x-e uxik, winaq x-e k'iyarïk; x-e k'alaxik, x-e meq'axik k'a te k'ut ma ja bi k'ux, ma ja bi na'oj, ma ja bi na'bal kech ri k'o pa kaj: x-e sachik. Rumal k'ut ma ja bi k'ux, x-k'is kib', x-q'ax kib' pa uq'ab' juyub' taq'aj... X-pe k'ut jun nïm q'eqal jäb' chi k'aj, chi k'ik', k'otox k'ut ki wach rumal xik, qasix k'ut ki k'ulibal rumal Kot; x-e ti'ik rumal Kamiq, x-q'olox ki baqil rumal T'ot'.`,
    transliteration: `X-e ch'akatik, x-e k'ojoxik; winaq x-e uxik... x-pe k'ut jun nïm q'eqal jäb' chi k'aj...`,
    englishTranslation: `They were brought into being, they were formed; they spoke, but they had neither heart nor mind; they accomplished no recollection of their Builder, their Maker; they walked on all fours, aimlessly. And so they were decimated; a heavy black rain of resin poured down from heaven. Day and night it rained, a dark deluge. And the animals, great and small, entered their houses; their dogs and turkeys beat them across their faces, saying: 'You starved us, you battered us with sticks; now we shall tear your flesh.' Even the grinding stones and water jars rose up against them. Thus the wooden mannequins were destroyed and submerged in the deluge.`,
    translationAttribution: {
      translator: 'Dennis Tedlock',
      sourceWork: 'Popol Vuh: The Definitive Edition of the Mayan Book of the Dawn of Life',
      year: '1985 / Scholarly Fair Use Quotation',
      license: 'Scholarly Fair Use Quotation',
      attributionNotice: 'Simon & Schuster critical edition.'
    },
    motifs: ['great_flood', 'world_ages'],
    clickableTerms: ['xibalba'],
    criticalApparatusNotes: 'Demonstrates a Native American deluge tradition rooted in cyclic world ages (the destruction of the third creation to make way for the creation of man from maize) independent of Old World biblical transmission.'
  },

  // --- POETIC EDDA: VÖLUSPÁ ---
  {
    id: 'voluspa_creation_ymir',
    textId: 'voluspa_poetic_edda',
    reference: 'Völuspá 3–4',
    title: 'The Primordial Age of Ymir and the Void of Ginnungagap',
    cultureId: 'norse_germanic',
    chronology: {
      dateOfStorySetting: 'Pre-cosmic primeval era of giant Ymir',
      estimatedDateOfComposition: 'ca. 950–1000 CE (archaic pagan oral poetry)',
      dateOfEarliestSurvivingManuscript: 'Codex Regius (GKS 2365 4to, ca. 1270 CE)',
      numericCompositionBCE: 980
    },
    originalLanguage: 'Old Norse',
    originalText: `Ár var alda, þar er Ymir byggði,
vara sandr né sær né svalar unnir;
jörð fannsk æva né upphiminn,
gap var ginnunga, en gras hvergi.
Áðr Burs synir bjöðum um ypðu,
þeir er Miðgarð mæran skópu;
sól skein sunnan á salar steina,
þá var grund gróin grænum lauki.`,
    transliteration: `Ár var alda, þar er Ymir byggði, vara sandr né sær né svalar unnir...`,
    englishTranslation: `It was the morning of ages, when Ymir lived, there was neither sand nor sea nor cold waves; earth was nowhere found, nor heaven above; there was Ginnungagap (the yawning abyss), and grass nowhere. Until Bor's sons (Odin, Vili, and Vé) lifted up the earth, they who fashioned glorious Midgard; the sun shone from the south upon the stones of the hall, and the ground grew green with leeks.`,
    translationAttribution: {
      translator: 'Henry Adams Bellows',
      sourceWork: 'The Poetic Edda',
      year: '1936',
      license: 'Public Domain',
      attributionNotice: 'Public Domain English translation.'
    },
    motifs: ['creation_primordial_waters', 'giants'],
    clickableTerms: ['jotnar'],
    criticalApparatusNotes: 'The dismemberment of the primeval giant Ymir parallels the Vedic sacrifice of the cosmic giant Purusha (Rigveda 10.90) and Babylonian Marduk splitting Tiamat.'
  },

  // --- OVID: METAMORPHOSES FOUR AGES & GIANTS ---
  {
    id: 'ovid_four_ages',
    textId: 'hesiod_works_and_days',
    reference: 'Ovid, Metamorphoses I:89–162',
    title: 'The Four Ages of Humankind and the Assault of the Giants',
    cultureId: 'greco_roman',
    chronology: {
      dateOfStorySetting: 'From Golden Age to the Iron Age and the Gigantomachy',
      estimatedDateOfComposition: 'ca. 8 CE',
      dateOfEarliestSurvivingManuscript: 'Codex Marcianus (11th c. CE); Vatican Latin MSS',
      numericCompositionBCE: 8
    },
    originalLanguage: 'Classical Latin',
    originalText: `Aurea prima sata est aetas, quae vindice nullo, sponte sua, sine lege fidem rectumque colebat... Neve foret terris securior arduus aether, adfectasse ferunt regnum caeleste Gigantas altaque congestos struxisse ad sidera montes. Tum pater omnipotens misso perfregit Olympum fulmine et excussit subiecto Pelion Ossae. Obruta mole sua cum corpora dira iacerent, perfusam multo natorum sanguine Terram incaluisse ferunt calidumque animasse cruorem...`,
    transliteration: `Aurea prima sata est aetas, quae vindice nullo, sponte sua...`,
    englishTranslation: `Golden was that first age, which, with no avenger, of its own accord and without laws, fostered faith and right... And that high heaven might be no safer than the earth, they say that the Giants aspired to the celestial kingdom and piled mountains heaped upon mountains (Pelion upon Ossa) up to the stars. Then the Father Almighty shattered Olympus with a hurled thunderbolt, and struck Pelion down from under Ossa. When those dread bodies lay crushed beneath their own mass, Mother Earth, drenched in the copious blood of her sons, warmed the hot gore into life, and fashioned a new race of mortals—yet this generation too was contemptuous of the gods, thirsty for savage slaughter, and violent.`,
    translationAttribution: {
      translator: 'Frank Justus Miller',
      sourceWork: 'Ovid: Metamorphoses (Loeb Classical Library)',
      year: '1916',
      license: 'Public Domain',
      attributionNotice: 'Harvard University Press public domain translation.'
    },
    motifs: ['world_ages', 'giants', 'heroic_ages'],
    clickableTerms: ['titans', 'tartarus', 'gibborim'],
    criticalApparatusNotes: 'Ovid combines the Hesiodic doctrine of metal ages with the Gigantomachy, producing an account structurally identical to Genesis 6 where superhuman giants precede an era of total moral corruption and deluge.'
  },

  // --- GILGAMESH TABLET XI: THE DELUGE & BIRDS ---
  {
    id: 'gilgamesh_tablet_11_ark',
    textId: 'gilgamesh',
    reference: 'Epic of Gilgamesh, Tablet XI:24–35, 145–155',
    title: 'The Great Deluge, Mount Nimush, and the Release of the Birds',
    cultureId: 'mesopotamian',
    chronology: {
      dateOfStorySetting: 'Antediluvian city of Shuruppak on the Euphrates',
      estimatedDateOfComposition: 'ca. 1200–1000 BCE (Standard Babylonian version by Sin-liqe-unninni)',
      dateOfEarliestSurvivingManuscript: 'Kouyunjik cuneiform tablets from the Royal Library of Ashurbanipal (7th c. BCE, British Museum K.3375)',
      numericCompositionBCE: -1100
    },
    originalLanguage: 'Akkadian Cuneiform (Standard Babylonian)',
    originalText: `[Tablet XI:24–31]: uqqur bīta bini elippa, muššir mešrê še'i napšāti! makkūra zēr-ma napišta bulliṭ! šūli zēr napšāti kalāma ana libbi elippi... [XI:145–154]: umma erbet-ti uštēṣī-ma umaššer summatam, illik summati itūram-ma... uštēṣī-ma umaššer āriba, illik āribu-ma qadūt mê ēmuru, ikkal išaḥḥi itarri ul itūra.`,
    transliteration: `uqqur bīta bini elippa, muššir mešrê še'i napšāti! makkūra zēr-ma napišta bulliṭ! šūli zēr napšāti kalāma ana libbi elippi...`,
    englishTranslation: `Tear down your house and build a boat! Abandon wealth and seek life! Spurn possessions and keep living soul alive! Take aboard the boat seed of all living creatures... On Mount Nimush the boat ran aground; Mount Nimush held the boat fast and allowed it no motion... When the seventh day arrived, I sent forth a dove and let it go. The dove flew away, but came back: no perch was visible, so it turned around. Then I sent forth a swallow and let it go: no perch was visible, so it turned around. Then I sent forth a raven and let it go: the raven flew away, saw the receding waters, ate, croaked, and did not turn back. Then I opened everything to the four winds and offered a sacrifice upon the mountain peak.`,
    translationAttribution: {
      translator: 'Andrew George',
      sourceWork: 'The Epic of Gilgamesh: The Babylonian Epic Poem and Other Texts in Akkadian and Sumerian',
      year: '1999 / Scholarly Fair Use Quotation',
      license: 'Scholarly Fair Use Quotation',
      attributionNotice: 'Penguin Classics scholarly translation.'
    },
    motifs: ['great_flood'],
    clickableTerms: ['tehom', 'apkallu'],
    criticalApparatusNotes: 'Matches Genesis 8:6–12 with startling precision: both heroes send out birds (dove and raven), ground on a mountain, and offer a soothing aromatic sacrifice that draws the deity.'
  },

  // --- LOST BOOKS: BOOK OF THE WARS OF THE LORD ---
  {
    id: 'book_of_the_wars_of_the_lord',
    textId: 'lost_book_wars_of_lord',
    reference: 'Numbers 21:14–15',
    title: 'The Poetic Citation of the Ancient Lost "Book of the Wars of the LORD"',
    cultureId: 'hebrew_israelite',
    chronology: {
      dateOfStorySetting: 'Transjordan march past Arnon gorge',
      estimatedDateOfComposition: 'ca. 11th–10th century BCE (drawing on archaic poetry)',
      dateOfEarliestSurvivingManuscript: '4QNum^b (ca. 150 BCE); Aleppo Codex',
      numericCompositionBCE: -950
    },
    originalLanguage: 'Biblical Hebrew',
    originalText: `עַל־כֵּן יֵאָמַר בְּסֵפֶר מִלְחֲמֹת יְהוָה אֶת־וָהֵב בְּסוּפָה וְאֶת־הַנְּחָלִים אַרְנוֹן׃ וְאֶשֶׁד הַנְּחָלִים אֲשֶׁר נָטָה לְשֶׁבֶת עָר וְנִשְׁעַן לִגְבוּל מוֹאָב׃`,
    transliteration: `ʿAl-kēn yēʾāmar bə-Sēfer Milḥămōt Yahweh: ʾEt-Wāhēv bə-Sūfāh wə-ʾet-han-nəḥālīm ʾArnōn; wə-ʾešed han-nəḥālīm ʾăšer nāṭāh lə-ševet ʿĀr wə-nišʿan li-gvūl Mōʾāv.`,
    englishTranslation: `Wherefore it is said in the Book of the Wars of the LORD: 'Waheb in Suphah, and the wadis of the Arnon, and the slope of the wadis that reaches to the settlement of Ar, and leans against the border of Moab.'`,
    translationAttribution: {
      translator: 'Jewish Publication Society / ASV',
      sourceWork: 'The Holy Scriptures',
      year: '1917',
      license: 'Public Domain',
      attributionNotice: 'Public Domain Masoretic Text.'
    },
    motifs: ['heroic_ages'],
    clickableTerms: ['gibborim'],
    criticalApparatusNotes: 'Primary textual evidence that the biblical redactors consulted ancient Hebrew anthologies of epic poetry that were subsequently lost to history.'
  },

  // --- LOST BOOKS: BOOK OF JASHER IN JOSHUA 10 ---
  {
    id: 'book_of_jasher_joshua',
    textId: 'lost_book_jasher',
    reference: 'Joshua 10:12–13',
    title: 'The Miracle of the Sun Standing Still in the Lost "Book of Jasher"',
    cultureId: 'hebrew_israelite',
    chronology: {
      dateOfStorySetting: 'Battle of Gibeon / Valley of Aijalon',
      estimatedDateOfComposition: 'ca. 10th century BCE source cited in ca. 7th c. BCE Deuteronomistic History',
      dateOfEarliestSurvivingManuscript: '4QJosh^a (ca. 150 BCE)',
      numericCompositionBCE: -950
    },
    originalLanguage: 'Biblical Hebrew',
    originalText: `אָז יְדַבֵּר יְהוֹשֻׁעַ לַיהוָה בְּיוֹם תֵּת יְהוָה אֶת־הָאֱמֹרִי לִפְנֵי בְּנֵי יִשְׂרָאֵל וַיֹּאמֶר לְעֵינֵי יִשְׂרָאֵל שֶׁמֶשׁ בְּגִבְעוֹן דּוֹם וְיָרֵחַ בְּעֵמֶק אַיָּלוֹן׃ וַיִּדֹּם הַשֶּׁמֶשׁ וְיָרֵחַ עָמָד עַד־יִקֹּם גּוֹי אֹיְבָיו הֲלֹא־הִיא כְתוּבָה עַל־סֵפֶר הַיָּשָׁר וַיַּעֲמֹד הַשֶּׁמֶשׁ בַּחֲצִי הַשָּׁמַיִם וְלֹא־אָץ לָבוֹא כְּיוֹם תָּמִים׃`,
    transliteration: `ʾĀz yədabbēr Yəhōšūaʿ la-Yahweh... Šemeš bə-Givʿōn dōm wə-yārēaḥ bə-ʿĒmeq ʾAyyālōn. Wa-yiddōm haš-šemeš wə-yārēaḥ ʿāmād ʿad-yiqqōm gōy ʾōyəvāv. Hălōʾ-hīʾ kətūvāh ʿal-Sēfer hay-Yāšār...`,
    englishTranslation: `Then Joshua spoke to the LORD on the day the LORD delivered up the Amorites before the sons of Israel, and he said in the sight of Israel: 'Sun, stand still at Gibeon, and Moon, in the Valley of Aijalon.' And the sun stood still, and the moon stopped, until the nation took vengeance upon their enemies. Is this not written in the Book of Jasher? The sun stopped in the middle of heaven and delayed going down about a full day.`,
    translationAttribution: {
      translator: 'Standard Public Domain Version',
      sourceWork: 'English Revised Version',
      year: '1885',
      license: 'Public Domain',
      attributionNotice: 'Public Domain biblical translation.'
    },
    motifs: ['ancient_astronomy', 'heroic_ages'],
    clickableTerms: ['gibborim'],
    criticalApparatusNotes: 'IMPORTANT SCHOLARLY DISTINCTION: This ancient "Book of Jasher" cited in Joshua 10 and 2 Samuel 1 has been lost since antiquity. It must NOT be confused with the 1625 CE Venice Hebrew narrative compilation, nor 18th-century English forgeries bearing the same title.'
  },

  // --- DEAD SEA SCROLLS: BOOK OF GIANTS ---
  {
    id: 'book_of_giants_4q530',
    textId: 'book_of_giants',
    reference: '4Q530 (Book of Giants, Col. II:1–12)',
    title: 'The Nightmarish Dream-Visions of \'Ohyah and Hahyah Seeking Gilgamesh',
    cultureId: 'dead_sea_scrolls',
    chronology: {
      dateOfStorySetting: 'Antediluvian era prior to Noah\'s deluge',
      estimatedDateOfComposition: 'ca. 200–100 BCE',
      dateOfEarliestSurvivingManuscript: '4Q530 (original Aramaic scroll fragment from Qumran Cave 4, ca. 100 BCE)',
      numericCompositionBCE: -150
    },
    originalLanguage: 'Jewish Literary Aramaic',
    originalText: `[4Q530 Col. II:1–12]: ענו ואמרו קדם שמחזי ברהון חזוי חזינא... תרין מנהון אלפין גברין נחתין מן שמיא... וקרו לגלגמש...`,
    transliteration: `ʿanō w-ʾamrō qŏdām Šəmīḥazay bərēhōn: ḥezway ḥăzēnā... tarēn minhōn ʾalpīn gavrīn naḥtīn min šəmayyā... w-qərō lə-Gilgameš...`,
    englishTranslation: `Then 'Ohyah and Hahyah answered and said before Shemihazah their father: 'We saw a dream, and it has terrified our hearts! In our vision, gardeners descended from heaven and began to destroy a great garden, burning the trees with fire and digging up the roots, until only three shoots remained upon the earth.' And when the giants heard this, they wept bitterly and sought counsel, and called upon Gilgamesh and Hobabish to travel across the wilderness to find the scribe Enoch to interpret the heavenly tablet.`,
    translationAttribution: {
      translator: 'Florentino García Martínez',
      sourceWork: 'The Dead Sea Scrolls Translated',
      year: '1996 / Scholarly Fair Use Quotation',
      license: 'Scholarly Fair Use Quotation',
      attributionNotice: 'E.J. Brill scholarly translation of Qumran Aramaic.'
    },
    motifs: ['giants', 'watchers_rebellion', 'great_flood'],
    clickableTerms: ['nephilim', 'watchers', 'apkallu'],
    criticalApparatusNotes: 'A watershed discovery of the Dead Sea Scrolls: proves that Second Temple Jews actively integrated the Mesopotamian epic hero Gilgamesh and monster Humbaba (Hobabish) as antediluvian giants doomed by the impending Deluge.'
  },

  // --- EGYPTIAN: BOOK OF THE HEAVENLY COW ---
  {
    id: 'book_of_heavenly_cow',
    textId: 'book_of_heavenly_cow',
    reference: 'Book of the Heavenly Cow (Lines 1–32)',
    title: 'The Destruction of Mankind and Ra\'s Beer Deluge of Mercy',
    cultureId: 'egyptian',
    chronology: {
      dateOfStorySetting: 'Primordial golden age of Ra\'s earthly reign over Egypt',
      estimatedDateOfComposition: 'ca. 1350–1320 BCE',
      dateOfEarliestSurvivingManuscript: 'Outer gilded shrine of Tutankhamun (KV62, ca. 1323 BCE); Tomb of Seti I (KV17)',
      numericCompositionBCE: -1320
    },
    originalLanguage: 'Middle Egyptian (Hieroglyphic transcription)',
    originalText: `jw ḥm n Rʿ wsr(.w) m-ḫt jAw.t=f... ḏd.jn ḥm n Rʿ n jmy.w-ḫt=f: mj n=j jr.t=j Ḥw.t-Ḥr... wḏA.n jr.t r smA rmṯ.w ḥr ḏw.w...`,
    transliteration: `jw ḥm n Rʿ wsr(.w) m-ḫt jAw.t=f... ḏd.jn ḥm n Rʿ n jmy.w-ḫt=f: mj n=j jr.t=j Ḥw.t-Ḥr...`,
    englishTranslation: `Now the majesty of Ra had grown old; his bones were silver, his flesh gold, and his hair lapis lazuli. And mankind was plotting rebellion against his majesty in the hills. Then Ra summoned the gods of the primeval council: Shu, Tefnut, Geb, Nut, and Nun. Nun said: 'My son Ra, send forth your Eye to smite those who plot against you!' So the Eye of Ra descended as Hathor, and she slaughtered humanity throughout the night until she walked wading in their blood. Then Ra felt compassion for humankind, and said: 'I shall not destroy mankind!' Ra commanded seven thousand jars of barley beer to be mixed with red ochre from Elephantine, flooding the fields like the Nile. When the bloodthirsty goddess arrived at dawn, she gazed upon the flooded red beer, drank, became intoxicated, and no longer recognized mankind.`,
    translationAttribution: {
      translator: 'Miriam Lichtheim',
      sourceWork: 'Ancient Egyptian Literature, Vol. II: The New Kingdom',
      year: '1976 / Scholarly Fair Use Quotation',
      license: 'Scholarly Fair Use Quotation',
      attributionNotice: 'University of California Press scholarly translation.'
    },
    motifs: ['great_flood', 'destruction_recreation_humanity'],
    clickableTerms: ['sheol'],
    criticalApparatusNotes: 'Egyptian parallel to the Near Eastern deluge: divine punishment sent to annihilate corrupt rebellious humanity, followed by divine repentance and an inundation that spares the human remnant.'
  },

  // --- TESTAMENT OF MOSES & JUDE 9 ---
  {
    id: 'testament_of_moses_jude',
    textId: 'testament_of_moses',
    reference: 'Testament of Moses / Assumptio Mosis 1:14–18 & Jude 9',
    title: 'The Archangel Michael Contending with the Devil over Moses\' Body',
    cultureId: 'second_temple_jewish',
    chronology: {
      dateOfStorySetting: 'Plains of Moab upon Mount Nebo at Moses\' death',
      estimatedDateOfComposition: 'ca. early 1st century CE',
      dateOfEarliestSurvivingManuscript: 'Codex Ambrosianus C. 73 inf. (6th-century Latin palimpsest, Milan)',
      numericCompositionBCE: 20
    },
    originalLanguage: 'Latin Palimpsest (from lost Semitic/Greek original)',
    originalText: `[Latin Palimpsest / Origen De Principiis III.2.1]: Cum Michael archangelus cum diabolo disputans altercaretur de corpore Moysi... non ausus est iudicium inferre blasphemiae, sed dixit: Increpet te Dominus.`,
    transliteration: `Cum Michael archangelus cum diabolo disputans altercaretur de corpore Moysi...`,
    englishTranslation: `When the days of the Assumption of Moses were at hand, Moses called Joshua and said: 'God has appointed you to lead this people into the land... Keep these books which I deliver unto you, and set them in earthen jars until the day of repentance.' And as church fathers Origen and Clement record, when Moses died on Mount Nebo, Michael the archangel contended with Samael the devil over Moses' body; the devil claimed Moses was a murderer (having killed the Egyptian), but Michael did not dare bring an abusive accusation against him, but said: 'The Lord rebuke you!'`,
    translationAttribution: {
      translator: 'R.H. Charles',
      sourceWork: 'The Assumption of Moses Translated from the Latin Sixth Century MS',
      year: '1897',
      license: 'Public Domain',
      attributionNotice: 'A. & C. Black classic critical translation.'
    },
    motifs: ['divine_councils'],
    clickableTerms: ['son_of_man'],
    criticalApparatusNotes: 'Universally recognized in patristic and modern scholarship as the ancient pseudepigraphal source behind Jude 9 in the New Testament.'
  },

  // --- DEUTERONOMY 32:8–9 (SONS OF GOD / 4QDEUT^J) ---
  {
    id: 'deut_32_8_9',
    textId: 'deuteronomy_32',
    reference: 'Deuteronomy 32:8–9 (Song of Moses)',
    title: 'The Division of the Nations According to the Sons of God',
    cultureId: 'hebrew_israelite',
    chronology: {
      dateOfStorySetting: 'Plains of Moab (Farewell discourse of Moses)',
      estimatedDateOfComposition: 'ca. 9th–8th century BCE (archaic poetic stratum)',
      dateOfEarliestSurvivingManuscript: '4QDeut^j (4Q37) and 4QDeut^q (4Q44) from Qumran (ca. 100 BCE); Septuagint Greek (3rd c. BCE)',
      numericCompositionBCE: -750
    },
    originalLanguage: 'Archaic Biblical Hebrew (Qumran 4QDeut^j reading)',
    originalText: `בְּהַנְחֵל עֶלְיוֹן גּוֹיִם בְּהַפְרִידוֹ בְּנֵי אָדָם יַצֵּב גְּבֻלֹת עַמִּים לְמִסְפַּר בְּנֵי אֱלֹהִים׃ כִּי חֵלֶק יְהוָה עַמּוֹ יַעֲקֹב חֶבֶל נַחֲלָתוֹ׃`,
    transliteration: `Bə-hanḥēl ʿElyōn gōyīm, bə-hafrīdō bənē ʾādām, yaṣṣēv gəvulōt ʿammīm lə-mispar bənē ʾĔlōhīm. Kī ḥēleq Yahweh ʿammō, Yaʿaqōv ḥevel naḥălātō.`,
    englishTranslation: `When the Most High (Elyon) gave the nations their inheritance, when he divided humanity, he set the boundaries of the peoples according to the number of the sons of God (bene Elohim). But Yahweh's portion is his people, Jacob his allotted heritage.`,
    translationAttribution: {
      translator: 'Critical Scholarly Reconstruction based on 4QDeut^j and LXX',
      sourceWork: 'The Dead Sea Scrolls Bible (Abegg, Flint, Ulrich)',
      year: '1999',
      license: 'Scholarly Fair Use Quotation',
      attributionNotice: 'Restores the original archaic Hebrew reading confirmed by Dead Sea Scroll 4QDeut^j and the Septuagint (κατὰ ἀριθμὸν ἀγγέλων θεοῦ).'
    },
    motifs: ['divine_council', 'sacred_mountains'],
    clickableTerms: ['elyon', 'bene_haelohim'],
    criticalApparatusNotes: 'One of the most consequential textual discoveries from Qumran. The medieval Masoretic Text reads "sons of Israel" (לְמִסְפַּר בְּנֵי יִשְׂרָאֵל), whereas Dead Sea Scrolls 4QDeut^j and 4QDeut^q read "sons of God" (בני אלוהים), exactly matching the Septuagint. Emanuel Tov and Frank Moore Cross established that the Masoretic tradition sanitized the polytheistic/council terminology.'
  },

  // --- PSALM 82:1–8 (DIVINE ASSEMBLY) ---
  {
    id: 'psalm_82_1_8',
    textId: 'psalm_82',
    reference: 'Psalm 82:1–8',
    title: 'Elohim Presiding in the Council of El and Judging the Gods',
    cultureId: 'hebrew_israelite',
    chronology: {
      dateOfStorySetting: 'Heavenly Divine Council Assembly',
      estimatedDateOfComposition: 'ca. 8th–6th century BCE',
      dateOfEarliestSurvivingManuscript: '11QPs^a from Qumran; Aleppo Codex; Leningrad Codex',
      numericCompositionBCE: -700
    },
    originalLanguage: 'Biblical Hebrew',
    originalText: `אֱלֹהִים נִצָּב בַּעֲדַת־אֵל בְּקֶרֶב אֱלֹהִים יִשְׁפֹּט׃ עַד־מָתַי תִּשְׁפְּטוּ־עָוֶל וּפְנֵי רְשָׁעִים תִּשְׂאוּ־סֶלָה׃ ... אֲ‍נִי־אָמַרְתִּי אֱלֹהִים אַתֶּם וּבְנֵי עֶלְיוֹן כֻּלְּכֶם׃ אָכֵן כְּאָדָם תְּמוּתוּן וּכְאַחַד הַשָּׂרִים תִּפֹּלוּ׃ קוּמָה אֱלֹהִים שָׁפְטָה הָאָרֶץ כִּי־אַתָּה תִנְחַל בְּכָל־הַגּוֹיִם׃`,
    transliteration: `ʾĔlōhīm niṣṣāv ba-ʿădat-ʾĒl, bə-qerev ʾĕlōhīm yišpōṭ: ʿAd-mātay tišpəṭū-ʿāwel ū-fənē rəšāʿīm tiśʾū-selāh?... ʾĂnī-ʾāmartī ʾĕlōhīm ʾattem ū-vənē ʿElyōn kulləkem: ʾĀkēn kə-ʾādām təmūtūn ū-kə-ʾaḥad haś-śārīm tippōlū. Qūmāh ʾĔlōhīm šofṭāh hā-ʾāretz, kī-ʾattāh tinḥal bə-kol-hag-gōyīm.`,
    englishTranslation: `God stands in the assembly of El; in the midst of the gods he renders judgment: 'How long will you judge unjustly and show partiality to the wicked? Defend the weak and the orphan; uphold the cause of the poor and the oppressed!' ... 'I said, You are gods, and all of you sons of the Most High (bene Elyon). Nevertheless, like mortals you shall die, and fall like any prince.' Arise, O God, judge the earth, for you shall inherit all the nations!`,
    translationAttribution: {
      translator: 'Scholarly Translation (conforming to Masoretic Text and NRSV)',
      sourceWork: 'The Holy Scriptures / Psalter',
      year: '1989',
      license: 'Public Domain',
      attributionNotice: 'Masoretic Hebrew Text (BHS) and Dead Sea Scrolls Psalter evidence.'
    },
    motifs: ['divine_council'],
    clickableTerms: ['elyon', 'bene_haelohim'],
    criticalApparatusNotes: 'Directly replicates Northwest Semitic council terminology: עֲדַת־אֵל (adat-El) is identical to the Ugaritic phr mʿd / ʿdt ʾilm (assembly of El). Demonstrates the transition from monolatrous council theology to universal monotheism.'
  },

  // --- BAAL CYCLE: DEATH & RESURRECTION (KTU 1.6) ---
  {
    id: 'baal_vs_mot',
    textId: 'baal_death_mot',
    reference: 'Baal Cycle (KTU 1.6:II.30–37)',
    title: 'Anat Cleaving Mot (Death) and Baal\'s Cosmic Resurgence',
    cultureId: 'canaanite_ugaritic',
    chronology: {
      dateOfStorySetting: 'Primeval seasonal myth of drought and cosmic resurrection',
      estimatedDateOfComposition: 'ca. 1350–1200 BCE',
      dateOfEarliestSurvivingManuscript: 'Ras Shamra cuneiform clay tablets KTU 1.6 (Damascus Museum RS 2.[009])',
      numericCompositionBCE: -1250
    },
    originalLanguage: 'Ugaritic cuneiform',
    originalText: `𐎚𐎜𐎃𐎄 𐎎𐎚 𐎁𐎐 𐎛𐎍𐎎 𐎁𐎃𐎗𐎁 𐎚𐎁𐎖𐎓𐎐𐎐 𐎁𐎉𐎗𐎃 𐎚𐎄𐎗𐎹𐎐𐎐 𐎁𐎛𐎌𐎚 𐎚𐎌𐎗𐎔𐎐𐎐 𐎁𐎗𐎊𐎎 𐎚𐎉𐎈𐎐𐎐 𐎁𐎌𐎄 𐎚𐎄𐎗𐎓𐎐𐎐`,
    transliteration: `Tiʾḫadu Mōta bina ʾilīma; bi-ḫarbi tibqaʿunanni, bi-ḫaṭri tidrayunanni, bi-ʾišati tišrupunanni, bi-raḥayimi tiṭḥanunanni, bi-šadē tidraʿunanni.`,
    englishTranslation: `She seized Mot (Death), the son of El; with a sword she cleaved him; with a sieve she winnowed him; with fire she burned him; with millstones she ground him; in the field she sowed him! His flesh the birds ate; his limbs the fowl devoured. Piece by piece was scattered... Then the heavens rained oil, and the ravines ran with honey! And I knew that Mighty Baal was alive, that the Prince, Lord of the Earth, existed!`,
    translationAttribution: {
      translator: 'Michael D. Coogan and Mark S. Smith',
      sourceWork: 'Stories from Ancient Canaan',
      year: '2012',
      license: 'Scholarly Fair Use Quotation',
      attributionNotice: 'Westminster John Knox Press scholarly translation of Ras Shamra tablets.'
    },
    motifs: ['chaoskampf', 'underworld_descent'],
    clickableTerms: ['lotan', 'sheol'],
    criticalApparatusNotes: 'Mot (Death) is depicted with a cosmic appetite that swallows gods and men alive. Isaiah 25:8 deliberately reverses this Canaanite mythology: "He will swallow up death [Mot] forever (billa ha-mavet la-netzah)", which Paul quotes in 1 Cor 15:54 ("Death is swallowed up in victory").'
  },

  // --- THE CODE OF HAMMURABI (LEX TALIONIS) ---
  {
    id: 'code_of_hammurabi_lex',
    textId: 'code_of_hammurabi',
    reference: 'Code of Hammurabi (§§196–200 & Epilogue)',
    title: 'Lex Talionis and the Sun God of Justice (Shamash)',
    cultureId: 'mesopotamian',
    chronology: {
      dateOfStorySetting: 'Reign of Hammurabi of Babylon (ca. 1792–1750 BCE)',
      estimatedDateOfComposition: 'ca. 1754 BCE',
      dateOfEarliestSurvivingManuscript: 'Diorite Stele from Susa (Louvre Sb 8, 18th c. BCE)',
      numericCompositionBCE: -1754
    },
    originalLanguage: 'Old Babylonian Akkadian cuneiform',
    originalText: `[Akkadian Cuneiform §§196–200]: šumma awīlum īn mār awīlim uḫtappid, īnšu uḫappadū. šumma eṣemti awīlim išteber, eṣemtīšu išebbirū...`,
    transliteration: `šumma awīlum īn mār awīlim uḫtappid, īnšu uḫappadū. šumma eṣemti awīlim išteber, eṣemtīšu išebbirū. šumma šin prestige awīlim išteber, šinnašu išebbirū.`,
    englishTranslation: `If a citizen has destroyed the eye of another citizen, they shall destroy his eye. If he has broken the bone of a citizen, they shall break his bone. If he has knocked out the tooth of a citizen of his own rank, they shall knock out his tooth. ... That the strong might not injure the weak, that the orphan and widow might have justice, I inscribed my precious words upon my stele before the statue of myself as the king of justice, in the presence of Shamash, the great judge of heaven and earth.`,
    translationAttribution: {
      translator: 'L.W. King',
      sourceWork: 'The Code of Hammurabi',
      year: '1910',
      license: 'Public Domain',
      attributionNotice: 'Classic critical edition of the Susa stele (Louvre Museum).'
    },
    motifs: ['lawgiver_on_mountain'],
    clickableTerms: ['maat'],
    criticalApparatusNotes: 'Matches the exact syntactical phrasing and legal formula of Exodus 21:23–25 ("eye for eye, tooth for tooth, hand for hand, foot for foot"). Both formulate case law (casuistic form: "if a person does X, then Y shall happen") rooted in ancient Near Eastern customary jurisprudence.'
  },

  // --- DESCENT OF ISHTAR TO THE NETHERWORLD ---
  {
    id: 'ishtar_netherworld_descent',
    textId: 'ishtar_descent',
    reference: 'Descent of Ishtar (Lines 1–15 & 40–50)',
    title: 'The Seven Gates of the Land of No Return (Irkalla)',
    cultureId: 'mesopotamian',
    chronology: {
      dateOfStorySetting: 'Primordial netherworld journey',
      estimatedDateOfComposition: 'ca. 1200 BCE (Standard Babylonian version)',
      dateOfEarliestSurvivingManuscript: 'Cuneiform tablets from Ashurbanipal\'s Library at Nineveh (K. 162)',
      numericCompositionBCE: -1200
    },
    originalLanguage: 'Standard Babylonian Akkadian',
    originalText: `ana māt lā tāri qaqqar E-reš-kī-gal, Ištar mārat Sîn uznīša iškun... ana bīt e-ṭe-e šubat Irkalla, ana bīti ša ēribūšu lā uṣṣû...`,
    transliteration: `ana māt lā tāri qaqqar Ereškīgal, Ištar mārat Sîn uznīša iškun... ana bīt eṭê šubat Irkalla, ana bīti ša ēribūšu lā uṣṣû, ana ḫarrāni ša alaktāša lā tārat...`,
    englishTranslation: `To the Land of No Return, the realm of Ereshkigal, Ishtar daughter of Sin set her mind. The goddess set her mind to the dark house, the dwelling of Irkalla; to the house from which he who enters never departs; on the road whose path turns not back; to the house where those who enter are deprived of light, where dust is their sustenance and clay their food, where they see no light and dwell in darkness, clothed like birds in wings of feathers, where dust lies thick upon door and bolt.`,
    translationAttribution: {
      translator: 'E.A. Wallis Budge',
      sourceWork: 'The Babylonian Legends of the Creation and the Fight between Bel and the Dragon',
      year: '1921',
      license: 'Public Domain',
      attributionNotice: 'British Museum classic translation of Nineveh tablet K. 162.'
    },
    motifs: ['underworld_descent'],
    clickableTerms: ['sheol', 'tartarus'],
    criticalApparatusNotes: 'Provides the vivid Mesopotamian blueprint for the Hebrew underworld of Sheol (Job 10:21–22 "land of darkness and deep shadow... from which I shall not return"). In both, the dead dwell as inert shades eating dust in subterranean gloom.'
  },

  // --- HESIOD: WORKS AND DAYS (THE FIVE AGES) ---
  {
    id: 'hesiod_five_ages',
    textId: 'hesiod_works_days',
    reference: 'Hesiod Works and Days (Lines 109–130)',
    title: 'The Golden and Silver Races of Declining Humanity',
    cultureId: 'greco_roman',
    chronology: {
      dateOfStorySetting: 'Cosmic history from Kronos to the present Iron Age',
      estimatedDateOfComposition: 'ca. 700 BCE',
      dateOfEarliestSurvivingManuscript: 'Hellenistic papyri and medieval Byzantine codices',
      numericCompositionBCE: -700
    },
    originalLanguage: 'Ancient Epic Greek',
    originalText: `Χρύσεον μὲν πρώτιστα γένος μερόπων ἀνθρώπων ἀθάνατοι ποίησαν Ὀλύμπια δώματ᾽ ἔχοντες... οἳ μὲν ἐπὶ Κρόνου ἦσαν, ὅτ᾽ οὐρανῷ ἐμβασίλευεν· ὥστε θεοὶ δ᾽ ἔζωον ἀκηδέα θυμὸν ἔχοντες... Δεύτερον αὖτε γένος πολὺ χειρότερον μετόπισθεν ἀργύρεον ποίησαν Ὀλύμπια δώματ᾽ ἔχοντες...`,
    transliteration: `Chryseon men prōtista genos meropōn anthrōpōn athanatoi poiēsan Olympia dōmat' echontes... hoi men epi Kronou ēsan, hot' ouranōi embasileuen; hōste theoi d' ezōon akēdea thymon echontes... Deuteron aute genos poly cheiroteron metopisthen argyreon poiēsan Olympia dōmat' echontes...`,
    englishTranslation: `First of all, the deathless gods who dwell on Olympus created a Golden race of mortal men. These lived in the time of Kronos when he was king in heaven; and they lived like gods without sorrow of heart, remote from toil and grief. Miserable old age did not rest upon them... and they died as though subdued by sleep. ... Afterwards, those who dwell on Olympus made a second generation, far worse, of Silver, neither in stature like the golden race nor in mind. A child was brought up by his mother a hundred years, playing as a mere babe... and when they were grown, they lived only a short time in sorrows because of their foolishness.`,
    translationAttribution: {
      translator: 'Hugh G. Evelyn-White',
      sourceWork: 'Hesiod, The Homeric Hymns and Homerica (Loeb Classical Library)',
      year: '1914',
      license: 'Public Domain',
      attributionNotice: 'Harvard University Press classic Loeb edition.'
    },
    motifs: ['heroic_ages'],
    clickableTerms: ['titans', 'gibborim'],
    criticalApparatusNotes: 'Matches the metal sequence of the four-kingdom vision in Daniel 2:31–45 (Gold, Silver, Bronze, Iron, Clay). Demonstrates an ancient pan-Mediterranean and Near Eastern historiographical model of cosmic decline.'
  },

  // --- JUBILEES 10:1–11 (BINDING OF DEMONS & MASTEMA) ---
  {
    id: 'jubilees_10_demons',
    textId: 'jubilees_demons',
    reference: 'Book of Jubilees 10:1–11',
    title: 'The Spirits of the Drowned Nephilim and Prince Mastema',
    cultureId: 'second_temple_jewish',
    chronology: {
      dateOfStorySetting: 'Post-flood era of Noah and his grandsons',
      estimatedDateOfComposition: 'ca. 160–150 BCE',
      dateOfEarliestSurvivingManuscript: 'Qumran Cave 4 Hebrew scrolls (4Q216); Ge\'ez manuscripts (EMML 4437)',
      numericCompositionBCE: -150
    },
    originalLanguage: 'Ge\'ez (translated from Hebrew Vorlage)',
    originalText: `[Ge'ez Jubilees 10:3, 8]: ወጸለየ ኖኅ ቅድመ እግዚአብሔር አምላኩ... ወመጽአ መልአከ እግዚአብሔር ወነገረነ ከመ ንእስሮሙ... ወመጽአ መስቴማ መልአከ መናፍስት ወይቤ እግዚእ ፈጣሪ ይትረፉ እምኔሆሙ ቅድሜየ...`,
    transliteration: `Wa-ṣallaya Nōḫ qədma ʾƎgziʾabḥēr ʾAmlāku... Wa-maṣʾa Mastēmā malʾaka manāfəst wa-yəbē: ʾƎgzīʾ faṭārī, yətrafū ʾəmnēhōmu qədmēya...`,
    englishTranslation: `And in the third week of this jubilee, the unclean demons began to lead astray the children of the sons of Noah, and to blind and destroy them. And Noah prayed before the Lord his God: 'God of the spirits of all flesh, let not evil spirits rule over them... let them be shut up in the place of condemnation, and let them not destroy your servant's sons!' And the Lord commanded us to bind all of them. But the chief of the spirits, Mastema, came and said: 'Lord, Creator, let some of them remain before me, and let them listen to my voice and do all that I shall say to them; for if some of them are not left to me, I shall not be able to execute the power of my will on the sons of men, for these are for corruption and leading astray before my judgment!' And God commanded: 'Let the tenth part of them remain before him, and let nine parts descend into the place of condemnation.'`,
    translationAttribution: {
      translator: 'R.H. Charles',
      sourceWork: 'The Apocrypha and Pseudepigrapha of the Old Testament, Vol. II',
      year: '1913',
      license: 'Public Domain',
      attributionNotice: 'Clarendon Press classic critical translation.'
    },
    motifs: ['origin_of_demons', 'watchers_rebellion', 'giants'],
    clickableTerms: ['mastema', 'nephilim', 'watchers'],
    criticalApparatusNotes: 'Fundamental Second Temple text establishing that demons are the disembodied spirits of the drowned Nephilim. Explains New Testament passages where demons roam waterless places (Matt 12:43) and plead not to be sent to the abyss before the appointed time (Luke 8:31).'
  },

  // --- COMMUNITY RULE: TWO SPIRITS (1QS III.17–25) ---
  {
    id: 'community_rule_two_spirits',
    textId: 'community_rule_1qs',
    reference: 'Community Rule (1QS III.17–25)',
    title: 'The Treatise on the Two Spirits: Prince of Lights and Angel of Darkness',
    cultureId: 'dead_sea_scrolls',
    chronology: {
      dateOfStorySetting: 'Eschatological cosmic dualism in the Judean Wilderness',
      estimatedDateOfComposition: 'ca. 120–100 BCE',
      dateOfEarliestSurvivingManuscript: '1QS from Qumran Cave 1 (ca. 100–75 BCE, Shrine of the Book)',
      numericCompositionBCE: -100
    },
    originalLanguage: 'Late Biblical Hebrew',
    originalText: `הוּא בָרָא אֱנוֹשׁ לְמֶמְשֶׁלֶת תֵּבֵל וַיָּשֶׂם לוֹ שְׁתֵּי רוּחוֹת לְהִתְהַלֵּךְ בָּם עַד מוֹעֵד פְּקֻדָּתוֹ: הֵמָּה רוּחוֹת הָאֱמֶת וְהָעָוֶל: בִּמְעוֹן אוֹר תּוֹלְדוֹת הָאֱמֶת וּמִמְּקוֹר חֹשֶׁךְ תּוֹלְדוֹת הָעָוֶל: בְּיַד שַׂר אוֹרִים מֶמְשֶׁלֶת כָּל בְּנֵי צֶדֶק... וּבְיַד מַלְאַךְ חֹשֶׁךְ כָּל מֶמְשֶׁלֶת בְּנֵי עָוֶל...`,
    transliteration: `Hūʾ vārāʾ ʾĕnōš lə-memšelet tēvēl, wa-yāśem lō šətē rūḥōt lə-hithallēk bām ʿad mōʿēd pəquddātō: hēmmāh rūḥōt hā-ʾĕmet wə-hā-ʿāwel. Bimʿōn ʾōr tōlədōt hā-ʾĕmet, ū-mi-məqōr ḥōšek tōlədōt hā-ʿāwel. Bə-yad Śar ʾŌrīm memšelet kol bənē ṣedeq... ū-və-yad Malʾak Ḥōšek kol memšelet bənē ʿāwel...`,
    englishTranslation: `He created humanity to have dominion over the world, and designed for him two spirits, so that he might walk in them until the appointed time of his visitation: they are the spirits of Truth and Injustice. In the spring of Light are the generations of Truth, and from the well of Darkness are the generations of Injustice. The Prince of Lights rules over all the children of righteousness, and in the paths of light they walk; but the Angel of Darkness rules over all the dominion of the children of injustice, and in the paths of darkness they walk.`,
    translationAttribution: {
      translator: 'Geza Vermes',
      sourceWork: 'The Complete Dead Sea Scrolls in English',
      year: '1997 / Scholarly Fair Use Quotation',
      license: 'Scholarly Fair Use Quotation',
      attributionNotice: 'Penguin Classics standard translation of the Qumran manuscripts.'
    },
    motifs: ['two_ways_two_spirits'],
    clickableTerms: ['archons', 'mastema'],
    criticalApparatusNotes: 'Reflects Persian Zoroastrian dualistic influence (Spenta Mainyu vs Angra Mainyu) synthesized into monotheistic Jewish covenant theology. Directly parallels the Johannine contrast between light and darkness (John 1:5, 8:12) and 1 John 4:6 ("the Spirit of Truth and the spirit of deception").'
  },

  // --- EGYPTIAN BOOK OF THE DEAD: SPELL 125 (WEIGHING OF THE HEART) ---
  {
    id: 'egyptian_weighing_heart',
    textId: 'egyptian_book_of_dead',
    reference: 'Papyrus of Ani (Book of the Dead Spell 125)',
    title: 'The Psychostasia: Weighing the Heart Against the Feather of Ma\'at',
    cultureId: 'egyptian',
    chronology: {
      dateOfStorySetting: 'Post-mortem Hall of the Two Truths before Osiris',
      estimatedDateOfComposition: 'ca. 1550–1250 BCE',
      dateOfEarliestSurvivingManuscript: 'Papyrus of Ani (BM EA 10470, ca. 1250 BCE, 19th Dynasty)',
      numericCompositionBCE: -1250
    },
    originalLanguage: 'Middle Egyptian Hieroglyphic',
    originalText: `jb=j n mwt=j, jb=j n ḫprw=j, m ʿḥʿ r=j m mtrw, m ṯsf r=j m ḏAḏA.t, m jr rqw r=k r=j m-bAH jr.y-mḫA.t...`,
    transliteration: `jb=j n mwt=j, jb=j n ḫprw=j, m ʿḥʿ r=j m mtrw, m ṯsf r=j m ḏAḏA.t, m jr rqw r=k r=j m-bAH jr.y-mḫA.t...`,
    englishTranslation: `O my heart which I received from my mother! O my heart of my diverse ages! Stand not up as a witness against me! Confront me not before the judges! Cause not my name to stink before the great court of Osiris! Speak no falsehood against me in the presence of the Great God, the Lord of the West! Lo, you are the ka which is in my body, the protector who makes my limbs sound. Behold, Thoth speaks: 'Hear this verdict! The heart of Osiris Ani has indeed been weighed, and his soul has stood as witness for him. His score has been found true on the Great Balance; no sin of his has been discovered; he was not greedy of offerings in the temples!'`,
    translationAttribution: {
      translator: 'E.A. Wallis Budge',
      sourceWork: 'The Egyptian Book of the Dead (The Papyrus of Ani in the British Museum)',
      year: '1895',
      license: 'Public Domain',
      attributionNotice: 'British Museum classic hieroglyphic edition.'
    },
    motifs: ['cosmic_scales_judgment'],
    clickableTerms: ['maat'],
    criticalApparatusNotes: 'The visual balance where the heart is weighed against the ostrich feather of Ma\'at is the supreme ancient icon of moral accountability, reflected directly in biblical texts: Daniel 5:27 ("Tekel: you have been weighed in the balances and found wanting") and Job 31:6 ("Let me be weighed on a just balance, that God may know my integrity").'
  },

  // --- APOCRYPHON OF JOHN (NAG HAMMADI NHC II, 1) ---
  {
    id: 'apocryphon_of_john_passage',
    textId: 'apocryphon_of_john',
    reference: 'Apocryphon of John (NHC II, 1:29:15–30:10)',
    title: 'Yaldabaoth and the Counterfeit Spirit: The Gnostic Genesis 6',
    cultureId: 'second_temple_jewish',
    chronology: {
      dateOfStorySetting: 'Primordial cosmic corruption and origin of matter',
      estimatedDateOfComposition: 'ca. 120–150 CE',
      dateOfEarliestSurvivingManuscript: 'Nag Hammadi Codex II (ca. 350 CE, Coptic Museum, Cairo)',
      numericCompositionBCE: 140
    },
    originalLanguage: 'Sahidic Coptic',
    originalText: `[Coptic NHC II, 1:29]: ⲁⲩⲱ ⲛ̅ⲧⲉⲣⲉ ⲡⲁⲣⲭⲱⲛ ⲛⲁⲩ ϫⲉ ⲁⲩϫⲓⲥⲉ ⲉϩⲟⲩⲛ ⲉⲣⲟϥ... ⲁϥⲧⲁⲙⲓⲟ ⲛ̅ⲟⲩⲡⲛⲉⲩⲙⲁ ⲛ̅ⲁⲛⲧⲓⲙⲓⲙⲟⲛ... ⲁⲩϫⲓ ⲛ̅ϩⲉⲛϩⲓⲟⲙⲉ ⲁⲩϫⲡⲟ ⲛ̅ϩⲉⲛϣⲏⲣⲉ ⲉⲩⲟ ⲛ̅ⲅⲓⲅⲁⲥ...`,
    transliteration: `Auō ntere parxōn nau je aujise ehoun erof... aftamio n-oupneuma n-antimimon... auji n-henhiome aujpo n-henshēre euo n-gigas...`,
    englishTranslation: `And when the chief archon (Yaldabaoth) saw that human beings were exalted above him in thought, he took counsel with his authorities (archons). They created fate (heimarmene), and bound the gods of the heavens, angels, demons, and human beings with measures, seasons, and times. Then the chief archon repented of all that had come into being through him. And he sent his angels to the daughters of men, so that they might take them for themselves and raise up offspring for their pleasure. And they brought gold, silver, copper, iron, and all kinds of craft to humanity, leading them astray into darkness. And their angels took women and begat children out of darkness, giants who oppressed humanity; and they created the counterfeit spirit (antimimon pneuma) which blinds the human heart to the transcendent Light.`,
    translationAttribution: {
      translator: 'Frederik Wisse',
      sourceWork: 'The Nag Hammadi Library in English (ed. James M. Robinson)',
      year: '1988 / Scholarly Fair Use Quotation',
      license: 'Scholarly Fair Use Quotation',
      attributionNotice: 'Harper & Row authoritative translation of the Coptic Gnostic codices.'
    },
    motifs: ['watchers_rebellion', 'forbidden_knowledge', 'giants', 'divine_human_offspring'],
    clickableTerms: ['yaldabaoth', 'archons', 'watchers', 'nephilim'],
    criticalApparatusNotes: 'Blends Genesis 6:1–4 with 1 Enoch 7–8 (angels teaching metalworking and cosmetics) into an esoteric metaphysical framework, showing how Second Temple Enochic traditions were adapted by early Christian Gnostics.'
  },

  // --- ENUMA ELISH (TABLET IV: SLAUGHTER OF TIAMAT & CREATION OF COSMOS) ---
  {
    id: 'enuma_elish_tablet_4',
    textId: 'enuma_elish',
    reference: 'Enūma Eliš (Tablet IV: lines 93–146)',
    title: 'Marduk Splits Tiamat: Creation of Heaven and Earth from the Deep',
    cultureId: 'mesopotamian',
    chronology: {
      dateOfStorySetting: 'Primordial cosmic battle prior to human creation',
      estimatedDateOfComposition: 'ca. 12th–11th century BCE',
      dateOfEarliestSurvivingManuscript: 'Kuyunjik / Nineveh cuneiform tablets (ca. 7th c. BCE, British Museum)',
      numericCompositionBCE: -1150
    },
    originalLanguage: 'Standard Babylonian (Akkadian cuneiform)',
    originalText: `[Akkadian cuneiform Tablet IV]:
93. Ti-amat u Marduk marik ilāni it-te-en-gu-u
94. ana šit-nu-ni it-qu-bu ana tam-ḫa-ri
101. uš-par-ri-ir-ma be-lum sa-pa-ra-šu uš-al-mi-ši
103. im-ḫul-la a-na pa-ni-ša uš-te-eṣ-bi-it
129. i-ni-iḫ-ma be-lum ša-lam-tuš i-bar-ri
137. i-ḫep-pi-ši-ma ki-ma nu-un maš-te-e a-na ši-ni-šu
138. miš-lu-ša iš-kun-ma ša-ma-ma u-ṣa-al-lil
139. iš-du-ud mar-ka-sa na-ṣi-ra u-ša-aṣ-bit
140. me-e-ša la šu-ṣa-a šu-nu-ti um-ta-'-ir`,
    transliteration: `Tīāmat u Marduk mālik ilāni ittengû, ana šitnuni itqubū ana tamḫāri... ušparrir-ma bēlum sapārašu ušalmīši... imḫulla ana pānīša uštēṣbit... inīḫ-ma bēlum šalamtuš ibarri, iḫeppīšī-ma kīma nūn maštê ana šinīšu; mišlūša iškun-ma šamāma uṣallil, išdud markasa nāṣira ušaṣbit, mêša lā šūṣâ šunūti umta''ir.`,
    englishTranslation: `Tiamat and Marduk, champion of the gods, confronted each other; they drew near to battle, approaching the combat. The Lord spread out his net and enveloped her; the evil wind he unleashed full in her face. When she opened her mouth to swallow him, he drove in the evil wind so that her lips could not shut. The fierce winds filled her belly, her inner organs were seized, and she opened wide her mouth. He shot an arrow, it tore through her belly, cut through her insides, and split her heart. Having subdued her, he snuffed out her life; he cast down her carcass and stood upon it. The Lord paused to examine her dead body, to divide the monstrous lump and fashion artful works. He split her into two parts like a dried flat fish: one half of her he set up and stretched out as the heavens; he pulled down the bar and posted guards, commanding them not to let her waters escape.`,
    translationAttribution: {
      translator: 'L.W. King / Scholarly Standard Edition',
      sourceWork: 'The Seven Tablets of Creation (Luzac\'s Semitic Text and Translation Series)',
      year: '1902 / Public Domain',
      license: 'Public Domain',
      attributionNotice: 'Public Domain critical edition of the British Museum cuneiform tablets.'
    },
    motifs: ['chaoskampf', 'great_flood', 'creation_waters'],
    clickableTerms: ['tiamat_tehom', 'lotan_leviathan'],
    criticalApparatusNotes: 'Directly informs the West Semitic mythic memory of creation. The unarticulated Hebrew term Tehom (תְּהוֹם) in Genesis 1:2 is linguistically cognate with Tiamat. Psalm 74:13–17 and Job 26:12 ("By his power he stilled the sea; by his understanding he shattered Rahab") preserve the poetic combat imagery where God slays the sea monster and fixes the cosmic boundaries.'
  },

  // --- THE INSTRUCTION OF AMENEMOPE (PAPYRUS BM 10474, CHAPTER 1) ---
  {
    id: 'instruction_of_amenemope_ch1',
    textId: 'instruction_of_amenemope',
    reference: 'Instruction of Amenemope (BM 10474, Col. III:9–IV:12)',
    title: 'The Thirty Chapters: Give Your Ear and Apply Your Heart',
    cultureId: 'egyptian',
    chronology: {
      dateOfStorySetting: 'New Kingdom court scribal academy in Thebes',
      estimatedDateOfComposition: 'ca. 1200–1075 BCE (20th Dynasty)',
      dateOfEarliestSurvivingManuscript: 'Papyrus BM EA 10474 (ca. 10th c. BCE, British Museum)',
      numericCompositionBCE: -1100
    },
    originalLanguage: 'Late Egyptian Hieratic',
    originalText: `[Hieratic Papyrus BM 10474, col. III.9–IV.2]:
dỉ=k msḏr=k sḏm=k nꜣ ḏd.t(w)=j, dỉ=k ḥꜣty=k r grg=sn;
ꜣḫ n=k dỉ.t=sn m ḥꜣty=k, ḫpr ꜣd wꜣḥ=sn m ỉb=k;
wn=sn m msnḥ m ẖ.t=k, m rḫ-ỉb wꜣḥ=sn m sp.ty=k...
m-ỉr nhp r ỉtꜣ pꜣ šw, m-ỉr ḥnk r mꜣꜥ.t pꜣ ḥwrw...
ỉs bn grg=j n=k mḏꜣ.t 30 n sḥr wꜥr.t?`,
    transliteration: `di=k mesdjer=k sedjem=k na djed.t(w)=i, di=k haty=k r gereg=sen; akh n=k di.t=sen m haty=k, kheper ad wah=sen m ib=k; wn=sen m mesneh m khet=k, m rekh-ib wah=sen m septy=k... m-ir nehep r ita pa shu, m-ir henek r maa pa hwrw... is ben gereg=i n=k medjat 30 n seher wa'ret?`,
    englishTranslation: `Give your ear and hear the words that are said; apply your heart to understand them. For it is good that you place them in your heart, so that they may rest within your bosom; let them act as a peg upon your tongue. ... Guard yourself from robbing the poor, and from being violent toward the weak. Do not lean upon the balance, nor falsify the weights, nor diminish the fractions of the grain-measure. ... Have I not written for you thirty chapters filled with counsel and knowledge, to reply to him who sent you with words of truth?`,
    translationAttribution: {
      translator: 'Francis Llewellyn Griffith / Adolf Erman',
      sourceWork: 'The Journal of Egyptian Archaeology / Das Verhältniss des Buches der Sprüche zu der Lehre des Amenemope',
      year: '1926 / Public Domain',
      license: 'Public Domain',
      attributionNotice: 'Authoritative scholarly English translation of Papyrus BM 10474.'
    },
    motifs: ['thirty_wisdom_sayings'],
    clickableTerms: ['amenemope_sayings', 'maat'],
    criticalApparatusNotes: 'Adolf Erman\'s demonstration in 1923 that Proverbs 22:17–24:22 is a direct Hebrew adaptation of Amenemope\'s thirty chapters remains one of the crowning discoveries of biblical archaeology. Proverbs 22:17–20 literally replicates the sequence: "Incline your ear and hear the words of the wise... Have I not written for you thirty sayings of counsel and knowledge?"'
  },

  // --- PROVERBS 22:17–21 (THE THIRTY SAYINGS OF THE WISE) ---
  {
    id: 'proverbs_22_17_21',
    textId: 'proverbs',
    reference: 'Proverbs 22:17–21',
    title: 'The Thirty Sayings: The Hebrew Adaptation of Amenemope',
    cultureId: 'hebrew_israelite',
    chronology: {
      dateOfStorySetting: 'Court of Solomon / Royal Scribal Guild in Jerusalem',
      estimatedDateOfComposition: 'ca. 8th–7th century BCE (Hezekian redaction, Prov 25:1)',
      dateOfEarliestSurvivingManuscript: '4QProv^b (Qumran, ca. 50 BCE); Aleppo & Leningrad Codices',
      numericCompositionBCE: -700
    },
    originalLanguage: 'Biblical Hebrew',
    originalText: `הַ֤ט אָזְנְךָ֗ וּ֭שְׁמַע דִּבְרֵ֣י חֲכָמִ֑ים וְ֝לִבְּךָ֗ תָּשִׁ֥ית לְדַעְתִּֽי׃ כִּֽי־נָ֭עִים כִּֽי־תִשְׁמְרֵ֣ם בְּבִטְנֶ֑ךָ יִכֹּ֥נוּ יַ֝חְדָּ֗ו עַל־שְׂפָתֶֽיךָ׃ ... הֲלֹ֤א כָתַ֣בְתִּֽי לְ֭ךָ שָׁלִישִׁ֑ים [קרי: שְׁלֹשִׁים] בְּמוֹעֵצֹ֣ת וָדָֽעַת׃ לְהוֹדִיעֲךָ֗ קֹ֭שְׁטְ אִמְרֵ֣י אֱמֶ֑ת לְהָשִׁ֥יב אֲמָרִ֥ים אֱ֝מֶ֗ת לְשֹׁלְחֶֽיךָ׃`,
    transliteration: `Haṭ ʾoznəḵā ū-šəmaʿ divrē ḥăḵāmīm, wə-libbəḵā tāšīt lə-daʿtī: Kī-nāʿīm kī-ṯišmərēm bə-viṭneḵā, yikkōnū yaḥdāw ʿal-śəfāṯeḵā... Hălōʾ ḵāṯavtī ləḵā šəlōšīm [Qere] bə-mōʿēṣōt wā-ḏāʿat: Lə-hōḏīʿăḵā qōšṭ ʾimrē ʾĕmet, lə-hāšīv ʾămārīm ʾĕmet lə-šōləḥeḵā.`,
    englishTranslation: `Incline your ear and hear the words of the wise, and apply your heart to my knowledge; for it will be pleasant if you keep them within your belly, if all of them are ready on your lips. So that your trust may be in the LORD, I have made them known to you today, even to you. Have I not written for you thirty sayings of counsel and knowledge, to make you know what is right and true, that you may give a true answer to those who sent you?`,
    translationAttribution: {
      translator: 'Scholarly Standard Translation (Revised Standard Version / JPS)',
      sourceWork: 'The Holy Scriptures (Tanakh)',
      year: '1917 / Public Domain',
      license: 'Public Domain',
      attributionNotice: 'Masoretic Text with critical Qere reading for "thirty".'
    },
    motifs: ['thirty_wisdom_sayings'],
    clickableTerms: ['amenemope_sayings'],
    criticalApparatusNotes: 'The consonantal text preserves ש-ל-ש-מ. The traditional Masoretic vocalization שָׁלִישִׁים (shalishim, "officers / excellent things") was corrected by scholars following Adolf Erman to שְׁלֹשִׁים (sheloshim, "thirty"), matching the thirty chapters of Amenemope. The passage continues in vv. 22–23 ("Do not rob the poor because he is poor, or crush the afflicted at the gate"), mirroring Amenemope Chapter 2.'
  },

  // --- PYRAMID TEXTS OF UNAS (UTTERANCES 273–274: THE CANNIBAL HYMN) ---
  {
    id: 'pyramid_texts_unas_cannibal',
    textId: 'pyramid_texts_unas',
    reference: 'Pyramid Texts (Utterance 273–274, §§393–414)',
    title: 'The Cannibal Hymn: Royal Apotheosis and Divine Ascent',
    cultureId: 'egyptian',
    chronology: {
      dateOfStorySetting: 'Fifth Dynasty royal celestial ascension',
      estimatedDateOfComposition: 'ca. 2400–2350 BCE (Old Kingdom)',
      dateOfEarliestSurvivingManuscript: 'Pyramid of Unas antechamber, Saqqara (in situ, ca. 2350 BCE)',
      numericCompositionBCE: -2350
    },
    originalLanguage: 'Old Egyptian Hieroglyphic',
    originalText: `[Pyramid of Unas, Antechamber East Wall, Spells 273–274]:
jꜣw.t n.t p.t jwr, sbꜣ.w ꜣpd, pẖr.w r nṯr.w...
Wnjs pj nṯr ꜥꜣ ʿnḫ m nṯr.w, wnmw jwꜥw.t=sn...
ḫnms.w=sn m ḫꜣ.wt=sn, Wnjs wnmw rmṯ.w, ꜥnḫ m nṯr.w;
ḥkꜣ.w=sn m ẖ.t=f, ꜣḫ.w=sn m ỉb=f.`,
    transliteration: `iaw.t n.t p.t iwr, sbaw apd, pkhr.w r ntr.w... Wnis pi ntr aa ankh m ntr.w, wnmw iwa.w.t=sn... khnms.w=sn m kha.wt=sn, Wnis wnmw rmt.w, ankh m ntr.w; heka.w=sn m khet=f, akh.w=sn m ib=f.`,
    englishTranslation: `The sky is cloud-covered, the stars rain down, the heavenly constellations tremble, the bones of the earth-gods quake, the planets stand still, when they see Unas dawning as a soul, as a god who lives on his fathers and feeds on his mothers! Unas is the lord of wisdom whose mother knows not his name. The glory of Unas is in the sky, his power is in the horizon, like that of Atum his father who begot him. Unas is he who eats their magic and swallows their spirits! Their big ones are for his morning meal, their middle-sized ones are for his evening meal, their little ones are for his night meal. He has taken the hearts of the gods; he has consumed the Red Crown, he has swallowed the White Crown! Unas feeds on the lungs of the wise, and is satisfied with living on their hearts and their magic. Behold, their soul is in Unas\'s belly, their spirits are within Unas!`,
    translationAttribution: {
      translator: 'James Henry Breasted / Samuel A.B. Mercer',
      sourceWork: 'Development of Religion and Thought in Ancient Egypt / The Pyramid Texts in Translation',
      year: '1912 / 1952 / Public Domain',
      license: 'Public Domain',
      attributionNotice: 'Old Kingdom classic translation of the earliest inscribed royal mortuary liturgies.'
    },
    motifs: ['divine_council', 'heroic_ages'],
    clickableTerms: ['maat'],
    criticalApparatusNotes: 'Representing the oldest known inscribed religious text in human history, the Cannibal Hymn displays the archaic concept of celestial predation, where divine status is achieved not through passive acceptance into heaven, but through violent conquering and assimilation of the pantheon\'s life-force (heka).'
  },

  // --- HESIOD'S THEOGONY (LINES 713–735: THE CASTING OF TITANS INTO TARTARUS) ---
  {
    id: 'hesiod_theogony_tartarus',
    textId: 'hesiod_theogony',
    reference: 'Hesiod Theogony (Lines 713–735)',
    title: 'The Chaining of the Titans in Tartarus: The Classical Model of 2 Peter 2:4',
    cultureId: 'greco_roman',
    chronology: {
      dateOfStorySetting: 'Primordial Titanomachy at the dawn of the Olympian order',
      estimatedDateOfComposition: 'ca. 730–700 BCE',
      dateOfEarliestSurvivingManuscript: 'Papyrus Oxyrhynchus 2091 (2nd c. BCE); medieval Byzantine MSS',
      numericCompositionBCE: -720
    },
    originalLanguage: 'Ancient Greek',
    originalText: `[Greek Theogony 713–735]:
Τιτῆνας δ' αὐγοὺς ὑπὸ χθονὸς εὐρυοδείης
πέμψαν καὶ δεσμοῖσιν ἐν ἀργαλέοισιν ἔδησαν
χερσὶν νικήσαντες ὑπερθύμους περ ἐόντας,
τόσσον ἔνερθ' ὑπὸ γῆς, ὅσον οὐρανός ἐστ' ἀπὸ γαίης·
τόσσον γάρ τ' ἀπὸ γῆς ἐς Τάρταρον ἠερόεντα...
τὸν πέρι χάλκεον ἕρκος ἐλήλαται· ἀμφὶ δέ μιν νὺξ
τριστοιχεὶ κέχυται περὶ δειρήν· αὐτὰρ ὕπερθεν
γῆς ῥίζαι πεφύασι καὶ ἀτρυγέτοιο θαλάσσης.`,
    transliteration: `Titēnas d' augous hypo chthonos euryodeiēs pempsan kai desmoisin en argaleoisin edēsan chersin nikēsantes hyperthymous per eontas, tosson enerth' hypo gēs, hoson ouranos est' apo gaiēs; tosson gar t' apo gēs es Tartaron ēeroenta... ton peri chalkeon herkos elēlatai; amphi de min nyx tristoichei kechytai peri deirēn; autar hyperthen gēs rhizai pephyasi kai atrygetoio thalassēs.`,
    englishTranslation: `And the Titans they hurled beneath the wide-wayed earth and bound them in painful bonds, having conquered them by the strength of their hands, proud though they were, as far beneath the earth as heaven is from earth; for so far is it from earth to misty Tartarus. ... Around it a bronze wall is driven, and night in triple folds is poured about its neck; while above it grow the roots of the earth and of the unfruitful sea. There the Titan gods are hidden beneath murky gloom by the will of Zeus the cloud-gatherer, in a dank place, at the furthest ends of the vast earth. They have no way out; Poseidon fixed gates of bronze upon it, and a wall runs all around it on every side.`,
    translationAttribution: {
      translator: 'Hugh G. Evelyn-White',
      sourceWork: 'Hesiod, The Homeric Hymns and Homerica (Loeb Classical Library)',
      year: '1914 / Public Domain',
      license: 'Public Domain',
      attributionNotice: 'Standard Loeb Classical Library public domain translation.'
    },
    motifs: ['tartarus_imprisonment', 'giants', 'watchers_rebellion'],
    clickableTerms: ['tartarus', 'watchers'],
    criticalApparatusNotes: 'Directly informs the New Testament theology of imprisoned celestial rebels. In 2 Peter 2:4, the author writes: "For if God did not spare angels when they sinned, but having cast them into Tartarus (ταρταρώσας, tartarōsas), committed them to chains of gloomy darkness to be kept until the judgment." The motif also parallels 1 Enoch 10:4–12 where Azazel is bound in Dudael beneath rough and jagged rocks in total darkness.'
  },

  // --- 4Q521 (THE MESSIANIC APOCALYPSE: RAISING THE DEAD & HEALING) ---
  {
    id: '4q521_messianic_apocalypse',
    textId: '4q521_messianic',
    reference: '4Q521 (Fragment 2, Column II:1–14)',
    title: 'The Signs of the Messiah: Raising the Dead and Good News to the Poor',
    cultureId: 'dead_sea_scrolls',
    chronology: {
      dateOfStorySetting: 'Second Temple eschatological expectation of the Messianic era',
      estimatedDateOfComposition: 'ca. 100–80 BCE',
      dateOfEarliestSurvivingManuscript: '4Q521 scroll fragments (ca. 100–80 BCE, Qumran Cave 4, Rockefeller Museum)',
      numericCompositionBCE: -90
    },
    originalLanguage: 'Qumran Hebrew',
    originalText: `[4Q521 Frg. 2 Col. II]:
1. [כי השמי]ם והארץ ישמעו למשיחו
2. [וכול אשר ב]ם לוא יסוגו ממצות קדושים
5. כי יכבד את חסידים על כסא מלכות עד
6. מתיר אסורים פוקח עורים זוקף כ[פופים]
8. ורופ[א חללים] ומתים יחיה
11. וענוים יבשר וד[לים ישביע] שוקקים ינהג`,
    transliteration: `[Kī haš-šāmayi]m wə-hā-ʾāretz yišməʿū lim-šīḥō, [wə-ḵōl ʾăšer bā]-m lōʾ yāsōgū mim-miṣwat qədōšīm... Kī yəḵabbēd ʾet-ḥăsīḏīm ʿal-kisseʾ malḵūt ʿad... Mattīr ʾăsūrīm, pōqēaḥ ʿīwrīm, zōqēf kə[fūfīm]... Wə-rōf[ēʾ ḥălālīm] ū-mētīm yəḥayyeh, wə-ʿănāwīm yəbaśśēr wə-ḏ[allīm yaśbīaʿ], šōqəqīm yənāhēg.`,
    englishTranslation: `For the heavens and the earth will listen to his Messiah, and all that is in them will not turn away from the commandments of the holy ones. ... For he will honor the pious upon the throne of an eternal kingdom, freeing prisoners, giving sight to the blind, straightening those who are bent double. ... And the Lord will accomplish glorious things that have never been: for he will heal the wounded, and give life to the dead, and bring good news to the poor, and satisfy the destitute, and lead the expelled.`,
    translationAttribution: {
      translator: 'Michael O. Wise, Martin G. Abegg Jr., Edward M. Cook / Émile Puech',
      sourceWork: 'The Dead Sea Scrolls: A New Translation / Discoveries in the Judaean Desert',
      year: '1996 / Scholarly Fair Use Translation',
      license: 'Scholarly Fair Use Quotation',
      attributionNotice: 'Standard critical reading of 4Q521 based on DJD reconstruction.'
    },
    motifs: ['messianic_signs', 'apocalypse'],
    clickableTerms: ['adat_el', 'bene_haelohim'],
    criticalApparatusNotes: 'Universally recognized as one of the most astonishing textual parallels between Qumran and the New Testament. When John the Baptist sends his disciples to ask Jesus "Are you the one who is to come, or should we look for another?", Jesus replies in Matthew 11:4–5 and Luke 7:22 with the exact catalog of deeds preserved in 4Q521: the blind receive sight, the lame walk, lepers are cleansed, the deaf hear, the dead are raised up, and the poor have good news preached to them.'
  },

  // --- 11Q13 (11QMELCHIZEDEK: THE HEAVENLY ELOHIM IN THE DIVINE ASSEMBLY) ---
  {
    id: '11q13_melchizedek_jubilee',
    textId: '11q13_melchizedek',
    reference: '11Q13 (11QMelchizedek, Column II:1–16)',
    title: 'Melchizedek as Heavenly Elohim: The Jubilee Judgment of Psalm 82',
    cultureId: 'dead_sea_scrolls',
    chronology: {
      dateOfStorySetting: 'The Tenth Jubilee and final Day of Atonement judgment',
      estimatedDateOfComposition: 'ca. 120–80 BCE',
      dateOfEarliestSurvivingManuscript: '11Q13 scroll fragments (ca. 75–50 BCE, Qumran Cave 11, Shrine of the Book)',
      numericCompositionBCE: -100
    },
    originalLanguage: 'Qumran Hebrew',
    originalText: `[11Q13 Col. II]:
9. והמ[ה] נחלת מלכי צדק אשר י[שיבמה אליהמה]
10. ואשר קרא דרור שמה לעזוב להם [משא כ]ול עונותיהמה
11. ואשר אמר ... אלהים נצב בעדת אל בקרב אלהים ישפוט
12. ועליו אמר ועליה למרום שובה אל ישפוט עמים
13. ואשר אמר עד מתי תשפוטו עול ופני רשעים תשאו סלה
14. פשרו על בליעל ועל רוחי גורלו אשר [סרו ממצות אל]
15. ומלכי צדק יקום נק[ם] משפטי [אל] [וביום ההוא יצילמה מיד] בליעל`,
    transliteration: `Wə-ham-[māh] naḥălat Malkī-Ṣedeq ʾăšer y[əšīvēmāh ʾălēyhemāh]... wə-ʾăšer qārāʾ dərōr šāmmāh la-ʿăzōv lāhem [maśśaʾ k]ōl ʿăwōnōtēyhemāh... wə-ʾăšer ʾāmar: ʾĔlōhīm niṣṣāv ba-ʿăḏat-ʾĒl, bə-qerev ʾĕlōhīm yišpōṭ; wə-ʿālāw ʾāmar: wə-ʿālēyhā lam-mārōm šūvāh, ʾĒl yišpōṭ ʿammīm... wə-ʾăšer ʾāmar: ʿad-mātay tišpəṭū-ʿāwel ū-fənē rəšāʿīm tiśśāʾū selāh? Pišrō ʿal-Bəliyyaʿal wə-ʿal-rūḥē gōrālō... ū-Malkī-Ṣedeq yāqūm nəq[am] mišpəṭē [ʾĒl, ū-vay-yōm ha-hūʾ yaṣṣīlēmmāh miy-yad] Bəliyyaʿal.`,
    englishTranslation: `And this is the inheritance of Melchizedek, who will return them to what is rightfully theirs, and proclaim liberty to them, forgiving them the debt of all their iniquities. This shall take place in the first week of the Jubilee that follows nine Jubilees, on the Day of Atonement, the end of the tenth Jubilee. ... And concerning him, Scripture says: 'God (Elohim) has taken his place in the divine council (adat-El); in the midst of the gods (elohim) he holds judgment' (Psalm 82:1). And concerning him it says: 'Above it return on high; God will judge the peoples' (Psalm 7:7–8). And as for what it says: 'How long will you judge unjustly and show partiality to the wicked?' (Psalm 82:2), its interpretation concerns Belial and the spirits of his lot, who rebelled against God\'s commandments. But Melchizedek will execute the vengeance of the judgments of God, and on that day he will deliver them from the hand of Belial!`,
    translationAttribution: {
      translator: 'Florentino García Martínez / E.J.C. Tigchelaar',
      sourceWork: 'The Dead Sea Scrolls Study Edition',
      year: '1998 / Scholarly Fair Use Translation',
      license: 'Scholarly Fair Use Quotation',
      attributionNotice: 'Brill critical text edition of 11Q13.'
    },
    motifs: ['divine_council', 'messianic_signs', 'apocalypse'],
    clickableTerms: ['melchizedek_elohim', 'adat_el', 'bene_haelohim'],
    criticalApparatusNotes: '11QMelchizedek establishes the definitive historical link between Psalm 82 (the judgment of the corrupt heavenly gods) and the exalted priest-king Melchizedek. In this Second Temple text, Melchizedek is treated as the divine agent (Elohim) who carries out the divine decree. This background explains Hebrews 7, which depicts Melchizedek as superior to the Levitical priesthood and possessing an indestructible life.'
  },

  // --- ISAIAH 27:1 (LEVIATHAN THE TWISTING SERPENT) ---
  {
    id: 'isaiah_27_1_leviathan',
    textId: 'isaiah',
    reference: 'Isaiah 27:1',
    title: 'Leviathan the Twisting Serpent: The Northwest Semitic Sea Dragon',
    cultureId: 'hebrew_israelite',
    chronology: {
      dateOfStorySetting: 'Eschatological judgment of cosmic oppressors',
      estimatedDateOfComposition: 'ca. 6th–5th century BCE (Isaiah Apocalypse, chs. 24–27)',
      dateOfEarliestSurvivingManuscript: '1QIsa^a (Great Isaiah Scroll, ca. 125 BCE, Qumran Cave 1)',
      numericCompositionBCE: -520
    },
    originalLanguage: 'Biblical Hebrew',
    originalText: `בַּיּ֣וֹם הַה֡וּא יִפְקֹ֣ד יְהוָה֩ בְּחַרְב֨וֹ הַקָּשָׁ֜ה וְהַגְּדוֹלָ֣ה וְהַחֲזָקָ֗ה עַ֤ל לִוְיָתָן֙ נָחָ֣שׁ בָּרִ֔חַ וְעַל֙ לִוְיָתָ֔ן נָחָ֖שׁ עֲקַלָּת֑וֹן וְהָרַ֥ג אֶת־הַתַּנִּ֖ין אֲשֶׁ֥ר בַּיָּֽם׃`,
    transliteration: `Bay-yōm ha-hūʾ yifqōḏ Yahweh bə-ḥarvō haq-qāšāh wə-hag-gəḏōlāh wə-ha-ḥăzāqāh ʿal Liwyātān nāḥāš bārīaḥ, wə-ʿal Liwyātān nāḥāš ʿăqallātōn, wə-hārag ʾet-hat-tannīn ʾăšer bay-yām.`,
    englishTranslation: `In that day the LORD with his hard and great and strong sword will punish Leviathan the fleeing serpent, Leviathan the twisting serpent, and he will slay the dragon that is in the sea.`,
    translationAttribution: {
      translator: 'Scholarly Standard Translation (Revised Standard Version / JPS)',
      sourceWork: 'The Holy Scriptures (Tanakh)',
      year: '1917 / Public Domain',
      license: 'Public Domain',
      attributionNotice: 'Preserved intact in 1QIsa^a (Great Isaiah Scroll, Column XXI).'
    },
    motifs: ['chaoskampf'],
    clickableTerms: ['lotan_leviathan', 'tiamat_tehom'],
    criticalApparatusNotes: 'Compare verbatim with Ugaritic tablet KTU 1.5 I:1–3 from Ras Shamra (ca. 1300 BCE): "kī tamḫaṣ Lōtāna baṯna barīḥa, takalli baṯna ʿaqallatāna, šalyata dī šibʿati raʾašīma" ("When you smite Lotan the fleeing serpent, destroy the twisting serpent, the tyrant with seven heads"). The biblical poet reproduces the exact Canaanite formulaic poetry in Hebrew.'
  },

  // --- MATTHEW 11:2–6 (THE MESSIANIC MIRACLES & 4Q521) ---
  {
    id: 'matthew_11_4_6',
    textId: 'matthew',
    reference: 'Matthew 11:2–6',
    title: 'The Messianic Credentials: Blind See, Dead Raised, Good News to the Poor',
    cultureId: 'early_christian',
    chronology: {
      dateOfStorySetting: 'Ministry of Jesus in Galilee answering John the Baptist in prison',
      estimatedDateOfComposition: 'ca. 70–85 CE',
      dateOfEarliestSurvivingManuscript: 'Papyrus 104 (ca. 175–200 CE); Codex Sinaiticus & Vaticanus (4th c. CE)',
      numericCompositionBCE: 75
    },
    originalLanguage: 'Koine Greek',
    originalText: `Ὁ δὲ Ἰησοῦς ἀποκριθεὶς εἶπεν αὐτοῖς· Πορευθέντες ἀπαγγείλατε Ἰωάννῃ ἃ ἀκούετε καὶ βλέπετε· τυφλοὶ ἀναβλέπουσιν καὶ χωλοὶ περιπατοῦσιν, λεπροὶ καθαρίζονται καὶ κωφοὶ ἀκούουσιν, καὶ νεκροὶ ἐγείρονται καὶ πτωχοὶ εὐαγγελίζονται· καὶ μακάριός ἐστιν ὃς ἐὰν μὴ σκανδαλισθῇ ἐν ἐμοί.`,
    transliteration: `Ho de Iēsous apokritheis eipen autois: Poreuthentes apangeilate Iōannē ha akouete kai blepete: typhloi anablepousin kai chōloi peripatousin, leproi katharizontai kai kōphoi akouousin, kai nekroi egeirontai kai ptōchoi euangelizontai; kai makarios estin hos ean mē skandalisthē en emoi.`,
    englishTranslation: `And Jesus answered and said to them: 'Go and report to John what you hear and see: the blind receive sight, the lame walk, the lepers are cleansed, the deaf hear, the dead are raised up, and the poor have good news preached to them. And blessed is anyone who takes no offense at me.'`,
    translationAttribution: {
      translator: 'Scholarly Public Domain Greek NT Translation',
      sourceWork: 'The New Testament in the Original Greek',
      year: '1901',
      license: 'Public Domain',
      attributionNotice: 'Public Domain Koine Greek text conforming to Nestle-Aland critical base.'
    },
    motifs: ['messianic_signs'],
    clickableTerms: ['bene_haelohim', 'adat_el'],
    criticalApparatusNotes: 'Matches the exact formulaic cluster found in Dead Sea Scroll 4Q521 Fragment 2 Col. II: freeing captives, opening blind eyes, healing the wounded, raising the dead (yəḥayyeh mētīm), and preaching good news to the poor. Because the Hebrew Bible never explicitly links raising the dead to the Messiah, this shared cluster proves Jesus and Matthew operated within contemporary Palestinian sectarian messianic expectations.'
  },

  // --- HEBREWS 7:1–4, 15–17 (MELCHIZEDEK AND 11Q13) ---
  {
    id: 'hebrews_7_1_4_melchizedek',
    textId: 'hebrews',
    reference: 'Hebrews 7:1–4, 15–17',
    title: 'Melchizedek Without Father, Mother, or Genealogy: The Eternal Priest-King',
    cultureId: 'early_christian',
    chronology: {
      dateOfStorySetting: 'Apostolic theological exegesis of Genesis 14 and Psalm 110',
      estimatedDateOfComposition: 'ca. 60–69 CE',
      dateOfEarliestSurvivingManuscript: 'Papyrus 46 (Chester Beatty II, ca. 175–225 CE); Codex Vaticanus',
      numericCompositionBCE: 65
    },
    originalLanguage: 'Literary Koine Greek',
    originalText: `Οὗτος γὰρ ὁ Μελχισεδέκ, βασιλεὺς Σαλήμ, ἱερεὺς τοῦ θεοῦ τοῦ ὑψίστου... ἀπάτωρ, ἀμήτωρ, ἀγενεαλόγητος, μήτε ἀρχὴν ἡμερῶν μήτε ζωῆς τέλος ἔχων, ἀφωμοιωμένος δὲ τῷ υἱῷ τοῦ θεοῦ, μένει ἱερεὺς εἰς τὸ διηνεκές. Θεωρεῖτε δὲ πηλίκος οὗτος ᾧ καὶ δεκάτην Ἀβραὰμ ἔδωκεν ἐκ τῶν ἀκροθινίων ὁ πατριάρχης... κατὰ δύναμιν ζωῆς ἀκαταλύτου, μαρτυρεῖται γὰρ ὅτι Σὺ ἱερεὺς εἰς τὸν αἰῶνα κατὰ τὴν τάξιν Μελχισεδέκ.`,
    transliteration: `Houtos gar ho Melchisedek, basileus Salēm, hiereus tou theou tou hypsistou... apatōr, amētōr, agenealogētos, mēte archēn hēmerōn mēte zōēs telos echōn, aphōmoiōmenos de tō huiō tou theou, menei hiereus eis to diēnekes. Theōreite de pēlikos houtos hō kai dekatēn Abraam edōken ek tōn akrothiniōn ho patriarchēs... kata dynamin zōēs akatalytou, martyreitai gar hoti Sy hiereus eis ton aiōna kata tēn taxin Melchisedek.`,
    englishTranslation: `For this Melchizedek, king of Salem, priest of the Most High God... is without father, without mother, without genealogy, having neither beginning of days nor end of life, but resembling the Son of God, he remains a priest perpetually. Consider how great this man was, to whom even Abraham the patriarch gave a tenth of the spoils! ... having become a priest not according to a legal requirement concerning bodily descent, but by the power of an indestructible life. For it is attested of him: 'You are a priest forever, according to the order of Melchizedek.'`,
    translationAttribution: {
      translator: 'Scholarly Public Domain Translation (RV / ASV)',
      sourceWork: 'The Epistles of the New Testament',
      year: '1901',
      license: 'Public Domain',
      attributionNotice: 'Public Domain critical Greek text.'
    },
    motifs: ['divine_council', 'messianic_signs'],
    clickableTerms: ['melchizedek_elohim', 'adat_el', 'bene_haelohim'],
    criticalApparatusNotes: 'Historically elucidated by 11QMelchizedek (11Q13), where Melchizedek is explicitly called Elohim and identified with the divine judge of Psalm 82:1 who executes heavenly vengeance against Belial. The author of Hebrews draws upon this existing Second Temple exaltation tradition to present Jesus\' high priesthood as superior to Aaron.'
  },

  // --- ISAIAH 14:12–15 (HELEL BEN-SHAHAR / LUCIFER ON MOUNT ZAPHON) ---
  {
    id: 'isaiah_14_12_15_helel',
    textId: 'isaiah',
    reference: 'Isaiah 14:12–15',
    title: 'Helel Ben-Shahar: The Fall of the Day Star from the Mount of Assembly',
    cultureId: 'hebrew_israelite',
    chronology: {
      dateOfStorySetting: 'Prophetic mocking dirge against tyrannical cosmic rulers',
      estimatedDateOfComposition: 'ca. 8th–7th century BCE',
      dateOfEarliestSurvivingManuscript: '1QIsa^a (Great Isaiah Scroll, ca. 125 BCE, Qumran Cave 1)',
      numericCompositionBCE: -720
    },
    originalLanguage: 'Biblical Hebrew',
    originalText: `אֵ֣יךְ נָפַ֧לְתָּ מִשָּׁמַ֛יִם הֵילֵ֥ל בֶּן־שָׁ֑חַר נִגְדַּ֣עְתָּ לָאָ֔רֶץ חוֹלֵ֖שׁ עַל־גּוֹיִֽם׃ וְאַתָּ֞ה אָמַ֤רְתָּ בִֽלְבָבְךָ֙ הַשָּׁמַ֣יִם אֶֽעֱלֶ֔ה מִמַּ֥עַל לְכֽוֹכְבֵי־אֵ֖ל אָרִ֣ים כִּסְאִ֑י וְאֵשֵׁ֛ב בְּהַר־מוֹעֵ֖ד בְּיַרְכְּתֵ֥י צָפֽוֹן׃ אֶעֱלֶ֖ה עַל־בָּ֣מֳתֵי עָ֑ב אֶדַּמֶּ֖ה לְעֶלְיֽוֹן׃ אַ֧ךְ אֶל־שְׁא֛וֹל תּוּרָ֖ד אֶל־יַרְכְּתֵי־בֽוֹר׃`,
    transliteration: `ʾĒk nāphaltā miš-šāmayim, Hēlēl ben-Šāḥar! Nigdaʿtā lā-ʾāretz, ḥōlēš ʿal-gōyīm! Wə-ʾattāh ʾāmartā viləvāvəḵā: Haš-šāmayim ʾeʿĕleh, mim-maʿal lə-ḵōḵəvē-ʾĒl ʾārīm kisʾī, wə-ʾēšēv bə-har-mōʿēd bə-yarkətē Ṣāfōn! ʾEʿĕleh ʿal-bāmŏtē ʿāv, ʾeddammeh lə-ʿElyōn! ʾAḵ ʾel-Šəʾōl tūrad, ʾel-yarkətē-vōr.`,
    englishTranslation: `How you have fallen from heaven, O Day Star, son of the Dawn [Helel ben-Shahar]! How you are cut down to the ground, you who laid low the nations! You said in your heart: 'I will ascend to heaven; above the stars of El I will raise my throne on high; I will sit on the Mount of Assembly in the far reaches of Zaphon; I will ascend above the heights of the clouds; I will make myself like the Most High [Elyon]!' But you are brought down to Sheol, to the far recesses of the Pit.`,
    translationAttribution: {
      translator: 'Scholarly Standard Translation (Revised Standard Version / JPS)',
      sourceWork: 'The Holy Scriptures (Tanakh)',
      year: '1917 / Public Domain',
      license: 'Public Domain',
      attributionNotice: 'Preserved intact in 1QIsa^a (Great Isaiah Scroll, Column XII).'
    },
    motifs: ['watchers_rebellion', 'divine_council', 'sacred_mountains'],
    clickableTerms: ['helel_ben_shahar', 'bene_haelohim', 'adat_el'],
    criticalApparatusNotes: 'A cornerstone of Northwest Semitic comparative mythology. The Latin Vulgate translated Helel ben-Shahar as "Lucifer" (light-bearer). Modern Ugaritic discoveries revealed that this passage directly borrows the Canaanite myth of the god Athtar, who attempted to ascend the throne of the supreme storm-god Baal on Mount Zaphon (Mount Casius) but was inadequate and descended to rule the netherworld.'
  },

  // --- EZEKIEL 28:12–17 (THE FALLEN CHERUB IN EDEN ON THE HOLY MOUNTAIN) ---
  {
    id: 'ezekiel_28_12_17_cherub',
    textId: 'ezekiel',
    reference: 'Ezekiel 28:12–17',
    title: 'The Anointed Guardian Cherub in Eden: The Fall from the Mountain of God',
    cultureId: 'hebrew_israelite',
    chronology: {
      dateOfStorySetting: 'Exilic lamentation oracle against the prince of Tyre',
      estimatedDateOfComposition: 'ca. 585–570 BCE',
      dateOfEarliestSurvivingManuscript: '4QEzek^a (ca. 100 BCE); Papyrus 967 (Greek, ca. 200 CE); Aleppo Codex',
      numericCompositionBCE: -575
    },
    originalLanguage: 'Biblical Hebrew',
    originalText: `אַתָּה֙ חוֹתֵ֣ם תָּכְנִ֔ית מָלֵ֥א חָכְמָ֖ה וּכְלִ֥יל יֹֽפִי׃ בְּעֵ֨דֶן גַּן־אֱלֹהִ֜ים הָיִ֗יתָ כָּל־אֶ֤בֶן יְקָרָה֙ מְסֻכָ֣תֶךָ... אַתְּ־כְּר֗וּב מִמְשַׁח֙ הַסּוֹכֵ֔ךְ וּנְתַתִּ֕יךָ בְּהַ֥ר קֹ֛דֶשׁ אֱלֹהִ֖ים הָיִ֑יתָ בְּת֥וֹךְ אַבְנֵי־אֵ֖שׁ הִתְהַלָּֽכְתָּ׃ תָּמִ֤ים אַתָּה֙ בִּדְרָכֶ֔יךָ מִיּ֖וֹם הִבָּרְאָ֑ךְ עַד־נִמְצָ֥א עַוְלָ֖תָה בָּֽךְ... וָֽאֲחַלֶּלְךָ֩ מֵהַ֨ר אֱלֹהִ֥ים וָֽאַבֶּדְךָ֛ כְּר֥וּב הַסֹּכֵ֖ךְ מִתּ֥וֹךְ אַבְנֵי־אֵֽשׁ׃`,
    transliteration: `ʾAttāh ḥōṯēm toḵnīt, mālēʾ ḥoḵmāh ū-ḵəlīl yōfī. Bə-ʿĒḏen gan-ʾĔlōhīm hāyīṯā; kol-ʾeven yəqārāh məsuḵāṯeḵā... ʾAt-kərūv mimšaḥ has-sōḵēḵ, ū-nəṯattīḵā bə-har qōḏeš ʾĔlōhīm hāyīṯā, bə-ṯōḵ ʾavnē-ʾēš hithallāḵtā. Tāmīm ʾattāh bi-ḏərāḵeḵā mī-yōm hibbārəʾāḵ ʿaḏ-nimṣāʾ ʿawlāṯāh bāḵ... wā-ʾaḥalləlḵā mē-har ʾĔlōhīm, wā-ʾaʾabbedḵā kərūv has-sōḵēḵ mit-tōḵ ʾavnē ʾēš.`,
    englishTranslation: `You were the seal of perfection, full of wisdom and perfect in beauty. You were in Eden, the garden of God; every precious stone was your covering... You were an anointed guardian cherub; I placed you on the holy mountain of God; you walked in the midst of the stones of fire. You were blameless in your ways from the day you were created, until unrighteousness was found in you. ... So I cast you as a profane thing from the mountain of God, and I destroyed you, O guardian cherub, from the midst of the stones of fire. Your heart was proud because of your beauty; you corrupted your wisdom for the sake of your splendor.`,
    translationAttribution: {
      translator: 'Scholarly Standard Translation (RSV / JPS)',
      sourceWork: 'The Book of Ezekiel',
      year: '1917 / Public Domain',
      license: 'Public Domain',
      attributionNotice: 'Public Domain Masoretic Text.'
    },
    motifs: ['watchers_rebellion', 'sacred_mountains', 'divine_council'],
    clickableTerms: ['bene_haelohim', 'adat_el', 'helel_ben_shahar'],
    criticalApparatusNotes: 'Preserves an alternate, archaic West Semitic version of the Eden narrative where Eden is not merely an earthly orchard, but the cosmic divine mountain (har Elohim) surrounded by "stones of fire" (fiery angelic beings). The guardian cherub falls through hubris, forming a direct thematic bridge to the rebellion of the Watchers in 1 Enoch.'
  },

  // --- GENESIS 1:1–3 (BERESHIT & TEHOM) ---
  {
    id: 'genesis_1_1_3_creation',
    textId: 'genesis',
    reference: 'Genesis 1:1–3',
    title: 'Bereshit: Creation, the Deep (Tehom), and the Divine Wind',
    cultureId: 'hebrew_israelite',
    chronology: {
      dateOfStorySetting: 'The primordial beginning of the cosmos',
      estimatedDateOfComposition: 'ca. 6th–5th century BCE (Priestly Cosmogony)',
      dateOfEarliestSurvivingManuscript: '4QGen^b (ca. 150 BCE); Nash Papyrus; Aleppo Codex',
      numericCompositionBCE: -550
    },
    originalLanguage: 'Biblical Hebrew',
    originalText: `בְּרֵאשִׁ֖ית בָּרָ֣א אֱלֹהִ֑ים אֵ֥ת הַשָּׁמַ֖יִם וְאֵ֥ת הָאָֽרֶץ׃ וְהָאָ֗רֶץ הָיְתָ֥ה תֹ֙הוּ֙ וָבֹ֔הוּ וְחֹ֖שֶׁךְ עַל־פְּנֵ֣י תְה֑וֹם וְר֣וּחַ אֱלֹהִ֔ים מְרַחֶ֖פֶת עַל־פְּנֵ֥י הַמָּֽיִם׃ וַיֹּ֥אמֶר אֱלֹהִ֖ים יְהִ֣י א֑וֹר וַֽיְהִי־אֽוֹר׃`,
    transliteration: `Bərēʾšīt bārāʾ ʾĔlōhīm ʾēt haš-šāmayim wə-ʾēt hā-ʾāretz. Wə-hā-ʾāretz hāyəṯāh tōhū wā-vōhū, wə-ḥōšeḵ ʿal-pənē Təhōm, wə-Rūaḥ ʾĔlōhīm məraḥefet ʿal-pənē ham-māyim. Wa-yōʾmer ʾĔlōhīm: Yəhī ʾōr; wa-yəhī-ʾōr.`,
    englishTranslation: `In the beginning God created the heavens and the earth. Now the earth was formless and desolate, and darkness was over the surface of the deep [Tehom], and the Spirit of God was hovering over the surface of the waters. And God said, 'Let there be light,' and there was light.`,
    translationAttribution: {
      translator: 'Scholarly Standard Translation (Revised Standard Version / JPS)',
      sourceWork: 'The Holy Scriptures (Tanakh)',
      year: '1917 / Public Domain',
      license: 'Public Domain',
      attributionNotice: 'Public Domain Masoretic Text.'
    },
    motifs: ['creation_primordial_waters', 'chaoskampf'],
    clickableTerms: ['tiamat_tehom', 'chaoskampf'],
    criticalApparatusNotes: 'Linguistically cognate with Akkadian Tiamat. In Genesis 1:2, Tehom appears without the Hebrew definite article (acting as a proper name), preserving the deep cultural memory of the primordial watery chaos that precedes cosmic ordering.'
  },

  // --- ENUMA ELISH (TABLET I: LINES 1–9 PRIMORDIAL APSU & TIAMAT) ---
  {
    id: 'enuma_elish_tablet_1_apsu_tiamat',
    textId: 'enuma_elish',
    reference: 'Enūma Eliš (Tablet I: lines 1–9)',
    title: 'When on High: The Primordial Commingling of Apsu and Tiamat',
    cultureId: 'mesopotamian',
    chronology: {
      dateOfStorySetting: 'Primordial cosmic void before heavens or earth were named',
      estimatedDateOfComposition: 'ca. 12th–11th century BCE',
      dateOfEarliestSurvivingManuscript: 'Kuyunjik / Nineveh cuneiform tablets (ca. 7th c. BCE, British Museum)',
      numericCompositionBCE: -1150
    },
    originalLanguage: 'Standard Babylonian (Akkadian cuneiform)',
    originalText: `[Akkadian cuneiform Tablet I:1–9]:
1. e-nu-ma e-liš la na-bu-ú ša-ma-mu
2. šap-liš am-ma-tum šu-ma la zak-rat
3. ZU.AB-ma reš-tu-ú za-ru-šu-un
4. mu-um-mu Ti-amat mu-al-li-da-at gim-ri-šu-un
5. A.MEŠ-šu-nu iš-te-niš i-ḫi-qu-u-ma
6. gi-pa-ra la ki-iṣ-ṣu-ru su-sa-a la še-'-u
7. e-nu-ma DINGIR.DINGIR la šu-pu-u ma-na-ma
8. šu-ma la zuk-ku-ru ši-ma-a-ti la ši-na-ma
9. ib-ba-nu-u-ma DINGIR.DINGIR qe-reb-šu-un`,
    transliteration: `enūma eliš lā nabû šamāmū, šapliš ammatum šuma lā zakrat; Apsû-ma rēštû zārûšun, mummu Tiāmat muallidat gimrīšun; mêšunu ištēniš iḫīqū-ma, gipāra lā kiṣṣurū susâ lā še'û; enūma ilū lā šūpû manāma, šuma lā zukkurū šīmāti lā šīnā-ma; ibbanû-ma ilū qerebšun.`,
    englishTranslation: `When on high the heavens had not yet been named, and below the earth held no name, and the primeval Apsu who begot them, and chaos Tiamat, she who bore them all, were mingling their waters together as one, when no pasture land had yet been formed and no reed marsh was to be seen; when none of the gods had yet been brought into being, nor named with a name, nor had their destinies been ordained—then in their midst the gods were created.`,
    translationAttribution: {
      translator: 'L.W. King',
      sourceWork: 'The Seven Tablets of Creation',
      year: '1902 / Public Domain',
      license: 'Public Domain',
      attributionNotice: 'Public Domain critical cuneiform edition (Luzac & Co.).'
    },
    motifs: ['creation_primordial_waters', 'chaoskampf'],
    clickableTerms: ['tiamat_tehom', 'chaoskampf'],
    criticalApparatusNotes: 'The foundational East Semitic cosmogonic opening. Shares with Genesis 1:1–2 the circumstantial temporal framework ("When... then...") and the premise of an undifferentiated primeval ocean before divine ordering divides salt water (Tiamat) from sweet water (Apsu).'
  }
];

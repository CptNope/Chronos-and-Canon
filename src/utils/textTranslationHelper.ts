import { TextItem, Culture, Passage, SupportedLanguage } from '../types';

export interface LocalizedTextDetails {
  title: string;
  summary: string;
  originalLanguageName: string;
  chronologySetting: string;
  compositionDate: string;
  earliestManuscript: string;
  manuscriptHistory?: string;
}

// Curated critical scholarly titles and summaries for Hebrew Bible, Dead Sea Scrolls,
// Mesopotamian, Ugaritic, and Classical texts across Spanish and Portuguese
const TEXT_TRANSLATIONS: Record<string, { es: Partial<LocalizedTextDetails>; pt: Partial<LocalizedTextDetails> }> = {
  // --- HEBREW BIBLE ---
  genesis: {
    es: {
      title: 'Génesis (Bereshit)',
      summary: 'El libro fundacional de la historia primigenia (Creación, Edén, Caín y Abel, Hijos de Dios / Nefilim, el Diluvio, Torre de Babel) y las tradiciones patriarcales (Abraham, Isaac, Jacob, José).',
      chronologySetting: 'Creación hasta la era patriarcal (ca. 1700 a.C.)',
      compositionDate: 'siglos X al V a.C. (capas documentales compuestas; redacción final persa)',
      earliestManuscript: '4QGen^b, 4QGen^d (Manuscritos del Mar Muerto, s. II a.C.); Códices de Alepo y Leningrado',
      manuscriptHistory: 'Atestiguado en múltiples fragmentos de las cuevas 1, 2, 4, 6 y 8 de Qumrán, el Pentateuco Samaritano y la Septuaginta griega del s. III a.C.'
    },
    pt: {
      title: 'Gênesis (Bereshit)',
      summary: 'O livro fundamental da história primeva (Criação, Éden, Caim e Abel, Filhos de Deus / Nefilins, o Dilúvio, Torre de Babel) e as tradições patriarcais (Abraão, Isaque, Jacó, José).',
      chronologySetting: 'Criação até a era patriarcal (ca. 1700 a.C.)',
      compositionDate: 'séculos X a V a.C. (camadas documentais compostas; redação final persa)',
      earliestManuscript: '4QGen^b, 4QGen^d (Manuscritos do Mar Morto, séc. II a.C.); Códices de Alepo e Leningrado',
      manuscriptHistory: 'Atestado em múltiplos fragmentos das cavernas 1, 2, 4, 6 e 8 de Qumran, no Pentateuco Samaritano e na Septuaginta grega do séc. III a.C.'
    }
  },
  exodus: {
    es: {
      title: 'Éxodo (Shemot)',
      summary: 'Liberación de Israel de Egipto, división del Mar de Juncos (Yam Suf), cántico arcaico de victoria sobre el mar (Éxodo 15), pacto en el Sinaí y construcción del Tabernáculo.',
      chronologySetting: 'Servidumbre en Egipto y teofanía del Sinaí (ca. 1440 o 1250 a.C.)',
      compositionDate: 'siglos VII al V a.C. (preserva poesía arcaica del s. XI a.C.)',
      earliestManuscript: '4QExod^b, 4QpaleoExod^m (ca. 150–100 a.C.); Códice de Alepo'
    },
    pt: {
      title: 'Êxodo (Shemot)',
      summary: 'Libertação de Israel do Egito, abertura do Mar de Juncos (Yam Suph), cântico arcaico de vitória sobre o mar (Êxodo 15), aliança no Sinai e construção do Tabernáculo.',
      chronologySetting: 'Escravidão no Egito e teofania no Sinai (ca. 1440 ou 1250 a.C.)',
      compositionDate: 'séculos VII a V a.C. (preserva poesia arcaica do séc. XI a.C.)',
      earliestManuscript: '4QExod^b, 4QpaleoExod^m (ca. 150–100 a.C.); Códice de Alepo'
    }
  },
  leviticus: {
    es: {
      title: 'Levítico (Vayikrá)',
      summary: 'Rituales sacerdotales del antiguo Israel, liturgia del Día de la Expiación (cap. 16) con las suertes para Yahveh y Azazel, enviado al desierto—origen del ángel caído asaeliano en Enoc.',
      chronologySetting: 'Campamento del Tabernáculo en el Sinaí',
      compositionDate: 'siglos VI al V a.C. (Código Sacerdotal)',
      earliestManuscript: '4QpaleoLev^a (ca. 150–100 a.C.); rollo quemado de En-Gedi (s. III d.C.)'
    },
    pt: {
      title: 'Levítico (Vayikra)',
      summary: 'Rituais sacerdotais do antigo Israel, liturgia do Dia da Expiação (cap. 16) com os bodes para Yahweh e Azazel, enviado ao deserto—base para o anjo caído asaeliano em Enoque.',
      chronologySetting: 'Acampamento do Tabernáculo no Sinai',
      compositionDate: 'séculos VI a V a.C. (Código Sacerdotal)',
      earliestManuscript: '4QpaleoLev^a (ca. 150–100 a.C.); rolo queimado de En-Gedi (séc. III d.C.)'
    }
  },
  numbers: {
    es: {
      title: 'Números (Bemidbar)',
      summary: 'Peregrinación por el desierto, censos militares, rebeliones, los oráculos de Balaam y las tradiciones de gigantes en Canaán (los anaquitas de Hebrón).',
      chronologySetting: 'Peregrinación en el desierto (ca. 1400–1200 a.C.)',
      compositionDate: 'siglos VII al V a.C.',
      earliestManuscript: '4QNum^b (ca. 50 a.C.); Códices masoréticos'
    },
    pt: {
      title: 'Números (Bemidbar)',
      summary: 'Peregrinação pelo deserto, censos militares, rebeliões, os oráculos de Balaão e os relatos dos gigantes em Canaã (os anaquins de Hebrom).',
      chronologySetting: 'Peregrinação no deserto (ca. 1400–1200 a.C.)',
      compositionDate: 'séculos VII a V a.C.',
      earliestManuscript: '4QNum^b (ca. 50 a.C.); Códices massoréticos'
    }
  },
  deuteronomy: {
    es: {
      title: 'Deuteronomio (Devarim)',
      summary: 'Discursos de despedida de Moisés en Moab. Contiene el Cantar de Moisés (Deut 32:8–9) donde Dios divide las naciones según el número de los Hijos de Dios (Bene Elohim).',
      chronologySetting: 'Llanuras de Moab antes de cruzar el Jordán',
      compositionDate: 'siglo VII a.C. (Reforma de Josías, 622 a.C.)',
      earliestManuscript: '4QDeut^j, 4QDeut^q (testigo clave de "hijos de Dios" en Qumrán)'
    },
    pt: {
      title: 'Deuteronômio (Devarim)',
      summary: 'Discursos de despedida de Moisés em Moabe. Inclui o Cântico de Moisés (Deut 32:8–9) onde Deus divide as nações segundo o número dos Filhos de Deus (Bene Elohim).',
      chronologySetting: 'Planícies de Moabe antes da travessia do Jordão',
      compositionDate: 'século VII a.C. (Reforma de Josias, 622 a.C.)',
      earliestManuscript: '4QDeut^j, 4QDeut^q (testemunha crucial de "filhos de Deus" em Qumran)'
    }
  },
  psalms: {
    es: {
      title: 'Salmos (Tehilim)',
      summary: 'Himnario y liturgia del Templo de Jerusalén. Preserva teofanías arcaicas de la tormenta (Salmo 29), asamblea divina (Salmo 82) y batallas contra el monstruo marino Leviatán (Salmo 74).',
      chronologySetting: 'Monarquía unida davídica hasta el período postexílico',
      compositionDate: 'siglos X al IV a.C. (con poesía arcaica de raigambre ugarítica)',
      earliestManuscript: '11QPs^a (Gran Rollo de Salmos de Qumrán, ca. 30–50 d.C.)'
    },
    pt: {
      title: 'Salmos (Tehilim)',
      summary: 'Hinário e liturgia do Templo de Jerusalém. Preserva teofanias arcaicas da tempestade (Salmo 29), assembleia divina (Salmo 82) e batalhas contra o monstro marinho Leviatã (Salmo 74).',
      chronologySetting: 'Monarquia davídica até o período pós-exílico',
      compositionDate: 'séculos X a IV a.C. (com poesia arcaica de matriz ugarítica)',
      earliestManuscript: '11QPs^a (Grande Rolo de Salmos de Qumran, ca. 30–50 d.C.)'
    }
  },
  isaiah: {
    es: {
      title: 'Isaías (Yeshayahu)',
      summary: 'Profecías del Proto-, Deutero- y Trito-Isaías. Contiene la caída del lucero de la mañana (Helal ben Shajar / Lucifer en cap. 14) y la muerte de Leviatán la serpiente tortuosa (cap. 27).',
      chronologySetting: 'Crisis asiria (740–701 a.C.) hasta el retorno babilónico persa',
      compositionDate: 'siglos VIII al V a.C.',
      earliestManuscript: '1QIsa^a (Gran Rollo de Isaías de Qumrán completo, ca. 125 a.C.)'
    },
    pt: {
      title: 'Isaías (Yeshayahu)',
      summary: 'Profecias do Proto-, Dêutero- e Trito-Isaías. Contém a queda da estrela da manhã (Helal ben Shachar no cap. 14) e a destruição de Leviatã a serpente veloz (cap. 27).',
      chronologySetting: 'Crise assíria (740–701 a.C.) até o retorno babilônico persa',
      compositionDate: 'séculos VIII a V a.C.',
      earliestManuscript: '1QIsa^a (Grande Rolo de Isaías de Qumran completo, ca. 125 a.C.)'
    }
  },
  ezekiel: {
    es: {
      title: 'Ezequiel (Yejezkel)',
      summary: 'Visiones sacerdotales del exilio en Babilonia: el Carro Divino (Merkabah), la lamentación sobre el Rey de Tiro en el Edén monte santo de Dios (cap. 28) y el valle de los huesos secos.',
      chronologySetting: 'Exilio babilónico junto al río Quebar (593–571 a.C.)',
      compositionDate: 'siglo VI a.C.',
      earliestManuscript: '4QEzek^a (ca. 50–1 a.C.); Códices masoréticos'
    },
    pt: {
      title: 'Ezequiel (Yechezkel)',
      summary: 'Visões sacerdotais do exílio na Babilônia: a Carruagem Divina (Merkavah), a lamentação sobre o Rei de Tiro no Éden monte santo de Deus (cap. 28) e o vale de ossos secos.',
      chronologySetting: 'Exílio babilônico junto ao rio Quebar (593–571 a.C.)',
      compositionDate: 'século VI a.C.',
      earliestManuscript: '4QEzek^a (ca. 50–1 a.C.); Códices massoréticos'
    }
  },
  job: {
    es: {
      title: 'Job (Iyov)',
      summary: 'Magna obra de literatura sapiencial. Debate sobre el sufrimiento del justo, el Satán en el concilio divino y el discurso de Yahveh sobre Behemot y Leviatán.',
      chronologySetting: 'Tierra patriarcal de Uz',
      compositionDate: 'siglos VII al IV a.C.',
      earliestManuscript: '4QJob^a, 11QtgJob (Tárgum arameo de Job de Qumrán)'
    },
    pt: {
      title: 'Jó (Iyov)',
      summary: 'Obra-prima da literatura sapiencial. Debate sobre o sofrimento do justo, o Satã no conselho divino e o discurso do Senhor sobre Beemote e Leviatã.',
      chronologySetting: 'Terra patriarcal de Uz',
      compositionDate: 'séculos VII a IV a.C.',
      earliestManuscript: '4QJob^a, 11QtgJob (Targum aramaico de Jó de Qumran)'
    }
  },
  proverbs: {
    es: {
      title: 'Proverbios (Mishlei)',
      summary: 'Colecciones sapienciales de Israel. Incluye las palabras de los sabios (Prov 22:17–24:22), directamente dependientes de las Instrucciones egipcias de Amenemope.',
      chronologySetting: 'Corte monárquica israelita',
      compositionDate: 'siglos X al VI a.C.',
      earliestManuscript: '4QProv^b (ca. mitad del s. I a.C.)'
    },
    pt: {
      title: 'Provérbios (Mishlei)',
      summary: 'Coleções sapienciais de Israel. Inclui as palavras dos sábios (Prov 22:17–24:22), diretamente dependentes das Instruções egípcias de Amenemope.',
      chronologySetting: 'Corte monárquica israelita',
      compositionDate: 'séculos X a VI a.C.',
      earliestManuscript: '4QProv^b (ca. metade do séc. I a.C.)'
    }
  },

  // --- SECOND TEMPLE & DEAD SEA SCROLLS ---
  '1_enoch': {
    es: {
      title: '1 Enoc (Libro de los Vigilantes y Parábolas)',
      summary: 'El apocalipsis judío paradigmático del Segundo Templo. Narra el descenso de 200 ángeles Vigilantes en el Monte Hermón, su procreación de los Nefilim, y el juicio universal.',
      chronologySetting: 'Generaciones antediluvianas de Jared y Enoc',
      compositionDate: 'siglos III al I a.C. (partes arameas más antiguas ca. 250 a.C.)',
      earliestManuscript: '4Q201–212 (fragmentos arameos de Qumrán Cueva 4); manuscritos Ge\'ez completos de Etiopía',
      manuscriptHistory: 'Preservado íntegramente en el canon bíblico de la Iglesia Ortodoxa Etíope Tewahedo; fragmentos griegos hallados en Akhmim, Egipto.'
    },
    pt: {
      title: '1 Enoque (Livro dos Vigilantes e Parábolas)',
      summary: 'O apocalipse judaico paradigmático do Segundo Templo. Narra a descida de 200 anjos Vigilantes no Monte Hermom, a procriação dos Nefilins e o julgamento universal.',
      chronologySetting: 'Gerações antediluvianas de Jarede e Enoque',
      compositionDate: 'séculos III a I a.C. (partes aramaicas mais antigas ca. 250 a.C.)',
      earliestManuscript: '4Q201–212 (fragmentos aramaicos de Qumran Caverna 4); manuscritos Ge\'ez completos da Etiópia',
      manuscriptHistory: 'Preservado integralmente no cânon bíblico da Igreja Ortodoxa Etíope Tewahedo; fragmentos gregos encontrados em Akhmim, Egito.'
    }
  },
  jubilees: {
    es: {
      title: 'Libro de los Jubileos (Pequeño Génesis)',
      summary: 'Reescritura cronológica de Génesis y Éxodo revelada por el Ángel de la Presencia en el Monte Sinaí bajo un calendario solar jubilar de 364 días.',
      chronologySetting: 'Desde la Creación hasta la ley en el Sinaí',
      compositionDate: 'ca. 160–150 a.C. (período macabeo)',
      earliestManuscript: '15 copias hebreas en las cuevas 1, 2, 4 y 11 de Qumrán; canon etíope'
    },
    pt: {
      title: 'Livro dos Jubileus (Pequeno Gênesis)',
      summary: 'Reescrita cronológica de Gênesis e Êxodo revelada pelo Anjo da Presença no Monte Sinai sob um calendário solar jubilar de 364 dias.',
      chronologySetting: 'Da Criação até a entrega da lei no Sinai',
      compositionDate: 'ca. 160–150 a.C. (período macabeu)',
      earliestManuscript: '15 cópias hebraicas nas cavernas 1, 2, 4 e 11 de Qumran; cânon etíope'
    }
  },
  giants: {
    es: {
      title: 'Libro de los Gigantes (4Q530–532)',
      summary: 'Texto arameo descubierto en Qumrán que relata las pesadillas proféticas de los gigantes Ohya y Hahya sobre el diluvio universal e introduce a Gilgamesh como gigante.',
      chronologySetting: 'Era antediluviana',
      compositionDate: 'ca. siglo II a.C.',
      earliestManuscript: '4Q530, 4Q531, 1Q23, 6Q8 (Manuscritos del Mar Muerto)'
    },
    pt: {
      title: 'Livro dos Gigantes (4Q530–532)',
      summary: 'Texto aramaico descoberto em Qumran relatando os pesadelos proféticos dos gigantes Ohya e Hahya sobre o dilúvio iminente e citando Gilgamesh como um gigante.',
      chronologySetting: 'Era antediluviana',
      compositionDate: 'ca. século II a.C.',
      earliestManuscript: '4Q530, 4Q531, 1Q23, 6Q8 (Manuscritos do Mar Morto)'
    }
  },
  genesis_apocryphon: {
    es: {
      title: 'Génesis Apócrifo (1Q20)',
      summary: 'Manuscrito arameo de Qumrán que reelabora las vidas de Enoc, Noé y Abraham en primera persona. Detalla la angustia de Lamec creyendo que su hijo Noé fue engendrado por un Vigilante.',
      chronologySetting: 'De Enoc a Abraham',
      compositionDate: 'ca. siglo I a.C.',
      earliestManuscript: '1Q20 (Manuscrito original en cuero de la Cueva 1 de Qumrán)'
    },
    pt: {
      title: 'Gênesis Apócrifo (1Q20)',
      summary: 'Manuscrito aramaico de Qumran que reconta as vidas de Enoque, Noé e Abraão em primeira pessoa. Descreve a angústia de Lameque temendo que Noé fora gerado por um Vigilante.',
      chronologySetting: 'De Enoque a Abraão',
      compositionDate: 'ca. século I a.C.',
      earliestManuscript: '1Q20 (Manuscrito original em couro da Caverna 1 de Qumran)'
    }
  },
  second_esdras: {
    es: {
      title: '2 Esdras / 4 Esdras (Los 70 Libros Ocultos)',
      summary: 'Apocalipsis judío tras la destrucción del Segundo Templo en 70 d.C. En el capítulo 14, Esdras reescribe 94 libros: 24 para todos y 70 secretos reservados exclusivamente para los sabios.',
      chronologySetting: 'Treinta años tras la caída de Jerusalén',
      compositionDate: 'ca. 95–100 d.C.',
      earliestManuscript: 'Códices latinos (Amiatinus) y traducciones siríacas, etíopes y georgianas'
    },
    pt: {
      title: '2 Esdras / 4 Esdras (Os 70 Livros Ocultos)',
      summary: 'Apocalipse judaico após a destruição do Segundo Templo em 70 d.C. No capítulo 14, Esdras reescreve 94 livros: 24 públicos e 70 secretos reservados aos sábios.',
      chronologySetting: 'Trinta anos após a queda de Jerusalém',
      compositionDate: 'ca. 95–100 d.C.',
      earliestManuscript: 'Códices latinos (Amiatinus) e traduções siríacas, etíopes e georgianas'
    }
  },

  // --- MESOPOTAMIAN CORPUS ---
  gilgamesh: {
    es: {
      title: 'Epopeya de Gilgamesh (Tablilla XI)',
      summary: 'La gran epopeya heroica mesopotámica. La Tablilla XI preserva el relato arquetípico del diluvio contado por Utnapishtim a Gilgamesh, con barco cuadrado, aves liberadas y sacrificio aromático.',
      chronologySetting: 'Dinastía temprana de Uruk (ca. 2700 a.C.)',
      compositionDate: 'Versión babilónica estándar recopilada por Sin-leqi-unninni ca. 1200 a.C.',
      earliestManuscript: 'Tablillas cuneiformes de la Biblioteca Real de Asurbanipal en Nínive (s. VII a.C.)'
    },
    pt: {
      title: 'Epopeia de Gilgamesh (Tábua XI)',
      summary: 'A principal epopeia heroica mesopotâmica. A Tábua XI preserva o relato arquetípico do dilúvio narrado por Utnapishtim a Gilgamesh, com barco cúbico, envio de aves e sacrifício aromático.',
      chronologySetting: 'Dinastia arcaica de Uruk (ca. 2700 a.C.)',
      compositionDate: 'Versão babilônica padrão compilada por Sin-leqi-unninni ca. 1200 a.C.',
      earliestManuscript: 'Tábuas cuneiformes da Biblioteca Real de Assurbanípal em Nínive (séc. VII a.C.)'
    }
  },
  atrahasis: {
    es: {
      title: 'Poema de Atrahasis',
      summary: 'Poema acadio antiguo que narra la rebelión de los dioses menores Igigi, la creación de la humanidad con arcilla y sangre de un dios degollado, y el diluvio enviado por Enlil por el ruido humano.',
      chronologySetting: 'Desde el origen de los dioses hasta el gran diluvio',
      compositionDate: 'ca. 1640 a.C. (Copia del escriba Kasap-aya en el reinado de Ammi-saduqa)',
      earliestManuscript: 'Tablillas babilónicas paleobabilónicas del Museo Británico'
    },
    pt: {
      title: 'Poema de Atrahasis',
      summary: 'Poema acadiano antigo relatando a rebelião dos deuses menores Igigi, a criação humana com argila e sangue divino, e o dilúvio ordenado por Enlil pelo barulho humano.',
      chronologySetting: 'Desde a origem dos deuses até o grande dilúvio',
      compositionDate: 'ca. 1640 a.C. (Cópia do escriba Kasap-aya no reinado de Ammi-saduqa)',
      earliestManuscript: 'Tábuas babilônicas antigas do Museu Britânico'
    }
  },
  enuma_elish: {
    es: {
      title: 'Enûma Eliš (Epopeya de la Creación)',
      summary: 'Himno cosmogónico babilónico de siete tablillas que celebra la ascensión de Marduk tras derrotar a Tiamat, el abismo marino primordial, dividiendo su cuerpo para formar el cielo y la tierra.',
      chronologySetting: 'Antes de la fundación del cosmos y Babilonia',
      compositionDate: 'ca. 1750–1100 a.C. (probablemente bajo Nabucodonosor I)',
      earliestManuscript: 'Tablillas neoasirias de Nínive, Asur y Babilonia'
    },
    pt: {
      title: 'Enûma Eliš (Epopeia da Criação)',
      summary: 'Hino cosmogônico babilônico em sete tábuas celebrando a exaltação de Marduk após derrotar Tiamat, o abismo aquático primordial, dividindo seu corpo para criar o céu e a terra.',
      chronologySetting: 'Antes da fundação do cosmos e da Babilônia',
      compositionDate: 'ca. 1750–1100 a.C. (provavelmente no reinado de Nabucodonosor I)',
      earliestManuscript: 'Tábuas neoassírias de Nínive, Assur e Babilônia'
    }
  },

  // --- UGARITIC & CANAANITE CORPUS ---
  baal_cycle: {
    es: {
      title: 'Ciclo de Baal (KTU 1.1–1.6)',
      summary: 'Poemas épicos descubiertos en Ras Shamra que narran el combate del dios de la tormenta Baal Hadad contra Yam (el Mar/Juez Río) y Mot (la Muerte), y su entronización en el Monte Zafón.',
      chronologySetting: 'Mitología cananea de la Edad del Bronce Tardío',
      compositionDate: 'ca. 1350–1200 a.C. (escriba Ilimilku de Shubanu)',
      earliestManuscript: 'Tablillas alfabéticas cuneiformes de Ugarit conservadas en el Museo del Louvre'
    },
    pt: {
      title: 'Ciclo de Baal (KTU 1.1–1.6)',
      summary: 'Poemas épicos descobertos em Ras Shamra narrando a batalha do deus da tempestade Baal Hadad contra Yam (o Mar) e Mote (a Morte), e sua entronização no Monte Zafom.',
      chronologySetting: 'Mitologia cananeia da Idade do Bronze Recente',
      compositionDate: 'ca. 1350–1200 a.C. (escriba Ilimilku de Shubanu)',
      earliestManuscript: 'Tábuas alfabéticas cuneiformes de Ugarit preservadas no Museu do Louvre'
    }
  },
  rephaim_texts: {
    es: {
      title: 'Textos de los Refaím (KTU 1.108 / 1.161)',
      summary: 'Liturgias funerarias y necrománticas ugaríticas que invocan a los espíritus de los reyes guerreros difuntos (Rapiuma) liderados por Rapiu en Astarot y Edrei (paralelo de Og en Deut 3).',
      chronologySetting: 'Culto dinástico real de Ugarit',
      compositionDate: 'ca. 1250 a.C.',
      earliestManuscript: 'Tablillas cuneiformes de Ras Shamra'
    },
    pt: {
      title: 'Textos dos Refains (KTU 1.108 / 1.161)',
      summary: 'Liturgias fúnebres e necromânticas ugaríticas invocando os espíritos dos reis guerreiros falecidos (Rapiuma) liderados por Rapiu em Astarote e Edrei (paralelo a Ogue em Deut 3).',
      chronologySetting: 'Culto dinástico real de Ugarit',
      compositionDate: 'ca. 1250 a.C.',
      earliestManuscript: 'Tábuas cuneiformes de Ras Shamra'
    }
  },

  // --- EGYPTIAN & CLASSICAL ---
  amenemope: {
    es: {
      title: 'Instrucción de Amenemope',
      summary: 'Tratado sapiencial egipcio de 30 capítulos sobre honestidad, dominio propio y templanza. Sus proverbios y estructura fueron adoptados directamente en Proverbios 22:17–24:22.',
      chronologySetting: 'Imperio Nuevo egipcio',
      compositionDate: 'ca. 1100 a.C. (Dinastías XIX–XX)',
      earliestManuscript: 'Papiro 10474 del Museo Británico'
    },
    pt: {
      title: 'Instrução de Amenemope',
      summary: 'Tratado sapiencial egípcio em 30 capítulos sobre honestidade, autocontrole e serenidade. Sua estrutura e provérbios foram adotados diretamente em Provérbios 22:17–24:22.',
      chronologySetting: 'Novo Império egípcio',
      compositionDate: 'ca. 1100 a.C. (Dinastias XIX–XX)',
      earliestManuscript: 'Papiro 10474 do Museu Britânico'
    }
  },
  theogony: {
    es: {
      title: 'Teogonía de Hesíodo',
      summary: 'Poema épico griego sobre la genealogía de los dioses, la castración de Urano, el nacimiento de los Titanes y la Titanomaquia, con Zeus arrojando a los rebeldes al Tártaro (paralelo de 2 Pedro 2:4).',
      chronologySetting: 'Orígenes míticos del panteón helénico',
      compositionDate: 'ca. 700 a.C.',
      earliestManuscript: 'Papiros de Oxirrinco y manuscritos bizantinos medievales'
    },
    pt: {
      title: 'Teogonia de Hesíodo',
      summary: 'Poema épico grego sobre a genealogia dos deuses, a castração de Urano, o nascimento dos Titãs e a Titanomaquia, com Zeus aprisionando os rebeldes no Tártaro (paralelo a 2 Pedro 2:4).',
      chronologySetting: 'Origens míticas do panteão helênico',
      compositionDate: 'ca. 700 a.C.',
      earliestManuscript: 'Papiros de Oxirrinco e manuscritos bizantinos medievais'
    }
  }
};

// Translates original language names into localized scholar terminology
export function getLocalizedLanguageName(langName: string, lang: SupportedLanguage): string {
  if (lang === 'en') return langName;

  const mapping: Record<string, { es: string; pt: string }> = {
    'Biblical Hebrew': { es: 'Hebreo Bíblico', pt: 'Hebraico Bíblico' },
    'Biblical Aramaic': { es: 'Arameo Bíblico', pt: 'Aramaico Bíblico' },
    'Aramaic': { es: 'Arameo', pt: 'Aramaico' },
    'Koine Greek': { es: 'Griego Koiné', pt: 'Grego Koiné' },
    'Ancient Greek': { es: 'Griego Antiguo', pt: 'Grego Antigo' },
    'Akkadian (Standard Babylonian)': { es: 'Acadio (Babilónico Estándar)', pt: 'Acadiano (Babilônico Padrão)' },
    'Akkadian (Old Babylonian)': { es: 'Acadio (Paleobabilónico)', pt: 'Acadiano (Babilônico Antigo)' },
    'Ugaritic': { es: 'Ugarítico', pt: 'Ugarítico' },
    'Ge\'ez (Classical Ethiopic)': { es: 'Ge\'ez (Etíope Clásico)', pt: 'Ge\'ez (Etíope Clássico)' },
    'Late Egyptian': { es: 'Egipcio Tardío', pt: 'Egípcio Tardio' },
    'Latin': { es: 'Latín Clásico', pt: 'Latim Clássico' },
    'Sanskrit': { es: 'Sánscrito Védico', pt: 'Sânscrito Védico' },
    'Old Norse': { es: 'Nórdico Antiguo', pt: 'Nórdico Antigo' },
    'Classical K\'iche\'': { es: 'K\'iche\' Clásico', pt: 'K\'iche\' Clássico' }
  };

  const match = mapping[langName];
  if (match && match[lang]) {
    return match[lang];
  }
  return langName;
}

// Translates culture names into localized strings
export function getLocalizedCultureName(culture: Culture, lang: SupportedLanguage): string {
  if (lang === 'en') return culture.name;

  const mapping: Record<string, { es: string; pt: string }> = {
    hebrew_israelite: { es: 'Israelita / Biblia Hebrea', pt: 'Israelita / Bíblia Hebraica' },
    second_temple: { es: 'Judaísmo del Segundo Templo y Qumrán', pt: 'Judaísmo do Segundo Templo e Qumran' },
    mesopotamian: { es: 'Mesopotamia (Sumeria / Acadia / Babilonia)', pt: 'Mesopotâmia (Suméria / Acádia / Babilônia)' },
    ugaritic_canaanite: { es: 'Cananeo y Ugarítico', pt: 'Cananeu e Ugarítico' },
    greco_roman: { es: 'Grecorromana', pt: 'Greco-Romana' },
    egyptian: { es: 'Egipcia Antigua', pt: 'Egípcia Antiga' },
    vedic: { es: 'Védica e India Antigua', pt: 'Védica e Índia Antiga' },
    norse: { es: 'Nórdica y Escandinava', pt: 'Nórdica e Escandinava' },
    persian: { es: 'Persa y Zoroástrica', pt: 'Persa e Zoroástrica' },
    mesoamerican: { es: 'Mesoamericana (Maya K\'iche\')', pt: 'Mesoamericana (Maia K\'iche\')' }
  };

  const match = mapping[culture.id];
  if (match && match[lang]) {
    return match[lang];
  }
  return culture.name;
}

// Returns full localized text details for a given text item
export function getLocalizedTextDetails(text: TextItem, lang: SupportedLanguage): LocalizedTextDetails {
  const custom = TEXT_TRANSLATIONS[text.id];
  const langOverrides = custom ? (lang === 'es' ? custom.es : lang === 'pt' ? custom.pt : undefined) : undefined;

  return {
    title: langOverrides?.title || text.title,
    summary: langOverrides?.summary || text.summary,
    originalLanguageName: getLocalizedLanguageName(text.originalLanguage, lang),
    chronologySetting: langOverrides?.chronologySetting || text.chronology.dateOfStorySetting,
    compositionDate: langOverrides?.compositionDate || text.chronology.estimatedDateOfComposition,
    earliestManuscript: langOverrides?.earliestManuscript || text.chronology.dateOfEarliestSurvivingManuscript,
    manuscriptHistory: langOverrides?.manuscriptHistory || text.manuscriptHistory
  };
}

// Translates passage titles into localized strings
export function getLocalizedPassageTitle(passage: Passage, lang: SupportedLanguage): string {
  if (lang === 'en') return passage.title;

  const mapping: Record<string, { es: string; pt: string }> = {
    gen_6_1_4: { es: 'Los Nefilim y los Hijos de Dios', pt: 'Os Nefilins e os Filhos de Deus' },
    '1_enoch_6_1_6': { es: 'El Descenso de los Vigilantes en el Monte Hermón', pt: 'A Descida dos Vigilantes no Monte Hermom' },
    '1_enoch_7_1_5': { es: 'El Nacimiento de los Gigantes y la Devastación', pt: 'O Nascimento dos Gigantes e a Devastação' },
    '1_enoch_10_4_8': { es: 'El Aprisionamiento de Azazel en Dudael', pt: 'A Prisão de Azazel em Dudael' },
    leviticus_16_8_10: { es: 'Las Suertes por Yahveh y Azazel en Yom Kipur', pt: 'As Sortes por Yahweh e Azazel no Yom Kippur' },
    '1_enoch_1_9': { es: 'La Teofanía del Juicio Cósmico', pt: 'A Teofania do Juízo Cósmico' },
    jude_6_and_14_15: { es: 'Los Ángeles Encarcelados y la Cita Textual de Enoc', pt: 'Os Anjos Aprisionados e a Citação Textual de Enoque' },
    jude_14_15: { es: 'La Profecía de Enoc Séptimo desde Adán', pt: 'A Profecia de Enoque o Sétimo depois de Adão' },
    second_peter_2_4_5: { es: 'Los Ángeles Arrojados al Tártaro', pt: 'Os Anjos Lançados no Tártaro' },
    giants_4q530: { es: 'Los Sueños Proféticos de los Gigantes Ohya y Hahya', pt: 'Os Sonhos Proféticos dos Gigantes Ohya e Hahya' },
    apkallu_bit_meseri: { es: 'Los Siete Sabios Apkallu Antediluvianos de Eridu', pt: 'Os Sete Sábios Apkallu Antediluvianos de Eridu' },
    hesiod_titanomachy: { es: 'La Derrota y Aprisionamiento de los Titanes en el Tártaro', pt: 'A Derrota e Prisão dos Titãs no Tártaro' },
    gilgamesh_flood_tablet11: { es: 'Utnapishtim Narra el Gran Diluvio a Gilgamesh', pt: 'Utnapishtim Narra o Grande Dilúvio a Gilgamesh' },
    atrahasis_flood_tablet3: { es: 'El Diluvio de Atrahasis y el Arca Impermeabilizada con Betún', pt: 'O Dilúvio de Atrahasis e a Arca Impermeabilizada com Betume' },
    genesis_flood_gen6_7: { es: 'El Arca de Noé y las Aguas del Diluvio', pt: 'A Arca de Noé e as Águas do Dilúvio' },
    berossus_flood: { es: 'Xisuthrus y la Preservación de las Tablillas en Sippar', pt: 'Xisuthrus e a Preservação das Tábuas em Sipar' },
    shatapatha_brahmana_flood: { es: 'Manu y el Pez Avatar Matsya', pt: 'Manu e o Peixe Avatar Matsya' },
    popol_vuh_flood: { es: 'El Diluvio de Resina y la Destrucción de la Gente de Madera', pt: 'O Dilúvio de Resina e a Destruição dos Homens de Madeira' },
    enuma_elish_tablet1: { es: 'El Caos Primitivo: Tiamat y Apsu', pt: 'O Caos Primordial: Tiamat e Apsu' },
    genesis_1_1_2: { es: 'En el Principio y el Abismo (Tehom)', pt: 'No Princípio e o Abismo (Tehom)' },
    psalm_29_thunder: { es: 'La Voz del Señor sobre las Aguas Poderosas', pt: 'A Voz do Senhor sobre as Grandes Águas' },
    baal_thunder_ktu1_4: { es: 'Baal Truena desde su Palacio en el Monte Zafón', pt: 'Baal Troveja desde seu Palácio no Monte Zafom' },
    proverbs_22_wisdom: { es: 'Las Palabras de los Sabios y el Corazón Escuchante', pt: 'As Palavras dos Sábios e o Coração Atento' },
    amenemope_chapter1: { es: 'La Instrucción Egipcia de Sabiduría de Amenemope', pt: 'A Instrução Egípcia de Sabedoria de Amenemope' }
  };

  const match = mapping[passage.id];
  if (match && match[lang]) {
    return match[lang];
  }
  return passage.title;
}

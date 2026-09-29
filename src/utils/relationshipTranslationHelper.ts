import { Relationship, SupportedLanguage } from '../types';

export interface LocalizedRelationship {
  title: string;
  explanation: string;
}

export const RELATIONSHIP_LOCALIZATIONS: Record<string, { es: LocalizedRelationship; pt: LocalizedRelationship }> = {
  rel_jude_enoch_quotation: {
    es: {
      title: 'Judas 14–15 cita 1 Enoc 1:9 textualmente',
      explanation: 'El autor neotestamentario de Judas atribuye explícitamente la profecía a "Enoc, el séptimo desde Adán" y reproduce el texto griego de 1 Enoc 1:9 (atestiguado en el manuscrito griego de Akhmim y en arameo de Qumrán 4Q204). Esto es reconocido universalmente en la erudición bíblica como una cita directa de una obra apocalíptica seudoepigráfica.'
    },
    pt: {
      title: 'Judas 14–15 cita 1 Enoque 1:9 textualmente',
      explanation: 'O autor neotestamentário de Judas atribui explicitamente a profecia a "Enoque, o sétimo depois de Adão" e reproduz o texto grego de 1 Enoque 1:9 (atestado no manuscrito grego de Akhmim e no aramaico de Qumran 4Q204). Isto é universalmente reconhecido nos estudos bíblicos como uma citação direta de uma obra apocalíptica pseudoepígrafa.'
    }
  },
  rel_jude_enoch_watchers: {
    es: {
      title: 'Judas 6 invoca a los Vigilantes encarcelados',
      explanation: 'Judas 6 describe a "los ángeles que no guardaron su propia dignidad, sino que abandonaron su propia morada, guardados en prisiones eternas bajo tinieblas para el juicio del gran día". Este detalle narrativo no existe en Génesis 6:1–4, pero se halla textualmente en 1 Enoc 10:4–12 donde Rafael y Miguel atan a los Vigilantes en los valles de la tierra.'
    },
    pt: {
      title: 'Judas 6 invoca os Vigilantes aprisionados',
      explanation: 'Judas 6 descreve "os anjos que não guardaram o seu principado, mas deixaram a sua própria habitação, mantidos em prisões eternas sob a escuridão até ao juízo daquele grande dia". Este pormenor narrativo não existe em Gênesis 6:1–4, mas encontra-se textualmente em 1 Enoque 10:4–12 onde Rafael e Miguel amarram os Vigilantes nos vales da terra.'
    }
  },
  rel_gen6_1enoch_expansion: {
    es: {
      title: '1 Enoc amplía el fragmento primigenio de Génesis 6:1–4',
      explanation: 'El Libro de los Vigilantes (1 Enoc 6–16) toma la enigmática viñeta de cuatro versículos de Génesis 6:1–4 (hijos de Dios, hijas de los hombres, Nefilim, gibborim) y la despliega en una vasta epopeya de 200 ángeles con nombre propio, un juramento en el Monte Hermón, revelación ilícita de artes mágicas y metalúrgicas, y la violencia devastadora que manchó la tierra e hizo necesario el Diluvio.'
    },
    pt: {
      title: '1 Enoque amplia o fragmento primordial de Gênesis 6:1–4',
      explanation: 'O Livro dos Vigilantes (1 Enoque 6–16) pega na enigmática narrativa de quatro versículos de Gênesis 6:1–4 (filhos de Deus, filhas dos homens, Nefilins, gibborim) e desenvolve-a num épico detalhado com 200 anjos nomeados, um juramento no Monte Hermom, revelação ilícita de artes e a violência devastadora que manchou a terra e exigiu o Dilúvio.'
    }
  },
  rel_2peter_enoch_tartarus: {
    es: {
      title: '2 Pedro 2:4 adopta el juicio enóquico con terminología griega',
      explanation: '2 Pedro 2:4 asume la narrativa del juicio a los Vigilantes empleando el infrecuente verbo griego ταρταρόω (tartaroō, "arrojar al Tártaro"). Esto funde la angelología judía del Segundo Templo con la mitología clásica hesíodica sobre el encadenamiento de los Titanes en el abismo subterráneo del Tártaro.'
    },
    pt: {
      title: '2 Pedro 2:4 adota o julgamento enóquico com terminologia grega',
      explanation: '2 Pedro 2:4 assume a narrativa do julgamento dos Vigilantes empregando o verbo grego raro ταρταρόω (tartaroō, "lançar no Tártaro"). Isto funde a angelologia judaica do Segundo Templo com a mitologia clássica de Hesíodo sobre o aprisionamento dos Titãs no abismo subterrâneo do Tártaro.'
    }
  },
  rel_rephaim_ugaritic_rpum: {
    es: {
      title: 'Los Refaítas bíblicos y el culto a los reyes ancestros en Ugarit (KTU 1.108)',
      explanation: 'Deuteronomio 3:11 y Josué 12:4 describen a Og de Basán como el último remanente de los Refaítas que reinaba en Ashtaroth y Edrei. La tablilla ugarítica KTU 1.108 invoca al divino monarca Rapiu (rpu mlk) precisamente entronizado en las mismas ciudades (Ashtaroth y Edrei). Esto confirma que las tradiciones bíblicas sobre los gigantes de Basán conservaron la memoria de cultos cananeos a los reyes antepasados guerreros del Bronce Tardío.'
    },
    pt: {
      title: 'Os Refains bíblicos e o culto aos reis ancestrais em Ugarit (KTU 1.108)',
      explanation: 'Deuteronômio 3:11 e Josué 12:4 descrevem Ogue de Basã como o último remanescente dos Refains que reinava em Astarote e Edrei. A tábua ugarítica KTU 1.108 invoca o divino monarca Rapiu (rpu mlk) precisamente entronizado nas mesmas cidades (Astarote e Edrei). Isso confirma que as tradições bíblicas sobre os gigantes de Basã preservaram a memória de cultos cananeus aos reis antepassados guerreiros da Idade do Bronze Recente.'
    }
  },
  rel_isaiah27_baal_lotan: {
    es: {
      title: 'Isaías 27:1 y el Leviatán en el Ciclo de Baal de Ugarit (KTU 1.5)',
      explanation: 'Isaías 27:1 describe al Leviatán como la "serpiente veloz" (nahash bariah) y "serpiente tortuosa" (nahash \'aqallaton). En la tablilla ugarítica KTU 1.5 I 1–3, Baal derrota a Lôtān con los exactos cognados semíticos noroccidentales (btn brh y btn \'qltn) y el título de tirano de siete cabezas.'
    },
    pt: {
      title: 'Isaías 27:1 e o Leviatã no Ciclo de Baal de Ugarit (KTU 1.5)',
      explanation: 'Isaías 27:1 descreve o leviatã como a "serpente veloz" (nahash bariah) e "serpente tortuosa" (nahash \'aqallaton). Na tábua ugarítica KTU 1.5 I 1–3, Baal derrota Lôtān com os exatos cognatos semíticos norte-ocidentais (btn brh e btn \'qltn) e o título de tirano de sete cabeças.'
    }
  },
  rel_genesis_gilgamesh_flood: {
    es: {
      title: 'Génesis 6–9 y la Tablilla XI de Gilgamesh / Atrahasis',
      explanation: 'El relato bíblico del diluvio y la Tablilla XI de Gilgamesh comparten una secuencia estructural idéntica: construcción de una embarcación de múltiples cubiertas impermeabilizada con brea, salvamento de especímenes animales, reposo en una cima montañosa (Ararat / Nimush), envío sucesivo de tres aves (paloma, golondrina, cuervo) y sacrificio posdiluviano grato a la divinidad.'
    },
    pt: {
      title: 'Gênesis 6–9 e a Tábua XI de Gilgamesh / Atrahasis',
      explanation: 'O relato bíblico do dilúvio e a Tábua XI de Gilgamesh compartilham uma sequência estrutural idêntica: construção de uma embarcação de múltiplos conveses impermeabilizada com betume, resgate de espécimes animais, repouso num cume montanhoso (Ararat / Nimush), envio sucessivo de três aves (pomba, andorinha, corvo) e sacrifício pós-diluviano agradável à divindade.'
    }
  },
  rel_gen6_book_of_giants: {
    es: {
      title: 'El Libro de los Gigantes (4Q530) y los nombres mesopotámicos',
      explanation: 'En los Manuscritos del Mar Muerto (4Q530), los gigantes nacidos de los Vigilantes reciben nombres propios, destacando Gilgamesh y Hobabish (Humbaba), integrando directamente a los héroes de la epopeya babilónica en la tradición apocalíptica judía.'
    },
    pt: {
      title: 'O Livro dos Gigantes (4Q530) e os nomes mesopotâmicos',
      explanation: 'Nos Manuscritos do Mar Morto (4Q530), os gigantes nascidos dos Vigilantes recebem nomes próprios, destacando-se Gilgamesh e Hobabish (Humbaba), integrando diretamente os heróis da epopeia babilônica na tradição apocalíptica judaica.'
    }
  },
  rel_numbers_gen6_nephilim: {
    es: {
      title: 'Números 13:33 vincula los Nefilim antidiluvianos con los Anaquim cananeos',
      explanation: 'Los espías hebreos informan haber visto en Canaán a los hijos de Anac "de la raza de los gigantes (Nefilim)", identificando explícitamente a los habitantes colosales de las ciudades fortificadas con la memoria del linaje antediluviano de Génesis 6.'
    },
    pt: {
      title: 'Números 13:33 vincula os Nefilins antediluvianos aos Anaquins cananeus',
      explanation: 'Os espias hebreus relatam ter visto em Canaã os filhos de Enaque "descendentes dos gigantes (Nefilins)", identificando explicitamente os habitantes colossais das cidades fortificadas com a memória da linhagem antediluviana de Gênesis 6.'
    }
  },
  rel_gen6_hesiod_titans: {
    es: {
      title: 'Titanes griegos en Hesíodo y Vigilantes en Génesis/Enoc (Arquetipo Comparativo)',
      explanation: 'En la Teogonía de Hesíodo, los Titanes son seres divinos primordiales que se rebelaron y fueron arrojados al Tártaro. Aunque comparten el arquetipo mediterráneo de seres celestiales castigados en el abismo, la mitología griega ensalza a los héroes nacidos de dioses, mientras que la tradición semítica los considera origen de corrupción.'
    },
    pt: {
      title: 'Titãs gregos em Hesíodo e Vigilantes em Gênesis/Enoque (Arquétipo Comparativo)',
      explanation: 'Na Teogonia de Hesíodo, os Titãs são seres divinos primordiais que se rebelaram e foram lançados no Tártaro. Embora compartilhem o arquétipo mediterrâneo de seres celestes castigados no abismo, a mitologia grega enaltece os heróis nascidos de deuses, ao passo que a tradição semítica os considera origem de corrupção.'
    }
  },
  rel_flood_manu_comparative: {
    es: {
      title: 'El Diluvio védico de Manu y el relato bíblico (Arquetipo Indo-Euro-Asiático)',
      explanation: 'El Shatapatha Brahmana narra cómo el avatar divino Matsya advierte al rey Manu de un diluvio cósmico y guía su barco hasta la cumbre del Himalaya. No existe evidencia de dependencia textual directa con Génesis, constituyendo un arquetipo mitológico eurasiático independiente.'
    },
    pt: {
      title: 'O Dilúvio védico de Manu e o relato bíblico (Arquétipo Indo-Euro-Asiático)',
      explanation: 'O Shatapatha Brahmana narra como o avatar divino Matsya adverte o rei Manu de um dilúvio cósmico e guia o seu barco até ao cume do Himalaia. Não existe evidência de dependência textual direta com Gênesis, constituindo um arquétipo mitológico eurasiano independente.'
    }
  },
  rel_flood_popol_vuh_comparative: {
    es: {
      title: 'El Diluvio de resina en el Popol Vuh maya y Génesis (Paralelo del Nuevo Mundo)',
      explanation: 'El Popol Vuh relata la destrucción de los hombres imperfectos de madera mediante una inundación de resina y el levantamiento de los animales y utensilios domésticos. Este mito mesoamericano es independiente de las tradiciones del Viejo Mundo.'
    },
    pt: {
      title: 'O Dilúvio de resina no Popol Vuh maia e Gênesis (Paralelo do Novo Mundo)',
      explanation: 'O Popol Vuh relata a destruição dos homens imperfeitos de madeira através de uma inundação de resina e da revolta dos animais e utensílios domésticos. Este mito mesoamericano é inteiramente independente das tradições do Velho Mundo.'
    }
  },
  rel_apkallu_watchers_polemic: {
    es: {
      title: 'Inversión polémica: Los sabios Apkallu mesopotámicos y los Vigilantes de 1 Enoc',
      explanation: 'En Mesopotamia, los siete sabios Apkallu antediluvianos eran reverenciados por traer la civilización y la sabiduría divina desde el dios Enki. 1 Enoc invierte polémicamente esta veneración, transformando las artes reveladas por los Apkallu en artes prohibidas que corrompieron a la humanidad.'
    },
    pt: {
      title: 'Inversão polêmica: Os sábios Apkallu mesopotâmicos e os Vigilantes de 1 Enoque',
      explanation: 'Na Mesopotâmia, os sete sábios Apkallu antediluvianos eram reverenciados por trazerem a civilização e a sabedoria divina do deus Enki. 1 Enoque inverte polemicamente essa veneração, transformando as artes reveladas pelos Apkallu em artes proibidas que corromperam a humanidade.'
    }
  },
  rel_deut32_divinecouncil_ugarit: {
    es: {
      title: 'Deuteronomio 32:8–9 y la Asamblea divina de El en Ugarit',
      explanation: 'Los manuscritos de Qumrán (4QDeut^j) y la Septuaginta atestiguan la lectura original de Deuteronomio 32:8: Dios fijó las fronteras según el número de los "hijos de Dios" (bene Elohim). Esto refleja con exactitud la estructura del panteón ugarítico donde el Dios supremo El preside a 70 hijos divinos.'
    },
    pt: {
      title: 'Deuteronômio 32:8–9 e a Assembleia divina de El em Ugarit',
      explanation: 'Os manuscritos de Qumran (4QDeut^j) e a Septuaginta atestam a leitura original de Deuteronômio 32:8: Deus fixou os limites segundo o número dos "filhos de Deus" (bene Elohim). Isto reflete com exatidão a estrutura do panteão ugarítico onde o Deus supremo El preside sobre 70 filhos divinos.'
    }
  },
  rel_psalm82_council_of_el: {
    es: {
      title: 'Salmo 82 y el Consejo de los Elohim en el Próximo Oriente',
      explanation: 'El Salmo 82 sitúa a Yahveh en medio de la "asamblea de El" (adat-El), juzgando a los demás elohim que han gobernado las naciones con injusticia y sentenciándolos a morir como hombres mortales.'
    },
    pt: {
      title: 'Salmo 82 e o Conselho dos Elohim no Oriente Próximo',
      explanation: 'O Salmo 82 situa o Senhor no meio da "assembleia divina" (adat-El), julgando os demais elohim que governaram as nações com injustiça e sentenciando-os a morrer como homens mortais.'
    }
  },
  rel_baal_mot_isaiah25_death: {
    es: {
      title: 'La derrota de Mot (la Muerte) en Ugarit e Isaías 25:8 / 1 Corintios 15:54',
      explanation: 'En el ciclo cananeo de Ugarit, Baal y Anat derrotan a Mot (la Muerte personificada). Esta imaginería influye en la promesa profética de Isaías 25:8 ("Él devorará a la muerte para siempre") y la cita de Pablo en 1 Corintios 15:54.'
    },
    pt: {
      title: 'A derrota de Mot (a Morte) em Ugarit e Isaías 25:8 / 1 Coríntios 15:54',
      explanation: 'No ciclo cananeu de Ugarit, Baal e Anat derrotam Mot (a Morte personificada). Esta imagética influencia a promessa profética de Isaías 25:8 ("Ele tragará a morte para sempre") e a citação paulina em 1 Coríntios 15:54.'
    }
  },
  rel_hammurabi_covenant_code: {
    es: {
      title: 'El Código de Hammurabi y las leyes de Éxodo 21–23 (Lex Talionis)',
      explanation: 'El Código de Hammurabi (§§196–200) y el Código de la Alianza de Éxodo 21 comparten la formulación casuística de "ojo por ojo, diente por diente" (lex talionis) y prescripciones específicas sobre lesiones y bueyes acorneadores.'
    },
    pt: {
      title: 'O Código de Hamurabi e as leis de Êxodo 21–23 (Lex Talionis)',
      explanation: 'O Código de Hamurabi (§§196–200) e o Código da Aliança de Êxodo 21 compartilham a formulação casuística de "olho por olho, dente por dente" (lex talionis) e prescrições específicas sobre lesões corporais e bois chifradores.'
    }
  },
  rel_hesiod_daniel2_metals: {
    es: {
      title: 'Las edades de los metales en Hesíodo y la estatua de Daniel 2',
      explanation: 'La doctrina de la degradación histórica simbolizada por metales descendentes (oro, plata, bronce, hierro) en Hesíodo (Trabajos y Días) y Ovidio encuentra un paralelo estructural en el sueño de Nabucodonosor en Daniel 2.'
    },
    pt: {
      title: 'As idades dos metais em Hesíodo e a estátua de Daniel 2',
      explanation: 'A doutrina da degradação histórica simbolizada por metais sucessivos (ouro, prata, bronze, ferro) em Hesíodo (Os Trabalhos e os Dias) e Ovídio encontra um paralelo estrutural no sonho de Nabucodonosor em Daniel 2.'
    }
  },
  rel_jubilees_demons_enoch: {
    es: {
      title: 'Jubileos 10, Mastema y el origen de los demonios como espíritus de los gigantes',
      explanation: 'El Libro de los Jubileos 10 desarrolla la teología enóquica explicando que los demonios atormentadores que afligen a la humanidad son los espíritus incorpóreos desprendidos de los gigantes tras su destrucción física antes del Diluvio.'
    },
    pt: {
      title: 'Jubileus 10, Mastema e a origem dos demônios como espíritos dos gigantes',
      explanation: 'O Livro dos Jubileus 10 desenvolve a teologia enóquica explicando que os demônios atormentadores que afligem a humanidade são os espíritos desincorporados dos gigantes após a sua destruição física antes do Dilúvio.'
    }
  },
  rel_1qs_two_spirits_persian: {
    es: {
      title: 'El Tratado de los Dos Espíritus en Qumrán (1QS) y el dualismo persa zoroástrico',
      explanation: 'La Regla de la Comunidad (1QS III–IV) expone un riguroso dualismo cósmico entre el Príncipe de las Luces y el Ángel de las Tinieblas, reflejando el influjo o desarrollo paralelo con el dualismo persa de Ahura Mazda y Angra Mainyu.'
    },
    pt: {
      title: 'O Tratado dos Dois Espíritos em Qumran (1QS) e o dualismo persa zoroástrico',
      explanation: 'A Regra da Comunidade (1QS III–IV) expõe um rigoroso dualismo cósmico entre o Príncipe das Luzes e o Anjo das Trevas, refletindo a influência ou desenvolvimento paralelo com o dualismo persa de Ahura Mazda e Angra Mainyu.'
    }
  },
  rel_book_of_dead_daniel5_scales: {
    es: {
      title: 'El pesaje del corazón en Egipto y el juicio en la balanza de Daniel 5:27',
      explanation: 'El hechizo 125 del Libro de los Muertos egipcio donde el corazón es pesado en la Balanza de Ma\'at contra la pluma de la verdad evoca el juicio divino de Daniel 5:27 ("Pesado has sido en balanza, y fuiste hallado falto").'
    },
    pt: {
      title: 'A pesagem do coração no Egito e o julgamento na balança de Daniel 5:27',
      explanation: 'O capítulo 125 do Livro dos Mortos egípcio onde o coração é pesado na Balança de Ma\'at contra a pena da verdade evoca o julgamento divino de Daniel 5:27 ("Pesado foste na balança, e foste achado em falta").'
    }
  },
  rel_ishtar_descent_sheol: {
    es: {
      title: 'El Descenso de Ishtar a los infiernos y la geografía bíblica del Seol',
      explanation: 'La descripción mesopotámica de la morada de Ereshkigal como la "casa de las tinieblas y del polvo" de donde nadie regresa provee el trasfondo cosmológico de las descripciones del Seol en Job y Salmos.'
    },
    pt: {
      title: 'A Descida de Ishtar aos infernos e a geografia bíblica do Sheol',
      explanation: 'A descrição mesopotâmica da morada de Ereshkigal como a "casa da escuridão e do pó" de onde ninguém regressa fornece o pano de fundo cosmológico para as descrições do Sheol em Jó e Salmos.'
    }
  },
  rel_apocryphon_john_enoch_watchers: {
    es: {
      title: 'El Apócrifo de Juan gnóstico y la reinterpretación de los Vigilantes',
      explanation: 'El Apócrifo de Juan reinterpreta el mito de Génesis 6 y 1 Enoc: los ángeles del demiurgo arconte Yaldabaoth descienden a las hijas de los hombres para implantar el espíritu falsificador que ata a la humanidad al mundo material.'
    },
    pt: {
      title: 'O Apócrifo de João gnóstico e a reinterpretação dos Vigilantes',
      explanation: 'O Apócrifo de João reinterpreta o mito de Gênesis 6 e 1 Enoque: os anjos do demiurgo arconte Yaldabaoth descem às filhas dos homens para implantar o espírito contrafeito que aprisiona a humanidade no mundo material.'
    }
  },
  rel_tehom_tiamat: {
    es: {
      title: 'Tehom y Tiamat: El combate con las aguas del caos primordial',
      explanation: 'El sustantivo hebreo Tehom (Génesis 1:2) es el cognado etimológico directo de la diosa babilónica Tiamat. La poesía bíblica (Salmo 74 e Isaías 51) conserva el mito de combate primordial (Chaoskampf) en el que Dios atraviesa al monstruo marino y fija los confines cósmicos, en paralelo con Marduk en Enuma Elish.'
    },
    pt: {
      title: 'Tehom e Tiamat: O combate com as águas do caos primordial',
      explanation: 'O substantivo hebraico Tehom (Gênesis 1:2) é o cognato etimológico direto da deusa babilônica Tiamat. A poesia bíblica (Salmo 74 e Isaías 51) preserva o mito de combate primordial (Chaoskampf) no qual Deus trespassa o monstro marinho e fixa os limites cósmicos, paralelamente a Marduk em Enuma Elish.'
    }
  },
  rel_leviathan_lotan: {
    es: {
      title: 'Isaías 27:1 y la fórmula poética ugarítica de Lotán (KTU 1.5)',
      explanation: 'Isaías 27:1 reproduce literalmente la fórmula cananea de Ras Shamra: "Leviatán serpiente veloz, Leviatán serpiente tortuosa" corresponde exactamente a "Lōtānu baṯnu barīḥu, baṯnu ʿaqallatānu" en el Ciclo ugarítico de Baal.'
    },
    pt: {
      title: 'Isaías 27:1 e a fórmula poética ugarítica de Lotan (KTU 1.5)',
      explanation: 'Isaías 27:1 reproduz literalmente a fórmula cananeia de Ras Shamra: "Leviatã serpente veloz, Leviatã serpente tortuosa" corresponde exatamente a "Lōtānu baṯnu barīḥu, baṯnu ʿaqallatānu" no Ciclo ugarítico de Baal.'
    }
  },
  rel_proverbs_amenemope: {
    es: {
      title: 'Proverbios 22:17–24:22 adapta los Treinta Capítulos de Amenemope',
      explanation: 'Demostrado por Adolf Erman en 1923: la sección central de Proverbios adapta directamente la Instrucción egipcia de Amenemope (Papiro BM 10474), estructurada en treinta capítulos éticos sobre la templanza y la justicia.'
    },
    pt: {
      title: 'Provérbios 22:17–24:22 adapta os Trinta Capítulos de Amenemope',
      explanation: 'Comprovado por Adolf Erman em 1923: a seção central de Provérbios adapta diretamente a Instrução egípcia de Amenemope (Papiro BM 10474), estruturada em trinta provérbios éticos sobre a moderação e a justiça.'
    }
  },
  rel_melchizedek_psalm82: {
    es: {
      title: '11QMelquisedec reinterpreta el Salmo 82 como el Juicio del Jubileo Celeste',
      explanation: 'En el manuscrito de Qumrán 11Q13, Melquisedec es identificado como el "Elohim" celeste del Salmo 82 que juzga y condena a Belial y sus espíritus en la asamblea divina, prefigurando la cristología de Hebreos 7.'
    },
    pt: {
      title: '11QMelquisedeque reinterpreta o Salmo 82 como o Julgamento do Jubileu Celeste',
      explanation: 'No manuscrito de Qumran 11Q13, Melquisedeque é identificado como o "Elohim" celeste do Salmo 82 que julga e condena Belial e seus espíritos na assembleia divina, prefigurando a cristologia de Hebreus 7.'
    }
  },
  rel_messianic_4q521: {
    es: {
      title: '4Q521 y las señales del Mesías en Mateo 11 y Lucas 7',
      explanation: 'El rollo de Qumrán 4Q521 preserva la síntesis mesiánica única de resucitar a los muertos, sanar a los heridos y anunciar buenas nuevas a los humildes, citada literalmente por Jesús como respuesta a Juan el Bautista.'
    },
    pt: {
      title: '4Q521 e os sinais do Messias em Mateus 11 e Lucas 7',
      explanation: 'O manuscrito de Qumran 4Q521 preserva a síntese messiânica única de ressuscitar os mortos, curar os feridos e anunciar boas-novas aos humildes, citada literalmente por Jesus como resposta a João Batista.'
    }
  },
  rel_tartarus_2peter_hesiod: {
    es: {
      title: '2 Pedro 2:4 y el confinamiento en el Tártaro de Hesíodo',
      explanation: 'El término griego único tartarōsas en 2 Pedro 2:4 toma prestada la terminología teogónica de Hesíodo (donde los Titanes son arrojados al Tártaro tenebroso) para describir el encierro de los Vigilantes de 1 Enoc.'
    },
    pt: {
      title: '2 Pedro 2:4 e o confinamento no Tártaro de Hesíodo',
      explanation: 'O termo grego único tartarōsas em 2 Pedro 2:4 adota a terminologia teogônica de Hesíodo (onde os Titãs são precipitados no Tártaro tenebroso) para descrever o encarceramento dos Vigilantes de 1 Enoque.'
    }
  }
};

/**
 * Returns localized title and scholarly explanation for a relationship.
 */
export function getLocalizedRelationship(
  rel: Relationship | { id: string; title: string; scholarlyExplanation?: string; explanation?: string },
  lang: SupportedLanguage
): { title: string; explanation: string } {
  const custom = RELATIONSHIP_LOCALIZATIONS[rel.id];
  const originalExplanation = (rel as any).scholarlyExplanation || (rel as any).explanation || '';

  if (lang === 'es' && custom?.es) {
    return {
      title: custom.es.title,
      explanation: custom.es.explanation
    };
  }

  if (lang === 'pt' && custom?.pt) {
    return {
      title: custom.pt.title,
      explanation: custom.pt.explanation
    };
  }

  return {
    title: rel.title,
    explanation: originalExplanation
  };
}

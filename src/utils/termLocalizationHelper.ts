import { AncientTerm, SupportedLanguage } from '../types';

interface LocalizedTermContent {
  literalMeaning?: string;
  etymology?: string;
  scholarlyNotes?: string;
}

export const TERM_LOCALIZATIONS: Record<string, { es: LocalizedTermContent; pt: LocalizedTermContent }> = {
  nephilim: {
    es: {
      literalMeaning: 'Debatido: "Los caídos", "Los que hacen caer / acometen", o del arameo naphila ("gigante")',
      etymology: 'Tradicionalmente derivado del verbo hebreo נָפַל (nafal, "caer"), dando "los caídos" o causativo activo "los que derriban/asaltan". Alternativamente, los semitistas destacan el sustantivo arameo נְפִילָא (naphila, "gigante, constelación de Orión"), apoyando la traducción de la Septuaginta γίγαντες (gigantes).',
      scholarlyNotes: 'En Génesis 6:4, aparecen contemporáneos o resultantes de las uniones entre los "hijos de Dios" y las "hijas de los hombres". En Números 13:33, los espías israelitas informan haber visto a los Anaquim que "vienen de los Nefilim", infundiendo terror existencial. La Septuaginta y la tradición judía del Segundo Templo (1 Enoc) entendieron unánimemente el término como seres de fuerza y estatura sobrehumanas.'
    },
    pt: {
      literalMeaning: 'Debatido: "Os caídos", "Aqueles que fazem cair / assaltam", ou do aramaico naphila ("gigante")',
      etymology: 'Tradicionalmente derivado do verbo hebraico נָפַל (nafal, "cair"), gerando "os caídos" ou causativo ativo "os que derrubam/abatem". Alternativamente, semitistas apontam o substantivo aramaico נְפִילָא (naphila, "gigante, constelação de Órion"), sustentando a tradução da Septuaginta γίγαντες (gigantes).',
      scholarlyNotes: 'Em Gênesis 6:4, surgem contemporâneos ou resultantes das uniões entre os "filhos de Deus" e as "filhas dos homens". Em Números 13:33, os espias israelitas relatam ter visto os Anaquins que "descendem dos Nefilins", incutindo pavor. A Septuaginta e a tradição judaica do Segundo Templo (1 Enoque) compreenderam unanimemente o termo como seres de estatura e força sobre-humanas.'
    }
  },
  bene_haelohim: {
    es: {
      literalMeaning: 'Hijos de Dios / Hijos de los Poderes Divinos / Seres Celestes del Consejo',
      etymology: 'Forma constructa plural: בְּנֵי (hijos de) + הָאֱלֹהִים (los poderes divinos / Dios). En el modismo semítico, "hijo de X" denota con frecuencia pertenencia a una clase o categoría más que descendencia biológica.',
      scholarlyNotes: 'En la literatura semítica noroccidental (notablemente en la poesía mitológica ugarítica), la frase paralela "bn ʾil" (hijos de El) denota a las deidades menores reunidas bajo el dios supremo El. En la exégesis del Segundo Templo (1 Enoc, Jubileos, Filón, Josefo, Qumrán), son unánimemente entendidos como seres celestiales/angélicos.'
    },
    pt: {
      literalMeaning: 'Filhos de Deus / Filhos dos Poderes Divinos / Seres Celestiais do Conselho',
      etymology: 'Forma constructa plural: בְּנֵי (filhos de) + הָאֱלֹהִים (os poderes divinos / Deus). No idioma semítico, "filho de X" denota frequentemente pertença a uma classe ou ordem celestial.',
      scholarlyNotes: 'Na literatura semítica norte-ocidental (poesia ugarítica), a expressão paralela "bn ʾil" (filhos de El) designa os membros do panteão reunidos sob o deus supremo El. Na exegese do Segundo Templo (1 Enoque, Jubileus, Filo, Josefo, Qumran), são uniformemente compreendidos como seres angelicais.'
    }
  },
  gibborim: {
    es: {
      literalMeaning: 'Héroes, hombres poderosos, paladines de renombre antiguo',
      etymology: 'Formación nominal intensiva de la raíz ג-ב-ר (g-b-r, "prevalecer, ser fuerte, valiente"). Plural de גִּבּוֹר (gibbor).',
      scholarlyNotes: 'Génesis 6:4 los identifica como "los gibborim de la antigüedad, varones de renombre (anshei ha-shem)". Esta designación refleja el epíteto épico mesopotámico para campeones heroicos como Gilgamesh y la concepción clásica griega de los héroes semidivinos.'
    },
    pt: {
      literalMeaning: 'Valentes, heróis de guerra, campeões de renome antigo',
      etymology: 'Formação nominal intensiva da raiz ג-ב-ר (g-b-r, "prevalecer, ser forte, poderoso"). Plural de גִּבּוֹר (gibbor).',
      scholarlyNotes: 'Gênesis 6:4 identifica-os como "os valentes da antiguidade, os varões de renome (anshei ha-shem)". Este título espelha o epíteto épico mesopotâmico de campeões heroicos como Gilgamesh e a concepção grega de heróis semidivinos.'
    }
  },
  rephaim: {
    es: {
      literalMeaning: 'Debatido: "Sombras / espíritus del inframundo" o "Sanadores / reyes ancestrales aristocráticos"',
      etymology: 'Asociado con la raíz hebrea רָפָה (rafah, "debilitarse, hundirse") o con la raíz רָפָא (rafa, "sanar"). El descubrimiento de los rpum ugaríticos demostró que en el Canaán del Bronce Tardío eran reyes-guerreros ancestrales divinizados.',
      scholarlyNotes: 'La Biblia Hebrea conserva un fascinante doble uso: (1) gigantes aborígenes en Transjordania y Basán (asociados a Og), y (2) sombras de los difuntos en el Seol. Las tablillas ugaríticas resolvieron la paradoja al probar que eran ancestros reales convocados en banquetes conmemorativos (marzeah).'
    },
    pt: {
      literalMeaning: 'Debatido: "Sombras do submundo" ou "Curadores / ancestrais reais aristocráticos"',
      etymology: 'Associado à raiz hebraica רָפָה (rafah, "afundar, esmorecer") ou à raiz רָפָא (rafa, "curar"). A descoberta dos rpum ugaríticos revelou que em Canaã eram reis-guerreiros ancestrais divinizados.',
      scholarlyNotes: 'A Bíblia Hebraica preserva um duplo uso notável: (1) gigantes lendários em Basã (ligados a Ogue), e (2) espíritos dos mortos no Sheol. As tábuas ugaríticas demonstraram que eram os ancestrais dinásticos celebrados em banquetes fúnebres (marzeah).'
    }
  },
  rpum: {
    es: {
      literalMeaning: 'Los Sanadores / Ancestros Reales Divinizados / Élite Guerrera Auriga',
      etymology: 'Plural de la raíz r-p-ʾ. Vinculado en los textos de Ugarit al dios Rapiu-Baal / Rapiu-Melek, entronizado en Astarot y Edrei (¡idénticas ciudades de Og en Josué 12:4!).',
      scholarlyNotes: 'En la liturgia fúnebre ugarítica (KTU 1.161), se convoca a los rpum para bendecir la coronación del nuevo rey de Ugarit Ammurapi. Esta evidencia confirma el sustrato semítico noroccidental común de los Refaítas bíblicos.'
    },
    pt: {
      literalMeaning: 'Os Curadores / Ancestrais Reais Divinizados / Guilda de Carristas de Elite',
      etymology: 'Plural da raiz r-p-ʾ. Ligado nos textos ugaríticos ao deus Rapiu-Baal, entronizado em Astarote e Edrei (as mesmíssimas cidades bíblicas de Ogue em Josué 12:4!).',
      scholarlyNotes: 'Na liturgia fúnebre de Ugarit (KTU 1.161), os rpum são invocados para abençoar a ascensão do novo soberano. Isto confirma o substrato semítico norte-ocidental comum aos Refains bíblicos.'
    }
  },
  lotan_leviathan: {
    es: {
      literalMeaning: 'Leviatán / Lotán: La serpiente primordial tortuosa y de siete cabezas',
      etymology: 'En ugarítico Lōtānu (l-t-n), cognado exacto del hebreo Livyatan (לִוְיָתָן), de la raíz l-w-h ("enroscarse, enrollarse").',
      scholarlyNotes: 'En la tablilla ugarítica KTU 1.5 I:1–3, Baal derrota a "Lotán, la serpiente veloz, la serpiente tortuosa, el monstruo tirano de siete cabezas". Esta fórmula poética se reproduce casi palabra por palabra en Isaías 27:1 y Salmo 74:13–14.'
    },
    pt: {
      literalMeaning: 'Leviatã / Lotan: A serpente primordial tortuosa de sete cabeças',
      etymology: 'Em ugarítico Lōtānu (l-t-n), cognato exato do hebraico Livyatan (לִוְיָתָן), da raiz l-w-h ("enrolar-se, contorcer-se").',
      scholarlyNotes: 'Na tábua ugarítica KTU 1.5 I:1–3, Baal derrota "Lotan, a serpente veloz, a serpente tortuosa, o monstro de sete cabeças". Esta descrição poética é reproduzida quase literalmente em Isaías 27:1 e Salmo 74:13–14.'
    }
  },
  tiamat_tehom: {
    es: {
      literalMeaning: 'Tehom / Tiamat: El Abismo Acuático Primordial Caótico',
      etymology: 'El hebreo tĕhōm (תְּהוֹם) y el acadio Tiāmat son cognados semíticos directos procedentes de la raíz común *tihām- ("mar profundo, abismo oceánico").',
      scholarlyNotes: 'En el Enūma Eliš mesopotámico, Tiamat es la diosa dragón del agua salada personificada que encabeza el caos primordial contra Marduk. En Génesis 1:2, tehom aparece sin artículo definido, reteniendo rastros arcaicos del antiguo nombre del abismo cósmico acuático.'
    },
    pt: {
      literalMeaning: 'Tehom / Tiamat: O Abismo Oceânico Primordial do Caos',
      etymology: 'O hebraico tĕhōm (תְּהוֹם) e o acadiano Tiāmat são cognatos semíticos diretos originados na raiz comum *tihām- ("mar profundo, oceano primevo").',
      scholarlyNotes: 'No Enūma Eliš mesopotâmico, Tiamat é o mar salgado primordial personificado em combate cósmico com Marduk. Em Gênesis 1:2, tehom surge sem artigo definido, refletindo a memória arcaica do abismo cósmico aquático.'
    }
  },
  helel_ben_shahar: {
    es: {
      literalMeaning: '"El Resplandeciente, hijo de la Aurora" (Estrella de la Mañana / Venus)',
      etymology: 'Del hebreo הֵילֵל (helel, "brillante, lucero") + בֶּן־שָׁחַר (ben-shahar, "hijo del alba"). Traducido en la Vulgata latina de Jerónimo como Lucifer ("portador de luz").',
      scholarlyNotes: 'En Isaías 14:12–15, este oráculo contra el rey de Babilonia recurre al mito semítico cananeo de Athtar (la estrella matutina) que intenta ascender al monte Zaphon para ocupar el trono de Baal pero es precipitado al Seol.'
    },
    pt: {
      literalMeaning: '"O Resplandecente, filho da Alvorada" (Estrela da Manhã / Vênus)',
      etymology: 'Do hebraico הֵילֵל (helel, "brilhante, luzeiro") + בֶּן־שָׁחַר (ben-shahar, "filho da aurora"). Vertido na Vulgata latina como Lúcifer ("portador da luz").',
      scholarlyNotes: 'Em Isaías 14:12–15, a profecia contra o monarca da Babilônia fundamenta-se no mito cananeu de Athtar tentando usurpar o trono no Monte Zaphon, sendo precipitado nas profundezas do Sheol.'
    }
  },
  metatron: {
    es: {
      literalMeaning: 'Metatrón: "Príncipe de la Faz Divina" / El Enoc Transfigurado',
      etymology: 'Probablemente del griego metathronos ("aquel que comparte el trono") o del latín metator ("guía, mensajero de vanguardia").',
      scholarlyNotes: 'En la literatura mística judía de los Hekhalot (3 Enoc), el patriarca Enoc es arrebatado al cielo, transfigurado en una columna de fuego y transformado en el ángel supremo Metatrón, investido con el Nombre divino como "YHVH Menor".'
    },
    pt: {
      literalMeaning: 'Metatron: "Príncipe da Face Divina" / O Enoque Transfigurado',
      etymology: 'Provavelmente do grego metathronos ("aquele junto ao trono") ou do latim metator ("batedor, mensageiro guia").',
      scholarlyNotes: 'Na literatura mística dos Hekhalot (3 Enoque), Enoque é transladado aos céus, transfigurado em fogo cósmico e tornado o supremo anjo Metatron, nomeado o "Pequeno YHWH".'
    }
  },
  psychostasia: {
    es: {
      literalMeaning: 'Psicostasia: El Pesaje del Alma y las Obras Humanas en la Balanza del Juicio',
      etymology: 'Término griego compuesto de ψυχή (psychē, "alma") + στάσις (stasis, "pesaje, posición en balanza").',
      scholarlyNotes: 'Conocido originalmente en el Libro egipcio de los Muertos donde el corazón del difunto se pesa contra la pluma de Maat. La tradición apocalíptica judía (Testamento de Abraham 12–13) y cristiana lo adoptó con el arcángel Miguel pesando los pecados y virtudes.'
    },
    pt: {
      literalMeaning: 'Psicostasia: A Pesagem da Alma e Ações na Balança do Julgamento',
      etymology: 'Termo grego composto por ψυχή (psychē, "alma") + στάσις (stasis, "pesagem").',
      scholarlyNotes: 'Originado no Livro dos Mortos egípcio (pesagem do coração contra a pena de Maat). A literatura apocalíptica judaica (Testamento de Abraão 12–13) e cristã incorporou o motivo com o arcanjo Miguel.'
    }
  }
};

export function getLocalizedTerm(term: AncientTerm, lang: SupportedLanguage): AncientTerm {
  if (lang === 'en') return term;

  const loc = TERM_LOCALIZATIONS[term.id]?.[lang];
  if (!loc) return term;

  return {
    ...term,
    literalMeaning: loc.literalMeaning || term.literalMeaning,
    etymology: loc.etymology || term.etymology,
    scholarlyNotes: loc.scholarlyNotes || term.scholarlyNotes
  };
}

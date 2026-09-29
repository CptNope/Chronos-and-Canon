import { Passage, SupportedLanguage } from '../types';

export interface LocalizedPassageText {
  es: string;
  pt: string;
  esSource?: string;
  ptSource?: string;
}

export const PASSAGE_TRANSLATIONS: Record<string, LocalizedPassageText> = {
  // --- FLAGSHIP 1 & FEATURED: GENESIS 6 & 1 ENOCH ---
  gen_6_1_4: {
    es: `Aconteció que cuando comenzaron los hombres a multiplicarse sobre la faz de la tierra y les nacieron hijas, al ver los hijos de Dios que las hijas de los hombres eran hermosas, tomaron para sí mujeres, escogiendo entre todas... Había gigantes (Nefilim) en la tierra en aquellos días, y también después que se llegaron los hijos de Dios a las hijas de los hombres y les engendraron hijos. Estos fueron los valientes que desde la antigüedad fueron varones de renombre.`,
    pt: `Sucedeu que, quando os homens começaram a multiplicar-se sobre a face da terra e lhes nasceram filhas, viram os filhos de Deus que as filhas dos homens eram formosas; e tomaram para si mulheres de todas as que escolheram... Havia naqueles dias gigantes (Nefilins) na terra; e também depois, quando os filhos de Deus possuíram as filhas dos homens e estas lhes deram filhos; estes eram os valentes que houve na antiguidade, os varões de renome.`,
    esSource: 'Reina-Valera 1960 / Texto Masorético',
    ptSource: 'Almeida Revista e Atualizada / Texto Massorético'
  },
  '1_enoch_6_1_6': {
    es: `Y cuando los hijos de los hombres se multiplicaron, en aquellos días les nacieron hijas hermosas y agraciadas. Y los ángeles, los hijos del cielo, las vieron y las desearon, y se dijeron unos a otros: 'Venid, elijamos para nosotros esposas de entre las hijas de los hombres, y engendremos hijos.' Y Semihaza, que era su jefe, les dijo: 'Temo que no queráis cumplir esta acción y que sólo yo sufra la pena de un gran pecado.' Y todos le respondieron y dijeron: 'Juremos todos un juramento, y comprometámonos con mutuas imprecaciones a no abandonar este plan sino a ejecutar esta obra.' Entonces juraron todos juntos y se ataron bajo mutuas maldiciones. Y eran en total doscientos los que descendieron en los días de Jared sobre la cumbre del Monte Hermón; y llamaron al monte Hermón porque allí habían jurado y se habían atado bajo anatema mutuo.`,
    pt: `E aconteceu que, quando os filhos dos homens se multiplicaram, naqueles dias nasceram-lhes filhas formosas e belas. E os anjos, os filhos dos céus, as viram e as desejaram, e disseram uns aos outros: 'Vinde, escolhamos para nós esposas dentre as filhas dos homens e geremos filhos para nós.' E Samyaza, que era o seu líder, disse-lhes: 'Temo que não concordareis em fazer esta ação, e eu sozinho pagarei a penalidade de um grande pecado.' E todos lhe responderam: 'Juremos todos um juramento e liguemo-nos por mútuas imprecações para não renunciar a este desígnio, mas realizar esta obra.' Então todos juraram juntos e se comprometeram por mútuas maldições. E eram ao todo duzentos que desceram nos dias de Jared sobre o cume do Monte Hermom; e chamaram a montanha Hermom, porque haviam jurado e se comprometido por mútuas imprecações sobre ela.`,
    esSource: '1 Enoc / Apócrifos del Antiguo Testamento',
    ptSource: '1 Enoque / Livro dos Vigilantes'
  },
  '1_enoch_7_1_5': {
    es: `Y tomaron para sí mujeres, y cada uno escogió una para sí, y comenzaron a entrar a ellas y a contaminarse con ellas; y les enseñaron encantos y conjuros, y la división de raíces y hierbas. Y las mujeres concibieron y dieron a luz grandes gigantes, cuya estatura era inmensa. Éstos devoraron todas las adquisiciones de los hombres hasta que los hombres ya no pudieron sustentarlos; entonces los gigantes se volvieron contra ellos y devoraron a la humanidad.`,
    pt: `E eles tomaram para si esposas, e cada um escolheu para si uma mulher, e começaram a achegar-se a elas e a contaminar-se com elas; e ensinaram-lhes feitiços e encantamentos, e o corte de raízes e árvores medicinais. E as mulheres conceberam e geraram grandes gigantes, cuja estatura era imensa. Estes consumiram todos os bens dos homens, até que os homens já não podiam sustentá-los; então os gigantes voltaram-se contra os homens e devoraram a humanidade.`,
    esSource: '1 Enoc 7',
    ptSource: '1 Enoque 7'
  },
  '1_enoch_10_4_8': {
    es: `Y a Rafael dijo el Señor: 'Ata a Azazel de pies y manos, y échalo en las tinieblas; y abre el desierto que está en Dudael y arrójalo allí. Y pon sobre él piedras ásperas y agudas, y cúbrelo de tinieblas para que permanezca allí para siempre; y cubre su rostro para que no vea la luz. Y en el día del gran juicio será lanzado al fuego. Y sana la tierra que los ángeles han corrompido, y proclama la sanidad de la tierra...'`,
    pt: `E a Rafael disse o Senhor: 'Amarra Azazel de pés e mãos, e lança-o nas trevas; abre o deserto que está em Dudael e atira-o ali. Coloca sobre ele pedras ásperas e pontiagudas, e cobre-o de escuridão para que ali permaneça para sempre; e cobre o seu rosto para que não veja a luz. E no dia do grande julgamento ele será lançado no fogo. E cura a terra que os anjos corromperam, e proclama a cura da terra...'`,
    esSource: '1 Enoc 10:4–8 (Paralelo del chivo expiatorio de Levítico 16)',
    ptSource: '1 Enoque 10:4–8 (Paralelo do bode expiatório de Levítico 16)'
  },
  leviticus_16_8_10: {
    es: `Y echará suertes Aarón sobre los dos machos cabríos: una suerte por Yahveh, y otra suerte por Azazel. Y hará traer Aarón el macho cabrío sobre el cual cayere la suerte por Yahveh, y lo ofrecerá en expiación. Mas el macho cabrío sobre el cual cayere la suerte por Azazel, lo presentará vivo delante de Yahveh para hacer la reconciliación sobre él, para enviarlo a Azazel al desierto.`,
    pt: `E Arão lançará sortes sobre os dois bodes: uma sorte pelo Senhor, e outra sorte por Azazel. Então Arão fará chegar o bode sobre o qual cair a sorte pelo Senhor, e o oferecerá para expiação do pecado. Mas o bode sobre o qual cair a sorte para Azazel será posto vivo perante o Senhor, para fazer expiação com ele, a fim de enviá-lo a Azazel no deserto.`,
    esSource: 'Levítico 16:8–10 (El rito de Yom Kipur)',
    ptSource: 'Levítico 16:8–10 (O rito do Yom Kippur)'
  },

  // --- FEATURED 2: JUDE & 1 ENOCH ---
  '1_enoch_1_9': {
    es: `Y he aquí, Él viene con miríadas de sus santos para ejecutar juicio sobre todos, y para destruir a todos los impíos, y convencer a toda carne de todas las obras de su impiedad que han cometido impíamente, y de todas las palabras arrogantes que pecadores impíos han hablado contra Él.`,
    pt: `E eis que Ele vem com miríades de seus santos para executar juízo sobre todos, e para destruir todos os ímpios, e convencer toda a carne de todas as obras da sua impiedade que impiamente cometeram, e de todas as palavras duras que pecadores ímpios falaram contra Ele.`,
    esSource: '1 Enoc 1:9 (Texto Ge\'ez y Manuscrito Griego de Akhmim)',
    ptSource: '1 Enoque 1:9 (Texto Ge\'ez e Manuscrito Grego de Akhmim)'
  },
  jude_6_and_14_15: {
    es: `Y a los ángeles que no guardaron su dignidad, sino que abandonaron su propia morada, los ha guardado bajo oscuridad, en prisiones eternas, para el juicio del gran día... De éstos también profetizó Enoc, séptimo desde Adán, diciendo: 'He aquí, vino el Señor con sus santas decenas de millares, para hacer juicio contra todos, y dejar convictos a todos los impíos de todas sus obras impías que han hecho impíamente, y de todas las cosas duras que los pecadores impíos han hablado contra él.'`,
    pt: `E aos anjos que não guardaram o seu principado, mas deixaram a sua própria habitação, reservou na escuridão e em prisões eternas até ao juízo daquele grande dia... E destes profetizou também Enoque, o sétimo depois de Adão, dizendo: 'Eis que é vindo o Senhor com milhares de seus santos, para fazer juízo contra todos e condenar dentre eles todos os ímpios, por todas as suas obras de impiedade, que impiamente cometeram, e por todas as duras palavras que ímpios pecadores disseram contra ele.'`,
    esSource: 'Epístola de Judas versos 6, 14–15 (Nuevo Testamento)',
    ptSource: 'Epístola de Judas versículos 6, 14–15 (Novo Testamento)'
  },
  jude_14_15: {
    es: `De estos también profetizó Enoc, séptimo desde Adán, diciendo: 'He aquí, vino el Señor con sus santas decenas de millares, para hacer juicio contra todos, y dejar convictos a todos los impíos de todas sus obras impías que han hecho impíamente, y de todas las cosas duras que los pecadores impíos han hablado contra él.'`,
    pt: `E destes profetizou também Enoque, o sétimo depois de Adão, dizendo: 'Eis que é vindo o Senhor com milhares de seus santos, para fazer juízo contra todos e condenar dentre eles todos os ímpios, por todas as suas obras de impiedade, que impiamente cometeram, e por todas as duras palavras que ímpios pecadores disseram contra ele.'`,
    esSource: 'Epístola de Judas 14–15 (cita textual de 1 Enoc 1:9)',
    ptSource: 'Epístola de Judas 14–15 (citação textual de 1 Enoque 1:9)'
  },
  '2_peter_2_4_5': {
    es: `Porque si Dios no perdonó a los ángeles que pecaron, sino que arrojándolos al Tártaro (ταρταρώσας) los entregó a prisiones de oscuridad, para ser reservados al juicio; y si no perdonó al mundo antiguo, sino que guardó a Noé, pregonero de justicia, con otras siete personas, trayendo el diluvio sobre el mundo de los impíos...`,
    pt: `Porque, se Deus não perdoou aos anjos que pecaram, mas, lançando-os no Tártaro (tartarosas), os entregou às cadeias da escuridão, ficando reservados para o juízo; e não perdoou ao mundo antigo, mas guardou a Noé, pregoeiro da justiça, com mais sete pessoas, ao trazer o dilúvio sobre o mundo dos ímpios...`,
    esSource: '2 Pedro 2:4–5 (Uso de terminología clásica griega / Tártaro)',
    ptSource: '2 Pedro 2:4–5 (Uso de terminologia clássica grega / Tártaro)'
  },

  // --- FEATURED 3: GREAT FLOOD TRADITIONS ---
  gilgamesh_tablet_11_flood: {
    es: `Utnapishtim le dijo a Gilgamesh: 'Te revelaré, Gilgamesh, una materia secreta y te diré un secreto de los dioses. La ciudad de Shuruppak... los grandes dioses decidieron en su corazón desatar el Diluvio... ¡Hombre de Shuruppak, hijo de Ubar-Tutu! ¡Demuele la casa, construye un barco! ¡Abandona las posesiones, busca la vida! ¡Renuncia a los bienes y salva el alma! Haz subir a la nave la simiente de todas las criaturas vivientes.' ... Calafateé la barca con seis medidas de brea por dentro y tres por fuera... En el monte Nimush encalló la nave. Cuando llegó el séptimo día, saqué una paloma y la solté; la paloma se fue y regresó, pues no había descansadero... Saqué una golondrina... Por fin solté un cuervo; vio las aguas menguadas, comió, chapoteó y no regresó.`,
    pt: `Utnapishtim disse a Gilgamesh: 'Revelar-te-ei, Gilgamesh, um segredo dos deuses e dir-te-ei um mistério. A cidade de Shuruppak... os grandes deuses decidiram em seus corações enviar o Dilúvio... Homem de Shuruppak, filho de Ubar-Tutu! Demole a casa, constrói um barco! Renuncia às riquezas, busca a vida! Deixa os bens materiais e salva a alma! Faze subir para o barco a semente de todos os seres vivos.' ... Calafetei o barco com seis medidas de betume por dentro e três por fora... No monte Nimush repousou a embarcação. Ao chegar o sétimo dia, soltei uma pomba; ela foi e voltou, pois não havia lugar para pousar... Soltei uma andorinha... Finalmente soltei um corvo; ele viu a diminuição das águas, comeu, esvoaçou e não regressou.`,
    esSource: 'Epopeya de Gilgamesh (Tablilla XI, líneas 9–156)',
    ptSource: 'Epopeia de Gilgamesh (Tábua XI, linhas 9–156)'
  },
  gilgamesh_xi_deluge: {
    es: `Utnapishtim le dijo a Gilgamesh: 'Te revelaré, Gilgamesh, una materia secreta y te diré un secreto de los dioses. La ciudad de Shuruppak... los grandes dioses decidieron en su corazón desatar el Diluvio... ¡Hombre de Shuruppak, hijo de Ubar-Tutu! ¡Demuele la casa, construye un barco! ¡Abandona las posesiones, busca la vida! ¡Renuncia a los bienes y salva el alma! Haz subir a la nave la simiente de todas las criaturas vivientes.'`,
    pt: `Utnapishtim disse a Gilgamesh: 'Revelar-te-ei, Gilgamesh, um segredo dos deuses e dir-te-ei um mistério. A cidade de Shuruppak... os grandes deuses decidiram em seus corações enviar o Dilúvio... Homem de Shuruppak, filho de Ubar-Tutu! Demole a casa, constrói um barco! Renuncia às riquezas, busca a vida! Deixa os bens materiais e salva a alma! Faze subir para o barco a semente de todos os seres vivos.'`,
    esSource: 'Epopeya de Gilgamesh (Tablilla XI)',
    ptSource: 'Epopeia de Gilgamesh (Tábua XI)'
  },
  gilgamesh_tablet_11_ark: {
    es: `Veinte codos medirá de alto, y diez de ancho... Seis cubiertas construí en ella, dividiéndola en siete compartimentos; su interior lo dividí en nueve estancias. Clavé cuñas contra el agua en su interior. Vi tres sar de brea en el horno, y tres sar de asfalto vertí adentro.`,
    pt: `Vinte côvados medirá de altura e dez de largura... Construí seis conveses nela, dividindo-a em sete compartimentos; o seu interior dividi em nove salas. Cravei estacas contra a água em seu interior. Despejei três sar de betume na fornalha, e três sar de asfalto verti por dentro.`,
    esSource: 'Epopeya de Gilgamesh XI (Dimensiones y calafateo)',
    ptSource: 'Epopeia de Gilgamesh XI (Dimensões e calafetação)'
  },
  atrahasis_tablet_3_flood: {
    es: `Enki abrió su boca y habló a su siervo Atrahasis: '¡Pared de cañas, escucha! ¡Muro, presta atención! Derriba la casa, construye una barca; desprecia los bienes y salva la vida. El barco que construirás... que su techo sea cerrado como el Abismo Celestial, para que el sol no vea su interior. Estará techada por arriba y por abajo. Que sus aparejos sean muy fuertes, que el betume sea grueso para darle firmeza.' Atrahasis reunió a los ancianos... y la tempestad de Adad rugió en las nubes, arrancando los postes del cielo.`,
    pt: `Enki abriu a sua boca e falou ao seu servo Atrahasis: 'Parede de juncos, ouve! Muro, presta atenção! Demole a casa, constrói um barco; despreza as riquezas e salva a vida. O barco que irás construir... que o seu teto seja fechado como o Abismo Celestial, para que o sol não veja o seu interior. Seja ele coberto por cima e por baixo. Sejam os seus cabos fortes, que o betume seja espesso para lhe dar firmeza.' Atrahasis reuniu os anciãos... e a tempestade de Adad rugiu nas nuvens, arrancando os pilares do céu.`,
    esSource: 'Epopeya de Atrahasis (Tablilla III / Babilonia Antigua)',
    ptSource: 'Epopeia de Atrahasis (Tábua III / Babilônia Antiga)'
  },
  shatapatha_brahmana_flood: {
    es: `Por la mañana trajeron agua a Manu para lavarse. Mientras se lavaba, un pez vino a sus manos. Le habló diciendo: '¡Cuídame y te salvaré!' '¿De qué me salvarás?' 'Un diluvio arrasará con todas estas criaturas; de él te libraré.' Manu crio al pez. Éste dijo: 'En tal año vendrá el diluvio. Debes preparar un barco y acudir a mí; cuando las aguas suban, entra en el barco y te salvaré.' Cuando el diluvio subió, Manu entró en el barco. El pez nadó hacia él y Manu ató la cuerda del barco a su cuerno. Por este medio el pez lo condujo hacia la Montaña del Norte...`,
    pt: `De manhã trouxeram água a Manu para se lavar. Enquanto se lavava, um peixe veio às suas mãos e disse-lhe: 'Cuida de mim e eu te salvarei!' 'De que me salvarás?' 'Um dilúvio há de varrer todas as criaturas; dele eu te livrarei.' Manu cuidou do peixe. Ele disse: 'Em tal ano virá esse dilúvio. Deves construir um barco e recorrer a mim; quando as águas subirem, entra no barco e eu te salvarei.' Quando o dilúvio subiu, Manu entrou no barco. O peixe nadou até ele, e Manu amarrou a corda do barco ao seu chifre. Por este meio o peixe o conduziu à Montanha do Norte...`,
    esSource: 'Shatapatha Brahmana I.8.1 (Tradición Védica / Manu y Matsya)',
    ptSource: 'Shatapatha Brahmana I.8.1 (Tradição Védica / Manu e Matsya)'
  },
  popol_vuh_resin_flood: {
    es: `Entonces las aguas crecieron por voluntad del Corazón del Cielo; una gran inundación se formó, que cayó sobre las cabezas de los hombres de madera. De tz'ite fue hecha la carne del hombre, pero no pensaban, no hablaban con su Creador; por eso fueron aniquilados, una lluvia de resina espesa cayó del cielo... Los animales entraron a sus casas, las piedras de moler, las ollas y los comales se rebelaron contra ellos: '¡Dolor nos causasteis; nos quemasteis; ahora nosotros os morderemos!' Así fue la ruina de los hombres hechos de madera.`,
    pt: `Então as águas cresceram pela vontade do Coração do Céu; uma grande inundação desceu sobre as cabeças dos homens de madeira. De tz'ite foi feita a carne do homem, mas não pensavam, não falavam com o seu Criador; por isso foram aniquilados, uma chuva de resina espessa caiu do céu... Os animais entraram nas suas casas, as pedras de moer, as panelas e as vasilhas rebelaram-se contra eles: 'Dor nos causastes; nos queimastes; agora nós vos morderemos!' Assim foi a destruição dos homens feitos de madeira.`,
    esSource: 'Popol Vuh, Parte 1 (Tradición Maya K\'iche\')',
    ptSource: 'Popol Vuh, Parte 1 (Tradição Maia K\'iche\')'
  },
  popol_vuh_deluge: {
    es: `Una resina pesada cayó del cielo. Vino el pájaro Xecotcovach y les sacó los ojos; vino Camalotz y les cortó la cabeza; vino Cotzbalam y les devoró las carnes; vino Tucumbalam y les quebrantó los huesos y los tendones. Y esto fue para castigar a los hombres de madera porque no habían pensado en su Madre ni en su Padre, el Corazón del Cielo, llamado Huracán.`,
    pt: `Uma resina pesada caiu do céu. Veio o pássaro Xecotcovach e arrancou-lhes os olhos; veio Camalotz e cortou-lhes a cabeça; veio Cotzbalam e devorou-lhes a carne; veio Tucumbalam e quebrou-lhes os ossos e os tendões. E isso foi para punir os homens de madeira porque não tinham pensado na sua Mãe nem no seu Pai, o Coração do Céu, chamado Furacão.`,
    esSource: 'Popol Vuh (El juicio de los hombres de madera)',
    ptSource: 'Popol Vuh (O julgamento dos homens de madeira)'
  },

  // --- FEATURED 4: REPHAIM, ANAKIM & UGARITIC RPUM ---
  numbers_13_33: {
    es: `También vimos allí gigantes, hijos de Anac, raza de los gigantes (Nefilim): y éramos nosotros, a nuestro parecer, como langostas; y así les parecíamos a ellos.`,
    pt: `Também vimos ali gigantes, filhos de Enaque, descendentes dos gigantes (Nefilins); e éramos aos nossos olhos como gafanhotos, e assim também éramos aos olhos deles.`,
    esSource: 'Números 13:33 (Informe de los espías en Canaán)',
    ptSource: 'Números 13:33 (Relato dos espias em Canaã)'
  },
  deut_2_and_3: {
    es: `Por tierra de gigantes (Rephaim) fue también tenida ella; habitaron en ella gigantes en otro tiempo, a los cuales los amonitas llamaban zomzomeos; pueblo grande y numeroso, y alto, como los hijos de Anac... Porque únicamente Og rey de Basán había quedado del resto de los gigantes (Rephaim). Su cama, una cama de hierro, ¿no está en Rabá de los hijos de Amón? La longitud de ella era de nueve codos, y su anchura de cuatro codos, según el codo de un hombre.`,
    pt: `Por terra de gigantes (Refains) foi também tida esta; nela outrora habitavam gigantes, aos quais os amonitas chamavam zanzumins; povo grande, e numeroso, e alto, como os anaquins... Porque só Ogue, rei de Basã, restou do remanescente dos gigantes (Refains); eis que o seu leito, um leito de ferro, não está porventura em Rabá dos filhos de Amom? De nove côvados era o seu comprimento, e de quatro côvados a sua largura, pelo côvado de um homem.`,
    esSource: 'Deuteronomio 2:20–21; 3:11 (Los gigantes de Transjordania)',
    ptSource: 'Deuteronômio 2:20–21; 3:11 (Os gigantes da Transjordânia)'
  },
  joshua_12_4: {
    es: `Y el territorio de Og rey de Basán, que había quedado de los gigantes (Rephaim), el cual habitaba en Astarot y en Edrei, y dominaba en el monte Hermón, en Salca, en todo Basán hasta el límite de los gesureos y de los maacateos...`,
    pt: `Como também o termo de Ogue, rei de Basã, que era do remanescente dos gigantes (Refains), o qual habitava em Astarote e em Edrei, e dominava no monte Hermom, e em Salca, e em todo o Basã, até ao termo dos gesuritas e dos maacatitas...`,
    esSource: 'Josué 12:4–5 (Las sedes de Ashtaroth y Edrei)',
    ptSource: 'Josué 12:4–5 (As sedes de Astarote e Edrei)'
  },
  ugaritic_ktu_1_108: {
    es: `¡Que Rapiu, el Rey Eterno, beba vino! ¡Que beba el dios poderoso y noble, el dios que mora en Ashtaroth, el dios que reina en Edrei, a quien los himnos celebran con la lira y la flauta!... En medio de los Refaítas (rpum), en medio de los héroes del inframundo, habite tu fuerza y tu vigor.`,
    pt: `Que Rapiu, o Rei da Eternidade, beba vinho! Que beba o deus poderoso e nobre, o deus que habita em Astarote, o deus que reina em Edrei, a quem os cantores louvam com a lira e a flauta!... No meio dos Refains (rpum), no meio dos heróis do além-túmulo, more a tua força e o teu vigor.`,
    esSource: 'Tablilla Ugarítica KTU 1.108 / Ashtaroth y Edrei',
    ptSource: 'Tábua Ugarítica KTU 1.108 / Astarote e Edrei'
  },
  ugarit_rephaim_ktu_1_108: {
    es: `¡Que Rapiu, el Rey Eterno, beba vino! ¡Que beba el dios poderoso y noble, el dios que mora en Ashtaroth, el dios que reina en Edrei, a quien los himnos celebran con la lira y la flauta!... En medio de los Refaítas (rpum), en medio de los héroes subterráneos, habite tu fuerza y tu vigor.`,
    pt: `Que Rapiu, o Rei da Eternidade, beba vinho! Que beba o deus poderoso e nobre, o deus que habita em Astarote, o deus que reina em Edrei, a quem os cantores louvam com a lira e a flauta!... No meio dos Refains (rpum), no meio dos heróis do além-túmulo, more a tua força e o teu vigor.`,
    esSource: 'Tablilla Ugarítica KTU 1.108 / Ashtaroth y Edrei',
    ptSource: 'Tábua Ugarítica KTU 1.108 / Astarote e Edrei'
  },
  deut_3_11_og: {
    es: `Porque únicamente Og, rey de Basán, había quedado del resto de los gigantes (Refaítas). Su cama, una cama de hierro, ¿no está en Rabá de los hijos de Amón? Su longitud era de nueve codos, y su anchura de cuatro codos, según el codo de un hombre.`,
    pt: `Porque só Ogue, rei de Basã, restou dos gigantes (Refains); eis que o seu leito, um leito de ferro, não está porventura em Rabá dos filhos de Amom? De nove côvados era o seu comprimento, e de quatro côvados a sua largura, pelo côvado de um homem.`,
    esSource: 'Deuteronomio 3:11',
    ptSource: 'Deuteronômio 3:11'
  },

  // --- NORTHWEST SEMITIC & LEVANTINE COMPARISONS ---
  deut_32_8_9: {
    es: `Cuando el Altísimo (Elyón) repartió la herencia a las naciones, cuando dividió a los hijos del hombre, fijó los límites de los pueblos según el número de los hijos de Dios (bene Elohim). Porque la porción de Yahveh es su pueblo; Jacob es la heredad que le tocó.`,
    pt: `Quando o Altíssimo (Elyon) distribuiu as heranças às nações, quando dividiu os filhos de Adão, estabeleceu os termos dos povos segundo o número dos filhos de Deus (bene Elohim). Porque a porção do Senhor é o seu povo; Jacó é a parte da sua herança.`,
    esSource: 'Manuscritos del Mar Muerto (4QDeut^j) y Septuaginta',
    ptSource: 'Manuscritos do Mar Morto (4QDeut^j) e Septuaginta'
  },
  psalm_82_1_8: {
    es: `Dios está en la asamblea de El; en medio de los dioses juzga: '¿Hasta cuándo juzgaréis injustamente y aceptaréis las personas de los impíos? ... Yo dije: Vosotros sois dioses, y todos vosotros hijos del Altísimo (bene Elyón); pero como hombres moriréis, y como cualquiera de los príncipes caeréis.' ¡Levántate, oh Dios, juzga la tierra; porque tú heredarás todas las naciones!`,
    pt: `Deus está na assembleia divina (adat-El); no meio dos deuses ele julga: 'Até quando julgareis injustamente e tereis respeito às pessoas dos ímpios? ... Eu disse: Vós sois deuses, e todos vós filhos do Altíssimo (bene Elyon). Todavia, morrereis como homens, e caireis como qualquer dos príncipes.' Levanta-te, ó Deus, julga a terra, pois a ti pertencem todas as nações!`,
    esSource: 'Salmo 82 / Texto Masorético Hebreo',
    ptSource: 'Salmo 82 / Texto Massorético Hebraico'
  },
  baal_vs_mot: {
    es: `Ella apresó a Mot (la Muerte), el hijo de El; con una espada lo hendió; con un bieldo lo aventó; con fuego lo quemó; con muelas de molino lo molió; ¡en el campo lo sembró! Su carne la comieron las aves; sus miembros devoraron los pájaros... ¡Entonces los cielos llovieron aceite y los torrentes manaron miel! Y supe que el Poderoso Baal vivía, que el Príncipe, Señor de la Tierra, existía.`,
    pt: `Ela agarrou Mot (a Morte), o filho de El; com uma espada o fendeu; com uma peneira o joeirou; com fogo o queimou; com pedras de moinho o moeu; no campo o semeou! As aves comeram sua carne; os pássaros devoraram seus membros... Então os céus choveram azeite e os vales correram mel! E soube que o Poderoso Baal estava vivo, que o Príncipe, Senhor da Terra, existia.`,
    esSource: 'Ciclo de Baal (KTU 1.6 / Tablillas de Ugarit)',
    ptSource: 'Ciclo de Baal (KTU 1.6 / Tábuas de Ugarit)'
  },
  baal_cycle_lotan: {
    es: `Cuando heriste a Lotan, la serpiente escurridiza, destruiste a la serpiente tortuosa, el tirano de siete cabezas, los cielos se marchitaron y languidecieron como la faja de tu manto...`,
    pt: `Quando feriste Lotan, a serpente veloz, destruíste a serpente tortuosa, o tirano de sete cabeças, os céus murcharam e desfaleceram como a faixa do teu manto...`,
    esSource: 'Ciclo de Baal (KTU 1.5 I 1–3)',
    ptSource: 'Ciclo de Baal (KTU 1.5 I 1–3)'
  },
  isaiah_27_1: {
    es: `En aquel día Yahveh castigará con su espada dura, grande y fuerte al Leviatán, serpiente veloz, y al Leviatán, serpiente tortuosa; y matará al dragón que está en el mar.`,
    pt: `Naquele dia o Senhor castigará com a sua dura espada, grande e forte, o leviatã, a serpente veloz, e o leviatã, a serpente tortuosa, e matará o dragão que está no mar.`,
    esSource: 'Isaías 27:1 (Paralelo exacto con el texto ugarítico de Lotan)',
    ptSource: 'Isaías 27:1 (Paralelo exato com o texto ugarítico de Lotan)'
  },
  psalm_74_13_14: {
    es: `Tú dividiste el mar con tu poder; quebrantaste cabezas de monstruos en las aguas. Tú aplastaste las cabezas del Leviatán, y lo diste por comida a los habitantes del desierto.`,
    pt: `Tu dividiste o mar pela tua força; quebrantaste as cabeças das serpentes nas águas. Tu esmagaste as cabeças do leviatã, e o deste por mantimento aos habitantes do deserto.`,
    esSource: 'Salmo 74:13–14 (Chaoskampf bíblico)',
    ptSource: 'Salmo 74:13–14 (Chaoskampf bíblico)'
  },

  // --- MESOPOTAMIAN & CODE OF HAMMURABI ---
  code_of_hammurabi_lex: {
    es: `Si un ciudadano ha destruido el ojo de otro ciudadano, le destruirán su ojo. Si ha roto el hueso de un ciudadano, le romperán su hueso. Si ha arrancado el diente de un ciudadano de su mismo rango, le arrancarán su diente... Para que el fuerte no dañe al débil, para que el huérfano y la viuda tengan justicia, grabé mis preciosas palabras en mi estela ante mi estatua como rey de justicia, en presencia de Shamash, el gran juez del cielo y de la tierra.`,
    pt: `Se um homem livre destruir o olho de outro homem livre, o seu olho será destruído. Se quebrar o osso de um homem livre, o seu osso será quebrado. Se arrancar o dente de um homem livre de igual condição, o seu dente será arrancado... Para que o forte não oprima o fraco, para fazer justiça ao órfão e à viúva, gravei minhas preciosas palavras na minha estela perante a minha imagem como rei da justiça, na presença de Shamash, o grande juiz do céu e da terra.`,
    esSource: 'Código de Hammurabi (§§196–200)',
    ptSource: 'Código de Hamurabi (§§196–200)'
  },
  ishtar_netherworld_descent: {
    es: `Hacia la Tierra sin Retorno, el reino de Ereshkigal, Ishtar, hija de Sin, dirigió su pensamiento... hacia la casa tenebrosa, la morada de Irkalla; hacia la casa de la cual quien entra nunca sale; por el camino cuyo sendero no tiene vuelta atrás; hacia la casa donde los moradores están privados de luz, donde el polvo es su sustento y la arcilla su alimento, donde habitan en tinieblas vestidos como aves con alas de plumas, donde el polvo cubre la puerta y el cerrojo.`,
    pt: `Para a Terra Sem Retorno, o reino de Ereshkigal, Ishtar, filha de Sin, dirigiu a sua mente... para a casa da escuridão, a morada de Irkalla; para a casa de onde aquele que entra jamais sai; pelo caminho cuja vereda não tem volta; para a casa cujos habitantes são privados de luz, onde o pó é o seu sustento e a argila o seu alimento, onde habitam em trevas vestidos como pássaros com asas de penas, onde o pó cobre a porta e o ferrolho.`,
    esSource: 'El Descenso de Ishtar a los Infiernos / Nínive',
    ptSource: 'A Descida de Ishtar aos Infernos / Nínive'
  },
  enuma_elish_tablet_4: {
    es: `Marduk preparó el arco, ajustó la flecha a la cuerda; blandió la maza en su diestra. Frente a él colocó el relámpago; con fuego ardiente llenó su cuerpo. Hizo una red para envolver el vientre de Tiamat... Tiamat y Marduk, el más sabio de los dioses, avanzaron al combate; se trabaron en combate singular... El Señor extendió su red y la atrapó en ella; desató el Viento Maligno en su rostro. Cuando Tiamat abrió su boca para engullirlo, él hizo entrar el Viento Maligno para que no pudiera cerrar sus labios. Atravesó su corazón; la venció y segó su vida. Dividió su cuerpo como un pez seco en dos partes: con una mitad cubrió el cielo y fijó un cerrojo.`,
    pt: `Marduk preparou o arco, ajustou a flecha à corda; empunhou a clava na sua mão direita. À sua frente colocou o relâmpago; de chamas ardentes encheu o seu corpo. Fez uma rede para encerrar as entranhas de Tiamat... Tiamat e Marduk, o campeão dos deuses, avançaram para o confronto; travaram combate singular... O Senhor estendeu a sua rede e envolveu-a nela; soprou o Vento Maligno contra o seu rosto. Quando Tiamat abriu a boca para o devorar, ele fez entrar o Viento Maligno de modo que ela não pôde fechar os lábios. Varou-lhe o coração; abateu-a e tirou-lhe a vida. Dividiu o seu corpo como um peixe seco em duas metades: com uma metade cobriu o céu e estabeleceu uma tranca.`,
    esSource: 'Enûma Eliš (Tablilla IV / Cosmogonía Babilónica)',
    ptSource: 'Enûma Eliš (Tábua IV / Cosmogonia Babilônica)'
  },

  // --- SECOND TEMPLE, DEAD SEA SCROLLS & GNOSTIC ---
  jubilees_10_demons: {
    es: `Y en la tercera semana de este jubileo, los demonios inmundos comenzaron a extraviar a los hijos de Noé, y a cegarlos y destruirlos. Y oró Noé ante el Señor su Dios: 'Dios de los espíritus de toda carne... ¡no dejes que los espíritus malignos dominen sobre ellos!... ¡enciérralos en el lugar de condenación!' Pero Mastema, príncipe de los espíritus, vino y dijo: 'Señor Creador, deja que algunos de ellos permanezcan ante mí, para que ejecute el poder de mi voluntad sobre los hijos de los hombres...' Y Dios ordenó: 'Que la décima parte quede ante él, y que nueve partes desciendan al lugar de condenación.'`,
    pt: `E na terceira semana deste jubileu, os demônios impuros começaram a desviar os filhos dos filhos de Noé, e a cegá-los e destruí-los. E orou Noé diante do Senhor seu Deus: 'Deus dos espíritos de toda a carne... não permitas que os espíritos malignos dominem sobre eles!... fecha-os no lugar de condenação!' Mas Mastema, o príncipe dos espíritos, veio e disse: 'Senhor Criador, deixa alguns deles diante de mim, para que eu possa executar o poder da minha vontade sobre os filhos dos homens...' E Deus ordenou: 'Que a décima parte fique diante dele, e que as nove partes desçam ao lugar da condenação.'`,
    esSource: 'Libro de los Jubileos 10:1–11',
    ptSource: 'Livro dos Jubileus 10:1–11'
  },
  community_rule_two_spirits: {
    es: `Él creó al hombre para el gobierno del mundo y le asignó dos espíritus para que caminara en ellos hasta el tiempo de su visitación: son los espíritus de la Verdad y de la Injusticia. En la morada de la Luz están los orígenes de la Verdad, y de la fuente de las Tinieblas proceden los orígenes de la Injusticia. En mano del Príncipe de las Luces está el gobierno de todos los hijos de la justicia... pero en mano del Ángel de las Tinieblas está todo el dominio de los hijos de la iniquidad.`,
    pt: `Ele criou o homem para governar o mundo e colocou para ele dois espíritos para que andasse neles até a data da sua visitação: são os espíritos da Verdade e da Injustiça. Na morada da Luz estão as gerações da Verdade, e da fonte da Escuridão vêm as gerações da Injustiça. Na mão do Príncipe das Luzes está o governo de todos os filhos da justiça... mas na mão do Anjo das Trevas está todo o domínio dos filhos da iniquidade.`,
    esSource: 'Regla de la Comunidad (1QS III.17–25 / Qumrán)',
    ptSource: 'Regra da Comunidade (1QS III.17–25 / Qumran)'
  },
  book_of_giants_4q530: {
    es: `Entonces Ohya y Hahya, hijos de Shemihazah, tuvieron visiones en sueños. Vieron un jardín plantado con árboles y jardineros podándolos, dejando solo un árbol con tres ramas... Y Ohya dijo a Hahya su hermano: 'Un sueño he visto que me aterra: el Soberano del Cielo descendió a la tierra y tronos fueron erigidos, y el Santo se sentó a juzgar.' Y consultaron a Gilgamesh, su compañero gigante...`,
    pt: `Então Ohya e Hahya, filhos de Samyaza, tiveram visões em sonhos. Viram um jardim plantado com árvores e jardineiros a podá-las, deixando apenas uma árvore com três ramos... E Ohya disse a Hahya seu irmão: 'Um sonho vi que me aterroriza: o Soberano dos Céus desceu à terra e tronos foram erguidos, e o Santo sentou-se para julgar.' E consultaram Gilgamesh, o seu companheiro gigante...`,
    esSource: 'Libro de los Gigantes (4Q530 / Manuscritos del Mar Muerto)',
    ptSource: 'Livro dos Gigantes (4Q530 / Manuscritos do Mar Morto)'
  },
  '2_esdras_14_44_48': {
    es: `Y en cuarenta días fueron escritos noventa y cuatro libros. Y aconteció que cuando se cumplieron los cuarenta días, el Altísimo habló diciendo: 'Los primeros libros que has escrito, publícalos abiertamente, para que los dignos y los indignos puedan leerlos; mas los setenta últimos libros resérvalos para entregarlos a los sabios de entre tu pueblo, porque en ellos está la fuente del entendimiento, el manantial de la sabiduría y el río del conocimiento.'`,
    pt: `E em quarenta dias foram escritos noventa e quatro livros. E aconteceu que, quando os quarenta dias se completaram, o Altíssimo falou dizendo: 'Os primeiros livros que escreveste, publica-os abertamente, para que os dignos e os indignos possam lê-los; mas os setenta últimos livros guardarás para entregá-los aos sábios do teu povo, porque neles está a fonte do entendimento, o manancial da sabedoria e o rio do conhecimento.'`,
    esSource: '2 Esdras 14:44–48 (Vulgata Latina / 4 Esdras)',
    ptSource: '2 Esdras 14:44–48 (Vulgata Latina / 4 Esdras)'
  },
  apocryphon_of_john_passage: {
    es: `Y cuando el primer arconte (Yaldabaoth) vio que los seres humanos eran superiores a él en pensamiento, tomó consejo con sus autoridades (arcontes). Y envió a sus ángeles a las hijas de los hombres, para que las tomaran para sí y engendraran descendencia... Y sus ángeles tomaron mujeres y engendraron hijos de las tinieblas, gigantes que oprimieron a la humanidad; y crearon el espíritu falsificador (antímimon pneuma) que ciega el corazón humano a la Luz trascendente.`,
    pt: `E quando o primeiro arconte (Yaldabaoth) viu que os seres humanos eram superiores a ele em pensamento, aconselhou-se com as suas autoridades (arcontes). E enviou os seus anjos às filhas dos homens, para que as tomassem para si e gerassem descendência... E os seus anjos tomaram mulheres e geraram filhos das trevas, gigantes que oprimiram a humanidade; e criaram o espírito contrafeito (antimimon pneuma) que cega o coração humano para a Luz transcendente.`,
    esSource: 'Apócrifo de Juan (Nag Hammadi Códice II)',
    ptSource: 'Apócrifo de João (Nag Hammadi Códice II)'
  },

  // --- GRECO-ROMAN & CLASSICAL ---
  hesiod_five_ages: {
    es: `Primero, los dioses inmortales que habitan el Olimpo crearon una raza de oro de hombres mortales. Éstos vivían en tiempos de Crono, cuando reinaba en el cielo; y vivían como dioses con corazón libre de preocupaciones, lejos del trabajo y del dolor. La miserable vejez no pesaba sobre ellos... y morían como vencidos por el sueño. ... Más tarde, los que habitan el Olimpo hicieron una segunda generación, muy inferior, de plata, no semejante a la raza de oro ni en estatura ni en mente.`,
    pt: `Primeiro, os deuses imortais que habitam o Olimpo criaram uma raça de ouro de homens mortais. Estes viviam no tempo de Cronos, quando ele reinava no céu; e viviam como deuses com o coração livre de pesares, afastados do trabalho e do sofrimento. A miserável velhice não repousava sobre eles... e morriam como se fossem dominados pelo sono. ... Depois, os habitantes do Olimpo fizeram uma segunda geração, muito inferior, de prata, em nada semelhante à de ouro, nem no corpo nem no espírito.`,
    esSource: 'Hesíodo, Trabajos y Días (versos 109–130)',
    ptSource: 'Hesíodo, Os Trabalhos e os Dias (versos 109–130)'
  },
  ovid_four_ages: {
    es: `La primera edad fue de oro, que sin ley ni juez guardaba la fidelidad y la rectitud espontáneamente. No existía el castigo ni el miedo, ni se leían amenazas grabadas en bronce fijado... Después que Saturno fue precipitado al tenebroso Tártaro y el mundo estuvo bajo el imperio de Júpiter, sobrevino la edad de plata, inferior a la de oro pero superior a la del bronce leonado.`,
    pt: `A primeira idade foi de ouro, que sem lei nem juiz guardava a fidelidade e a justiça espontaneamente. Não havia punição nem temor, nem se liam ameaças gravadas em placas de bronze... Depois que Saturno foi lançado ao tenebroso Tártaro e o mundo passou a ser governado por Júpiter, veio a idade de prata, inferior à de ouro mas superior à de bronze.`,
    esSource: 'Ovidio, Metamorfosis I.89–124',
    ptSource: 'Ovídio, Metamorfoses I.89–124'
  },

  // --- EGYPTIAN, NORSE & VEDIC ---
  egyptian_weighing_heart: {
    es: `¡Oh corazón mío que recibí de mi madre! ¡Oh corazón de mis diversas edades! ¡No te levantes como testigo contra mí! ¡No me contradigas ante el tribunal de Osiris! ... He aquí que Tot habla a la Gran Enéada: '¡Oíd esta sentencia! El corazón de Osiris Ani ha sido pesado ciertamente, y su alma ha dado testimonio a su favor. Su balanza ha sido hallada justa en la Gran Balanza; no se ha descubierto pecado en él.'`,
    pt: `Ó coração que recebi da minha mãe! Ó coração das minhas diferentes idades! Não te levantes como testemunha contra mim! Não me contradigas diante do tribunal de Osíris! ... Eis que Tot fala à Grande Enéade: 'Ouvi esta sentença! O coração de Osíris Ani foi verdadeiramente pesado, e a sua alma testemunhou a seu favor. O seu prato foi achado justo na Grande Balança; nenhum pecado foi descoberto nele.'`,
    esSource: 'Papiro de Ani (Libro de los Muertos, Hechizo 125)',
    ptSource: 'Papiro de Ani (Livro dos Mortos, Capítulo 125)'
  },
  book_of_heavenly_cow: {
    es: `La majestad de Ra había envejecido; sus huesos eran de plata, su carne de oro y sus cabellos de auténtico lapislázuli. La humanidad conspiraba contra él en las montañas. Entonces Ra convocó a su Ojo divino, y descendió como Hathor-Sejmet para destruir a los hombres rebeldes... Pero Ra tuvo piedad y mandó preparar siete mil jarras de cerveza de cebada teñida con ocre rojo de Elefantina, inundando los campos como el Nilo. La diosa sanguinaria bebió, se embriagó y no reconoció a los hombres.`,
    pt: `A majestade de Rá havia envelhecido; os seus ossos eram de prata, a sua carne de ouro e os seus cabelos de autêntico lápis-lazúli. A humanidade conspirava contra ele nas colinas. Então Rá convocou o seu Olho divino, que desceu como Hathor-Sekhmet para destruir os homens rebeldes... Mas Rá compadeceu-se e mandou preparar sete mil jarros de cerveja de cevada misturada com ocre vermelho de Elefantina, inundando os campos como o Nilo. A deusa sanguinária bebeu, embriagou-se e já não reconheceu os homens.`,
    esSource: 'Libro de la Vaca Celestial (Tumba de Tutankamón y Seti I)',
    ptSource: 'Livro da Vaca Celestial (Tumba de Tutancâmon e Seti I)'
  },
  voluspa_ymir_creation: {
    es: `En eras remotas vivía Ymir; no había arena ni mar ni olas heladas. No existía la tierra ni el cielo en lo alto, solo el abismo insondable de Ginnungagap, y hierba en ninguna parte... Los hijos de Bor (Odín, Vili y Vé) levantaron las tierras y dieron forma a Midgard. Del cuerpo de Ymir fue creada la tierra, y de su sangre el mar; de sus huesos las montañas, y de su cráneo la bóveda celeste.`,
    pt: `Nos tempos remotos vivia Ymir; não havia areia, nem mar, nem ondas gélidas. Não existia a terra nem o céu no alto, apenas o abismo de Ginnungagap, e erva em parte alguma... Os filhos de Bor (Odin, Vili e Vé) ergueram as terras e moldaram Midgard. Da carne de Ymir foi criada a terra, e do seu sangue o mar; dos seus ossos as montanhas, e do seu crânio a abóbada do céu.`,
    esSource: 'Völuspá (Edda Poética Nórdica)',
    ptSource: 'Völuspá (Edda Poética Nórdica)'
  },
  voluspa_creation_ymir: {
    es: `Del cuerpo de Ymir la tierra fue hecha, y de su sudor el mar; las rocas de sus huesos, los árboles de su pelo, y del cráneo el cielo sobre nosotros. Y de sus cejas los dioses compasivos hicieron Midgard para los hijos de los hombres; y de su cerebro las nubes amargas fueron creadas.`,
    pt: `Do corpo de Ymir a terra foi moldada, e do seu suor o mar; as montanhas dos seus ossos, as árvores dos seus cabelos, e do seu crânio o céu sobre nós. E das suas sobrancelhas os deuses benevolentes fizeram Midgard para os filhos dos homens; e do seu cérebro as nuvens pesadas foram formadas.`,
    esSource: 'Völuspá 4 (Cosmogonía Nórdica)',
    ptSource: 'Völuspá 4 (Cosmogonia Nórdica)'
  },
  rigveda_10_129_nasadiya: {
    es: `Entonces no había inexistencia ni existencia; no existía el espacio brillante ni el firmamento más allá. ¿Qué cubría? ¿Dónde estaba? ¿Bajo la protección de quién? ¿Había agua insondable y profunda? La muerte no existía entonces, ni la inmortalidad; no había señal de la noche ni del día. Aquel Uno respiraba sin aire por su propio poder; aparte de Él, nada más existía... ¿Quién sabe verdaderamente? ¿Quién podrá proclamarlo aquí? ¿De dónde nació esta creación? Aquel que vigila desde el cielo más alto, sólo Él lo sabe, ¡o tal vez ni Él lo sabe!`,
    pt: `Então não havia o não-ser nem o ser; não existia o espaço luminoso nem o firmamento além. O que cobria tudo? Onde estava? Sob a proteção de quem? Havia água insondável e profunda? A morte não existia então, nem a imortalidade; não havia sinal da noite nem do dia. Aquele Uno respirava sem ar pelo seu próprio poder; além d'Ele, nada mais existia... Quem sabe verdadeiramente? Quem poderá declará-lo aqui? De onde nasceu esta criação? Aquele que vigia desde o mais alto céu, só Ele o sabe, ou talvez nem Ele o saiba!`,
    esSource: 'Rigveda X.129 (Himno de la Creación / Nāsadīya Sūkta)',
    ptSource: 'Rigveda X.129 (Hino da Criação / Nāsadīya Sūkta)'
  },
  rigveda_10_129: {
    es: `En el principio reinaba la oscuridad envuelta en oscuridad; todo esto era agua indistinta. Aquel germen que estaba cubierto por el vacío, surgió por el poder del calor ardiente (tapas)...`,
    pt: `No princípio reinava a escuridão envolta em trevas; tudo isto era água indiferenciada. Aquele gérmen que estava coberto pelo vazio, surgiu pelo poder do calor ardente (tapas)...`,
    esSource: 'Rigveda X.129.3',
    ptSource: 'Rigveda X.129.3'
  },
  daniel_7_13_14: {
    es: `Miraba yo en la visión de la noche, y he aquí con las nubes del cielo venía uno como un hijo de hombre, que vino hasta el Anciano de días, y le hicieron acercarse delante de él. Y le fue dado dominio, gloria y reino, para que todos los pueblos, naciones y lenguas le sirvieran; su dominio es dominio eterno, que nunca pasará, y su reino uno que no será destruido.`,
    pt: `Eu estava olhando nas minhas visões da noite, e eis que vinha com as nuvens do céu um como o filho do homem; e dirigiu-se ao Ancião de dias, e o fizeram chegar até ele. E foi-lhe dado o domínio, e a honra, e o reino, para que todos os povos, nações e línguas o servissem; o seu domínio é um domínio eterno, que não passará, e o seu reino tal, que não será destruído.`,
    esSource: 'Daniel 7:13–14 (El Hijo del Hombre ante el Anciano de Días)',
    ptSource: 'Daniel 7:13–14 (O Filho do Homem diante do Ancião de Dias)'
  },
  revelation_12_7_9: {
    es: `Después hubo una gran batalla en el cielo: Miguel y sus ángeles luchaban contra el dragón; y luchaban el dragón y sus ángeles; pero no prevalecieron, ni se halló ya lugar para ellos en el cielo. Y fue lanzado fuera el gran dragón, la serpiente antigua, que se llama diablo y Satanás, el cual engaña al mundo entero; fue arrojado a la tierra, y sus ángeles fueron arrojados con él.`,
    pt: `E houve batalha no céu: Miguel e os seus anjos batalhavam contra o dragão; e batalhavam o dragão e os seus anjos; mas não prevaleceram, nem mais o seu lugar se achou nos céus. E foi precipitado o grande dragão, a antiga serpente, chamada o Diabo, e Satanás, que engana todo o mundo; ele foi precipitado na terra, e os seus anjos foram lançados com ele.`,
    esSource: 'Apocalipsis 12:7–9 (Guerra en el Cielo)',
    ptSource: 'Apocalipse 12:7–9 (Guerra nos Céus)'
  }
};

/**
 * Returns localized text for a passage depending on requested language.
 * Falls back to English if requested language is not available for that specific passage.
 */
export function getPassageText(passage: Passage, lang: SupportedLanguage): {
  text: string;
  sourceAttribution: string;
  languageName: string;
  isLocalized: boolean;
} {
  const custom = PASSAGE_TRANSLATIONS[passage.id];

  if (lang === 'es') {
    if (passage.spanishTranslation) {
      return {
        text: passage.spanishTranslation,
        sourceAttribution: 'Traducción Española Académica',
        languageName: 'Español',
        isLocalized: true
      };
    }
    if (custom?.es) {
      return {
        text: custom.es,
        sourceAttribution: custom.esSource || 'Traducción Académica al Español',
        languageName: 'Español',
        isLocalized: true
      };
    }
  }

  if (lang === 'pt') {
    if (passage.portugueseTranslation) {
      return {
        text: passage.portugueseTranslation,
        sourceAttribution: 'Tradução Portuguesa Acadêmica',
        languageName: 'Português',
        isLocalized: true
      };
    }
    if (custom?.pt) {
      return {
        text: custom.pt,
        sourceAttribution: custom.ptSource || 'Tradução Acadêmica para o Português',
        languageName: 'Português',
        isLocalized: true
      };
    }
  }

  return {
    text: passage.englishTranslation,
    sourceAttribution: `${passage.translationAttribution.translator} (${passage.translationAttribution.year})`,
    languageName: 'English',
    isLocalized: false
  };
}

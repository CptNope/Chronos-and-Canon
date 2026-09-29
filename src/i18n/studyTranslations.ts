import { SupportedLanguage } from '../types';

export interface StudyTranslations {
  gen6: {
    heroTag: string;
    heroTitle: string;
    heroSubtitle: string;
    tab1: string;
    tab2: string;
    tab3: string;
    tab4: string;
    crucesTitle: string;
    crucesSubtitle: string;
    clickTerm: string;
    compareBtn: string;
    enochTitle: string;
    enochSubtitle: string;
    rephaimTitle: string;
    rephaimSubtitle: string;
    crossCulturalTitle: string;
    crossCulturalSubtitle: string;
  };
  flood: {
    heroTag: string;
    heroTitle: string;
    heroSubtitle: string;
    colTradition: string;
    colWork: string;
    colHero: string;
    colVessel: string;
    colMountain: string;
    colBirds: string;
    colMotive: string;
    colRelation: string;
    compareBtn: string;
  };
  seventy: {
    heroTag: string;
    heroTitle: string;
    heroSubtitle: string;
    criteriaHeading: string;
    candidatesHeading: string;
    passagesHeading: string;
  };
}

export const studyTranslations: Record<SupportedLanguage, StudyTranslations> = {
  en: {
    gen6: {
      heroTag: 'Flagship Interactive Case Study',
      heroTitle: 'Genesis 6:1–4, The Watchers & The Giant Traditions',
      heroSubtitle: 'Explore the genesis of the "Sons of God" (bene ha-elohim), Nephilim, and "gibborim of renown", tracing their direct textual transmission into 1 Enoch, the Dead Sea Scrolls, and the New Testament, along with authentic West Semitic Rephaim archaeology and disciplined cross-cultural comparative paradigms.',
      tab1: '1. Genesis 6 Core Anatomy',
      tab2: '2. Enochic Expansion & NT Reception',
      tab3: '3. Rephaim, Anakim & Ugaritic rpum',
      tab4: '4. Cross-Cultural Comparative Rigor',
      crucesTitle: 'The Four Cruces of Genesis 6:1–4',
      crucesSubtitle: 'Genesis 6:1–4 is one of the most enigmatic fragments in biblical literature. Every phrase carries profound theological and linguistic baggage:',
      clickTerm: 'Click Term',
      compareBtn: 'Compare in Viewer',
      enochTitle: '1 Enoch: The Book of the Watchers (Ch. 6–16)',
      enochSubtitle: 'How the Second Temple apocalyptic community expanded the 4 cryptic verses of Genesis 6 into a comprehensive theological etiology of cosmic evil:',
      rephaimTitle: 'From Genesis to Canaan: Rephaim, Anakim & Ugarit',
      rephaimSubtitle: 'Tracing the biblical memory of giant clans into Late Bronze Age Ugaritic royal ancestor cults (KTU 1.108):',
      crossCulturalTitle: 'Greek Titanomachy & Cross-Cultural Archetypes',
      crossCulturalSubtitle: 'Distinguishing genuine Northwest Semitic textual dependence from pan-Mediterranean mythic parallels (Hesiod\'s Theogony):'
    },
    flood: {
      heroTag: 'Cross-Cultural Deluge Matrix',
      heroTitle: 'Comparative Deluge Traditions of the Ancient World',
      heroSubtitle: 'Direct structural, dimensional, and theological comparison between the Genesis Deluge, Mesopotamian cuneiform tablets (Gilgamesh XI, Atrahasis III), Vedic Indian literature, and Mesoamerican Maya Popol Vuh.',
      colTradition: 'Tradition / Culture',
      colWork: 'Ancient Work',
      colHero: 'Deluge Hero',
      colVessel: 'Ark / Vessel Design',
      colMountain: 'Mountain Grounding',
      colBirds: 'Bird Release Tests',
      colMotive: 'Divine Motive for Cataclysm',
      colRelation: 'Evidentiary Link to Genesis',
      compareBtn: 'Compare in Alignment Viewer'
    },
    seventy: {
      heroTag: 'Esoteric Second Temple Library',
      heroTitle: 'The 70 Secret Books Revealed to Ezra (2 Esdras 14)',
      heroSubtitle: 'According to 2 Esdras 14:44–48, Ezra dictated 94 books under divine inspiration: 24 for the public canon, and 70 reserved exclusively for the wise among the people. Explore the candidate pseudepigrapha and apocalyptic works preserved at Qumran and in ancient Christian codices.',
      criteriaHeading: 'Four-Fold Criteria for Candidate Identification',
      candidatesHeading: 'Candidate Works from the Second Temple Apocalyptic Corpus',
      passagesHeading: 'Key Preserved Passages of the 70 Books'
    }
  },

  es: {
    gen6: {
      heroTag: 'Estudio de Caso Interactivo Insignia',
      heroTitle: 'Génesis 6:1–4, Los Vigilantes y las Tradiciones de Gigantes',
      heroSubtitle: 'Explore el origen de los "Hijos de Dios" (bene ha-elohim), los Nefilim y los "gibborim de renombre", rastreando su transmisión textual directa a 1 Enoc, los Manuscritos del Mar Muerto y el Nuevo Testamento, junto con la arqueología de los Refaítas y los paradigmas comparativos interculturales.',
      tab1: '1. Anatomía Central de Génesis 6',
      tab2: '2. Expansión Enóquica y Recepción en el NT',
      tab3: '3. Refaítas, Anaquim y los rpum Ugaríticos',
      tab4: '4. Rigor Comparativo Intercultural',
      crucesTitle: 'Los Cuatro Puntos Críticos de Génesis 6:1–4',
      crucesSubtitle: 'Génesis 6:1–4 es uno de los fragmentos más enigmáticos de la literatura bíblica. Cada frase conlleva un profundo trasfondo teológico y lingüístico:',
      clickTerm: 'Ver Término',
      compareBtn: 'Comparar en el Visor',
      enochTitle: '1 Enoc: El Libro de los Vigilantes (Cap. 6–16)',
      enochSubtitle: 'Cómo la comunidad apocalíptica del Segundo Templo amplió los 4 versículos crípticos de Génesis 6 en una etiología teológica integral del mal cósmico:',
      rephaimTitle: 'De Génesis a Canaán: Refaítas, Anaquim y Ugarit',
      rephaimSubtitle: 'Rastreando la memoria bíblica de los clanes de gigantes hasta los cultos a los ancestros reales ugaríticos del Bronce Tardío (KTU 1.108):',
      crossCulturalTitle: 'La Titanomaquia Griega y Arquetipos Interculturales',
      crossCulturalSubtitle: 'Distinguiendo la dependencia textual semítica noroccidental genuina de los paralelos míticos panmediterráneos (Teogonía de Hesíodo):'
    },
    flood: {
      heroTag: 'Matriz Intercultural del Diluvio',
      heroTitle: 'Tradiciones Comparadas del Diluvio en el Mundo Antiguo',
      heroSubtitle: 'Comparación estructural, dimensional y teológica directa entre el Diluvio del Génesis, las tablillas cuneiformes mesopotámicas (Gilgamesh XI, Atrahasis III), la literatura védica de la India y el Popol Vuh maya de Mesoamérica.',
      colTradition: 'Tradición / Cultura',
      colWork: 'Obra Antigua',
      colHero: 'Héroe del Diluvio',
      colVessel: 'Diseño del Arca / Embarcación',
      colMountain: 'Reposo en la Montaña',
      colBirds: 'Pruebas de Liberación de Aves',
      colMotive: 'Motivo Divino del Cataclismo',
      colRelation: 'Vínculo Probatorio con Génesis',
      compareBtn: 'Comparar en el Visor de Alineación'
    },
    seventy: {
      heroTag: 'Biblioteca Esotérica del Segundo Templo',
      heroTitle: 'Los 70 Libros Secretos Revelados a Esdras (2 Esdras 14)',
      heroSubtitle: 'Según 2 Esdras 14:44–48, Esdras dictó 94 libros bajo inspiración divina: 24 para el canon público y 70 reservados exclusivamente para los sabios del pueblo. Explore los candidatos pseudoepigráficos y las obras apocalípticas conservadas en Qumrán y en antiguos códices cristianos.',
      criteriaHeading: 'Criterios Cuádruples para la Identificación de Candidatos',
      candidatesHeading: 'Obras Candidatas del Corpus Apocalíptico del Segundo Templo',
      passagesHeading: 'Pasajes Clave Conservados de los 70 Libros'
    }
  },

  pt: {
    gen6: {
      heroTag: 'Estudo de Caso Interativo Fundamental',
      heroTitle: 'Gênesis 6:1–4, Os Vigilantes e as Tradições de Gigantes',
      heroSubtitle: 'Explore a origem dos "Filhos de Deus" (bene ha-elohim), Nefilins e "gibborim de renome", rastreando sua transmissão textual direta para 1 Enoque, Manuscritos do Mar Morto e Novo Testamento, junto à arqueologia dos Refains e paradigmas comparativos transculturais.',
      tab1: '1. Anatomia Central de Gênesis 6',
      tab2: '2. Expansão Enoquiana e Recepção no NT',
      tab3: '3. Refains, Anaquins e os rpum Ugaríticos',
      tab4: '4. Rigor Comparativo Transcultural',
      crucesTitle: 'Os Quatro Pontos Críticos de Gênesis 6:1–4',
      crucesSubtitle: 'Gênesis 6:1–4 é um dos fragmentos mais enigmáticos da literatura bíblica. Cada frase carrega um profundo significado teológico e linguístico:',
      clickTerm: 'Ver Termo',
      compareBtn: 'Comparar no Visualizador',
      enochTitle: '1 Enoque: O Livro dos Vigilantes (Cap. 6–16)',
      enochSubtitle: 'Como a comunidade apocalíptica do Segundo Templo expandiu os 4 versículos enigmáticos de Gênesis 6 em uma etiologia teológica completa do mal cósmico:',
      rephaimTitle: 'De Gênesis a Canaã: Refains, Anaquins e Ugarit',
      rephaimSubtitle: 'Rastreando a memória bíblica dos clãs de gigantes até os cultos aos ancestrais reais ugaríticos da Idade do Bronze Recente (KTU 1.108):',
      crossCulturalTitle: 'A Titanomaquia Grega e Arquétipos Transculturais',
      crossCulturalSubtitle: 'Distinguindo a dependência textual semítica norte-ocidental genuína dos paralelos míticos pan-mediterrâneos (Teogonia de Hesíodo):'
    },
    flood: {
      heroTag: 'Matriz Transcultural do Dilúvio',
      heroTitle: 'Tradições Comparadas do Dilúvio no Mundo Antigo',
      heroSubtitle: 'Comparação estrutural, dimensional e teológica direta entre o Dilúvio do Gênesis, as tábuas cuneiformes mesopotâmicas (Gilgamesh XI, Atrahasis III), a literatura védica da Índia e o Popol Vuh maia da Mesoamérica.',
      colTradition: 'Tradição / Cultura',
      colWork: 'Obra Antiga',
      colHero: 'Herói do Dilúvio',
      colVessel: 'Design da Arca / Embarcação',
      colMountain: 'Repouso na Montanha',
      colBirds: 'Provas de Soltura de Aves',
      colMotive: 'Motivo Divino do Cataclismo',
      colRelation: 'Vínculo Probatório com Gênesis',
      compareBtn: 'Comparar no Visualizador de Alinhamento'
    },
    seventy: {
      heroTag: 'Biblioteca Esotérica do Segundo Templo',
      heroTitle: 'Os 70 Livros Secretos Revelados a Esdras (2 Esdras 14)',
      heroSubtitle: 'De acordo com 2 Esdras 14:44–48, Esdras ditou 94 livros sob inspiração divina: 24 para o cânone público e 70 reservados exclusivamente para os sábios entre o povo. Explore as obras pseudoepígrafas candidatas e os textos apocalípticos preservados em Qumran e em antigos códices cristãos.',
      criteriaHeading: 'Critérios Quádruplos para Identificação de Candidatos',
      candidatesHeading: 'Obras Candidatas do Corpus Apocalíptico do Segundo Templo',
      passagesHeading: 'Principais Passagens Preservadas dos 70 Livros'
    }
  }
};

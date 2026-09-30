export interface VersionRelease {
  version: string;
  date: string;
  codename: string;
  isLatest?: boolean;
  highlights: {
    en: string[];
    es: string[];
    pt: string[];
  };
}

export const APP_VERSION = '1.3.0';
export const BUILD_DATE = '2026-09-30';
export const APP_CODENAME = 'Ugarit & Eridu Edition';

export const VERSION_HISTORY: VersionRelease[] = [
  {
    version: '1.3.0',
    date: '2026-09-30',
    codename: 'Ugarit & Eridu Edition',
    isLatest: true,
    highlights: {
      en: [
        'Adaptive, uncrowded desktop navigation banner with responsive tab labeling across English, Spanish, and Portuguese.',
        'Balanced 2-column editorial Hero Banner for wide screens with curated research dimension chips and fluid typography.',
        'Full application-wide UI localization covering Digital Library, Map, Graph, Timeline, and Seventy Books views.',
        'Strict preservation of ancient sacred scripts (Biblical Hebrew, Aramaic, Greek, Ethiopic, Akkadian) intact.',
        'Bespoke Research Rigor popover in top navigation toolbelt replacing bulky native select controls.',
        'Expanded architectural README documentation with official GitHub Pages live deployment link.'
      ],
      es: [
        'Banner de navegación de escritorio adaptable y espacioso con etiquetas responsivas en inglés, español y portugués.',
        'Banner Hero editorial equilibrado en 2 columnas para pantallas anchas con tarjetas de investigación y tipografía fluida.',
        'Localización completa de la interfaz en Biblioteca Digital, Mapa, Grafo, Línea de Tiempo y Setenta Libros.',
        'Preservación rigurosa de escrituras sagradas antiguas (hebreo, arameo, griego, etíope, acadio) auténticas e intactas.',
        'Menú desplegable estilizado de Rigor de Investigación en la barra superior reemplazando controles nativos.',
        'Documentación README arquitectónica ampliada con enlace directo al despliegue oficial de GitHub Pages.'
      ],
      pt: [
        'Banner de navegação desktop adaptável e espaçoso com rótulos responsivos em inglês, espanhol e português.',
        'Banner Hero editorial equilibrado em 2 colunas para telas amplas com cartões de pesquisa e tipografia fluida.',
        'Localização completa da interface na Biblioteca Digital, Mapa, Grafo, Linha do Tempo e Setenta Livros.',
        'Preservação rigorosa de escrituras sagradas antigas (hebraico, aramaico, grego, etíope, acadiano) autênticas e intactas.',
        'Menu popover personalizado de Rigor de Pesquisa na barra superior substituindo seletores nativos.',
        'Documentação README arquitetônica expandida com link direto para a implantação oficial no GitHub Pages.'
      ]
    }
  },
  {
    version: '1.2.0',
    date: '2026-09-29',
    codename: 'Qumran & Uruk Edition',
    highlights: {
      en: [
        'Client-Side PWA Version Control & Update Controller with automatic and on-demand update detection.',
        'Expanded Documentation & Production Deployment architecture with detailed flowcharts and troubleshooting.',
        'Complete Multilingual Localization across English, Spanish, and Portuguese for all core study views.',
        'Enhanced Offline Service Worker precaching with network-first fallback and cache resetting utilities.',
        'Harmonized Comparative Passages in Genesis 6 and Flood modules with full scholarly source citations.'
      ],
      es: [
        'Controlador de Versiones y Actualizaciones PWA del cliente con detección automática y bajo demanda.',
        'Documentación ampliada y arquitectura de despliegue en producción con diagramas de flujo y resolución de problemas.',
        'Localización multilingüe completa en inglés, español y portugués para todas las vistas de estudio.',
        'Prealmacenamiento en caché mejorado mediante Service Worker para funcionamiento sin conexión con reinicio seguro.',
        'Pasajes comparativos armonizados en Génesis 6 y el Diluvio con citas académicas primarias.'
      ],
      pt: [
        'Controlador de Versões e Atualizações PWA do cliente com detecção automática e sob demanda.',
        'Documentação ampliada e arquitetura de implantação em produção com fluxogramas detalhados e diagnósticos.',
        'Localização multilíngue completa em inglês, espanhol e português para todos os módulos de estudo.',
        'Pré-cache aprimorado de Service Worker off-line com fallback de rede e redefinição de cache.',
        'Passagens comparativas harmonizadas em Gênesis 6 e Dilúvio com citações acadêmicas completas.'
      ]
    }
  },
  {
    version: '1.1.0',
    date: '2026-09-28',
    codename: 'Elephantine & Nineveh Edition',
    highlights: {
      en: [
        'Comprehensive 31-Relationship Scholarly Dossier across Hebrew, Ugaritic, Akkadian, Greek, and Latin corpuses.',
        'Interactive Synoptic Parallel Viewer with verse-by-verse alignment and Greek/Hebrew text critical apparatus.',
        'Archaeological Cartography module with real-world geo-coordinates and historical excavation metadata.',
        '70 Books Ethiopian Orthodox Biblical Canon and Apocrypha classification engine.',
        'Ancient terminology lexical popovers for Nephilim, Gibborim, Apkallu, Elohim, and Tehom.'
      ],
      es: [
        'Dossier académico de 31 relaciones textuales entre corpus hebreos, ugaríticos, acadios, griegos y latinos.',
        'Visor sinóptico interactivo con alineación versículo a versículo y aparato crítico griego/hebreo.',
        'Módulo de cartografía arqueológica con coordenadas geográficas reales y metadatos de excavaciones.',
        'Motor de clasificación del canon bíblico etíope de 70 libros y literatura apócrifa.',
        'Glosarios léxicos emergentes para Nefilim, Gibborim, Apkallu, Elohim y Tehom.'
      ],
      pt: [
        'Dossiê acadêmico de 31 relações textuais entre corpus hebraicos, ugaríticos, acádios, gregos e latinos.',
        'Visualizador sinóptico interativo com alinhamento versículo por versículo e aparato crítico.',
        'Módulo de cartografia arqueológica com coordenadas geográficas reais e metadados de escavações.',
        'Mecanismo de classificação do cânone bíblico etíope de 70 livros e apócrifos.',
        'Glossários lexicais de termos antigos para Nefilim, Gibborim, Apkallu, Elohim e Tehom.'
      ]
    }
  },
  {
    version: '1.0.0',
    date: '2026-09-20',
    codename: 'Genesis & Gilgamesh Genesis',
    highlights: {
      en: [
        'Initial release of Chronos & Canon Comparative Textual Archive.',
        'Tripartite Stratification: Primary Witness tablets, Secondary Literary Masoretic/LXX codices, and Modern Critical editions.',
        'Offline-capable Progressive Web App architecture with Web App Manifest.',
        'Corpus-grounded Research Assistant powered by Gemini API.',
        'Digital Library linking out to Dead Sea Scrolls (Leon Levy), Perseus, Sefaria, and British Museum.'
      ],
      es: [
        'Lanzamiento inicial del Archivo Textual Comparativo Chronos & Canon.',
        'Estratificación tripartita: Testigos primarios, transmisión secundaria y ediciones críticas.',
        'Arquitectura de Aplicación Web Progresiva (PWA) con soporte fuera de línea.',
        'Asistente de investigación fundamentado en el corpus.',
        'Biblioteca digital con enlaces a manuscritos del Mar Muerto, Perseus, Sefaria y el Museo Británico.'
      ],
      pt: [
        'Lançamento inicial do Arquivo Textual Comparativo Chronos & Canon.',
        'Estratificação tripartite: Testemunhas primárias, transmissão secundária e edições críticas.',
        'Arquitetura de Aplicativo Web Progressivo (PWA) com operação off-line.',
        'Assistente de pesquisa fundamentado no corpus.',
        'Biblioteca digital com links para o Mar Morto, Perseus, Sefaria e Museu Britânico.'
      ]
    }
  }
];

/**
 * Compare two semver strings (e.g. '1.2.0' vs '1.2.1').
 * Returns:
 *   1 if a > b (a is newer)
 *   0 if a === b
 *  -1 if a < b (b is newer)
 */
export function compareSemanticVersions(a: string, b: string): number {
  const parse = (v: string) =>
    v
      .replace(/^v/i, '')
      .split('.')
      .map(part => parseInt(part, 10) || 0);

  const [aMaj = 0, aMin = 0, aPat = 0] = parse(a);
  const [bMaj = 0, bMin = 0, bPat = 0] = parse(b);

  if (aMaj !== bMaj) return aMaj > bMaj ? 1 : -1;
  if (aMin !== bMin) return aMin > bMin ? 1 : -1;
  if (aPat !== bPat) return aPat > bPat ? 1 : -1;
  return 0;
}

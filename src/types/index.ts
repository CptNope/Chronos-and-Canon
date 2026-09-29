export type SupportedLanguage = 'en' | 'es' | 'pt';

export type RelationshipType =
  | 'DIRECT QUOTATION'
  | 'TEXTUAL DEPENDENCE'
  | 'EXPANDED TRADITION'
  | 'LATER INTERPRETATION'
  | 'SHARED TRADITION'
  | 'LINGUISTIC RELATIONSHIP'
  | 'HISTORICAL CONNECTION'
  | 'PARALLEL NARRATIVE'
  | 'SHARED MOTIF'
  | 'POSSIBLE CONNECTION'
  | 'SPECULATIVE COMPARISON';

export type EvidenceLevel =
  | 'DOCUMENTED'
  | 'STRONG'
  | 'COMPARATIVE'
  | 'POSSIBLE'
  | 'SPECULATIVE';

export type ResearchMode =
  | 'SCHOLARLY'     // Documented, Strong
  | 'COMPARATIVE'   // Documented, Strong, Comparative (Default)
  | 'EXPLORATORY'   // Documented, Strong, Comparative, Possible
  | 'SPECULATIVE';  // All levels including Speculative

export type CultureId =
  | 'hebrew_israelite'
  | 'early_christian'
  | 'second_temple_jewish'
  | 'dead_sea_scrolls'
  | 'mesopotamian'
  | 'canaanite_ugaritic'
  | 'greco_roman'
  | 'egyptian'
  | 'norse_germanic'
  | 'vedic_hindu'
  | 'persian_zoroastrian'
  | 'maya'
  | 'aztec';

export interface Culture {
  id: CultureId;
  name: string;
  region: string;
  primaryLanguages: string[];
  era: string;
  description: string;
  mapCoords: { lat: number; lng: number };
}

export interface AncientTerm {
  id: string;
  term: string;
  originalScript: string;
  language: string;
  transliteration: string;
  literalMeaning: string;
  occurrences: string[];
  etymology: string;
  scholarlyNotes: string;
  relatedTerms?: string[];
}

export interface TextChronology {
  dateOfStorySetting: string;
  estimatedDateOfComposition: string;
  dateOfEarliestSurvivingManuscript: string;
  numericCompositionBCE: number; // negative for BCE, positive for CE, used for timeline
}

export interface TextItem {
  id: string;
  title: string;
  alternateTitles?: string[];
  cultureId: CultureId;
  category:
    | 'HEBREW BIBLE'
    | 'NEW TESTAMENT'
    | 'SECOND TEMPLE'
    | 'APOCRYPHA'
    | 'PSEUDEPIGRAPHA'
    | 'DEAD SEA SCROLLS'
    | 'LOST BOOKS REFERENCED'
    | 'MESOPOTAMIAN'
    | 'CANAANITE / UGARITIC'
    | 'GRECO-ROMAN'
    | 'EGYPTIAN'
    | 'NORSE'
    | 'VEDIC'
    | 'PERSIAN'
    | 'MESOAMERICAN';
  chronology: TextChronology;
  originalLanguage: string;
  summary: string;
  manuscriptHistory: string;
  isLostBookReference?: boolean;
  lostBookAnalysis?: string;
  isSeventyBooksCandidate?: boolean;
  seventyBooksRationale?: string;
  primaryManuscriptWitnesses: string[];
}

export interface Passage {
  id: string;
  textId: string;
  reference: string;
  title: string;
  cultureId: CultureId;
  chronology: TextChronology;
  originalLanguage: string;
  originalText?: string;
  transliteration?: string;
  englishTranslation: string;
  spanishTranslation?: string;
  portugueseTranslation?: string;
  translationAttribution: {
    translator: string;
    sourceWork: string;
    year: string;
    license: 'Public Domain' | 'Creative Commons' | 'Scholarly Fair Use Quotation';
    attributionNotice: string;
    url?: string;
  };
  motifs: string[];
  clickableTerms?: string[]; // IDs of AncientTerm
  criticalApparatusNotes?: string;
}

export interface Relationship {
  id: string;
  sourcePassageId?: string;
  sourceTextId?: string;
  targetPassageId?: string;
  targetTextId?: string;
  relationshipType: RelationshipType;
  evidenceLevel: EvidenceLevel;
  title: string;
  scholarlyExplanation: string;
  motifs: string[];
  citations: string[];
}

export interface PublicTextEdition {
  id: string;
  textId?: string; // Corresponds to TextItem id
  textTitle: string;
  cultureId: CultureId;
  category: string;
  title: string;
  repositoryName: string; // e.g. "Leon Levy Dead Sea Scrolls Digital Library", "Sefaria", "Perseus Digital Library", "British Museum Online", "Oxford ETCSL", "Internet Sacred Text Archive", "Newberry Library"
  url: string;
  editionType:
    | 'High-Res Manuscript Facsimile'
    | 'Original Script & Interlinear'
    | 'Critical Scholarly Edition'
    | 'Open-Access Translation'
    | 'Museum Specimen & 3D Scan'
    | 'Audio & Linguistic Corpus';
  language: string;
  institution: string;
  isPublicDomainOrOpenAccess: boolean;
  description: string;
  highlightFeatures: string[];
}

export interface Motif {
  id: string;
  name: string;
  category: 'COSMOLOGY' | 'DIVINE BEINGS' | 'PRIMEVAL HISTORY' | 'ESCHATOLOGY' | 'SACRED SPACE' | 'RITUAL & WISDOM';
  description: string;
  biblicalParallels: string[];
  crossCulturalParallels: string[];
  scholarlyDebate: string;
}

export interface Manuscript {
  id: string;
  name: string;
  siglumOrDesignation: string;
  cultureId: CultureId;
  language: string;
  material: 'Papyrus' | 'Parchment / Vellum' | 'Clay Cuneiform Tablet' | 'Stone Inscription' | 'Bark Paper Codex' | 'Silver Scroll';
  approximateDate: string;
  numericDateBCE: number;
  provenance: string;
  currentRepository: string;
  associatedTexts: string[];
  description: string;
  licenseRightsNote: string;
  imageUrl?: string;
}

export interface GraphNode {
  id: string;
  label: string;
  type: 'text' | 'passage' | 'being' | 'motif' | 'culture' | 'manuscript';
  cultureId?: CultureId;
  group?: string;
  details?: string;
}

export interface GraphLink {
  source: string;
  target: string;
  relationshipType: RelationshipType;
  evidenceLevel: EvidenceLevel;
  label: string;
  explanation: string;
}

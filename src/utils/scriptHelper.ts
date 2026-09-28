export interface LanguageMeta {
  code: string;
  label: string;
  scriptName: string;
  isRtl: boolean;
  cssClass: string;
  badgeBg: string;
  badgeText: string;
  fontFamily: string;
}

export function getLanguageMeta(languageString?: string): LanguageMeta {
  const lang = (languageString || '').toLowerCase().trim();

  // Hebrew
  if (lang.includes('hebrew') || lang.includes('ivrit') || lang.includes('paleo-hebrew')) {
    return {
      code: 'he',
      label: 'Biblical Hebrew',
      scriptName: 'Ktav Ashuri / Hebrew Square',
      isRtl: true,
      cssClass: 'script-hebrew',
      badgeBg: 'bg-amber-950/40 border-amber-600/40',
      badgeText: 'text-amber-400',
      fontFamily: "'Noto Serif Hebrew', 'SBL Hebrew', serif"
    };
  }

  // Aramaic (Imperial / Biblical / Qumran / Targumic)
  if (lang.includes('aramaic') || lang.includes('syriac')) {
    return {
      code: 'arc',
      label: 'Ancient Aramaic',
      scriptName: 'Aramaic / Hebrew Square',
      isRtl: true,
      cssClass: 'script-aramaic',
      badgeBg: 'bg-yellow-950/40 border-yellow-600/40',
      badgeText: 'text-yellow-400',
      fontFamily: "'Noto Serif Hebrew', 'SBL Hebrew', serif"
    };
  }

  // Greek (Classical / Koine / Septuagint)
  if (lang.includes('greek') || lang.includes('koine') || lang.includes('hellenistic')) {
    return {
      code: 'grc',
      label: 'Koine Greek',
      scriptName: 'Greek Polytonic (Ἑλληνική)',
      isRtl: false,
      cssClass: 'script-greek',
      badgeBg: 'bg-sky-950/40 border-sky-600/40',
      badgeText: 'text-sky-400',
      fontFamily: "'Gentium Book Plus', 'EB Garamond', serif"
    };
  }

  // Sanskrit / Vedic
  if (lang.includes('sanskrit') || lang.includes('vedic') || lang.includes('devanagari')) {
    return {
      code: 'sa',
      label: 'Vedic Sanskrit',
      scriptName: 'Devanagari (देवनागरी)',
      isRtl: false,
      cssClass: 'script-devanagari',
      badgeBg: 'bg-rose-950/40 border-rose-600/40',
      badgeText: 'text-rose-400',
      fontFamily: "'Noto Serif Devanagari', 'Noto Sans Devanagari', serif"
    };
  }

  // Classical Ethiopic / Ge'ez
  if (lang.includes("ge'ez") || lang.includes('geez') || lang.includes('ethiopic')) {
    return {
      code: 'gez',
      label: "Classical Ge'ez",
      scriptName: "Ethiopic Fidäl (ግዕዝ)",
      isRtl: false,
      cssClass: 'script-ethiopic',
      badgeBg: 'bg-emerald-950/40 border-emerald-600/40',
      badgeText: 'text-emerald-400',
      fontFamily: "'Noto Serif Ethiopic', serif"
    };
  }

  // Ugaritic
  if (lang.includes('ugaritic')) {
    return {
      code: 'uga',
      label: 'Ugaritic',
      scriptName: 'Alphabetic Cuneiform (𐎀𐎁𐎂)',
      isRtl: false, // Ugaritic cuneiform is written LTR
      cssClass: 'script-ugaritic',
      badgeBg: 'bg-orange-950/40 border-orange-600/40',
      badgeText: 'text-orange-400',
      fontFamily: "'Noto Sans Ugaritic', 'Santakku', 'Segoe UI Historic', serif"
    };
  }

  // Akkadian / Babylonian / Assyrian / Sumerian
  if (lang.includes('akkadian') || lang.includes('babylonian') || lang.includes('assyrian') || lang.includes('sumerian') || lang.includes('cuneiform')) {
    return {
      code: 'akk',
      label: lang.includes('sumerian') ? 'Sumerian' : 'Akkadian Cuneiform',
      scriptName: 'Logographic / Syllabic Cuneiform',
      isRtl: false,
      cssClass: 'script-cuneiform',
      badgeBg: 'bg-purple-950/40 border-purple-600/40',
      badgeText: 'text-purple-400',
      fontFamily: "'Noto Sans Cuneiform', 'Santakku', 'Segoe UI Historic', serif"
    };
  }

  // Arabic
  if (lang.includes('arabic')) {
    return {
      code: 'ar',
      label: 'Classical Arabic',
      scriptName: 'Arabic Naskh (العربية)',
      isRtl: true,
      cssClass: 'script-arabic',
      badgeBg: 'bg-teal-950/40 border-teal-600/40',
      badgeText: 'text-teal-400',
      fontFamily: "'Noto Naskh Arabic', serif"
    };
  }

  // Old Norse / Icelandic
  if (lang.includes('norse') || lang.includes('icelandic') || lang.includes('runic')) {
    return {
      code: 'non',
      label: 'Old Norse',
      scriptName: 'Old Norse / Younger Futhark',
      isRtl: false,
      cssClass: 'script-norse',
      badgeBg: 'bg-indigo-950/40 border-indigo-600/40',
      badgeText: 'text-indigo-400',
      fontFamily: "'EB Garamond', Georgia, serif"
    };
  }

  // Maya / K'iche'
  if (lang.includes('maya') || lang.includes("k'iche") || lang.includes('quiche')) {
    return {
      code: 'myn',
      label: "Classical Maya / K'iche'",
      scriptName: 'Hieroglyphic / Latin Orthography',
      isRtl: false,
      cssClass: 'script-maya',
      badgeBg: 'bg-cyan-950/40 border-cyan-600/40',
      badgeText: 'text-cyan-400',
      fontFamily: "'EB Garamond', Georgia, serif"
    };
  }

  // Latin
  if (lang.includes('latin')) {
    return {
      code: 'la',
      label: 'Classical Latin',
      scriptName: 'Roman Script',
      isRtl: false,
      cssClass: 'script-latin',
      badgeBg: 'bg-stone-900/60 border-stone-600/40',
      badgeText: 'text-stone-300',
      fontFamily: "'EB Garamond', Georgia, serif"
    };
  }

  // Egyptian Hieroglyphic / Hieratic
  if (lang.includes('egyptian') || lang.includes('hieroglyph') || lang.includes('coptic')) {
    return {
      code: 'egy',
      label: 'Middle Egyptian',
      scriptName: 'Hieroglyphic Transliteration / Gardiner',
      isRtl: false,
      cssClass: 'script-egyptian',
      badgeBg: 'bg-amber-900/40 border-amber-500/40',
      badgeText: 'text-amber-300',
      fontFamily: "'EB Garamond', Georgia, serif"
    };
  }

  // Default Fallback
  return {
    code: 'und',
    label: languageString || 'Ancient Language',
    scriptName: 'Ancient Epigraphic Script',
    isRtl: false,
    cssClass: 'script-latin',
    badgeBg: 'bg-[#201a14] border-[#3d3224]',
    badgeText: 'text-[#d6c7b2]',
    fontFamily: "'EB Garamond', Georgia, serif"
  };
}

export function isRTL(languageString?: string): boolean {
  return getLanguageMeta(languageString).isRtl;
}

export function getScriptClass(languageString?: string): string {
  return getLanguageMeta(languageString).cssClass;
}

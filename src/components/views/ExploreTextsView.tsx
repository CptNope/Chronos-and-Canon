import React, { useState } from 'react';
import { texts } from '../../data/texts';
import { passages } from '../../data/passages';
import { cultures } from '../../data/cultures';
import { TextItem, Passage } from '../../types';
import { AncientTermModal } from '../common/AncientTermModal';
import { getLanguageMeta } from '../../utils/scriptHelper';
import { publicTextEditions } from '../../data/publicTexts';
import { BookOpen, Search, Calendar, FileText, ArrowRight, Sparkles, AlertCircle, ExternalLink, Library } from 'lucide-react';

interface ExploreTextsViewProps {
  onSelectPassageForCompare?: (passageId: string) => void;
  onNavigateToDigitalLibrary?: (textId?: string) => void;
}

export const ExploreTextsView: React.FC<ExploreTextsViewProps> = ({
  onSelectPassageForCompare,
  onNavigateToDigitalLibrary
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [selectedCulture, setSelectedCulture] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeTextId, setActiveTextId] = useState<string>(texts[0].id);
  const [readingMode, setReadingMode] = useState<'SIDE_BY_SIDE' | 'ENGLISH_ONLY' | 'ORIGINAL_ONLY'>('SIDE_BY_SIDE');
  const [selectedTermId, setSelectedTermId] = useState<string | null>(null);

  const categories = [
    'ALL',
    'HEBREW BIBLE',
    'NEW TESTAMENT',
    'SECOND TEMPLE',
    'DEAD SEA SCROLLS',
    'LOST BOOKS REFERENCED',
    'MESOPOTAMIAN',
    'CANAANITE / UGARITIC',
    'GRECO-ROMAN',
    'NORSE',
    'VEDIC',
    'PERSIAN',
    'MESOAMERICAN'
  ];

  const filteredTexts = texts.filter(text => {
    const matchesCategory = selectedCategory === 'ALL' || text.category === selectedCategory;
    const matchesCulture = selectedCulture === 'ALL' || text.cultureId === selectedCulture;
    const matchesSearch =
      text.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      text.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (text.alternateTitles && text.alternateTitles.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())));
    return matchesCategory && matchesCulture && matchesSearch;
  });

  const activeText = texts.find(t => t.id === activeTextId) || filteredTexts[0] || texts[0];
  const textPassages = passages.filter(p => p.textId === activeText.id);

  return (
    <div className="space-y-6">
      {/* Linguistic Term Dialog */}
      <AncientTermModal
        termId={selectedTermId}
        onClose={() => setSelectedTermId(null)}
        onSelectRelatedTerm={termId => setSelectedTermId(termId)}
      />

      {/* Header and Filter Bar */}
      <div className="p-6 rounded-2xl bg-[#151210] border border-[#a48c68]/20 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-[#2b241c]">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#c99738] uppercase tracking-wider">
              <BookOpen className="w-4 h-4" />
              Primary Source Reader &amp; Textual Archive
            </div>
            <h1 className="text-2xl md:text-3xl font-bold font-display text-[#f5d77f] mt-1">
              Explore Ancient Texts &amp; Canons
            </h1>
            <p className="text-sm text-[#b8ad9e] mt-1 max-w-3xl">
              Browse primary ancient literature across Hebrew, Second Temple, Christian, Mesopotamian, Ugaritic, Classical, and Global traditions with tripartite chronological distinction.
            </p>
          </div>

          {/* Reading Mode Switcher */}
          <div className="flex items-center p-1 rounded-lg bg-[#201a14] border border-[#3b3226] self-start md:self-auto">
            <button
              onClick={() => setReadingMode('SIDE_BY_SIDE')}
              className={`px-3 py-1.5 rounded text-xs font-medium transition ${
                readingMode === 'SIDE_BY_SIDE'
                  ? 'bg-[#c99738] text-[#12100e] font-semibold shadow'
                  : 'text-[#a48c68] hover:text-[#e8e2d5]'
              }`}
            >
              Side-by-Side
            </button>
            <button
              onClick={() => setReadingMode('ENGLISH_ONLY')}
              className={`px-3 py-1.5 rounded text-xs font-medium transition ${
                readingMode === 'ENGLISH_ONLY'
                  ? 'bg-[#c99738] text-[#12100e] font-semibold shadow'
                  : 'text-[#a48c68] hover:text-[#e8e2d5]'
              }`}
            >
              English Only
            </button>
            <button
              onClick={() => setReadingMode('ORIGINAL_ONLY')}
              className={`px-3 py-1.5 rounded text-xs font-medium transition ${
                readingMode === 'ORIGINAL_ONLY'
                  ? 'bg-[#c99738] text-[#12100e] font-semibold shadow'
                  : 'text-[#a48c68] hover:text-[#e8e2d5]'
              }`}
            >
              Original Script
            </button>
          </div>
        </div>

        {/* Search & Filters */}
        <div className="mt-4 flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-[#a48c68]" />
            <input
              type="text"
              placeholder="Search ancient works, keywords, or alternate titles..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-lg bg-[#1a1714] border border-[#3b3226] text-sm text-[#e8e2d5] placeholder-[#7d6f5d] focus:outline-none focus:border-[#c99738]"
            />
          </div>

          <div className="flex gap-2 overflow-x-auto pb-1">
            <select
              value={selectedCulture}
              onChange={e => setSelectedCulture(e.target.value)}
              className="px-3 py-2 rounded-lg bg-[#1a1714] border border-[#3b3226] text-xs text-[#e8e2d5] focus:outline-none focus:border-[#c99738]"
            >
              <option value="ALL">All Traditions</option>
              {cultures.map(c => (
                <option key={c.id} value={c.id}>{c.name}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Category Pills */}
        <div className="mt-3 flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-2.5 py-1 rounded-full whitespace-nowrap transition ${
                selectedCategory === cat
                  ? 'bg-[#c99738]/20 border border-[#c99738] text-[#f5d77f] font-semibold'
                  : 'bg-[#1e1a16] border border-[#322a20] text-[#a48c68] hover:border-[#63533e]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Main Grid: Left Navigation / Right Reader */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Texts List (Left Column) */}
        <div className="lg:col-span-4 space-y-2 max-h-[750px] overflow-y-auto pr-1">
          <div className="text-xs uppercase tracking-wider text-[#a48c68] font-semibold px-2 mb-2">
            Catalogued Works ({filteredTexts.length})
          </div>
          {filteredTexts.map(text => {
            const isSelected = text.id === activeText.id;
            return (
              <div
                key={text.id}
                onClick={() => setActiveTextId(text.id)}
                className={`p-3.5 rounded-xl cursor-pointer border transition text-left ${
                  isSelected
                    ? 'bg-[#221c16] border-[#c99738] shadow-md'
                    : 'bg-[#161311] border-[#2c251e] hover:border-[#4d4032] hover:bg-[#1a1613]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded bg-[#2b241c] text-[#c99738] border border-[#a48c68]/20">
                    {text.category}
                  </span>
                  <span className="text-[11px] text-[#8e806e] font-mono">
                    {text.chronology.estimatedDateOfComposition.split('(')[0]}
                  </span>
                </div>
                <h3 className={`text-base font-semibold font-display mt-1.5 ${isSelected ? 'text-[#f5d77f]' : 'text-[#e8e2d5]'}`}>
                  {text.title}
                </h3>
                <p className="text-xs text-[#a49989] line-clamp-2 mt-1 leading-relaxed">
                  {text.summary}
                </p>
                {text.isLostBookReference && (
                  <div className="mt-2 text-[10px] font-medium text-amber-400/90 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3 flex-shrink-0" />
                    <span>Ancient Lost Reference (Not later homonym)</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Reader Display (Right Column) */}
        <div className="lg:col-span-8 space-y-6">
          {/* Active Text Detailed Header & 3-Tier Chronology */}
          <div className="p-6 rounded-2xl bg-[#161311] border border-[#a48c68]/30 shadow-xl space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-[#2b241c] text-[#c99738] border border-[#c99738]/30 uppercase">
                  {activeText.category}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold font-display text-[#f5d77f] mt-1">
                  {activeText.title}
                </h2>
              </div>
              <span className="text-xs font-mono text-[#a48c68] px-3 py-1 rounded bg-[#201a14] border border-[#362f27]">
                Original: {activeText.originalLanguage}
              </span>
            </div>

            <p className="text-sm text-[#ded5c7] leading-relaxed">
              {activeText.summary}
            </p>

            {/* LOST BOOK CRITICAL ANALYSIS IF APPLICABLE */}
            {activeText.isLostBookReference && activeText.lostBookAnalysis && (
              <div className="p-4 rounded-xl bg-amber-950/30 border border-amber-600/40 text-amber-200 text-xs leading-relaxed space-y-1.5">
                <div className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-amber-300">
                  <AlertCircle className="w-4 h-4 text-amber-400" />
                  Textual &amp; Historical Integrity Notice
                </div>
                <p>{activeText.lostBookAnalysis}</p>
              </div>
            )}

            {/* CRITICAL 3-TIER CHRONOLOGY BOX */}
            <div className="p-4 rounded-xl bg-[#1a1714] border border-[#3b3226] space-y-2">
              <div className="text-[11px] uppercase tracking-wider font-semibold text-[#c99738] flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                Three-Tier Chronological Framework
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs pt-1">
                <div className="p-2.5 rounded bg-[#221c17] border border-[#2e261d]">
                  <span className="block text-[10px] text-[#8e806e] uppercase font-bold">1. Claimed Setting</span>
                  <span className="font-medium text-[#e8e2d5] mt-0.5 block">{activeText.chronology.dateOfStorySetting}</span>
                </div>
                <div className="p-2.5 rounded bg-[#221c17] border border-[#2e261d]">
                  <span className="block text-[10px] text-[#8e806e] uppercase font-bold">2. Estimated Composition</span>
                  <span className="font-medium text-[#e8e2d5] mt-0.5 block">{activeText.chronology.estimatedDateOfComposition}</span>
                </div>
                <div className="p-2.5 rounded bg-[#221c17] border border-[#2e261d]">
                  <span className="block text-[10px] text-[#8e806e] uppercase font-bold">3. Earliest Surviving MS</span>
                  <span className="font-medium text-[#e8e2d5] mt-0.5 block">{activeText.chronology.dateOfEarliestSurvivingManuscript}</span>
                </div>
              </div>
            </div>

            {/* Manuscript History & Witnesses */}
            <div className="text-xs text-[#a49989] space-y-1 border-t border-[#2d251d] pt-3">
              <div><strong className="text-[#c99738]">Manuscript Witness Tradition:</strong> {activeText.manuscriptHistory}</div>
              <div><strong className="text-[#c99738]">Key Physical Witnesses:</strong> {activeText.primaryManuscriptWitnesses.join(', ')}</div>
            </div>

            {/* PUBLICLY AVAILABLE EDITIONS & DIGITAL FACSIMILES */}
            {(() => {
              const linkedEditions = publicTextEditions.filter(p => p.textId === activeText.id);
              if (linkedEditions.length === 0) return null;

              return (
                <div className="pt-3 border-t border-[#2d251d] space-y-2.5">
                  <div className="flex items-center justify-between">
                    <div className="text-[11px] uppercase tracking-wider font-semibold text-[#f5d77f] flex items-center gap-1.5">
                      <Library className="w-3.5 h-3.5 text-[#c99738]" />
                      Publicly Available Digital Editions &amp; Facsimiles ({linkedEditions.length})
                    </div>
                    {onNavigateToDigitalLibrary && (
                      <button
                        onClick={() => onNavigateToDigitalLibrary(activeText.id)}
                        className="text-[11px] text-[#c99738] hover:text-[#f5d77f] flex items-center gap-1 transition font-medium"
                      >
                        <span>View All in Digital Library</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {linkedEditions.map(ed => (
                      <div
                        key={ed.id}
                        className="p-3 rounded-xl bg-[#1b1713] border border-[#2e261d] hover:border-[#c99738]/50 transition flex flex-col justify-between space-y-2 text-left"
                      >
                        <div className="space-y-1">
                          <div className="flex items-center justify-between gap-1">
                            <span className="text-[9px] uppercase font-bold px-1.5 py-0.2 rounded bg-[#251e18] text-[#c99738] border border-[#c99738]/30">
                              {ed.editionType}
                            </span>
                            <span className="text-[10px] text-[#8e806e] truncate max-w-[130px]">
                              {ed.institution}
                            </span>
                          </div>
                          <div className="text-xs font-bold text-[#f5d77f] line-clamp-1">
                            {ed.title}
                          </div>
                          <div className="text-[11px] text-[#a48c68] line-clamp-2 leading-relaxed">
                            {ed.description}
                          </div>
                        </div>

                        <div className="pt-1 flex items-center justify-between">
                          <span className="text-[10px] text-[#a48c68] font-mono">{ed.repositoryName}</span>
                          <a
                            href={ed.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-2.5 py-1 rounded-lg bg-[#c99738]/20 hover:bg-[#c99738] hover:text-[#12100e] text-[#f5d77f] text-[11px] font-semibold transition border border-[#c99738]/40 flex items-center gap-1 shadow-sm"
                          >
                            <span>Open Archive</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })()}
          </div>

          {/* Passages Section */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold font-display text-[#f5d77f] flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#c99738]" />
                Selected Key Passages &amp; Interlinears ({textPassages.length})
              </h3>
            </div>

            {textPassages.length === 0 ? (
              <div className="p-8 text-center rounded-2xl bg-[#161311] border border-dashed border-[#362f27] text-[#8e806e] text-sm">
                No individual sample passages recorded for this text entry yet. You can examine its relationship network in the Graph View or ask the AI Research Assistant.
              </div>
            ) : (
              textPassages.map(passage => (
                <div
                  key={passage.id}
                  className="p-6 rounded-2xl bg-[#161311] border border-[#a48c68]/30 shadow-lg space-y-4"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[#2b241c]">
                    <div>
                      <span className="text-xs font-mono font-bold text-[#c99738]">
                        {passage.reference}
                      </span>
                      <h4 className="text-lg font-bold font-display text-[#f5d77f]">
                        {passage.title}
                      </h4>
                    </div>

                    {onSelectPassageForCompare && (
                      <button
                        onClick={() => onSelectPassageForCompare(passage.id)}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#201a14] hover:bg-[#2e261d] border border-[#a48c68]/30 text-xs font-semibold text-[#f5d77f] transition"
                      >
                        <span>Compare in Viewer</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>

                  {/* Clickable Linguistic Terms Bar */}
                  {passage.clickableTerms && passage.clickableTerms.length > 0 && (
                    <div className="flex items-center gap-2 flex-wrap text-xs bg-[#1f1a14] p-2 rounded-lg border border-[#382f23]">
                      <span className="text-[#a48c68] font-semibold flex items-center gap-1 text-[11px]">
                        <Sparkles className="w-3.5 h-3.5 text-[#c99738]" />
                        Clickable Linguistic Terms:
                      </span>
                      {passage.clickableTerms.map(termId => (
                        <button
                          key={termId}
                          onClick={() => setSelectedTermId(termId)}
                          className="px-2 py-0.5 rounded bg-[#2e251b] hover:bg-[#3d3224] text-[#f5d77f] border border-[#c99738]/40 text-xs font-mono transition"
                        >
                          {termId}
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Passage Text Views */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Original Script */}
                    {(readingMode === 'SIDE_BY_SIDE' || readingMode === 'ORIGINAL_ONLY') && (() => {
                      const langMeta = getLanguageMeta(passage.originalLanguage);
                      return (
                        <div className={`p-4 rounded-xl bg-[#14110e] border border-[#2d251d] space-y-2 ${readingMode === 'ORIGINAL_ONLY' ? 'md:col-span-2' : ''}`}>
                          <div className="flex items-center justify-between text-[11px] text-[#a48c68] font-mono border-b border-[#241e17] pb-1.5">
                            <span className="flex items-center gap-1.5">
                              <span className={`px-1.5 py-0.2 rounded text-[10px] border ${langMeta.badgeBg} ${langMeta.badgeText}`}>
                                {langMeta.label}
                              </span>
                              <span>({passage.originalLanguage})</span>
                            </span>
                            <span className="text-[#8e806e] text-[10px] lowercase">{langMeta.isRtl ? 'RTL' : 'LTR'} &bull; {langMeta.scriptName}</span>
                          </div>
                          <div
                            className={`${langMeta.cssClass} text-[#f0e6d6] leading-relaxed select-text`}
                            dir={langMeta.isRtl ? 'rtl' : 'ltr'}
                          >
                            {passage.originalText}
                          </div>
                          {passage.transliteration && (
                            <div className="pt-2 border-t border-[#241e17] text-xs font-mono text-[#a48c68] italic leading-relaxed">
                              {passage.transliteration}
                            </div>
                          )}
                        </div>
                      );
                    })()}

                    {/* English Translation */}
                    {(readingMode === 'SIDE_BY_SIDE' || readingMode === 'ENGLISH_ONLY') && (
                      <div className={`p-4 rounded-xl bg-[#1a1613] border border-[#2d251d] space-y-2 ${readingMode === 'ENGLISH_ONLY' ? 'md:col-span-2' : ''}`}>
                        <div className="flex items-center justify-between text-[11px] text-[#c99738] font-mono border-b border-[#2b241c] pb-1.5">
                          <span>English Translation</span>
                          <span className="text-[10px] text-[#8e806e]">{passage.translationAttribution.license}</span>
                        </div>
                        <p className="text-sm md:text-base leading-relaxed text-[#e8e2d5] font-serif">
                          {passage.englishTranslation}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Critical Apparatus / Translation Attribution */}
                  <div className="pt-3 border-t border-[#2b241c] text-xs text-[#8e806e] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <span>Translator: <strong>{passage.translationAttribution.translator}</strong> ({passage.translationAttribution.year})</span>
                      <span className="mx-2">•</span>
                      <span>{passage.translationAttribution.attributionNotice}</span>
                    </div>
                  </div>
                  {passage.criticalApparatusNotes && (
                    <div className="text-xs bg-[#1a1613] p-2.5 rounded-lg border border-[#2e261e] text-[#b8ad9e]">
                      <strong className="text-[#c99738]">Text-Critical Note:</strong> {passage.criticalApparatusNotes}
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

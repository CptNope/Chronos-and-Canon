import React, { useState, useEffect } from 'react';
import { passages } from '../../data/passages';
import { texts } from '../../data/texts';
import { Passage, SupportedLanguage } from '../../types';
import { AncientTermModal } from '../common/AncientTermModal';
import { getLanguageMeta } from '../../utils/scriptHelper';
import { useLanguage } from '../../i18n/LanguageContext';
import { getUiTranslations } from '../../i18n/uiTranslations';
import { getPassageText } from '../../utils/passageTranslationHelper';
import { GitCompare, Plus, Trash2, Sparkles, Copy, Check, Share2, Bookmark, Globe } from 'lucide-react';

interface CompareViewProps {
  initialPassageIds?: string[];
}

export const CompareView: React.FC<CompareViewProps> = ({ initialPassageIds = ['gen_6_1_4', '1_enoch_6_1_6'] }) => {
  const { t, language } = useLanguage();
  const ui = getUiTranslations(language);
  const [selectedPassageIds, setSelectedPassageIds] = useState<string[]>(initialPassageIds);
  const [passageLanguages, setPassageLanguages] = useState<Record<string, SupportedLanguage>>({});

  useEffect(() => {
    if (initialPassageIds && initialPassageIds.length > 0) {
      setSelectedPassageIds(initialPassageIds);
    }
  }, [initialPassageIds]);
  const [selectedTermId, setSelectedTermId] = useState<string | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);
  const [savedFavorites, setSavedFavorites] = useState<string[]>([]);
  const [isSaved, setIsSaved] = useState(false);

  const selectedPassages = selectedPassageIds
    .map(id => passages.find(p => p.id === id))
    .filter((p): p is Passage => p !== undefined);

  const handleAddPassage = (id: string) => {
    if (selectedPassageIds.length < 4 && !selectedPassageIds.includes(id)) {
      setSelectedPassageIds([...selectedPassageIds, id]);
    }
  };

  const handleRemovePassage = (id: string) => {
    if (selectedPassageIds.length > 1) {
      setSelectedPassageIds(selectedPassageIds.filter(pId => pId !== id));
    }
  };

  const handleShare = () => {
    const url = new URL(window.location.href);
    url.searchParams.set('compare', selectedPassageIds.join(','));
    navigator.clipboard.writeText(url.toString());
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const handleToggleFavorite = () => {
    const key = selectedPassageIds.sort().join('::');
    if (savedFavorites.includes(key)) {
      setSavedFavorites(savedFavorites.filter(k => k !== key));
      setIsSaved(false);
    } else {
      setSavedFavorites([...savedFavorites, key]);
      setIsSaved(true);
    }
  };

  return (
    <div className="space-y-6">
      <AncientTermModal
        termId={selectedTermId}
        onClose={() => setSelectedTermId(null)}
      />

      {/* Top Banner and Controls */}
      <div className="p-6 rounded-2xl bg-[#161311] border border-[#a48c68]/20 shadow-xl space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#c99738] uppercase tracking-wider">
              <GitCompare className="w-4 h-4 flex-shrink-0" />
              <span>{t.compare.title}</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold font-display text-[#f5d77f] mt-1">
              {t.compare.title}
            </h1>
            <p className="text-sm text-[#b8ad9e] mt-1">
              {t.compare.subtitle}
            </p>
          </div>

          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              onClick={handleToggleFavorite}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-medium transition ${
                isSaved
                  ? 'bg-[#c99738]/20 border-[#c99738] text-[#f5d77f]'
                  : 'bg-[#201a14] border-[#382f23] text-[#a48c68] hover:text-[#e8e2d5]'
              }`}
            >
              <Bookmark className="w-3.5 h-3.5" />
              <span>{isSaved ? ui.compare.bookmarked : ui.compare.bookmark}</span>
            </button>
            <button
              onClick={handleShare}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#201a14] hover:bg-[#2b241c] border border-[#382f23] text-xs font-medium text-[#e8e2d5] transition"
            >
              {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5" />}
              <span>{copiedLink ? t.common.copied : t.common.share}</span>
            </button>
          </div>
        </div>

        {/* Quick presets */}
        <div className="pt-3 border-t border-[#2a231b] flex items-center gap-2 flex-wrap text-xs">
          <span className="text-[#a48c68] font-semibold">{ui.compare.flagshipPresets}</span>
          <button
            onClick={() => setSelectedPassageIds(['gen_6_1_4', '1_enoch_6_1_6'])}
            className="px-2.5 py-1 rounded bg-[#201a14] hover:bg-[#2e261d] text-[#e8e2d5] border border-[#362f27]"
          >
            {ui.compare.presets.gen6Enoch}
          </button>
          <button
            onClick={() => setSelectedPassageIds(['jude_6_and_14_15', '1_enoch_1_9'])}
            className="px-2.5 py-1 rounded bg-[#201a14] hover:bg-[#2e261d] text-[#e8e2d5] border border-[#362f27]"
          >
            {ui.compare.presets.judeEnoch}
          </button>
          <button
            onClick={() => setSelectedPassageIds(['deut_2_and_3', 'joshua_12_4', 'ugaritic_ktu_1_108'])}
            className="px-2.5 py-1 rounded bg-[#201a14] hover:bg-[#2e261d] text-[#e8e2d5] border border-[#362f27]"
          >
            {ui.compare.presets.ogRapiu}
          </button>
          <button
            onClick={() => setSelectedPassageIds(['gilgamesh_tablet_11_flood', 'atrahasis_tablet_3_flood', 'shatapatha_brahmana_flood'])}
            className="px-2.5 py-1 rounded bg-[#201a14] hover:bg-[#2e261d] text-[#e8e2d5] border border-[#362f27]"
          >
            {ui.compare.presets.flood}
          </button>
          <button
            onClick={() => setSelectedPassageIds(['psalm_74_13_14', 'isaiah_27_1', 'baal_cycle_lotan'])}
            className="px-2.5 py-1 rounded bg-[#201a14] hover:bg-[#2e261d] text-[#e8e2d5] border border-[#362f27]"
          >
            {ui.compare.presets.chaoskampf}
          </button>
        </div>

        {/* Add more selector */}
        {selectedPassageIds.length < 4 && (
          <div className="flex items-center gap-2 pt-2">
            <Plus className="w-4 h-4 text-[#c99738]" />
            <span className="text-xs text-[#a48c68]">{ui.compare.addPassageLabel}</span>
            <select
              onChange={e => {
                if (e.target.value) handleAddPassage(e.target.value);
                e.target.value = '';
              }}
              defaultValue=""
              className="px-3 py-1.5 rounded-lg bg-[#1a1714] border border-[#3b3226] text-xs text-[#e8e2d5] focus:outline-none focus:border-[#c99738]"
            >
              <option value="" disabled>{ui.compare.selectPassagePlaceholder}</option>
              {passages
                .filter(p => !selectedPassageIds.includes(p.id))
                .map(p => (
                  <option key={p.id} value={p.id}>{p.reference} - {p.title}</option>
                ))}
            </select>
          </div>
        )}
      </div>

      {/* Side-by-Side Comparison Grid */}
      <div className={`grid gap-5 ${
        selectedPassages.length === 1
          ? 'grid-cols-1'
          : selectedPassages.length === 2
          ? 'grid-cols-1 md:grid-cols-2'
          : selectedPassages.length === 3
          ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
          : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
      }`}>
        {selectedPassages.map((passage, index) => {
          const parentText = texts.find(t => t.id === passage.textId);
          const langMeta = getLanguageMeta(passage.originalLanguage);
          return (
            <div
              key={passage.id}
              className="p-5 rounded-2xl bg-[#151210] border border-[#a48c68]/30 shadow-xl flex flex-col justify-between space-y-4 text-left"
            >
              <div className="space-y-3">
                {/* Header */}
                <div className="flex items-start justify-between pb-3 border-b border-[#29221b]">
                  <div>
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-[#201a14] text-[#c99738] border border-[#a48c68]/20 font-bold">
                      {ui.compare.columnHeader(index + 1, passage.reference)}
                    </span>
                    <h3 className="text-base font-bold font-display text-[#f5d77f] mt-1">
                      {passage.title}
                    </h3>
                    <div className="text-xs text-[#a48c68] font-mono flex items-center gap-1.5 mt-0.5">
                      <span>{parentText?.title}</span>
                      <span>&bull;</span>
                      <span className={`text-[10px] px-1.5 py-0.2 rounded border ${langMeta.badgeBg} ${langMeta.badgeText}`}>
                        {langMeta.label}
                      </span>
                    </div>
                  </div>

                  {selectedPassages.length > 1 && (
                    <button
                      onClick={() => handleRemovePassage(passage.id)}
                      className="p-1 rounded text-[#8e806e] hover:text-red-400 hover:bg-[#251e18] transition"
                      title={ui.compare.removeColumnTitle}
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>

                {/* 3-Tier Chronology */}
                <div className="p-3 rounded-xl bg-[#1b1714] border border-[#2b241c] space-y-1.5 text-[11px]">
                  <div className="text-[10px] uppercase font-bold text-[#c99738]">{ui.compare.chronologicalWitness}</div>
                  <div><strong className="text-[#8e806e]">{ui.compare.setting}</strong> {passage.chronology.dateOfStorySetting}</div>
                  <div><strong className="text-[#8e806e]">{ui.compare.composition}</strong> {passage.chronology.estimatedDateOfComposition}</div>
                  <div><strong className="text-[#8e806e]">{ui.compare.earliestMs}</strong> {passage.chronology.dateOfEarliestSurvivingManuscript}</div>
                </div>

                {/* Clickable Linguistic Terms */}
                {passage.clickableTerms && passage.clickableTerms.length > 0 && (
                  <div className="flex flex-wrap gap-1 items-center text-xs">
                    <span className="text-[10px] uppercase text-[#a48c68] font-semibold flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-[#c99738]" /> {ui.compare.keyTerms}
                    </span>
                    {passage.clickableTerms.map(tId => (
                      <button
                        key={tId}
                        onClick={() => setSelectedTermId(tId)}
                        className="px-2 py-0.5 rounded bg-[#241e18] hover:bg-[#342b22] text-[#f5d77f] border border-[#c99738]/30 font-mono text-[11px]"
                      >
                        {tId}
                      </button>
                    ))}
                  </div>
                )}

                {/* Original Language Excerpt with Dedicated Script Font */}
                <div className="p-3.5 rounded-xl bg-[#100e0b] border border-[#262019] space-y-2">
                  <div className="flex items-center justify-between text-[10px] font-mono text-[#a48c68] uppercase font-semibold pb-1 border-b border-[#1c1813]">
                    <span>{ui.compare.originalText(passage.originalLanguage)}</span>
                    <span className="text-[#7c6f5f] lowercase">{langMeta.isRtl ? 'RTL' : 'LTR'} &bull; {langMeta.scriptName}</span>
                  </div>
                  <div
                    className={`${langMeta.cssClass} text-[#f2e7d7] leading-relaxed select-text`}
                    dir={langMeta.isRtl ? 'rtl' : 'ltr'}
                  >
                    {passage.originalText}
                  </div>
                  {passage.transliteration && (
                    <div className="text-[11px] font-mono text-[#a89680] italic pt-1.5 border-t border-[#201a14] leading-relaxed">
                      {passage.transliteration}
                    </div>
                  )}
                </div>

                {/* Multilingual Translation Card (EN | ES | PT) */}
                {(() => {
                  const activeColLang = passageLanguages[passage.id] || language;
                  const localized = getPassageText(passage, activeColLang);

                  return (
                    <div className="p-3.5 rounded-xl bg-[#191512] border border-[#29221b] space-y-2">
                      <div className="flex items-center justify-between text-[10px] font-mono text-[#c99738] uppercase font-semibold">
                        <span className="flex items-center gap-1.5">
                          <Globe className="w-3 h-3 text-[#c99738]" />
                          {t.compare.translation} ({localized.languageName})
                        </span>

                        {/* Column-level translation switch (EN | ES | PT) */}
                        <div className="flex items-center gap-0.5 bg-[#120f0d] p-0.5 rounded border border-[#2d241c]">
                          {(['en', 'es', 'pt'] as SupportedLanguage[]).map(lCode => (
                            <button
                              key={lCode}
                              onClick={() => setPassageLanguages(prev => ({ ...prev, [passage.id]: lCode }))}
                              className={`px-1.5 py-0.2 rounded text-[9px] font-bold uppercase transition ${
                                activeColLang === lCode
                                  ? 'bg-[#c99738] text-[#12100e]'
                                  : 'text-[#8e806e] hover:text-[#e8e2d5]'
                              }`}
                              title={`Switch to ${lCode.toUpperCase()}`}
                            >
                              {lCode}
                            </button>
                          ))}
                        </div>
                      </div>

                      <p className="text-sm font-serif text-[#e4dbcc] leading-relaxed">
                        "{localized.text}"
                      </p>

                      {localized.isLocalized && (
                        <div className="text-[10px] text-[#34d399] font-mono pt-1">
                          ✓ {localized.sourceAttribution}
                        </div>
                      )}
                    </div>
                  );
                })()}
              </div>

              {/* Attribution Footer */}
              <div className="pt-3 border-t border-[#261f18] text-[11px] text-[#8e806e] space-y-1">
                <div>{ui.compare.source} <strong>{passage.translationAttribution.translator}</strong> ({passage.translationAttribution.year})</div>
                <div className="text-[10px]">{passage.translationAttribution.attributionNotice}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

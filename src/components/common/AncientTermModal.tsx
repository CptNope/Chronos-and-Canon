import React from 'react';
import { AncientTerm } from '../../types';
import { ancientTerms } from '../../data/terms';
import { getLanguageMeta } from '../../utils/scriptHelper';
import { X, BookOpen, Layers, Sparkles } from 'lucide-react';

interface AncientTermModalProps {
  termId: string | null;
  onClose: () => void;
  onSelectRelatedTerm?: (termId: string) => void;
}

export const AncientTermModal: React.FC<AncientTermModalProps> = ({
  termId,
  onClose,
  onSelectRelatedTerm
}) => {
  if (!termId) return null;
  const term: AncientTerm | undefined = ancientTerms.find(t => t.id === termId);
  if (!term) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fade-in">
      <div className="w-full max-w-xl max-h-[85vh] overflow-y-auto rounded-xl bg-[#181512] border border-[#c99738]/40 shadow-2xl p-6 text-[#e8e2d5]">
        {/* Header */}
        {(() => {
          const langMeta = getLanguageMeta(term.language);
          return (
            <div className="flex items-start justify-between pb-4 border-b border-[#362f27]">
              <div>
                <div className="flex items-center gap-2">
                  <span className={`px-2 py-0.5 rounded text-[11px] font-semibold border ${langMeta.badgeBg} ${langMeta.badgeText}`}>
                    {term.language}
                  </span>
                  <span className="text-xs text-[#a48c68] font-mono italic">
                    [{term.transliteration}]
                  </span>
                  <span className="text-[10px] text-[#786c5c] font-mono lowercase">
                    {langMeta.isRtl ? 'RTL' : 'LTR'}
                  </span>
                </div>
                <div className="flex flex-wrap items-baseline gap-3 mt-2">
                  <h2 className="text-2xl font-bold font-display text-[#f5d77f]">
                    {term.term}
                  </h2>
                  <span
                    className={`text-2xl ${langMeta.cssClass} text-[#d4af37] tracking-wider select-text`}
                    dir={langMeta.isRtl ? 'rtl' : 'ltr'}
                  >
                    {term.originalScript}
                  </span>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-1 rounded-lg text-[#a48c68] hover:text-white hover:bg-[#25201a] transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          );
        })()}

        {/* Literal Meaning */}
        <div className="mt-4 p-3 rounded-lg bg-[#201a14] border border-[#a48c68]/20">
          <div className="text-xs uppercase tracking-wider text-[#a48c68] font-semibold flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#c99738]" />
            Literal Definition
          </div>
          <p className="mt-1 text-sm font-medium text-[#f5d77f]">
            {term.literalMeaning}
          </p>
        </div>

        {/* Etymology */}
        <div className="mt-4 space-y-1.5">
          <h4 className="text-xs uppercase tracking-wider text-[#a48c68] font-semibold">
            Linguistic Etymology &amp; Morphology
          </h4>
          <p className="text-sm text-[#c8beaf] leading-relaxed">
            {term.etymology}
          </p>
        </div>

        {/* Scholarly Analysis */}
        <div className="mt-4 space-y-1.5">
          <h4 className="text-xs uppercase tracking-wider text-[#a48c68] font-semibold flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5 text-[#c99738]" />
            Scholarly Exegesis &amp; Ancient Translations
          </h4>
          <div className="p-3.5 rounded-lg bg-[#141210] border border-[#2e2720] text-sm text-[#dfd7ca] leading-relaxed">
            {term.scholarlyNotes}
          </div>
        </div>

        {/* Primary Occurrences */}
        <div className="mt-4 space-y-1.5">
          <h4 className="text-xs uppercase tracking-wider text-[#a48c68] font-semibold">
            Key Textual Occurrences
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {term.occurrences.map((occ, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded bg-[#201a14] text-xs font-mono text-[#e0cfb8] border border-[#a48c68]/30"
              >
                {occ}
              </span>
            ))}
          </div>
        </div>

        {/* Related Terms */}
        {term.relatedTerms && term.relatedTerms.length > 0 && (
          <div className="mt-5 pt-4 border-t border-[#362f27] space-y-2">
            <h4 className="text-xs uppercase tracking-wider text-[#a48c68] font-semibold flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-[#c99738]" />
              Related Ancient Terms
            </h4>
            <div className="flex flex-wrap gap-2">
              {term.relatedTerms.map(relId => {
                const rel = ancientTerms.find(t => t.id === relId);
                if (!rel) return null;
                return (
                  <button
                    key={relId}
                    onClick={() => onSelectRelatedTerm?.(relId)}
                    className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#25201a] hover:bg-[#322a21] border border-[#c99738]/30 text-xs text-[#f5d77f] font-medium transition"
                  >
                    <span>{rel.term}</span>
                    <span className="text-[10px] text-[#a48c68] font-mono">({rel.language})</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        <div className="mt-6 pt-3 border-t border-[#362f27] flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-[#25201a] hover:bg-[#322a21] text-xs font-semibold text-[#d4c3aa] transition"
          >
            Close Dictionary
          </button>
        </div>
      </div>
    </div>
  );
};

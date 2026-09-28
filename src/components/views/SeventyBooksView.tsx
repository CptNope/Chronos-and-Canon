import React, { useState } from 'react';
import { seventyBooksCollection, SeventyBookCandidate } from '../../data/seventyBooks';
import { Scroll, AlertTriangle, BookOpen, Sparkles, Filter, ShieldCheck, CheckCircle } from 'lucide-react';

interface SeventyBooksViewProps {
  onSelectCandidateText?: (textId: string) => void;
}

export const SeventyBooksView: React.FC<SeventyBooksViewProps> = ({ onSelectCandidateText }) => {
  const [selectedGenre, setSelectedGenre] = useState<string>('ALL');
  const [activeCandidateId, setActiveCandidateId] = useState<string>(seventyBooksCollection.candidates[0].id);

  const genres = ['ALL', 'Apocalyptic', 'Priestly / Halakhic', 'Angelology / Liturgy', 'Patriarchal Testament', 'Esoteric Wisdom', 'Calendrical / Astronomical'];

  const filteredCandidates = selectedGenre === 'ALL'
    ? seventyBooksCollection.candidates
    : seventyBooksCollection.candidates.filter(c => c.genre === selectedGenre);

  const activeCandidate = seventyBooksCollection.candidates.find(c => c.id === activeCandidateId) || seventyBooksCollection.candidates[0];

  return (
    <div className="space-y-6">
      {/* Header and Rigorous Disclaimer */}
      <div className="p-6 md:p-8 rounded-2xl bg-[#161311] border border-[#a48c68]/20 shadow-2xl space-y-4">
        <div className="flex items-center gap-2 text-xs font-semibold text-[#c99738] uppercase tracking-wider">
          <Scroll className="w-4 h-4" />
          Second Temple Esoteric Library
        </div>

        <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2">
          <h1 className="text-2xl md:text-4xl font-bold font-display text-[#f5d77f]">
            {seventyBooksCollection.title}
          </h1>
          <span className="text-xs font-mono text-[#a48c68]">
            Source: {seventyBooksCollection.biblicalSource}
          </span>
        </div>

        {/* 2 Esdras 14 Exegesis Box */}
        <div className="p-4 rounded-xl bg-[#201a14] border border-[#3b3226] text-xs font-serif italic text-[#e8e2d5] leading-relaxed">
          "{seventyBooksCollection.passageExegesis}"
        </div>

        {/* Mandatory Explicit Disclaimer */}
        <div className="p-4 rounded-xl bg-amber-950/30 border border-amber-600/40 text-amber-200 text-xs leading-relaxed space-y-1.5">
          <div className="flex items-center gap-2 font-bold uppercase tracking-wider text-amber-400">
            <AlertTriangle className="w-4 h-4 text-amber-400 flex-shrink-0" />
            Scholarly Disclaimer: Historical Reconstruction &amp; Exploratory Hypothesis
          </div>
          <p>
            {seventyBooksCollection.scholarlyDisclaimer}
          </p>
        </div>

        <p className="text-xs text-[#b8ad9e] leading-relaxed">
          {seventyBooksCollection.publicCanonNote}
        </p>

        {/* Genre Filter Pills */}
        <div className="pt-2 flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
          {genres.map(genre => (
            <button
              key={genre}
              onClick={() => setSelectedGenre(genre)}
              className={`px-3 py-1 rounded-full whitespace-nowrap transition ${
                selectedGenre === genre
                  ? 'bg-[#c99738]/20 border border-[#c99738] text-[#f5d77f] font-semibold'
                  : 'bg-[#1e1a16] border border-[#322a20] text-[#a48c68] hover:border-[#63533e]'
              }`}
            >
              {genre}
            </button>
          ))}
        </div>
      </div>

      {/* Main Grid: Candidate Books (Left) + Candidate Deep Dive (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Candidate List */}
        <div className="lg:col-span-5 space-y-2 max-h-[750px] overflow-y-auto pr-1">
          <div className="text-xs uppercase tracking-wider text-[#a48c68] font-semibold px-2 mb-2 flex items-center justify-between">
            <span>Exploratory Candidates ({filteredCandidates.length})</span>
            <span className="text-[10px] text-[#c99738]">Second Temple Corpus</span>
          </div>

          {filteredCandidates.map(candidate => {
            const isSelected = candidate.id === activeCandidate.id;
            return (
              <div
                key={candidate.id}
                onClick={() => setActiveCandidateId(candidate.id)}
                className={`p-3.5 rounded-xl cursor-pointer border transition text-left space-y-1 ${
                  isSelected
                    ? 'bg-[#221c16] border-[#c99738] shadow-md'
                    : 'bg-[#161311] border-[#2c251e] hover:border-[#4d4032] hover:bg-[#1a1613]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-[#2b241c] text-[#c99738] border border-[#a48c68]/20">
                    {candidate.genre}
                  </span>
                  <span className="text-[11px] font-mono text-[#8e806e]">
                    {candidate.approximateDateBCE}
                  </span>
                </div>

                <h3 className={`text-base font-semibold font-display mt-1 ${isSelected ? 'text-[#f5d77f]' : 'text-[#e8e2d5]'}`}>
                  {candidate.title}
                </h3>

                {candidate.hebrewOrAramaicName && (
                  <div className="text-xs font-serif text-[#d4af37]/80" dir="rtl">
                    {candidate.hebrewOrAramaicName}
                  </div>
                )}

                <p className="text-xs text-[#a49989] line-clamp-2 mt-1 leading-relaxed">
                  {candidate.rationaleForInclusion}
                </p>
              </div>
            );
          })}
        </div>

        {/* Right Candidate Dossier */}
        <div className="lg:col-span-7 space-y-6">
          <div className="p-6 rounded-2xl bg-[#161311] border border-[#a48c68]/30 shadow-xl space-y-5 text-left">
            <div className="pb-3 border-b border-[#2d251d]">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase px-2.5 py-0.5 rounded bg-[#201a14] text-[#c99738] border border-[#c99738]/30">
                  {activeCandidate.genre}
                </span>
                <span className="text-xs font-mono text-[#8e806e]">
                  {activeCandidate.approximateDateBCE}
                </span>
              </div>

              <h2 className="text-2xl font-bold font-display text-[#f5d77f] mt-2">
                {activeCandidate.title}
              </h2>

              {activeCandidate.hebrewOrAramaicName && (
                <div className="text-lg font-serif text-[#d4af37] mt-1" dir="rtl">
                  {activeCandidate.hebrewOrAramaicName}
                </div>
              )}
            </div>

            {/* Why This Exemplifies "Books for the Wise" */}
            <div className="space-y-2">
              <h4 className="text-xs uppercase tracking-wider font-semibold text-[#c99738] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Rationale for Classification as Esoteric / Initiatory Work
              </h4>
              <div className="p-4 rounded-xl bg-[#1b1713] border border-[#2b241c] text-xs text-[#ded5c7] leading-relaxed">
                {activeCandidate.rationaleForInclusion}
              </div>
            </div>

            {/* Manuscript Witnesses */}
            <div className="space-y-1.5 pt-2 border-t border-[#29221b]">
              <h4 className="text-xs uppercase tracking-wider font-semibold text-[#a48c68]">
                Archaeological &amp; Manuscript Witnesses
              </h4>
              <p className="text-xs font-mono text-[#b8ad9e]">
                {activeCandidate.manuscriptWitnesses}
              </p>
            </div>

            {/* Core Thematic Pillars */}
            <div className="space-y-2 pt-2 border-t border-[#29221b]">
              <h4 className="text-xs uppercase tracking-wider font-semibold text-[#60a5fa] flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5" />
                Core Esoteric Themes
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {activeCandidate.coreThemes.map((theme, i) => (
                  <div key={i} className="p-2.5 rounded-lg bg-[#201a14] border border-[#382f23] text-xs text-[#e8e2d5] font-serif">
                    &bull; {theme}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

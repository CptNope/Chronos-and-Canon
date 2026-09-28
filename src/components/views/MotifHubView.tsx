import React, { useState } from 'react';
import { motifs } from '../../data/motifs';
import { Motif } from '../../types';
import { Layers, Sparkles, BookOpen, Globe, HelpCircle } from 'lucide-react';

export const MotifHubView: React.FC = () => {
  const [selectedMotifId, setSelectedMotifId] = useState<string>(motifs[0].id);
  const [categoryFilter, setCategoryFilter] = useState<string>('ALL');

  const selectedMotif = motifs.find(m => m.id === selectedMotifId) || motifs[0];

  const categories = ['ALL', 'PRIMEVAL HISTORY', 'DIVINE BEINGS', 'COSMOLOGY', 'ESCHATOLOGY', 'RITUAL & WISDOM', 'SACRED SPACE'];

  const filteredMotifs = categoryFilter === 'ALL'
    ? motifs
    : motifs.filter(m => m.category === categoryFilter);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="p-6 rounded-2xl bg-[#161311] border border-[#a48c68]/20 shadow-xl space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#c99738] uppercase tracking-wider">
              <Layers className="w-4 h-4" />
              Comparative Mythology &amp; Cross-Cultural Motifs
            </div>
            <h1 className="text-2xl md:text-3xl font-bold font-display text-[#f5d77f] mt-1">
              Ancient Motif Hub &amp; Archetypes
            </h1>
            <p className="text-sm text-[#b8ad9e] mt-1 max-w-3xl">
              Examine shared patterns across ancient civilizations—from Great Floods and Chaoskampf to Watcher rebellions, cosmic trees, and divine councils—while maintaining critical boundary distinctions.
            </p>
          </div>
        </div>

        {/* Category Filters */}
        <div className="pt-2 flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setCategoryFilter(cat)}
              className={`px-3 py-1 rounded-full whitespace-nowrap transition ${
                categoryFilter === cat
                  ? 'bg-[#c99738]/20 border border-[#c99738] text-[#f5d77f] font-semibold'
                  : 'bg-[#1e1a16] border border-[#322a20] text-[#a48c68] hover:border-[#63533e]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Main Grid: Motif Selector (Left) + Detailed Comparative Analysis (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Motif Selector List */}
        <div className="lg:col-span-4 space-y-2 max-h-[700px] overflow-y-auto pr-1">
          <div className="text-xs uppercase tracking-wider text-[#a48c68] font-semibold px-2 mb-2">
            Catalogued Motifs ({filteredMotifs.length})
          </div>
          {filteredMotifs.map(motif => {
            const isSelected = motif.id === selectedMotif.id;
            return (
              <div
                key={motif.id}
                onClick={() => setSelectedMotifId(motif.id)}
                className={`p-3.5 rounded-xl cursor-pointer border transition text-left ${
                  isSelected
                    ? 'bg-[#221c16] border-[#c99738] shadow-md'
                    : 'bg-[#161311] border-[#2c251e] hover:border-[#4d4032] hover:bg-[#1a1613]'
                }`}
              >
                <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-[#2b241c] text-[#c99738] border border-[#a48c68]/20">
                  {motif.category}
                </span>
                <h3 className={`text-base font-semibold font-display mt-1.5 ${isSelected ? 'text-[#f5d77f]' : 'text-[#e8e2d5]'}`}>
                  {motif.name}
                </h3>
                <p className="text-xs text-[#a49989] line-clamp-2 mt-1 leading-relaxed">
                  {motif.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Detailed Motif Study Dossier */}
        <div className="lg:col-span-8 space-y-6">
          <div className="p-6 rounded-2xl bg-[#161311] border border-[#a48c68]/30 shadow-xl space-y-5 text-left">
            <div>
              <span className="text-xs font-bold uppercase px-2.5 py-0.5 rounded bg-[#201a14] text-[#c99738] border border-[#c99738]/30">
                {selectedMotif.category} &bull; Comparative Archetype
              </span>
              <h2 className="text-2xl md:text-3xl font-bold font-display text-[#f5d77f] mt-1.5">
                {selectedMotif.name}
              </h2>
              <p className="text-sm text-[#ded5c7] leading-relaxed mt-2">
                {selectedMotif.description}
              </p>
            </div>

            {/* Biblical & Jewish Occurrences */}
            <div className="space-y-2 pt-3 border-t border-[#2d251d]">
              <h4 className="text-xs uppercase tracking-wider font-semibold text-[#c99738] flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5" />
                Biblical, Second Temple &amp; Jewish Textual Witnesses
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedMotif.biblicalParallels.map((ref, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded bg-[#201a14] border border-[#3b3226] text-xs font-mono text-[#e8e2d5]"
                  >
                    {ref}
                  </span>
                ))}
              </div>
            </div>

            {/* Cross-Cultural Occurrences */}
            <div className="space-y-2 pt-3 border-t border-[#2d251d]">
              <h4 className="text-xs uppercase tracking-wider font-semibold text-[#60a5fa] flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5" />
                Ancient Near Eastern &amp; Global Comparative Parallels
              </h4>
              <div className="space-y-2">
                {selectedMotif.crossCulturalParallels.map((par, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-[#1b1713] border border-[#2b241c] text-xs text-[#ded5c7] flex items-start gap-2">
                    <span className="text-[#c99738] font-bold">&bull;</span>
                    <span>{par}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Critical Scholarly Debate & Methodological Boundary */}
            <div className="p-4 rounded-xl bg-[#14120f] border border-[#3a3025] space-y-2">
              <div className="text-xs uppercase tracking-wider font-semibold text-[#f5d77f] flex items-center gap-1.5">
                <HelpCircle className="w-3.5 h-3.5 text-[#c99738]" />
                Evidentiary Limits &amp; Scholarly Consensus
              </div>
              <p className="text-xs text-[#c8beaf] leading-relaxed">
                {selectedMotif.scholarlyDebate}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

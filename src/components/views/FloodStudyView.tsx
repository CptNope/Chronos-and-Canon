import React, { useState } from 'react';
import { passages } from '../../data/passages';
import { EvidenceBadge } from '../common/EvidenceBadge';
import { Waves, Sparkles, BookOpen, Layers, CheckCircle } from 'lucide-react';

interface FloodStudyViewProps {
  onOpenCompare?: (passageIds: string[]) => void;
}

export const FloodStudyView: React.FC<FloodStudyViewProps> = ({ onOpenCompare }) => {
  const floodPassages = [
    {
      id: 'gilgamesh_tablet_11_flood',
      tradition: 'Mesopotamian (Babylonian)',
      work: 'Epic of Gilgamesh XI',
      hero: 'Utnapishtim',
      vessel: 'The Great Ship (eleppu) pitched inside and out',
      mountain: 'Mount Nimush (Nisir)',
      birds: 'Dove, Swallow, Raven',
      divineMotive: 'Enlil\'s council wrath; Enki secretly warns Utnapishtim',
      evidenceToGenesis: 'STRONG (Textual dependence / shared Near Eastern source)'
    },
    {
      id: 'atrahasis_tablet_3_flood',
      tradition: 'Mesopotamian (Old Babylonian)',
      work: 'Epic of Atrahasis III',
      hero: 'Atrahasis ("Exceedingly Wise")',
      vessel: 'Reed boat pitched with bitumen',
      mountain: 'Mesopotamian highlands',
      birds: 'Not preserved on broken tablet column',
      divineMotive: 'Enlil disturbed by deafening human noise/overpopulation',
      evidenceToGenesis: 'STRONG (Narrative prototype)'
    },
    {
      id: 'shatapatha_brahmana_flood',
      tradition: 'Vedic / Hindu',
      work: 'Shatapatha Brahmana I.8.1',
      hero: 'King Manu',
      vessel: 'Ship tied with rope to the horn of the fish avatar Matsya',
      mountain: 'The Northern Mountain (Himalayas)',
      birds: 'None',
      divineMotive: 'Cosmic world age renewal at the close of Manvantara',
      evidenceToGenesis: 'COMPARATIVE (Independent Eurasian motif)'
    },
    {
      id: 'popol_vuh_resin_flood',
      tradition: 'Maya (Mesoamerican)',
      work: 'Popol Vuh, Part 1',
      hero: 'None (Total destruction of wooden people)',
      vessel: 'No vessel; animals and kitchen pots revolt against mankind',
      mountain: 'N/A',
      birds: 'None',
      divineMotive: 'Wooden people had no hearts, no minds, and did not praise Heart of Sky',
      evidenceToGenesis: 'COMPARATIVE (Independent New World creation epoch)'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="p-6 md:p-8 rounded-2xl bg-[#161311] border border-[#a48c68]/20 shadow-2xl space-y-4">
        <div className="flex items-center gap-2 text-xs font-semibold text-[#c99738] uppercase tracking-wider">
          <Waves className="w-4 h-4" />
          Flagship Comparative Study
        </div>
        <h1 className="text-2xl md:text-4xl font-bold font-display text-[#f5d77f]">
          Near Eastern &amp; Global Flood Traditions
        </h1>
        <p className="text-sm text-[#ded5c7] max-w-4xl leading-relaxed">
          Compare Genesis 6–9 with its documented ancient Near Eastern precursors (Gilgamesh Tablet XI, Atrahasis) and distinguish genuine historical-literary dependence from independent cross-cultural deluge motifs (Vedic Manu, Greek Deucalion, Maya Popol Vuh).
        </p>

        {onOpenCompare && (
          <div className="pt-2">
            <button
              onClick={() => onOpenCompare(['gilgamesh_tablet_11_flood', 'atrahasis_tablet_3_flood', 'shatapatha_brahmana_flood', 'popol_vuh_resin_flood'])}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#c99738] text-[#12100e] text-xs font-bold hover:bg-[#dbab4c] transition shadow-md"
            >
              <BookOpen className="w-4 h-4" />
              <span>Launch 4-Way Side-by-Side Flood Text Comparison</span>
            </button>
          </div>
        )}
      </div>

      {/* Comparative Analytical Table */}
      <div className="p-6 rounded-2xl bg-[#161311] border border-[#a48c68]/30 shadow-xl space-y-4 overflow-x-auto text-left">
        <h3 className="text-lg font-bold font-display text-[#f5d77f]">
          Systematic Narrative Comparison Matrix
        </h3>

        <table className="w-full text-left text-xs border-collapse min-w-[700px]">
          <thead>
            <tr className="border-b border-[#362f27] text-[#c99738] font-mono uppercase text-[11px]">
              <th className="py-2.5 px-3">Tradition &amp; Work</th>
              <th className="py-2.5 px-3">Survivor / Hero</th>
              <th className="py-2.5 px-3">Vessel Construction</th>
              <th className="py-2.5 px-3">Landing Peak</th>
              <th className="py-2.5 px-3">Bird Testing Sequence</th>
              <th className="py-2.5 px-3">Relationship to Genesis</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#241e17] text-[#ded5c7]">
            {/* Genesis Reference Row */}
            <tr className="bg-[#201a14]/60 font-medium">
              <td className="py-3 px-3">
                <div className="font-bold text-[#f5d77f]">Genesis 6–9 (Hebrew Bible)</div>
                <div className="text-[10px] text-[#8e806e]">ca. 6th–5th c. BCE</div>
              </td>
              <td className="py-3 px-3">Noah (righteous in his generation)</td>
              <td className="py-3 px-3">Tevah (ark) of gopher wood, pitched inside and out (kfr)</td>
              <td className="py-3 px-3">Mountains of Ararat</td>
              <td className="py-3 px-3 font-mono text-[11px]">Raven &rarr; Dove &rarr; Dove (olive leaf)</td>
              <td className="py-3 px-3"><span className="text-emerald-400 font-bold">Standard Text</span></td>
            </tr>

            {floodPassages.map(fp => (
              <tr key={fp.id} className="hover:bg-[#1c1814] transition">
                <td className="py-3 px-3">
                  <div className="font-semibold text-[#e8e2d5]">{fp.work}</div>
                  <div className="text-[10px] text-[#a48c68] font-mono">{fp.tradition}</div>
                </td>
                <td className="py-3 px-3">{fp.hero}</td>
                <td className="py-3 px-3">{fp.vessel}</td>
                <td className="py-3 px-3">{fp.mountain}</td>
                <td className="py-3 px-3 font-mono text-[11px]">{fp.birds}</td>
                <td className="py-3 px-3">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${
                    fp.evidenceToGenesis.startsWith('STRONG')
                      ? 'bg-blue-950/70 border-blue-600/40 text-blue-300'
                      : 'bg-amber-950/70 border-amber-600/40 text-amber-300'
                  }`}>
                    {fp.evidenceToGenesis.split('(')[0]}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Methodological Takeaway */}
      <div className="p-6 rounded-2xl bg-[#161311] border border-[#a48c68]/30 shadow-xl space-y-3 text-left">
        <h3 className="text-base font-bold font-display text-[#f5d77f]">
          Scholarly Synthesis: Diffusion vs. Convergent Motif
        </h3>
        <p className="text-xs text-[#c8beaf] leading-relaxed">
          The Mesopotamian accounts (Atrahasis and Gilgamesh XI) share specific structural details with Genesis (bitumen pitch, exact cubit ratios, bird dispatching, mountain landing, aromatic sacrifice) that establish demonstrable literary interaction within the fertile crescent. In contrast, the Vedic story of Manu and the Maya Popol Vuh resin deluge illustrate how riverine topographies and cosmological age cycles independently generate flood motifs worldwide without requiring common historical eyewitness descent.
        </p>
      </div>
    </div>
  );
};

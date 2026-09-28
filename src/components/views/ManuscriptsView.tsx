import React, { useState } from 'react';
import { manuscripts } from '../../data/manuscripts';
import { texts } from '../../data/texts';
import { Manuscript } from '../../types';
import { getLanguageMeta } from '../../utils/scriptHelper';
import { FileArchive, ShieldAlert, CheckCircle, ExternalLink, Calendar, MapPin, Sparkles, Languages } from 'lucide-react';

interface ManuscriptsViewProps {
  onSelectAssociatedText?: (textId: string) => void;
}

export const ManuscriptsView: React.FC<ManuscriptsViewProps> = ({ onSelectAssociatedText }) => {
  const [selectedManuscriptId, setSelectedManuscriptId] = useState<string>(manuscripts[0].id);

  const selectedMS = manuscripts.find(m => m.id === selectedManuscriptId) || manuscripts[0];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="p-6 md:p-8 rounded-2xl bg-[#161311] border border-[#a48c68]/20 shadow-2xl space-y-4">
        <div className="flex items-center gap-2 text-xs font-semibold text-[#c99738] uppercase tracking-wider">
          <FileArchive className="w-4 h-4" />
          Paleography, Epigraphy &amp; Physical Witnesses
        </div>
        <h1 className="text-2xl md:text-4xl font-bold font-display text-[#f5d77f]">
          Surviving Ancient Manuscripts &amp; Physical Evidence
        </h1>
        <p className="text-sm text-[#b8ad9e] max-w-3xl leading-relaxed">
          Examine the authentic physical witnesses upon which ancient textual scholarship rests: Dead Sea Scrolls parchment, cuneiform clay tablets, ancient papyri, and medieval codices.
        </p>

        {/* Legal / Copyright Distinction Box */}
        <div className="p-4 rounded-xl bg-amber-950/25 border border-amber-600/30 text-amber-200/90 text-xs leading-relaxed space-y-1">
          <div className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-amber-400">
            <ShieldAlert className="w-4 h-4 text-amber-400 flex-shrink-0" />
            Copyright &amp; Intellectual Property Integrity Protocol
          </div>
          <p>
            Ancient inscriptions, clay tablets, and biblical manuscripts are universally in the public domain. However, modern scholarly editions, critical apparatuses, conjectural reconstructions, infrared multispectral photographs, and modern copyrighted English translations are protected by copyright. This platform strictly respects intellectual property laws by using authentic public-domain and academic open-access translations.
          </p>
        </div>
      </div>

      {/* Main Grid: Manuscript List (Left) + Detailed Dossier (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Manuscript List */}
        <div className="lg:col-span-5 space-y-2 max-h-[750px] overflow-y-auto pr-1">
          <div className="text-xs uppercase tracking-wider text-[#a48c68] font-semibold px-2 mb-2 flex items-center justify-between">
            <span>Catalogued Artifacts ({manuscripts.length})</span>
            <span className="text-[10px] text-[#c99738]">Physical Artifacts</span>
          </div>

          {manuscripts.map(ms => {
            const isSelected = ms.id === selectedMS.id;
            return (
              <div
                key={ms.id}
                onClick={() => setSelectedManuscriptId(ms.id)}
                className={`p-3.5 rounded-xl cursor-pointer border transition text-left space-y-1 ${
                  isSelected
                    ? 'bg-[#221c16] border-[#c99738] shadow-md'
                    : 'bg-[#161311] border-[#2c251e] hover:border-[#4d4032] hover:bg-[#1a1613]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold font-mono px-2 py-0.5 rounded bg-[#2a2219] text-[#c99738]">
                    {ms.siglumOrDesignation}
                  </span>
                  <span className="text-[11px] font-mono text-[#8e806e]">
                    {ms.material}
                  </span>
                </div>

                <h3 className={`text-base font-semibold font-display mt-1 ${isSelected ? 'text-[#f5d77f]' : 'text-[#e8e2d5]'}`}>
                  {ms.name}
                </h3>

                <div className="text-xs text-[#a48c68]">
                  {ms.approximateDate} &bull; {ms.language}
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Manuscript Dossier */}
        <div className="lg:col-span-7 space-y-6">
          <div className="p-6 rounded-2xl bg-[#161311] border border-[#a48c68]/30 shadow-xl space-y-5 text-left">
            <div className="pb-3 border-b border-[#2d251d]">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded bg-[#201a14] text-[#c99738] border border-[#c99738]/30">
                  {selectedMS.siglumOrDesignation}
                </span>
                <span className="text-xs text-[#a48c68] font-mono">
                  {selectedMS.material}
                </span>
              </div>

              <h2 className="text-2xl font-bold font-display text-[#f5d77f] mt-2">
                {selectedMS.name}
              </h2>
            </div>

            {/* Quick Metadata Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-[#1b1713] border border-[#2b241c] space-y-1">
                <div className="text-[10px] uppercase font-bold text-[#c99738] flex items-center gap-1">
                  <Calendar className="w-3 h-3" /> Paleographical Date
                </div>
                <div className="text-[#e8e2d5] font-serif">{selectedMS.approximateDate}</div>
              </div>

              <div className="p-3 rounded-xl bg-[#1b1713] border border-[#2b241c] space-y-1">
                <div className="text-[10px] uppercase font-bold text-[#60a5fa] flex items-center gap-1">
                  <MapPin className="w-3 h-3" /> Archaeological Provenance
                </div>
                <div className="text-[#e8e2d5] font-serif">{selectedMS.provenance}</div>
              </div>

              {/* Language & Script */}
              {(() => {
                const langMeta = getLanguageMeta(selectedMS.language);
                return (
                  <div className="p-3 rounded-xl bg-[#1b1713] border border-[#2b241c] space-y-1 sm:col-span-2">
                    <div className="text-[10px] uppercase font-bold text-[#c99738] flex items-center gap-1">
                      <Languages className="w-3 h-3" /> Language &amp; Ancient Epigraphic Script
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-0.5 rounded text-[11px] font-semibold border ${langMeta.badgeBg} ${langMeta.badgeText}`}>
                        {selectedMS.language}
                      </span>
                      <span className="text-xs text-[#b8ad9e]">
                        Script: <strong className="text-[#f5d77f]">{langMeta.scriptName}</strong>
                      </span>
                      <span className="text-[10px] text-[#786c5c] font-mono lowercase">
                        ({langMeta.isRtl ? 'Right-to-Left' : 'Left-to-Right'})
                      </span>
                    </div>
                  </div>
                );
              })()}

              <div className="p-3 rounded-xl bg-[#1b1713] border border-[#2b241c] space-y-1 sm:col-span-2">
                <div className="text-[10px] uppercase font-bold text-[#a48c68]">
                  Current Repository
                </div>
                <div className="text-[#ded5c7]">{selectedMS.currentRepository}</div>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-1.5 pt-2 border-t border-[#29221b]">
              <h4 className="text-xs uppercase tracking-wider font-semibold text-[#c99738]">
                Historical &amp; Textual Significance
              </h4>
              <p className="text-xs text-[#ded5c7] leading-relaxed">
                {selectedMS.description}
              </p>
            </div>

            {/* Rights & Licensing Note */}
            <div className="p-3.5 rounded-xl bg-[#13110e] border border-[#29221b] text-[11px] text-[#a48c68] space-y-1">
              <div className="font-semibold uppercase tracking-wider text-[#d4af37] flex items-center gap-1">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                License &amp; Legal Permissions
              </div>
              <p>{selectedMS.licenseRightsNote}</p>
            </div>

            {/* Associated Texts */}
            <div className="space-y-2 pt-2 border-t border-[#29221b]">
              <h4 className="text-xs uppercase tracking-wider font-semibold text-[#a48c68]">
                Associated Canonical / Extracanonical Works
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedMS.associatedTexts.map(tId => {
                  const parentText = texts.find(t => t.id === tId);
                  return (
                    <button
                      key={tId}
                      onClick={() => onSelectAssociatedText?.(tId)}
                      className="px-3 py-1 rounded bg-[#201a14] hover:bg-[#2c241c] border border-[#a48c68]/30 text-xs text-[#f5d77f] font-medium transition"
                    >
                      {parentText?.title || tId}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

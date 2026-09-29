import React, { useState } from 'react';
import { passages } from '../../data/passages';
import { ancientTerms } from '../../data/terms';
import { EvidenceBadge } from '../common/EvidenceBadge';
import { AncientTermModal } from '../common/AncientTermModal';
import { useLanguage } from '../../i18n/LanguageContext';
import { Sparkles, ShieldCheck, ArrowRight, BookOpen, Layers, AlertTriangle, GitCompare } from 'lucide-react';

interface Genesis6StudyViewProps {
  onOpenCompare?: (passageIds: string[]) => void;
}

export const Genesis6StudyView: React.FC<Genesis6StudyViewProps> = ({ onOpenCompare }) => {
  const { t } = useLanguage();
  const [activeStep, setActiveStep] = useState<'BIBLICAL_CORE' | 'ENOCHIC_STREAM' | 'REPHAIM_UGARIT' | 'CROSS_CULTURAL'>('BIBLICAL_CORE');
  const [selectedTermId, setSelectedTermId] = useState<string | null>(null);

  const s = t.genesis6Study;

  return (
    <div className="space-y-6">
      <AncientTermModal
        termId={selectedTermId}
        onClose={() => setSelectedTermId(null)}
      />

      {/* Hero Header */}
      <div className="p-6 md:p-8 rounded-2xl bg-[#161311] border border-[#a48c68]/20 shadow-2xl space-y-4">
        <div className="flex items-center gap-2 text-xs font-semibold text-[#c99738] uppercase tracking-wider">
          <Sparkles className="w-4 h-4" />
          {s.badge}
        </div>
        <h1 className="text-2xl md:text-4xl font-bold font-display text-[#f5d77f]">
          {s.heroTitle}
        </h1>
        <p className="text-sm text-[#ded5c7] max-w-4xl leading-relaxed">
          {s.heroSubtitle}
        </p>

        {/* Tab Stepper */}
        <div className="pt-2 flex items-center gap-2 flex-wrap">
          <button
            onClick={() => setActiveStep('BIBLICAL_CORE')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition ${
              activeStep === 'BIBLICAL_CORE'
                ? 'bg-[#c99738] text-[#12100e] shadow-lg'
                : 'bg-[#201a14] border border-[#3b3226] text-[#a48c68] hover:text-[#e8e2d5]'
            }`}
          >
            {s.tab1}
          </button>
          <button
            onClick={() => setActiveStep('ENOCHIC_STREAM')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition ${
              activeStep === 'ENOCHIC_STREAM'
                ? 'bg-[#c99738] text-[#12100e] shadow-lg'
                : 'bg-[#201a14] border border-[#3b3226] text-[#a48c68] hover:text-[#e8e2d5]'
            }`}
          >
            {s.tab2}
          </button>
          <button
            onClick={() => setActiveStep('REPHAIM_UGARIT')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition ${
              activeStep === 'REPHAIM_UGARIT'
                ? 'bg-[#c99738] text-[#12100e] shadow-lg'
                : 'bg-[#201a14] border border-[#3b3226] text-[#a48c68] hover:text-[#e8e2d5]'
            }`}
          >
            {s.tab3}
          </button>
          <button
            onClick={() => setActiveStep('CROSS_CULTURAL')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition ${
              activeStep === 'CROSS_CULTURAL'
                ? 'bg-[#c99738] text-[#12100e] shadow-lg'
                : 'bg-[#201a14] border border-[#3b3226] text-[#a48c68] hover:text-[#e8e2d5]'
            }`}
          >
            {s.tab4}
          </button>
        </div>
      </div>

      {/* STEP 1: BIBLICAL CORE */}
      {activeStep === 'BIBLICAL_CORE' && (
        <div className="space-y-6 animate-fade-in text-left">
          <div className="p-6 rounded-2xl bg-[#161311] border border-[#a48c68]/30 shadow-xl space-y-4">
            <h2 className="text-xl font-bold font-display text-[#f5d77f]">
              {s.crucesTitle}
            </h2>
            <p className="text-sm text-[#ded5c7] leading-relaxed">
              {s.crucesSubtitle}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              {/* Sons of God */}
              <div
                onClick={() => setSelectedTermId('bene_haelohim')}
                className="p-4 rounded-xl bg-[#1b1713] border border-[#382e22] hover:border-[#c99738] cursor-pointer transition space-y-2"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold font-display text-[#f5d77f]">
                    בְּנֵי הָאֱלֹהִים (Bene ha-Elohim)
                  </span>
                  <span className="text-xs text-[#c99738] font-mono">{s.clickTerm}</span>
                </div>
                <p className="text-xs text-[#b8ad9e] leading-relaxed">
                  {s.sonsOfGodDesc}
                </p>
              </div>

              {/* Nephilim */}
              <div
                onClick={() => setSelectedTermId('nephilim')}
                className="p-4 rounded-xl bg-[#1b1713] border border-[#382e22] hover:border-[#c99738] cursor-pointer transition space-y-2"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold font-display text-[#f5d77f]">
                    הַנְּפִלִים (The Nephilim)
                  </span>
                  <span className="text-xs text-[#c99738] font-mono">{s.clickTerm}</span>
                </div>
                <p className="text-xs text-[#b8ad9e] leading-relaxed">
                  {s.nephilimDesc}
                </p>
              </div>

              {/* Gibborim */}
              <div
                onClick={() => setSelectedTermId('gibborim')}
                className="p-4 rounded-xl bg-[#1b1713] border border-[#382e22] hover:border-[#c99738] cursor-pointer transition space-y-2"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold font-display text-[#f5d77f]">
                    הַגִּבֹּרִים אֲשֶׁר מֵעוֹלָם (Gibborim of Old)
                  </span>
                  <span className="text-xs text-[#c99738] font-mono">{s.clickTerm}</span>
                </div>
                <p className="text-xs text-[#b8ad9e] leading-relaxed">
                  {s.gibborimDesc}
                </p>
              </div>

              {/* Men of Renown */}
              <div className="p-4 rounded-xl bg-[#1b1713] border border-[#382e22] space-y-2">
                <span className="text-sm font-bold font-display text-[#f5d77f]">
                  אַנְשֵׁי הַשֵּׁם (Anshei ha-Shem)
                </span>
                <p className="text-xs text-[#b8ad9e] leading-relaxed">
                  {s.ansheiHashemDesc}
                </p>
              </div>
            </div>

            <div className="pt-4 flex justify-end">
              <button
                onClick={() => setActiveStep('ENOCHIC_STREAM')}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#c99738] text-[#12100e] text-xs font-bold hover:bg-[#dbab4c] transition"
              >
                <span>{s.step2Btn}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* STEP 2: ENOCHIC STREAM & NEW TESTAMENT */}
      {activeStep === 'ENOCHIC_STREAM' && (
        <div className="space-y-6 animate-fade-in text-left">
          <div className="p-6 rounded-2xl bg-[#161311] border border-[#a48c68]/30 shadow-xl space-y-5">
            <h2 className="text-xl font-bold font-display text-[#f5d77f]">
              {s.step2Title}
            </h2>
            <p className="text-sm text-[#ded5c7] leading-relaxed">
              {s.step2Subtitle}
            </p>

            <div className="space-y-3">
              {/* Chain Node 1 */}
              <div className="p-4 rounded-xl bg-[#1c1814] border border-[#2e261e] space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold font-mono text-[#c99738]">1 Enoch 6–16 (Book of the Watchers)</span>
                  <EvidenceBadge level="DOCUMENTED" relationshipType="EXPANDED TRADITION" />
                </div>
                <p className="text-xs text-[#b8ad9e] leading-relaxed">
                  {s.enochDesc}
                </p>
              </div>

              {/* Chain Node 2 */}
              <div className="p-4 rounded-xl bg-[#1c1814] border border-[#2e261e] space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold font-mono text-[#60a5fa]">Dead Sea Scrolls Book of Giants (4Q530)</span>
                  <EvidenceBadge level="STRONG" relationshipType="EXPANDED TRADITION" />
                </div>
                <p className="text-xs text-[#b8ad9e] leading-relaxed">
                  {s.giantsBookDesc}
                </p>
              </div>

              {/* Chain Node 3 */}
              <div className="p-4 rounded-xl bg-[#1c1814] border border-[#2e261e] space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold font-mono text-[#34d399]">Epistle of Jude (v. 6, 14–15)</span>
                  <EvidenceBadge level="DOCUMENTED" relationshipType="DIRECT QUOTATION" />
                </div>
                <p className="text-xs text-[#b8ad9e] leading-relaxed">
                  {s.judeDesc}
                </p>
              </div>

              {/* Chain Node 4 */}
              <div className="p-4 rounded-xl bg-[#1c1814] border border-[#2e261e] space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold font-mono text-[#34d399]">2 Peter 2:4 (Angels Cast into Tartarus)</span>
                  <EvidenceBadge level="STRONG" relationshipType="TEXTUAL DEPENDENCE" />
                </div>
                <p className="text-xs text-[#b8ad9e] leading-relaxed">
                  {s.peterDesc}
                </p>
              </div>
            </div>

            <div className="pt-2 flex justify-between">
              <button
                onClick={() => setActiveStep('BIBLICAL_CORE')}
                className="px-4 py-2 rounded-xl bg-[#201a14] border border-[#3b3226] text-xs font-semibold text-[#a48c68] hover:text-[#e8e2d5]"
              >
                {s.backBtn}
              </button>
              <button
                onClick={() => setActiveStep('REPHAIM_UGARIT')}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#c99738] text-[#12100e] text-xs font-bold hover:bg-[#dbab4c] transition"
              >
                <span>{s.step3Btn}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* STEP 3: REPHAIM, ANAKIM & UGARITIC RPUM */}
      {activeStep === 'REPHAIM_UGARIT' && (
        <div className="space-y-6 animate-fade-in text-left">
          <div className="p-6 rounded-2xl bg-[#161311] border border-[#a48c68]/30 shadow-xl space-y-5">
            <h2 className="text-xl font-bold font-display text-[#f5d77f]">
              {s.step3Title}
            </h2>

            <div className="p-4 rounded-xl bg-[#201a14] border border-[#3b3226] space-y-2 text-xs text-[#ded5c7] leading-relaxed">
              <p>{s.step3Para1}</p>
              <p>{s.step3Para2}</p>
              <div className="p-3 rounded-lg bg-[#14120e] border border-[#2b241c] font-mono text-[#f5d77f]">
                {s.step3Quote}
              </div>
              <p>{s.step3Para3}</p>
            </div>

            <div className="pt-2 flex justify-between">
              <button
                onClick={() => setActiveStep('ENOCHIC_STREAM')}
                className="px-4 py-2 rounded-xl bg-[#201a14] border border-[#3b3226] text-xs font-semibold text-[#a48c68] hover:text-[#e8e2d5]"
              >
                {s.backBtn}
              </button>
              <button
                onClick={() => setActiveStep('CROSS_CULTURAL')}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#c99738] text-[#12100e] text-xs font-bold hover:bg-[#dbab4c] transition"
              >
                <span>{s.step4Btn}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* STEP 4: CROSS-CULTURAL COMPARATIVE RIGOR */}
      {activeStep === 'CROSS_CULTURAL' && (
        <div className="space-y-6 animate-fade-in text-left">
          <div className="p-6 rounded-2xl bg-[#161311] border border-[#a48c68]/30 shadow-xl space-y-5">
            <h2 className="text-xl font-bold font-display text-[#f5d77f]">
              {s.step4Title}
            </h2>

            {/* Crucial Methodological Warning */}
            <div className="p-4 rounded-xl bg-amber-950/30 border border-amber-600/40 text-amber-200 text-xs leading-relaxed space-y-1">
              <div className="flex items-center gap-2 font-bold uppercase tracking-wider text-amber-400">
                <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                {s.warningTitle}
              </div>
              <p>{s.warningText}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-[#1b1713] border border-[#2d251d] space-y-2">
                <EvidenceBadge level="COMPARATIVE" />
                <h4 className="text-sm font-bold font-display text-[#f5d77f] mt-1">
                  {s.greekTitansTitle}
                </h4>
                <p className="text-xs text-[#a49989] leading-relaxed">
                  {s.greekTitansDesc}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#1b1713] border border-[#2d251d] space-y-2">
                <EvidenceBadge level="COMPARATIVE" />
                <h4 className="text-sm font-bold font-display text-[#f5d77f] mt-1">
                  {s.norseJotnarTitle}
                </h4>
                <p className="text-xs text-[#a49989] leading-relaxed">
                  {s.norseJotnarDesc}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#1b1713] border border-[#2d251d] space-y-2">
                <EvidenceBadge level="STRONG" />
                <h4 className="text-sm font-bold font-display text-[#f5d77f] mt-1">
                  {s.apkalluTitle}
                </h4>
                <p className="text-xs text-[#a49989] leading-relaxed">
                  {s.apkalluDesc}
                </p>
              </div>
            </div>

            {onOpenCompare && (
              <div className="pt-4 border-t border-[#29221b] flex justify-end">
                <button
                  onClick={() => onOpenCompare(['gen_6_1_4', '1_enoch_6_1_6', 'deut_2_and_3', 'jude_6_and_14_15'])}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#c99738] text-[#12100e] text-xs font-bold hover:bg-[#dbab4c] transition shadow-lg"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>{s.compareBtn}</span>
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

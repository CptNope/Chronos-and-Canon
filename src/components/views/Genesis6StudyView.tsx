import React, { useState } from 'react';
import { passages } from '../../data/passages';
import { ancientTerms } from '../../data/terms';
import { EvidenceBadge } from '../common/EvidenceBadge';
import { AncientTermModal } from '../common/AncientTermModal';
import { Sparkles, ShieldCheck, ArrowRight, BookOpen, Layers, AlertTriangle, GitCompare } from 'lucide-react';

interface Genesis6StudyViewProps {
  onOpenCompare?: (passageIds: string[]) => void;
}

export const Genesis6StudyView: React.FC<Genesis6StudyViewProps> = ({ onOpenCompare }) => {
  const [activeStep, setActiveStep] = useState<'BIBLICAL_CORE' | 'ENOCHIC_STREAM' | 'REPHAIM_UGARIT' | 'CROSS_CULTURAL'>('BIBLICAL_CORE');
  const [selectedTermId, setSelectedTermId] = useState<string | null>(null);

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
          Flagship Interactive Case Study
        </div>
        <h1 className="text-2xl md:text-4xl font-bold font-display text-[#f5d77f]">
          Genesis 6:1–4, The Watchers &amp; The Giant Traditions
        </h1>
        <p className="text-sm text-[#ded5c7] max-w-4xl leading-relaxed">
          Explore the genesis of the "Sons of God" (bene ha-elohim), Nephilim, and "gibborim of renown", tracing their direct textual transmission into 1 Enoch, the Dead Sea Scrolls, and the New Testament, along with authentic West Semitic Rephaim archaeology and disciplined cross-cultural comparative paradigms.
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
            1. Genesis 6 Core Anatomy
          </button>
          <button
            onClick={() => setActiveStep('ENOCHIC_STREAM')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition ${
              activeStep === 'ENOCHIC_STREAM'
                ? 'bg-[#c99738] text-[#12100e] shadow-lg'
                : 'bg-[#201a14] border border-[#3b3226] text-[#a48c68] hover:text-[#e8e2d5]'
            }`}
          >
            2. Enochic Expansion &amp; NT Reception
          </button>
          <button
            onClick={() => setActiveStep('REPHAIM_UGARIT')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition ${
              activeStep === 'REPHAIM_UGARIT'
                ? 'bg-[#c99738] text-[#12100e] shadow-lg'
                : 'bg-[#201a14] border border-[#3b3226] text-[#a48c68] hover:text-[#e8e2d5]'
            }`}
          >
            3. Rephaim, Anakim &amp; Ugaritic rpum
          </button>
          <button
            onClick={() => setActiveStep('CROSS_CULTURAL')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition ${
              activeStep === 'CROSS_CULTURAL'
                ? 'bg-[#c99738] text-[#12100e] shadow-lg'
                : 'bg-[#201a14] border border-[#3b3226] text-[#a48c68] hover:text-[#e8e2d5]'
            }`}
          >
            4. Cross-Cultural Comparative Rigor
          </button>
        </div>
      </div>

      {/* STEP 1: BIBLICAL CORE */}
      {activeStep === 'BIBLICAL_CORE' && (
        <div className="space-y-6 animate-fade-in text-left">
          <div className="p-6 rounded-2xl bg-[#161311] border border-[#a48c68]/30 shadow-xl space-y-4">
            <h2 className="text-xl font-bold font-display text-[#f5d77f]">
              The Four Cruces of Genesis 6:1–4
            </h2>
            <p className="text-sm text-[#ded5c7] leading-relaxed">
              Genesis 6:1–4 is one of the most enigmatic fragments in biblical literature. Every phrase carries profound theological and linguistic baggage:
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
                  <span className="text-xs text-[#c99738] font-mono">Click Term</span>
                </div>
                <p className="text-xs text-[#b8ad9e] leading-relaxed">
                  Literally "sons of the divine powers". Throughout the Hebrew Bible (Job 1:6, 2:1, 38:7, Ps 82:6, Deut 32:8) and Ugaritic poetry (bn ʾil), this denotes celestial council members, not human aristocrats.
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
                  <span className="text-xs text-[#c99738] font-mono">Click Term</span>
                </div>
                <p className="text-xs text-[#b8ad9e] leading-relaxed">
                  Present on earth "in those days—and also afterward". Translated by the ancient Septuagint as γίγαντες (gigantes). Associated with ancient fallen warriors or terrifying superhuman beings.
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
                  <span className="text-xs text-[#c99738] font-mono">Click Term</span>
                </div>
                <p className="text-xs text-[#b8ad9e] leading-relaxed">
                  "The mighty men who were of old." Echoes the Mesopotamian heroic epithet for warrior champions of primeval antiquity like Gilgamesh and the Greek heroic age warriors.
                </p>
              </div>

              {/* Men of Renown */}
              <div className="p-4 rounded-xl bg-[#1b1713] border border-[#382e22] space-y-2">
                <span className="text-sm font-bold font-display text-[#f5d77f]">
                  אַנְשֵׁי הַשֵּׁם (Anshei ha-Shem)
                </span>
                <p className="text-xs text-[#b8ad9e] leading-relaxed">
                  "Men of name / renown." Indicates beings celebrated in antiquity for their fame and monumental deeds, whose memories were preserved in oral legend and epic poetry.
                </p>
              </div>
            </div>

            <div className="pt-4 flex justify-end">
              <button
                onClick={() => setActiveStep('ENOCHIC_STREAM')}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#c99738] text-[#12100e] text-xs font-bold hover:bg-[#dbab4c] transition"
              >
                <span>Step 2: Trace Enochic Transmission</span>
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
              From Genesis 6 to 1 Enoch, Jubilees, Jude &amp; 2 Peter
            </h2>
            <p className="text-sm text-[#ded5c7] leading-relaxed">
              How did the brief Genesis 6 vignette become the dominant cosmic paradigm of Second Temple Judaism and early Christianity?
            </p>

            <div className="space-y-3">
              {/* Chain Node 1 */}
              <div className="p-4 rounded-xl bg-[#1c1814] border border-[#2e261e] space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold font-mono text-[#c99738]">1 Enoch 6–16 (Book of the Watchers)</span>
                  <EvidenceBadge level="DOCUMENTED" relationshipType="EXPANDED TRADITION" />
                </div>
                <p className="text-xs text-[#b8ad9e] leading-relaxed">
                  Unpacks Genesis 6 into 200 angels descending on Mount Hermon led by Shemihazah and Asael. The giants (300 cubits tall) consume human labor and devour humanity.
                </p>
              </div>

              {/* Chain Node 2 */}
              <div className="p-4 rounded-xl bg-[#1c1814] border border-[#2e261e] space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold font-mono text-[#60a5fa]">Dead Sea Scrolls Book of Giants (4Q530)</span>
                  <EvidenceBadge level="STRONG" relationshipType="EXPANDED TRADITION" />
                </div>
                <p className="text-xs text-[#b8ad9e] leading-relaxed">
                  Presents the giants' inner terror. Fascinatingly names one of the giant sons <strong>Gilgamesh</strong>, directly incorporating the Mesopotamian epic king into Jewish lore!
                </p>
              </div>

              {/* Chain Node 3 */}
              <div className="p-4 rounded-xl bg-[#1c1814] border border-[#2e261e] space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold font-mono text-[#34d399]">Epistle of Jude (v. 6, 14–15)</span>
                  <EvidenceBadge level="DOCUMENTED" relationshipType="DIRECT QUOTATION" />
                </div>
                <p className="text-xs text-[#b8ad9e] leading-relaxed">
                  Explicitly quotes 1 Enoch 1:9 ("Behold, the Lord comes with ten thousands of his holy ones...") and alludes to the Watchers imprisoned in chains of darkness.
                </p>
              </div>

              {/* Chain Node 4 */}
              <div className="p-4 rounded-xl bg-[#1c1814] border border-[#2e261e] space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold font-mono text-[#34d399]">2 Peter 2:4 (Angels Cast into Tartarus)</span>
                  <EvidenceBadge level="STRONG" relationshipType="TEXTUAL DEPENDENCE" />
                </div>
                <p className="text-xs text-[#b8ad9e] leading-relaxed">
                  Applies the rare verb <em>tartaroō</em> (cast into Tartarus) to the sinning angels who were cast down before the flood of Noah.
                </p>
              </div>
            </div>

            <div className="pt-2 flex justify-between">
              <button
                onClick={() => setActiveStep('BIBLICAL_CORE')}
                className="px-4 py-2 rounded-xl bg-[#201a14] border border-[#3b3226] text-xs font-semibold text-[#a48c68] hover:text-[#e8e2d5]"
              >
                &larr; Back
              </button>
              <button
                onClick={() => setActiveStep('REPHAIM_UGARIT')}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#c99738] text-[#12100e] text-xs font-bold hover:bg-[#dbab4c] transition"
              >
                <span>Step 3: Rephaim &amp; Ugaritic Archaeology</span>
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
              Archaeological Confirmation: The Rephaim of Og &amp; Ugaritic rpum
            </h2>

            <div className="p-4 rounded-xl bg-[#201a14] border border-[#3b3226] space-y-2 text-xs text-[#ded5c7] leading-relaxed">
              <p>
                In the Hebrew Bible, the post-flood giants are called <strong>Anakim</strong> (Numbers 13:33) and <strong>Rephaim</strong> (Deuteronomy 2–3). Og of Bashan is called "the remnant of the Rephaim", reigning from Ashtaroth and Edrei.
              </p>
              <p>
                In 1961, French excavators at Ras Shamra (Ugarit) unearthed tablet <strong>KTU 1.108</strong>. The tablet invokes the divine ruler:
              </p>
              <div className="p-3 rounded-lg bg-[#14120e] border border-[#2b241c] font-mono text-[#f5d77f]">
                "May Rapiu, the King of Eternity, drink... the god who sits enthroned at Ashtaroth, the god who rules in Edrei!"
              </div>
              <p>
                The exact two royal capitals of the Rephaite Og in Deuteronomy 1:4 and Joshua 12:4! This proves that the biblical traditions of the Rephaim in Bashan preserved memories of Late Bronze Age Northwest Semitic ancestral warrior kings.
              </p>
            </div>

            <div className="pt-2 flex justify-between">
              <button
                onClick={() => setActiveStep('ENOCHIC_STREAM')}
                className="px-4 py-2 rounded-xl bg-[#201a14] border border-[#3b3226] text-xs font-semibold text-[#a48c68] hover:text-[#e8e2d5]"
              >
                &larr; Back
              </button>
              <button
                onClick={() => setActiveStep('CROSS_CULTURAL')}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#c99738] text-[#12100e] text-xs font-bold hover:bg-[#dbab4c] transition"
              >
                <span>Step 4: Cross-Cultural Discipline</span>
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
              Cross-Cultural Parallels: Anti-Conflation Discipline
            </h2>

            {/* Crucial Methodological Warning */}
            <div className="p-4 rounded-xl bg-amber-950/30 border border-amber-600/40 text-amber-200 text-xs leading-relaxed space-y-1">
              <div className="flex items-center gap-2 font-bold uppercase tracking-wider text-amber-400">
                <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                Mandatory Scholarly Rule: Do NOT Present Foreign Figures as "Nephilim"
              </div>
              <p>
                Popular literature often claims that Greek Titans, Heracles, Gilgamesh, or the Norse Jötnar "were Nephilim." The application strictly rejects this conflation. Unless direct historical or textual transmission is demonstrated (as between 1 Enoch and the Book of Giants), these represent distinct, independent cultural manifestations of a shared human archetype: bygone heroic ages, divine-mortal unions, and colossal primeval inhabitants.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-[#1b1713] border border-[#2d251d] space-y-2">
                <EvidenceBadge level="COMPARATIVE" />
                <h4 className="text-sm font-bold font-display text-[#f5d77f] mt-1">
                  Greek Demigods &amp; Titans
                </h4>
                <p className="text-xs text-[#a49989] leading-relaxed">
                  Hesiod's Theogony recounts Titans cast into Tartarus and demigods (hemitheoi) born of gods and mortal women. Unlike Hebrew polemics where these unions bring moral ruin, Greek myth celebrates them as civic founders.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#1b1713] border border-[#2d251d] space-y-2">
                <EvidenceBadge level="COMPARATIVE" />
                <h4 className="text-sm font-bold font-display text-[#f5d77f] mt-1">
                  Norse Jötnar (Giants)
                </h4>
                <p className="text-xs text-[#a49989] leading-relaxed">
                  In Völuspá, the Jötnar descend from the primordial giant Ymir. They represent raw, elemental forces of nature and cosmic opposition rather than angelic-human transgressive sexual hybridity.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#1b1713] border border-[#2d251d] space-y-2">
                <EvidenceBadge level="STRONG" />
                <h4 className="text-sm font-bold font-display text-[#f5d77f] mt-1">
                  Mesopotamian Apkallu
                </h4>
                <p className="text-xs text-[#a49989] leading-relaxed">
                  The pre-flood fish-sages (Apkallu) brought arts of civilization from Enki. 1 Enoch polemically inverts this tradition by transforming the sages into fallen Watchers whose illicit arts corrupted mankind.
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
                  <span>Launch 4-Way Genesis 6 Parallel Comparison</span>
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

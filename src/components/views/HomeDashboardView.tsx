import React from 'react';
import { AppView } from '../Navigation';
import { EvidenceBadge } from '../common/EvidenceBadge';
import {
  BookOpen,
  GitCompare,
  Network,
  Clock,
  Globe,
  Layers,
  Scroll,
  Sparkles,
  Waves,
  MessageSquare,
  ArrowRight,
  ShieldCheck,
  Award,
  ChevronRight,
  FileArchive,
  Compass,
  Library
} from 'lucide-react';

interface HomeDashboardViewProps {
  onNavigate: (view: AppView) => void;
  onOpenCompare: (passageIds: string[]) => void;
}

export const HomeDashboardView: React.FC<HomeDashboardViewProps> = ({
  onNavigate,
  onOpenCompare
}) => {
  const featuredConnections = [
    {
      id: 'feat_gen6_enoch',
      title: 'GENESIS 6 ↔ 1 ENOCH',
      subtitle: 'From the "sons of God" to the Watcher tradition on Mount Hermon',
      evidenceLevel: 'DOCUMENTED' as const,
      relationshipType: 'EXPANDED TRADITION' as const,
      description: 'The cryptic four-verse vignette of Genesis 6:1–4 is expanded in 1 Enoch into a full apocalyptic narrative detailing 200 fallen angels, illicit metallurgical and astronomical arts, and the devastating birth of giant offspring.',
      passageIds: ['gen_6_1_4', '1_enoch_6_1_6'],
      viewTarget: 'GENESIS_6' as AppView
    },
    {
      id: 'feat_jude_enoch',
      title: 'JUDE ↔ 1 ENOCH',
      subtitle: 'A New Testament author explicitly cites Enochic apocalyptic prophecy',
      evidenceLevel: 'DOCUMENTED' as const,
      relationshipType: 'DIRECT QUOTATION' as const,
      description: 'Jude 14–15 directly attributes a prophecy to "Enoch, the seventh from Adam" and quotes 1 Enoch 1:9 verbatim, alongside invoking the angels bound in everlasting chains under darkness (v. 6).',
      passageIds: ['jude_6_and_14_15', '1_enoch_1_9'],
      viewTarget: 'COMPARE' as AppView
    },
    {
      id: 'feat_flood_near_east',
      title: 'NOAH ↔ GILGAMESH ↔ ATRAHASIS',
      subtitle: 'Compare ancient Near Eastern Flood traditions & structural dependencies',
      evidenceLevel: 'STRONG' as const,
      relationshipType: 'TEXTUAL DEPENDENCE' as const,
      description: 'Genesis 6–9, Gilgamesh Tablet XI, and Atrahasis Tablet III share bitumen pitch caulking, exact cubit dimensional ratios, mountain grounding (Ararat / Nimush), bird release tests, and post-flood sacrifices.',
      passageIds: ['gilgamesh_tablet_11_flood', 'atrahasis_tablet_3_flood'],
      viewTarget: 'FLOOD' as AppView
    },
    {
      id: 'feat_rephaim_ugarit',
      title: 'NEPHILIM ↔ ANAKIM ↔ REPHAIM ↔ RPUM',
      subtitle: 'Trace biblical giant clans to Late Bronze Age Ugaritic royal ancestor cults',
      evidenceLevel: 'DOCUMENTED' as const,
      relationshipType: 'HISTORICAL CONNECTION' as const,
      description: 'Og king of Bashan, "the remnant of the Rephaim" ruling at Ashtaroth and Edrei, directly mirrors Ugaritic tablet KTU 1.108 where the divine Rapiu (rpu mlk) sits enthroned at Ashtaroth and Edrei.',
      passageIds: ['deut_2_and_3', 'joshua_12_4', 'ugaritic_ktu_1_108'],
      viewTarget: 'GENESIS_6' as AppView
    }
  ];

  const primaryModules: { view: AppView; title: string; desc: string; icon: React.ComponentType<{ className?: string }>; tag: string }[] = [
    {
      view: 'EXPLORE_TEXTS',
      title: 'Explore Ancient Texts',
      desc: 'Browse Hebrew Bible, Second Temple, Mesopotamian, Ugaritic, Classical, and Global works with tripartite chronological distinction.',
      icon: BookOpen,
      tag: 'Text Corpus'
    },
    {
      view: 'DIGITAL_LIBRARY',
      title: 'Public Texts & Digital Archives',
      desc: 'Direct links to free, open-access editions: multispectral Dead Sea Scrolls, British Museum cuneiform 3D scans, Sefaria, and Perseus.',
      icon: Library,
      tag: 'Open Access'
    },
    {
      view: 'COMPARE',
      title: 'Compare Passages',
      desc: 'Side-by-side parallel reader for 2 to 4 ancient texts with original languages, transliterations, and clickable linguistic terms.',
      icon: GitCompare,
      tag: 'Multi-Reader'
    },
    {
      view: 'GRAPH',
      title: 'Relationship Graph',
      desc: 'Dynamic interactive network mapping citations, expansions, and cross-cultural motifs with selectable evidentiary rigor.',
      icon: Network,
      tag: 'Evidence Map'
    },
    {
      view: 'TIMELINE',
      title: 'Chronological Stratigraphy',
      desc: 'Strict separation of Story Setting vs Estimated Date of Composition vs Earliest Physical Manuscript Witness.',
      icon: Clock,
      tag: 'Chronology'
    },
    {
      view: 'MAP',
      title: 'Ancient World Atlas',
      desc: 'Explore archaeological discovery sites, tablet finds, and ancient geographical centers from Qumran to Nineveh and Mesoamerica.',
      icon: Globe,
      tag: 'Geography'
    },
    {
      view: 'MOTIFS',
      title: 'Cross-Cultural Motifs',
      desc: 'Discover 25+ universal motifs: Chaoskampf, Sacred Mountains, Divine Councils, Cosmic Trees, and Heroic Ages.',
      icon: Layers,
      tag: 'Archetypes'
    },
    {
      view: 'SEVENTY_BOOKS',
      title: 'The 70 Books for the Wise',
      desc: 'Exploratory reconstruction of the 70 esoteric Second Temple apocalyptic works described in 2 Esdras 14.',
      icon: Scroll,
      tag: 'Special Collection'
    },
    {
      view: 'GENESIS_6',
      title: 'Genesis 6 / Watchers Study',
      desc: 'Flagship deep-dive connecting Sons of God, Nephilim, Anakim, Rephaim, Og of Bashan, Ugaritic rpum, Jude, and Hesiod.',
      icon: Sparkles,
      tag: 'Flagship Study'
    },
    {
      view: 'FLOOD',
      title: 'Great Flood Traditions',
      desc: 'Systematic comparative analysis of Genesis, Gilgamesh, Atrahasis, Vedic Manu, and Maya Popol Vuh deluge accounts.',
      icon: Waves,
      tag: 'Flagship Study'
    },
    {
      view: 'MANUSCRIPTS',
      title: 'Surviving Manuscripts',
      desc: 'Physical witnesses, paleography, dates, provenance, and copyright distinctions for Dead Sea Scrolls and ancient codices.',
      icon: FileArchive,
      tag: 'Paleography'
    },
    {
      view: 'ASSISTANT',
      title: 'AI Research Assistant',
      desc: 'Ask complex comparative questions grounded strictly in primary sources and peer-reviewed relationship evidence levels.',
      icon: MessageSquare,
      tag: 'AI Epigraphy'
    }
  ];

  return (
    <div className="space-y-10">
      {/* Hero Section */}
      <div className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-b from-[#1c1713] via-[#16120f] to-[#100e0c] border border-[#a48c68]/30 shadow-2xl overflow-hidden text-left">
        {/* Background Subtle Astrolabe Accent */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none opacity-10 flex items-center justify-center">
          <svg className="w-[500px] h-[500px]" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" fill="none" stroke="#f5d77f" strokeWidth="0.5" strokeDasharray="2,2" />
            <circle cx="50" cy="50" r="35" fill="none" stroke="#f5d77f" strokeWidth="0.75" />
            <circle cx="50" cy="50" r="25" fill="none" stroke="#f5d77f" strokeWidth="0.5" />
          </svg>
        </div>

        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2a2219] border border-[#c99738]/40 text-xs font-semibold text-[#f5d77f] uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5 text-[#c99738]" />
            Scholarly Comparative Textual Platform
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold font-display text-[#f5d77f] tracking-tight leading-tight">
            Investigate Ancient Textual Relationships for Yourself
          </h1>

          <p className="text-base sm:text-lg text-[#ded5c7] leading-relaxed font-serif">
            Discover direct literary dependence, shared Northwest Semitic roots, and cross-cultural archetypes across Hebrew Bible, Second Temple, Dead Sea Scrolls, Mesopotamian, Ugaritic, Classical, and Global traditions—with honest evidentiary classifications.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              onClick={() => onNavigate('GENESIS_6')}
              className="px-5 py-2.5 rounded-xl bg-[#c99738] hover:bg-[#dbab4c] text-[#12100e] text-xs sm:text-sm font-bold transition shadow-lg flex items-center gap-2"
            >
              <span>Explore Genesis 6 Flagship Study</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('GRAPH')}
              className="px-5 py-2.5 rounded-xl bg-[#201a14] hover:bg-[#2b241c] border border-[#a48c68]/40 text-[#f5d77f] text-xs sm:text-sm font-semibold transition"
            >
              Interactive Relationship Graph
            </button>
          </div>
        </div>
      </div>

      {/* Featured Comparative Connections */}
      <div className="space-y-4 text-left">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold font-display text-[#f5d77f]">
              Featured Comparative Discoveries
            </h2>
            <p className="text-xs text-[#a48c68]">
              High-impact textual connections demonstrating primary evidence levels
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {featuredConnections.map(feat => (
            <div
              key={feat.id}
              onClick={() => onOpenCompare(feat.passageIds)}
              className="p-6 rounded-2xl bg-[#151210] border border-[#a48c68]/25 hover:border-[#c99738]/60 cursor-pointer transition shadow-xl space-y-3 group"
            >
              <div className="flex items-center justify-between">
                <EvidenceBadge level={feat.evidenceLevel} relationshipType={feat.relationshipType} />
                <span className="text-xs text-[#c99738] group-hover:translate-x-1 transition-transform flex items-center gap-1 font-semibold">
                  Compare <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>

              <h3 className="text-lg font-bold font-display text-[#f5d77f] group-hover:text-white transition">
                {feat.title}
              </h3>

              <div className="text-xs font-semibold text-[#c8beaf]">
                {feat.subtitle}
              </div>

              <p className="text-xs text-[#a49989] leading-relaxed">
                {feat.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Core Research Modules Grid */}
      <div className="space-y-4 text-left">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold font-display text-[#f5d77f]">
            Research &amp; Exploration Modules
          </h2>
          <p className="text-xs text-[#a48c68]">
            Navigate directly to any section of the ancient textual database
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {primaryModules.map(mod => {
            const Icon = mod.icon;
            return (
              <div
                key={mod.view}
                onClick={() => onNavigate(mod.view)}
                className="p-5 rounded-2xl bg-[#161311] border border-[#2b241c] hover:border-[#c99738]/50 cursor-pointer transition hover:bg-[#1c1713] space-y-2 group shadow-md"
              >
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-lg bg-[#251e18] border border-[#a48c68]/30 flex items-center justify-center group-hover:border-[#c99738] transition">
                    <Icon className="w-4 h-4 text-[#c99738]" />
                  </div>
                  <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-[#201a14] text-[#a48c68]">
                    {mod.tag}
                  </span>
                </div>

                <h3 className="text-base font-bold font-display text-[#f5d77f] group-hover:text-white transition">
                  {mod.title}
                </h3>

                <p className="text-xs text-[#a49989] leading-relaxed line-clamp-2">
                  {mod.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

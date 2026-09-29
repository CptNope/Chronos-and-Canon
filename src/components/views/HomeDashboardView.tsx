import React from 'react';
import { AppView } from '../Navigation';
import { EvidenceBadge } from '../common/EvidenceBadge';
import { useLanguage } from '../../i18n/LanguageContext';
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
  const { t } = useLanguage();
  const featuredConnections = [
    {
      id: 'feat_gen6_enoch',
      title: t.featured.gen6Title,
      subtitle: t.featured.gen6Subtitle,
      evidenceLevel: 'DOCUMENTED' as const,
      relationshipType: 'EXPANDED TRADITION' as const,
      description: t.featured.gen6Desc,
      passageIds: ['gen_6_1_4', '1_enoch_6_1_6'],
      viewTarget: 'GENESIS_6' as AppView
    },
    {
      id: 'feat_jude_enoch',
      title: t.featured.judeTitle,
      subtitle: t.featured.judeSubtitle,
      evidenceLevel: 'DOCUMENTED' as const,
      relationshipType: 'DIRECT QUOTATION' as const,
      description: t.featured.judeDesc,
      passageIds: ['jude_6_and_14_15', '1_enoch_1_9'],
      viewTarget: 'COMPARE' as AppView
    },
    {
      id: 'feat_flood_near_east',
      title: t.featured.floodTitle,
      subtitle: t.featured.floodSubtitle,
      evidenceLevel: 'STRONG' as const,
      relationshipType: 'TEXTUAL DEPENDENCE' as const,
      description: t.featured.floodDesc,
      passageIds: ['gilgamesh_tablet_11_flood', 'atrahasis_tablet_3_flood'],
      viewTarget: 'FLOOD' as AppView
    },
    {
      id: 'feat_rephaim_ugarit',
      title: t.featured.rephaimTitle,
      subtitle: t.featured.rephaimSubtitle,
      evidenceLevel: 'DOCUMENTED' as const,
      relationshipType: 'HISTORICAL CONNECTION' as const,
      description: t.featured.rephaimDesc,
      passageIds: ['deut_2_and_3', 'joshua_12_4', 'ugaritic_ktu_1_108'],
      viewTarget: 'GENESIS_6' as AppView
    }
  ];

  const primaryModules: { view: AppView; title: string; desc: string; icon: React.ComponentType<{ className?: string }>; tag: string }[] = [
    {
      view: 'EXPLORE_TEXTS',
      title: t.modules.explore.title,
      desc: t.modules.explore.desc,
      icon: BookOpen,
      tag: t.modules.explore.tag
    },
    {
      view: 'DIGITAL_LIBRARY',
      title: t.modules.library.title,
      desc: t.modules.library.desc,
      icon: Library,
      tag: t.modules.library.tag
    },
    {
      view: 'COMPARE',
      title: t.modules.compare.title,
      desc: t.modules.compare.desc,
      icon: GitCompare,
      tag: t.modules.compare.tag
    },
    {
      view: 'GRAPH',
      title: t.modules.graph.title,
      desc: t.modules.graph.desc,
      icon: Network,
      tag: t.modules.graph.tag
    },
    {
      view: 'TIMELINE',
      title: t.modules.timeline.title,
      desc: t.modules.timeline.desc,
      icon: Clock,
      tag: t.modules.timeline.tag
    },
    {
      view: 'MAP',
      title: t.modules.map.title,
      desc: t.modules.map.desc,
      icon: Globe,
      tag: t.modules.map.tag
    },
    {
      view: 'MOTIFS',
      title: t.modules.motifs.title,
      desc: t.modules.motifs.desc,
      icon: Layers,
      tag: t.modules.motifs.tag
    },
    {
      view: 'SEVENTY_BOOKS',
      title: t.modules.seventyBooks.title,
      desc: t.modules.seventyBooks.desc,
      icon: Scroll,
      tag: t.modules.seventyBooks.tag
    },
    {
      view: 'GENESIS_6',
      title: t.modules.genesis6.title,
      desc: t.modules.genesis6.desc,
      icon: Sparkles,
      tag: t.modules.genesis6.tag
    },
    {
      view: 'FLOOD',
      title: t.modules.flood.title,
      desc: t.modules.flood.desc,
      icon: Waves,
      tag: t.modules.flood.tag
    },
    {
      view: 'MANUSCRIPTS',
      title: t.modules.manuscripts.title,
      desc: t.modules.manuscripts.desc,
      icon: FileArchive,
      tag: t.modules.manuscripts.tag
    },
    {
      view: 'ASSISTANT',
      title: t.modules.assistant.title,
      desc: t.modules.assistant.desc,
      icon: MessageSquare,
      tag: t.modules.assistant.tag
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
            {t.archiveBadge}
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold font-display text-[#f5d77f] tracking-tight leading-tight">
            {t.dashboard.heroTitle}
          </h1>

          <p className="text-base sm:text-lg text-[#ded5c7] leading-relaxed font-serif">
            {t.dashboard.heroSubtitle}
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              onClick={() => onNavigate('GENESIS_6')}
              className="px-5 py-2.5 rounded-xl bg-[#c99738] hover:bg-[#dbab4c] text-[#12100e] text-xs sm:text-sm font-bold transition shadow-lg flex items-center gap-2"
            >
              <span>{t.dashboard.exploreArchiveBtn}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('GRAPH')}
              className="px-5 py-2.5 rounded-xl bg-[#201a14] hover:bg-[#2b241c] border border-[#a48c68]/40 text-[#f5d77f] text-xs sm:text-sm font-semibold transition"
            >
              {t.dashboard.graphNetworkBtn}
            </button>
          </div>
        </div>
      </div>

      {/* Featured Comparative Connections */}
      <div className="space-y-4 text-left">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold font-display text-[#f5d77f]">
              {t.dashboard.featuredHeading}
            </h2>
            <p className="text-xs text-[#a48c68]">
              {t.dashboard.featuredSubheading}
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
                  {t.dashboard.compareAction} <ChevronRight className="w-3.5 h-3.5" />
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
            {t.dashboard.modulesHeading}
          </h2>
          <p className="text-xs text-[#a48c68]">
            {t.dashboard.modulesSubheading}
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

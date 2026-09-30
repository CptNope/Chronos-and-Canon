import React, { useState } from 'react';
import { ResearchMode } from '../types';
import { useLanguage } from '../i18n/LanguageContext';
import { useAppUpdate } from '../context/PWAUpdateContext';
import { PWAInstallButton } from './common/PWAInstallButton';
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
  Menu,
  X,
  FileArchive,
  Compass,
  Library,
  ChevronDown,
  Languages,
  ShieldCheck,
  Check
} from 'lucide-react';

export type AppView =
  | 'HOME'
  | 'EXPLORE_TEXTS'
  | 'DIGITAL_LIBRARY'
  | 'COMPARE'
  | 'GRAPH'
  | 'TIMELINE'
  | 'MAP'
  | 'MOTIFS'
  | 'SEVENTY_BOOKS'
  | 'GENESIS_6'
  | 'FLOOD'
  | 'MANUSCRIPTS'
  | 'ASSISTANT';

interface NavigationProps {
  currentView: AppView;
  onNavigate: (view: AppView) => void;
  researchMode: ResearchMode;
  onSetResearchMode: (mode: ResearchMode) => void;
  onOpenVersionModal?: () => void;
}

interface NavHubItem {
  view: AppView;
  shortLabel: string;
  fullLabel: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const Navigation: React.FC<NavigationProps> = ({
  currentView,
  onNavigate,
  researchMode,
  onSetResearchMode,
  onOpenVersionModal
}) => {
  const { t, language, setLanguage, languages } = useLanguage();
  const { currentVersion, isUpdateAvailable } = useAppUpdate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [desktopMoreOpen, setDesktopMoreOpen] = useState(false);
  const [researchModeMenuOpen, setResearchModeMenuOpen] = useState(false);

  // Core flagship hubs with adaptive short/full labels for responsive screen real estate
  const primaryNavItems: NavHubItem[] = [
    {
      view: 'HOME',
      shortLabel: language === 'es' ? 'Panel' : language === 'pt' ? 'Painel' : 'Dashboard',
      fullLabel: t.nav.dashboard,
      icon: Compass
    },
    {
      view: 'EXPLORE_TEXTS',
      shortLabel: language === 'es' ? 'Explorar' : language === 'pt' ? 'Explorar' : 'Explore',
      fullLabel: t.nav.exploreTexts,
      icon: BookOpen
    },
    {
      view: 'DIGITAL_LIBRARY',
      shortLabel: language === 'es' ? 'Biblioteca' : language === 'pt' ? 'Biblioteca' : 'Library',
      fullLabel: t.nav.digitalLibrary,
      icon: Library
    },
    {
      view: 'COMPARE',
      shortLabel: language === 'es' ? 'Comparar' : language === 'pt' ? 'Comparar' : 'Compare',
      fullLabel: t.nav.compare,
      icon: GitCompare
    },
    {
      view: 'GRAPH',
      shortLabel: language === 'es' ? 'Grafo' : language === 'pt' ? 'Grafo' : 'Graph',
      fullLabel: t.nav.graph,
      icon: Network
    },
  ];

  // Deep-dive studies and analytical tools organized in the dropdown
  const specializedStudies: { view: AppView; label: string; icon: React.ComponentType<{ className?: string }>; category: string }[] = [
    { view: 'TIMELINE', label: t.nav.timeline, icon: Clock, category: language === 'es' ? 'Cronología y Arqueología' : language === 'pt' ? 'Cronologia e Arqueologia' : 'Chronology & Archaeology' },
    { view: 'MAP', label: t.nav.worldMap, icon: Globe, category: language === 'es' ? 'Cronología y Arqueología' : language === 'pt' ? 'Cronologia e Arqueologia' : 'Chronology & Archaeology' },
    { view: 'MOTIFS', label: t.nav.motifs, icon: Layers, category: language === 'es' ? 'Cronología y Arqueología' : language === 'pt' ? 'Cronologia e Arqueologia' : 'Chronology & Archaeology' },
    { view: 'MANUSCRIPTS', label: t.nav.manuscripts, icon: FileArchive, category: language === 'es' ? 'Cronología y Arqueología' : language === 'pt' ? 'Cronologia e Arqueologia' : 'Chronology & Archaeology' },
    { view: 'SEVENTY_BOOKS', label: t.nav.seventyBooks, icon: Scroll, category: language === 'es' ? 'Estudios Monográficos' : language === 'pt' ? 'Estudos Monográficos' : 'Thematic Investigations' },
    { view: 'GENESIS_6', label: t.nav.genesis6, icon: Sparkles, category: language === 'es' ? 'Estudios Monográficos' : language === 'pt' ? 'Estudos Monográficos' : 'Thematic Investigations' },
    { view: 'FLOOD', label: t.nav.floodStudy, icon: Waves, category: language === 'es' ? 'Estudios Monográficos' : language === 'pt' ? 'Estudos Monográficos' : 'Thematic Investigations' },
    { view: 'ASSISTANT', label: t.nav.assistant, icon: MessageSquare, category: language === 'es' ? 'Asistencia Epigráfica' : language === 'pt' ? 'Assistência Epigráfica' : 'Epigraphical AI' }
  ];

  const allNavItems = [...primaryNavItems.map(p => ({ view: p.view, label: p.fullLabel, icon: p.icon })), ...specializedStudies];
  const activeSpecialized = specializedStudies.find(item => item.view === currentView);

  const getShortModeLabel = (mode: ResearchMode) => {
    switch (mode) {
      case 'SCHOLARLY':
        return language === 'es' ? 'Académico' : language === 'pt' ? 'Acadêmico' : 'Scholarly';
      case 'COMPARATIVE':
        return language === 'es' ? 'Comparativo' : language === 'pt' ? 'Comparativo' : 'Comparative';
      case 'EXPLORATORY':
        return language === 'es' ? 'Exploratorio' : language === 'pt' ? 'Exploratório' : 'Exploratory';
      case 'SPECULATIVE':
        return language === 'es' ? 'Especulativo' : language === 'pt' ? 'Especulativo' : 'Speculative';
    }
  };

  const getModeDescription = (mode: ResearchMode) => {
    switch (mode) {
      case 'SCHOLARLY':
        return language === 'es'
          ? 'Solo fuentes epigráficas primarias y consenso arqueológico revisado por pares'
          : language === 'pt'
          ? 'Apenas fontes epigráficas primárias e consenso arqueológico revisado por pares'
          : 'Strict primary epigraphic sources and peer-reviewed consensus only';
      case 'COMPARATIVE':
        return language === 'es'
          ? 'Paralelos textuales documentados y ecos del Próximo Oriente Antiguo'
          : language === 'pt'
          ? 'Paralelos textuais documentados e ecos do Antigo Oriente Próximo'
          : 'Documented textual parallels and ancient Near Eastern motifs';
      case 'EXPLORATORY':
        return language === 'es'
          ? 'Conexiones temáticas más amplias y tipologías mitológicas cruzadas'
          : language === 'pt'
          ? 'Conexões temáticas mais amplas e tipologias mitológicas cruzadas'
          : 'Broader thematic connections, cross-corpus motifs, and typologies';
      case 'SPECULATIVE':
        return language === 'es'
          ? 'Hipótesis reconstructivas y modelos de recepción textual antigua'
          : language === 'pt'
          ? 'Hipóteses reconstrutivas e modelos de recepção textual antiga'
          : 'Reconstructive hypotheses and ancient reception history models';
    }
  };

  const getModeColor = (mode: ResearchMode) => {
    switch (mode) {
      case 'SCHOLARLY': return 'bg-emerald-400';
      case 'COMPARATIVE': return 'bg-amber-400';
      case 'EXPLORATORY': return 'bg-purple-400';
      case 'SPECULATIVE': return 'bg-rose-400';
    }
  };

  const researchModes: ResearchMode[] = ['SCHOLARLY', 'COMPARATIVE', 'EXPLORATORY', 'SPECULATIVE'];

  const handleNav = (view: AppView) => {
    onNavigate(view);
    setMobileMenuOpen(false);
    setDesktopMoreOpen(false);
    setResearchModeMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#12100d]/95 backdrop-blur-md border-b border-[#a48c68]/20 select-none">
      <div className="max-w-[1680px] w-full mx-auto px-3 sm:px-5 lg:px-6">
        <div className="flex items-center justify-between h-16 gap-2 lg:gap-4">
          {/* Logo and Brand (Resilient spacing and character length adaptiveness) */}
          <div
            onClick={() => handleNav('HOME')}
            className="flex items-center gap-2.5 cursor-pointer group flex-shrink-0"
          >
            <div className="w-9 h-9 rounded-lg bg-[#251e17] border border-[#c99738]/50 flex items-center justify-center shadow-md group-hover:border-[#f5d77f] transition flex-shrink-0">
              <Scroll className="w-5 h-5 text-[#f5d77f]" />
            </div>
            <div className="min-w-0">
              <span className="text-sm sm:text-base xl:text-lg font-bold font-display text-[#f5d77f] tracking-tight block leading-tight whitespace-nowrap">
                {t.appName}
              </span>
              <span className="text-[10px] text-[#a48c68] font-mono tracking-wider hidden 2xl:block mt-0.5 uppercase whitespace-nowrap">
                {t.appSubtitle}
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links (Uncrowded, Adaptive Character Sizing) */}
          <nav className="hidden xl:flex items-center gap-1 2xl:gap-1.5 flex-shrink min-w-0">
            {primaryNavItems.map(item => {
              const Icon = item.icon;
              const isActive = currentView === item.view;
              return (
                <button
                  key={item.view}
                  onClick={() => handleNav(item.view)}
                  className={`flex items-center gap-1.5 px-2.5 py-1.5 2xl:px-3 rounded-lg text-xs font-medium transition whitespace-nowrap ${
                    isActive
                      ? 'bg-[#c99738]/20 text-[#f5d77f] font-semibold border border-[#c99738]/50 shadow-sm'
                      : 'text-[#b8ad9e] hover:text-[#f5d77f] hover:bg-[#201a14]'
                  }`}
                  title={item.fullLabel}
                >
                  <Icon className="w-3.5 h-3.5 flex-shrink-0" />
                  {/* Adaptive label: Short on xl screens, full on 2xl+ */}
                  <span className="inline 2xl:hidden">{item.shortLabel}</span>
                  <span className="hidden 2xl:inline">{item.fullLabel}</span>
                </button>
              );
            })}

            {/* Specialized Studies & Analytical Tools Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setDesktopMoreOpen(!desktopMoreOpen);
                  setResearchModeMenuOpen(false);
                }}
                className={`flex items-center gap-1.5 px-2.5 py-1.5 2xl:px-3 rounded-lg text-xs font-medium transition whitespace-nowrap ${
                  activeSpecialized
                    ? 'bg-[#c99738]/25 text-[#f5d77f] font-semibold border border-[#c99738]/60 shadow-sm ring-1 ring-[#c99738]/30'
                    : 'text-[#b8ad9e] hover:text-[#f5d77f] hover:bg-[#201a14] border border-transparent'
                }`}
                title={language === 'es' ? 'Estudios Monográficos y Herramientas' : language === 'pt' ? 'Estudos Monográficos e Ferramentas' : 'Monographic Studies & Tools'}
              >
                {activeSpecialized ? (
                  <>
                    <activeSpecialized.icon className="w-3.5 h-3.5 text-[#c99738] flex-shrink-0" />
                    <span className="max-w-[130px] 2xl:max-w-none truncate">{activeSpecialized.label}</span>
                  </>
                ) : (
                  <>
                    <Layers className="w-3.5 h-3.5 text-[#c99738] flex-shrink-0" />
                    <span className="inline 2xl:hidden">
                      {language === 'es' ? 'Estudios' : language === 'pt' ? 'Estudos' : 'Studies'}
                    </span>
                    <span className="hidden 2xl:inline">
                      {language === 'es' ? 'Estudios y Herramientas' : language === 'pt' ? 'Estudos e Ferramentas' : 'Studies & Tools'}
                    </span>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-full bg-[#2a2219] text-[#c99738] border border-[#c99738]/30">
                      {specializedStudies.length}
                    </span>
                  </>
                )}
                <ChevronDown className={`w-3.5 h-3.5 transition-transform text-[#c99738] ${desktopMoreOpen ? 'rotate-180 text-[#f5d77f]' : ''}`} />
              </button>

              {desktopMoreOpen && (
                <div
                  className="absolute right-0 top-full mt-2 w-88 p-3.5 rounded-2xl bg-[#171310] border border-[#a48c68]/30 shadow-2xl space-y-3 z-50 animate-fade-in text-left"
                  onMouseLeave={() => setDesktopMoreOpen(false)}
                >
                  <div className="text-[10px] uppercase font-bold text-[#c99738] tracking-wider px-2 flex items-center justify-between pb-1.5 border-b border-[#2d251d]">
                    <span>{language === 'es' ? 'Módulos de Investigación Avanzada' : language === 'pt' ? 'Módulos de Pesquisa Avançada' : 'Specialized Research Modules'}</span>
                    <span className="text-[9px] text-[#8e806e]">({specializedStudies.length})</span>
                  </div>

                  <div className="grid grid-cols-1 gap-1 max-h-[380px] overflow-y-auto pr-1">
                    {specializedStudies.map(extra => {
                      const Icon = extra.icon;
                      const isActive = currentView === extra.view;
                      return (
                        <button
                          key={extra.view}
                          onClick={() => handleNav(extra.view)}
                          className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition text-left ${
                            isActive
                              ? 'bg-[#c99738]/20 text-[#f5d77f] font-semibold border border-[#c99738]/40 shadow-xs'
                              : 'text-[#ded5c7] hover:text-[#f5d77f] hover:bg-[#221c16]'
                          }`}
                        >
                          <div className="flex items-center gap-2.5">
                            <Icon className="w-4 h-4 text-[#c99738] flex-shrink-0" />
                            <span className="font-display font-medium">{extra.label}</span>
                          </div>
                          <span className="text-[10px] font-mono text-[#8e806e]">
                            {extra.category.split(' ')[0]}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Right Header Controls (Compact, Harmonious, Language-Responsive) */}
          <div className="flex items-center gap-2 sm:gap-2.5 flex-shrink-0">
            {/* Language Selector Pill (EN | ES | PT) */}
            <div className="flex items-center rounded-lg bg-[#1a1512] border border-[#3d3224] p-0.5 text-[11px] font-semibold">
              <Languages className="w-3.5 h-3.5 text-[#c99738] ml-1.5 mr-1 flex-shrink-0 hidden xs:inline" />
              {languages.map(l => (
                <button
                  key={l.code}
                  onClick={() => setLanguage(l.code)}
                  className={`px-1.5 py-0.5 rounded transition ${
                    language === l.code
                      ? 'bg-[#c99738] text-[#12100e] font-bold shadow-xs'
                      : 'text-[#a48c68] hover:text-[#f5d77f]'
                  }`}
                  title={`${l.label} (${l.flag})`}
                >
                  {l.flag}
                </button>
              ))}
            </div>

            {/* Research Rigor Popover Control (Replaces clunky native select, saves space) */}
            <div className="relative hidden sm:block">
              <button
                onClick={() => {
                  setResearchModeMenuOpen(!researchModeMenuOpen);
                  setDesktopMoreOpen(false);
                }}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#1c1713] hover:bg-[#251e18] border border-[#3d3224] text-[11px] font-semibold text-[#f5d77f] transition shadow-xs"
                title={language === 'es' ? 'Filtro de rigor de evidencia académica' : language === 'pt' ? 'Filtro de rigor de evidência acadêmica' : 'Scholarly evidentiary rigor filter'}
              >
                <span className={`w-2 h-2 rounded-full ${getModeColor(researchMode)} flex-shrink-0 animate-pulse`} />
                <span className="whitespace-nowrap">{getShortModeLabel(researchMode)}</span>
                <ChevronDown className={`w-3 h-3 text-[#a48c68] transition-transform ${researchModeMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              {researchModeMenuOpen && (
                <div
                  className="absolute right-0 top-full mt-2 w-72 p-3 rounded-2xl bg-[#171310] border border-[#a48c68]/30 shadow-2xl space-y-2 z-50 animate-fade-in text-left"
                  onMouseLeave={() => setResearchModeMenuOpen(false)}
                >
                  <div className="px-2 pb-1.5 border-b border-[#2d251d]">
                    <div className="text-[10px] uppercase font-bold text-[#c99738] tracking-wider">
                      {language === 'es' ? 'Rigor de Evidencia' : language === 'pt' ? 'Rigor de Evidência' : 'Evidentiary Rigor'}
                    </div>
                    <div className="text-[10px] text-[#8e806e]">
                      {language === 'es' ? 'Filtra las conexiones según el estándar epigráfico' : language === 'pt' ? 'Filtra conexões segundo padrão epigráfico' : 'Filters connections by academic certainty'}
                    </div>
                  </div>

                  <div className="space-y-1">
                    {researchModes.map(mode => {
                      const isSelected = researchMode === mode;
                      return (
                        <button
                          key={mode}
                          onClick={() => {
                            onSetResearchMode(mode);
                            setResearchModeMenuOpen(false);
                          }}
                          className={`w-full flex items-start gap-2.5 p-2 rounded-xl text-left transition ${
                            isSelected
                              ? 'bg-[#c99738]/20 border border-[#c99738]/40 shadow-xs'
                              : 'hover:bg-[#221c16]'
                          }`}
                        >
                          <span className={`w-2 h-2 rounded-full ${getModeColor(mode)} flex-shrink-0 mt-1.5`} />
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <span className={`text-xs font-semibold ${isSelected ? 'text-[#f5d77f]' : 'text-[#ded5c7]'}`}>
                                {getShortModeLabel(mode)}
                              </span>
                              {isSelected && <Check className="w-3.5 h-3.5 text-[#c99738]" />}
                            </div>
                            <p className="text-[10px] text-[#a48c68] leading-tight mt-0.5">
                              {getModeDescription(mode)}
                            </p>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* PWA Install Button */}
            <PWAInstallButton />

            {/* Version Badge & Updates Button */}
            {onOpenVersionModal && (
              <button
                onClick={onOpenVersionModal}
                className={`hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded-lg border text-xs font-mono transition ${
                  isUpdateAvailable
                    ? 'bg-[#c99738]/20 border-[#c99738] text-[#f5d77f] font-bold animate-pulse shadow-xs'
                    : 'bg-[#181411] border-[#382e22] text-[#a48c68] hover:text-[#f5d77f] hover:border-[#c99738]/50'
                }`}
                title={isUpdateAvailable ? t.updates.statusUpdateAvailable : `${t.common.version} v${currentVersion} (${t.common.checkUpdates})`}
              >
                <ShieldCheck className="w-3.5 h-3.5 text-[#c99738] flex-shrink-0" />
                <span>v{currentVersion}</span>
                {isUpdateAvailable && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#f5d77f] animate-ping" />
                )}
              </button>
            )}

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg text-[#b8ad9e] hover:text-white hover:bg-[#221c16]"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#161310] border-b border-[#a48c68]/30 px-4 pt-3 pb-6 space-y-3 animate-fade-in shadow-2xl">
          <div className="flex items-center justify-between pb-2 border-b border-[#2d251d]">
            <span className="text-xs uppercase font-semibold text-[#a48c68]">{t.nav.selectModule}</span>
            <div className="flex items-center gap-2">
              {/* Mobile Language Selector */}
              <div className="flex items-center rounded bg-[#201a14] border border-[#3b3226] p-0.5 text-xs font-semibold">
                {languages.map(l => (
                  <button
                    key={l.code}
                    onClick={() => setLanguage(l.code)}
                    className={`px-1.5 py-0.5 rounded transition ${
                      language === l.code
                        ? 'bg-[#c99738] text-[#12100e] font-bold'
                        : 'text-[#a48c68]'
                    }`}
                  >
                    {l.flag}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-1 text-xs">
                <span className="text-[10px] text-[#8e806e]">{t.nav.modeLabel}</span>
                <select
                  value={researchMode}
                  onChange={e => onSetResearchMode(e.target.value as ResearchMode)}
                  className="px-2 py-0.5 rounded bg-[#201a14] border border-[#3b3226] text-xs text-[#f5d77f]"
                >
                  <option value="SCHOLARLY">{getShortModeLabel('SCHOLARLY')}</option>
                  <option value="COMPARATIVE">{getShortModeLabel('COMPARATIVE')}</option>
                  <option value="EXPLORATORY">{getShortModeLabel('EXPLORATORY')}</option>
                  <option value="SPECULATIVE">{getShortModeLabel('SPECULATIVE')}</option>
                </select>
              </div>
            </div>
          </div>

          {/* Version Check Row in Mobile Menu */}
          {onOpenVersionModal && (
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenVersionModal();
              }}
              className="w-full flex items-center justify-between p-2.5 rounded-xl bg-[#1b1713] border border-[#2b231a] text-xs text-[#ded5c7] hover:bg-[#251e18] transition"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#c99738]" />
                <span className="font-semibold text-[#f5d77f]">{t.updates.modalTitle}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-[#a48c68]">v{currentVersion}</span>
                {isUpdateAvailable ? (
                  <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-[#c99738] text-[#12100e] animate-pulse">
                    UPDATE
                  </span>
                ) : (
                  <span className="text-[10px] text-[#34d399] font-medium">LATEST</span>
                )}
              </div>
            </button>
          )}

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {allNavItems.map(item => {
              const Icon = item.icon;
              const isActive = currentView === item.view;
              return (
                <button
                  key={item.view}
                  onClick={() => handleNav(item.view)}
                  className={`flex items-center gap-2 p-2.5 rounded-xl text-xs font-medium text-left transition ${
                    isActive
                      ? 'bg-[#c99738]/20 border border-[#c99738] text-[#f5d77f] font-semibold'
                      : 'bg-[#1b1713] border border-[#2b231a] text-[#ded5c7] hover:bg-[#251e18]'
                  }`}
                >
                  <Icon className="w-4 h-4 text-[#c99738] flex-shrink-0" />
                  <span className="truncate">{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};

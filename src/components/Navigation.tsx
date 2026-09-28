import React, { useState } from 'react';
import { ResearchMode } from '../types';
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
  ChevronDown
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
}

export const Navigation: React.FC<NavigationProps> = ({
  currentView,
  onNavigate,
  researchMode,
  onSetResearchMode
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [desktopMoreOpen, setDesktopMoreOpen] = useState(false);

  const navItems: { view: AppView; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
    { view: 'HOME', label: 'Dashboard', icon: Compass },
    { view: 'EXPLORE_TEXTS', label: 'Explore Texts', icon: BookOpen },
    { view: 'DIGITAL_LIBRARY', label: 'Public Texts', icon: Library },
    { view: 'COMPARE', label: 'Compare', icon: GitCompare },
    { view: 'GRAPH', label: 'Graph', icon: Network },
    { view: 'TIMELINE', label: 'Timeline', icon: Clock },
    { view: 'MAP', label: 'World Map', icon: Globe },
    { view: 'MOTIFS', label: 'Motifs', icon: Layers },
    { view: 'SEVENTY_BOOKS', label: '70 Books', icon: Scroll },
    { view: 'GENESIS_6', label: 'Genesis 6', icon: Sparkles },
    { view: 'FLOOD', label: 'Flood Study', icon: Waves },
    { view: 'MANUSCRIPTS', label: 'Manuscripts', icon: FileArchive },
    { view: 'ASSISTANT', label: 'AI Assistant', icon: MessageSquare }
  ];

  const handleNav = (view: AppView) => {
    onNavigate(view);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#12100d]/95 backdrop-blur-md border-b border-[#a48c68]/20 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <div
            onClick={() => handleNav('HOME')}
            className="flex items-center gap-2.5 cursor-pointer group"
          >
            <div className="w-9 h-9 rounded-lg bg-[#251e17] border border-[#c99738]/50 flex items-center justify-center shadow-md group-hover:border-[#f5d77f] transition">
              <Scroll className="w-5 h-5 text-[#f5d77f]" />
            </div>
            <div>
              <span className="text-base sm:text-lg font-bold font-display text-[#f5d77f] tracking-wide block leading-none">
                CHRONOS &amp; CANON
              </span>
              <span className="text-[10px] text-[#a48c68] font-mono tracking-wider block mt-0.5 uppercase">
                Ancient Comparative Archive
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1">
            {navItems.slice(0, 8).map(item => {
              const Icon = item.icon;
              const isActive = currentView === item.view;
              return (
                <button
                  key={item.view}
                  onClick={() => {
                    handleNav(item.view);
                    setDesktopMoreOpen(false);
                  }}
                  className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium transition ${
                    isActive
                      ? 'bg-[#c99738]/20 text-[#f5d77f] font-semibold border border-[#c99738]/40'
                      : 'text-[#b8ad9e] hover:text-[#f5d77f] hover:bg-[#201a14]'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{item.label}</span>
                </button>
              );
            })}

            {/* More Modules Dropdown */}
            <div className="relative">
              <button
                onClick={() => setDesktopMoreOpen(!desktopMoreOpen)}
                className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium transition ${
                  ['SEVENTY_BOOKS', 'GENESIS_6', 'FLOOD', 'MANUSCRIPTS', 'ASSISTANT'].includes(currentView)
                    ? 'bg-[#c99738]/20 text-[#f5d77f] font-semibold border border-[#c99738]/40'
                    : 'text-[#b8ad9e] hover:text-[#f5d77f] hover:bg-[#201a14]'
                }`}
              >
                <span>More Studies</span>
                <ChevronDown className={`w-3 h-3 transition-transform ${desktopMoreOpen ? 'rotate-180 text-[#f5d77f]' : ''}`} />
              </button>

              {desktopMoreOpen && (
                <div
                  className="absolute right-0 top-full mt-2 w-56 p-2 rounded-xl bg-[#181411] border border-[#a48c68]/30 shadow-2xl space-y-1 z-50 animate-fade-in"
                  onMouseLeave={() => setDesktopMoreOpen(false)}
                >
                  {navItems.slice(8).map(extra => {
                    const Icon = extra.icon;
                    const isActive = currentView === extra.view;
                    return (
                      <button
                        key={extra.view}
                        onClick={() => {
                          handleNav(extra.view);
                          setDesktopMoreOpen(false);
                        }}
                        className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium transition text-left ${
                          isActive
                            ? 'bg-[#c99738]/20 text-[#f5d77f] font-semibold border border-[#c99738]/30'
                            : 'text-[#ded5c7] hover:text-[#f5d77f] hover:bg-[#251e18]'
                        }`}
                      >
                        <Icon className="w-3.5 h-3.5 text-[#c99738]" />
                        <span>{extra.label}</span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </nav>

          {/* Right Header: Research Mode Badge, Install, Mobile Menu */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Research Mode Dropdown/Pill */}
            <div className="hidden sm:flex items-center text-xs">
              <select
                value={researchMode}
                onChange={e => onSetResearchMode(e.target.value as ResearchMode)}
                className="px-2.5 py-1 rounded-lg bg-[#1c1713] border border-[#3d3224] text-[11px] font-semibold text-[#f5d77f] focus:outline-none focus:border-[#c99738]"
                title="Filter relationship rigor mode"
              >
                <option value="SCHOLARLY">Scholarly Mode</option>
                <option value="COMPARATIVE">Comparative Mode</option>
                <option value="EXPLORATORY">Exploratory Mode</option>
                <option value="SPECULATIVE">Speculative Mode</option>
              </select>
            </div>

            {/* PWA Install Button */}
            <PWAInstallButton />

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
            <span className="text-xs uppercase font-semibold text-[#a48c68]">Select Research Module</span>
            <div className="flex items-center gap-1.5 text-xs">
              <span className="text-[10px] text-[#8e806e]">Mode:</span>
              <select
                value={researchMode}
                onChange={e => onSetResearchMode(e.target.value as ResearchMode)}
                className="px-2 py-0.5 rounded bg-[#201a14] border border-[#3b3226] text-xs text-[#f5d77f]"
              >
                <option value="SCHOLARLY">Scholarly</option>
                <option value="COMPARATIVE">Comparative</option>
                <option value="EXPLORATORY">Exploratory</option>
                <option value="SPECULATIVE">Speculative</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {navItems.map(item => {
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

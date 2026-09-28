import React, { useState, useEffect } from 'react';
import { Navigation, AppView } from './components/Navigation';
import { HomeDashboardView } from './components/views/HomeDashboardView';
import { ExploreTextsView } from './components/views/ExploreTextsView';
import { CompareView } from './components/views/CompareView';
import { GraphView } from './components/views/GraphView';
import { TimelineView } from './components/views/TimelineView';
import { AncientMapView } from './components/views/AncientMapView';
import { MotifHubView } from './components/views/MotifHubView';
import { SeventyBooksView } from './components/views/SeventyBooksView';
import { Genesis6StudyView } from './components/views/Genesis6StudyView';
import { FloodStudyView } from './components/views/FloodStudyView';
import { ManuscriptsView } from './components/views/ManuscriptsView';
import { ResearchAssistantView } from './components/views/ResearchAssistantView';
import { DigitalLibraryView } from './components/views/DigitalLibraryView';
import { OfflineIndicator } from './components/common/OfflineIndicator';
import { ResearchMode } from './types';
import { Scroll, Shield, Heart } from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState<AppView>('HOME');
  const [researchMode, setResearchMode] = useState<ResearchMode>('COMPARATIVE');
  const [comparePassageIds, setComparePassageIds] = useState<string[]>(['gen_6_1_4', '1_enoch_6_1_6']);
  const [digitalLibraryFilterTextId, setDigitalLibraryFilterTextId] = useState<string | undefined>(undefined);

  // Handle URL parameters for shareable comparisons and deep links
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const compareParam = params.get('compare');
      const viewParam = params.get('view');

      if (compareParam) {
        const ids = compareParam.split(',').filter(Boolean);
        if (ids.length >= 1) {
          setComparePassageIds(ids);
          setCurrentView('COMPARE');
        }
      } else if (viewParam) {
        setCurrentView(viewParam.toUpperCase() as AppView);
      }
    } catch (e) {
      console.error('Error parsing URL parameters:', e);
    }
  }, []);

  const handleOpenCompare = (passageIds: string[]) => {
    setComparePassageIds(passageIds);
    setCurrentView('COMPARE');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectPassageForCompare = (passageId: string) => {
    if (!comparePassageIds.includes(passageId)) {
      setComparePassageIds([comparePassageIds[0] || 'gen_6_1_4', passageId]);
    }
    setCurrentView('COMPARE');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#100e0c] text-[#e8e2d5]">
      {/* Navigation Header */}
      <Navigation
        currentView={currentView}
        onNavigate={view => {
          setCurrentView(view);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        researchMode={researchMode}
        onSetResearchMode={setResearchMode}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {currentView === 'HOME' && (
          <HomeDashboardView
            onNavigate={view => {
              setCurrentView(view);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenCompare={handleOpenCompare}
          />
        )}

        {currentView === 'EXPLORE_TEXTS' && (
          <ExploreTextsView
            onSelectPassageForCompare={handleSelectPassageForCompare}
            onNavigateToDigitalLibrary={textId => {
              setDigitalLibraryFilterTextId(textId);
              setCurrentView('DIGITAL_LIBRARY');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {currentView === 'DIGITAL_LIBRARY' && (
          <DigitalLibraryView
            onSelectText={textId => {
              setCurrentView('EXPLORE_TEXTS');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            initialFilterTextId={digitalLibraryFilterTextId}
          />
        )}

        {currentView === 'COMPARE' && (
          <CompareView
            initialPassageIds={comparePassageIds}
          />
        )}

        {currentView === 'GRAPH' && (
          <GraphView
            researchMode={researchMode}
            onSetResearchMode={setResearchMode}
            onSelectPassage={passageId => {
              handleSelectPassageForCompare(passageId);
            }}
          />
        )}

        {currentView === 'TIMELINE' && (
          <TimelineView />
        )}

        {currentView === 'MAP' && (
          <AncientMapView
            onSelectText={textId => {
              setCurrentView('EXPLORE_TEXTS');
            }}
          />
        )}

        {currentView === 'MOTIFS' && (
          <MotifHubView />
        )}

        {currentView === 'SEVENTY_BOOKS' && (
          <SeventyBooksView />
        )}

        {currentView === 'GENESIS_6' && (
          <Genesis6StudyView
            onOpenCompare={handleOpenCompare}
          />
        )}

        {currentView === 'FLOOD' && (
          <FloodStudyView
            onOpenCompare={handleOpenCompare}
          />
        )}

        {currentView === 'MANUSCRIPTS' && (
          <ManuscriptsView
            onSelectAssociatedText={textId => {
              setCurrentView('EXPLORE_TEXTS');
            }}
          />
        )}

        {currentView === 'ASSISTANT' && (
          <ResearchAssistantView
            researchMode={researchMode}
            onSetResearchMode={setResearchMode}
          />
        )}
      </main>

      {/* PWA Offline Indicator */}
      <OfflineIndicator />

      {/* Scholarly Footer */}
      <footer className="mt-auto border-t border-[#a48c68]/20 bg-[#0d0b09] py-8 text-xs text-[#8e806e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Scroll className="w-4 h-4 text-[#c99738]" />
              <span className="font-display font-bold text-[#f5d77f]">
                CHRONOS &amp; CANON ARCHIVE
              </span>
              <span className="text-[#5a5043]">&bull;</span>
              <span>Scholarly Ancient Text Relationship Matrix</span>
            </div>

            <div className="flex items-center gap-4 text-[11px]">
              <button
                onClick={() => {
                  setDigitalLibraryFilterTextId(undefined);
                  setCurrentView('DIGITAL_LIBRARY');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="flex items-center gap-1 text-[#34d399] hover:text-[#6ee7b7] hover:underline transition"
              >
                <Shield className="w-3.5 h-3.5" /> Public Domain &amp; Open Access Digital Library
              </button>
              <span>Three-Tier Chronological Separation</span>
            </div>
          </div>

          <p className="text-[11px] leading-relaxed text-[#695d4f] border-t border-[#1c1813] pt-4 text-center sm:text-left">
            This research database distinguishes direct manuscript and textual dependence from scholarly parallels, shared mythological motifs, and later speculative interpretations. Designed for rigorous independent inquiry.
          </p>
        </div>
      </footer>
    </div>
  );
}

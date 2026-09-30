import React, { useState, useMemo, useRef, useEffect } from 'react';
import { texts } from '../../data/texts';
import { passages } from '../../data/passages';
import { relationships } from '../../data/relationships';
import { motifs } from '../../data/motifs';
import { ancientTerms } from '../../data/terms';
import { EvidenceLevel, ResearchMode, Relationship } from '../../types';
import { EvidenceBadge } from '../common/EvidenceBadge';
import { useLanguage } from '../../i18n/LanguageContext';
import { getUiTranslations } from '../../i18n/uiTranslations';
import { getLocalizedRelationship } from '../../utils/relationshipTranslationHelper';
import { Network, Search, Filter, ZoomIn, ZoomOut, RotateCcw, Info, Sparkles, BookOpen } from 'lucide-react';

interface GraphNodeInternal {
  id: string;
  label: string;
  type: 'text' | 'passage' | 'being' | 'motif' | 'term';
  group: string;
  color: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
}

interface GraphLinkInternal {
  id: string;
  source: string;
  target: string;
  relationshipType: string;
  evidenceLevel: EvidenceLevel;
  title: string;
  explanation: string;
  citations: string[];
}

interface GraphViewProps {
  researchMode: ResearchMode;
  onSetResearchMode: (mode: ResearchMode) => void;
  onSelectPassage?: (passageId: string) => void;
}

export const GraphView: React.FC<GraphViewProps> = ({
  researchMode,
  onSetResearchMode,
  onSelectPassage
}) => {
  const { t, language } = useLanguage();
  const ui = getUiTranslations(language);
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>('gen_6_1_4');
  const [selectedLinkId, setSelectedLinkId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [zoomLevel, setZoomLevel] = useState(1);
  const [panOffset, setPanOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });

  // Map allowed evidence levels based on researchMode
  const allowedEvidenceLevels: EvidenceLevel[] = useMemo(() => {
    switch (researchMode) {
      case 'SCHOLARLY':
        return ['DOCUMENTED', 'STRONG'];
      case 'COMPARATIVE':
        return ['DOCUMENTED', 'STRONG', 'COMPARATIVE'];
      case 'EXPLORATORY':
        return ['DOCUMENTED', 'STRONG', 'COMPARATIVE', 'POSSIBLE'];
      case 'SPECULATIVE':
        return ['DOCUMENTED', 'STRONG', 'COMPARATIVE', 'POSSIBLE', 'SPECULATIVE'];
    }
  }, [researchMode]);

  // Construct nodes and edges from structured data
  const { nodes, links } = useMemo(() => {
    const rawNodes: GraphNodeInternal[] = [
      // Passages
      { id: 'gen_6_1_4', label: 'Genesis 6:1–4', type: 'passage', group: 'Hebrew Bible', color: '#c99738', x: 450, y: 300, vx: 0, vy: 0 },
      { id: '1_enoch_6_1_6', label: '1 Enoch 6 (Mount Hermon)', type: 'passage', group: 'Second Temple', color: '#60a5fa', x: 300, y: 200, vx: 0, vy: 0 },
      { id: '1_enoch_1_9', label: '1 Enoch 1:9 (Holy Ones)', type: 'passage', group: 'Second Temple', color: '#60a5fa', x: 200, y: 120, vx: 0, vy: 0 },
      { id: 'jude_6_and_14_15', label: 'Jude 6, 14–15', type: 'passage', group: 'New Testament', color: '#34d399', x: 120, y: 220, vx: 0, vy: 0 },
      { id: '2_peter_2_4_5', label: '2 Peter 2:4–5 (Tartarus)', type: 'passage', group: 'New Testament', color: '#34d399', x: 180, y: 350, vx: 0, vy: 0 },
      { id: 'numbers_13_33', label: 'Numbers 13:33 (Anakim)', type: 'passage', group: 'Hebrew Bible', color: '#c99738', x: 600, y: 240, vx: 0, vy: 0 },
      { id: 'deut_2_and_3', label: 'Deut 2–3 (Og of Bashan)', type: 'passage', group: 'Hebrew Bible', color: '#c99738', x: 720, y: 320, vx: 0, vy: 0 },
      { id: 'joshua_12_4', label: 'Joshua 12:4 (Ashtaroth/Edrei)', type: 'passage', group: 'Hebrew Bible', color: '#c99738', x: 700, y: 440, vx: 0, vy: 0 },
      { id: 'ugaritic_ktu_1_108', label: 'KTU 1.108 (Ugaritic Rapiu)', type: 'passage', group: 'Ugaritic', color: '#f97316', x: 850, y: 400, vx: 0, vy: 0 },
      { id: 'gilgamesh_tablet_11_flood', label: 'Gilgamesh XI (Flood)', type: 'passage', group: 'Mesopotamian', color: '#e879f9', x: 420, y: 520, vx: 0, vy: 0 },
      { id: 'atrahasis_tablet_3_flood', label: 'Atrahasis III (Flood)', type: 'passage', group: 'Mesopotamian', color: '#e879f9', x: 300, y: 560, vx: 0, vy: 0 },
      { id: 'shatapatha_brahmana_flood', label: 'Shatapatha Brahmana (Manu)', type: 'passage', group: 'Vedic', color: '#fbbf24', x: 550, y: 600, vx: 0, vy: 0 },
      { id: 'popol_vuh_resin_flood', label: 'Popol Vuh (Resin Flood)', type: 'passage', group: 'Maya', color: '#2dd4bf', x: 200, y: 480, vx: 0, vy: 0 },
      { id: 'isaiah_27_1', label: 'Isaiah 27:1 (Leviathan)', type: 'passage', group: 'Hebrew Bible', color: '#c99738', x: 580, y: 120, vx: 0, vy: 0 },
      { id: 'baal_cycle_lotan', label: 'Baal Cycle (Lotan the Serpent)', type: 'passage', group: 'Ugaritic', color: '#f97316', x: 720, y: 140, vx: 0, vy: 0 },
      { id: 'rigveda_10_129', label: 'Rigveda 10.129 (Nasadiya)', type: 'passage', group: 'Vedic', color: '#f43f5e', x: 620, y: 640, vx: 0, vy: 0 },
      { id: 'popol_vuh_deluge', label: 'Popol Vuh (Resin Flood)', type: 'passage', group: 'Maya', color: '#2dd4bf', x: 180, y: 500, vx: 0, vy: 0 },
      { id: 'voluspa_creation_ymir', label: 'Völuspá (Ymir & Void)', type: 'passage', group: 'Norse', color: '#818cf8', x: 140, y: 410, vx: 0, vy: 0 },
      { id: 'ovid_four_ages', label: 'Ovid (Four Ages & Giants)', type: 'passage', group: 'Greco-Roman', color: '#38bdf8', x: 100, y: 310, vx: 0, vy: 0 },
      { id: 'book_of_the_wars_of_the_lord', label: 'Num 21:14 (Wars of the LORD)', type: 'passage', group: 'Hebrew Bible', color: '#c99738', x: 670, y: 220, vx: 0, vy: 0 },
      { id: 'book_of_jasher_joshua', label: 'Josh 10:12 (Book of Jasher)', type: 'passage', group: 'Hebrew Bible', color: '#c99738', x: 640, y: 360, vx: 0, vy: 0 },
      { id: 'book_of_giants_4q530', label: 'Book of Giants (4Q530)', type: 'passage', group: 'Dead Sea Scrolls', color: '#f5d77f', x: 380, y: 380, vx: 0, vy: 0 },
      { id: 'testament_of_moses_jude', label: 'Testament of Moses', type: 'passage', group: 'Second Temple', color: '#60a5fa', x: 80, y: 170, vx: 0, vy: 0 },
      { id: 'book_of_heavenly_cow', label: 'Book of Heavenly Cow', type: 'passage', group: 'Egyptian', color: '#facc15', x: 490, y: 460, vx: 0, vy: 0 },

      // Text-level anchors for broader relationships
      { id: 'numbers', label: 'Numbers (Bemidbar)', type: 'text', group: 'Hebrew Bible', color: '#c99738', x: 630, y: 200, vx: 0, vy: 0 },
      { id: 'lost_book_wars_of_lord', label: 'Lost: Book of Wars of LORD', type: 'text', group: 'Lost Books', color: '#eab308', x: 740, y: 190, vx: 0, vy: 0 },
      { id: 'lost_book_jasher', label: 'Lost: Book of Jasher', type: 'text', group: 'Lost Books', color: '#eab308', x: 720, y: 380, vx: 0, vy: 0 },
      { id: 'book_of_giants', label: 'Book of Giants Corpus', type: 'text', group: 'Dead Sea Scrolls', color: '#f5d77f', x: 390, y: 340, vx: 0, vy: 0 },
      { id: 'gilgamesh', label: 'Epic of Gilgamesh', type: 'text', group: 'Mesopotamian', color: '#c084fc', x: 440, y: 460, vx: 0, vy: 0 },
      { id: 'genesis', label: 'Genesis Corpus', type: 'text', group: 'Hebrew Bible', color: '#c99738', x: 490, y: 260, vx: 0, vy: 0 },
      { id: 'jude', label: 'Epistle of Jude', type: 'text', group: 'New Testament', color: '#34d399', x: 90, y: 200, vx: 0, vy: 0 },
      { id: 'testament_of_moses', label: 'Testament of Moses Corpus', type: 'text', group: 'Second Temple', color: '#60a5fa', x: 60, y: 140, vx: 0, vy: 0 },
      { id: 'voluspa_poetic_edda', label: 'Poetic Edda Corpus', type: 'text', group: 'Norse', color: '#818cf8', x: 120, y: 450, vx: 0, vy: 0 },
      { id: 'rigveda', label: 'Rigveda Corpus', type: 'text', group: 'Vedic', color: '#f43f5e', x: 600, y: 600, vx: 0, vy: 0 },

      // Beings / Terms
      { id: 'term_nephilim', label: 'Nephilim (נְפִילִים)', type: 'term', group: 'Linguistic Term', color: '#d97706', x: 500, y: 180, vx: 0, vy: 0 },
      { id: 'term_watchers', label: 'Watchers (ʿIrin / ἐγρήγοροι)', type: 'term', group: 'Linguistic Term', color: '#9333ea', x: 260, y: 300, vx: 0, vy: 0 },
      { id: 'term_rephaim', label: 'Rephaim / Ugaritic rpum', type: 'term', group: 'Linguistic Term', color: '#ea580c', x: 780, y: 220, vx: 0, vy: 0 },
      { id: 'term_apkallu', label: 'Apkallu (Seven Sages)', type: 'term', group: 'Linguistic Term', color: '#c026d3', x: 360, y: 400, vx: 0, vy: 0 },
      { id: 'term_chaoskampf', label: 'Chaoskampf (Dragon/Sea Conflict)', type: 'term', group: 'Mythological Motif', color: '#0284c7', x: 650, y: 60, vx: 0, vy: 0 }
    ];

    // Filter relationships by allowed evidence levels
    const filteredRels = relationships.filter(r => allowedEvidenceLevels.includes(r.evidenceLevel));

    const rawLinks: GraphLinkInternal[] = [];
    filteredRels.forEach(rel => {
      const src = rel.sourcePassageId || rel.sourceTextId;
      const tgt = rel.targetPassageId || rel.targetTextId;
      if (src && tgt && rawNodes.some(n => n.id === src) && rawNodes.some(n => n.id === tgt)) {
        rawLinks.push({
          id: rel.id,
          source: src,
          target: tgt,
          relationshipType: rel.relationshipType,
          evidenceLevel: rel.evidenceLevel,
          title: rel.title,
          explanation: rel.scholarlyExplanation,
          citations: rel.citations
        });
      }
    });

    // Add conceptual bridge links to terms
    if (allowedEvidenceLevels.includes('DOCUMENTED')) {
      rawLinks.push(
        {
          id: 'link_gen6_nephilim',
          source: 'gen_6_1_4',
          target: 'term_nephilim',
          relationshipType: 'LINGUISTIC RELATIONSHIP',
          evidenceLevel: 'DOCUMENTED',
          title: 'Genesis 6:4 Explicit Mention of Nephilim',
          explanation: 'Genesis 6:4 introduces the Nephilim as beings present on earth during the angelic-human cohabitation.',
          citations: ['BHS Masoretic text']
        },
        {
          id: 'link_num13_nephilim',
          source: 'numbers_13_33',
          target: 'term_nephilim',
          relationshipType: 'LINGUISTIC RELATIONSHIP',
          evidenceLevel: 'DOCUMENTED',
          title: 'Numbers 13:33 Equates Anakim to Nephilim',
          explanation: 'The spies testify that the Anakim of Canaan are descended from the Nephilim.',
          citations: ['BHS Numbers 13']
        },
        {
          id: 'link_deut_rephaim',
          source: 'deut_2_and_3',
          target: 'term_rephaim',
          relationshipType: 'LINGUISTIC RELATIONSHIP',
          evidenceLevel: 'DOCUMENTED',
          title: 'Deuteronomy 2–3 Classifies Transjordan Giants as Rephaim',
          explanation: 'Deut 2:11 equates Emim with Rephaim, and Deut 3:11 names Og as the remnant of the Rephaim.',
          citations: ['BHS Deuteronomy']
        },
        {
          id: 'link_1enoch_watchers',
          source: '1_enoch_6_1_6',
          target: 'term_watchers',
          relationshipType: 'LINGUISTIC RELATIONSHIP',
          evidenceLevel: 'DOCUMENTED',
          title: '1 Enoch Identifies the 200 Descent Beings as Watchers',
          explanation: 'The Aramaic and Greek texts of 1 Enoch designate the angels of heaven as the Watchers (ʿIrin).',
          citations: ['4Q201']
        },
        {
          id: 'link_isaiah_chaoskampf',
          source: 'isaiah_27_1',
          target: 'term_chaoskampf',
          relationshipType: 'SHARED MOTIF',
          evidenceLevel: 'DOCUMENTED',
          title: 'Isaiah 27:1 Chaoskampf Imagery',
          explanation: 'Slaying of Leviathan the twisting serpent by Yahweh\'s cosmic sword.',
          citations: ['Cross (1973)']
        },
        {
          id: 'link_baal_chaoskampf',
          source: 'baal_cycle_lotan',
          target: 'term_chaoskampf',
          relationshipType: 'SHARED MOTIF',
          evidenceLevel: 'DOCUMENTED',
          title: 'Baal Slays Lotan the Seven-Headed Sea Serpent',
          explanation: 'KTU 1.5 describes Baal destroying Lotan, personification of the turbulent sea.',
          citations: ['ANET']
        }
      );
    }

    return { nodes: rawNodes, links: rawLinks };
  }, [allowedEvidenceLevels]);

  const filteredNodes = useMemo(() => {
    if (!searchQuery.trim()) return nodes;
    const q = searchQuery.toLowerCase();
    return nodes.filter(n => n.label.toLowerCase().includes(q) || n.group.toLowerCase().includes(q));
  }, [nodes, searchQuery]);

  const selectedNode = nodes.find(n => n.id === selectedNodeId);
  const selectedLink = links.find(l => l.id === selectedLinkId);

  // Connected links for selected node
  const connectedLinks = useMemo(() => {
    if (!selectedNodeId) return [];
    return links.filter(l => l.source === selectedNodeId || l.target === selectedNodeId);
  }, [selectedNodeId, links]);

  // Handle Pan Drag
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    dragStart.current = { x: e.clientX - panOffset.x, y: e.clientY - panOffset.y };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setPanOffset({
      x: e.clientX - dragStart.current.x,
      y: e.clientY - dragStart.current.y
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div className="space-y-6">
      {/* Research Mode & Control Header */}
      <div className="p-6 rounded-2xl bg-[#161311] border border-[#a48c68]/20 shadow-xl space-y-4">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#c99738] uppercase tracking-wider">
              <Network className="w-4 h-4" />
              {ui.graph.headerTag}
            </div>
            <h1 className="text-2xl md:text-3xl font-bold font-display text-[#f5d77f] mt-1">
              {ui.graph.headerTitle}
            </h1>
            <p className="text-sm text-[#b8ad9e] mt-1">
              {ui.graph.headerSubtitle}
            </p>
          </div>

          {/* Research Mode Selector */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 bg-[#201a14] p-1.5 rounded-xl border border-[#3b3226]">
            <span className="text-[11px] font-semibold text-[#a48c68] uppercase px-2">{ui.graph.modeLabel}</span>
            <div className="flex flex-wrap gap-1">
              {(['SCHOLARLY', 'COMPARATIVE', 'EXPLORATORY', 'SPECULATIVE'] as ResearchMode[]).map(mode => (
                <button
                  key={mode}
                  onClick={() => onSetResearchMode(mode)}
                  className={`px-3 py-1 rounded-lg text-xs font-medium transition ${
                    researchMode === mode
                      ? mode === 'SCHOLARLY'
                        ? 'bg-blue-600 text-white font-bold'
                        : mode === 'COMPARATIVE'
                        ? 'bg-amber-600 text-white font-bold'
                        : mode === 'EXPLORATORY'
                        ? 'bg-purple-600 text-white font-bold'
                        : 'bg-red-700 text-white font-bold'
                      : 'text-[#a48c68] hover:text-[#e8e2d5] hover:bg-[#2c241c]'
                  }`}
                >
                  {mode}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Legend & Search bar */}
        <div className="pt-3 border-t border-[#2a231b] flex flex-col md:flex-row items-center justify-between gap-3 text-xs">
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-2.5 w-3.5 h-3.5 text-[#a48c68]" />
            <input
              type="text"
              placeholder={ui.graph.searchPlaceholder}
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 rounded-lg bg-[#1a1714] border border-[#362f27] text-xs text-[#e8e2d5] placeholder-[#7d6f5d] focus:outline-none focus:border-[#c99738]"
            />
          </div>

          <div className="flex items-center gap-3 flex-wrap text-[11px] text-[#a48c68]">
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#c99738]" /> {ui.graph.legendHebrew}
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#60a5fa]" /> {ui.graph.legendSecondTemple}
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#34d399]" /> {ui.graph.legendNewTestament}
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#e879f9]" /> {ui.graph.legendMesopotamian}
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#f97316]" /> {ui.graph.legendUgaritic}
            </span>
          </div>

          {/* Zoom controls */}
          <div className="flex items-center gap-1 bg-[#1a1714] p-1 rounded-lg border border-[#362f27]">
            <button
              onClick={() => setZoomLevel(prev => Math.min(prev + 0.15, 2.2))}
              className="p-1 text-[#a48c68] hover:text-[#e8e2d5] rounded"
              title={ui.graph.zoomIn}
            >
              <ZoomIn className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setZoomLevel(prev => Math.max(prev - 0.15, 0.5))}
              className="p-1 text-[#a48c68] hover:text-[#e8e2d5] rounded"
              title={ui.graph.zoomOut}
            >
              <ZoomOut className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => { setZoomLevel(1); setPanOffset({ x: 0, y: 0 }); }}
              className="p-1 text-[#a48c68] hover:text-[#e8e2d5] rounded"
              title={ui.graph.resetView}
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Interactive Canvas and Detail Drawer */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Graph Canvas */}
        <div
          className="lg:col-span-8 h-[650px] rounded-2xl bg-[#0f0d0b] border border-[#a48c68]/30 shadow-2xl relative overflow-hidden select-none cursor-grab active:cursor-grabbing"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          {/* Subtle Grid Watermark / Background Texture */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#a48c68" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>

          {/* Interactive Graph Surface */}
          <svg
            className="w-full h-full"
            viewBox="0 0 1000 700"
          >
            <g transform={`translate(${panOffset.x}, ${panOffset.y}) scale(${zoomLevel})`}>
              {/* Edges / Relationship Links */}
              {links.map(link => {
                const sourceNode = nodes.find(n => n.id === link.source);
                const targetNode = nodes.find(n => n.id === link.target);
                if (!sourceNode || !targetNode) return null;

                const isConnectedToSelected =
                  selectedNodeId && (link.source === selectedNodeId || link.target === selectedNodeId);
                const isCurrentLink = selectedLinkId === link.id;

                const getStrokeColor = () => {
                  switch (link.evidenceLevel) {
                    case 'DOCUMENTED': return '#10b981'; // Emerald
                    case 'STRONG': return '#3b82f6';     // Blue
                    case 'COMPARATIVE': return '#f59e0b';// Amber
                    case 'POSSIBLE': return '#a855f7';   // Purple
                    case 'SPECULATIVE': return '#ef4444';// Red
                  }
                };

                return (
                  <g
                    key={link.id}
                    className="cursor-pointer group"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedLinkId(link.id);
                    }}
                  >
                    <line
                      x1={sourceNode.x}
                      y1={sourceNode.y}
                      x2={targetNode.x}
                      y2={targetNode.y}
                      stroke={getStrokeColor()}
                      strokeWidth={isCurrentLink ? 4 : isConnectedToSelected ? 2.5 : 1.2}
                      strokeOpacity={isCurrentLink || isConnectedToSelected ? 0.95 : 0.4}
                      strokeDasharray={
                        link.evidenceLevel === 'POSSIBLE' || link.evidenceLevel === 'SPECULATIVE'
                          ? '5,5'
                          : 'none'
                      }
                    />
                    {/* Edge Label on Hover or Active */}
                    {(isCurrentLink || isConnectedToSelected) && (
                      <text
                        x={(sourceNode.x + targetNode.x) / 2}
                        y={(sourceNode.y + targetNode.y) / 2 - 6}
                        fill="#f5d77f"
                        fontSize="9"
                        fontWeight="600"
                        textAnchor="middle"
                        className="pointer-events-none drop-shadow"
                      >
                        {link.relationshipType}
                      </text>
                    )}
                  </g>
                );
              })}

              {/* Graph Nodes */}
              {filteredNodes.map(node => {
                const isSelected = selectedNodeId === node.id;
                const isConnected =
                  selectedNodeId &&
                  links.some(l => (l.source === selectedNodeId && l.target === node.id) || (l.target === selectedNodeId && l.source === node.id));

                return (
                  <g
                    key={node.id}
                    transform={`translate(${node.x}, ${node.y})`}
                    className="cursor-pointer transition-transform"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedNodeId(node.id);
                      setSelectedLinkId(null);
                    }}
                  >
                    {/* Outer Glow for Selected / Connected */}
                    {isSelected && (
                      <circle
                        r="24"
                        fill="none"
                        stroke="#f5d77f"
                        strokeWidth="2.5"
                        strokeDasharray="4,4"
                        className="animate-spin-slow opacity-80"
                      />
                    )}
                    {isConnected && !isSelected && (
                      <circle
                        r="18"
                        fill="none"
                        stroke="#c99738"
                        strokeWidth="1.5"
                        opacity="0.6"
                      />
                    )}

                    {/* Node Body */}
                    <circle
                      r={node.type === 'passage' ? 14 : 11}
                      fill="#181512"
                      stroke={node.color}
                      strokeWidth={isSelected ? 3 : 2}
                    />

                    {/* Inner Glyphic Dot */}
                    <circle
                      r={node.type === 'passage' ? 5 : 3.5}
                      fill={node.color}
                    />

                    {/* Text Label */}
                    <text
                      y={node.type === 'passage' ? 24 : 20}
                      fill={isSelected ? '#f5d77f' : isConnected ? '#e8e2d5' : '#a48c68'}
                      fontSize={isSelected ? "11" : "10"}
                      fontWeight={isSelected ? "700" : "500"}
                      textAnchor="middle"
                      className="pointer-events-none drop-shadow-md select-none font-serif"
                    >
                      {node.label}
                    </text>
                  </g>
                );
              })}
            </g>
          </svg>

          {/* Floating Instructions */}
          <div className="absolute bottom-3 left-3 px-3 py-1.5 rounded-lg bg-[#14120f]/80 backdrop-blur-sm border border-[#2d251d] text-[11px] text-[#a48c68] pointer-events-none">
            {ui.graph.inspectHint} &bull; {ui.graph.dragToPan}
          </div>
        </div>

        {/* Right Detail Drawer */}
        <div className="lg:col-span-4 p-6 rounded-2xl bg-[#151210] border border-[#a48c68]/30 shadow-xl space-y-5 max-h-[650px] overflow-y-auto text-left">
          {selectedLink ? (
            /* Selected Connection Detail */
            (() => {
              const loc = getLocalizedRelationship(selectedLink, language);
              return (
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-[#2d251d]">
                    <div className="text-xs uppercase tracking-wider font-semibold text-[#c99738] flex items-center gap-1.5">
                      <Info className="w-3.5 h-3.5" />
                      {ui.graph.relationshipDetails}
                    </div>
                    <button
                      onClick={() => setSelectedLinkId(null)}
                      className="text-xs text-[#a48c68] hover:text-white"
                    >
                      &larr; {ui.graph.backToNode}
                    </button>
                  </div>

                  <div>
                    <EvidenceBadge level={selectedLink.evidenceLevel} relationshipType={selectedLink.relationshipType as any} />
                    <h3 className="text-lg font-bold font-display text-[#f5d77f] mt-2">
                      {loc.title}
                    </h3>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#1b1713] border border-[#2b231a] text-xs text-[#ded5c7] leading-relaxed">
                    {loc.explanation}
                  </div>

                  {selectedLink.citations && selectedLink.citations.length > 0 && (
                    <div className="space-y-2">
                      <h4 className="text-xs uppercase tracking-wider font-semibold text-[#a48c68]">
                        {ui.graph.citationsHeading}
                      </h4>
                      <ul className="space-y-1 text-xs text-[#9c8e7e]">
                        {selectedLink.citations.map((cite, i) => (
                          <li key={i} className="p-2 rounded bg-[#100e0c] border border-[#241e17] font-mono text-[11px]">
                            {cite}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })()
          ) : selectedNode ? (
            /* Selected Node Detail */
            <div className="space-y-4">
              <div className="pb-3 border-b border-[#2d251d]">
                <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-[#241e18] text-[#c99738] border border-[#c99738]/30">
                  {selectedNode.group} &bull; {selectedNode.type}
                </span>
                <h3 className="text-xl font-bold font-display text-[#f5d77f] mt-1.5">
                  {selectedNode.label}
                </h3>
              </div>

              {/* Quick Action to Compare */}
              {selectedNode.type === 'passage' && onSelectPassage && (
                <button
                  onClick={() => onSelectPassage(selectedNode.id)}
                  className="w-full py-2 rounded-lg bg-[#25201a] hover:bg-[#342b22] border border-[#c99738]/40 text-xs font-semibold text-[#f5d77f] transition flex items-center justify-center gap-1.5"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>{ui.graph.compareSideBySide}</span>
                </button>
              )}

              {/* Outgoing & Incoming Relationships */}
              <div className="space-y-2.5">
                <div className="text-xs uppercase tracking-wider font-semibold text-[#a48c68] flex items-center justify-between">
                  <span>{ui.graph.documentedConnections(connectedLinks.length)}</span>
                  <span className="text-[10px] text-[#c99738]">{researchMode} Mode</span>
                </div>

                {connectedLinks.length === 0 ? (
                  <p className="text-xs text-[#8e806e] italic">
                    {ui.graph.noThresholdMatch(researchMode)}
                  </p>
                ) : (
                  <div className="space-y-2">
                    {connectedLinks.map(link => {
                      const otherNodeId = link.source === selectedNode.id ? link.target : link.source;
                      const otherNode = nodes.find(n => n.id === otherNodeId);
                      const locLink = getLocalizedRelationship(link, language);
                      return (
                        <div
                          key={link.id}
                          onClick={() => setSelectedLinkId(link.id)}
                          className="p-3 rounded-xl bg-[#1b1713] hover:bg-[#251f19] border border-[#2b231a] hover:border-[#4d3e2f] cursor-pointer transition text-left space-y-1.5"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-semibold text-[#e8e2d5]">
                              ↔ {otherNode?.label || otherNodeId}
                            </span>
                            <EvidenceBadge level={link.evidenceLevel} />
                          </div>
                          <div className="text-[11px] text-[#c99738] font-mono">
                            {(t.relationshipTypes as Record<string, string>)[link.relationshipType] || link.relationshipType}
                          </div>
                          <p className="text-xs text-[#a49989] line-clamp-2 leading-relaxed">
                            {locLink.explanation || locLink.title}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="p-8 text-center text-sm text-[#8e806e]">
              {ui.graph.selectNodeHint}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

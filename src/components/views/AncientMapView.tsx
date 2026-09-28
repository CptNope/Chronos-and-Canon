import React, { useState, useMemo, useEffect } from 'react';
import { mapLocations, MapLocation } from '../../data/maps';
import { cultures } from '../../data/cultures';
import { texts } from '../../data/texts';
import {
  MapPin,
  Compass,
  Globe,
  Sparkles,
  BookOpen,
  Layers,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Search,
  ExternalLink,
  ChevronRight,
  SlidersHorizontal,
  FolderOpen
} from 'lucide-react';

interface AncientMapViewProps {
  onSelectText?: (textId: string) => void;
}

type RegionPreset =
  | 'GLOBAL'
  | 'FERTILE_CRESCENT'
  | 'MEDITERRANEAN'
  | 'ASIA_PERSIA'
  | 'MESOAMERICA'
  | 'NORTH_EUROPE';

interface RegionBounds {
  name: string;
  minLng: number;
  maxLng: number;
  minLat: number;
  maxLat: number;
}

const REGION_BOUNDS: Record<RegionPreset, RegionBounds> = {
  GLOBAL: {
    name: 'Global Ancient Horizons',
    minLng: -110,
    maxLng: 90,
    minLat: 10,
    maxLat: 68
  },
  FERTILE_CRESCENT: {
    name: 'Fertile Crescent & Nile Corridor',
    minLng: 28,
    maxLng: 50,
    minLat: 24,
    maxLat: 38
  },
  MEDITERRANEAN: {
    name: 'Mediterranean & Aegean Basin',
    minLng: 9,
    maxLng: 38,
    minLat: 30,
    maxLat: 46
  },
  ASIA_PERSIA: {
    name: 'Iranian Plateau & Indus-Sarasvati',
    minLng: 44,
    maxLng: 84,
    minLat: 22,
    maxLat: 38
  },
  MESOAMERICA: {
    name: 'Mesoamerican Highlands & Maya Lowlands',
    minLng: -103,
    maxLng: -86,
    minLat: 12,
    maxLat: 22
  },
  NORTH_EUROPE: {
    name: 'Northern Europe & North Atlantic',
    minLng: -26,
    maxLng: 26,
    minLat: 52,
    maxLat: 67
  }
};

export const AncientMapView: React.FC<AncientMapViewProps> = ({ onSelectText }) => {
  const [selectedLocationId, setSelectedLocationId] = useState<string>('qumran_caves');
  const [selectedRegion, setSelectedRegion] = useState<RegionPreset>('FERTILE_CRESCENT');
  const [filterCulture, setFilterCulture] = useState<string>('ALL');
  const [filterImportance, setFilterImportance] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeTab, setActiveTab] = useState<'MAP' | 'DIRECTORY'>('MAP');
  const [zoomScale, setZoomScale] = useState<number>(1);
  const [hoveredLocationId, setHoveredLocationId] = useState<string | null>(null);

  // Auto-switch region if user chooses a culture from another world area
  useEffect(() => {
    if (filterCulture === 'ALL') return;
    if (filterCulture === 'maya' || filterCulture === 'aztec') {
      setSelectedRegion('MESOAMERICA');
    } else if (filterCulture === 'norse_germanic') {
      setSelectedRegion('NORTH_EUROPE');
    } else if (filterCulture === 'persian_zoroastrian' || filterCulture === 'vedic_hindu') {
      setSelectedRegion('ASIA_PERSIA');
    } else if (filterCulture === 'greco_roman') {
      setSelectedRegion('MEDITERRANEAN');
    } else if (
      filterCulture === 'hebrew_israelite' ||
      filterCulture === 'dead_sea_scrolls' ||
      filterCulture === 'mesopotamian' ||
      filterCulture === 'canaanite_ugaritic' ||
      filterCulture === 'egyptian' ||
      filterCulture === 'second_temple_jewish'
    ) {
      setSelectedRegion('FERTILE_CRESCENT');
    }
  }, [filterCulture]);

  const selectedLocation =
    mapLocations.find(m => m.id === selectedLocationId) || mapLocations[0];

  // Filtered list of locations based on user criteria
  const filteredLocations = useMemo(() => {
    return mapLocations.filter(loc => {
      if (filterCulture !== 'ALL' && loc.cultureId !== filterCulture) return false;
      if (filterImportance !== 'ALL' && loc.importance !== filterImportance) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = loc.name.toLowerCase().includes(q);
        const matchesRegion = loc.ancientRegion.toLowerCase().includes(q);
        const matchesCountry = loc.modernCountry.toLowerCase().includes(q);
        const matchesFinds = loc.keyDiscoveries.some(d => d.toLowerCase().includes(q));
        if (!matchesName && !matchesRegion && !matchesCountry && !matchesFinds) return false;
      }
      return true;
    });
  }, [filterCulture, filterImportance, searchQuery]);

  // SVG coordinate transformation using active region bounds
  const projectCoords = (lat: number, lng: number) => {
    const bounds = REGION_BOUNDS[selectedRegion];
    const width = 900;
    const height = 520;
    const paddingX = 50;
    const paddingY = 40;

    const normX = (lng - bounds.minLng) / (bounds.maxLng - bounds.minLng);
    const normY = (bounds.maxLat - lat) / (bounds.maxLat - bounds.minLat);

    const x = paddingX + normX * (width - 2 * paddingX);
    const y = paddingY + normY * (height - 2 * paddingY);

    return { x, y };
  };

  const getCultureColor = (cultureId: string) => {
    switch (cultureId) {
      case 'hebrew_israelite': return '#c99738';
      case 'dead_sea_scrolls': return '#f5d77f';
      case 'second_temple_jewish': return '#eab308';
      case 'mesopotamian': return '#c084fc';
      case 'canaanite_ugaritic': return '#fb923c';
      case 'greco_roman': return '#38bdf8';
      case 'egyptian': return '#facc15';
      case 'norse_germanic': return '#818cf8';
      case 'vedic_hindu': return '#f43f5e';
      case 'persian_zoroastrian': return '#a855f7';
      case 'maya':
      case 'aztec': return '#2dd4bf';
      default: return '#c99738';
    }
  };

  const handleSelectSite = (site: MapLocation) => {
    setSelectedLocationId(site.id);
    // Switch to corresponding region if out of bounds
    if (selectedRegion !== 'GLOBAL') {
      const bounds = REGION_BOUNDS[selectedRegion];
      const isOutOfBounds =
        site.coordinates.lng < bounds.minLng ||
        site.coordinates.lng > bounds.maxLng ||
        site.coordinates.lat < bounds.minLat ||
        site.coordinates.lat > bounds.maxLat;

      if (isOutOfBounds) {
        if (site.regionGroup === 'MESOAMERICA') setSelectedRegion('MESOAMERICA');
        else if (site.regionGroup === 'NORTH_EUROPE') setSelectedRegion('NORTH_EUROPE');
        else if (site.regionGroup === 'ASIA_PERSIA') setSelectedRegion('ASIA_PERSIA');
        else if (site.regionGroup === 'MEDITERRANEAN') setSelectedRegion('MEDITERRANEAN');
        else setSelectedRegion('FERTILE_CRESCENT');
      }
    }
  };

  return (
    <div className="space-y-6">
      {/* Header & Controls Panel */}
      <div className="p-6 rounded-2xl bg-[#161311] border border-[#a48c68]/20 shadow-xl space-y-4">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#c99738] uppercase tracking-wider">
              <Compass className="w-4 h-4" />
              Archaeological Cartography &amp; Excavation Provenance
            </div>
            <h1 className="text-2xl md:text-3xl font-bold font-display text-[#f5d77f] mt-1">
              Ancient World Atlas
            </h1>
            <p className="text-sm text-[#b8ad9e] mt-1 max-w-3xl">
              Discover the exact geographical coordinates and excavation contexts where the Dead Sea Scrolls, Ugaritic tablets, Mesopotamian libraries, and primeval epics were unearthed.
            </p>
          </div>

          {/* View Mode Switcher */}
          <div className="flex items-center gap-2">
            <div className="flex p-1 rounded-xl bg-[#201a14] border border-[#3b3226]">
              <button
                onClick={() => setActiveTab('MAP')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                  activeTab === 'MAP'
                    ? 'bg-[#c99738] text-[#12100e] shadow'
                    : 'text-[#a48c68] hover:text-[#e8e2d5]'
                }`}
              >
                <Globe className="w-3.5 h-3.5" />
                <span>Interactive Map</span>
              </button>
              <button
                onClick={() => setActiveTab('DIRECTORY')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                  activeTab === 'DIRECTORY'
                    ? 'bg-[#c99738] text-[#12100e] shadow'
                    : 'text-[#a48c68] hover:text-[#e8e2d5]'
                }`}
              >
                <FolderOpen className="w-3.5 h-3.5" />
                <span>Site Directory ({filteredLocations.length})</span>
              </button>
            </div>
          </div>
        </div>

        {/* Region Preset Bar */}
        <div className="pt-3 border-t border-[#29221b] flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-[11px] font-semibold text-[#a48c68] uppercase mr-1">Region Focus:</span>
            <button
              onClick={() => setSelectedRegion('FERTILE_CRESCENT')}
              className={`px-2.5 py-1 rounded-lg text-xs font-medium transition ${
                selectedRegion === 'FERTILE_CRESCENT'
                  ? 'bg-[#c99738] text-[#12100e] font-bold shadow'
                  : 'bg-[#1e1915] text-[#b8ad9e] hover:bg-[#2c241d] border border-[#362f27]'
              }`}
            >
              Fertile Crescent &amp; Levant
            </button>
            <button
              onClick={() => setSelectedRegion('MEDITERRANEAN')}
              className={`px-2.5 py-1 rounded-lg text-xs font-medium transition ${
                selectedRegion === 'MEDITERRANEAN'
                  ? 'bg-[#c99738] text-[#12100e] font-bold shadow'
                  : 'bg-[#1e1915] text-[#b8ad9e] hover:bg-[#2c241d] border border-[#362f27]'
              }`}
            >
              Mediterranean &amp; Greece
            </button>
            <button
              onClick={() => setSelectedRegion('ASIA_PERSIA')}
              className={`px-2.5 py-1 rounded-lg text-xs font-medium transition ${
                selectedRegion === 'ASIA_PERSIA'
                  ? 'bg-[#c99738] text-[#12100e] font-bold shadow'
                  : 'bg-[#1e1915] text-[#b8ad9e] hover:bg-[#2c241d] border border-[#362f27]'
              }`}
            >
              Persia &amp; Indus-Sarasvati
            </button>
            <button
              onClick={() => setSelectedRegion('MESOAMERICA')}
              className={`px-2.5 py-1 rounded-lg text-xs font-medium transition ${
                selectedRegion === 'MESOAMERICA'
                  ? 'bg-[#c99738] text-[#12100e] font-bold shadow'
                  : 'bg-[#1e1915] text-[#b8ad9e] hover:bg-[#2c241d] border border-[#362f27]'
              }`}
            >
              Mesoamerica
            </button>
            <button
              onClick={() => setSelectedRegion('NORTH_EUROPE')}
              className={`px-2.5 py-1 rounded-lg text-xs font-medium transition ${
                selectedRegion === 'NORTH_EUROPE'
                  ? 'bg-[#c99738] text-[#12100e] font-bold shadow'
                  : 'bg-[#1e1915] text-[#b8ad9e] hover:bg-[#2c241d] border border-[#362f27]'
              }`}
            >
              Northern Europe
            </button>
            <button
              onClick={() => setSelectedRegion('GLOBAL')}
              className={`px-2.5 py-1 rounded-lg text-xs font-medium transition ${
                selectedRegion === 'GLOBAL'
                  ? 'bg-[#c99738] text-[#12100e] font-bold shadow'
                  : 'bg-[#1e1915] text-[#b8ad9e] hover:bg-[#2c241d] border border-[#362f27]'
              }`}
            >
              Global Overview
            </button>
          </div>

          <div className="text-xs text-[#8e806e]">
            Viewing: <strong className="text-[#f5d77f]">{REGION_BOUNDS[selectedRegion].name}</strong>
          </div>
        </div>

        {/* Filters and Search Bar */}
        <div className="pt-3 border-t border-[#29221b] flex flex-wrap items-center gap-3">
          <div className="relative flex-1 min-w-[200px]">
            <Search className="absolute left-3 top-2.5 w-3.5 h-3.5 text-[#a48c68]" />
            <input
              type="text"
              placeholder="Search site name, modern country, or discovery (e.g. Qumran, Gilgamesh, Dolmen)..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 rounded-lg bg-[#1a1714] border border-[#3b3226] text-xs text-[#e8e2d5] placeholder-[#7d6f5d] focus:outline-none focus:border-[#c99738]"
            />
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-[#a48c68]">Tradition:</span>
            <select
              value={filterCulture}
              onChange={e => setFilterCulture(e.target.value)}
              className="px-2.5 py-1.5 rounded-lg bg-[#1a1714] border border-[#3b3226] text-xs text-[#e8e2d5] focus:outline-none focus:border-[#c99738]"
            >
              <option value="ALL">All Traditions ({mapLocations.length})</option>
              {cultures.map(c => {
                const count = mapLocations.filter(m => m.cultureId === c.id).length;
                return (
                  <option key={c.id} value={c.id}>
                    {c.name} ({count})
                  </option>
                );
              })}
            </select>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-[#a48c68]">Type:</span>
            <select
              value={filterImportance}
              onChange={e => setFilterImportance(e.target.value)}
              className="px-2.5 py-1.5 rounded-lg bg-[#1a1714] border border-[#3b3226] text-xs text-[#e8e2d5] focus:outline-none focus:border-[#c99738]"
            >
              <option value="ALL">All Excavation Types</option>
              <option value="Primary Excavation">Primary Excavation</option>
              <option value="Archival Discovery">Archival Discovery</option>
              <option value="Ancient Capital">Ancient Capital</option>
              <option value="Mythological Axis">Mythological Axis</option>
            </select>
          </div>
        </div>
      </div>

      {activeTab === 'MAP' ? (
        /* MAP VIEW: SVG Cartographic Canvas + Detail Drawer */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* SVG Map Container */}
          <div className="lg:col-span-8 rounded-2xl bg-[#0d0b09] border border-[#a48c68]/30 shadow-2xl relative overflow-hidden select-none p-2 flex flex-col justify-between">
            {/* Top Overlay Badge & Zoom Controls */}
            <div className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between pointer-events-none">
              <div className="px-3 py-1.5 rounded-xl bg-[#161311]/90 backdrop-blur-md border border-[#2b241c] text-xs shadow-lg pointer-events-auto flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#c99738]" />
                <span className="font-semibold text-[#f5d77f] font-display">
                  {REGION_BOUNDS[selectedRegion].name}
                </span>
                <span className="text-[#8e806e] text-[11px]">
                  ({filteredLocations.length} sites in dataset)
                </span>
              </div>

              {/* Map Zoom Controls */}
              <div className="flex items-center gap-1 p-1 rounded-xl bg-[#161311]/90 backdrop-blur-md border border-[#2b241c] shadow-lg pointer-events-auto">
                <button
                  onClick={() => setZoomScale(prev => Math.min(prev + 0.25, 2.2))}
                  className="p-1.5 rounded-lg text-[#a48c68] hover:text-[#f5d77f] hover:bg-[#201a14] transition"
                  title="Zoom In"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setZoomScale(prev => Math.max(prev - 0.25, 0.75))}
                  className="p-1.5 rounded-lg text-[#a48c68] hover:text-[#f5d77f] hover:bg-[#201a14] transition"
                  title="Zoom Out"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setZoomScale(1)}
                  className="p-1.5 rounded-lg text-[#a48c68] hover:text-[#f5d77f] hover:bg-[#201a14] transition"
                  title="Reset Zoom"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* SVG Archaeological Map */}
            <div className="w-full overflow-hidden flex items-center justify-center min-h-[500px]">
              <svg
                className="w-full h-[520px] transition-transform duration-300 ease-out"
                viewBox="0 0 900 520"
                style={{ transform: `scale(${zoomScale})` }}
              >
                <defs>
                  <linearGradient id="deepSeaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0c1218" />
                    <stop offset="100%" stopColor="#080b0f" />
                  </linearGradient>
                  <linearGradient id="ancientTerrainGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1e1813" />
                    <stop offset="100%" stopColor="#15110d" />
                  </linearGradient>
                  <filter id="siteGlow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="4" />
                  </filter>
                </defs>

                {/* Oceanic Waters Background */}
                <rect width="900" height="520" fill="url(#deepSeaGrad)" />

                {/* Regional Landmass Silhouettes & Waterways */}
                {selectedRegion === 'FERTILE_CRESCENT' && (
                  <g>
                    {/* Mediterranean Sea Water body cutout / Landmass */}
                    <path
                      d="M 0 0 L 250 0 C 265 140, 275 250, 310 330 C 330 380, 290 420, 210 440 C 140 460, 100 480, 60 520 L 900 520 L 900 0 Z"
                      fill="url(#ancientTerrainGrad)"
                      stroke="#382e22"
                      strokeWidth="1.5"
                    />

                    {/* Nile Delta & River Course */}
                    <path
                      d="M 175 440 C 185 460, 195 490, 205 520"
                      fill="none"
                      stroke="#1a3550"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                    {/* Red Sea & Gulf of Suez */}
                    <path
                      d="M 230 470 L 275 520"
                      fill="none"
                      stroke="#0c1218"
                      strokeWidth="16"
                      strokeLinecap="round"
                    />
                    {/* Sea of Galilee, Jordan River, and Dead Sea Basin */}
                    <circle cx="316" cy="295" r="3" fill="#1a3550" />
                    <line x1="316" y1="298" x2="316" y2="335" stroke="#1a3550" strokeWidth="2" />
                    <ellipse cx="316" cy="342" rx="3.5" ry="9" fill="#1a3550" />

                    {/* Euphrates River flowing down through Mesopotamia */}
                    <path
                      d="M 370 120 C 440 180, 520 270, 620 370 C 690 430, 780 470, 840 500"
                      fill="none"
                      stroke="#17314d"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />
                    {/* Tigris River */}
                    <path
                      d="M 520 80 C 580 150, 660 250, 720 340 C 760 410, 810 460, 850 495"
                      fill="none"
                      stroke="#17314d"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />
                    {/* Persian Gulf */}
                    <path
                      d="M 830 490 C 860 505, 890 515, 900 520"
                      fill="none"
                      stroke="#0c1218"
                      strokeWidth="45"
                    />

                    {/* Archaic Historical Inscriptions */}
                    <text x="75" y="260" fill="#4d3f32" fontSize="12" letterSpacing="4" fontFamily="serif" fontWeight="bold">MARE INTERNUM (MEDITERRANEAN)</text>
                    <text x="540" y="240" fill="#4a3c2e" fontSize="14" letterSpacing="5" fontFamily="serif" fontWeight="bold">MESOPOTAMIA</text>
                    <text x="350" y="390" fill="#45382b" fontSize="10" letterSpacing="3" fontFamily="serif" fontWeight="bold">SYRIAN DESERT</text>
                    <text x="110" y="500" fill="#4a3c2e" fontSize="13" letterSpacing="4" fontFamily="serif" fontWeight="bold">EGYPT (KEMET)</text>
                    <text x="325" y="325" fill="#756149" fontSize="9" fontFamily="serif" fontWeight="bold">CANAAN</text>
                  </g>
                )}

                {selectedRegion === 'MEDITERRANEAN' && (
                  <g>
                    {/* Continental Europe / Greece / Italy / Anatolia */}
                    <path
                      d="M 0 0 L 900 0 L 900 240 C 820 220, 750 250, 670 270 C 580 290, 520 260, 480 320 C 420 370, 360 300, 320 280 C 260 250, 200 320, 160 370 L 120 360 C 150 270, 120 210, 80 180 C 40 160, 0 150, 0 150 Z"
                      fill="url(#ancientTerrainGrad)"
                      stroke="#382e22"
                      strokeWidth="1.5"
                    />
                    {/* North African Coast */}
                    <path
                      d="M 0 450 C 120 460, 240 430, 360 450 C 480 470, 600 440, 720 460 L 900 480 L 900 520 L 0 520 Z"
                      fill="url(#ancientTerrainGrad)"
                      stroke="#382e22"
                      strokeWidth="1"
                    />
                    {/* Crete Island */}
                    <path
                      d="M 470 395 C 490 390, 520 395, 540 400 C 520 405, 490 403, 470 395 Z"
                      fill="url(#ancientTerrainGrad)"
                      stroke="#4d3f32"
                      strokeWidth="1"
                    />
                    <text x="340" y="270" fill="#4d3f32" fontSize="13" letterSpacing="4" fontFamily="serif" fontWeight="bold">HELLAS (GREECE)</text>
                    <text x="680" y="210" fill="#4d3f32" fontSize="13" letterSpacing="4" fontFamily="serif" fontWeight="bold">ANATOLIA</text>
                    <text x="140" y="250" fill="#4d3f32" fontSize="12" letterSpacing="3" fontFamily="serif" fontWeight="bold">ITALIA</text>
                  </g>
                )}

                {selectedRegion === 'ASIA_PERSIA' && (
                  <g>
                    {/* Iranian Plateau to Indus Valley Landmass */}
                    <path
                      d="M 0 0 L 900 0 L 900 460 C 820 480, 740 470, 670 420 C 600 380, 540 440, 480 480 C 380 460, 280 480, 200 440 C 120 400, 60 480, 0 460 Z"
                      fill="url(#ancientTerrainGrad)"
                      stroke="#382e22"
                      strokeWidth="1.5"
                    />
                    {/* Indus River */}
                    <path
                      d="M 680 80 C 700 160, 710 260, 690 360 C 680 410, 670 440, 660 460"
                      fill="none"
                      stroke="#17314d"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />
                    {/* Ganges Course */}
                    <path
                      d="M 750 160 C 780 200, 820 230, 880 250"
                      fill="none"
                      stroke="#17314d"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <text x="240" y="220" fill="#4a3c2e" fontSize="14" letterSpacing="5" fontFamily="serif" fontWeight="bold">IRANIAN PLATEAU (PARSA)</text>
                    <text x="680" y="240" fill="#4a3c2e" fontSize="13" letterSpacing="4" fontFamily="serif" fontWeight="bold">ARYAVARTA (INDUS-SARASVATI)</text>
                  </g>
                )}

                {selectedRegion === 'MESOAMERICA' && (
                  <g>
                    {/* Mesoamerican Land Bridge */}
                    <path
                      d="M 0 100 Q 240 180, 380 260 T 680 340 T 900 450 L 900 520 L 0 520 Z"
                      fill="url(#ancientTerrainGrad)"
                      stroke="#382e22"
                      strokeWidth="1.5"
                    />
                    {/* Yucatan Peninsula Projection */}
                    <path
                      d="M 580 260 C 610 180, 720 170, 780 240 C 800 290, 760 360, 700 350 Z"
                      fill="url(#ancientTerrainGrad)"
                      stroke="#382e22"
                      strokeWidth="1"
                    />
                    <text x="420" y="160" fill="#4d3f32" fontSize="13" letterSpacing="4" fontFamily="serif" fontWeight="bold">GULF OF MEXICO</text>
                    <text x="520" y="380" fill="#4a3c2e" fontSize="14" letterSpacing="5" fontFamily="serif" fontWeight="bold">MAYA HIGHLANDS &amp; PETÉN</text>
                    <text x="180" y="290" fill="#4a3c2e" fontSize="12" letterSpacing="3" fontFamily="serif" fontWeight="bold">VALLEY OF MEXICO</text>
                  </g>
                )}

                {selectedRegion === 'NORTH_EUROPE' && (
                  <g>
                    {/* Scandinavia & Iceland */}
                    {/* Iceland */}
                    <path
                      d="M 80 140 C 130 130, 160 150, 150 190 C 130 210, 80 200, 70 170 Z"
                      fill="url(#ancientTerrainGrad)"
                      stroke="#382e22"
                      strokeWidth="1.2"
                    />
                    {/* Scandinavian Peninsula */}
                    <path
                      d="M 520 40 C 600 60, 680 120, 700 240 C 720 340, 680 420, 640 450 L 580 440 C 560 340, 580 240, 520 160 Z"
                      fill="url(#ancientTerrainGrad)"
                      stroke="#382e22"
                      strokeWidth="1.5"
                    />
                    <text x="90" y="120" fill="#4d3f32" fontSize="11" letterSpacing="3" fontFamily="serif" fontWeight="bold">ICELAND</text>
                    <text x="640" y="260" fill="#4a3c2e" fontSize="13" letterSpacing="4" fontFamily="serif" fontWeight="bold">SCANDINAVIA</text>
                  </g>
                )}

                {selectedRegion === 'GLOBAL' && (
                  <g>
                    {/* Macro Afro-Eurasia */}
                    <path
                      d="M 380 90 Q 520 80, 640 120 T 860 220 L 880 360 Q 720 420, 610 510 L 460 510 Q 380 360, 410 220 Z"
                      fill="url(#ancientTerrainGrad)"
                      stroke="#382e22"
                      strokeWidth="1"
                    />
                    {/* Americas */}
                    <path
                      d="M 60 140 Q 160 130, 190 250 T 130 400 L 190 510 L 80 510 Z"
                      fill="url(#ancientTerrainGrad)"
                      stroke="#382e22"
                      strokeWidth="1"
                    />
                    <text x="560" y="280" fill="#4d3f32" fontSize="12" letterSpacing="4" fontFamily="serif" fontWeight="bold">AFRO-EURASIA</text>
                    <text x="110" y="300" fill="#4d3f32" fontSize="12" letterSpacing="4" fontFamily="serif" fontWeight="bold">AMERICAS</text>
                  </g>
                )}

                {/* Subtle Latitude & Longitude Coordinate Grid */}
                <g stroke="#3a3024" strokeWidth="0.5" strokeDasharray="3,3" opacity="0.35">
                  <line x1="40" y1="130" x2="860" y2="130" />
                  <line x1="40" y1="260" x2="860" y2="260" />
                  <line x1="40" y1="390" x2="860" y2="390" />
                  <line x1="220" y1="40" x2="220" y2="480" />
                  <line x1="450" y1="40" x2="450" y2="480" />
                  <line x1="680" y1="40" x2="680" y2="480" />
                </g>

                {/* Ancient Golden Compass Rose */}
                <g transform="translate(80, 450)" opacity="0.5">
                  <circle cx="0" cy="0" r="32" fill="none" stroke="#c99738" strokeWidth="1" />
                  <circle cx="0" cy="0" r="26" fill="none" stroke="#c99738" strokeWidth="0.5" strokeDasharray="2,2" />
                  <path d="M 0 -30 L 3 -6 L 0 0 L -3 -6 Z" fill="#c99738" />
                  <path d="M 0 30 L 3 6 L 0 0 L -3 6 Z" fill="#a48c68" />
                  <path d="M -30 0 L -6 3 L 0 0 L -6 -3 Z" fill="#a48c68" />
                  <path d="M 30 0 L 6 3 L 0 0 L 6 -3 Z" fill="#a48c68" />
                  <text x="0" y="-33" textAnchor="middle" fill="#c99738" fontSize="8" fontWeight="bold">N</text>
                </g>

                {/* Interactive Archaeological Sites Markers */}
                {filteredLocations.map(loc => {
                  const { x, y } = projectCoords(loc.coordinates.lat, loc.coordinates.lng);
                  const isSelected = selectedLocationId === loc.id;
                  const isHovered = hoveredLocationId === loc.id;
                  const cultureColor = getCultureColor(loc.cultureId);

                  // Keep inside SVG bounds
                  if (x < 15 || x > 885 || y < 15 || y > 505) return null;

                  return (
                    <g
                      key={loc.id}
                      transform={`translate(${x}, ${y})`}
                      className="cursor-pointer group"
                      onClick={() => handleSelectSite(loc)}
                      onMouseEnter={() => setHoveredLocationId(loc.id)}
                      onMouseLeave={() => setHoveredLocationId(null)}
                    >
                      {/* Pulse Ring for Active Selection */}
                      {isSelected && (
                        <circle
                          r="16"
                          fill="none"
                          stroke="#f5d77f"
                          strokeWidth="2.5"
                          className="animate-ping opacity-60"
                        />
                      )}

                      {/* Hover Halo Glow */}
                      {isHovered && !isSelected && (
                        <circle
                          r="14"
                          fill={cultureColor}
                          opacity="0.3"
                          filter="url(#siteGlow)"
                        />
                      )}

                      {/* Outer Pin Ring */}
                      <circle
                        r={isSelected ? 10 : isHovered ? 8 : 6.5}
                        fill="#16120e"
                        stroke={isSelected ? '#f5d77f' : cultureColor}
                        strokeWidth={isSelected ? 3 : 2}
                        className="transition-all duration-200"
                      />

                      {/* Inner Core Dot */}
                      <circle
                        r={isSelected ? 4.5 : 3}
                        fill={isSelected ? '#f5d77f' : cultureColor}
                      />

                      {/* Site Name Label */}
                      <text
                        y={isSelected ? -15 : -11}
                        textAnchor="middle"
                        fill={isSelected ? '#f5d77f' : isHovered ? '#fff' : '#d6c8b4'}
                        fontSize={isSelected ? '11.5' : '9.5'}
                        fontWeight={isSelected ? '700' : '600'}
                        className="pointer-events-none drop-shadow-md font-serif select-none"
                      >
                        {loc.name.split('(')[0].trim()}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Bottom Status & Legend */}
            <div className="pt-2 border-t border-[#29221b] flex flex-wrap items-center justify-between gap-2 text-xs text-[#8e806e] px-2">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#c99738]" /> Hebrew / Israelite
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#f5d77f]" /> Dead Sea Scrolls
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#c084fc]" /> Mesopotamian
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#fb923c]" /> Ugaritic
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#38bdf8]" /> Greco-Roman
                </span>
              </div>
              <div className="text-[11px] text-[#a48c68]">
                Click marker or select below to examine excavation findings
              </div>
            </div>
          </div>

          {/* Selected Site Archaeological Dossier (Right Column) */}
          <div className="lg:col-span-4 p-6 rounded-2xl bg-[#161311] border border-[#a48c68]/30 shadow-xl space-y-4 text-left max-h-[640px] overflow-y-auto">
            <div className="pb-3 border-b border-[#2d251d]">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase px-2.5 py-0.5 rounded bg-[#201a14] text-[#c99738] border border-[#c99738]/30">
                  {selectedLocation.importance}
                </span>
                <span className="text-xs font-mono text-[#8e806e]">
                  {selectedLocation.coordinates.lat.toFixed(2)}°N, {selectedLocation.coordinates.lng.toFixed(2)}°E
                </span>
              </div>
              <h2 className="text-xl font-bold font-display text-[#f5d77f] mt-2">
                {selectedLocation.name}
              </h2>
              <div className="text-xs text-[#a48c68] mt-0.5 font-medium">
                {selectedLocation.ancientRegion} &bull; {selectedLocation.modernCountry}
              </div>
            </div>

            <p className="text-sm text-[#ded5c7] leading-relaxed">
              {selectedLocation.description}
            </p>

            {/* Key Discoveries & Tablets */}
            <div className="space-y-2 pt-2 border-t border-[#29221b]">
              <h4 className="text-xs uppercase tracking-wider font-semibold text-[#c99738] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Excavation Finds &amp; Primary Manuscripts
              </h4>
              <ul className="space-y-1.5 text-xs text-[#b8ad9e]">
                {selectedLocation.keyDiscoveries.map((disc, idx) => (
                  <li key={idx} className="p-2 rounded bg-[#1c1814] border border-[#2b241c] flex items-start gap-2">
                    <span className="text-[#c99738] font-bold">&bull;</span>
                    <span>{disc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Associated Catalogued Texts */}
            <div className="space-y-2 pt-2 border-t border-[#29221b]">
              <h4 className="text-xs uppercase tracking-wider font-semibold text-[#a48c68] flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-[#c99738]" />
                Corpus Works Linked to this Site
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {selectedLocation.associatedTexts.length === 0 ? (
                  <span className="text-xs text-[#8e806e] italic">
                    Historical context preserved through epigraphic and archaeological inscriptions.
                  </span>
                ) : (
                  selectedLocation.associatedTexts.map(tId => {
                    const text = texts.find(t => t.id === tId);
                    return (
                      <button
                        key={tId}
                        onClick={() => onSelectText?.(tId)}
                        className="px-2.5 py-1 rounded bg-[#201a14] hover:bg-[#2e261d] border border-[#a48c68]/30 text-xs text-[#f5d77f] font-medium transition flex items-center gap-1"
                      >
                        <span>{text?.title || tId}</span>
                        <ChevronRight className="w-3 h-3 text-[#c99738]" />
                      </button>
                    );
                  })
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* DIRECTORY VIEW: Filterable Archaeological Sites Grid */
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs text-[#a48c68] px-1">
            <span>Showing {filteredLocations.length} catalogued excavation sites</span>
            <span>Sorted by archaeological significance</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredLocations.map(site => {
              const culture = cultures.find(c => c.id === site.cultureId);
              const isSelected = selectedLocationId === site.id;

              return (
                <div
                  key={site.id}
                  onClick={() => {
                    handleSelectSite(site);
                    setActiveTab('MAP');
                  }}
                  className={`p-5 rounded-2xl bg-[#161311] border transition cursor-pointer text-left flex flex-col justify-between space-y-4 hover:border-[#c99738] ${
                    isSelected ? 'border-[#c99738] ring-1 ring-[#c99738]' : 'border-[#a48c68]/20'
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-[#201a14] text-[#c99738] border border-[#c99738]/30">
                        {site.importance}
                      </span>
                      <span className="text-[11px] font-mono text-[#8e806e]">
                        {site.coordinates.lat.toFixed(1)}°N, {site.coordinates.lng.toFixed(1)}°E
                      </span>
                    </div>

                    <h3 className="text-base font-bold font-display text-[#f5d77f]">
                      {site.name}
                    </h3>

                    <div className="text-xs text-[#a48c68]">
                      {site.ancientRegion} &bull; <span className="text-[#8e806e]">{site.modernCountry}</span>
                    </div>

                    <p className="text-xs text-[#b8ad9e] line-clamp-3 leading-relaxed">
                      {site.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#241e17] flex items-center justify-between text-xs">
                    <span className="text-[11px] text-[#c99738] font-medium">
                      {culture?.name || site.cultureId}
                    </span>
                    <span className="flex items-center gap-1 text-[#f5d77f] font-semibold text-[11px]">
                      <span>View on Map</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

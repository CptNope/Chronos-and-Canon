import React, { useState, useMemo } from 'react';
import { publicTextEditions, publicRepositoriesInfo } from '../../data/publicTexts';
import { cultures } from '../../data/cultures';
import { texts } from '../../data/texts';
import { PublicTextEdition } from '../../types';
import {
  ExternalLink,
  BookOpen,
  Search,
  Filter,
  Library,
  Globe,
  Sparkles,
  Layers,
  CheckCircle,
  Compass,
  ArrowRight,
  ShieldCheck,
  FileText,
  Eye,
  Info
} from 'lucide-react';

interface DigitalLibraryViewProps {
  onSelectText?: (textId: string) => void;
  initialFilterTextId?: string;
}

export const DigitalLibraryView: React.FC<DigitalLibraryViewProps> = ({
  onSelectText,
  initialFilterTextId
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCulture, setSelectedCulture] = useState<string>('ALL');
  const [selectedEditionType, setSelectedEditionType] = useState<string>('ALL');
  const [selectedInstitution, setSelectedInstitution] = useState<string>('ALL');
  const [activeTab, setActiveTab] = useState<'EDITIONS' | 'REPOSITORIES'>('EDITIONS');

  // Filtered public editions
  const filteredEditions = useMemo(() => {
    return publicTextEditions.filter(item => {
      // If initialFilterTextId was supplied and matches
      if (initialFilterTextId && item.textId !== initialFilterTextId) {
        // Only if user hasn't cleared search
      }

      if (selectedCulture !== 'ALL' && item.cultureId !== selectedCulture) {
        return false;
      }

      if (selectedEditionType !== 'ALL' && item.editionType !== selectedEditionType) {
        return false;
      }

      if (selectedInstitution !== 'ALL' && !item.institution.toLowerCase().includes(selectedInstitution.toLowerCase()) && !item.repositoryName.toLowerCase().includes(selectedInstitution.toLowerCase())) {
        return false;
      }

      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = item.title.toLowerCase().includes(q);
        const matchesTextTitle = item.textTitle.toLowerCase().includes(q);
        const matchesRepo = item.repositoryName.toLowerCase().includes(q);
        const matchesDesc = item.description.toLowerCase().includes(q);
        const matchesFeatures = item.highlightFeatures.some(f => f.toLowerCase().includes(q));
        const matchesInst = item.institution.toLowerCase().includes(q);

        if (!matchesTitle && !matchesTextTitle && !matchesRepo && !matchesDesc && !matchesFeatures && !matchesInst) {
          return false;
        }
      }

      return true;
    });
  }, [searchQuery, selectedCulture, selectedEditionType, selectedInstitution, initialFilterTextId]);

  const getEditionTypeBadge = (type: PublicTextEdition['editionType']) => {
    switch (type) {
      case 'High-Res Manuscript Facsimile':
        return 'bg-amber-950/40 text-amber-300 border-amber-600/40';
      case 'Original Script & Interlinear':
        return 'bg-emerald-950/40 text-emerald-300 border-emerald-600/40';
      case 'Critical Scholarly Edition':
        return 'bg-sky-950/40 text-sky-300 border-sky-600/40';
      case 'Open-Access Translation':
        return 'bg-purple-950/40 text-purple-300 border-purple-600/40';
      case 'Museum Specimen & 3D Scan':
        return 'bg-rose-950/40 text-rose-300 border-rose-600/40';
      default:
        return 'bg-stone-900 text-stone-300 border-stone-700';
    }
  };

  return (
    <div className="space-y-8">
      {/* Top Banner & Orientation */}
      <div className="p-6 md:p-8 rounded-2xl bg-[#161311] border border-[#a48c68]/30 shadow-xl space-y-4 text-left">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#c99738] uppercase tracking-wider">
              <Library className="w-4 h-4 text-[#c99738]" />
              Open-Access Primary Sources &amp; Digital Repositories
            </div>
            <h1 className="text-2xl md:text-4xl font-bold font-display text-[#f5d77f] mt-1.5">
              Publicly Available Ancient Texts &amp; Facsimiles
            </h1>
            <p className="text-sm md:text-base text-[#b8ad9e] mt-1.5 max-w-3xl leading-relaxed">
              Direct access to free, peer-reviewed, and institutional digital editions of the texts catalogued in this comparative archive. Examine ultra-high-resolution multispectral Dead Sea Scrolls, cuneiform clay tablets from Nineveh, polytonic Greek codices, and Mayan hieroglyphic manuscripts without paywalls.
            </p>
          </div>

          {/* Tab Selector */}
          <div className="flex p-1 rounded-xl bg-[#201a14] border border-[#3b3226] self-start lg:self-center">
            <button
              onClick={() => setActiveTab('EDITIONS')}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold transition ${
                activeTab === 'EDITIONS'
                  ? 'bg-[#c99738] text-[#12100e] shadow'
                  : 'text-[#a48c68] hover:text-[#e8e2d5]'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Catalogued Editions ({publicTextEditions.length})</span>
            </button>
            <button
              onClick={() => setActiveTab('REPOSITORIES')}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold transition ${
                activeTab === 'REPOSITORIES'
                  ? 'bg-[#c99738] text-[#12100e] shadow'
                  : 'text-[#a48c68] hover:text-[#e8e2d5]'
              }`}
            >
              <Globe className="w-3.5 h-3.5" />
              <span>Partner Repositories ({publicRepositoriesInfo.length})</span>
            </button>
          </div>
        </div>

        {/* Scholarly Integrity Badge */}
        <div className="pt-3 border-t border-[#29221b] flex flex-wrap items-center justify-between gap-2 text-xs text-[#8e806e]">
          <div className="flex items-center gap-2 text-[#c99738]">
            <ShieldCheck className="w-4 h-4" />
            <span className="font-medium">All links point to permanent, trusted academic institutions and public domain digital archives.</span>
          </div>
          <div className="text-[11px] text-[#a48c68]">
            Includes IAA, Sefaria, British Museum, Oxford ETCSL, Tufts Perseus, and Newberry Library.
          </div>
        </div>
      </div>

      {activeTab === 'EDITIONS' ? (
        /* ============================================================== */
        /* EDITIONS TAB: Search, Filters, and Comprehensive Resource Cards */
        /* ============================================================== */
        <div className="space-y-6">
          {/* Search & Filter Bar */}
          <div className="p-4 rounded-xl bg-[#171411] border border-[#362e24] shadow-md space-y-3">
            <div className="flex flex-col md:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-2.5 w-4 h-4 text-[#a48c68]" />
                <input
                  type="text"
                  placeholder="Search by text title, repository, artifact code, or keyword (e.g. 1 Enoch, 4Q201, Gilgamesh, Sefaria)..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 rounded-lg bg-[#110f0d] border border-[#3b3226] text-xs text-[#e8e2d5] placeholder-[#7d6f5d] focus:outline-none focus:border-[#c99738]"
                />
              </div>

              {/* Tradition Filter */}
              <select
                value={selectedCulture}
                onChange={e => setSelectedCulture(e.target.value)}
                className="px-3 py-2 rounded-lg bg-[#110f0d] border border-[#3b3226] text-xs text-[#e8e2d5] focus:outline-none focus:border-[#c99738]"
              >
                <option value="ALL">All Traditions ({publicTextEditions.length})</option>
                {cultures.map(c => {
                  const count = publicTextEditions.filter(p => p.cultureId === c.id).length;
                  return (
                    <option key={c.id} value={c.id}>
                      {c.name} ({count})
                    </option>
                  );
                })}
              </select>

              {/* Format / Edition Type Filter */}
              <select
                value={selectedEditionType}
                onChange={e => setSelectedEditionType(e.target.value)}
                className="px-3 py-2 rounded-lg bg-[#110f0d] border border-[#3b3226] text-xs text-[#e8e2d5] focus:outline-none focus:border-[#c99738]"
              >
                <option value="ALL">All Format Types</option>
                <option value="High-Res Manuscript Facsimile">High-Res Manuscript Facsimiles</option>
                <option value="Original Script & Interlinear">Original Script &amp; Interlinear</option>
                <option value="Critical Scholarly Edition">Critical Scholarly Editions</option>
                <option value="Open-Access Translation">Open-Access Complete Translations</option>
                <option value="Museum Specimen & 3D Scan">Museum Specimens &amp; 3D Scans</option>
              </select>

              {/* Institution Filter */}
              <select
                value={selectedInstitution}
                onChange={e => setSelectedInstitution(e.target.value)}
                className="px-3 py-2 rounded-lg bg-[#110f0d] border border-[#3b3226] text-xs text-[#e8e2d5] focus:outline-none focus:border-[#c99738]"
              >
                <option value="ALL">All Institutions</option>
                <option value="Israel Antiquities Authority">Dead Sea Scrolls / IAA</option>
                <option value="Sefaria">Sefaria</option>
                <option value="British Museum">The British Museum</option>
                <option value="Tufts">Tufts Perseus Digital Library</option>
                <option value="Oxford">University of Oxford (ETCSL)</option>
                <option value="Sacred-Texts">Internet Sacred Text Archive</option>
                <option value="Codex Sinaiticus">Codex Sinaiticus Project</option>
                <option value="Newberry">The Newberry Library</option>
              </select>
            </div>

            {/* Active Filters Pill Bar */}
            <div className="flex items-center justify-between text-xs text-[#a48c68] pt-1">
              <div>
                Showing <strong className="text-[#f5d77f]">{filteredEditions.length}</strong> of{' '}
                {publicTextEditions.length} publicly available editions
              </div>
              {(selectedCulture !== 'ALL' || selectedEditionType !== 'ALL' || selectedInstitution !== 'ALL' || searchQuery) && (
                <button
                  onClick={() => {
                    setSelectedCulture('ALL');
                    setSelectedEditionType('ALL');
                    setSelectedInstitution('ALL');
                    setSearchQuery('');
                  }}
                  className="text-[#c99738] hover:underline"
                >
                  Reset All Filters
                </button>
              )}
            </div>
          </div>

          {/* Editions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filteredEditions.map(item => {
              const culture = cultures.find(c => c.id === item.cultureId);
              const parentText = texts.find(t => t.id === item.textId);

              return (
                <div
                  key={item.id}
                  className="p-6 rounded-2xl bg-[#151210] border border-[#a48c68]/25 hover:border-[#c99738]/60 transition shadow-xl space-y-4 text-left flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    {/* Top Badges */}
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex flex-wrap items-center gap-1.5">
                        <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded border ${getEditionTypeBadge(item.editionType)}`}>
                          {item.editionType}
                        </span>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-[#201a14] border border-[#382f24] text-[#a48c68]">
                          {item.language}
                        </span>
                      </div>
                      <span className="text-[11px] font-mono text-[#c99738] font-semibold">
                        {culture?.name || item.cultureId}
                      </span>
                    </div>

                    {/* Title & Parent Text */}
                    <div>
                      <div className="text-xs text-[#a48c68] font-mono uppercase tracking-wider">
                        Linked Corpus: <span className="text-[#e8e2d5] font-semibold">{item.textTitle}</span>
                      </div>
                      <h3 className="text-lg font-bold font-display text-[#f5d77f] group-hover:text-white transition mt-0.5">
                        {item.title}
                      </h3>
                      <div className="text-xs text-[#c99738] font-medium mt-0.5 flex items-center gap-1">
                        <Library className="w-3 h-3 text-[#c99738]" />
                        <span>{item.repositoryName} &bull; <strong className="text-[#b8ad9e]">{item.institution}</strong></span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-[#b8ad9e] leading-relaxed">
                      {item.description}
                    </p>

                    {/* Key Technical Highlights */}
                    <div className="space-y-1.5 pt-2 border-t border-[#262019]">
                      <div className="text-[10px] uppercase font-bold text-[#a48c68] tracking-wider flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-[#c99738]" />
                        Edition Features:
                      </div>
                      <ul className="space-y-1 text-[11px] text-[#ded5c7]">
                        {item.highlightFeatures.map((feat, idx) => (
                          <li key={idx} className="flex items-start gap-1.5">
                            <span className="text-[#c99738] font-bold text-xs leading-none">&bull;</span>
                            <span className="leading-snug">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="pt-4 border-t border-[#29221b] flex flex-wrap items-center justify-between gap-2">
                    {/* External Link Button */}
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl bg-[#c99738] hover:bg-[#dbab4c] text-[#12100e] text-xs font-bold transition shadow flex items-center gap-1.5"
                    >
                      <span>Open Public Archive</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                    {/* Internal Reader Link */}
                    {item.textId && onSelectText && (
                      <button
                        onClick={() => onSelectText(item.textId!)}
                        className="px-3 py-2 rounded-xl bg-[#201a14] hover:bg-[#2b241c] border border-[#3b3226] text-[#f5d77f] text-xs font-medium transition flex items-center gap-1.5"
                      >
                        <BookOpen className="w-3.5 h-3.5 text-[#c99738]" />
                        <span>Compare in App</span>
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {filteredEditions.length === 0 && (
            <div className="p-12 text-center rounded-2xl bg-[#161311] border border-dashed border-[#362f27] space-y-3">
              <Search className="w-8 h-8 text-[#a48c68] mx-auto opacity-50" />
              <div className="text-sm font-semibold text-[#f5d77f]">No public editions match your active filters.</div>
              <p className="text-xs text-[#8e806e]">Try clearing your search query or selecting "All Traditions" above.</p>
              <button
                onClick={() => {
                  setSelectedCulture('ALL');
                  setSelectedEditionType('ALL');
                  setSelectedInstitution('ALL');
                  setSearchQuery('');
                }}
                className="px-4 py-2 rounded-lg bg-[#201a14] border border-[#c99738]/40 text-xs font-semibold text-[#c99738] hover:bg-[#2b231a] transition"
              >
                Reset Search Filters
              </button>
            </div>
          )}
        </div>
      ) : (
        /* ============================================================== */
        /* REPOSITORIES TAB: Overview of the World's Digital Archives     */
        /* ============================================================== */
        <div className="space-y-6 text-left">
          <div className="p-6 rounded-2xl bg-[#161311] border border-[#a48c68]/20 space-y-2">
            <h2 className="text-xl font-bold font-display text-[#f5d77f]">
              Primary Open-Access Institutional Repositories
            </h2>
            <p className="text-xs text-[#b8ad9e] leading-relaxed">
              These digital archives and university humanities initiatives host high-resolution photographic facsimiles, cuneiform transliterations, and open-access editions of the primary literature referenced throughout the Chronos &amp; Canon database.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {publicRepositoriesInfo.map(repo => (
              <div
                key={repo.id}
                className="p-6 rounded-2xl bg-[#161311] border border-[#a48c68]/25 hover:border-[#c99738]/50 transition shadow-xl space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-[#201a14] text-[#c99738] border border-[#c99738]/30">
                      Primary Institutional Host
                    </span>
                    <span className="text-xs font-mono text-[#8e806e]">
                      {repo.institution}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold font-display text-[#f5d77f]">
                    {repo.name}
                  </h3>

                  <p className="text-xs text-[#ded5c7] leading-relaxed">
                    {repo.description}
                  </p>

                  <div className="pt-2 text-xs">
                    <strong className="text-[#a48c68]">Archival Focus:</strong>{' '}
                    <span className="text-[#f5d77f] font-mono text-[11px]">{repo.focusArea}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#29221b] flex items-center justify-between">
                  <span className="text-[11px] text-[#8e806e]">Free / Open Access</span>
                  <a
                    href={repo.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 rounded-xl bg-[#c99738] hover:bg-[#dbab4c] text-[#12100e] text-xs font-bold transition flex items-center gap-1.5 shadow"
                  >
                    <span>Visit Repository</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Scholarly Explanatory Note on Critical Editions */}
      <div className="p-6 rounded-2xl bg-[#14110e] border border-[#2e261d] text-left space-y-2">
        <div className="flex items-center gap-2 text-xs uppercase font-bold text-[#c99738]">
          <Info className="w-4 h-4" />
          Note on Public Domain vs. Copyrighted Modern Critical Editions
        </div>
        <p className="text-xs text-[#a49989] leading-relaxed">
          The links in this directory connect directly to primary photographic facsimiles (e.g., Israel Antiquities Authority multispectral plates, British Museum 3D scans) and peer-reviewed open-access scholarly databases (Sefaria, Perseus Digital Library, Oxford ETCSL, GRETIL). Where full English translations are hosted online, they utilize historic public-domain critical milestones (such as R.H. Charles for 1 Enoch and Jubilees, George Smith/Thompson for Gilgamesh, or Ralph Griffith for the Rigveda). For 21st-century copyrighted academic translations and commentaries (such as the <em>Hermeneia</em> series by George Nickelsburg or Anchor Yale Bible), readers are encouraged to consult university libraries or academic publishing platforms.
        </p>
      </div>
    </div>
  );
};

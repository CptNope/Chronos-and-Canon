import React, { useState } from 'react';
import { useAppUpdate } from '../../context/PWAUpdateContext';
import { useLanguage } from '../../i18n/LanguageContext';
import { APP_VERSION, BUILD_DATE, APP_CODENAME, VERSION_HISTORY } from '../../version';
import {
  ShieldCheck,
  RefreshCw,
  HardDrive,
  CheckCircle2,
  Clock,
  Sparkles,
  X,
  AlertTriangle,
  History,
  Layers,
  ArrowUpCircle,
  Smartphone,
  ExternalLink
} from 'lucide-react';

interface VersionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VersionModal: React.FC<VersionModalProps> = ({ isOpen, onClose }) => {
  const {
    currentVersion,
    latestVersion,
    isUpdateAvailable,
    isChecking,
    isOfflineReady,
    lastChecked,
    checkForUpdates,
    applyUpdate,
    forceHardRefresh
  } = useAppUpdate();

  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState<'status' | 'changelog'>('status');
  const [feedbackMessage, setFeedbackMessage] = useState<string | null>(null);
  const [isUpdating, setIsUpdating] = useState(false);
  const [isResetting, setIsResetting] = useState(false);

  if (!isOpen) return null;

  const isStandalone =
    typeof window !== 'undefined' &&
    (window.matchMedia('(display-mode: standalone)').matches ||
      (window.navigator as unknown as { standalone?: boolean }).standalone === true);

  const handleManualCheck = async () => {
    setFeedbackMessage(null);
    const found = await checkForUpdates(false);
    if (!found) {
      setFeedbackMessage(t.updates.manualCheckSuccess);
    }
  };

  const handleApply = async () => {
    setIsUpdating(true);
    await applyUpdate();
  };

  const handleHardReset = async () => {
    if (window.confirm(t.updates.cleanResetNotice)) {
      setIsResetting(true);
      await forceHardRefresh();
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="version-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fade-in"
    >
      <div className="relative w-full max-w-2xl max-h-[90vh] flex flex-col bg-[#14110e] border border-[#a48c68]/40 rounded-2xl shadow-2xl overflow-hidden text-[#e8e2d5]">
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-[#2d251d] flex items-center justify-between bg-[#191511]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#c99738]/20 border border-[#c99738]/40 flex items-center justify-center text-[#f5d77f]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 id="version-modal-title" className="text-base font-bold font-display text-[#f5d77f]">
                {t.updates.modalTitle}
              </h3>
              <p className="text-[11px] text-[#a48c68] font-mono">
                {t.updates.currentVersion}: v{currentVersion} &bull; {APP_CODENAME}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label={t.common.close}
            className="p-1.5 rounded-lg text-[#a48c68] hover:text-[#f5d77f] hover:bg-[#251e18] transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 px-6 pt-3 border-b border-[#261f18] bg-[#16120e] text-xs">
          <button
            onClick={() => setActiveTab('status')}
            className={`pb-2.5 px-3 font-semibold transition border-b-2 flex items-center gap-1.5 ${
              activeTab === 'status'
                ? 'border-[#c99738] text-[#f5d77f]'
                : 'border-transparent text-[#8e806e] hover:text-[#ded5c7]'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>{t.updates.modalSubtitle.split(',')[0]}</span>
          </button>
          <button
            onClick={() => setActiveTab('changelog')}
            className={`pb-2.5 px-3 font-semibold transition border-b-2 flex items-center gap-1.5 ${
              activeTab === 'changelog'
                ? 'border-[#c99738] text-[#f5d77f]'
                : 'border-transparent text-[#8e806e] hover:text-[#ded5c7]'
            }`}
          >
            <History className="w-3.5 h-3.5" />
            <span>{t.updates.changelogTitle}</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {activeTab === 'status' && (
            <div className="space-y-6">
              {/* Status Banner */}
              {isUpdateAvailable ? (
                <div className="p-4 rounded-xl bg-[#c99738]/15 border border-[#c99738]/50 flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <ArrowUpCircle className="w-5 h-5 text-[#f5d77f] flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#f5d77f]">
                        {t.updates.statusUpdateAvailable} (v{latestVersion})
                      </h4>
                      <p className="text-xs text-[#d8cbb8] mt-1">
                        {t.updates.bannerSubtitle}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={handleApply}
                    disabled={isUpdating}
                    className="flex-shrink-0 flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#c99738] hover:bg-[#d6a543] text-[#12100e] text-xs font-bold transition shadow-sm disabled:opacity-50"
                  >
                    <RefreshCw className={`w-3.5 h-3.5 ${isUpdating ? 'animate-spin' : ''}`} />
                    <span>{isUpdating ? '...' : t.updates.updateNowBtn}</span>
                  </button>
                </div>
              ) : (
                <div className="p-4 rounded-xl bg-[#1c1712] border border-[#2d251d] flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#34d399] flex-shrink-0" />
                    <div>
                      <h4 className="text-xs font-semibold text-[#34d399]">
                        {t.updates.statusUpToDate}
                      </h4>
                      <p className="text-[11px] text-[#8e806e] mt-0.5">
                        {feedbackMessage || (lastChecked
                          ? `${t.updates.lastChecked}: ${lastChecked.toLocaleTimeString()}`
                          : t.updates.neverChecked)}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={handleManualCheck}
                    disabled={isChecking}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#251e17] hover:bg-[#2f271e] border border-[#3d3224] text-xs text-[#ded5c7] hover:text-[#f5d77f] font-semibold transition disabled:opacity-50"
                  >
                    <RefreshCw className={`w-3.5 h-3.5 text-[#c99738] ${isChecking ? 'animate-spin' : ''}`} />
                    <span>{isChecking ? t.updates.statusChecking : t.updates.checkNowBtn}</span>
                  </button>
                </div>
              )}

              {/* Version & Technical Architecture Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 rounded-xl bg-[#191511] border border-[#2d251d]">
                  <span className="text-[10px] uppercase font-mono text-[#a48c68] block">
                    {t.updates.currentVersion}
                  </span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-sm font-bold font-mono text-[#f5d77f]">v{currentVersion}</span>
                    <span className="text-[11px] text-[#8e806e]">({APP_CODENAME})</span>
                  </div>
                  <span className="text-[10px] text-[#695d4f] block mt-1">
                    {t.updates.buildDate}: {BUILD_DATE}
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#191511] border border-[#2d251d]">
                  <span className="text-[10px] uppercase font-mono text-[#a48c68] block">
                    {t.updates.latestVersion}
                  </span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-sm font-bold font-mono text-[#f5d77f]">v{latestVersion}</span>
                    <span className="text-[11px] text-[#34d399]">
                      {isUpdateAvailable ? `• ${t.updates.statusUpdateAvailable}` : `• ${t.updates.statusUpToDate.split('—')[0]}`}
                    </span>
                  </div>
                  <span className="text-[10px] text-[#695d4f] block mt-1">
                    {lastChecked ? `${t.updates.lastChecked}: ${lastChecked.toLocaleTimeString()}` : t.updates.neverChecked}
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#191511] border border-[#2d251d]">
                  <span className="text-[10px] uppercase font-mono text-[#a48c68] block">
                    {t.updates.environment}
                  </span>
                  <div className="flex items-center gap-1.5 mt-1">
                    {isStandalone ? (
                      <>
                        <Smartphone className="w-3.5 h-3.5 text-[#34d399]" />
                        <span className="font-medium text-[#ded5c7]">{t.updates.environmentPwa}</span>
                      </>
                    ) : (
                      <>
                        <HardDrive className="w-3.5 h-3.5 text-[#a48c68]" />
                        <span className="font-medium text-[#ded5c7]">{t.updates.environmentBrowser}</span>
                      </>
                    )}
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#191511] border border-[#2d251d]">
                  <span className="text-[10px] uppercase font-mono text-[#a48c68] block">
                    {t.updates.offlineCacheStatus}
                  </span>
                  <div className="flex items-center gap-1.5 mt-1">
                    <div className="w-2 h-2 rounded-full bg-[#34d399] animate-pulse" />
                    <span className="font-medium text-[#ded5c7]">{t.updates.offlineCacheActive}</span>
                  </div>
                  <span className="text-[10px] text-[#695d4f] block mt-1">
                    Workbox Service Worker + Manifest v2
                  </span>
                </div>
              </div>

              {/* Maintenance & Troubleshooting Tools */}
              <div className="pt-4 border-t border-[#261f18] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
                <div>
                  <h5 className="font-semibold text-[#d8cbb8] flex items-center gap-1.5">
                    <AlertTriangle className="w-3.5 h-3.5 text-[#c99738]" />
                    <span>{t.updates.forceRefreshBtn}</span>
                  </h5>
                  <p className="text-[11px] text-[#7d6f5e] mt-0.5 max-w-sm">
                    {t.updates.cleanResetNotice}
                  </p>
                </div>

                <button
                  onClick={handleHardReset}
                  disabled={isResetting}
                  className="px-3 py-1.5 rounded-lg border border-[#a48c68]/30 hover:border-red-500/50 hover:bg-red-500/10 text-[#a48c68] hover:text-red-400 transition flex items-center gap-1.5 font-medium flex-shrink-0 disabled:opacity-50"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${isResetting ? 'animate-spin' : ''}`} />
                  <span>{isResetting ? '...' : t.updates.forceRefreshBtn}</span>
                </button>
              </div>
            </div>
          )}

          {activeTab === 'changelog' && (
            <div className="space-y-6">
              {VERSION_HISTORY.map((item, index) => {
                const isCurrent = item.version === currentVersion;
                const notes = item.highlights[language as 'en' | 'es' | 'pt'] || item.highlights.en;

                return (
                  <div
                    key={item.version}
                    className={`p-4 rounded-xl border transition ${
                      isCurrent
                        ? 'bg-[#1e1812] border-[#c99738]/50 shadow-md'
                        : 'bg-[#16120e] border-[#292118]'
                    }`}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-[#2d251d]">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-sm font-bold text-[#f5d77f]">
                          v{item.version}
                        </span>
                        {isCurrent && (
                          <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-[#c99738]/20 text-[#f5d77f] border border-[#c99738]/40">
                            {t.updates.currentVersion}
                          </span>
                        )}
                        <span className="text-xs text-[#a48c68] font-display italic">
                          "{item.codename}"
                        </span>
                      </div>
                      <span className="text-[11px] text-[#7d6f5e] font-mono">
                        {item.date}
                      </span>
                    </div>

                    <ul className="mt-3 space-y-1.5 text-xs text-[#c8beaf]">
                      {notes.map((point, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2 leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#c99738] flex-shrink-0 mt-1.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-[#261f18] bg-[#14110e] flex items-center justify-between text-xs text-[#7d6f5e]">
          <span>Chronos &amp; Canon &bull; {APP_CODENAME}</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-[#251e18] hover:bg-[#322820] text-[#ded5c7] hover:text-[#f5d77f] transition font-semibold"
          >
            {t.common.close}
          </button>
        </div>
      </div>
    </div>
  );
};

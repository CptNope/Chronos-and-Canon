import React, { useState } from 'react';
import { usePWAInstall } from '../../hooks/usePWAInstall';
import { useLanguage } from '../../i18n/LanguageContext';
import { getUiTranslations } from '../../i18n/uiTranslations';
import { Download, Smartphone, X } from 'lucide-react';

export const PWAInstallButton: React.FC = () => {
  const { language } = useLanguage();
  const ui = getUiTranslations(language);
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showIOSGuide, setShowIOSGuide] = useState(false);

  if (isInstalled) {
    return null;
  }

  if (isInstallable) {
    return (
      <button
        onClick={install}
        className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg bg-[#c99738]/20 hover:bg-[#c99738]/30 border border-[#c99738]/40 text-[#f5d77f] text-xs font-semibold tracking-wide transition shadow-sm"
        title={ui.pwa.installAppTitle}
      >
        <Download className="w-3.5 h-3.5 flex-shrink-0" />
        <span className="hidden 2xl:inline">{ui.pwa.installApp}</span>
      </button>
    );
  }

  if (isIOS) {
    return (
      <>
        <button
          onClick={() => setShowIOSGuide(true)}
          className="flex items-center gap-1.5 px-2 sm:px-2.5 py-1.5 rounded-lg border border-[#a48c68]/30 text-[#d8cbb8] text-xs hover:bg-[#201a14] transition"
          title={ui.pwa.installIosTitle}
        >
          <Smartphone className="w-3.5 h-3.5 text-[#c99738] flex-shrink-0" />
          <span className="hidden 2xl:inline">{ui.pwa.installIos}</span>
        </button>

        {showIOSGuide && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4 animate-fade-in">
            <div className="w-full max-w-sm rounded-xl bg-[#1a1714] border border-[#a48c68]/40 p-6 shadow-2xl text-[#e8e2d5]">
              <div className="flex items-center justify-between pb-3 border-b border-[#362f27]">
                <h3 className="text-base font-semibold font-display text-[#f5d77f]">{ui.pwa.installIosTitle}</h3>
                <button
                  onClick={() => setShowIOSGuide(false)}
                  className="p-1 rounded text-[#a48c68] hover:text-white hover:bg-[#2a241e]"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="mt-4 space-y-3 text-sm text-[#c8beaf] leading-relaxed">
                <p className="flex items-start gap-2">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#c99738]/20 text-[#f5d77f] flex items-center justify-center text-xs font-bold">1</span>
                  <span>{ui.pwa.step1}</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#c99738]/20 text-[#f5d77f] flex items-center justify-center text-xs font-bold">2</span>
                  <span>{ui.pwa.step2}</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#c99738]/20 text-[#f5d77f] flex items-center justify-center text-xs font-bold">3</span>
                  <span>{ui.pwa.step3}</span>
                </p>
              </div>
              <button
                onClick={() => setShowIOSGuide(false)}
                className="mt-6 w-full py-2 rounded-lg bg-[#c99738] hover:bg-[#b5832a] text-[#12100e] text-sm font-semibold transition"
              >
                {ui.pwa.gotIt}
              </button>
            </div>
          </div>
        )}
      </>
    );
  }

  return null;
};

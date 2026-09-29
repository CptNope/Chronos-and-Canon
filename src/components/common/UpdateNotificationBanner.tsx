import React, { useState } from 'react';
import { useAppUpdate } from '../../context/PWAUpdateContext';
import { useLanguage } from '../../i18n/LanguageContext';
import { ArrowUpCircle, RefreshCw, X, Sparkles } from 'lucide-react';

interface UpdateNotificationBannerProps {
  onOpenVersionModal?: () => void;
}

export const UpdateNotificationBanner: React.FC<UpdateNotificationBannerProps> = ({
  onOpenVersionModal
}) => {
  const { isUpdateAvailable, isBannerDismissed, dismissBanner, applyUpdate, latestVersion } = useAppUpdate();
  const { t } = useLanguage();
  const [isUpdating, setIsUpdating] = useState(false);

  if (!isUpdateAvailable || isBannerDismissed) {
    return null;
  }

  const handleUpdate = async () => {
    setIsUpdating(true);
    await applyUpdate();
  };

  return (
    <aside
      aria-label="PWA Version Update Notification"
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-50 animate-bounce-subtle"
    >
      <div className="bg-[#1c1712]/95 backdrop-blur-md border border-[#c99738]/60 rounded-xl p-4 shadow-2xl text-[#e8e2d5] flex flex-col gap-3">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#c99738]/20 border border-[#c99738]/40 flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-4 h-4 text-[#f5d77f] animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="text-xs font-bold font-display uppercase tracking-wider text-[#f5d77f]">
                  {t.updates.bannerTitle}
                </h4>
                <span className="px-1.5 py-0.5 rounded text-[10px] font-mono font-semibold bg-[#c99738]/30 text-[#f5d77f]">
                  v{latestVersion}
                </span>
              </div>
              <p className="text-[11px] text-[#b8ad9e] leading-snug mt-0.5">
                {t.updates.bannerSubtitle}
              </p>
            </div>
          </div>
          <button
            onClick={dismissBanner}
            aria-label={t.updates.bannerDismiss}
            className="p-1 rounded text-[#a48c68] hover:text-[#f5d77f] hover:bg-[#28221b] transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="flex items-center justify-between gap-2 pt-1 border-t border-[#31281f]">
          {onOpenVersionModal && (
            <button
              onClick={onOpenVersionModal}
              className="text-[11px] text-[#c99738] hover:text-[#f5d77f] hover:underline transition font-medium"
            >
              {t.updates.viewChangelog}
            </button>
          )}

          <div className="flex items-center gap-2 ml-auto">
            <button
              onClick={dismissBanner}
              className="px-2.5 py-1 rounded-md text-xs text-[#a48c68] hover:text-[#ded5c7] transition"
            >
              {t.updates.bannerDismiss}
            </button>
            <button
              onClick={handleUpdate}
              disabled={isUpdating}
              className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#c99738] hover:bg-[#d6a543] text-[#12100e] text-xs font-bold transition shadow-md disabled:opacity-50"
            >
              <RefreshCw className={`w-3 h-3 ${isUpdating ? 'animate-spin' : ''}`} />
              <span>{isUpdating ? '...' : t.updates.bannerUpdate}</span>
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};

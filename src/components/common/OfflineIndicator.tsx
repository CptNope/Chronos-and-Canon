import React, { useEffect, useState } from 'react';
import { WifiOff } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';
import { getUiTranslations } from '../../i18n/uiTranslations';

export const OfflineIndicator: React.FC = () => {
  const { language } = useLanguage();
  const ui = getUiTranslations(language);
  const [isOnline, setIsOnline] = useState(
    typeof navigator !== 'undefined' ? navigator.onLine : true
  );

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  if (isOnline) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 flex items-center gap-2 rounded-xl bg-amber-900/90 border border-amber-500/60 px-3.5 py-2 text-xs font-semibold text-amber-100 shadow-2xl backdrop-blur-md animate-bounce-subtle">
      <WifiOff className="w-4 h-4 text-amber-300" />
      <span>{ui.pwa.offlineBanner}</span>
    </div>
  );
};

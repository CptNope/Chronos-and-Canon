import { useState, useEffect, useCallback, useRef } from 'react';
import { registerSW } from 'virtual:pwa-register';
import { APP_VERSION, compareSemanticVersions } from '../version';

export interface RemoteVersionInfo {
  version: string;
  buildDate: string;
  codename: string;
  releaseNotes?: string[];
}

export interface PWAUpdateState {
  currentVersion: string;
  latestVersion: string;
  isUpdateAvailable: boolean;
  isChecking: boolean;
  isOfflineReady: boolean;
  lastChecked: Date | null;
  remoteInfo: RemoteVersionInfo | null;
  checkForUpdates: (silent?: boolean) => Promise<boolean>;
  applyUpdate: () => Promise<void>;
  forceHardRefresh: () => Promise<void>;
  dismissBanner: () => void;
  isBannerDismissed: boolean;
}

export function usePWAUpdate(): PWAUpdateState {
  const [latestVersion, setLatestVersion] = useState<string>(APP_VERSION);
  const [isUpdateAvailable, setIsUpdateAvailable] = useState<boolean>(false);
  const [isChecking, setIsChecking] = useState<boolean>(false);
  const [isOfflineReady, setIsOfflineReady] = useState<boolean>(false);
  const [lastChecked, setLastChecked] = useState<Date | null>(null);
  const [remoteInfo, setRemoteInfo] = useState<RemoteVersionInfo | null>(null);
  const [isBannerDismissed, setIsBannerDismissed] = useState<boolean>(false);

  const updateSWRef = useRef<((reloadPage?: boolean) => Promise<void>) | null>(null);
  const registrationRef = useRef<ServiceWorkerRegistration | null>(null);
  const lastCheckTimeRef = useRef<number>(0);

  // Initialize service worker with virtual:pwa-register
  useEffect(() => {
    try {
      const updateSW = registerSW({
        onNeedRefresh() {
          console.log('[PWA Update] New service worker installed and waiting to activate.');
          setIsUpdateAvailable(true);
          setIsBannerDismissed(false);
        },
        onOfflineReady() {
          console.log('[PWA Update] Archive application precached and ready for offline use.');
          setIsOfflineReady(true);
        },
        onRegistered(registration) {
          if (registration) {
            registrationRef.current = registration;
            console.log('[PWA Update] Service worker registered with scope:', registration.scope);
          }
        },
        onRegisterError(error) {
          console.warn('[PWA Update] Service worker registration error:', error);
        }
      });

      updateSWRef.current = updateSW;
    } catch (e) {
      console.warn('[PWA Update] virtual:pwa-register failed or not supported in this context:', e);
    }
  }, []);

  /**
   * Check for updates both by querying the Service Worker registration and fetching version.json
   */
  const checkForUpdates = useCallback(async (silent = false): Promise<boolean> => {
    setIsChecking(true);
    let foundUpdate = false;

    try {
      // 1. Service Worker update check
      if ('serviceWorker' in navigator) {
        try {
          const reg = registrationRef.current || (await navigator.serviceWorker.getRegistration());
          if (reg) {
            registrationRef.current = reg;
            await reg.update();
            if (reg.waiting) {
              foundUpdate = true;
            }
          }
        } catch (swErr) {
          if (!silent) console.log('[PWA Update] SW update check note:', swErr);
        }
      }

      // 2. Fetch version.json with cache-busting timestamp
      try {
        const response = await fetch(`./version.json?_t=${Date.now()}`, {
          cache: 'no-store',
          headers: {
            'Cache-Control': 'no-cache, no-store, must-revalidate',
            'Pragma': 'no-cache'
          }
        });

        if (response.ok) {
          const data: RemoteVersionInfo = await response.json();
          if (data && data.version) {
            setRemoteInfo(data);
            setLatestVersion(data.version);

            // Compare semantic version
            if (compareSemanticVersions(data.version, APP_VERSION) > 0) {
              foundUpdate = true;
            }
          }
        }
      } catch (fetchErr) {
        if (!silent) console.log('[PWA Update] Remote version.json fetch note:', fetchErr);
      }

      const now = new Date();
      setLastChecked(now);
      lastCheckTimeRef.current = now.getTime();

      if (foundUpdate) {
        setIsUpdateAvailable(true);
        setIsBannerDismissed(false);
      }

      return foundUpdate;
    } catch (err) {
      console.error('[PWA Update] Unexpected error while checking for updates:', err);
      return false;
    } finally {
      setIsChecking(false);
    }
  }, []);

  /**
   * Apply pending update smoothly
   */
  const applyUpdate = useCallback(async () => {
    try {
      // If service worker is waiting, post SKIP_WAITING
      if (registrationRef.current?.waiting) {
        registrationRef.current.waiting.postMessage({ type: 'SKIP_WAITING' });
      }

      // If virtual:pwa-register provides updateSW, invoke it
      if (updateSWRef.current) {
        await updateSWRef.current(true);
      } else {
        // Fallback: hard reload
        window.location.reload();
      }
    } catch (e) {
      console.error('[PWA Update] Error applying update:', e);
      window.location.reload();
    }
  }, []);

  /**
   * Force unregister all service workers, clear all CacheStorage caches, and reload
   */
  const forceHardRefresh = useCallback(async () => {
    try {
      if ('serviceWorker' in navigator) {
        const registrations = await navigator.serviceWorker.getRegistrations();
        for (const reg of registrations) {
          await reg.unregister();
        }
      }

      if ('caches' in window) {
        const cacheKeys = await caches.keys();
        await Promise.all(cacheKeys.map(key => caches.delete(key)));
      }

      // Hard reload with cache bypass
      window.location.href = window.location.href.split('#')[0];
    } catch (e) {
      console.error('[PWA Update] Error performing hard refresh:', e);
      window.location.reload();
    }
  }, []);

  const dismissBanner = useCallback(() => {
    setIsBannerDismissed(true);
  }, []);

  // Background automated checks:
  // 1. Initial check 3 seconds after boot
  // 2. Window focus / visibilitychange (if > 15 minutes since last check)
  // 3. Online event
  // 4. Periodic 30-minute interval
  useEffect(() => {
    const timer = setTimeout(() => {
      checkForUpdates(true);
    }, 3000);

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        const fifteenMinutes = 15 * 60 * 1000;
        if (Date.now() - lastCheckTimeRef.current > fifteenMinutes) {
          checkForUpdates(true);
        }
      }
    };

    const handleOnline = () => {
      checkForUpdates(true);
    };

    const interval = setInterval(() => {
      checkForUpdates(true);
    }, 30 * 60 * 1000); // Every 30 minutes

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('online', handleOnline);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('online', handleOnline);
    };
  }, [checkForUpdates]);

  return {
    currentVersion: APP_VERSION,
    latestVersion,
    isUpdateAvailable,
    isChecking,
    isOfflineReady,
    lastChecked,
    remoteInfo,
    checkForUpdates,
    applyUpdate,
    forceHardRefresh,
    dismissBanner,
    isBannerDismissed
  };
}

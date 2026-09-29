import React, { createContext, useContext, ReactNode } from 'react';
import { usePWAUpdate, PWAUpdateState } from '../hooks/usePWAUpdate';

const PWAUpdateContext = createContext<PWAUpdateState | null>(null);

export const PWAUpdateProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const updateState = usePWAUpdate();
  return (
    <PWAUpdateContext.Provider value={updateState}>
      {children}
    </PWAUpdateContext.Provider>
  );
};

export function useAppUpdate(): PWAUpdateState {
  const context = useContext(PWAUpdateContext);
  if (!context) {
    throw new Error('useAppUpdate must be used within a PWAUpdateProvider');
  }
  return context;
}

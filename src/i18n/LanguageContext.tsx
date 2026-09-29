import React, { createContext, useContext, useState, useEffect } from 'react';
import { SupportedLanguage } from '../types';
import { translations, Translations } from './translations';

interface LanguageContextType {
  language: SupportedLanguage;
  setLanguage: (lang: SupportedLanguage) => void;
  t: Translations;
  languages: { code: SupportedLanguage; label: string; flag: string }[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const AVAILABLE_LANGUAGES: { code: SupportedLanguage; label: string; flag: string }[] = [
  { code: 'en', label: 'English', flag: 'EN' },
  { code: 'es', label: 'Español', flag: 'ES' },
  { code: 'pt', label: 'Português', flag: 'PT' }
];

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<SupportedLanguage>(() => {
    try {
      const saved = localStorage.getItem('chronos_canon_language');
      if (saved === 'es' || saved === 'pt' || saved === 'en') {
        return saved;
      }
      // Check browser language
      const browserLang = navigator.language.toLowerCase();
      if (browserLang.startsWith('es')) return 'es';
      if (browserLang.startsWith('pt')) return 'pt';
    } catch {
      // Ignore localStorage errors
    }
    return 'en';
  });

  const setLanguage = (lang: SupportedLanguage) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('chronos_canon_language', lang);
      document.documentElement.lang = lang;
    } catch {
      // Ignore localStorage errors
    }
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const value = {
    language,
    setLanguage,
    t: translations[language] || translations.en,
    languages: AVAILABLE_LANGUAGES
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

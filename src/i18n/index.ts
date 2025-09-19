import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';
import ru from './locales/ru.json';

// Initialize i18n synchronously first
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: en
      },
      ru: {
        translation: ru
      }
    },
    fallbackLng: 'en',
    lng: 'en',
    debug: false,
    
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng'
    },

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;

// Auto-detect Russian users after React has initialized
export const initializeLanguageDetection = () => {
  const detectRussianUser = async () => {
    try {
      const response = await fetch('https://ipapi.co/json/');
      const data = await response.json();
      if (data.country_code === 'RU') {
        i18n.changeLanguage('ru');
      }
    } catch (error) {
      console.log('Could not detect location');
    }
  };

  // Only detect on first load if no language is saved
  if (!localStorage.getItem('i18nextLng')) {
    detectRussianUser();
  }
};
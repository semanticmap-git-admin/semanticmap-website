'use client';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translation files
import en from '../public/locales/en.json';
import de from '../public/locales/de.json';

// Initialize i18next with basic language detection
i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: en },
            de: { translation: de },
        },
        fallbackLng: 'en', // Use English if no language is detected
        detection: {
            order: ['navigator', 'cookie', 'localStorage', 'htmlTag'], // Detect from browser first
            caches: ['cookie'], // Cache the language preference in cookies
        },
        interpolation: { escapeValue: false },
    })
    .then(() => {
        console.log('Language detection complete. Current language:', i18n.language);
    })
    .catch((err) => {
        console.error('i18next init failed:', err);
    });

// Log the initially detected language
console.log('Initially detected language:', i18n.language);

export default i18n;

'use client';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translation files
import en from '../public/locales/en.json';
import de from '../public/locales/de.json';

// Initialize i18next without browser detection
i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: en },
            de: { translation: de },
        },
        fallbackLng: 'en', // Fallback to English
        interpolation: { escapeValue: false }, // React already escapes values, no need to escape
    });

export default i18n;

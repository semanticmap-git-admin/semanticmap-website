'use client';

import React, { useEffect, useState } from 'react';
import i18n from '../lib/i18n';

export default function ClientLanguageProvider({ children }: { children: React.ReactNode }) {
    const [detectedLang, setDetectedLang] = useState('en'); // Default to 'en'

    useEffect(() => {
        const browserLang = navigator.language;
        const baseLang = browserLang.split('-')[0];
        setDetectedLang(baseLang);
        i18n.changeLanguage(baseLang)
            .then(() => console.log(`i18n language set to: ${baseLang}`))
            .catch((err) => console.error('Error setting i18n language:', err));
    }, []);


    return <>{children}</>;
}

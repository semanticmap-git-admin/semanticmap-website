'use client';

import { useEffect, useState } from 'react';
import i18n from '../lib/i18n'; // Ensure i18n is initialized

export default function ClientLanguageProvider({ children }: { children: React.ReactNode }) {
    const [lang, setLang] = useState('en');

    useEffect(() => {
        setLang(i18n.language); // Detect the language from i18n
    }, []);

    return <html lang={lang}>{children}</html>;
}

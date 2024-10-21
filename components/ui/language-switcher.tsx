'use client';

import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import Image from 'next/image'; // If using Next.js

export default function LanguageSwitcher() {
    const { i18n } = useTranslation();
    const [currentLang, setCurrentLang] = useState(i18n.language); // Track current language

    const toggleLanguage = () => {
        const newLang = currentLang === 'en' ? 'de' : 'en';
        i18n.changeLanguage(newLang);
        setCurrentLang(newLang);
    };

    return (
        <button onClick={toggleLanguage} className="flex items-center px-2 py-1">
            {currentLang === 'en' ? (
                <Image
                    src="/flags/united-kingdom.png" // Path to the UK flag
                    alt="Switch to German"
                    width={17}
                    height={17}
                    className="mr-2"
                />
            ) : (
                <Image
                    src="/flags/germany.png" // Path to the German flag
                    alt="Switch to English"
                    width={17}
                    height={17}
                    className="mr-2"
                />
            )}
            <span>
                {currentLang === 'en' ? 'EN' : 'DE'}
            </span>
        </button>
    );
}

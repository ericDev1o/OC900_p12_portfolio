import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import frTranslation from '../locales/fr.json';
import enTranslation from '../locales/en.json';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'fr',
        interpolation: { escapeValue: false },
        resources:{
            fr: { translation: frTranslation },
            en: { translation: enTranslation }
        }
    });

export default i18n;
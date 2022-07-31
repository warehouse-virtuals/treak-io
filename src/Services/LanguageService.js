import i18n, { use } from "i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import en from '../Locales/en.json'
import tr from '../Locales/tr.json'

const resources = {
  en: en,
  tr: tr
};

i18n
  .use(initReactI18next)
  .use(I18nextBrowserLanguageDetector)
  .init({
    resources,
    interpolation: {
      escapeValue: false
    },
    debug: false,
    lng: 'tr-TR'
  });

export default i18n;
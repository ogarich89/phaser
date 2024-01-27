import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Fetch from 'i18next-http-backend';

i18n.use(Fetch);
i18n.use(LanguageDetector);
i18n.init({
  load: 'languageOnly',
  defaultNS: 'base',
  fallbackLng: 'en',
  supportedLngs: ['en', 'ru'],
  ns: ['base'],
  detection: {
    order: ['path', 'htmlTag'],
    lookupFromPathIndex: 0,
    caches: [],
  },
  backend: {
    loadPath: '/public/locales/{{lng}}/{{ns}}.json',
  },
  interpolation: {
    escapeValue: false,
  },
  debug: false,
});

export { i18n };

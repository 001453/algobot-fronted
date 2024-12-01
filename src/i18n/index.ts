import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      general: {
        darkMode: 'Dark Mode',
        language: 'Language',
        timeZone: 'Time Zone',
        currency: 'Currency',
        dateFormat: 'Date Format',
        saveSettings: 'Save Settings'
      }
    }
  },
  tr: {
    translation: {
      general: {
        darkMode: 'Karanlık Mod',
        language: 'Dil',
        timeZone: 'Saat Dilimi',
        currency: 'Para Birimi',
        dateFormat: 'Tarih Formatı',
        saveSettings: 'Ayarları Kaydet'
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;

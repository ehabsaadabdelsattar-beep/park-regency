import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import ar from "./locales/ar.json";
import ru from "./locales/ru.json";
import de from "./locales/de.json";
import fr from "./locales/fr.json";

export const SUPPORTED_LANGS = ["en", "ar", "ru", "de", "fr"] as const;
export type Lang = (typeof SUPPORTED_LANGS)[number];

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources: {
      en: { translation: en },
      ar: { translation: ar },
      ru: { translation: ru },
      de: { translation: de },
      fr: { translation: fr },
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: { escapeValue: false },
    react: { useSuspense: false },
  });
}

export default i18n;

import { useEffect, useState } from "react";
import { Globe, ChevronDown, Check } from "lucide-react";
import { useTranslation } from "react-i18next";
import i18n, { SUPPORTED_LANGS, type Lang } from "@/i18n";
import { CURRENCIES, useCurrency, type CurrencyCode } from "@/contexts/currency-context";

const LANGUAGES: { code: Lang; label: string; flag: string }[] = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "ar", label: "العربية", flag: "🇸🇦" },
  { code: "ru", label: "Русский", flag: "🇷🇺" },
  { code: "de", label: "Deutsch", flag: "🇩🇪" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "es", label: "Español", flag: "🇪🇸" },
  { code: "it", label: "Italiano", flag: "🇮🇹" },
];

export function LocaleSwitcher({ light = false }: { light?: boolean }) {
  const { t, i18n: i18nHook } = useTranslation();
  const { currency, setCurrency } = useCurrency();
  const [lang, setLang] = useState<Lang>("en");
  const [openLang, setOpenLang] = useState(false);
  const [openCur, setOpenCur] = useState(false);

  useEffect(() => {
    const current = (i18nHook.language as Lang) || "en";
    if ((SUPPORTED_LANGS as readonly string[]).includes(current)) setLang(current);
    const onChange = (l: string) => setLang(l as Lang);
    i18nHook.on("languageChanged", onChange);
    return () => i18nHook.off("languageChanged", onChange);
  }, [i18nHook]);

  const setLanguage = (code: Lang) => {
    i18n.changeLanguage(code);
    try {
      localStorage.setItem("pr-lang", code);
    } catch {
      void 0;
    }
    document.documentElement.lang = code;
    document.documentElement.dir = code === "ar" ? "rtl" : "ltr";
    setOpenLang(false);
  };

  const setCur = (code: CurrencyCode) => {
    setCurrency(code);
    setOpenCur(false);
  };

  const current = LANGUAGES.find((l) => l.code === lang) ?? LANGUAGES[0];
  const txt = light ? "text-white/90 hover:text-gold" : "text-foreground hover:text-gold";

  return (
    <div className="flex items-center gap-1">
      {/* Language */}
      <div className="relative">
        <button
          onClick={() => {
            setOpenLang((v) => !v);
            setOpenCur(false);
          }}
          className={`flex items-center gap-1.5 px-2 py-1.5 text-[11px] uppercase tracking-[0.15em] font-medium transition-colors ${txt}`}
          aria-label={t("common.selectLanguage")}
        >
          <Globe className="h-3.5 w-3.5" />
          <span className="hidden sm:inline">{current.code.toUpperCase()}</span>
          <ChevronDown className="h-3 w-3" />
        </button>
        {openLang && (
          <>
            <div className="fixed inset-0 z-40" onClick={() => setOpenLang(false)} />
            <div className="absolute end-0 top-full mt-2 z-50 bg-background border border-border shadow-luxury py-2 min-w-[180px]">
              {LANGUAGES.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLanguage(l.code)}
                  className="w-full flex items-center justify-between gap-3 px-4 py-2 text-xs text-foreground hover:bg-secondary/60 hover:text-gold transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <span className="text-base leading-none">{l.flag}</span>
                    <span>{l.label}</span>
                  </span>
                  {lang === l.code && <Check className="h-3.5 w-3.5 text-gold" />}
                </button>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Currency */}
      <div className="relative">
        <button
          onClick={() => {
            setOpenCur((v) => !v);
            setOpenLang(false);
          }}
          className={`flex items-center gap-1 px-2 py-1.5 text-[11px] uppercase tracking-[0.15em] font-medium transition-colors ${txt}`}
          aria-label={t("common.selectCurrency")}
        >
          <span>{currency}</span>
          <ChevronDown className="h-3 w-3" />
        </button>
        {openCur && (
          <>
            <div className="fixed inset-0 z-40" onClick={() => setOpenCur(false)} />
            <div className="absolute end-0 top-full mt-2 z-50 bg-background border border-border shadow-luxury py-2 min-w-[140px]">
              {CURRENCIES.map((c) => (
                <button
                  key={c.code}
                  onClick={() => setCur(c.code)}
                  className="w-full flex items-center justify-between gap-3 px-4 py-2 text-xs text-foreground hover:bg-secondary/60 hover:text-gold transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <span className="text-gold w-4">{c.symbol}</span>
                    <span>{c.code}</span>
                  </span>
                  {currency === c.code && <Check className="h-3.5 w-3.5 text-gold" />}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

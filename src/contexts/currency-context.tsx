import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export const CURRENCIES = [
  { code: "USD", symbol: "$", rate: 1, locale: "en-US" },
  { code: "EUR", symbol: "€", rate: 0.92, locale: "de-DE" },
  { code: "GBP", symbol: "£", rate: 0.79, locale: "en-GB" },
  { code: "EGP", symbol: "E£", rate: 49, locale: "en-EG" },
  { code: "SAR", symbol: "﷼", rate: 3.75, locale: "ar-SA" },
] as const;

export type CurrencyCode = (typeof CURRENCIES)[number]["code"];

type Ctx = {
  currency: CurrencyCode;
  setCurrency: (c: CurrencyCode) => void;
  convertPrice: (usd: number) => number;
  getCurrencySymbol: () => string;
  formatPrice: (usd: number, opts?: { decimals?: number }) => string;
};

const CurrencyContext = createContext<Ctx | null>(null);

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrencyState] = useState<CurrencyCode>("USD");

  useEffect(() => {
    const saved = localStorage.getItem("pr-currency") as CurrencyCode | null;
    if (saved && CURRENCIES.some((c) => c.code === saved)) setCurrencyState(saved);
  }, []);

  const setCurrency = (c: CurrencyCode) => {
    setCurrencyState(c);
    try {
      localStorage.setItem("pr-currency", c);
    } catch {
      void 0;
    }
  };

  const def = CURRENCIES.find((c) => c.code === currency)!;
  const convertPrice = (usd: number) => usd * def.rate;
  const getCurrencySymbol = () => def.symbol;
  const formatPrice = (usd: number, opts?: { decimals?: number }) => {
    const value = convertPrice(usd);
    const decimals = opts?.decimals ?? (currency === "EGP" || currency === "SAR" ? 0 : 0);
    try {
      return new Intl.NumberFormat(def.locale, {
        style: "currency",
        currency: def.code,
        maximumFractionDigits: decimals,
        minimumFractionDigits: decimals,
      }).format(value);
    } catch {
      return `${def.symbol}${Math.round(value).toLocaleString()}`;
    }
  };

  return (
    <CurrencyContext.Provider
      value={{ currency, setCurrency, convertPrice, getCurrencySymbol, formatPrice }}
    >
      {children}
    </CurrencyContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components -- hook colocated with provider
export function useCurrency() {
  const ctx = useContext(CurrencyContext);
  if (!ctx) throw new Error("useCurrency must be used within CurrencyProvider");
  return ctx;
}

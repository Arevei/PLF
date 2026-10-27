"use client";

import { createContext, useContext, type ReactNode } from "react";

interface LanguageContextType {
  language: "en";
  setLanguage: () => void;
  t: (english: string | null | undefined, _legacyTranslation?: string | null | undefined) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

/** The public site is English-only. The optional second argument remains for compatibility. */
export function LanguageProvider({ children }: { children: ReactNode }) {
  const t = (english: string | null | undefined) => english || "";
  const setLanguage = () => undefined;

  return <LanguageContext.Provider value={{ language: "en", setLanguage, t }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within a LanguageProvider");
  return context;
}

// libs
import { createContext, useContext, useMemo } from "react";
// hooks
import useLocalStorage from "@/hooks/useLocalStorage";

const LocaleContext = createContext();

export const ProvideLocale = ({ children, locales }) => {
  const [locale, setLocale] = useLocalStorage("locale", "vi");

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      localeDataSource: locale ? locales[locale] : locales.vi,
    }),
    [locale, setLocale],
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
};

export const useLocale = () => useContext(LocaleContext);

import { useEffect, useState } from "react";
import English from "../lang/en.json";
import Dutch from "../lang/en.json";

const useLocale = () => {
  const [locale, setLocale] = useState<string>("");
  const [lang, setLang] = useState<any>({});

  useEffect(() => {
    if (!locale) {
      const browserLocale = navigator.language;

      if (browserLocale !== "nl") {
        setLocale("en");
      } else {
        setLocale(browserLocale);
      }
    }
  }, []);

  useEffect(() => {
    switch (locale) {
      case "en":
        setLang(English);
      case "nl":
        setLang(Dutch);
    }
  }, [locale]);

  return { locale, setLocale, lang };
};

export default useLocale;

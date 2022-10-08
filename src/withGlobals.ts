import { DecoratorFunction, useRef } from "@storybook/addons";
import { useEffect, useGlobals, useParameter } from "@storybook/addons";

const updateHtmlLang = (locale?: string) => {
  const lang = document.documentElement.getAttribute("lang");
  if (!locale) return lang;
  if (lang !== locale) {
    document.documentElement.setAttribute("lang", locale);
  }
  return locale;
};

interface Settings {
  // Collection for locales (e.g. "en", "en-US", "ar")
  autoLocales?: string[];
  // Condition to refresh page
  reload?: boolean;
}

export const withGlobals: DecoratorFunction = (StoryFn) => {
  const [{ rtlDirection, locale }, updateGlobals] = useGlobals();
  const { autoLocales = [], reload }: Settings =
    useParameter("rtlDirection") || {};
  const { current: htmlLang } = useRef(updateHtmlLang(locale));

  useEffect(() => {
    const direction = rtlDirection ? "rtl" : "ltr";
    document.documentElement.setAttribute("dir", direction);
  }, [rtlDirection]);

  useEffect(() => {
    // Check url and find
    const urlParams = new URLSearchParams(window.location.search);
    const globals = urlParams.get("globals");
    if (!globals) return;
    const [dir] = globals
      .split(";")
      .map((params) => {
        return params.indexOf("rtlDirection:") === 0 && params.split(":")[1];
      })
      .filter(Boolean);
    if (dir === "true") updateGlobals({ rtlDirection: true });
  }, []);

  useEffect(() => {
    if (!locale || !autoLocales.length) return;

    const lang = locale.substring(0, 2);
    const isRtl = autoLocales.some((l) => {
      return l.indexOf("-") === -1 ? l === lang : l === locale;
    });

    if (isRtl && !rtlDirection) {
      updateGlobals({ rtlDirection: true });
    } else if (!isRtl && rtlDirection) {
      updateGlobals({ rtlDirection: false });
    }

    // If reload is true and locale is different than html lang, refresh page
    if (reload && htmlLang !== locale) {
      setTimeout(() => {
        window.location.reload();
      }, 50);
    }
  }, [locale]);

  return StoryFn();
};

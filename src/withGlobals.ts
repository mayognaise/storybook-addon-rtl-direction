import type { DecoratorFunction } from "@storybook/addons";
import { useEffect, useGlobals } from "@storybook/addons";

export const withGlobals: DecoratorFunction = (StoryFn) => {
  const [{ rtlDirection }, updateGlobals] = useGlobals();

  useEffect(() => {
    const direction = rtlDirection ? "rtl" : "ltr";
    document.documentElement.setAttribute("dir", direction);
  }, [rtlDirection]);

  useEffect(() => {
    // Check url
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

  return StoryFn();
};

import type { DecoratorFunction } from "@storybook/addons";
import { useEffect, useGlobals } from "@storybook/addons";

export const withGlobals: DecoratorFunction = (StoryFn) => {
  const [{ rtlDirection }] = useGlobals();

  useEffect(() => {
    const direction = rtlDirection ? "rtl" : "ltr";
    document.body.style.setProperty("direction", direction);
  }, [rtlDirection]);

  return StoryFn();
};

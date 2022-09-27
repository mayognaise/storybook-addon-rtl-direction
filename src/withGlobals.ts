import type { DecoratorFunction } from "@storybook/addons";
import { useEffect, useGlobals } from "@storybook/addons";

export const withGlobals: DecoratorFunction = (StoryFn) => {
  const [{ rtlDirection }] = useGlobals();

  useEffect(() => {
    if (rtlDirection) {
      document.body.classList.add("rtl");
      document.body.classList.remove("ltr");
    } else {
      document.body.classList.add("ltr");
      document.body.classList.remove("rtl");
    }
  }, [rtlDirection]);

  return StoryFn();
};

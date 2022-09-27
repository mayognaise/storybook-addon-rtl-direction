import React, { useCallback } from "react";
import { useGlobals } from "@storybook/api";
import { Icons, IconButton } from "@storybook/components";
import { TOOL_ID } from "./constants";

export const Tool = () => {
  const [{ rtlDirection }, updateGlobals] = useGlobals();

  const toggleMyTool = useCallback(
    () =>
      updateGlobals({
        rtlDirection: rtlDirection ? undefined : true,
      }),
    [rtlDirection]
  );

  return (
    <IconButton
      key={TOOL_ID}
      active={rtlDirection}
      title="Enable my addon"
      onClick={toggleMyTool}
    >
      {/*
        Checkout https://next--storybookjs.netlify.app/official-storybook/?path=/story/basics-icon--labels
        for the full list of icons
      */}
      <Icons icon="arrowleftalt" />
    </IconButton>
  );
};

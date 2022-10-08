import { useGlobals } from "@storybook/addons";
import React from "react";
import { Button } from "./Button";

export default {
  title: "Example/Button",
  component: Button,
  parameters: {
    rtlDirectionParameter: `
<MyComponent boolProp scalarProp={1} complexProp={{ foo: 1, bar: '2' }}>
  <SomeOtherComponent funcProp={(a) => a.id} />
</MyComponent>
`,
  },
};

const Template = ({ label, ...args }) => {
  const [{ locale }] = useGlobals();

  return <Button {...args} label={getLabel(locale, label)} />;
};

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "",
};

function getLabel(locale, label) {
  if (label) return label;
  switch (locale.substring(0, 2)) {
    case "en":
      return "Hello";
    case "es":
      return "Hola";
    case "ar":
      return "أهلا";
    case "pa":
      return "ਸਤ ਸ੍ਰੀ ਅਕਾਲ";
    default:
      return locale;
  }
}

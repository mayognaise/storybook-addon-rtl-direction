# storybook-addon-rtl-direction

A Storybook tool add-on to toggle html dir attribute between LTR and RTL.

- `dir="ltr"` or `dir="rtl"` style will be added to `html` tag with `LTR/RTL` icon in tool section.

![Example](https://user-images.githubusercontent.com/588874/194686044-1c2654f4-2ed8-4000-bbeb-e9e3b5eef8ed.gif)

## Installation

```sh
npm i --save-dev storybook-addon-rtl-direction
```

Add it to `.storybook/main.js`

```js
module.exports = {
  addons: ["storybook-addon-rtl-direction"],
};
```

## With Locale

You can sync with locale to set default direction.

```js
// preview.js

export const globalTypes = {
  locale: {
    name: "Locale",
    description: "Internationalization locale",
    defaultValue: "en",
    toolbar: {
      icon: "globe",
      items: [
        { value: "en-US", right: "LTR", title: "English (United States)" },
        { value: "es", right: "LTR", title: "Spanish" },
        { value: "ar", right: "RTL", title: "Arabic" },
        { value: "ar-OM", right: "RTL", title: "Arabic (Oman)" },
        { value: "pa-IN", right: "LTR", title: "Punjabi (India)" },
        { value: "pa-PK", right: "RTL", title: "Punjabi (Pakistan)" },
      ],
    },
  },
};

export const parameters = {
  rtlDirection: {
    // Collection to set as RTL (You can add language or with add country code specifically)
    autoLocales: ["ar", "pa-PK"],
    // Condition to reload the page each time locale is updated
    reload: true,
  },
};
```

https://user-images.githubusercontent.com/588874/194731628-07124805-cc11-4acb-bb45-0aa24d53c625.mov

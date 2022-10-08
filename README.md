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

# storybook-addon-rtl-direction

An addon to toggle between ltr and rtl mode.

- `dir: ltr` or `dir: rtl` style will be added to `html` tag with `LTR/RTL` icon in tool section.

![Example](https://user-images.githubusercontent.com/588874/192465178-2d8483e7-b950-48da-a063-c0545d1b0b29.gif)

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

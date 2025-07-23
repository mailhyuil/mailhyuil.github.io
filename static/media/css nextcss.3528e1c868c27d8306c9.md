# nextcss

## install

```
npm i @nextcss/color-tools
```

## tailwind.config.js

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: generateColors("#1E88E5"),
        success: generateColors("#43A047"),
        warning: generateColors("#FB8C00"),
        danger: generateColors("#E53935"),
      },
    },
  },
  plugins: [],
};

function generateColors(color) {
  const { toneMap } = require("@nextcss/color-tools");
  return {
    DEFAULT: color,
    ...toneMap(color),
  };
}
```

# next 세팅 settings

## install

```sh
npm i @tanstack/react-query
npm i zustand

# nextui
npm i -D nextui
npx nextui --add

# form
npm i zod
npm i react-hook-form

# swiper
npm i swiper

# object to formdata
npm i object-to-formdata

# file-saver
npm i file-saver

# color tools
npm i @nextcss/color-tools

# icon
npm i -D @iconify/json
npm i -D @iconify/tailwind

# lint
npm i -D eslint-plugin-react
npm i -D eslint-plugin-react-hooks
npm i -D eslint-plugin-next
npm i -D @tanstack/eslint-plugin-query
```

## tailwind.config.js

```js
const { addDynamicIconSelectors } = require("@iconify/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [addDynamicIconSelectors()],
  important: true,
};
```

# next 세팅 settings

## install

```sh
# state management
npm i @tanstack/react-query
npm i zustand

# class conditional
npm i clsx

# form
npm i zod
npm i react-hook-form

# UI
npm i primereact

# json-ld
npm i schema-dts

# color tools
npm i @nextcss/color-tools

# icon
npm i -D @iconify/json
npm i -D @iconify/tailwind

##########################
######## optional ########
##########################
# Intersection Observer
npm i react-intersection-observer

# third-party script (e.g. Google Analytics)
npm i @next/third-parties

# animation
npm i framer-motion
npm i @floating-ui/react

# bundle analyzer
npm i -D @next/bundle-analyzer

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

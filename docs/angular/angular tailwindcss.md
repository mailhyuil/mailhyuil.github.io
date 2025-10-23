# tailwindcss

## install

```sh
npm install -D tailwindcss postcss autoprefixer
```

## init

```sh
npx tailwindcss init
```

## tailwind.config.js

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

## styles.scss

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

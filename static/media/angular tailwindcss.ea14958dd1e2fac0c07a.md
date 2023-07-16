# tailwindcss

## install

```
npm install -D tailwindcss postcss autoprefixer
```

## init

```
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

# tailwindcss icon

> Icon list

    - [iconify.design](https://icon-sets.iconify.design/heroicons)
    - [icones](https://icones.js.org/)

## install

```sh
npm i -D @iconify/json
npm i -D @iconify/tailwind
```

## tailwind.config.js

```js
const { addDynamicIconSelectors } = require("@iconify/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [addDynamicIconSelectors()],
};
```

## 사용

```html
<span class="text-5xl text-primary icon-[heroicons--user-circle-16-solid]"></span>
```

# tailwindcss responsive mobile-first to desktop-first

## tailwind.config.js

> 기본이 min이다.
>
> > max로 변경해라

```js
module.exports = {
  theme: {
    screens: {
      sm: { max: "640px" },
      md: { max: "768px" },
      lg: { max: "1024px" },
      xl: { max: "1280px" },
      "2xl": { max: "1536px" },
    },
  },
};
```

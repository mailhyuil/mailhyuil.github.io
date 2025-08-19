# tailwindcss container custom

## tailwind.config.js

```js
module.exports = {
  corePlugins: {
    container: false,
  },
  plugins: [container],
};

function container({ addComponents }) {
  addComponents({
    ".container": {
      maxWidth: "100%",
      "@screen sm": {
        maxWidth: "640px",
      },
      "@screen md": {
        maxWidth: "768px",
      },
      "@screen lg": {
        maxWidth: "1280px",
      },
      "@screen xl": {
        maxWidth: "1400px",
      },
    },
  });
}
```

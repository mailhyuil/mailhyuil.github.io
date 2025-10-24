# tailwindcss container inner-container & outer-container

## tailwind.config.js

```js
module.exports = {
  plugins: [container],
};

function container({ addComponents }) {
  addComponents({
    ".inner-container": {
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
    ".outer-container": {
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

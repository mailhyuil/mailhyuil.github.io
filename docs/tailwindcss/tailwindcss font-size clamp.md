# tailwindcss font-size clamp

## tailwindcss.config.js

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        clamp: "clamp(1rem, 5vw, 3rem)",
      },
    },
  },
  plugins: [],
};
```

## plain css

```css
body {
  font-size: clamp(1rem, 5vw, 3rem);
}
```

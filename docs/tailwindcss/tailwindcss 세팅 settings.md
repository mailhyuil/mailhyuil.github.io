# tailwindcss 세팅 settings

## install

```sh
npm i -D @tailwindcss/typography
npm i -D @iconify/json
npm i -D @iconify/tailwind
npm i -D @nextcss/color-tools
```

## styles.scss

```css
@tailwind base;
@layer base {
  html {
    font-size: 12px;
    @apply break-keep;
  }

  @screen sm {
    html {
      font-size: 14px;
    }
  }

  @screen lg {
    html {
      font-size: 16px;
    }
  }
}
@tailwind components;
@tailwind utilities;
```

## font.scss

```css
@font-face {
  font-family: "PretendardVariable";
  src: local("PretendardVariable"), url(/font/PretendardVariable.woff2) format("woff2-variations");
}
```

## project.json

```json
"styles": [
  "apps/client/src/styles.scss",
  {
    "input": "apps/client/src/font.scss",
    "inject": false
  }
],
```

## index.html

```html
<link rel="preconnect" href="https://cdn.jsdelivr.net" crossorigin="anonymous" />
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/variable/pretendardvariable.min.css"
/>
```

## tailwind.config.js

```javascript
const { createGlobPatternsForDependencies } = require("@nx/angular/tailwind");
const { join } = require("path");
const { addDynamicIconSelectors } = require("@iconify/tailwind");
const { toneMap } = require("@nextcss/color-tools");
const typography = require("@tailwindcss/typography");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [join(__dirname, "src/**/!(*.stories|*.spec).{ts,html}"), ...createGlobPatternsForDependencies(__dirname)],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1E88E5",
          ...toneMap("#1E88E5"),
        },
        secondary: {
          DEFAULT: "#FF8577",
          ...toneMap("#FF8577"),
        },
        tertiary: {
          DEFAULT: "#C4B9FC",
          ...toneMap("#C4B9FC"),
        },
        medium: {
          DEFAULT: "#808080",
          ...toneMap("#808080"),
        },
        info: {
          DEFAULT: "#5551FE",
          ...toneMap("#5551FE"),
        },
        success: {
          DEFAULT: "#4caf50",
          ...toneMap("#4caf50"),
        },
        warning: {
          DEFAULT: "#FB8C00",
          ...toneMap("#FB8C00"),
        },
        danger: {
          DEFAULT: "#f44336",
          ...toneMap("#f44336"),
        },
      },
      fontFamily: {
        sans: ["pretendardvariable", "sans-serif"],
      },
      container: {
        center: true,
      },
      height: {
        inner: "calc(100vh - 4rem)",
      },
    },
  },
  plugins: [addDynamicIconSelectors(), typography, innerOuterContainer],
};

function innerOuterContainer({ addComponents }) {
  addComponents({
    ".outer": {
      maxWidth: "100%",
      margin: "0 auto",
      "@screen sm": {
        maxWidth: "640px",
      },
      "@screen md": {
        maxWidth: "840px",
      },
      "@screen lg": {
        maxWidth: "1280px",
      },
      "@screen xl": {
        maxWidth: "1536px",
      },
      "@screen 2xl": {
        maxWidth: "1920px",
      },
    },
    ".inner": {
      maxWidth: "100%",
      margin: "0 auto",
      "@screen sm": {
        maxWidth: "440px",
      },
      "@screen md": {
        maxWidth: "640px",
      },
      "@screen lg": {
        maxWidth: "1080px",
      },
      "@screen xl": {
        maxWidth: "1336px",
      },
      "@screen 2xl": {
        maxWidth: "1720px",
      },
    },
  });
}
```

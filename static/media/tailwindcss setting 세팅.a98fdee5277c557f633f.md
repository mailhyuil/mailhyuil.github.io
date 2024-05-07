# tailwindcss setting 세팅

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

> fout, foit 방지

```css
h1 {
  @apply font-extrabold text-3xl line-clamp-1 break-keep;
}

h2 {
  @apply font-bold text-2xl line-clamp-1 break-keep;
}

h3 {
  @apply font-bold text-xl line-clamp-1 break-keep;
}

h4 {
  @apply font-bold text-lg line-clamp-1 break-keep;
}

h5 {
  @apply font-bold text-base line-clamp-1 break-keep;
}

h6 {
  @apply font-bold text-sm line-clamp-1 break-keep;
}

p {
  @apply line-clamp-1 break-keep;
}

* {
  @apply text-neutral-700;
}

// pretendard font
@import url("https://fastly.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/variable/pretendardvariable.css");
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
<link rel="preload" href="font.css" as="style" />
```

## tailwind.config.js

```javascript
const { createGlobPatternsForDependencies } = require("@nx/angular/tailwind");
const { join } = require("path");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [join(__dirname, "src/**/!(*.stories|*.spec).{ts,html}"), ...createGlobPatternsForDependencies(__dirname)],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Pretendard Variable"],
      },
    },
  },
  plugins: [],
};
```

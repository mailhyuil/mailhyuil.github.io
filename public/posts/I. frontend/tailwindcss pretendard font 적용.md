# pretendard + tailwindcss

## style.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/variable/pretendardvariable.css");
```

## tailwind.config.js

> font-familysms 대문자, 소문자를 구별하지 않는다.

```js
  theme: {
    extend: {
      fontFamily: {
        sans: ['PrEtEnDArD VaRiAbLE'],
      },
    },
  },
```

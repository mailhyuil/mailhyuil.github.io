# pretendard + tailwindcss

## public/fonts/PretendardVariable.woff2

> 파일 다운로드해서 넣기

## font.scss

```css
@import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/variable/pretendardvariable.min.css");
@font-face {
  font-family: "Pretendard Variable";
  src: local("Pretendard Variable"), url(/fonts/PretendardVariable.woff2) format("woff2");
}
```

## tailwind.config.js

```js
fontFamily: {
  sans: ["pretendard variable", "sans-serif"],
},
```

## index.html

```html
<link rel="preconnect" href="https://cdn.jsdelivr.net" />
```

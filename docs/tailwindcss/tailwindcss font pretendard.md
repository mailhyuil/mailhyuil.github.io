# tailwindcss font pretendard

## public/fonts/PretendardVariable.woff2

> 파일 다운로드해서 넣기

## font.scss

```css
@font-face {
  font-family: "Pretendard Variable";
  src: local("Pretendard Variable"), url(/fonts/PretendardVariable.woff2) format("woff2-variations");
}
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

```js
fontFamily: {
  sans: ["pretendard variable", "sans-serif"],
},
```

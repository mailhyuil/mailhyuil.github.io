# 초기 렌더링 시 transition 방지

## html

```html
<body class="preload"></body>
```

## css

```css
.preload * {
  transition: none !important;
}
```

## js

```js
window.addEventListener("load", () => body.classList.remove("preload"));
```

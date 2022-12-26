# 초기 렌더링 시 transition 방지

## html

```
<body class="preload"></body>
```

## css

```
.preload * {
  transition: none !important;
}
```

## js

```
window.addEventListener("load", () => body.classList.remove("preload"));
```

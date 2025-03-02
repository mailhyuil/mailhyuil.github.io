# tailwindcss font 전역 사용

> 전역으로 사용할 font는 global css에 등록하는 방법과 tailwind.config.js에 등록하는 방법이 있다.

## tailwind.config.js

```txt
fontFamily: {
  sans: ['PretendardVariable', 'serif'],
},
```

## global.css

```css
* {
  font-family: "pretendard variable";
}
```

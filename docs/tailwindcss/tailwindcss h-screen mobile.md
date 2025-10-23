# tailwindcss h-screen mobile

> 모바일 환경에서 height를 100vh로 설정하면 주소바 UI 때문에 화면이 잘리는 문제가 있음

## 새로운 단위 사용

> 뷰포트 너비/높이 기반으로 설정하는 것은 편하지만, vh 는 모바일에서 버그가 많음
> 뷰포트 사이즈가 브라우저의 주소바 UI를 포함하지 않기 때문
>
> > dvh는 성능 문제가 생길 수 있음
> >
> > > svh를 사용하는 것이 좋음

```
svh (Small Viewport) : 주소바 UI가 축소되지 않은 상태의 뷰포트 높이
lvh (Large Viewport) : 주소바 UI가 축소된 상태의 뷰포트 높이
dvh (Dynamic Viewport) : svh / lvh 사이에서 동적으로 변화
```

### tailwindcss.config.js

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      height: {
        screen: "100svh",
      },
    },
  },
  plugins: [],
};
```

## 예전 방식

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      height: {
        "real-screen": "calc(var(--vh) * 100)",
      },
    },
    minHeight: {
      "real-screen": "calc(var(--vh) * 100)",
    },
  },
  plugins: [],
};
```

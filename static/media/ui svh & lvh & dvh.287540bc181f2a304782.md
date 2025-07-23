# ui svh & lvh & dvh

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

## usage

```css
.container {
  height: 100svh;
  height: 100vh; # 지원하지 않는 브라우저를 위한 폴백
}
```

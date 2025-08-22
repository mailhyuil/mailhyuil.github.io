# react hook useCallback

> 함수의 레퍼런스 (결과x) 를 캐싱
>
> > 불필요한 함수 재생성을 방지
> >
> > > 함수를 props로 전달할 때, 매번 새로운 함수를 생성하는 것을 방지

```tsx
const handleClick = useCallback(() => {
  console.log("clicked");
}, [...dependencies]);
```

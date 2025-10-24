# react component Suspense

> Component를 suspend(보류) 상태로 만들어 로딩 중에 fallback UI를 보여줄 수 있습니다.
>
> > react의 lazy 함수를 사용한다.

```tsx
<Suspense fallback={<Loading />}>
  <SomeComponent />
</Suspense>
```

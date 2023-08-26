# switchMap

> ~Map으로 된 operator는 가독성을 향상시킨다.
>
> > source의 값을 다른 옵저버블에 머지시킨다.
> >
> > > > 이전에 구독중이던 Observable 의 구독을 취소하고 다음 Observable 구독을 시작

```ts
const serviceB$ = serviceA(paramsA).pipe(
  switchMap((serviceAResult) => {
    return serviceB(paramsB);
  })
);

const serviceC$ = serviceB$.pipe(
  switchMap((serviceBResult) => {
    return serviceC(paramsC);
  })
);

serviceC$.subscribe(
  (serviceCResult) => {
    // here is my logic code.
  },
  (error) => {
    // handle error
  }
);
```

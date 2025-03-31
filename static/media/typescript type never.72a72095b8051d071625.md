# typescript type never

> 리턴 타입으로 사용
>
> > 변수로 할당 불가능
> >
> > > 아무것도 리턴하지 않는다 값도 에러도

```ts
never_type_func = (function (): never {
  throw new Error("ERROR");
})();
```

# InjectionToken vs StringToken

## InjectionToken

> 형식 검사를 한다
>
> > 디버깅에 용의

```ts
export const MY_TOKEN = InjectionToken("MY_TOKEN");
```

## StringToken

> 형식 검사를 하지 않는다.

# nest InjectionToken vs StringToken

## InjectionToken

> 형식 검사를 한다
>
> > 디버깅에 용의
> >
> > > module 안에 선언되면 안된다. 따로 파일로 분리해서 선언해야 한다.

```ts
export const MY_TOKEN = InjectionToken("MY_TOKEN");
```

## StringToken

> 형식 검사를 하지 않는다.

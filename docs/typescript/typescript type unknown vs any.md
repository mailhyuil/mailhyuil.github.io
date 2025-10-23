# typescript type unknown vs any

> any는 마치 javascript와 같이 제약 없이 무엇이든 할당이 가능
>
> > unknown은 타입이 무엇인지 모르니까 타입체크를 반드시 해야하는 타입이다 (타입 체크 강제 유도)
> >
> > unknown을 사용하면 타입을 체크해야하는 제약이 늘어나지만 훨씬 안전하게 개발 가능

## unknown

```ts
let unknown_type: unknown;

unknown_type = 1;
unknown_type = "string";
unknown_type = true;

const number_type: number = unknown_type; // Error
```

## any

```ts
let any_type: any;

any_type = 1;
any_type = "string";
any_type = true;

const number_type: number = any_type; // OK
```

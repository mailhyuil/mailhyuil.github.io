# typescript type unknown

> 무엇이든 할당이 가능
>
> > any와 unknown을 제외한 다른 타입에 할당 불가능
> >
> > any는 모든 타입에 할당 가능

```ts
let unknown_type: unknown;

unknown_type = 1;
unknown_type = "string";
unknown_type = true;

const number_type: number = unknown_type; // Error
```

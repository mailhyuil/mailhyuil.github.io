# x tuple pattern

> 배열 내에 값만 쓰거나 혹은 다른 options을 같이 쓰는 도록 설계하는 패턴
>
> > 배열에 값만 넣으면 되어서 간단하고 필요 시 다른 옵션을 같이 쓸 수 있어서 편리하다.

```ts
const value = [""];
const value = ["", [Validators.required]];
const value = ["", { updateOn: "blur" }];
```

# typescript NonNullable

> Type으로 부터 null, undefined를 제거해주는 타입

```ts
type T0 = NonNullable<string | number | undefined>;
type T0 = string | number;

type T1 = NonNullable<string[] | null | undefined>;
type T1 = string[];
```

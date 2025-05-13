# typescript 같은 이름의 variable & type

> 변수와 type의 이름이 같아도 문제가 없다.
>
> > 타입으로 사용할 때는 type을 변수로 사용할 때는 변수를 자동으로 사용한다.

```ts
export const Something = {} as const;
export type Something = object;

const obj: Something = {}; // 자동으로 type을 가져온다.
```

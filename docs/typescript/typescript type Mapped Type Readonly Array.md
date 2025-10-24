# typescript type Mapped Type Readonly Array

```ts
const immutableArr1 = [1, 2, 3] as const;

const immutableArr2: readonly number[] = [1, 2, 3];

const immutableArr3: ReadonlyArray<number> = [1, 2, 3];

const immutableArr4: Readonly<number[]> = [1, 2, 3];
```

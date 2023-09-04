# interface key를 type으로

```ts
export type SomeType = Partial<Record<keyof Omit<ITestDTO, "id" | "createdAt" | "updatedAt">, string>>;
```

# typescript as unknown as

> unknown에는 뭐든 할당이 가능하지만
>
> > 아무 곳에도 할당될 수 없다.

```ts
file.pipe(res as unknown as NodeJS.WritableStream);
```

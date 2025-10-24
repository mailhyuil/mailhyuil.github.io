# js 매개변수를 배열로

```ts
function doSomething(str: string, ...args: any[]) {
  args.forEach((a) => a);
}
```

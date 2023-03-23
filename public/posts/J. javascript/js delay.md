# promise delay

## void

```
const delay = (time: number) =>
  new Promise<void>((resolve) => {
    setTimeout(() => resolve(), time);
  });
await delay(4000);
console.log("HI");
```

## 값 리턴

```
const delay = (time: number) =>
  new Promise<string>((resolve) => {
    setTimeout(() => resolve("i'm returned"), time);
  });
const res = await delay(4000);
console.log(res);
```

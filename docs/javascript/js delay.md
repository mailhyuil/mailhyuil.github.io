# js delay

## void

```js
const delay = time =>
  new Promise(resolve => {
    setTimeout(() => resolve(), time);
  });

await delay(4000);

console.log("HI");
```

## 값 리턴

```js
const delay = time =>
  new Promise(resolve => {
    setTimeout(() => resolve("i'm returned"), time);
  });

const res = await delay(4000);

console.log(res);
```

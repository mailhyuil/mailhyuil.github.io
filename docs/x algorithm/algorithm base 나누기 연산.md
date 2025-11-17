# algorithm base 나누기 연산

## 배열을 n개씩 나누기

```ts
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const n = 3;
const result = arr.reduce((acc, cur, i) => {
  const index = Math.floor(i / n);
  if (!acc[index]) {
    acc[index] = [];
  }
  acc[index].push(cur);
  return acc;
}, []);
```

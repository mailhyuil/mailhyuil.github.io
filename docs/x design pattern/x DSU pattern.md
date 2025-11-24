# DSU pattern (decorate-sort-undecorate)

- 값을 튜플 [value, index] 형태로 바꾸고(decorate) sort 후 다시 원상복귀(undecorate)하는 패턴

```js
arr.map((v, i) => [v, i]) // decorate
    .sort(...)            // sort
    .map(([v]) => v)      // undecorate
```

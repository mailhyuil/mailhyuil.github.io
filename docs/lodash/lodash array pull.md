# lodash array pull

> 배열에서 특정 값을 제거한다. 원본값을 mutate한다.
>
> > remove 또는 without 사용을 권장한다.

```js
const arr = ["a", "b", "c", "a", "b", "c"];

pull(arr, "a", "c");
console.log(arr);
// ['b', 'b']
```

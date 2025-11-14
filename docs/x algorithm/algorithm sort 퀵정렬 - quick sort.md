# algorithm sort 퀵정렬 - quick sort

> pivot index를 사용
>
> > 병합정렬은 stable 하지만, 퀵 정렬은 unstable 하다.

```js
function quickSort(arr) {
  if (arr.length <= 1) return arr;

  const pivot = arr[Math.floor(arr.length / 2)];
  const left = [];
  const equal = [];
  const right = [];

  for (let ele of arr) {
    if (ele < pivot) left.push(ele);
    else if (ele > pivot) right.push(ele);
    else equal.push(ele);
  }

  return [...quickSort(left), ...equal, ...quickSort(right)];
}

const arr = [2, 3, 4, 55, 12, 3, 10, 4, 1, 2, 34, 4, 23, 4, 2];
console.log(quickSort(arr));
```

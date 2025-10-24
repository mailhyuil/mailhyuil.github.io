# algorithm sort 퀵정렬

> pivot index를 사용
>
> > 병합정렬은 stable 하지만, 퀵 정렬은 unstable 하다.

```js
const quickSort = function (arr) {
  if (arr.length <= 1) return arr; // 탈출 조건

  const pivot = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    // pivot index를 기준으로 왼쪽, 오른쪽으로 나누기
    if (arr[i] <= pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  const lSorted = quickSort(left);
  const rSorted = quickSort(right);
  return [...lSorted, pivot, ...rSorted];
};

const arr = [2, 3, 4, 5, 2, 3, 3, 4, 5, 2, 34, 4, 23, 4, 2];

console.log(quickSort(arr));
```

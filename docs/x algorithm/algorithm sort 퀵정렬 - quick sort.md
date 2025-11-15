# algorithm sort 퀵정렬 - quick sort

random한 pivot index를 사용하여 분할하는 정렬 알고리즘

- 평균 시간복잡도 O(n log n)으로 안정적이다.
- 분할이 잘 되면 병합정렬보다 빠르다.
- 최악의 경우 O(n^2)이 될 수 있다.
- In-Place Algorithm으로 공간복잡도가 낮다. (공간복잡도 O(1))
- 같은 값을 가진 요소들의 순서가 유지되지 않는 unstable sort 이다.

```js
function quickSort(arr) {
  if (arr.length <= 1) return arr;

  const pivot = arr[Math.floor(Math.random() * arr.length)]; // 랜덤한 값을 선택하여 사용
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

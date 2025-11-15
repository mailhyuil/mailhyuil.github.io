# algorithm sort 병합정렬 - merge sort

- 항상 시간복잡도 O(n log n)으로 안정적이다.
- 데이터가 많을 수록 좋은 알고리즘
- Not In-Place Algorithm으로 공간복잡도가 높다. (공간복잡도 O(N))
- 같은 값을 가진 요소들의 순서가 유지되는 stable sort 이다.

```js
function merge(left: number[], right: number[]) {
  const sorted: number[] = [];
  let i = 0; // left 인덱스
  let j = 0; // right 인덱스
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      sorted.push(left[i]);
      i++;
    } else {
      sorted.push(right[j]);
      j++;
    }
  }
  return [...sorted, ...left.slice(i), ...right.slice(j)];
}

function mergeSort(arr: number[]) {
  if (arr.length === 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  // mergeSort: divide 작업
  // merge: 정렬 및 합치기 작업
  return merge(mergeSort(left), mergeSort(right));
}

const arr = [7, 4, 3, 2, 1, 6, 5];
console.log(mergeSort(arr));
```

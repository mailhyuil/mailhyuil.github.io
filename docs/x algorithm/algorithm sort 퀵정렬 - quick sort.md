# algorithm sort 퀵정렬 - quick sort

random한 pivot index를 사용하여 분할하는 정렬 알고리즘

- 평균 시간복잡도 O(n log n)으로 안정적이다.
- 분할이 잘 되면 병합정렬보다 빠르다.
- 최악의 경우 O(n^2)이 될 수 있다.
- In-Place Algorithm으로 공간복잡도가 낮다. (공간복잡도 O(1))
- 같은 값을 가진 요소들의 순서가 유지되지 않는 unstable sort 이다.

## example

```js
const swap = (arr, i, j) => {
  [arr[i], arr[j]] = [arr[j], arr[i]];
};

function pivot(arr, start = 0, end = arr.length - 1) {
  // We are assuming the pivot is always the first element
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }

  // Swap the pivot from the start the swapPoint
  swap(arr, start, swapIdx);
  return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right); //3
    //left
    quickSort(arr, left, pivotIndex - 1);
    //right
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

console.log(quickSort([100, -3, 2, 4, 6, 9, 1, 2, 5, 3, 23]));
```

## not-in-place algorithm

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

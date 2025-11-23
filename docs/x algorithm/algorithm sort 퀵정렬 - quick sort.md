# algorithm sort 퀵정렬 - quick sort

pivot을 기준으로 작은 값들을 왼쪽 그룹에, 큰 값들을 오른쪽 그룹에 swap 한 후 다시 재귀적으로 정렬하는 알고리즘

- 평균 시간복잡도 O(n log n)으로 안정적이다.
- 분할이 잘 되면 병합정렬보다 빠르다.
- 최악의 경우 O(n^2)이 될 수 있다.
- In-Place Algorithm으로 공간복잡도가 낮다. (공간복잡도 O(1))
- 같은 값을 가진 요소들의 순서가 유지되지 않는 unstable sort 이다.

## 동작 원리

1. pivot 보다 작은 값은 left 마커로 이동, pivot보다 큰값은 right 마커로 이동
2. left 마커와 right 마커가 만나면 그 위치와 pivot을 swap
3. 재귀 반복

## example

```js
function partition(arr, left, right) {
  const pivot = arr[Math.floor((left + right) / 2)]; // 왼쪽 마커와 오른쪽 마커 사이의 pivot 마커 생성 (랜덤 인덱스)
  while (true) {
    while (arr[left] < pivot) left++; // 왼쪽 마커가 피봇 수 이상인 곳에서 멈춤
    while (arr[right] > pivot) right--; // 오른쪽 마커가 피봇 수 이하인 곳에서 멈춤

    if (left >= right) return right; // 오른쪽 마커가 왼쪽 마커와 같거나 크면 리턴

    [arr[left], arr[right]] = [arr[right], arr[left]]; // 아니면 왼쪽과 오른쪽을 swap

    left++; // 왼쪽 마커 올리기
    right--; // 오른쪽 마커 내리기
  }
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left >= right) return arr; // 왼쪽 마커가 오른쪽 마커보다 커버리면 리턴

  const mid = partition(arr, left, right); // 오른쪽 마커가 왼쪽 마커와 같거나 큰 경우를 mid로
  quickSort(arr, left, mid); // 왼쪽 ~ mid 재귀 반복
  quickSort(arr, mid + 1, right); // mid ~ 오른쪽 재귀 반복

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

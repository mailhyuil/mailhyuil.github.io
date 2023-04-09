# merge sort

## merging

```js
// 병합(merge) 수행 함수
function merge(arr, left, mid, right) { let i = left;
let j = mid + 1;
let k = left; // 결과 배열의 인덱스 while (i <= mid && j <= right) {
    if (arr[i] <= arr[j]) sorted[k++] = arr[i++];
    else sorted[k++] = arr[j++];
  }
// 왼쪽 배열에 대한 처리가 다 끝난 경우
if (i > mid) {
for (; j <= right; j++) sorted[k++] = arr[j];
}
// 오른쪽 배열에 대한 처리가 다 끝난 경우
  else {
    for (; i <= mid; i++) sorted[k++] = arr[i];
}
// 정렬된 배열 결과를 원본 배열에 반영하기
  for (let x = left; x <= right; x++) {
    arr[x] = sorted[x];
} }
```

## sorting

```js
// 병합 정렬(merge sort) 함수
function mergeSort(arr, left, right) {
// 원소가 1개인 경우, 해당 배열은 정렬이 된 상태로 이해 가능 if (left < right) {
// 원소가 2개 이상이라면
let mid = parseInt((left + right) / 2); // 2개의 부분 배열로 분할(divide) mergeSort(arr, left, mid); // 왼쪽 부분 배열 정렬 수행(conquer) mergeSort(arr, mid + 1, right); // 오른쪽 부분 배열 정렬 수행(conquer) merge(arr, left, mid, right); // 정렬된 2개의 배열을 하나로 병합(combine)
} }
```

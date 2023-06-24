# merge sort (병합 정렬)

> 가장 많이 사용되는 정렬
>
> > 데이터가 많을 수록 좋은 알고리즘
> >
> > > 시간복잡도 O(logN)
> > >
> > > > 분할 정복 알고리즘 중 하나

```js
// 병합 정렬(merge sort) 함수 // 나누고, 정렬하고, 합치는 과정
function mergeSort(arr, left, right) {
  // 원소가 1개인 경우, 해당 배열은 정렬이 된 상태
  if (left < right) {
    // 원소가 2개 이상이라면
    let mid = parseInt((left + right) / 2); // 2개의 부분 배열로 분할(divide) // 중앙값 구하기 공식: (left + right) / 2

    mergeSort(arr, left, mid); // 왼쪽 부분을 다시 2개로 분할(divide)
    mergeSort(arr, mid + 1, right); // 오른쪽 부분을 다시 2개로 분할(divide)
    merge(arr, left, mid, right); // 정렬된 2개의 배열을 하나로 병합(conquer & combine)
  }
}

// 병합(merge) 수행 함수
function merge(arr, left, mid, right) {
  let _left = left;
  let _right = mid + 1;
  let _cur = left; // 정렬된 원소를 저장할 배열의 인덱스
  // case1 : 정렬할 배열의 왼쪽 부분과 오른쪽 부분을 비교하여, 작은 값이 sorted 배열에 저장
  while (_left <= mid && _right <= right) {
    if (arr[_left] <= arr[_right]) {
      sorted[_cur++] = arr[_left++];
    } else {
      sorted[_cur++] = arr[_right++];
    }
  }
  // case2 : 왼쪽 부분 배열이 먼저 정렬이 끝난 경우(_left > mid), 오른쪽 부분 배열에 남은 원소들을 그대로 sorted 배열에 저장
  if (_left > mid) {
    for (; _right <= right; _right++) {
      sorted[_cur++] = arr[_right];
    }
  } else {
    // case3 : 오른쪽 부분 배열이 먼저 정렬이 끝난 경우(_left <= mid), 왼쪽 부분 배열에 남은 원소들을 그대로 sorted 배열에 저장
    for (; _left <= mid; _left++) {
      sorted[_cur++] = arr[_left];
    }
  }

  // 정렬된 배열 결과(sorted)를 원본 배열(arr)에 반영
  for (let x = left; x <= right; x++) {
    arr[x] = sorted[x];
  }
}

///////////////////////-- 사용 --///////////////////////
const arr = [2, 4, 5, 76, 78, 8, 7, 5, 4, 2, 32, 453, 345, 567, 6, 3];
const sorted = Array.from({ length: arr.length }, () => 0);
mergeSort(arr, 0, arr.length - 1);

console.log(arr);
```

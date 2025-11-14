# algorithm 배열 보간탐색

> 정렬된 배열에서 사용
>
> > 배열의 요소가 균일하게 분포되어 있다면 이진 탐색보다 더 빠른 결과를 얻을 수 있습니다.
> >
> > > [1, 2, 3, 4, 5, 6, 7] (good) // [1, 2, 3, 4, 100, 101, 102] (bad)

```txt
보간 공식: pos = low + ((value - arr[low]) * (high - low)) / (arr[high] - arr[low])

low: 탐색 범위의 시작 인덱스
high: 탐색 범위의 끝 인덱스
value: 찾으려는 값
arr: 정렬된 배열
```

```js
function interpolationSearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high && target >= arr[low] && target <= arr[high]) {
    // 예상 위치 계산
    let position = Math.floor(low + ((target - arr[low]) * (high - low)) / (arr[high] - arr[low]));

    if (arr[position] === target) {
      return position; // 탐색 성공
    }

    if (arr[position] < target) {
      low = position + 1; // 오른쪽 절반 탐색
    } else {
      high = position - 1; // 왼쪽 절반 탐색
    }
  }

  return -1; // 탐색 실패
}

const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17];

const resultIndex = interpolationSearch(sortedArray, 11);

console.log(resultIndex);
```

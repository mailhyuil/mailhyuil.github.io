# 배열 이진탐색

> 배열이 정렬되어있다면 가능
>
> > 그래프는 이진트리구조로 되어있다면 가능
> >
> > > 다른 탐색 : b트리, avl트리, 트라이, 쿼드트리

```js
function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === target) {
      return mid; // 탐색 성공
    } else if (arr[mid] > target) {
      high = mid - 1; // 왼쪽 부분 배열 탐색
    } else {
      low = mid + 1; // 오른쪽 부분 배열 탐색
    }
  }

  return -1; // 탐색 실패
}

// 사용 예시
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target = 5;
const result = binarySearch(arr, target);
if (result !== -1) {
  console.log("찾는 값의 인덱스:", result);
} else {
  console.log("찾는 값이 배열에 없습니다.");
}
```

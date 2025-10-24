# algorithm 배열 이진탐색

> 배열이 정렬되어있다면 가능
>
> > 그래프는 이진트리구조로 되어있다면 가능
> >
> > > 다른 탐색 : b트리, avl트리, 트라이, 쿼드트리

## 반복문

```js
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid; // 탐색 성공
    } else if (arr[mid] > target) {
      right = mid - 1; // 왼쪽 부분 배열 탐색
    } else {
      left = mid + 1; // 오른쪽 부분 배열 탐색
    }
  }

  return -1; // 탐색 실패
}
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(binarySearch(arr, 5)); // 4
```

## 재귀문

```js
function binarySearchRecursive(arr, target, left = 0, right = arr.length - 1) {
  if (left > right) {
    return -1; // 탐색 실패
  }

  const mid = Math.floor((left + right) / 2);

  if (arr[mid] === target) {
    return mid; // 탐색 성공
  } else if (arr[mid] > target) {
    return binarySearchRecursive(arr, target, left, mid - 1); // 왼쪽 부분 배열 탐색
  } else {
    return binarySearchRecursive(arr, target, mid + 1, right); // 오른쪽 부분 배열 탐색
  }
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(binarySearchRecursive(arr, 5)); // 4
```

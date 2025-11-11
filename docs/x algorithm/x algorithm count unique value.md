# algorithm count unique value

배열에서 중복을 제거하고 유니크한 값의 개수를 찾는 알고리즘 O(n)

> 포인터 사용
>
> > 중복 데이터 제거 후 고유 고객 수, 상품 수 계산

```ts
function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  let left = 0;
  let right = 1;
  while (right < arr.length) {
    if (arr[left] !== arr[right]) {
      left++;
      arr[left] = arr[right];
    }
    right++;
  }
  return left + 1;
}

console.log(countUniqueValues([1, 1, 1, 2, 2, 3, 4, 4, 4, 5]));
```

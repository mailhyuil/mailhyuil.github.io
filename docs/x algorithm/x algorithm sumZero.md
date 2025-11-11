# algorithm sum zero

배열에서 두 수의 합이 0이 되는 두 수를 찾는 알고리즘 O(n)

> 포인터 사용
>
> > 환율/손익 상쇄 계산 (금융) 등 상쇄, 0이되는 값 찾기

```ts
function sumZero(arr) {
  if (arr.length === 0) return undefined;
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum < 0) {
      left++;
    } else {
      right--;
    }
  }
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 4, 2]));
```

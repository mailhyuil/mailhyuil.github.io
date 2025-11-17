# x algorithm maxSubarraySum

- 배열과 window 크기가 주어졌을 때 window 크기만큼의 합이 가장 큰 부분 배열의 합을 구하는 알고리즘 O(n)

```js
function maxSubarraySum(arr, window) {
  if (!arr.length) return false;
  if (arr.length < window) return null;

  let sum = 0;

  for (let i = 0; i < window; i++) {
    sum += arr[i];
  }

  let maxSum = sum;

  let start = window;

  while (start < arr.length) {
    sum = sum + arr[start] - arr[start - window];
    if (sum > maxSum) {
      maxSum = sum;
    }
    start++;
  }

  return maxSum;
}
```

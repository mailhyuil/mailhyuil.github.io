# x algorithm average pair

- 정렬된 배열과 평균값이 주어졌을 때 주어진 평균값을 가지는 쌍이 있는지 확인하는 알고리즘 O(n)
- 정렬이 되어있기 때문에 sumAvg가 avg보다 작을 때는 start를 증가시키고, 클 때는 end를 감소시킨다.
- 평균을 키우려면 더 큰 수가 필요하기에 start를 증가시키고, 평균을 줄이려면 더 작은 수가 필요하기에 end를 감소시킨다.

```js
function averagePair(arr, avg) {
  if (arr.length === 0) return false;
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    const sumAvg = (arr[start] + arr[end]) / 2;
    if (sumAvg === avg) return true;
    if (sumAvg < avg) start++;
    else end--;
  }
  return false;
}
```

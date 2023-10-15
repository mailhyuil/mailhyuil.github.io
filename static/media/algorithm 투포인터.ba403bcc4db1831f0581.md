# 투 포인터

> 두 포인터 사이의 "구간"을 조정하면서 "원하는 조건을 만족하는 부분"을 찾는 것
>
> > 투 포인터 알고리즘은 중첩된 for 루프를 사용하는 방법보다 더 효율적입니다. 중첩된 for 루프를 사용할 경우 시간 복잡도가 O(n^2)가 되는 반면, 투 포인터 알고리즘을 사용하면 시간 복잡도를 O(n)으로 줄일 수 있습니다.
> >
> > > left는 0 right는 arr.length-1이여야한다.
> > >
> > > > 퀵정렬, 슬라이딩 윈도우 등에서 사용

## 특정한 합을 가지는 부분 연속 수열 찾기 (구간합)

```js
const data = [3, 2, 4, 1, 2, 2, 1, 5]; // 전체 수열
const m = 5; // 찾고자 하는 구간합 M
let start = 0;
let end = 0;
let intervalSum = 0; // intervalSum은 구간합을 의미
let count = 0;
// start를 차례대로 증가시키며 반복
while (start < data.length) {
  // end를 가능한 만큼 이동시키기
  while (intervalSum < m && end < data.length) {
    intervalSum += data[end];
    end++;
  }

  // 구간합 m일 때 카운트 증가
  if (intervalSum == m) {
    count++;
  }

  intervalSum -= data[start]; // end의 합에서 start를 빼주면 구간합이 됨
  start++;
}
console.log(count);
```

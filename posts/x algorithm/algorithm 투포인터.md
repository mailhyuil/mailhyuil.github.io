# 투 포인터

> 리스트에 순차적으로 접근할 때 두 개의 점의 위치를 기록하면서 처리하는 알고리즘
>
> > 시작점과 끝점 2개의 포인터를 슬라이딩 시키면서 포인터 인덱스로 접근
> >
> > > 퀵정렬, 슬라이딩 윈도우 등에서 사용

## 특정한 합을 가지는 부분 연속 수열 찾기

```js
const data = [3, 2, 4, 1, 2, 2, 1, 5]; // 전체 수열
const m = 5; // 찾고자 하는 부분합 M
let start = 0;
let end = 0;
let intervalSum = 0; // intervalSum은 부분합(구간합)을 의미
let count = 0;
// start를 차례대로 증가시키며 반복
while (start < data.length) {
  // end를 가능한 만큼 이동시키기
  while (intervalSum < m && end < data.length) {
    intervalSum += data[end];
    end++;
  }

  // 부분합이 m일 때 카운트 증가
  if (intervalSum == m) {
    count++;
  }

  intervalSum -= data[start]; // end의 합에서 start를 빼주면 부분합(구간합)이 됨
  start++;
}
console.log(count);
```

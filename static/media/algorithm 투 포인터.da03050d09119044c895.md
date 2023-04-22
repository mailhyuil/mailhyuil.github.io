# 투 포인터

> 리스트에 순차적으로 접근할 때 두 개의 점의 위치를 기록하면서 처리하는 알고리즘
>
> > 2,3,4,5,6,7번 학생 => 2번부터 7번 학생
> >
> > > 시작점과 끝점 2개의 점으로 접근

## 특정한 합을 가지는 부분 연속 수열 찾기

```js
let n = 8; // 데이터의 개수 N
let m = 5; // 찾고자 하는 부분합 M
let data = [3, 2, 4, 1, 2, 2, 1, 5]; // 전체 수열
let cnt = 0;
let intervalSum = 0;
let end = 0;
// start를 차례대로 증가시키며 반복
for (let start = 0; start < n; start++) {
  // end를 가능한 만큼 이동시키기
  while (intervalSum < m && end < n) {
    intervalSum += data[end];
    end += 1;
  }
  // 부분합이 m일 때 카운트 증가
  if (intervalSum == m) cnt += 1;
  intervalSum -= data[start];
}
console.log(cnt);
```

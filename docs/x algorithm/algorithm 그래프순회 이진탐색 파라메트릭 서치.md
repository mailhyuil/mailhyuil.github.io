# algorithm 그래프순회 이진탐색 파라메트릭 서치

> 이진탐색
>
> > 최적화 문제를 결정 문제로 바꾸어 해결하는 기법

## 단조 증가 & 단조 감소

> 단조 증가 => 같거나 증가만 할 때
>
> > 단조 감소 => 같거나 감소만 할 때
> >
> > > 값이 정렬되어 있는 상태

## 구현

> 가능한 한 최대의 총 예산 구하기

```js
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0].split(' ')[0]); // 지방의 수(N)
let arr = input[1].split(' ').map(Number); // 각 지방의 예산 요청 let m = Number(input[2]); // 총 예산(M)
let start = 1; // 이진 탐색을 위한 시작점(start)과 끝점(end) 설정 let end = arr.reduce((a, b) => Math.max(a, b));
let result = 0;

while (start <= end) { // 이진 탐색 수행(반복문)
let mid = parseInt((start + end) / 2); // 현재의 중간점(상한액) let total = 0; // 배정된 예산의 총액 계산
for (x of arr) { // 각 지방에서 요청한 예산을 하나씩 확인하며
total += Math.min(mid, x); // 예산 배정 }
if (total <= m) { // 조건을 만족한다면, 상한액(최대화가 목표)을 증가시키기 result = mid;
start = mid + 1;
}
else { // 조건을 만족하지 못한다면, 상한액을 감소시키기
end = mid - 1; }
}
console.log(result);
```

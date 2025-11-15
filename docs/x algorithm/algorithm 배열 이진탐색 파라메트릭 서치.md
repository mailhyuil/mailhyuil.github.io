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
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);
let m = Number(input[2]);

let start = 1;
let end = Math.max(...arr);
let result = 0;

while (start <= end) {
  let mid = Math.floor((start + end) / 2);
  let total = 0;

  for (let x of arr) {
    total += Math.min(mid, x);
  }

  if (total <= m) {
    result = mid; // mid까지는 가능하므로 기록
    start = mid + 1; // 상한액 더 올려봄
  } else {
    end = mid - 1; // total이 너무 크므로 줄임
  }
}

console.log(result);
```

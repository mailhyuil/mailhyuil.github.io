# 확률 & 통계 jstat

## install

```sh
npm i jstat
```

## usage

```js
// 데이터 배열 생성
const data = [5, 10, 8, 12, 6];

// 평균 계산
const mean = jStat.mean(data);
console.log("평균:", mean);

// 표준편차 계산
const stdDev = jStat.stdev(data);
console.log("표준편차:", stdDev);

// 최소값 계산
const min = jStat.min(data);
console.log("최소값:", min);

// 최대값 계산
const max = jStat.max(data);
console.log("최대값:", max);
```

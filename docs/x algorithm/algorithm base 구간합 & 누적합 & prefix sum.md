# algorithm base 구간합 (누적합) (prefix sum)

- 특정 구간의 모든 값을 합한 값을 구하는 알고리즘
- 배열의 맨 앞부터 특정 위치까지의 합을 "미리 구해 놓은 테이블"을 사용
- `접두사테이블[right] - 접두사테이블[left - 1]`로 **구간합(누적합)**을 구할 수 있다.

```txt
접두사테이블:
prefixSum[i] = prefixSum[i - 1] + data[i]

구간합:
prefixSum[right] - prefixSum[left - 1]

누적합:
prefixSum[i]
```

## example

```js
// 데이터의 개수 N과 데이터 입력받기
let n = 8;
let data = [3, 2, 4, 1, 2, 2, 1, 5];

// 구간합(Prefix Sum) 테이블 계산
let sumValue = 0;
let prefixSum = [0]; // 0번째 인덱스는 0으로 초기화
for (let i of data) {
  sumValue += i;
  prefixSum.push(sumValue);
}

// 구간합 계산(네 번째 수부터 여덟 번째 수까지)
let left = 4;
let right = 8;
console.log(prefixSum[right] - prefixSum[left - 1]);
```

# algorithm base off-by-one error

인덱스/경계 한 칸 차이로 발생하는 에러 (값이 1정도 차이나는 경우)

## 해결

1. 범위는 [start, end) 로 생각하자. (end는 항상 제외)

2. 배열 길이 n이면 마지막 인덱스는 n-1.

3. 슬라이스/substring API는 포함/제외 규칙 다를 수 있으니 문서 확인.

4. 이진 탐색은 경계 포인터(lt/rt)와 루프 조건(<= vs <)이 관건.

5. 가능한 경우 고수준 API(예: for..of, slice, map, filter) 쓰면 실수 줄어듦.

## best practice

```js
// 0-based index
// 입력값이 0부터 n-1일 때
// 0부터 시작, < n 까지
for (let i = 0; i < n; i++) { ... }
for (let i = 0; i < arr.length; i++) { ... }


// prefix sum: 누적합
// left - 1 해주기
prefix[0] = 0
prefix[right] - prefix[left - 1] // [left, right] 의 구간합

// 이분탐색
while (left <= right){}

// 1-based index
// 입력의 인덱스가 1~N일 때
// let i = 1; i <= N; i++ // 1부터 시작해서 <= N
for (let i = 1; i <= N; i++) {
  // i: 1,2,...,N
}

// 1-based index: DP 테이블 인덱스 (시작 위치)
// + 1 해주기
const dp = Array(N + 1).fill(0);
const dp = Array.from({ length: N + 1 }, () => Array(M + 1).fill(0));

// 슬라이딩 윈도우
// left, right 둘 다 "포함"인 구간일 때
const len = right - left + 1;

// 배열 중간 인덱스 추가 / 삭제
arr.splice(index, 1); // 중간 인덱스 값 삭제
arr.splice(index, 0, value); // 중간 인덱스에 값 추가
```

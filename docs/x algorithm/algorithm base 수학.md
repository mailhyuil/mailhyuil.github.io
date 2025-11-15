# algorithm base 수학

## 수열(Sequence) / Σ 시그마(sum) 기호 읽기

배열 p에서 모든 값을 더해라라는 뜻

```txt
p1 + p2 + p3 + ... + pN = Σ pi
```

```js
let sum = 0;
for (let i = 0; i < N; i++) sum += p[i];
```

## 나머지 연산(Modular Arithmetic)

```txt
(a + b) % m = (a % m + b % m) % m
(a × b) % m = (a % m × b % m) % m
```

## 조합/순열

완전탐색 시간 판별용

```txt
nC2 = n(n-1)/2
nC3 = n(n-1)(n-2)/6
```

## 등차수열/등비수열

1~N 합, 구간합, 반복 패턴 계산

```txt
1 + 2 + … + N = N(N+1)/2

sum(l~r) = H[r] - H[l-1]
```

## 최대공약수 GCD / 최소공배수 LCM

정렬 문제, 비율 문제, 분수 문제

```js
function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}
```

## 기하학(Geometry)

```txt
dist = √((x1 - x2)² + (y1 - y2)²)

원: dist <= r
직사각형: x범위, y범위 체크
```

## 비트 연산

브루트포스, DP, 마스킹 문제

```txt
mask & (1 << i)    // i번째 비트가 켜졌는지 검사
mask | (1 << i)    // i번째 비트 켜기
mask ^ (1 << i)    // i번째 비트 토글
```

## 정수 범위, 오버플로우 감각

JS는 number가 2^53-1까지 가능  
보통 long long(64bit) 기준으로 생각

## 확률

```txt
확률 = 성공하는 경우의 수 / 전체 경우의 수
```

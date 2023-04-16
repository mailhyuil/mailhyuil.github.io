# 재귀

> 모든 루프문을 이용한 로직은 재귀로 만들 수 있다.
>
> > 모든 재귀문은 루프문으로 만들 수 있다.
> >
> > > 재귀문을 사용하면 코드가 더 간결해진다.
> > >
> > > > 스택이 계속 쌓이기 때문에 스택오버플로우가 일어날 수 있다.

## 구조

1. base case : 탈출 조건
2. recursive case : 남아있는 문제 해결

## TCO (Tail Call optimization)

> 재귀함수를 사용시 스택이 계속 쌓이는 문제를 해결
>
> > 아직 모든 브라우저에서 지원하지는 않는다..

## 피보나치

> n = n-1 + n-2

```js
function fibonacci(num) {
  if (num <= 1) return 1; // 탈출 조건!
  return fibonacci(num - 1) + fibonacci(num - 2); // 전의 값과 전전의 값을 더한 값 반환
}

// 예시: 처음 10개의 피보나치 수열을 출력합니다.
for (let i = 0; i < 10; i++) {
  console.log(fibonacci(i));
}
```

## 팩토리얼

```js
function factorial(num) {
  if (num === 0 || num === 1) return 1; // 탈출 조건!
  return num * factorial(num - 1); // num-1 팩토리얼을 곱하기
}

// 예시: 5!를 계산합니다.
console.log(factorial(5)); // 출력 결과: 120
```

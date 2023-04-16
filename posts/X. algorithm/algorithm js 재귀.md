# 재귀

> 모든 루프문을 이용한 로직은 재귀로 만들 수 있다.
>
> > 모든 재귀문은 루프문으로 만들 수 있다.
> >
> > > 재귀문을 사용하면 코드가 더 간결해진다.
> > >
> > > > 스택이 계속 쌓이기 때문에 스택오버플로우가 일어날 수 있다.

## 재귀와 수학적 귀납법

> 어떤 문제를 재귀로 푼다는 것은 곧 귀납적인 방식으로 문제를 해결 하는 것이다.
>
> > 수학적 귀납법을 이용해 정확성을 증명해야한다.

```
1. p(1) 이 참이다 // base case
2. p(n) 이 참이면 p(n+1)도 참이다 // recursive case
3. 1과 2를 모두 만족하면, 모든 자연수 n은 참이다.
```

```
1번이 쓰러지면 2번이 쓰러지고, 2번이 쓰러지면 3번이 쓰러지고 ...
이렇게 계속 진행되기 때문에 모든 도미노가 쓰러진다고 할 수 있다.

/*귀납적 사고*/
1. 1번이 쓰러진다 (1) // base case
2. k번이 쓰러지면 k+1번도 쓰러진다
3. 1과 2가 참이기 때문에 모든 도미노는 쓰러진다.
```

## 구조

1. base case : 탈출 조건
2. recursive case : 남아있는 문제 해결

```
function recursive(n){
    if(n===0) return; // base case
    /* add logic */
    recursive(n-1); // recursive case
}
```

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

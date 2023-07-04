# 재귀

> 모든 루프문을 이용한 로직은 재귀로 만들 수 있다.
>
> > 재귀문을 사용하면 코드가 더 간결해진다.
> >
> > > 스택이 계속 쌓이기 때문에 스택오버플로우가 일어날 수 있다.
> > >
> > > > 이미 해결한 문제를 또 해결해야 한다. => 동적 계획법으로 해결

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

## 팩토리얼

> 시간복잡도 O(N)

```js
function factorial(num) {
  if (num === 0 || num === 1) return 1; // 탈출 조건!
  return num * factorial(num - 1); // num-1 팩토리얼을 곱하기
}

// 예시: 5!를 계산합니다.
console.log(factorial(5)); // 출력 결과: 120
```

## 피보나치

> 시간복잡도 O(2^N) (재귀함수의 나쁜 예)
>
> > 피보나치를 재귀함수로 푼다면.. 계산한 값을 또 계산하는 일이 빈번하게 일어난다. (return fibonacci(num - 1) + fibonacci(num - 2);)
> >
> > > 한 함수가 자기 자신을 여러번 호출할 경우에는 시간 복잡도가 매우 커져버릴 수 있다는 점을 조심

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

## 조합

> 순서를 생각하지 않고 배열 (경우의 수)
>
> > 시간복잡도 O(2^N) (재귀함수의 나쁜 예)

```js
function getCombinations(arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((value) => [value]); // 1개씩 택할 때, 바로 모든 배열의 원소 return

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1); // 해당하는 fixed를 제외한 나머지 뒤
    const combinations = getCombinations(rest, selectNumber - 1); // 나머지에 대해서 조합을 구한다.
    const attached = combinations.map((combination) => [fixed, ...combination]); //  돌아온 조합에 떼 놓은(fixed) 값 붙이기
    results.push(...attached); // 배열 spread syntax 로 모두다 push
  });

  return results; // 결과 담긴 results return
}
```

## 순열

> 순서를 생각하여 배열한 것 (경우의 수)
>
> > 시간복잡도 O(N!) (재귀함수의 나쁜 예)

```js
function permutation(arr, selectNum) {
  const result = [];
  if (selectNum === 1) return arr.map((v) => [v]);

  arr.forEach((v, idx, arr) => {
    const fixer = v;
    const restArr = arr.filter((_, index) => index !== idx);
    const permuationArr = permutation(restArr, selectNum - 1);
    const combineFixer = permuationArr.map((v) => [fixer, ...v]);
    result.push(...combineFixer);
  });
  return result;
}
```

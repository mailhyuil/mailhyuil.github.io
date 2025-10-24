# algorithm 재귀

> 모든 루프문을 이용한 로직은 재귀로 만들 수 있다.
>
> > 재귀문을 사용하면 코드가 더 간결해진다.
> >
> > > 스택이 계속 쌓이기 때문에 스택오버플로우가 일어날 수 있다.
> > >
> > > > 이미 해결한 문제를 또 해결해야 한다. => 동적 계획법으로 해결

## divide conquer and combine

1. 탈출조건에 가까워지도록 divide
2. 탈출조건에 닿으면 conquer된 상태이다.
3. combine 로직을 통해 남아있는 문제 해결

```js
function recur(){
  if () return '' // conquer된 상태

  // divide 로직

  const res = recur()

  // combine 로직

  return res
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

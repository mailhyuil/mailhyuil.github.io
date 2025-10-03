# js Generator

> Iterator를 생성하는 함수
>
> Generator는 Generator 함수를 실행 했을 때 반환되는 객체로, well-formed Iterable로 평가된다.
>
> > 리턴된 함수 속으로 다시 들어갈 수 있다. (yield)

## Generator 함수

```js
function* generatorFn() {
  console.log("1번 실행");
  yield 1; // return과 비슷함
  console.log("2번 실행");
  yield 2;
  console.log("3번 실행");
  yield 3;
}
```

## Generator 객체

```js
const iter = generatorFn();

iter.next(); // 1번 실행

for (num of iter) {
  // ...
} // 2번 실행, 3번 실행
```

## yield\*

> yield 키워드 뒤에 \*를 붙이면 또 다른 generator(iterator)를 이어서 yield 시킬 수 있게 된다.
>
> > 이를 통해 중첩된 Generator 구조를 만들 수 있다.

```js
// generator 함수는 generator 객체를 반환한다. (generator 객체는 "iterator" 객체이다.)
function* generatorFn() {
  const iterator = nestedGeneratorFn();
  yield 0;
  // yield* 키워드를 사용하여 다른 generator 함수를 이어서 호출할 수 있다.
  yield* iterator;
}

function* nestedGeneratorFn() {
  yield 1;
  yield 2;
}

const gen = generatorFn();

console.log(gen.next()); // { value: 0, done: false }
console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: undefined, done: true }
console.log(gen.next()); // { value: undefined, done: true }
console.log(gen.next()); // { value: undefined, done: true }
// ...
```

## generator의 사용

1. 루프를 멈추기 (지연평가)
2. 함수(코드)의 흐름을 멈췄다가 다시 진행
3. 제너레이터 컴포지션
4. 메모리 사용량 절약
5. 여러 비동기 코드를 한번에 실행 시

```js
function* getData() {
  try {
    const data1 = yield fetch("https://api.example.com/data1");
    const data2 = yield fetch(`https://api.example.com/data2/${data1.id}`);
    const data3 = yield fetch(`https://api.example.com/data3/${data2.id}`);
    return { data1, data2, data3 };
  } catch (error) {
    console.error(error);
  }
}

function runGenerator(generator) {
  const iterator = generator();
  const handleResult = result => {
    if (result.done) return result.value;
    return Promise.resolve(result.value)
      .then(res => handleResult(iterator.next(res)))
      .catch(err => iterator.throw(err));
  };
  return handleResult(iterator.next());
}

runGenerator(getData).then(data => console.log(data));
```

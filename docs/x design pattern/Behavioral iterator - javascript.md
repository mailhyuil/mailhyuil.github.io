# iterator

```ts
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

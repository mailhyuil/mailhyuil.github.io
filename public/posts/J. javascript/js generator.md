# Generator

> Generator는 Generator 함수를 실행 했을 때 반환되는 객체로, well-formed Iterable로 평가된다.

## Generator 함수

```
function* someGeneratorFunction() {
  console.log('1번 실행')
  yield 1 // return과 비슷함
  console.log('2번 실행')
  yield 2
  console.log('3번 실행')
  yield 3
}
```

## Generator 객체

```
const iter = someGeneratorFunction()

iter.next() // 1번 실행

for (num of iter) {
      ...
  } // 2번 실행, 3번 실행
```

## yield\*

> yield 키워드 뒤에 \*를 붙이면 또 다른 Iterator를 yield 시킬 수 있게 된다. 이를 통해 중첩된 Generator 구조를 만들 수 있다.

```
function* someGeneratorFunction() {
  const iter = otherGeneratorFunction()
  yield 0
  yield* iter
}

function* otherGeneratorFunction() {
  yield 1
  yield 2
}

const gen = someGeneratorFunction()
gen.next() // { value: 0, done: false }
gen.next() // { value: 1, done: false }
gen.next() // { value: 2, done: false }
gen.next() // { value: undefined, done: true }
```

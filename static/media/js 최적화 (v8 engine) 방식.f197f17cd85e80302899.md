# js v8 최적화

> 정적타입의 언어는 native 코드로 컴파일 할 수 있다. (AOT)
>
> > 하지만 js는 동적타입(런타임 중 타입이 결정)이기 때문에 런타임 중 정적타입으로 추론되는 코드를 최적화 후 JIT로 native 코드로 컴파일
> >
> > (java 언어는 정적타입이지만 플랫폼 독립성, reflect 코드 등의 이유로 JIT 컴파일러를 사용한다.)
> >
> > > v8 엔진은 Hot Code(자주 실행되는 코드)를 구별하여 최적화를 진행한다.
> > >
> > > ignition이 hot code를 찾고 turbofan이 최적화를 진행한다.

## Hidden Class (Shape, Map) & Inline Caching (IC)

> js의 오브젝트는 해시맵 기반으로 메모리에 저장된다.
>
> 이는 동적으로 속성을 추가할 수 있지만, 속성 접근 속도가 느리다.
>
> v8은 객체의 구조를 기억해두고 빠르게 접근하기 위해 사용하는 최적화
>
> (객체 속성 접근 속도 향상)
>
> > 객체의 속성 접근이나 메서드 호출의 성능을 향상시키기 위한 최적화
> >
> > > 객체에 대한 속성 접근이나 메서드 호출이 처음 이루어질 때, 그 결과를 캐싱
> > >
> > > > 같은 타입의 다른 객체에 대해 동일한 접근이 이루어지면, 엔진은 캐시된 결과를 사용하여 빠르게 응답
> > > >
> > > > > Hidden Class가 같으면 → Inline Cache 재사용 가능함

```js
// Hidden Class 생성
function findArea(shape) {
  return shape.width * shape.height;
}

let rectangle1 = { width: 10, height: 5 };
let rectangle2 = { width: 5, height: 3 };

console.log(findArea(rectangle1));
// 엔진은 rectangle2가 rectangle1과 같은 히든 클래스(즉, 같은 속성 레이아웃)를 가진다는 것을 감지하고,
// 첫 번째 호출에서 캐싱된 결과를 사용해 빠르게 계산을 수행합니다.
console.log(findArea(rectangle2));
```

## Function Inlining

> 함수 호출의 오버헤드를 줄이기 위해 사용하는 최적화
>
> 함수 호출 비용 제거
>
> > 함수 호출을 함수의 본문으로 직접 대체
> >
> > > 적용 여부는 v8엔진이 판단한다. (작고, 자주 호출되는 함수에 대해 적용) (hot code)
> > >
> > > 함수에 try/catch를 사용하면 인라이닝이 되지 않는다.

```js
function add(a, b) {
  return a + b;
}

function main() {
  let result = add(5, 3);
  console.log(result);
}

/* result
 *
 * function main() {
 *   let a = 5;
 *   let b = 3;
 *   let result = a + b;  // 인라이닝된 add 함수의 본문
 *   console.log(result);
 * }
 */
```

## Type Feedback

> 타입의 정보를 수집해서 최적화하는 방법

```ts
function add(a, b) {
  return a + b;
}
add(1, 2); // → number + number → JIT 최적화
```

## Escape Analysis

> 객체가 함수 바깥에서 안 쓰이면 → heap에 안 넣고 stack에 저장!
>
> > 버릴 수 있는 객체는 최대한 버려라 (어딘가에 저장하지 말아라)

```js
function makePoint(x, y) {
  return { x, y };
}
// good
const point = makePoint(1, 2);
// 사용 후 버림

// bad
point = makePoint(3, 4);
// 계속 어딘가에 저장됨
```

## Constant Folding

> 계산이 고정되어 있으면 → JIT 컴파일 시점에 미리 계산

```js
const x = 2 * 5; // → 10으로 고정됨
```

## Dead Code Elimination

> 절대 실행되지 않는 코드는 → 제거

```js
if (false) {
  doSomething(); // 💀 제거됨
}
```

## Loop Unrolling

> 루프를 미리 풀어헤쳐서 루프 비용 줄이기

```js
// 원래
for (let i = 0; i < 4; i++) {
  arr[i] = 0;
}

// 변경
arr[0] = 0;
arr[1] = 0;
arr[2] = 0;
arr[3] = 0;
```

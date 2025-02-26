# js v8 최적화

## Inlining (인라이닝)

> 함수 호출의 오버헤드를 줄이기 위해 사용하는 최적화
>
> > 함수 호출을 함수의 본문으로 직접 대체
> >
> > > 적용 여부는 v8엔진이 판단한다. (작고, 자주 호출되는 함수에 대해 적용)

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

## Hidden Classes (히든 클래스)

> 객체의 속성에 빠르게 접근하기 위해 사용하는 최적화
>
> > 히든 클래스는 객체의 속성이 추가되거나 변경될 때마다 내부적으로 생성되는 구조체
> >
> > > 객체의 현재 속성 레이아웃을 나타내며, 같은 속성 레이아웃을 가진 다른 객체와 재사용

```js
function Point(x, y) {
  this.x = x;
  this.y = y;
}
// 같은 생성자를 사용하면 같은 히든 클래스를 공유한다.
var p1 = new Point(1, 2);
var p2 = new Point(3, 4);
```

```js
p1.color = "red"; // 히든 클래스를 새로운 버전으로 업데이트
var p3 = new Point(5, 6);
p3.color = "blue"; // 업데이트된 히든 클래스를 재사용
```

## Inline Caching (인라인 캐싱)

> 객체의 속성 접근이나 메서드 호출의 성능을 향상시키기 위한 최적화
>
> > 객체에 대한 속성 접근이나 메서드 호출이 처음 이루어질 때, 그 결과를 캐싱
> >
> > > 같은 타입의 다른 객체에 대해 동일한 접근이 이루어지면, 엔진은 캐시된 결과를 사용하여 빠르게 응답

```js
function findArea(shape) {
  return shape.width * shape.height;
}

let rectangle1 = { width: 10, height: 5 };
let rectangle2 = { width: 5, height: 3 };

console.log(findArea(rectangle1)); // 첫 번째 호출
// 엔진은 rectangle2가 rectangle1과 같은 히든 클래스(즉, 같은 속성 레이아웃)를 가진다는 것을 감지하고, 첫 번째 호출에서 캐싱된 결과를 사용해 빠르게 계산을 수행합니다.
console.log(findArea(rectangle2)); // 두 번째 호출
```

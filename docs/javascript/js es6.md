# js es6

## map

```js
array.map((e) => {
  console.log(e);
});
```

## reduce

> 그 전에 리턴된 값, 현재값이 중요
>
> > 리턴된 값 + 현재값을 리턴 시키면 누적값을 구할 수 있다.

```js
array.reduce((그 전에 리턴된 값, 현잿값, 인덱스, array) => {…}, 초깃값);

const arr = [1, 2, 3, 4, 5, 6];

arr.reduce((a, b, c, d) => {
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(d);
});
/* result
1 // 그 전에 리턴된 값
2 // 현잿값
1 // 인덱스
[ 1, 2, 3, 4, 5, 6 ] // arr
undefined
3
2
[ 1, 2, 3, 4, 5, 6 ]
undefined
4
3
[ 1, 2, 3, 4, 5, 6 ]
undefined
5
4
[ 1, 2, 3, 4, 5, 6 ]
undefined
6
5
[ 1, 2, 3, 4, 5, 6 ]
*/
```

## filter

```js
array.filter((e) => {
  return e > 0;
});
```

## sort

> 기본으로 문자열로 정렬
>
> > 콜백으로 빼서 리턴하면 숫자 정렬 양수인지 음수인지 확인해서 순서를 정렬
> >
> > > 배열 자체가 변경됨!

```js
arr.sort((a, b) => {
  return a - b;
});
```

## destructuring 할당

```js
const [data, setData] = useState();
const [a, b] = [1, 2];
const { a, b } = {
  a: 10,
  b: 20,
};
```

## spread 문법

```js
const newArr = [...array];
[a, ...aray];
```

## import & export

```js
export { a, b, c };
export default a;

import { a, b, c } from "./path";
import a from "./path";
```

## 옵셔널 체이닝 ?.

```js
var user = {
  name: "kim",
  // age: {value:20}
};
console.log(user.age?.value); // 평가 대상이 undefined나 null이면 평가를 멈추고 undefined를 반환
```

## Nullish coalescing ??

```js
var user;

console.log(user ?? "대체 값"); // 왼쪽 값이 undefined나 null이면 오른쪽 값을 반환

const a = false || 4; // 왼쪽 값이 falsy면 오른쪽 값을 반환
/** falsy 값
  false
  null
  undefined
  0
  -0
  0n
  NaN
  ""
 */
```

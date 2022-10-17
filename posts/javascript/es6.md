# es6 문법

## map
```js
array.map((e)=>{
    console.log(e)
})
```
## reduce
```js
array.reduce((누적값, 현잿값, 인덱스, 요소) => {…}, 초깃값);
```
## filter
```js
array.filter((e)=>{
    return e > 0;
})
```
## destructuring 할당
```js
const [data, setData] = useState();
const [a,b] = [1,2];
const {a,b} = {
    a:10, 
    b:20
    };
```
## spread 문법
```js
const newArr = [...array];
[a, ...aray]
```

## import & export
```js
export {a, b, c};
export default a;

import {a, b, c} from './path';
import a from './path';
```

## 옵셔널 체이닝 ?.
```js
var user = {
    name: 'kim',
    // age: {value:20}
}
console.log(user.age?.value) // 평가 대상이 undefined나 null이면 평가를 멈추고 undefined를 반환


```
## Nullish coalescing ??
```js
var user

console.log(user ?? '대체 값') // 왼쪽 값이 undefined나 null이면 오른쪽 값을 반환

const a = false || 4 // 왼쪽 값이 falsy면 오른쪽 값을 반환
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
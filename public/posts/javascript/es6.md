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
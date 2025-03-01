# js 진수변환

> num.toString(진수)로 number를 변환 가능
>
> > parseInt(str, 진수)로 string을 변환 가능

```js
const num = 100;

const binary = num.toString(2);
console.log(binary); // 1100100

const decimal = parseInt(binary, 2);
console.log(decimal); // 100
```

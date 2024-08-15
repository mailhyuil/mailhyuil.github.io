# js == vs ===

## == (Equal Operator 동등 연산자)

> 값이 같은지 비교
>
> > 여기서 말하는 값이란, 데이터 타입이 아닌 값 자체를 의미

```js
1 == "1"; // true
0 == false; // true
1 == true; // true
"" == 0; // true
"" == false; // true
null == undefined; // true
```

## === (Strict Equal Operator 일치 연산자)

> 값과 데이터 타입이 전부 같은지 비교

```js
1 === "1"; // false

0 === false; // false
1 === true; // false
"" === 0; // false
"" === false; // false

null === undefined; // false
```

## object, array 비교

> 메모리 주소를 비교하기 때문에 어떤 연산자를 사용하더라도 같은 메모리 주소를 가리키는 경우에만 true를 반환

```js
const obj1 = { a: 1 };
const obj2 = { a: 1 };
obj1 == obj2; // false
obj1 === obj2; // false

const obj3 = obj1;
obj1 == obj3; // true
obj1 === obj3; // true
```

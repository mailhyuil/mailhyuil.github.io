# js == vs ===

## == (Equal Operator 동등 연산자, 형변환 연산자)

> 타입이 다르다면 자동으로 형변환을 해서 비교
>
> > 형변환으로 인해서 예상치 못한 결과가 나올 수 있음
> >
> > > 따라서 반드시 null, undefined에 대해서만 사용하는 것이 좋음

```js
1 == "1"; // true
0 == false; // true
1 == true; // true
"" == 0; // true
"" == false; // true

// 이때만 사용하자
null == undefined; // true
```

## === (Strict Equal Operator 일치 연산자)

> 형변환 하지 않고 그냥 비교
>
> > 즉 타입까지 같아야 true를 반환

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

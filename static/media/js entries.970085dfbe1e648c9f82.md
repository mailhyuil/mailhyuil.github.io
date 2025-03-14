# js entries

> 열거 가능한 문자속성 [key, value] 쌍의 배열
>
> > for...of나 forEach()와 같은 반복문을 사용하여 객체의 모든 키-값 쌍을 쉽게 순회 가능
> >
> > > 배열로 다룰 수 있음

## ts.config.json

> dom.iterable 추가

```js
"lib": ["dom.iterable"],
```

```js
const obj = {
  a: "somestring",
  b: 42,
};

for (const [key, value] of Object.entries(obj)) {
  console.log(`${key}: ${value}`);
}
```

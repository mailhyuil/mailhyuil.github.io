# null vs undefined

> null은 값이 없다는 뜻
>
> undefined는 프로퍼티가 없다는 뜻
>
> > object의 property의 값이 undefined면 그 프로퍼티는 없어진다.
> >
> > object의 property의 값이 null이면 프로퍼티는 존재하고 값이 null이 된다.
> >
> > > undefined는 typeof로 걸러낼 수 있기 때문에 추천된다.

```js
// undefined인지 체크
if (typeof x === "undefined") {
}
if (x === undefined) {
}

// null인지 체크
if (x === null) {
}

// undefined인지 null인지 체크
if (x == null) {
}
if (x == undefined) {
}
```

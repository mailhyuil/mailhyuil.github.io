# null vs undefined

> null은 값이 없다는 뜻
>
> undefined는 프로퍼티가 없다는 뜻
>
> > object의 property의 값이 undefined면 그 프로퍼티는 없어진다.
> >
> > object의 property의 값이 null이면 프로퍼티는 존재하고 값이 null이 된다.
> >
> > > optional값으로 undefined를 사용하는 이유
> > >
> > > undefined는 type 자체가 undefined이기 때문에 typeof로 걸러낼 수 있다. (null은 object type)
> > >
> > > undefined는 typescript에서 optional operator로 쉽게 선언할 수 있다. (null은 타입과 값을 직접 할당해줘야한다.)
> > >
> > > undefined는 매개변수 fallback pattern으로 넣을 수 있다. (null을 넣으면 fallback 값이 작동하지 않는다.)

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

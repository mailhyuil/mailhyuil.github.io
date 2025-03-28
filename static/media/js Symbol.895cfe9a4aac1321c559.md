# Symbol

> ES6에 추가된 변경 불가능한 원시 타입
>
> > Hidden Property를 만들기 위해 사용
> >
> > > 객체가 1이라는 id값을 가지고 있을 때 이 객체가 다른 코드베이스에 섞이면서 1이라는 값에 접근하여 객체가 변경된다던가 삭제되는 문제를 야기할 수 있다.
> > >
> > > 하지만 Symbol(1)이라는 키로 만들어 놓으면 Symbol(1)이라는 값에 접근하는 일은 없으므로 안전한다.
> > >
> > > > 일종의 안전장치

```txt
What’s the benefit of using Symbol("id") over a string "id"?

As user objects belong to another codebase, it’s unsafe to add fields to them, since we might affect pre-defined behavior in that other codebase. However, symbols cannot be accessed accidentally. The third-party code won’t be aware of newly defined symbols, so it’s safe to add symbols to the user objects.

Also, imagine that another script wants to have its own identifier inside user, for its own purposes.
```

```js
const ord: symbol = Symbol("orderID");
const myOrder = {
  ord: "123",
};
console.log(myOrder["ord"]);
```

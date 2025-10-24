# js Symbol.for

> Symbol()로 symbol을 생성하면 항상 다른 값의 symbol이 생성된다
>
> > Symbol.for()를 사용 시 전역 Symbol 레지스트리에서 Symbol을 가져오거나 없으면 생성한다.

```js
const s1 = Symbol("id");
const s2 = Symbol("id");

console.log(s1 === s2); // false

const s1 = Symbol.for("id");
const s2 = Symbol.for("id");

console.log(s1 === s2); // true
```

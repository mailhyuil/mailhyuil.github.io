# js defineProperty vs prototype

> prototype을 수정하면 이 생성자로 생성된 모든 인스턴스에 적용됨.
>
> > defineProperty는 flags를 수정할 수 있음
> >
> > > 그냥 prototype에 추가하면 자동으로 모든 flags가 true로 설정됨
> > >
> > > > 모두 true로 할꺼면 뭘사용하든 상관없음

```js
class Obj {}

const obj = new Obj();

Object.defineProperty(Obj.prototype, "name", {
  value: "hyuil",
  writable: true,
  enumerable: true,
  configurable: true,
});
// same as
// Obj.prototype.name = "hyuil";

console.log(obj.name); // hyuil
obj.name = "hyuil2";
console.log(obj.name); // hyuil2
```

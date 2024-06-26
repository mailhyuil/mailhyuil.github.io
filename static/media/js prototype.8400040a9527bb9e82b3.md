# js prototype

> prototype에 등록이 되어있어야 instanceof로 식별할 수 있다.

```js
// [[Prototype]]이 proto인 Object를 만든다.
Object.create(proto, [description]);
// obj의 [[Prototype]]을 반환한다.
Object.getPrototypeOf(obj);
// obj의 [[Prototype]]을 proto로 설정한다.
Object.setPrototypeOf(obj, proto);
```

## prototype에 등록

```ts
class FooError extends Error {
  constructor(msg: string) {
    super(msg);

    // Set the prototype explicitly.
    Object.setPrototypeOf(this, FooError.prototype);
  }

  sayHello() {
    return "hello " + this.message;
  }
}
```

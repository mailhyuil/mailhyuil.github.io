# js prototype

> 모든 객체는 [[Prototype]]이라는 내부 슬롯을 가지고 있다.
>
> 이 [[Prototype]]은 객체가 생성될 때 설정되며, 객체의 상위 객체를 가리킨다.
>
> > prototype chain의 끝에는 Object.prototype이 있다.
> >
> > > prototype은 메모리 절약, 성능 최적화(v8 최적화), 상속, 다형성 등의 장점이 있다.
> > >
> > > > prototype에 등록이 되어있어야 instanceof로 식별할 수 있다.

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

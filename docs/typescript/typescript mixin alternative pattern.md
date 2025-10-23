# typescript mixin alternative pattern

> 순수 es6로 mixin을 구현하는 방법
>
> > typescript 컴파일러에 의존하지 않는다.

## 구현

```js
// This can live anywhere in your codebase:
function applyMixins(derivedCtor: any, constructors: any[]) {
  constructors.forEach((baseCtor) => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
      Object.defineProperty(derivedCtor.prototype, name, Object.getOwnPropertyDescriptor(baseCtor.prototype, name) || Object.create(null));
    });
  });
}
```

```js
class Flyable {
  fly: () {};
}>;
class Quackable {
  quack: () {};
}

interface Base extends Flyable, Quackable {}

class Base {
  name = "hyuil";
}

applyMixins(Base, [Flyable, Quackable]);

let base = new Base();
base.fly();
base.quack();
```

# typescript mixin

> mixin은 다중 상속을 구현한다.
>
> > mixin은 included, 상속은 inherit이라고 표현한다.

```ts
const MixedClass = Mixin1(Mixin2(Mixin3()));
class Base extends MixedClass {}
```

## 구현1

```js
// Now we use a generic version which can apply a constraint on
// the class which this mixin is applied to
type Constructor<T> = new (...args: any[]) => T;
type Loggable = Constructor<{
  log: (message: string) => void;
}>;

export function LogMixin<T extends Loggable>(Base: T) {
  return class extends Base {
    constructor(...args: any[]) {
      super(...args);
    }
    log(message: string) {
      console.log(message);
    }
  };
}

export class Some extends LogMixin() {
  constructor() {
    super();
    this.log("hello");
  }
}
```

## 구현2

```js
class Dog {
  constructor(name) {
    this.name = name;
  }
}

const dogFunctionality = {
  bark: () => console.log("Woof!"),
  wagTail: () => console.log("Wagging my tail!"),
  play: () => console.log("Playing!"),
};

Object.assign(Dog.prototype, dogFunctionality);

const pet1 = new Dog("Daisy");

pet1.name; // Daisy
pet1.bark(); // Woof!
pet1.play(); // Playing!
```

# typescript inner class

```ts
class Foo {
  static Bar = class {};
}

// works!
var foo = new Foo();
var bar = new Foo.Bar();
```

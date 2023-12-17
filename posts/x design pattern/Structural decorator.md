# decorator

> 객체의 결합을 통해 기능을 동적으로 유연하게 확장시키는 것

```ts
class Obj {
  private arr: string[];
  constructor() {
    this.arr = ['a'];
  }

  getSome() {
    return this.arr;
  }
}

class Decorator {
  private values: string[];
  constructor(private baseObj: Obj) {
    this.baseObj = baseObj;
    this.values = ['b'];
  }
  getSome() {
    return [...this.baseObj.getSome(), ...this.values];
  }
}

const o = new Obj();
const d = new Decorator(o);
console.log(d.getSome());
```

# js 데코레이터 패턴

> 깔끔히 기능 늘리기

```ts
class Obj {
  private arr: string[];
  constructor() {
    this.arr = ["a"];
  }

  getSome() {
    return this.arr;
  }
}

class Decorator {
  private values: string[];
  constructor(private baseObj: Obj) {
    this.baseObj = baseObj;
    this.values = ["b"];
  }
  getSome() {
    return [...this.baseObj.getSome(), ...this.values];
  }
}

const o = new Obj();
const d = new Decorator(o);
console.log(d.getSome());
```

## 함수형에서는 pipe로 구현

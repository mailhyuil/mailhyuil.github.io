# js 데코레이터 패턴

> 깔끔히 기능 늘리기

```js
class Obj {
  constructor() {
    this.values = ["a"];
  }
  getObj() {
    return this.values;
  }
}

class Decorator {
  constructor(baseObj) {
    this.baseObj = baseObj;
    this.values = ["b"];
  }
  getObj() {
    return [...this.baseObj.getObj, ...this.values];
  }
}

const obj = new Obj();
const deco = new Deco(obj);
```

## 함수형에서는 pipe로 구현

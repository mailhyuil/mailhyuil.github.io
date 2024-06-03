# typescript static method

> typescript 는 static 클래스가 없다
>
> > 내부 변수를 사용하지 않으면 static으로 생성해라
> >
> > > utility methods 에 많이 사용됨 (e.g. validates)
> > >
> > > > namespace나 module로 대체 가능 (new class 생성을 막기 위해)

```ts
class Obj {
  static do() {
    console.log("something");
  }
}
Obj.do();

// namespace로 대체
namespace Obj {
  export function do() {
    console.log("something");
  }
}

// module로 대체
module Obj {
  export function do() {
    console.log("something");
  }
}
```

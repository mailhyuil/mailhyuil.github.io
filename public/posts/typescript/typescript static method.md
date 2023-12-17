# typescript static method

> typescript 는 static 클래스가 없다
>
> > 내부 변수를 사용하지 않으면 static으로 생성해라
>
> > > utility methods 에 많이 사용됨 (e.g. validates)

```ts
class Obj {
  static do() {
    console.log("something");
  }
}
Obj.do();
```

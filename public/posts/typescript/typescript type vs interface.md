# type & interface

> type 사용을 우선시해라
>
> > interface는 객체만 타이핑할 수 있지만
> >
> > > type은 객체, 유니온, 제네릭 등 다양한 타입을 타이핑할 수 있다.

## type

```ts
type SomeType = {
  name: string;
  age: number;
};

type SomeOtherType = SomeType & {
  school: string;
};

// computed type
type names = "firstName" | "lastName";

type NameTypes = {
  [key in names]: string;
};

const yc: NameTypes = { firstName: "hi", lastName: "yc" };
```

## interface 선언 병합

> 같은 이름으로 선언된 interface는 병합된다.

```ts
// window 객체의 interface를 확장
interface Window {
  title: string;
}

window.title = "hi";
```

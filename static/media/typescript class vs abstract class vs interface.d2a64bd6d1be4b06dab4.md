# class vs abstract class vs interface

> typescript는 interface 뿐만 아니라 class, abstract class도 implements할 수 있다. 이렇게 사용하면 interface와 똑같이 동작한다.

## class

> extends 가능
>
> > implements 가능 (interface로 동작)
> >
> > > 객체화 가능
> > >
> > > > 미구현 불가

## abstract class

> extends 가능
>
> > implements 가능 (interface로 동작)
> >
> > > 객체화 불가능
> > >
> > > > 미구현 가능 (abstract 키워드)

## interface

> extends 가능
>
> > implements 가능
> >
> > > 객체화 불가능
> > >
> > > > 미구현 가능

```ts
class Control {
  private state: any;
}

interface SelectableControl extends Control {
  select(): void;
}

class Button extends Control implements SelectableControl {
  select() {}
}

class TextBox extends Control {
  select() {}
}

// Error: Property 'state' is missing in type 'Image'.
// class를 interface가 extends했다면 class의 private, protected 필드는 그 인터페이스의 구현체에서만 구현이 가능하다.
// private, protected를 상속받은건 interface이기 때문
class Image implements SelectableControl {
  private state: any;
  select() {}
}

class Location {}
```

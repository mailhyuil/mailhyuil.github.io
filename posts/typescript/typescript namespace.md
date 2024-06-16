# typescript namespace

> namespace = module (이전에 module keyword로 사용되었으나 혼동의 여지가 있어 namespace로 변경됨)
>
> encapsulate your code within a scope
>
> > global scope와 분리하기 위한 방법
> >
> > > class를 사용해도 되지만 namespace는 더 단순하다. 대신 OOP의 특성을 사용할 수 없다.
> > >
> > > > e.g. nestjs에서 AuthUtils같은 서비스는 Injectable 클래스로 만드는 것보다는 namespace로 만드는 것이 더 적합하다.

```ts
export namespace Shapes {
  type Point = {
    x: number;
    y: number;
  };

  export type Color = "red" | "green" | "blue";

  export class Triangle {
    /* ... */
  }

  export class Square {
    /* ... */
  }
}
```

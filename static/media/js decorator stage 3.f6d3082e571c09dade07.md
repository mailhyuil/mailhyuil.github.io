# decorator stage 3

> Decorator 패턴 처럼 메소드를 감싼다.
>
> > 데코레이터가 여러개 있을 때 밑에서부터 실행된다
> >
> > 데코레이터는 감싸는 거기때문에 가장 위에 있는게 가장 밖을 감싸고 있다
> >
> > 따라서 가장 나중에 실행됨
> >
> > > typescript는 experimentalDecorators 옵션을 true로 하면 stage 2 명세를 사용하고
> > > false로 하면 기본으로 stage 3 명세를 사용한다.

## 데코레이터 생성

> TypeScript Decorators extension 사용하여 쉽게 정의

```ts
export type DecoratableFunction = (...args: any[]) => any;

export function Log(func: DecoratableFunction, context?: ClassMethodDecoratorContext): void | DecoratableFunction {
  return function (this: object, ...args: any[]): any {
    const originReturn = func.call(this, ...args);

    console.info(`${String(context?.name)} returned : ${JSON.stringify(originReturn)}`);

    return originReturn;
  };
}
```

# decorator stage 2

> Decorator 패턴 처럼 메소드를 감싼다.
>
> > 데코레이터가 여러개 있을 때 밑에서부터 실행된다
> >
> > 데코레이터는 감싸는 거기때문에 가장 위에 있는게 가장 밖을 감싸고 있다
> >
> > 따라서 가장 나중에 실행됨
> >
> > > typescript는 experimentalDecorators 옵션을 true로 하면 stage 2 명세를 사용하고
> > >
> > > false로 하면 기본으로 stage 3 명세를 사용한다.

## tsconfig.json

> decorator는 실험적 기능이라서 사용을 위해서 tsconfig.json에 설정 추가

```json
"--experimentalDecorators":true
```

## 데코레이터 생성

> TypeScript Decorators extension 사용하여 쉽게 정의

### ClassDecorator

```ts
/**
 * Comment
 *
 * @returns {ClassDecorator}
 */
export function ClassDecoratorName(): ClassDecorator {
  return function <TFunction extends Function>(target: TFunction): TFunction {
    return null;
  };
}
```

### MethodDecorator

```ts
/**
 * Comment
 *
 * @returns {MethodDecorator}
 */
export function MethodDecoratorName(): MethodDecorator {
  return function (target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor): PropertyDescriptor {
    return null;
  };
}
```

### ParameterDecorator

```ts
/**
 * Comment
 *
 * @returns {PropertyDecorator}
 */
export function ParameterDecoratorName(target: any, methodKey: string | symbol, parameterIndex: number) {}
```

### ParameterDecorator with parmas

```ts
/**
 * Comment
 *
 * @returns {PropertyDecorator}
 */
export function ParameterDecoratorName(listOfParams) {
  return function (target: any, methodKey: string | symbol, parameterIndex: number) {};
}
```

### PropertyDecorator

```ts
/**
 * Comment
 *
 * @returns {PropertyDecorator}
 */
export function PropertyDecoratorName(): PropertyDecorator {
  return function (target: Object, propertyKey: string | symbol) {};
}
```

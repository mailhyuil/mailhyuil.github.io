# decorator

> java의 어노테이션과 같은 기능
>
> > angular팀이 요청해서 만든 기능

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
  return function (
    target: any,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor
  ): PropertyDescriptor {
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
export function ParameterDecoratorName(
  target: any,
  methodKey: string | symbol,
  parameterIndex: number
) {}
```

### ParameterDecorator with parmas

```ts
/**
 * Comment
 *
 * @returns {PropertyDecorator}
 */
export function ParameterDecoratorName(listOfParams) {
  return function (
    target: any,
    methodKey: string | symbol,
    parameterIndex: number
  ) {};
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

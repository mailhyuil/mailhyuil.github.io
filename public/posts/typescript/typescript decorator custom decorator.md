# typescript custom decorator

> descriptor를 인자로 받는 function

## 기본 데코레이터

```ts
function CustomDecorator(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    // before logic...
    const result = originalMethod.apply(this, args);
    // after logic...
    return result;
  };
  return descriptor;
}
```

## 매개변수를 받는 데코레이터

> 함수를 한번 감싸기

```ts
export function CustomDecorator(arg?: any) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
      // before logic...
      const result = originalMethod.apply(this, args);
      // after logic...
      return result;
    };
    return descriptor;
  };
}
```

## 여러 데코레이터를 한번에 적용하기

```ts
function first() {
  console.log("first(): factory evaluated");
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("first(): called");
  };
}

function second() {
  console.log("second(): factory evaluated");
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("second(): called");
  };
}

class ExampleClass {
  @first()
  @second()
  method() {}
}
```

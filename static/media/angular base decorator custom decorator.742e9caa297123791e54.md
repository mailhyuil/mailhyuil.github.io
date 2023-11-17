# angular base decorator custom decorator

> 함수를 한번 감싸기
>
> > angular built-in 데코레이터와 함께 사용시 정상 작동을 안할 수 있으니 주의

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

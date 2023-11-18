# nest custom decorator

```ts
export function custom() {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    // 원래 함수를 저장해두고
    const originalMethod = descriptor.value;

    // 원래 함수를 감싸서 새로운 value로 넣기
    descriptor.value = function (...args: any[]) {
      console.log("Hello Decorator");
      // before logic...
      const result = originalMethod.apply(this, args);
      // after logic...
      return result;
    };
    return descriptor;
  };
}
```

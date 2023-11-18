# angular base decorator custom decorator

> 함수를 한번 감싸기
>
> > angular built-in 데코레이터와 함께 사용시 정상 작동을 안할 수 있으니 주의

## class decorator

> target만 받기
>
> > Object.defineProperty를 통해 prototype에 property 추가

```ts
export function ClassDecorator(arg?: any) {
  return function (target: any) {
    console.log("Hello from Decorator");

    Object.defineProperty(target.prototype, "property1", {
      value: 100,
      writable: false,
    });

    Object.defineProperty(target.prototype, "property2", {
      value: 200,
      writable: false,
    });
  };
}
```

```ts
export function custom() {
  return function (target: any) {
    // getUsers 함수의 descriptor를 가져온다.
    const descriptor = Object.getOwnPropertyDescriptor(target.prototype, "getUsers");
    if (!descriptor) throw new Error("메소드가 없습니다.");

    // 원래 함수를 저장해두고
    const originalMethod = descriptor.value;

    // 원래 함수를 감싸서 새로운 value로 넣기
    descriptor.value = async function (...args: any[]) {
      // before logic...
      const result = await originalMethod.apply(this, args);
      // after logic...
      result.push({
        id: "id",
        username: "username",
        password: "password",
      });
      return result;
    };

    // 새로운 descriptor로 덮어쓰기
    Object.defineProperty(target.prototype, "getUsers", descriptor);
  };
}
```

## method decorator

> target, propertyKey, descriptor를 받는다.

```ts
export function MethodDecorator(arg?: any) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    // 원래 함수를 저장해두고
    const originalMethod = descriptor.value;

    // 원래 함수를 감싸서 새로운 value로 넣기
    descriptor.value = function (...args: any[]) {
      // before logic...
      const result = originalMethod.apply(this, args);
      // after logic...
      return result;
    };
    return descriptor;
  };
}

// async
export function custom() {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    // 원래 함수를 저장해두고
    const originalMethod = descriptor.value;

    // 원래 함수를 감싸서 새로운 value로 넣기
    descriptor.value = async function (...args: any[]) {
      // before logic...
      const result = await originalMethod.apply(this, args); // Promise<User>[]
      // after logic...
      result.push({
        id: "id",
        username: "username",
        password: "password",
      });
      return result;
    };
    return descriptor;
  };
}
```

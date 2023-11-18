# nest custom decorator

## ClassDecorator

```ts
export function custom() {
  return function (target: any) {
    // field 변수 수정
    Object.defineProperty(target.prototype, "property1", {
      value: 100,
      writable: false,
    });
    Object.defineProperty(target.prototype, "property2", {
      value: 200,
      writable: false,
    });

    // 메소드 수정
    // getUsers 함수의 descriptor를 가져온다.
    const descriptor = Object.getOwnPropertyDescriptor(target.prototype, "getUsers");
    if (!descriptor) throw new Error("메소드가 없습니다.");

    // 원래 함수를 저장해두고
    const originalMethod = descriptor.value;

    // 원래 함수를 감싸서 새로운 value로 넣기
    descriptor.value = async function (...args: any[]) {
      // 여기서 this는 클래스의 인스턴스를 가리킨다. ex) 사용 예 this.httpService

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

## MethodDecorator

```ts
export function custom() {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    // 원래 함수를 저장해두고
    const originalMethod = descriptor.value;

    // 원래 함수를 감싸서 새로운 value로 넣기
    descriptor.value = function (...args: any[]) {
      // 여기서 this는 클래스의 인스턴스를 가리킨다. ex) 사용 예 this.httpService

      // before logic...
      const result = originalMethod.apply(this, args);
      // after logic...
      return result;
    };
    return descriptor;
  };
}
```

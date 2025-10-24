# typescript decorator custom decorator

> @Function을 사용하면 인자로 Constructor를 받는다.
>
> > Constructor의 prototype을 통해서 prototype에 접근하여 해당 클래스나 함수 프로퍼티를 수정할 수 있다.
> >
> > > descriptor를 인자로 받는 function

## class decorator

> target만 받기
>
> > Object.defineProperty를 통해 prototype에 property 추가

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
      // 여기서 this는 클래스의 인스턴스를 가리킨다. (e.g. 사용 예 this.httpService)

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

## field decorator

> field 값은 런타임에 정해지기 때문에 getter 나 setter가 호출되는 시점에 값에 접근할 수 있다.

```ts
export function CustomFieldDecorator() {
  return function (target: any, propertyKey: string) {
    let currentValue = target[propertyKey];
    Object.defineProperty(target, propertyKey, {
      get: () => currentValue,
      set: (newValue: string) => {
        if (!newValue) {
          throw new Error(`${propertyKey} is required.`);
        }
        currentValue = newValue;
      },
    });
  };
}
```

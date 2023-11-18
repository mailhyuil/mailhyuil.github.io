# typescript decorator reflect-metadata

> 데코레이터 사용 시 메타데이터를 심어서 사용할 수 있다.

## install

```sh
npm i reflect-metadata
```

## 사용

```ts
import "reflect-metadata";

// Define a decorator
function MyDecorator(metadata: string) {
  return function (target: any, propertyKey: string) {
    Reflect.defineMetadata("my-decorator", metadata, target, propertyKey);
  };
}

class MyClass {
  @MyDecorator("some metadata")
  myMethod() {}
}

// Retrieve the metadata for the decorator
const metadata = Reflect.getMetadata("my-decorator", MyClass.prototype, "myMethod");
console.log(metadata); // "some metadata"
```

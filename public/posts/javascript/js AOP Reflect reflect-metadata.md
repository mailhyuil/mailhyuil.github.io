# typescript decorator reflect-metadata

> javascript의 Reflect API를 수정하여 메타 데이터를 저장할 수 있게 해주는 라이브러리
>
> > 메타 데이터를 저장할 인터널 슬롯을 추가하고 여기에 접근할 수 있는 Reflect API를 추가하는 것이다.

## install

```sh
npm i reflect-metadata
```

## 사용

```ts
import "reflect-metadata";

// 메타데이터를 받아서 저장하는 데코레이터
function MyDecorator(metadata: string) {
  return function (target: any, propertyKey: string) {
    Reflect.defineMetadata("my-decorator", metadata, target, propertyKey);
  };
}

// 메타데이터를 저장
class MyClass {
  @MyDecorator("some metadata")
  myMethod() {}
}

// getMetadata를 통해 Class.prototype.propertyKey에 저장된 메타데이터를 가져온다.
const metadata = Reflect.getMetadata("my-decorator", MyClass.prototype, "myMethod");
console.log(metadata); // "some metadata"
```

# x DI angular & nestjs

> component, provider, controller.. 에 필요한 "바뀔 수 있는" 의존성의 인터페이스를 정의하고, Injection하여 사용하기

## interface

```ts
export interface ISomeProvider {
  doSomething(): void;
}
```

## component, provider, controller...

```ts
import { Inject, Injectable } from "@nestjs/common";
import { ISomeProvider } from "./some.interface";

@Injectable()
export class DoSomethingService {
  constructor(@Inject("SomeProvider") private readonly someProvider: ISomeProvider) {}
  gonnaDoSomething() {
    this.someProvider.doSomething();
  }
}
```

## module

```ts
import { Module } from "@nestjs/common";

@Module({
  providers: [
    {
      provide: "SomeProvider",
      useClass: MySomeProvider,
    },
  ],
  exports: ["SomeProvider"],
})
export class SomeModule {}
```

## interface 구현

```ts
import { Injectable } from "@nestjs/common";

@Injectable()
export class MySomeProvider implements ISomeProvider {
  doSomething() {
    console.log("Do Mah Thing");
  }
}
```

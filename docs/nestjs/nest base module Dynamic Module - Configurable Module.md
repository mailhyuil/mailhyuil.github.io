# nest base module Dynamic Module - Configurable Module

> register: import 할때마다 다른 설정을 하고싶을 때
>
> forRoot: 한번 import하고 계속 같은 설정을 사용하고 싶을 때 (global: true 로 설정해줘야한다!)
>
> forFeature: 한번 import하고 계속 같은 설정을 하되 조금 바꾸고 싶을 때

## 직접 만들기

> token은 다른 파일에 정의해야한다!

## some.token.ts

```ts
export const SOME_MODULE_OPTIONS = Symbol("SOME_MODULE_OPTIONS");
export type SomeModuleOptions = {};
```

## some.module.ts

```ts
import { DynamicModule, Module } from "@nestjs/common";
import { SomeService } from "./some.service";
import { SOME_MODULE_OPTIONS, SomeModuleOptions } from "./some.token";

@Module({})
export class SomeModule {
  static forRoot(options: SomeModuleOptions): DynamicModule {
    return {
      global: true,
      module: SomeModule,
      providers: [
        {
          provide: SOME_MODULE_OPTIONS,
          useValue: options,
        },
        SomeService,
      ],
      exports: [SomeService],
    };
  }
}
```

## Builder를 사용하기

```ts
import { ConfigurableModuleBuilder } from "@nestjs/common";
import { SOME_MODULE_OPTIONS, SomeModuleOptions } from "./some.token";

export const {
  ConfigurableModuleClass: SomeModule,
  MODULE_OPTIONS_TOKEN: SomeModuleOptionsToken,
  OPTIONS_TYPE: SomeModuleOptionsType,
  ASYNC_OPTIONS_TYPE: SomeModuleAsyncOptionsType,
} = new ConfigurableModuleBuilder<SomeModuleOptions>()
  // setClassMethodName: register by default
  .setClassMethodName("forRoot")
  // setFactoryMethodName: useClass로 사용되는 Class에 들어가는 FactoryMethod의 이름
  .setFactoryMethodName("createConfigOptions")
  // setExtras: when your module may need to take extra options that determine how it is supposed to behave
  .setExtras(
    {
      isGlobal: true, // forRoot와 forFeature의 동작방식으로 사용할 수 있다.
    },
    (definition, extras) => ({
      ...definition,
      global: extras.isGlobal,
    }),
  )
  .build();
```

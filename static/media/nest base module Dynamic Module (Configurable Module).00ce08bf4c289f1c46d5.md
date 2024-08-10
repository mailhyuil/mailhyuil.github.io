# nestjs base Dynamic Module (Configurable Module)

## 직접 만들기

> register: import 할때마다 다른 설정을 하고싶을 때
>
> forRoot: 한번 import하고 계속 같은 설정을 사용하고 싶을 때
>
> forFeature: 한번 import하고 계속 같은 설정을 하되 조금 바꾸고 싶을 때

```ts
import { DynamicModule, Module } from "@nestjs/common";
import { ConfigService } from "./config.service";

@Module({})
export class ConfigModule {
  static register(options: Record<string, any>): DynamicModule {
    return {
      module: ConfigModule,
      providers: [
        {
          provide: "CONFIG_OPTIONS",
          useValue: options,
        },
        ConfigService,
      ],
      exports: [ConfigService],
    };
  }
}
```

## Builder를 사용하기

```ts
import { ConfigurableModuleBuilder } from "@nestjs/common";

export type ConfigModuleOptions = {};

export const {
  ConfigurableModuleClass: SomeModule,
  MODULE_OPTIONS_TOKEN: SomeOptionsToken,
  OPTIONS_TYPE: SomeOptionsType,
  ASYNC_OPTIONS_TYPE: SomeAsyncOptionsType,
} = new ConfigurableModuleBuilder<ConfigModuleOptions>()
  // setClassMethodName: register by default
  .setClassMethodName("forRoot")
  // setFactoryMethodName: useClass로 사용되는 Class에 들어가는 FactoryMethod의 이름
  .setFactoryMethodName("createConfigOptions")
  // setExtras: when your module may need to take extra options that determine how it is supposed to behave
  .setExtras(
    {
      isGlobal: true,
    },
    (definition, extras) => ({
      ...definition,
      global: extras.isGlobal,
    })
  )
  .build();
```

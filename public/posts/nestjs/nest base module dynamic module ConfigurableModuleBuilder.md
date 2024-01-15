# nest base module dynamic module ConfigurableModuleBuilder

> nestjs의 DI를 dynamic module config에 사용하는 dynamic module을 생성하는건 까다롭다.
>
> > (e.g. provider를 inject, global로 설정 ...)
> >
> > > nestjs에서 dynamic module을 생성해주는 ConfigurableModuleBuilder를 제공

```ts
export const { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN, OPTIONS_TYPE, ASYNC_OPTIONS_TYPE } =
  new ConfigurableModuleBuilder<ConfigModuleOptions>().setClassMethodName().setExtras().setFactoryMethodName().build();
```

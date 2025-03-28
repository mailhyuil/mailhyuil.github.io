# module

> module에 다른 모듈을 import하여 사용
>
> > controller, provider를 등록, import, export
> >
> > > module 클래스 내에는 lifecycle hooks나 middleware를 등록

## basic

```ts
@Module({
  imports: [],
  controllers: [],
  providers: [],
  exports: [],
})
export class SomeModule {}
```

## 전역 모듈

> @Global() 데코레이터
>
> > 루트모듈이나 코어모듈에서 한번만 등록해야한다.

```ts
@Global()
ConfigModule.forRoot({
  envFilePath,
  isGlobal: true,
}),
```

## 동적 모듈 (Dynamic Module)

> 런타임 시 동적으로 값을 설정하는 모듈 (e.g. config)
>
> > register(), forRoot(), forFeature() 메소드는 동적모듈을 반환하는 메소드

```ts
@Module({
  imports: [DynamicModule.forRoot()],
})
export class SomeModule {}
```

## Custom Dynamic Module

```ts
@Module({})
export class SomeModule {
  static register(options: SomeOptions): DynamicModule {
    return {
      module: SomeModule,
      providers: [
        {
          provide: SOME_OPTIONS,
          useValue: options,
        },
      ],
    };
  }
}
```

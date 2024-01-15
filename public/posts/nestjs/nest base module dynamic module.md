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

## some.service.ts

```ts
@Injectable()
export class SomeService {
  constructor(@Inject(SOME_OPTIONS) private readonly options: SomeOptions) {}
}
```

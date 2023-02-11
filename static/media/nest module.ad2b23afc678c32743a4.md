# module

> app.module에 다른 모듈을 import하여 사용
>
> > app.module은 appController, appService만 있어야한다

## basic

```
@Module({
  imports: [],
  controllers: [],
  providers: [],
  exports: []
})
export class SomeModule {}
```

## 전역 모듈

> @Global() 데코레이터
>
> > 루트모듈이나 코어모듈에서 한번만 등록해야한다.

```
@Global()
ConfigModule.forRoot({
  envFilePath,
  isGlobal: true,
}),
```

## 동적 모듈

> 런타임 시 동적으로 값을 설정하는 모듈 ex) config
>
> > register(), forRoot(), forFeature() 메소드는 동적모듈을 반환하는 메소드

```
@Module({
  imports: [DynamicModule.forRoot()],
})
export class SomeModule {}
```

---

## app.module.ts

```ts
@Module({
  imports: [MovieModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
```

## movies.module.ts

```ts
@Module({
  controllers: [MoviesController],
  providers: [MoviesService],
})
export class MovieModule {}
```

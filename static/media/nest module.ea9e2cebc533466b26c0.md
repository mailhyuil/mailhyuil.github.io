# module

> app.module에 다른 모듈을 import하여 사용
>
> > app.module은 appController, appService만 있어야한다

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

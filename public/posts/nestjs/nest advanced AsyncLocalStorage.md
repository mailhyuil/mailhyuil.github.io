# nest advanced AsyncLocalStorage

> nodejs의 async_hooks를 사용하여 request context를 저장하고 사용
>
> > 다른 언어의 thread-local storage와 비슷한 기능을 제공
> >
> > thread-local storage는 thread마다 별도의 저장소를 가지고 있어서, thread가 바뀌어도 저장된 데이터를 사용할 수 있음
> >
> > async-local storage는 request마다 별도의 저장소를 가지고 있어서, request가 바뀌어도 저장된 데이터를 사용할 수 있음
> >
> > > REQUEST-scoped providers의 대안으로 사용 가능

## als.module.ts

```ts
import { AsyncLocalStorage } from "async_hooks";

@Module({
  providers: [
    {
      provide: AsyncLocalStorage,
      useValue: new AsyncLocalStorage(),
    },
  ],
  exports: [AsyncLocalStorage],
})
export class AlsModule {}
```

## middleware에서 request의 데이터 저장

```ts
import { AlsModule } from './als.module';

@Module({
  imports: [AlsModule]
  providers: [CatService],
  controllers: [CatController],
})
export class AppModule implements NestModule {
  constructor(
    private readonly als: AsyncLocalStorage
  ) {}

  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply((req, res, next) => {
        const store = {
          userId: req.headers['x-user-id'],
        };
        // 이 안에서 발생하는 모든 비동기 작업은 store를 사용할 수 있음
        this.als.run(store, () => next());
      })
      .forRoutes('*');
  }
}
```

## usage

```ts
@Injectable()
export class CatService {
  constructor(private readonly als: AsyncLocalStorage, private readonly catRepository: CatRepository) {}

  getCatForUser() {
    const store = this.als.getStore(); // return store
    const userId = store.userId;
    return this.catRepository.getForUser(userId);
  }
}
```

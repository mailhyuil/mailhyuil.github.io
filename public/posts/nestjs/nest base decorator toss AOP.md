# nest decorator toss AOP

## install

```sh
npm i @toss/nestjs-aop
```

## app module

```ts
@Module({
  imports: [AopModule],
})
export class AppModule {}
```

## usage

```ts
export const CACHE_DECORATOR = Symbol("CACHE_DECORATOR");
export const Cache = (options: CacheOptions) => createDecorator(CACHE_DECORATOR, options);

@Aspect(CACHE_DECORATOR) // 생성한 토큰 넣기
export class CacheDecorator implements LazyDecorator<any, CacheOptions> {
  constructor(private readonly cache: Cache) {}

  wrap({ method, metadata: options }: WrapParams<any, CacheOptions>) {
    // wrap 메소드에 로직 작성
    return (...args: any) => {
      let cachedValue = this.cache.get(...args);
      if (!cachedValue) {
        cachedValue = method(...args);
        this.cache.set(cachedValue, ...args);
      }
      return cachedValue;
    };
  }
}
```

## controller

```ts
export class SomeService {
  @Cache({
    // ...options(metadata value)
  })
  some() {
    // ...
  }
}
```

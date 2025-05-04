# nest decorator toss AOP

## install

```sh
npm i @toss/nestjs-aop
```

## app module

```ts
import { AopModule } from "@toss/nestjs-aop";

@Module({
  imports: [AopModule],
})
export class AppModule {}
```

## usage

```ts
export const CACHE_DECORATOR = Symbol("CACHE_DECORATOR");

@Aspect(CACHE_DECORATOR)
export class CacheDecorator implements LazyDecorator<any, CacheOptions> {
  constructor(private readonly cache: Cache) {}

  wrap(params: WrapParams<any, CacheOptions>) {
    return (...args: any) => {
      // before
      const res = params.method(...args); // 원래 메소드 실행
      // after
      return res;
    };
  }
}

export const Cache = (options: CacheOptions) => createDecorator(CACHE_DECORATOR, options);
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

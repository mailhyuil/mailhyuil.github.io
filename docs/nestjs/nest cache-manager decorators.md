# nest cache in-memory

> 전체 함수를 감싸는 캐싱에는 코드를 직접 건드리기보다 Decorator를 사용하여 AOP를 적용하는 것이 좋다.

```ts
@Get("id")
@UseInterceptors(CacheInterceptor)
@CacheTTL(5)
@CacheKey("key")
function find() {
  return this.service.find();
}
```

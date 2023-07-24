# HttpClient Test

> SpyObj를 생성해서 사용

```ts
let httpClientSpy: jasmine.SpyObj<HttpClient>;
httpClientSpy = jasmine.createSpyObj("HttpClient", ["get"]);
heroService = new HeroService(httpClientSpy);
```

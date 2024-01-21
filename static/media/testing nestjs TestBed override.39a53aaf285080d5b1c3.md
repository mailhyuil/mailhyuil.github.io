# nest testing overrideProvider

```ts
const moduleRef = await Test.createTestingModule({
  imports: [AppModule],
})
  // JwtAuthGuard를 MockAuthGuard로 대체
  .overrideProvider()
  .useClass()
  .overrideGuard()
  .useClass()
  .overrideFilter()
  .useClass()
  .overrideInterceptor()
  .useClass()
  .overridePipe()
  .useClass()
  .compile();
```

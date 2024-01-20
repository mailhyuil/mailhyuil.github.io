# nest testing overrideProvider

```ts
const moduleRef = await Test.createTestingModule({
  imports: [AppModule],
})
  // JwtAuthGuard를 MockAuthGuard로 대체
  .overrideProvider(JwtAuthGuard)
  .useClass(MockAuthGuard)
  .compile();
```

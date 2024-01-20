# nest testing overrideModule

```ts
const moduleRef = await Test.createTestingModule({
  imports: [AppModule],
})
  // AppModule의 CatsModule을 AlternateCatsModule로 대체
  .overrideModule(CatsModule)
  .useModule(AlternateCatsModule)
  .compile();
```

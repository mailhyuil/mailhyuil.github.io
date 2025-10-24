# testing nestjs TestBed

## providers를 사용

```ts
const moduleRef = await Test.createTestingModule({
  providers: [
    PostService,
    {
      provide: PrismaService,
      useValue: db,
    },
  ],
}).compile();
```

## override를 사용

> 모듈을 전체 import한 한 후, 특정 일부 provider들 만 override하는 방법

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

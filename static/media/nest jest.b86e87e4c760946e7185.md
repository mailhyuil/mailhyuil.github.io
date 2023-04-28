# Jest

> javascript의 테스트 도구
>
> > _._.spec.ts 파일

## unit test

> 함수 단위로 테스트
>
> > describe() 함수 내에 작성
> >
> > > beforeEach, beforeAll, afterEach, afterAll로 초기화 및 후속작업

```ts
describe("MoviesService", () => {
  let service: MoviesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoviesService],
    }).compile();

    service = module.get<MoviesService>(MoviesService);
  });

  it("should be defined", () => {
    // individual test
    expect(service).toBeDefined();
  });
});
```

## e2e test

> endpoint 단위로 테스트

```ts
describe("AppController (e2e)", () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it("/ (GET)", () => {
    return request(app.getHttpServer())
      .get("/")
      .expect(200)
      .expect("Hello World!");
  });
});
```

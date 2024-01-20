## nest testing unit test

> 함수 단위로 테스트
>
> > describe() 함수 내에 작성
> >
> > > beforeEach, beforeAll, afterEach, afterAll로 초기화 및 후속작업

```ts
describe("MoviesService", () => {
  let service: MoviesService;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      providers: [MoviesService],
    }).compile();

    service = moduleRef.get<MoviesService>(MoviesService);
  });

  it("should be defined", () => {
    // individual test
    expect(service).toBeDefined();
  });
});
```

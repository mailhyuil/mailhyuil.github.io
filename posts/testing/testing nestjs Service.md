# nest testing service

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

# nest testing service

```ts
describe("TestService", () => {
  let service: TestService;
  let prisma: PrismaService;
  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      providers: [TestService, PrismaService],
    }).compile();

    service = moduleRef.get<TestService>(TestService);
    prisma = moduleRef.get(PrismaService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });

  it("should return all tests", async () => {
    const mock: Test[] = [
      {
        id: 1,
      },
      {
        id: 2,
      },
    ];

    prisma.test.findMany = jest.fn().mockReturnValue(mock);
    const found = await service.findAll();

    expect(found).toBe(mock);
  });
});
```

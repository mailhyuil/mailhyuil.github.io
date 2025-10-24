# testing nestjs automock lib

## install

```sh
# jest
npm i -D @automock/jest
npm i -D @automock/adapters.nestjs

# sinon
npm i -D @automock/sinon
npm i -D @automock/adapters.nestjs
```

## usage

```ts
import { TestBed } from "@automock/jest";

describe("Cats Service Unit Test", () => {
  let catsService: CatsService;
  let database: jest.Mocked<Database>;

  beforeAll(() => {
    const { unit, unitRef } = TestBed.create(CatsService).compile();

    catsService = unit;
    database = unitRef.get(Database);
  });

  it("should retrieve cats from the database", async () => {
    const mockCats: Cat[] = [
      { id: 1, name: "Catty" },
      { id: 2, name: "Mitzy" },
    ];
    database.getCats.mockResolvedValue(mockCats);

    const cats = await catsService.getAllCats();

    expect(database.getCats).toHaveBeenCalled();
    expect(cats).toEqual(mockCats);
  });
});
```

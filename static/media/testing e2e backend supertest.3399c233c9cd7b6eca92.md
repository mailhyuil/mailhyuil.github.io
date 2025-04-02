# nest testing e2e backend supertest

> endpoint 단위로 테스트
>
> > app.getHttpServer()를 통해 http server를 가져온다.

## install

```sh
npm i -D supertest
npm i -D @types/supertest
```

# testing

```ts
import request from "supertest";
import { Test } from "@nestjs/testing";
import { ExampleModule } from "./example/example.module";
import { ExampleService } from "./example/example.service";
import { INestApplication } from "@nestjs/common";

describe("Example", () => {
  let app: INestApplication;
  let exampleService = { findAll: (): ExampleDTO[] => [{ id: "1" }, { id: "2" }] };

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [ExampleModule],
    })
      .overrideProvider(ExampleService)
      .useValue(exampleService)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it(`/GET examples`, () => {
    return request(app.getHttpServer()).get("/examples").expect(200).expect(exampleService.findAll());
  });

  afterAll(async () => {
    await app.close();
  });
});
```

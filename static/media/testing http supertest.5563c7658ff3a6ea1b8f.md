# supertest

> http test

## install

```sh
npm i -D supertest
```

## usage

```js
import request from "supertest";

describe("GET /user", () => {
  it("responds with json", (done) => {
    request(app).get("/user").set("Accept", "application/json").expect("Content-Type", /json/).expect(200, done);
  });
});
```

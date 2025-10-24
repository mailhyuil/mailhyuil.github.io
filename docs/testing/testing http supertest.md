# testing http supertest

> superagent 라이브러리로 구현한 http testing 라이브러리

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

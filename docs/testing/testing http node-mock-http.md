# testing http node-mock-http

> request, response mock을 만들어준다.

```sh
npm i -D node-mock-http
```

## usage

```js
const httpMocks = require("node-mocks-http");

it("should handle expressjs requests", () => {
  const mockExpressRequest = httpMocks.createRequest({
    method: "GET",
    url: "/user/42",
    params: {
      id: 42,
    },
  });

  const mockExpressResponse = httpMocks.createResponse();

  routeHandler(request, response);

  const data = response._getJSONData();
  test.equal("Bob Dog", data.name);
  test.equal(42, data.age);
  test.equal("bob@dog.com", data.email);

  test.equal(200, response.statusCode);
  test.ok(response._isEndCalled());
  test.ok(response._isJSON());
  test.ok(response._isUTF8());

  test.done();
});
```
